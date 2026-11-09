import React from "react";
import { interpolate, Easing } from "remotion";
import { theme } from "../theme";

/** 0..1 progress between two frames, clamped, eased. */
export const ramp = (
  frame: number,
  from: number,
  to: number,
  ease: (t: number) => number = Easing.inOut(Easing.quad),
) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  opacity?: number;
}> = ({ x1, y1, x2, y2, color = theme.accent, width = 10, opacity = 1 }) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = width * 3;
  const p1 = `${x2 - h * Math.cos(a - 0.5)},${y2 - h * Math.sin(a - 0.5)}`;
  const p2 = `${x2 - h * Math.cos(a + 0.5)},${y2 - h * Math.sin(a + 0.5)}`;
  return (
    <g opacity={opacity}>
      <line
        x1={x1}
        y1={y1}
        x2={x2 - (h / 2) * Math.cos(a)}
        y2={y2 - (h / 2) * Math.sin(a)}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
      />
      <polygon points={`${x2},${y2} ${p1} ${p2}`} fill={color} />
    </g>
  );
};

export const Label: React.FC<{
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  color?: string;
  opacity?: number;
  anchor?: "start" | "middle" | "end";
}> = ({
  x,
  y,
  children,
  size = 44,
  color = theme.text,
  opacity = 1,
  anchor = "middle",
}) => (
  <text
    x={x}
    y={y}
    fontFamily={theme.font}
    fontWeight={800}
    fontSize={size}
    fill={color}
    textAnchor={anchor}
    opacity={opacity}
  >
    {children}
  </text>
);

/** A soft glow behind something important. */
export const Glow: React.FC<{
  cx: number;
  cy: number;
  r: number;
  color: string;
  opacity?: number;
}> = ({ cx, cy, r, color, opacity = 0.5 }) => (
  <circle
    cx={cx}
    cy={cy}
    r={r}
    fill={color}
    opacity={opacity}
    style={{ filter: `blur(${r / 3}px)` }}
  />
);

/** Big red X used for "doesn't work" beats. */
export const Cross: React.FC<{
  cx: number;
  cy: number;
  size?: number;
  opacity?: number;
}> = ({ cx, cy, size = 120, opacity = 1 }) => (
  <g
    opacity={opacity}
    stroke={theme.red}
    strokeWidth={22}
    strokeLinecap="round"
  >
    <line
      x1={cx - size / 2}
      y1={cy - size / 2}
      x2={cx + size / 2}
      y2={cy + size / 2}
    />
    <line
      x1={cx + size / 2}
      y1={cy - size / 2}
      x2={cx - size / 2}
      y2={cy + size / 2}
    />
  </g>
);

export const Check: React.FC<{
  cx: number;
  cy: number;
  size?: number;
  opacity?: number;
}> = ({ cx, cy, size = 120, opacity = 1 }) => (
  <polyline
    opacity={opacity}
    points={`${cx - size / 2},${cy} ${cx - size / 8},${cy + size / 3} ${cx + size / 2},${cy - size / 3}`}
    fill="none"
    stroke={theme.green}
    strokeWidth={22}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Svg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
    {children}
  </svg>
);
