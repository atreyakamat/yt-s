import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

const CHUNK = 3;

/** Word-by-word captions: shows 3 words at a time and highlights the one being spoken. */
export const Captions: React.FC<{ vo: string; accent: string }> = ({
  vo,
  accent,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const words = vo.split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;

  // Spread words evenly across the scene, leaving a short tail.
  const speakFrames = Math.max(1, durationInFrames - Math.round(fps * 0.2));
  const current = Math.min(
    words.length - 1,
    Math.floor((frame / speakFrames) * words.length),
  );
  const start = Math.floor(current / CHUNK) * CHUNK;
  const chunk = words.slice(start, start + CHUNK);

  return (
    <div
      style={{
        position: "absolute",
        top: 1330,
        left: 90,
        right: 140,
        textAlign: "center",
        fontFamily: theme.font,
        fontWeight: 800,
        fontSize: 64,
        color: theme.text,
        textShadow: "0 4px 16px rgba(0,0,0,0.8)",
      }}
    >
      {chunk.map((w, i) => (
        <span
          key={start + i}
          style={{
            color: start + i === current ? accent : theme.text,
            marginRight: 18,
          }}
        >
          {w}
        </span>
      ))}
    </div>
  );
};
