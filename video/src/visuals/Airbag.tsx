import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Extruded } from "../components/Extruded";
import { Arrow, Glow, Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type AirbagState =
  | "freeze"
  | "sensor"
  | "igniter"
  | "gas"
  | "clock"
  | "vents";

const C = {
  car: "#3A3F4B",
  bag: "#F2F2F5",
  wheel: "#22252C",
  dummy: "#E0A526",
};

/** Side view of the car's front cabin: dashboard, steering wheel, crash sensor, dummy. */
const Cabin: React.FC<{
  bag: number;
  sensor: number;
  signal: number;
  lean: number;
}> = ({ bag, sensor, signal, lean }) => (
  <g>
    {/* car body */}
    <path
      d="M 90 1080 L 90 900 L 300 880 L 460 640 L 900 620 L 990 900 L 990 1080 Z"
      fill={C.car}
    />
    <Extruded
      x={90}
      y={1080}
      w={900}
      h={70}
      fill="#2A2E37"
      depth={14}
      radius={10}
    />
    <circle cx={260} cy={1160} r={70} fill={C.wheel} />
    <circle cx={820} cy={1160} r={70} fill={C.wheel} />
    {/* crash sensor in the front */}
    <rect
      x={110}
      y={960}
      width={60}
      height={40}
      rx={8}
      fill={sensor > 0 ? theme.red : "#5B6270"}
    />
    {sensor > 0 && (
      <Glow cx={140} cy={980} r={60} color={theme.red} opacity={0.5 * sensor} />
    )}
    {/* wire to the wheel */}
    <path
      d="M 170 980 L 420 980 L 470 860"
      fill="none"
      stroke="#5B6270"
      strokeWidth={8}
    />
    {signal > 0 && signal < 1 && (
      <circle
        cx={
          signal < 0.8
            ? lerp(170, 420, signal / 0.8)
            : lerp(420, 470, (signal - 0.8) / 0.2)
        }
        cy={signal < 0.8 ? 980 : lerp(980, 860, (signal - 0.8) / 0.2)}
        r={16}
        fill={theme.accent}
        style={{ filter: `drop-shadow(0 0 10px ${theme.accent})` }}
      />
    )}
    {/* steering wheel */}
    <line
      x1={470}
      y1={860}
      x2={420}
      y2={960}
      stroke={C.wheel}
      strokeWidth={22}
    />
    <ellipse
      cx={470}
      cy={850}
      rx={24}
      ry={80}
      fill={C.wheel}
      transform="rotate(-20 470 850)"
    />
    {/* airbag */}
    <ellipse
      cx={470 + 90 * bag}
      cy={820}
      rx={20 + 120 * bag}
      ry={30 + 130 * bag}
      fill={C.bag}
      opacity={bag > 0.02 ? 1 : 0}
    />
    {/* dummy */}
    <g transform={`translate(${lerp(0, -40, lean)} 0)`}>
      <circle cx={700} cy={720} r={55} fill={C.dummy} />
      <rect x={660} y={780} width={90} height={190} rx={30} fill={C.dummy} />
    </g>
  </g>
);

export const Airbag: React.FC<{ state: AirbagState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  if (state === "clock") {
    const fill = ramp(frame, 0, 40);
    return (
      <Svg>
        <Label x={160} y={700} size={48} anchor="start">
          Airbag
        </Label>
        <rect
          x={160}
          y={730}
          width={760 * 0.3 * fill}
          height={90}
          rx={14}
          fill={theme.accent}
        />
        <Label
          x={160 + 760 * 0.3 * fill + 20}
          y={795}
          size={48}
          color={theme.accent}
          anchor="start"
        >
          ~30 ms
        </Label>
        <Label x={160} y={960} size={48} anchor="start">
          Blink
        </Label>
        <rect
          x={160}
          y={990}
          width={760 * fill}
          height={90}
          rx={14}
          fill={theme.muted}
        />
        <Label
          x={160}
          y={1150}
          size={44}
          color={theme.muted}
          anchor="start"
          opacity={fill}
        >
          100+ ms
        </Label>
      </Svg>
    );
  }

  const sensor =
    state === "sensor"
      ? ramp(frame, 10, 20) * (0.6 + 0.4 * Math.sin(frame / 3))
      : 0;
  const signal =
    state === "igniter" ? ramp(frame, 10, durationInFrames - 30) : 0;
  const bag =
    state === "gas"
      ? ramp(frame, 15, 60)
      : state === "vents"
        ? lerp(1, 0.55, ramp(frame, 20, durationInFrames - 1))
        : 0;
  const lean =
    state === "freeze" ? 1 : state === "vents" ? ramp(frame, 0, 20) : 0;

  return (
    <Svg>
      <Cabin bag={bag} sensor={sensor} signal={signal} lean={lean} />
      {state === "freeze" && (
        <Label x={540} y={1260} size={56} color={theme.red}>
          IMPACT
        </Label>
      )}
      {state === "gas" && frame > 15 && frame < 60 && (
        <Glow cx={470} cy={830} r={90} color={theme.accent} opacity={0.4} />
      )}
      {state === "vents" && frame > 20 && (
        <g opacity={0.8}>
          <Arrow
            x1={560}
            y1={700}
            x2={620}
            y2={600}
            color="#BFC5CF"
            width={8}
          />
          <Arrow
            x1={560}
            y1={940}
            x2={620}
            y2={1030}
            color="#BFC5CF"
            width={8}
          />
        </g>
      )}
    </Svg>
  );
};
