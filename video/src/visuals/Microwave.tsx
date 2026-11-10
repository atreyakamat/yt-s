import React from "react";
import { useCurrentFrame } from "remotion";
import { Extruded } from "../components/Extruded";
import { Glow, Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type MicrowaveState =
  | "mesh"
  | "magnetron"
  | "molecules"
  | "heat"
  | "wave-vs-hole"
  | "light";

const Mesh: React.FC<{ zoom: number }> = ({ zoom }) => (
  <g transform={`translate(540 900) scale(${zoom}) translate(-540 -900)`}>
    <rect x={160} y={560} width={760} height={680} rx={30} fill="#1E2128" />
    {Array.from({ length: 17 * 15 }).map((_, i) => (
      <circle
        key={i}
        cx={200 + (i % 17) * 42 + (Math.floor(i / 17) % 2) * 21}
        cy={600 + Math.floor(i / 17) * 42}
        r={13}
        fill="#0B0B0F"
      />
    ))}
  </g>
);

/** Microwave oven cut open: box, magnetron in the corner, waves bouncing inside. */
const Oven: React.FC<{ frame: number; waves: number }> = ({ frame, waves }) => (
  <g>
    <Extruded
      x={140}
      y={620}
      w={800}
      h={520}
      fill="#3A3F4B"
      depth={30}
      radius={24}
    />
    <rect x={180} y={660} width={540} height={440} rx={16} fill="#15171C" />
    <Extruded
      x={760}
      y={680}
      w={140}
      h={140}
      fill="#E0A526"
      depth={12}
      radius={12}
    />
    <Label x={830} y={870} size={30} color={theme.accent}>
      magnetron
    </Label>
    {waves > 0 &&
      [0, 1, 2].map((i) => {
        const x = 720 - ((frame * 8 + i * 180) % 540);
        return (
          <path
            key={i}
            d={`M ${x} 760 q 20 -40 40 0 t 40 0 t 40 0`}
            fill="none"
            stroke={theme.accent}
            strokeWidth={8}
            opacity={waves}
            transform={`translate(0 ${i * 120})`}
          />
        );
      })}
    <ellipse cx={450} cy={1060} rx={160} ry={26} fill="#5B6270" />
  </g>
);

/** A water molecule: big oxygen, two small hydrogens. */
const Water: React.FC<{ x: number; y: number; angle: number; hot: number }> = ({
  x,
  y,
  angle,
  hot,
}) => (
  <g transform={`translate(${x} ${y}) rotate(${angle})`}>
    <circle cx={0} cy={0} r={34} fill={hot > 0.5 ? theme.red : "#4FA3FF"} />
    <circle cx={-34} cy={26} r={18} fill="#E8E8EC" />
    <circle cx={34} cy={26} r={18} fill="#E8E8EC" />
  </g>
);

export const Microwave: React.FC<{ state: MicrowaveState }> = ({ state }) => {
  const frame = useCurrentFrame();

  if (state === "mesh")
    return (
      <Svg>
        <Mesh zoom={lerp(1.3, 1, ramp(frame, 0, 20))} />
      </Svg>
    );
  if (state === "magnetron")
    return (
      <Svg>
        <Oven frame={frame} waves={ramp(frame, 15, 30)} />
      </Svg>
    );

  if (state === "molecules" || state === "heat") {
    const flip = Math.sin(frame / 2.2) > 0 ? 1 : -1; // field direction flips fast
    const hot = state === "heat" ? ramp(frame, 20, 120) : 0;
    return (
      <Svg>
        {state === "heat" && (
          <Glow
            cx={540}
            cy={900}
            r={330}
            color={theme.red}
            opacity={0.35 * hot}
          />
        )}
        {Array.from({ length: 12 }).map((_, i) => {
          const jitter = state === "heat" ? Math.sin(frame * 1.7 + i) * 12 : 0;
          return (
            <Water
              key={i}
              x={260 + (i % 4) * 190 + jitter}
              y={640 + Math.floor(i / 4) * 210 + jitter}
              angle={flip * 90 + i * 7}
              hot={hot}
            />
          );
        })}
        {state === "molecules" && (
          <Label x={540} y={1260} size={44} color={theme.accent}>
            field flips {flip > 0 ? "→" : "←"}
          </Label>
        )}
      </Svg>
    );
  }

  if (state === "wave-vs-hole") {
    const x = lerp(-200, 380, ramp(frame, 0, 60));
    const bounce = frame > 60 ? -ramp(frame, 60, 110) * 300 : 0;
    return (
      <Svg>
        <rect x={500} y={600} width={60} height={640} fill="#1E2128" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={500}
            y={640 + i * 90}
            width={60}
            height={14}
            fill="#0B0B0F"
          />
        ))}
        <path
          d={`M ${x + bounce} 920 q 60 -120 120 0 t 120 0`}
          fill="none"
          stroke={theme.accent}
          strokeWidth={14}
        />
        <Label x={260} y={800} size={40} color={theme.accent}>
          wave ≈ 12 cm
        </Label>
        <Label x={780} y={800} size={40} color={theme.muted}>
          holes ≈ 1 mm
        </Label>
      </Svg>
    );
  }

  // light: tiny light waves slip straight through the holes
  return (
    <Svg>
      <rect x={500} y={600} width={60} height={640} fill="#1E2128" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={500}
          y={640 + i * 90}
          width={60}
          height={14}
          fill="#0B0B0F"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const x = ((frame * 14 + i * 60) % 900) + 80;
        return (
          <path
            key={i}
            d={`M ${x} ${647 + i * 90} q 6 -8 12 0 t 12 0 t 12 0`}
            fill="none"
            stroke="#FFF4B0"
            strokeWidth={5}
          />
        );
      })}
      <Label x={540} y={1300} size={44} color="#FFF4B0">
        light gets through
      </Label>
    </Svg>
  );
};
