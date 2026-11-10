import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Label, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";

export type ManholeState =
  | "square-drop"
  | "diagonal"
  | "circle"
  | "roll"
  | "no-lineup";

const CX = 540;
const CY = 900;
const S = 300; // side of square hole / diameter of round hole

const Hole: React.FC<{ round: boolean }> = ({ round }) =>
  round ? (
    <circle
      cx={CX}
      cy={CY}
      r={S / 2}
      fill="#050507"
      stroke="#3A3F4B"
      strokeWidth={30}
    />
  ) : (
    <rect
      x={CX - S / 2}
      y={CY - S / 2}
      width={S}
      height={S}
      fill="#050507"
      stroke="#3A3F4B"
      strokeWidth={30}
    />
  );

/** Cast-iron cover with a simple grip pattern. */
const Cover: React.FC<{
  round: boolean;
  rot: number;
  scale: number;
  x?: number;
  y?: number;
  opacity?: number;
}> = ({ round, rot, scale, x = CX, y = CY, opacity = 1 }) => (
  <g
    transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}
    opacity={opacity}
  >
    {round ? (
      <circle r={S / 2 + 8} fill="#6B7280" />
    ) : (
      <rect
        x={-S / 2 - 8}
        y={-S / 2 - 8}
        width={S + 16}
        height={S + 16}
        fill="#6B7280"
      />
    )}
    {[-80, -40, 0, 40, 80].map((d) => (
      <line
        key={d}
        x1={-100}
        y1={d}
        x2={100}
        y2={d}
        stroke="#4B5260"
        strokeWidth={10}
      />
    ))}
  </g>
);

export const Manhole: React.FC<{ state: ManholeState }> = ({ state }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  if (state === "square-drop") {
    // Cover lifts, turns on its edge (shown as rotating + shrinking), and falls in.
    const turn = ramp(frame, 5, 30);
    const fall = ramp(frame, 30, 55);
    return (
      <Svg>
        <Hole round={false} />
        <Cover
          round={false}
          rot={lerp(0, 45, turn)}
          scale={lerp(1, 0.25, fall)}
          opacity={1 - fall * 0.7}
        />
      </Svg>
    );
  }

  if (state === "diagonal") {
    const show = ramp(frame, 10, 40);
    const d = (S * Math.SQRT2) / 2;
    return (
      <Svg>
        <rect
          x={CX - S / 2}
          y={CY - S / 2}
          width={S}
          height={S}
          fill="#6B7280"
        />
        <line
          x1={CX - S / 2}
          y1={CY + S / 2 + 50}
          x2={CX + S / 2}
          y2={CY + S / 2 + 50}
          stroke={theme.muted}
          strokeWidth={8}
        />
        <Label x={CX} y={CY + S / 2 + 110} size={44} color={theme.muted}>
          side = 1
        </Label>
        <line
          x1={CX - d * 0.707 * show}
          y1={CY + d * 0.707 * show}
          x2={CX + d * 0.707 * show}
          y2={CY - d * 0.707 * show}
          stroke={theme.accent}
          strokeWidth={12}
        />
        <Label
          x={CX + 40}
          y={CY - S / 2 - 40}
          size={48}
          color={theme.accent}
          opacity={show}
        >
          diagonal ≈ 1.41
        </Label>
      </Svg>
    );
  }

  if (state === "circle") {
    const rot = lerp(0, 360, ramp(frame, 0, durationInFrames - 1));
    return (
      <Svg>
        <Cover round rot={rot} scale={1} />
        <g transform={`translate(${CX} ${CY}) rotate(${rot})`}>
          <line
            x1={-S / 2 - 8}
            y1={0}
            x2={S / 2 + 8}
            y2={0}
            stroke={theme.accent}
            strokeWidth={10}
          />
        </g>
        <Label x={CX} y={CY + S / 2 + 110} size={44} color={theme.accent}>
          same width every way
        </Label>
      </Svg>
    );
  }

  if (state === "roll") {
    const t = ramp(frame, 0, durationInFrames - 1);
    const x = lerp(220, 860, t);
    return (
      <Svg>
        <line
          x1={80}
          y1={1060}
          x2={1000}
          y2={1060}
          stroke="#3A3F4B"
          strokeWidth={10}
        />
        <Cover
          round
          rot={(x - 220) * 0.35}
          scale={0.6}
          x={x}
          y={1060 - (S / 2 + 8) * 0.6}
        />
      </Svg>
    );
  }

  // no-lineup: dropped in at a random angle, still fits
  const drop = ramp(frame, 0, 30);
  return (
    <Svg>
      <Hole round />
      <Cover round rot={lerp(0, 137, drop)} scale={lerp(1.3, 1, drop)} />
    </Svg>
  );
};
