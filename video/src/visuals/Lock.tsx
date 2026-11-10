import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { Extruded } from "../components/Extruded";
import type { LockState } from "../types";
import { theme, shade } from "../theme";

// ---- Geometry (side cutaway of a 5-pin tumbler lock, in 1080x1920 canvas units) ----
const HOUSING = { x: 130, y: 640, w: 770, h: 520 };
const PLUG = { x: 160, y: 900, w: 720, h: 220 };
const SHEAR_Y = PLUG.y; // the gap between plug and housing
const KEYWAY_TOP = 1060;
const KEYWAY_BOTTOM = 1110;
const PIN_X = [300, 420, 540, 660, 780];
const PIN_W = 56;
const KEY_PIN_H = [110, 70, 140, 90, 120]; // brass pins, different lengths
const DRIVER_H = 100; // steel pins, all the same
const CHAMBER_TOP = HOUSING.y + 20;
const RIGHT_LIFT = KEY_PIN_H.map((h) => KEYWAY_TOP - h - SHEAR_Y); // lifts each split exactly to the shear line
const WRONG_LIFT = [90, 40, 60, 20, 80];
const KEY_TRAVEL = 800;

const C = {
  housing: "#3A3F4B",
  plug: "#5B6270",
  keyPin: "#E0A526",
  driver: "#C9CED6",
  spring: "#8A93A3",
  chamber: "#15171C",
  keyBrass: "#D9A21E",
  keyGrey: "#7D838F",
};

/** Key top edge in lock coords when fully inserted: flat plateaus under each pin. */
const keyProfile = (lifts: number[]) => {
  const pts: [number, number][] = [[PIN_X[0] - 120, KEYWAY_TOP - 20]];
  PIN_X.forEach((x, i) => {
    pts.push([x - 26, KEYWAY_TOP - lifts[i]]);
    pts.push([x + 26, KEYWAY_TOP - lifts[i]]);
  });
  pts.push([PLUG.x + PLUG.w - 20, KEYWAY_TOP - 8]);
  return pts;
};
const TIP_X = PLUG.x + PLUG.w - 20;

/** Height of the key's top edge at lock x, given how far the key is shifted left. */
const keyTopAt = (profile: [number, number][], x: number, offset: number) => {
  const local = x + offset;
  if (local > TIP_X) return KEYWAY_TOP; // key hasn't reached this pin
  for (let i = 0; i < profile.length - 1; i++) {
    const [x0, y0] = profile[i];
    const [x1, y1] = profile[i + 1];
    if (local >= x0 && local <= x1)
      return y0 + ((y1 - y0) * (local - x0)) / (x1 - x0);
  }
  return profile[0][1];
};

const Spring: React.FC<{ x: number; top: number; bottom: number }> = ({
  x,
  top,
  bottom,
}) => {
  const coils = 7;
  const h = bottom - top;
  const pts = [`${x},${top}`];
  for (let i = 1; i <= coils * 2; i++)
    pts.push(`${x + (i % 2 ? -20 : 20)},${top + (h * i) / (coils * 2 + 1)}`);
  pts.push(`${x},${bottom}`);
  return (
    <polyline
      points={pts.join(" ")}
      fill="none"
      stroke={C.spring}
      strokeWidth={6}
      strokeLinejoin="round"
    />
  );
};

const Key: React.FC<{
  profile: [number, number][];
  offset: number;
  color: string;
  clipId?: string;
}> = ({ profile, offset, color, clipId }) => {
  const top = profile.map(([x, y]) => `${x - offset},${y}`).join(" ");
  const start = profile[0][0] - offset;
  const blade = `${start},${KEYWAY_BOTTOM} ${top} ${TIP_X - offset + 18},${KEYWAY_BOTTOM - 20} ${TIP_X - offset},${KEYWAY_BOTTOM}`;
  return (
    <g clipPath={clipId ? `url(#${clipId})` : undefined}>
      <rect
        x={start - 170}
        y={KEYWAY_TOP - 40}
        width={180}
        height={KEYWAY_BOTTOM - KEYWAY_TOP + 80}
        rx={40}
        fill={shade(color, -0.2)}
      />
      <circle
        cx={start - 105}
        cy={(KEYWAY_TOP + KEYWAY_BOTTOM) / 2}
        r={26}
        fill={theme.bg}
      />
      <polygon
        points={blade}
        fill={color}
        stroke={shade(color, -0.3)}
        strokeWidth={3}
      />
    </g>
  );
};

type Props = {
  state: LockState;
  keyIn?: number;
  camera?: "punch-in" | "pull-to-start";
};

export const Lock: React.FC<Props> = ({ state, keyIn, camera }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // ---- Per-state animation values ----
  const wrong = state === "wrong-key";
  const lifts = wrong ? WRONG_LIFT : RIGHT_LIFT;
  const profile = keyProfile(lifts);

  let insert = keyIn ?? 0;
  if (state === "wrong-key")
    insert = interpolate(frame, [0, 36], [0, 1], {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });
  if (state === "right-key")
    insert = interpolate(frame, [0, 120], [0, 1], {
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.quad),
    });
  if (state === "unlocked") insert = 1;
  const offset = (1 - insert) * KEY_TRAVEL;
  const showKey = insert > 0;

  // How opaque the housing's front face is (1 = solid, low = see-through cutaway).
  const cover =
    state === "closed"
      ? 1
      : state === "cutaway"
        ? interpolate(frame, [0, 20], [1, 0.12], { extrapolateRight: "clamp" })
        : 0.12;
  // The "slice" reveals left to right during the cutaway scene.
  const sliceX =
    state === "cutaway"
      ? interpolate(frame, [0, 20], [HOUSING.x, HOUSING.x + HOUSING.w + 30], {
          extrapolateRight: "clamp",
        })
      : null;

  const shake =
    wrong && frame > 50 && frame < 90 ? Math.sin(frame * 1.6) * 6 : 0;

  // Shear line colour and visibility per state.
  const lockedFlash =
    state === "springs"
      ? interpolate(frame, [150, 160, 200], [0, 1, 0.6], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;
  const wrongPulse = wrong && frame > 50 ? 0.5 + 0.5 * Math.sin(frame / 3) : 0;
  const drawLine =
    state === "right-key"
      ? interpolate(frame, [125, 160], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;
  const lineColor =
    state === "unlocked"
      ? theme.green
      : state === "right-key"
        ? theme.accent
        : theme.red;
  const lineOpacity =
    state === "unlocked" ? 1 : Math.max(lockedFlash, wrongPulse, drawLine);
  const lineWidth = state === "right-key" ? drawLine : 1;

  // Camera: punch in on the hook, ease back to the hook framing at the end for the loop.
  const scale =
    camera === "punch-in"
      ? interpolate(frame, [0, 8], [1.25, 1], {
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        })
      : camera === "pull-to-start"
        ? interpolate(frame, [0, durationInFrames - 1], [1, 1.25], {
            easing: Easing.in(Easing.cubic),
          })
        : 1;

  return (
    <svg viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <clipPath id="outside-lock">
          <rect x={0} y={0} width={PLUG.x} height={1920} />
        </clipPath>
        <clipPath id="slice">
          <rect x={sliceX ?? 0} y={0} width={1080} height={1920} />
        </clipPath>
        <linearGradient id="sweep" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform={`translate(540 900) scale(${scale}) translate(-540 -900)`}>
        {/* Body */}
        <Extruded {...HOUSING} fill={C.housing} depth={26} radius={18} />
        <g transform={`translate(${shake} 0)`}>
          <Extruded
            {...PLUG}
            fill={state === "unlocked" ? shade(C.plug, 0.12) : C.plug}
            depth={0}
            radius={14}
          />
          <rect
            x={PLUG.x}
            y={KEYWAY_TOP}
            width={PLUG.w}
            height={KEYWAY_BOTTOM - KEYWAY_TOP}
            fill={C.chamber}
          />
        </g>

        {/* Chambers, pins and springs */}
        {PIN_X.map((x, i) => {
          const keyLift = showKey
            ? KEYWAY_TOP - keyTopAt(profile, x, offset)
            : 0;
          // Springs scene: drivers drop in with a bounce.
          const settle =
            state === "springs"
              ? (1 -
                  spring({
                    frame: frame - i * 5,
                    fps,
                    config: { damping: 9, stiffness: 140 },
                  })) *
                -60
              : 0;
          const popIn =
            state === "cutaway"
              ? spring({
                  frame: frame - 20 - i * 4,
                  fps,
                  config: { damping: 14 },
                })
              : 1;
          const keyPinTop = KEYWAY_TOP - KEY_PIN_H[i] - keyLift;
          const driverTop = keyPinTop - DRIVER_H + settle;
          return (
            <g key={x} opacity={popIn}>
              <rect
                x={x - PIN_W / 2 - 6}
                y={CHAMBER_TOP}
                width={PIN_W + 12}
                height={KEYWAY_TOP - CHAMBER_TOP}
                fill={C.chamber}
              />
              <Spring x={x} top={CHAMBER_TOP + 4} bottom={driverTop} />
              <Extruded
                x={x - PIN_W / 2}
                y={driverTop}
                w={PIN_W}
                h={DRIVER_H - 4}
                fill={C.driver}
                depth={8}
                radius={10}
              />
              <g transform={`translate(${shake} 0)`}>
                <Extruded
                  x={x - PIN_W / 2}
                  y={keyPinTop}
                  w={PIN_W}
                  h={KEY_PIN_H[i]}
                  fill={C.keyPin}
                  depth={8}
                  radius={10}
                />
              </g>
            </g>
          );
        })}

        {/* Key inside the lock (hidden by the cover when the lock is closed) */}
        {showKey && (
          <Key
            profile={profile}
            offset={offset}
            color={wrong ? C.keyGrey : C.keyBrass}
          />
        )}

        {/* Shear line */}
        <rect
          x={PLUG.x}
          y={SHEAR_Y - 4}
          width={PLUG.w * lineWidth}
          height={8}
          rx={4}
          fill={lineColor}
          opacity={lineOpacity}
          style={{ filter: `drop-shadow(0 0 14px ${lineColor})` }}
        />

        {/* Unlocked: highlight sweep across the plug + turn arrow */}
        {state === "unlocked" && (
          <g>
            <rect
              x={interpolate(
                frame % 45,
                [0, 45],
                [PLUG.x - 200, PLUG.x + PLUG.w],
              )}
              y={PLUG.y}
              width={200}
              height={PLUG.h}
              fill="url(#sweep)"
            />
            <g
              transform={`translate(540 1250) rotate(${interpolate(frame, [0, 40], [-40, 0], { extrapolateRight: "clamp" })})`}
            >
              <path
                d="M -110 0 A 110 60 0 1 0 110 0"
                fill="none"
                stroke={theme.green}
                strokeWidth={12}
                strokeLinecap="round"
              />
              <polygon points="96,-24 136,4 92,26" fill={theme.green} />
            </g>
          </g>
        )}

        {/* Front cover: solid when closed, fades to a ghost for the cutaway */}
        <g
          opacity={cover}
          clipPath={sliceX !== null ? "url(#slice)" : undefined}
        >
          <rect
            x={HOUSING.x}
            y={HOUSING.y}
            width={HOUSING.w}
            height={HOUSING.h}
            rx={18}
            fill={C.housing}
          />
          <circle
            cx={PLUG.x + PLUG.w / 2}
            cy={PLUG.y + PLUG.h / 2}
            r={150}
            fill={shade(C.housing, 0.1)}
          />
          <rect
            x={PLUG.x + PLUG.w / 2 - 14}
            y={PLUG.y + PLUG.h / 2 - 70}
            width={28}
            height={140}
            rx={8}
            fill={C.chamber}
          />
        </g>

        {/* The part of the key outside the lock is always visible */}
        {showKey && cover > 0.5 && (
          <Key
            profile={profile}
            offset={offset}
            color={C.keyBrass}
            clipId="outside-lock"
          />
        )}
      </g>
    </svg>
  );
};
