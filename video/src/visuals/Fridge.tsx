import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Extruded } from "../components/Extruded";
import { Glow, Label, Svg, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type FridgeState =
  | "ship"
  | "lake"
  | "icehouse"
  | "map"
  | "fridge"
  | "coils";

const ICE = "#BFE6FF";

const Ship: React.FC<{ frame: number }> = ({ frame }) => {
  const bob = Math.sin(frame / 10) * 8;
  return (
    <g transform={`translate(0 ${bob})`}>
      <Glow cx={860} cy={600} r={110} color="#FFB020" opacity={0.6} />
      <circle cx={860} cy={600} r={70} fill="#FFC94A" />
      <path d="M 200 1000 L 880 1000 L 800 1120 L 280 1120 Z" fill="#6B4A2E" />
      <rect x={530} y={640} width={14} height={360} fill="#4B3420" />
      <path d="M 545 660 L 760 960 L 545 960 Z" fill="#E8E8EC" />
      <Extruded
        x={300}
        y={900}
        w={180}
        h={100}
        fill={ICE}
        depth={20}
        radius={8}
      />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M ${120 + i * 300 - (frame % 60) * 2} 1150 q 40 -24 80 0 t 80 0`}
          fill="none"
          stroke="#4FA3FF"
          strokeWidth={8}
        />
      ))}
    </g>
  );
};

export const Fridge: React.FC<{ state: FridgeState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  if (state === "ship")
    return (
      <Svg>
        <Ship frame={frame} />
      </Svg>
    );

  if (state === "lake") {
    const saw = Math.sin(frame / 3) * 30;
    const lift = ramp(frame, 60, 120);
    return (
      <Svg>
        <path
          d="M 120 1000 L 540 820 L 960 1000 L 540 1180 Z"
          fill={ICE}
          opacity={0.5}
        />
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={340 + i * 140}
            y1={920 + i * 20}
            x2={440 + i * 140}
            y2={1050 - i * 20}
            stroke="#7FB8DA"
            strokeWidth={6}
          />
        ))}
        <g transform={`translate(0 ${-lift * 160})`}>
          <Extruded
            x={480}
            y={960}
            w={150}
            h={80}
            fill={ICE}
            depth={20}
            radius={6}
          />
        </g>
        <line
          x1={640 + saw}
          y1={760}
          x2={600 + saw}
          y2={980}
          stroke="#9AA0AA"
          strokeWidth={14}
        />
      </Svg>
    );
  }

  if (state === "icehouse") {
    const fill = ramp(frame, 0, 60);
    return (
      <Svg>
        <path d="M 220 760 L 540 560 L 860 760 Z" fill="#6B4A2E" />
        <rect x={220} y={760} width={640} height={480} fill="#6B4A2E" />
        <rect x={270} y={800} width={540} height={400} fill="#C9A26B" />
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i} opacity={ramp(frame, i * 8, i * 8 + 12)}>
            <Extruded
              x={300 + (i % 3) * 170}
              y={880 + Math.floor(i / 3) * 150}
              w={140}
              h={110}
              fill={ICE}
              depth={14}
              radius={6}
            />
          </g>
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={280 + ((i * 53) % 520)}
            cy={810 + ((i * 97) % 380)}
            r={5}
            fill="#8A6A3E"
            opacity={fill}
          />
        ))}
        <Label x={540} y={1290} size={40} color="#C9A26B" opacity={fill}>
          sawdust = insulation
        </Label>
      </Svg>
    );
  }

  if (state === "map") {
    const t = ramp(frame, 10, durationInFrames - 20);
    // Boston (left) to Calcutta (right) via the Cape of Good Hope, schematic.
    const path =
      "M 230 760 C 360 1000, 420 1220, 560 1240 C 700 1250, 760 1000, 860 880";
    return (
      <Svg>
        <path
          d={path}
          fill="none"
          stroke="#3A3F4B"
          strokeWidth={10}
          strokeDasharray="4 18"
          strokeLinecap="round"
        />
        <path
          d={path}
          fill="none"
          stroke={theme.accent}
          strokeWidth={10}
          pathLength={1}
          strokeDasharray={`${t} 1`}
          strokeLinecap="round"
        />
        <circle cx={230} cy={760} r={22} fill={theme.text} />
        <circle cx={860} cy={880} r={22} fill={theme.text} />
        <Label x={230} y={720} size={40}>
          Boston
        </Label>
        <Label x={860} y={840} size={40}>
          Calcutta
        </Label>
        <Label x={540} y={1300} size={40} color={theme.accent} opacity={t}>
          1833 · months at sea
        </Label>
      </Svg>
    );
  }

  // fridge / coils: modern fridge cutaway with the coolant loop
  const flow = (frame * 0.01) % 1;
  const warm = state === "coils" ? ramp(frame, 5, 30) : 0;
  return (
    <Svg>
      <Extruded
        x={330}
        y={560}
        w={420}
        h={720}
        fill="#E8E8EC"
        depth={26}
        radius={30}
      />
      <rect
        x={360}
        y={590}
        width={360}
        height={660}
        rx={18}
        fill="#CFE9FF"
        opacity={0.5}
      />
      <path
        d="M 400 640 L 680 640 L 680 1200 L 820 1200 L 820 640"
        fill="none"
        stroke="#4FA3FF"
        strokeWidth={14}
        pathLength={1}
        strokeDasharray="0.06 0.06"
        strokeDashoffset={-flow}
      />
      <path
        d="M 800 620 L 840 620 L 840 1220 L 800 1220"
        fill="none"
        stroke={warm > 0 ? theme.red : "#9AA0AA"}
        strokeWidth={16}
      />
      {warm > 0 && (
        <Glow
          cx={840}
          cy={920}
          r={150}
          color={theme.red}
          opacity={0.5 * warm}
        />
      )}
      <Label
        x={520}
        y={560 - 40}
        size={36}
        color="#4FA3FF"
        opacity={state === "fridge" ? 1 : 0}
      >
        soaks up heat inside
      </Label>
      <Label x={860} y={1300} size={36} color={theme.red} opacity={warm}>
        dumps it out the back
      </Label>
    </Svg>
  );
};
