import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

const CHUNK = 3;

/**
 * Word-by-word captions, Shorts style: 3 words at a time, the spoken word in the accent colour with a small pop.
 * Timing follows the real voice when tools/voiceover.py recorded it (`voDur`): words are spread over the time the
 * line is actually spoken, weighted by word length, so long words stay up longer. Without it, the scene length is used.
 */
export const Captions: React.FC<{ vo: string; accent: string; voDur?: number }> = ({ vo, accent, voDur }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const words = vo.split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;

  const speakFrames = Math.max(
    1,
    voDur ? Math.min(durationInFrames, Math.round(voDur * fps)) : durationInFrames - Math.round(fps * 0.2),
  );
  // Each word's share of the line: longer words (and numbers) take longer to say.
  const weight = words.map((w) => 2 + w.replace(/[^\p{L}\p{N}]/gu, "").length + (/\d/.test(w) ? 4 : 0));
  const total = weight.reduce((a, b) => a + b, 0);
  const starts: number[] = [];
  let acc = 0;
  for (const w of weight) {
    starts.push((acc / total) * speakFrames);
    acc += w;
  }
  let current = 0;
  for (let i = 0; i < words.length; i++) if (frame >= starts[i]) current = i;
  const start = Math.floor(current / CHUNK) * CHUNK;
  const chunk = words.slice(start, start + CHUNK);
  const pop = spring({ frame: frame - Math.round(starts[current]), fps, config: { damping: 14, stiffness: 260 } });

  return (
    <div
      style={{
        position: "absolute",
        top: 1320,
        left: 80,
        right: 140,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: 30,
        rowGap: 4,
        fontFamily: theme.font,
        fontWeight: 900,
        fontSize: 72,
        lineHeight: 1.15,
        color: theme.text,
        textShadow: "0 4px 18px rgba(0,0,0,0.85)",
      }}
    >
      {chunk.map((w, i) => {
        const on = start + i === current;
        return (
          <span
            key={start + i}
            style={{
              display: "inline-block",
              color: on ? accent : theme.text,
              transform: on ? `scale(${1 + 0.08 * pop})` : undefined,
              transformOrigin: "center bottom",
              opacity: start + i > current ? 0.55 : 1,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
