import React from "react";
import { useCurrentFrame } from "remotion";
import { Extruded } from "../components/Extruded";
import { Glow, Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type CheckoutState =
  | "screen"
  | "loadcells"
  | "lookup"
  | "match"
  | "mismatch";

const Kiosk: React.FC<{ msg: string; color: string; flash: number }> = ({
  msg,
  color,
  flash,
}) => (
  <g>
    <Extruded
      x={240}
      y={560}
      w={600}
      h={420}
      fill="#2A2E37"
      depth={24}
      radius={28}
    />
    <rect
      x={280}
      y={600}
      width={520}
      height={340}
      rx={14}
      fill={color}
      opacity={0.25 + 0.6 * flash}
    />
    <foreignObject x={300} y={640} width={480} height={260}>
      <div
        style={{
          fontFamily: theme.font,
          fontWeight: 900,
          fontSize: 46,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        {msg}
      </div>
    </foreignObject>
  </g>
);

/** Bagging shelf with load cells underneath and a weight readout. */
const Shelf: React.FC<{
  cells: number;
  reading: string;
  readColor: string;
  item: number;
  extra: number;
}> = ({ cells, reading, readColor, item, extra }) => (
  <g>
    <Extruded
      x={180}
      y={1000}
      w={720}
      h={50}
      fill="#5B6270"
      depth={24}
      radius={10}
    />
    {[260, 540, 820].map((x) => (
      <g key={x}>
        <rect
          x={x - 40}
          y={1050}
          width={80}
          height={60}
          rx={8}
          fill={cells > 0 ? theme.accent : "#3A3F4B"}
        />
        {cells > 0 && (
          <Glow
            cx={x}
            cy={1080}
            r={50}
            color={theme.accent}
            opacity={0.4 * cells}
          />
        )}
      </g>
    ))}
    {/* bag + items */}
    <path
      d="M 420 1000 L 400 760 L 680 760 L 660 1000 Z"
      fill="#E8E8EC"
      opacity={0.9}
    />
    <g opacity={item} transform={`translate(0 ${lerp(-200, 0, item)})`}>
      <Extruded
        x={470}
        y={800}
        w={90}
        h={190}
        fill="#4FA3FF"
        depth={14}
        radius={10}
      />
      <Label x={515} y={900} size={26} color="#fff">
        MILK
      </Label>
    </g>
    <g opacity={extra} transform={`translate(0 ${lerp(-200, 0, extra)})`}>
      <Extruded
        x={575}
        y={860}
        w={70}
        h={130}
        fill={theme.red}
        depth={12}
        radius={10}
      />
    </g>
    <rect
      x={330}
      y={1140}
      width={420}
      height={110}
      rx={18}
      fill="#15171C"
      stroke={readColor}
      strokeWidth={6}
    />
    <Label x={540} y={1215} size={64} color={readColor}>
      {reading}
    </Label>
  </g>
);

export const Checkout: React.FC<{ state: CheckoutState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const flash = 0.5 + 0.5 * Math.sin(frame / 3);

  if (state === "screen")
    return (
      <Svg>
        <Kiosk
          msg="Unexpected item in bagging area"
          color={theme.red}
          flash={flash}
        />
      </Svg>
    );

  if (state === "lookup") {
    const scan = ramp(frame, 10, 30);
    const card = ramp(frame, 35, 50);
    return (
      <Svg>
        <Extruded
          x={380}
          y={620}
          w={320}
          h={110}
          fill="#4FA3FF"
          depth={14}
          radius={12}
        />
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x={410 + i * 19}
            y={640}
            width={i % 3 ? 6 : 12}
            height={70}
            fill="#0B0B0F"
          />
        ))}
        <line
          x1={360}
          y1={lerp(620, 730, scan)}
          x2={720}
          y2={lerp(620, 730, scan)}
          stroke={theme.red}
          strokeWidth={6}
          opacity={scan < 1 ? 1 : 0}
        />
        <g opacity={card} transform={`translate(0 ${lerp(40, 0, card)})`}>
          <Extruded
            x={260}
            y={820}
            w={560}
            h={300}
            fill="#1E2128"
            depth={20}
            radius={22}
          />
          <Label x={540} y={920} size={52}>
            Milk 1 L
          </Label>
          <Label x={540} y={1030} size={64} color={theme.accent}>
            should weigh 1,035 g
          </Label>
        </g>
      </Svg>
    );
  }

  const cells = state === "loadcells" ? ramp(frame, 10, 25) : 0;
  const item =
    state === "loadcells" ? 0 : state === "match" ? ramp(frame, 0, 20) : 1;
  const extra = state === "mismatch" ? ramp(frame, 15, 35) : 0;
  const grams = Math.round(lerp(0, 1036, item) + lerp(0, 412, extra));
  const color =
    state === "match" && item === 1
      ? theme.green
      : state === "mismatch" && extra > 0.5
        ? theme.red
        : theme.text;
  return (
    <Svg>
      <Shelf
        cells={cells}
        reading={`${grams.toLocaleString("en-US")} g`}
        readColor={color}
        item={item}
        extra={extra}
      />
      {state === "loadcells" && (
        <Label x={540} y={1290} size={40} color={theme.accent} opacity={cells}>
          load cells
        </Label>
      )}
    </Svg>
  );
};
