import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme } from "../theme";

/**
 * Dark stage with slow motion in it: two soft glows tinted with the reel's accent drift around the object, a faint
 * dot grid scrolls upward, and a vignette pulls the eye to the centre. Subtle on purpose: it should feel alive, not busy.
 */
export const Background: React.FC<{ accent?: string }> = ({ accent = theme.accent }) => {
  const frame = useCurrentFrame();
  const t = frame / 30;
  const g1x = 50 + Math.sin(t * 0.35) * 14;
  const g1y = 46 + Math.cos(t * 0.27) * 8;
  const g2x = 50 + Math.cos(t * 0.22) * 18;
  const g2y = 60 + Math.sin(t * 0.31) * 7;
  const gridShift = (frame * 0.6) % 48;
  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, ${theme.glow} 0%, ${theme.bg} 64%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${g1x}% ${g1y}%, ${accent}26 0%, transparent 34%),
            radial-gradient(circle at ${g2x}% ${g2y}%, #0A84FF1A 0%, transparent 30%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 2px, transparent 2.5px)",
          backgroundSize: "48px 48px",
          backgroundPosition: `0px ${-gridShift}px`,
          maskImage: "radial-gradient(circle at 50% 48%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 48%, black 0%, transparent 70%)",
        }}
      />
      <AbsoluteFill
        style={{
          background: "radial-gradient(circle at 50% 48%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
