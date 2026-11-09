import React from "react";
import { useCurrentFrame } from "remotion";
import { Cross, Glow, Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type TouchscreenState =
  | "glove"
  | "layers"
  | "field"
  | "finger"
  | "xy"
  | "glove-block";

const PHONE = { x: 330, y: 560, w: 420, h: 760 };
const GRID_X = [390, 470, 550, 630, 710];
const GRID_Y = [640, 740, 840, 940, 1040, 1140, 1240];
const TOUCH = { x: 550, y: 940 };

const Phone: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <g>
    <rect
      x={PHONE.x - 16}
      y={PHONE.y - 16}
      width={PHONE.w + 32}
      height={PHONE.h + 32}
      rx={64}
      fill="#2A2E37"
    />
    <rect
      x={PHONE.x}
      y={PHONE.y}
      width={PHONE.w}
      height={PHONE.h}
      rx={50}
      fill="#101218"
    />
    {children}
  </g>
);

const Grid: React.FC<{ glow: number; drain: number }> = ({ glow, drain }) => (
  <g opacity={glow}>
    {GRID_X.map((x) => (
      <line
        key={`v${x}`}
        x1={x}
        y1={PHONE.y + 40}
        x2={x}
        y2={PHONE.y + PHONE.h - 40}
        stroke="#4FA3FF"
        strokeWidth={6}
      />
    ))}
    {GRID_Y.map((y) => (
      <line
        key={`h${y}`}
        x1={PHONE.x + 30}
        y1={y}
        x2={PHONE.x + PHONE.w - 30}
        y2={y}
        stroke="#4FA3FF"
        strokeWidth={6}
      />
    ))}
    {GRID_X.flatMap((x) =>
      GRID_Y.map((y) => {
        const hit = x === TOUCH.x && y === TOUCH.y;
        return (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={hit ? 14 + 10 * drain : 10}
            fill={hit && drain > 0 ? theme.accent : "#7FD1FF"}
          />
        );
      }),
    )}
  </g>
);

/** Fingertip coming in from the right; gloved = grey. */
const Finger: React.FC<{ x: number; y: number; gloved: boolean }> = ({
  x,
  y,
  gloved,
}) => (
  <g>
    <rect
      x={x - 45}
      y={y}
      width={90}
      height={Math.max(90, 1290 - y)}
      rx={45}
      fill={gloved ? "#5B6270" : "#E9B48A"}
    />
    {!gloved && <ellipse cx={x} cy={y + 40} rx={28} ry={20} fill="#F4CFB0" />}
  </g>
);

export const Touchscreen: React.FC<{ state: TouchscreenState }> = ({
  state,
}) => {
  const frame = useCurrentFrame();

  if (state === "layers") {
    const t = ramp(frame, 0, 40);
    const layer = (i: number, fill: string, label: string) => (
      <g
        transform={`translate(${lerp(0, -60 + i * 60, t)} ${lerp(0, -260 + i * 260, t)}) skewY(-12)`}
      >
        <rect
          x={330}
          y={760}
          width={420}
          height={260}
          rx={28}
          fill={fill}
          opacity={0.9}
        />
        <Label x={780} y={900} size={36} anchor="start" opacity={t}>
          {label}
        </Label>
      </g>
    );
    return (
      <Svg>
        {layer(2, "#101218", "display")}
        {layer(1, "#4FA3FF", "invisible grid")}
        {layer(0, "rgba(255,255,255,0.35)", "glass")}
      </Svg>
    );
  }

  if (state === "glove" || state === "glove-block") {
    const tap = Math.abs(Math.sin(frame / 8));
    return (
      <Svg>
        <Phone>
          {state === "glove-block" && <Grid glow={0.6} drain={0} />}
        </Phone>
        <Finger x={TOUCH.x} y={lerp(TOUCH.y + 10, TOUCH.y + 70, tap)} gloved />
        <Cross cx={820} cy={640} size={110} opacity={ramp(frame, 15, 25)} />
      </Svg>
    );
  }

  const glow = state === "field" ? ramp(frame, 0, 25) : 1;
  const approach = state === "finger" ? ramp(frame, 0, 60) : 1;
  const drain =
    state === "finger" ? ramp(frame, 50, 90) : state === "xy" ? 1 : 0;
  return (
    <Svg>
      <Phone>
        <Grid glow={glow} drain={drain} />
        {state === "field" && (
          <Glow
            cx={540}
            cy={940}
            r={260}
            color="#4FA3FF"
            opacity={0.25 * glow}
          />
        )}
      </Phone>
      {state !== "field" && (
        <Finger
          x={TOUCH.x}
          y={lerp(TOUCH.y + 380, TOUCH.y + 20, approach)}
          gloved={false}
        />
      )}
      {state === "finger" && drain > 0 && (
        <Glow
          cx={TOUCH.x}
          cy={TOUCH.y}
          r={70}
          color={theme.accent}
          opacity={0.6 * drain}
        />
      )}
      {state === "xy" && (
        <g opacity={ramp(frame, 5, 20)}>
          <line
            x1={PHONE.x}
            y1={TOUCH.y}
            x2={PHONE.x + PHONE.w}
            y2={TOUCH.y}
            stroke={theme.accent}
            strokeWidth={6}
            strokeDasharray="16 12"
          />
          <line
            x1={TOUCH.x}
            y1={PHONE.y}
            x2={TOUCH.x}
            y2={PHONE.y + PHONE.h}
            stroke={theme.accent}
            strokeWidth={6}
            strokeDasharray="16 12"
          />
          <Label
            x={820}
            y={TOUCH.y - 20}
            size={44}
            color={theme.accent}
            anchor="start"
          >
            x 3, y 4
          </Label>
        </g>
      )}
    </Svg>
  );
};
