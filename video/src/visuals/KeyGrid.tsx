import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

const COLS = 4;
const ROWS = 6;
const TOTAL = 7776; // 5 pins x 6 depths = 6^5

// Deterministic pseudo-random cut depths so every render is identical.
const depth = (k: number, pin: number) => ((k * 7 + pin * 13 + ((k * pin) % 5)) % 6) * 8;

const MiniKey: React.FC<{ k: number; color: string }> = ({ k, color }) => {
  const top = [0, 1, 2, 3, 4].map((p) => `${40 + p * 30},${20 + depth(k, p)} ${60 + p * 30},${20 + depth(k, p)}`).join(" ");
  return (
    <g>
      <circle cx={18} cy={45} r={22} fill={color} />
      <circle cx={18} cy={45} r={8} fill={theme.bg} />
      <polygon points={`36,70 36,24 ${top} 200,40 200,70`} fill={color} />
    </g>
  );
};

export const KeyGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const count = Math.round(interpolate(frame, [20, 110], [0, TOTAL], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <svg viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
      {Array.from({ length: COLS * ROWS }).map((_, k) => {
        const col = k % COLS;
        const row = Math.floor(k / COLS);
        const s = spring({ frame: frame - k * 2, fps, config: { damping: 12, stiffness: 160 } });
        const x = 120 + col * 220;
        const y = 470 + row * 100;
        return (
          <g key={k} transform={`translate(${x} ${y}) scale(${s})`} opacity={s}>
            <MiniKey k={k} color={k % 5 === 0 ? theme.accent : "#C9CED6"} />
          </g>
        );
      })}
      <text x={540} y={1170} textAnchor="middle" fontFamily={theme.font} fontWeight={900} fontSize={110} fill={theme.accent}>
        {count.toLocaleString("en-US")}
      </text>
      <text x={540} y={1225} textAnchor="middle" fontFamily={theme.font} fontWeight={600} fontSize={40} fill={theme.muted}>
        5 pins × 6 depths
      </text>
    </svg>
  );
};
