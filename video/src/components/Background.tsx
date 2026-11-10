import React from "react";
import { AbsoluteFill } from "remotion";
import { theme } from "../theme";

export const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(circle at 50% 52%, ${theme.glow} 0%, ${theme.bg} 62%)`,
    }}
  />
);
