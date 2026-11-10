import React from "react";
import { shade } from "../theme";

type Props = {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  depth?: number;
  radius?: number;
  opacity?: number;
  stroke?: string;
};

/** A box drawn as a front face plus a lighter top face and darker side face: cheap, clean pseudo-3D. */
export const Extruded: React.FC<Props> = ({ x, y, w, h, fill, depth = 18, radius = 6, opacity = 1, stroke }) => {
  const d = depth;
  return (
    <g opacity={opacity}>
      <polygon points={`${x},${y} ${x + d},${y - d} ${x + w + d},${y - d} ${x + w},${y}`} fill={shade(fill, 0.25)} />
      <polygon points={`${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y + h - d} ${x + w},${y + h}`} fill={shade(fill, -0.35)} />
      <rect x={x} y={y} width={w} height={h} rx={radius} fill={fill} stroke={stroke} strokeWidth={stroke ? 3 : 0} />
    </g>
  );
};
