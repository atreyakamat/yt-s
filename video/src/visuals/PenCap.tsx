import React from "react";
import { useCurrentFrame } from "remotion";
import { Extruded } from "../components/Extruded";
import { Label, Svg, ramp, lerp } from "../components/Shapes";
import { theme } from "../theme";

export type PenCapState = "hook" | "chew" | "airway" | "standard";

const BLUE = "#2F6FDE";

/** Pen cap seen from the side, with the hole near the top. */
const Cap: React.FC<{
  x: number;
  y: number;
  s?: number;
  ring?: number;
  bite?: number;
}> = ({ x, y, s = 1, ring = 0, bite = 0 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <Extruded
      x={-60}
      y={-200}
      w={120}
      h={400}
      fill={BLUE}
      depth={20}
      radius={50}
    />
    <rect x={60} y={-160} width={26} height={240} rx={10} fill="#1E4FB0" />
    <circle cx={0} cy={-150} r={16} fill={theme.bg} />
    <circle
      cx={0}
      cy={-150}
      r={44}
      fill="none"
      stroke={theme.red}
      strokeWidth={10}
      opacity={ring}
    />
    {bite > 0 &&
      [0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M ${-55 + i * 34} 200 q 17 -26 34 0`}
          fill={theme.bg}
          opacity={bite}
        />
      ))}
  </g>
);

const Particles: React.FC<{
  frame: number;
  x: number;
  y0: number;
  y1: number;
}> = ({ frame, x, y0, y1 }) => (
  <g>
    {Array.from({ length: 10 }).map((_, i) => {
      const span = Math.abs(y1 - y0);
      const p = y0 - ((frame * 6 + i * (span / 10)) % span); // rises from y0 toward y1
      return (
        <circle
          key={i}
          cx={x + Math.sin((p + i) / 30) * 10}
          cy={p}
          r={9}
          fill="#7FD1FF"
          opacity={0.85}
        />
      );
    })}
  </g>
);

export const PenCap: React.FC<{ state: PenCapState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const pulse = 0.6 + 0.4 * Math.sin(frame / 5);

  if (state === "hook")
    return (
      <Svg>
        <Cap x={540} y={900} s={1.4} ring={pulse} />
      </Svg>
    );

  if (state === "chew")
    return (
      <Svg>
        <Cap x={540} y={900} s={1.2} bite={ramp(frame, 20, 40)} />
        <Label
          x={540}
          y={1250}
          size={48}
          color={theme.muted}
          opacity={ramp(frame, 40, 60)}
        >
          chewed → swallowed
        </Label>
      </Svg>
    );

  if (state === "airway") {
    // Simplified airway tube, cap stuck inside, air still flowing through the hole.
    const drop = lerp(560, 860, ramp(frame, 0, 40));
    return (
      <Svg>
        <path
          d="M 400 480 L 400 1280 M 680 480 L 680 1280"
          stroke="#E07A8A"
          strokeWidth={26}
          strokeLinecap="round"
        />
        <rect
          x={413}
          y={480}
          width={254}
          height={800}
          fill="#E07A8A"
          opacity={0.12}
        />
        <Cap x={540} y={drop} s={0.9} />
        {frame > 45 && <Particles frame={frame} x={540} y0={1250} y1={480} />}
        <Label
          x={540}
          y={1300}
          size={44}
          color="#7FD1FF"
          opacity={ramp(frame, 50, 70)}
        >
          air flows through the hole
        </Label>
      </Svg>
    );
  }

  // standard: a document stamped with the safety standard
  const stamp = ramp(frame, 15, 25);
  return (
    <Svg>
      <Extruded
        x={300}
        y={560}
        w={480}
        h={620}
        fill="#E8E8EC"
        depth={20}
        radius={18}
      />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={350}
          y={630 + i * 60}
          width={i % 3 === 2 ? 260 : 380}
          height={18}
          rx={9}
          fill="#B9BDC6"
        />
      ))}
      <g
        transform={`translate(540 960) rotate(-12) scale(${lerp(1.6, 1, stamp)})`}
        opacity={stamp}
      >
        <rect
          x={-200}
          y={-60}
          width={400}
          height={120}
          rx={16}
          fill="none"
          stroke={theme.red}
          strokeWidth={10}
        />
        <text
          textAnchor="middle"
          y={20}
          fontFamily={theme.font}
          fontWeight={900}
          fontSize={60}
          fill={theme.red}
        >
          ISO 11540
        </text>
      </g>
      <Cap x={850} y={1150} s={0.5} ring={ramp(frame, 30, 45) * pulse} />
    </Svg>
  );
};
