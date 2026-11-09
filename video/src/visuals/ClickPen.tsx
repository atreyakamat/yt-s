import React from "react";
import { useCurrentFrame } from "remotion";
import { Extruded } from "../components/Extruded";
import { Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type ClickPenState =
  | "click"
  | "parts"
  | "push-twist"
  | "locked"
  | "released"
  | "spin";

const C = {
  barrel: "#2F6FDE",
  ink: "#E8E8EC",
  spring: "#8A93A3",
  cam: "#E0A526",
  plunger: "#C9CED6",
};

/** Rotating cam drawn as a cylinder with diagonal ridges; `turn` 0..1 = one ridge step. */
const Cam: React.FC<{ x: number; y: number; turn: number }> = ({
  x,
  y,
  turn,
}) => (
  <g>
    <defs>
      <clipPath id="cam-clip">
        <rect x={x - 45} y={y - 60} width={90} height={120} rx={14} />
      </clipPath>
    </defs>
    <rect x={x - 45} y={y - 60} width={90} height={120} rx={14} fill={C.cam} />
    <g clipPath="url(#cam-clip)">
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
        const off = ((i + turn) * 36) % 252;
        return (
          <line
            key={i}
            x1={x - 45 + off}
            y1={y - 60}
            x2={x - 45 + off - 40}
            y2={y + 60}
            stroke="#A9761A"
            strokeWidth={10}
          />
        );
      })}
    </g>
  </g>
);

const Spring: React.FC<{ x: number; top: number; bottom: number }> = ({
  x,
  top,
  bottom,
}) => {
  const n = 12;
  const pts = Array.from(
    { length: n + 1 },
    (_, i) => `${x + (i % 2 ? -30 : 30)},${top + ((bottom - top) * i) / n}`,
  );
  return (
    <polyline
      points={pts.join(" ")}
      fill="none"
      stroke={C.spring}
      strokeWidth={7}
    />
  );
};

/** Vertical cutaway pen: button on top, cam, ink tube, spring, tip at the bottom. */
const Pen: React.FC<{
  press: number;
  turn: number;
  tipOut: number;
  exploded: number;
}> = ({ press, turn, tipOut, exploded }) => {
  const e = exploded * 60;
  const inkY = lerp(760, 830, tipOut);
  return (
    <g>
      <rect
        x={440}
        y={520}
        width={200}
        height={760}
        rx={90}
        fill={C.barrel}
        opacity={0.18}
      />
      <rect
        x={440}
        y={520}
        width={200}
        height={760}
        rx={90}
        fill="none"
        stroke={C.barrel}
        strokeWidth={8}
      />
      {/* button / plunger */}
      <Extruded
        x={500}
        y={470 + press * 40 - e * 2}
        w={80}
        h={110}
        fill={C.plunger}
        depth={10}
        radius={14}
      />
      <Cam x={540} y={650 + press * 30 - e} turn={turn} />
      {/* ink tube + tip */}
      <rect x={515} y={inkY + e} width={50} height={420} rx={14} fill={C.ink} />
      <polygon
        points={`${515},${inkY + 420 + e} ${565},${inkY + 420 + e} ${540},${inkY + 480 + e}`}
        fill="#5B6270"
      />
      <Spring x={540} top={inkY + 300 + e * 2} bottom={1230 + e * 2} />
      {exploded > 0 && (
        <g opacity={exploded}>
          <Label x={700} y={540} size={34} anchor="start">
            button
          </Label>
          <Label x={700} y={660} size={34} anchor="start" color={theme.accent}>
            cam
          </Label>
          <Label x={700} y={900} size={34} anchor="start">
            ink
          </Label>
          <Label x={700} y={1180} size={34} anchor="start">
            spring
          </Label>
        </g>
      )}
    </g>
  );
};

export const ClickPen: React.FC<{ state: ClickPenState }> = ({ state }) => {
  const frame = useCurrentFrame();

  let press = 0;
  let turn = 0;
  let tipOut = 0;
  let exploded = 0;
  if (state === "click")
    press = frame < 10 ? ramp(frame, 0, 5) : 1 - ramp(frame, 10, 16);
  if (state === "parts") exploded = ramp(frame, 5, 30);
  if (state === "push-twist") {
    press = ramp(frame, 10, 40);
    turn = ramp(frame, 25, 70) * 0.5;
    tipOut = ramp(frame, 10, 40);
  }
  if (state === "locked") {
    turn = 0.5 + ramp(frame, 0, 20) * 0.5;
    tipOut = 1;
  }
  if (state === "released") {
    press = frame < 40 ? ramp(frame, 0, 20) : 1 - ramp(frame, 40, 60);
    turn = 1 + ramp(frame, 10, 50);
    tipOut = 1 - ramp(frame, 50, 80);
  }
  if (state === "spin") {
    const clicks = Math.floor(frame / 12);
    press = frame % 12 < 6 ? 1 : 0;
    turn = clicks + ramp(frame % 12, 0, 6);
    tipOut = clicks % 2;
  }

  return (
    <Svg>
      <Pen press={press} turn={turn} tipOut={tipOut} exploded={exploded} />
      {(state === "locked" || state === "released") && (
        <Label
          x={540}
          y={1300}
          size={44}
          color={state === "locked" ? theme.accent : theme.green}
        >
          {state === "locked"
            ? "ridges on the ledge: tip out"
            : "drops into slot: tip in"}
        </Label>
      )}
    </Svg>
  );
};
