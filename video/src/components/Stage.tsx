import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Camera for every scene's visual:
 *  - a quick slide-and-settle entrance so each cut feels intentional (skipped on the first scene: frame 1 must
 *    already show the object),
 *  - a slow push-in across the scene so nothing is ever static,
 *  - an optional base zoom so the generic templates fill more of the frame.
 * Scaling is centred on the visual area (x 515, y 910), clear of the top text and the captions.
 */
export const Stage: React.FC<{ children: React.ReactNode; first: boolean; zoom?: number }> = ({
  children,
  first,
  zoom = 1,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const enter = first ? 1 : interpolate(frame, [0, 9], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const push = interpolate(frame, [0, Math.max(1, durationInFrames)], [1, 1.035]);
  const scale = zoom * push * (0.94 + 0.06 * enter);
  const dy = (1 - enter) * 70;
  return (
    <AbsoluteFill
      style={{
        opacity: first ? 1 : Math.min(1, enter * 1.4),
        transform: `translateY(${dy}px) scale(${scale})`,
        transformOrigin: "515px 910px",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
