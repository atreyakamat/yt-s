import React from "react";
import { useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { Extruded } from "../components/Extruded";
import { Arrow, Label, Svg, lerp, ramp } from "../components/Shapes";
import { shade, theme } from "../theme";

export type ZipperState =
  | "race"
  | "tunnel"
  | "teeth"
  | "interlock"
  | "sideways"
  | "wedge"
  | "ykk";

const CX = 540;
const TOOTH_W = 46;
const TOOTH_H = 24;
const PITCH = 30; // vertical distance between alternating teeth
const TOP = 560;
const BOTTOM = 1290;
const C = {
  tooth: "#C9CED6",
  tape: "#2F5D9E",
  slider: "#8A93A3",
  channel: "#15171C",
};

/** Teeth rows: meshed below the slider, spreading apart above it. */
const Rows: React.FC<{ sy: number; shake: number }> = ({ sy, shake }) => {
  const teeth: React.ReactNode[] = [];
  for (let y = TOP, k = 0; y < BOTTOM; y += PITCH, k++) {
    const left = k % 2 === 0;
    const above = sy - 90 - y; // distance above the slider mouth
    const spread = above > 0 ? Math.min(140, above * 0.45) : 0;
    const meshX = left ? CX - 14 : CX + 14;
    const x =
      meshX +
      (left ? -spread : spread) +
      (above <= 0 ? (left ? -shake : shake) : 0);
    teeth.push(
      <Extruded
        key={k}
        x={x - TOOTH_W / 2}
        y={y}
        w={TOOTH_W}
        h={TOOTH_H}
        fill={C.tooth}
        depth={6}
        radius={6}
      />,
    );
  }
  // Fabric tapes follow the teeth.
  const tape = (side: -1 | 1) => {
    const pts: string[] = [];
    for (let y = TOP; y <= BOTTOM; y += 20) {
      const above = sy - 90 - y;
      const spread = above > 0 ? Math.min(140, above * 0.45) : 0;
      pts.push(`${CX + side * (40 + spread + (above <= 0 ? shake : 0))},${y}`);
    }
    for (let y = BOTTOM; y >= TOP; y -= 20) {
      const above = sy - 90 - y;
      const spread = above > 0 ? Math.min(140, above * 0.45) : 0;
      pts.push(`${CX + side * (170 + spread + (above <= 0 ? shake : 0))},${y}`);
    }
    return <polygon points={pts.join(" ")} fill={C.tape} />;
  };
  return (
    <g>
      {tape(-1)}
      {tape(1)}
      {teeth}
    </g>
  );
};

const Slider: React.FC<{
  sy: number;
  cut: number;
  wedgeGlow: number;
  letters: boolean;
}> = ({ sy, cut, wedgeGlow, letters }) => (
  <g>
    {/* Y-shaped channel, visible when the slider is cut open */}
    <g opacity={cut}>
      <path
        d={`M ${CX - 70} ${sy - 100} L ${CX - 16} ${sy + 10} L ${CX - 16} ${sy + 95} L ${CX + 16} ${sy + 95} L ${CX + 16} ${sy + 10} L ${CX + 70} ${sy - 100}`}
        fill="none"
        stroke={theme.accent}
        strokeWidth={10}
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 12px ${theme.accent})` }}
      />
      <polygon
        points={`${CX - 22},${sy - 100} ${CX + 22},${sy - 100} ${CX},${sy - 10}`}
        fill={wedgeGlow > 0 ? theme.accent : "#5B6270"}
        opacity={0.6 + 0.4 * wedgeGlow}
      />
    </g>
    <g opacity={1 - cut * 0.8}>
      <Extruded
        x={CX - 95}
        y={sy - 110}
        w={190}
        h={210}
        fill={C.slider}
        depth={16}
        radius={22}
      />
      <rect
        x={CX - 30}
        y={sy + 70}
        width={60}
        height={150}
        rx={30}
        fill={shade(C.slider, -0.15)}
      />
      {letters && (
        <text
          x={CX}
          y={sy + 20}
          textAnchor="middle"
          fontFamily={theme.font}
          fontWeight={900}
          fontSize={64}
          fill={theme.bg}
        >
          YKK
        </text>
      )}
    </g>
  </g>
);

/** Close-up of a single tooth: bump on top, hollow underneath. */
const ToothMacro: React.FC<{ frame: number }> = ({ frame }) => {
  const slide = ramp(frame, 60, 150);
  const tooth = (x: number, y: number) => (
    <g>
      <Extruded
        x={x}
        y={y}
        w={300}
        h={150}
        fill={C.tooth}
        depth={30}
        radius={24}
      />
      <ellipse
        cx={x + 150}
        cy={y - 8}
        rx={70}
        ry={30}
        fill={shade(C.tooth, 0.3)}
      />
      <ellipse cx={x + 150} cy={y + 150} rx={70} ry={30} fill={C.channel} />
    </g>
  );
  return (
    <g>
      {tooth(390, 640)}
      <g transform={`translate(0 ${lerp(220, 150 + 8, slide)})`}>
        {tooth(390, 640)}
      </g>
      <Label
        x={720}
        y={640}
        size={42}
        color={theme.accent}
        anchor="start"
        opacity={ramp(frame, 10, 25)}
      >
        bump
      </Label>
      <Label
        x={720}
        y={810}
        size={42}
        color={theme.muted}
        anchor="start"
        opacity={ramp(frame, 25, 40)}
      >
        hollow
      </Label>
    </g>
  );
};

export const Zipper: React.FC<{ state: ZipperState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = ramp(frame, 0, durationInFrames - 1);

  if (state === "teeth")
    return (
      <Svg>
        <ToothMacro frame={frame} />
      </Svg>
    );

  let sy = 900;
  let cut = 0;
  let shake = 0;
  let wedge = 0;
  let zoom = 1;
  if (state === "race")
    sy = lerp(
      1250,
      760,
      ramp(frame, 0, durationInFrames - 1, Easing.out(Easing.cubic)),
    );
  if (state === "tunnel") cut = ramp(frame, 0, 20);
  if (state === "interlock") {
    cut = 1;
    sy = lerp(1150, 820, t);
  }
  if (state === "sideways") {
    sy = 620;
    shake = Math.max(0, Math.sin(frame / 4)) * 10 * (frame > 15 ? 1 : 0);
  }
  if (state === "wedge") {
    cut = 1;
    wedge = 1;
    sy = lerp(760, 1150, t);
  }
  if (state === "ykk")
    zoom = lerp(1, 1.4, ramp(frame, 0, 40, Easing.out(Easing.cubic)));

  return (
    <Svg>
      <defs>
        <clipPath id="zip-area">
          <rect x={0} y={480} width={1080} height={820} />
        </clipPath>
      </defs>
      <g clipPath="url(#zip-area)">
        <g
          transform={`translate(${CX} ${sy}) scale(${zoom}) translate(${-CX} ${-sy})`}
        >
          <Rows sy={sy} shake={shake} />
          <Slider
            sy={sy}
            cut={cut}
            wedgeGlow={wedge}
            letters={state === "ykk"}
          />
        </g>
      </g>
      {state === "sideways" && (
        <g>
          <Arrow
            x1={330}
            y1={1100}
            x2={150 - shake}
            y2={1100}
            color={theme.red}
          />
          <Arrow
            x1={750}
            y1={1100}
            x2={930 + shake}
            y2={1100}
            color={theme.red}
          />
        </g>
      )}
      {state === "interlock" && (
        <Label
          x={CX}
          y={1270}
          size={40}
          color={theme.accent}
          opacity={ramp(frame, 30, 50)}
        >
          bump drops into hollow
        </Label>
      )}
    </Svg>
  );
};
