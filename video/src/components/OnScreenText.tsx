import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SAFE, theme } from "../theme";

export const OnScreenText: React.FC<{ text: string; highlight?: string; accent: string }> = ({ text, highlight, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (!text) return null;
  const pop = spring({ frame, fps, config: { damping: 12, stiffness: 180 } });
  const parts = highlight && text.includes(highlight) ? text.split(highlight) : [text];

  return (
    <div
      style={{
        position: "absolute",
        top: SAFE.top + 120,
        left: SAFE.side,
        right: SAFE.side,
        textAlign: "center",
        fontFamily: theme.font,
        fontWeight: 900,
        fontSize: 96,
        lineHeight: 1.05,
        letterSpacing: -1,
        color: theme.text,
        transform: `scale(${0.85 + 0.15 * pop})`,
        textShadow: "0 6px 24px rgba(0,0,0,0.6)",
      }}
    >
      {parts.length === 2 ? (
        <>
          {parts[0]}
          <span style={{ color: accent }}>{highlight}</span>
          {parts[1]}
        </>
      ) : (
        text
      )}
    </div>
  );
};
