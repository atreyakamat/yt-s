import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Extruded } from "../../components/Extruded";
import { Arrow, Check, Cross, Glow, Svg, lerp, ramp } from "../../components/Shapes";
import { shade, theme } from "../../theme";
import type { GenericVisual } from "../../types";
import { Glyph } from "./Glyph";
import { colorOf } from "./palette";

/*
 * Reusable, data-driven visuals. Every reel script can describe a scene with one of these
 * instead of needing a hand-built component. All of them:
 *  - draw inside the safe box (x 90..940, y 540..1290) so they never clash with the big
 *    top text, the captions (y ~1330) or YouTube's buttons;
 *  - pace their animation to the scene length, so a 3 s scene and an 8 s scene both finish.
 */

const CX = 515; // centre of the usable width (the right 140px are covered by Shorts buttons)
const CY = 910;
const TOP = 545;
const BOTTOM = 1285;

/** True for pale fills (steel, white, cyan...) that need dark text on top. */
const isLight = (hex: string) => {
  const n = parseInt(hex.replace("#", "").slice(0, 6), 16);
  if (Number.isNaN(n)) return false;
  const lum = 0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum > 170;
};

/** Split text into lines of at most `max` characters (word-wrapped). */
const wrap = (text: string, max: number) => {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? line + " " + word : word;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const T: React.FC<{
  x: number;
  y: number;
  text: string;
  size?: number;
  max?: number;
  color?: string;
  weight?: number;
  anchor?: "start" | "middle" | "end";
  opacity?: number;
  /** Vertically centre the block on y instead of starting at y. */
  center?: boolean;
}> = ({
  x,
  y,
  text,
  size = 44,
  max = 18,
  color = theme.text,
  weight = 800,
  anchor = "middle",
  opacity = 1,
  center = false,
}) => {
  const lines = wrap(text, max);
  const lh = size * 1.1;
  const y0 = center ? y - ((lines.length - 1) * lh) / 2 + size * 0.35 : y;
  return (
    <text
      fontFamily={theme.font}
      fontWeight={weight}
      fontSize={size}
      fill={color}
      textAnchor={anchor}
      opacity={opacity}
      style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.55)", strokeWidth: size / 9 }}
    >
      {lines.map((l, i) => (
        <tspan key={i} x={x} y={y0 + i * lh}>
          {l}
        </tspan>
      ))}
    </text>
  );
};

/** Shared timing: `stagger(i, n)` gives the frame item i of n should appear, spread over the first 65% of the scene. */
const useTiming = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const span = Math.max(1, durationInFrames * 0.65);
  const stagger = (i: number, n: number) =>
    Math.round(4 + (n <= 1 ? 0 : (i * (span - 4)) / n));
  const pop = (start: number) =>
    spring({ frame: frame - start, fps, config: { damping: 13, stiffness: 170 } });
  return { frame, fps, dur: durationInFrames, stagger, pop };
};

type P<K extends GenericVisual["kind"]> = {
  v: Extract<GenericVisual, { kind: K }>;
  accent: string;
};

// ───────────────────────────── hero ─────────────────────────────
export const Hero: React.FC<P<"hero">> = ({ v, accent }) => {
  const { frame, dur, pop } = useTiming();
  // Frame 1 already shows the object (hook rule): grow from 60%, never from nothing.
  const s = 0.6 + 0.4 * pop(0);
  const color = colorOf(v.color, 0, accent);
  const motion = v.motion ?? "float";
  // Hooks open mid-movement: punch in from 1.2x.
  const punch = lerp(1.2, 1, ramp(frame, 0, 8, Easing.out(Easing.cubic)));
  let rot = 0;
  let dx = 0;
  let scale = 1;
  let dy = Math.sin(frame / 12) * 10;
  if (motion === "spin") rot = (frame / dur) * 360;
  if (motion === "pulse") scale = 1 + 0.06 * Math.sin(frame / 4);
  if (motion === "shake") dx = frame % 8 < 4 ? -8 : 8;
  if (motion === "drop") dy = lerp(-500, 0, ramp(frame, 0, 14, Easing.bounce));
  const size = 440 * s * punch * scale;
  return (
    <Svg>
      <Glow cx={CX} cy={CY - 30} r={300} color={color} opacity={0.22} />
      <Glyph name={v.icon} x={CX + dx} y={CY - 30 + dy} size={size} color={color} rotate={rot} />
      {v.label && (
        <T x={CX} y={1200} text={v.label} size={52} max={24} color={theme.muted} opacity={ramp(frame, 10, 20)} />
      )}
    </Svg>
  );
};

// ───────────────────────────── layers ─────────────────────────────
export const Layers: React.FC<P<"layers">> = ({ v, accent }) => {
  const { frame, dur, stagger, pop } = useTiming();
  const n = v.items.length;
  const explode = ramp(frame, dur * 0.25, dur * 0.6);
  const h = Math.min(120, 520 / n);
  const gap = lerp(4, Math.min(48, 220 / n), explode);
  const total = n * h + (n - 1) * gap;
  const y0 = CY - total / 2;
  const w = 640;
  return (
    <Svg>
      {v.items.map((it, i) => {
        const s = pop(stagger(i, n));
        const y = y0 + i * (h + gap);
        const x = CX - w / 2 - 9 + (i - (n - 1) / 2) * 14 * explode;
        const color = colorOf(it.color, i, accent);
        return (
          <g key={i} opacity={Math.min(1, s)} transform={`translate(0 ${(1 - s) * -60})`}>
            <Extruded x={x} y={y} w={w} h={h} fill={color} depth={18} radius={10} />
            <T
              x={x + w / 2}
              y={y + h / 2}
              text={it.label}
              size={Math.min(44, h * 0.42)}
              max={26}
              color={isLight(color) ? theme.bg : theme.text}
              center
            />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── flow ─────────────────────────────
export const Flow: React.FC<P<"flow">> = ({ v, accent }) => {
  const { stagger, pop, frame } = useTiming();
  const n = v.steps.length;
  const h = 104;
  const gap = n > 4 ? 52 : 70;
  const total = n * h + (n - 1) * gap;
  const y0 = CY - total / 2;
  const w = 700;
  const x = CX - w / 2 - 9;
  let current = 0;
  v.steps.forEach((_, i) => {
    if (frame >= stagger(i, n)) current = i;
  });
  return (
    <Svg>
      {v.steps.map((st, i) => {
        const s = pop(stagger(i, n));
        const y = y0 + i * (h + gap);
        const active = i === current;
        const color = active ? shade(accent, -0.55) : "#2C2F38";
        return (
          <g key={i} opacity={Math.min(1, s)} transform={`translate(${(1 - s) * 80} 0)`}>
            {i > 0 && (
              <Arrow x1={CX} y1={y - gap + 6} x2={CX} y2={y - 8} color={active ? accent : theme.muted} width={8} />
            )}
            <Extruded x={x} y={y} w={w} h={h} fill={color} depth={14} radius={14} stroke={active ? accent : undefined} />
            {st.icon && <Glyph name={st.icon} x={x + 62} y={y + h / 2} size={72} color={colorOf(st.color, i, accent)} />}
            <T
              x={st.icon ? x + 120 : x + w / 2}
              y={y + h / 2}
              text={st.label}
              size={42}
              max={st.icon ? 24 : 28}
              anchor={st.icon ? "start" : "middle"}
              center
            />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── compare ─────────────────────────────
export const Compare: React.FC<P<"compare">> = ({ v, accent }) => {
  const { frame, dur, pop } = useTiming();
  const mode = v.mode ?? "wrong-right";
  const sides = [v.left, v.right];
  const w = 390;
  const h = 560;
  const xs = [CX - w - 18, CX + 18];
  const y = CY - h / 2;
  const mark = ramp(frame, dur * 0.4, dur * 0.4 + 8);
  const mark2 = ramp(frame, dur * 0.55, dur * 0.55 + 8);
  const heads =
    mode === "before-after" ? ["BEFORE", "AFTER"] : [v.left.tag ?? "", v.right.tag ?? ""];
  return (
    <Svg>
      {sides.map((side, i) => {
        const s = pop(i * 8);
        const x = xs[i];
        const color = colorOf(side.color, i === 0 ? 4 : 2, accent);
        const dim = mode === "wrong-right" && i === 0 ? 1 - 0.45 * mark : 1;
        return (
          <g key={i} opacity={Math.min(1, s) * dim} transform={`translate(0 ${(1 - s) * 60})`}>
            <rect x={x} y={y} width={w} height={h} rx={28} fill="#16171D" stroke={i === 1 && mode === "wrong-right" ? shade(theme.green, -0.3) : "#2C2F38"} strokeWidth={4} />
            {heads[i] && <T x={x + w / 2} y={y + 62} text={heads[i]} size={38} max={16} color={theme.muted} />}
            <Glyph name={side.icon ?? "question"} x={x + w / 2} y={y + 250} size={220} color={color} />
            <T x={x + w / 2} y={y + 440} text={side.label} size={44} max={14} />
          </g>
        );
      })}
      {mode === "wrong-right" && (
        <>
          <Cross cx={xs[0] + w / 2} cy={y + 250} size={170} opacity={mark} />
          <Check cx={xs[1] + w - 60} cy={y + 60} size={80} opacity={mark2} />
        </>
      )}
      {mode === "versus" && (
        <g opacity={ramp(frame, 10, 18)}>
          <circle cx={CX} cy={CY} r={56} fill={accent} />
          <T x={CX} y={CY} text="VS" size={50} color={theme.bg} center />
        </g>
      )}
      {mode === "before-after" && (
        <Arrow x1={CX - 40} y1={CY} x2={CX + 44} y2={CY} color={accent} width={14} opacity={ramp(frame, 10, 18)} />
      )}
    </Svg>
  );
};

// ───────────────────────────── cycle ─────────────────────────────
export const Cycle: React.FC<P<"cycle">> = ({ v, accent }) => {
  const { frame, dur, stagger, pop } = useTiming();
  const n = v.steps.length;
  const R = 262;
  const cy = CY - 10;
  const angle = (i: number) => -Math.PI / 2 + (i / n) * Math.PI * 2;
  const travel = interpolate(frame, [0, dur], [0, Math.max(1, n * 0.999)], { extrapolateRight: "clamp" });
  const active = Math.floor(travel) % n;
  const dotA = angle(0) + (travel / n) * Math.PI * 2;
  return (
    <Svg>
      <circle cx={CX} cy={cy} r={R} fill="none" stroke="#2C2F38" strokeWidth={14} strokeDasharray="4 22" strokeLinecap="round" />
      {v.icon && <Glyph name={v.icon} x={CX} y={cy} size={190} color={colorOf(v.color, 0, accent)} opacity={pop(0)} />}
      <circle cx={CX + Math.cos(dotA) * R} cy={cy + Math.sin(dotA) * R} r={18} fill={accent} />
      {v.steps.map((label, i) => {
        const s = pop(stagger(i, n) * 0.5);
        const x = CX + Math.cos(angle(i)) * R;
        const y = cy + Math.sin(angle(i)) * R;
        const on = i === active;
        return (
          <g key={i} transform={`translate(${x} ${y}) scale(${Math.min(1, s) * (on ? 1.08 : 1)})`}>
            <circle r={98} fill={on ? shade(accent, -0.55) : "#1E2028"} stroke={on ? accent : "#3A3F4B"} strokeWidth={6} />
            <T x={0} y={0} text={label} size={32} max={11} center />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── counter ─────────────────────────────
export const Counter: React.FC<P<"counter">> = ({ v, accent }) => {
  const { frame, dur, pop } = useTiming();
  const t = ramp(frame, 4, Math.max(10, dur * 0.7), Easing.out(Easing.cubic));
  const value = lerp(v.from ?? 0, v.to, t);
  const decimals = v.decimals ?? 0;
  const shown = value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const text = `${v.prefix ?? ""}${shown}${v.suffix ?? ""}`;
  const size = Math.min(230, 1500 / Math.max(4, text.length));
  return (
    <Svg>
      {v.icon && <Glyph name={v.icon} x={CX} y={720} size={230} color={colorOf(v.color, 0, accent)} opacity={pop(0)} />}
      <Glow cx={CX} cy={v.icon ? 960 : 900} r={260} color={accent} opacity={0.12} />
      <T x={CX} y={v.icon ? 1010 : 960} text={text} size={size} max={40} weight={900} color={accent} />
      {v.label && <T x={CX} y={v.icon ? 1110 : 1080} text={v.label} size={50} max={26} color={theme.muted} opacity={ramp(frame, 8, 18)} />}
    </Svg>
  );
};

// ───────────────────────────── timeline ─────────────────────────────
export const Timeline: React.FC<P<"timeline">> = ({ v, accent }) => {
  const { frame, dur, stagger, pop } = useTiming();
  const n = v.events.length;
  const x = 230;
  const y0 = TOP + 40;
  const y1 = BOTTOM - 80;
  const step = n > 1 ? (y1 - y0) / (n - 1) : 0;
  const line = ramp(frame, 0, dur * 0.65);
  return (
    <Svg>
      <line x1={x} y1={y0} x2={x} y2={lerp(y0, y1, line)} stroke="#3A3F4B" strokeWidth={10} strokeLinecap="round" />
      {v.events.map((e, i) => {
        const s = pop(stagger(i, n));
        const y = y0 + i * step;
        const last = i === n - 1;
        return (
          <g key={i} opacity={Math.min(1, s)}>
            <circle cx={x} cy={y} r={26 * Math.min(1.2, s)} fill={last ? accent : "#C9CED6"} />
            <T x={x + 60} y={y - 6} text={e.year} size={58} max={14} weight={900} color={last ? accent : theme.text} anchor="start" />
            <T x={x + 60} y={y + 46} text={e.label} size={38} max={28} color={theme.muted} anchor="start" />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── bars ─────────────────────────────
export const Bars: React.FC<P<"bars">> = ({ v, accent }) => {
  const { frame, dur, stagger } = useTiming();
  const n = v.items.length;
  const max = Math.max(...v.items.map((it) => it.value), 1e-9);
  const rowH = Math.min(170, 700 / n);
  const y0 = CY - (n * rowH) / 2;
  const x = 120;
  const full = 620;
  return (
    <Svg>
      {v.items.map((it, i) => {
        const start = stagger(i, n);
        const g = ramp(frame, start, start + Math.max(12, dur * 0.2), Easing.out(Easing.cubic));
        const y = y0 + i * rowH;
        const w = Math.max(16, (it.value / max) * full * g);
        const color = colorOf(it.color, i, accent);
        const num = (it.value * g).toLocaleString("en-US", { maximumFractionDigits: it.value % 1 === 0 ? 0 : 1 });
        return (
          <g key={i} opacity={ramp(frame, start, start + 6)}>
            <T x={x} y={y + 40} text={it.label} size={40} max={30} anchor="start" />
            <rect x={x} y={y + 62} width={w} height={rowH * 0.36} rx={12} fill={color} />
            <T x={x + w + 18} y={y + 62 + rowH * 0.27} text={`${num}${v.unit ?? ""}`} size={40} max={20} anchor="start" color={theme.muted} />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── zoom ─────────────────────────────
export const Zoom: React.FC<P<"zoom">> = ({ v, accent }) => {
  const { frame, dur } = useTiming();
  const n = v.levels.length;
  const seg = dur / n;
  const idx = Math.min(n - 1, Math.floor(frame / seg));
  const local = (frame - idx * seg) / seg;
  return (
    <Svg>
      {[0, 1, 2].map((k) => (
        <circle key={k} cx={CX} cy={CY - 40} r={330 - k * 70} fill="none" stroke="#2C2F38" strokeWidth={4} opacity={0.7} />
      ))}
      {v.levels.map((lv, i) => {
        if (i < idx - 1 || i > idx) return null;
        const leaving = i === idx - 1;
        const t = leaving ? ramp(local, 0, 0.25) : ramp(local, 0, 0.25, Easing.out(Easing.cubic));
        const size = leaving ? lerp(460, 1800, t) : lerp(120, 460, t);
        const op = leaving ? 1 - t : Math.min(1, t * 2);
        return (
          <g key={i}>
            <Glyph name={lv.icon ?? "question"} x={CX} y={CY - 40} size={size} color={colorOf(lv.color, i, accent)} opacity={op} />
            {!leaving && <T x={CX} y={1240} text={lv.label} size={52} max={24} opacity={op} />}
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── callout ─────────────────────────────
const SLOTS: [number, number][] = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [0, 1.45],
];
export const Callout: React.FC<P<"callout">> = ({ v, accent }) => {
  const { stagger, pop } = useTiming();
  const n = v.parts.length;
  const s0 = pop(0);
  return (
    <Svg>
      <Glow cx={CX} cy={CY} r={230} color={colorOf(v.color, 0, accent)} opacity={0.15} />
      <Glyph name={v.icon} x={CX} y={CY} size={360 * Math.min(1, s0)} color={colorOf(v.color, 0, accent)} />
      {v.parts.map((label, i) => {
        const s = Math.min(1, pop(stagger(i, n) + 6));
        const [sx, sy] = SLOTS[i];
        const bx = CX + sx * 235;
        const by = CY + sy * 255;
        const ax = CX + sx * 95;
        const ay = CY + sy * 95;
        return (
          <g key={i} opacity={s}>
            <line x1={ax} y1={ay} x2={lerp(ax, bx, s)} y2={lerp(ay, by, s)} stroke={accent} strokeWidth={5} />
            <circle cx={ax} cy={ay} r={10} fill={accent} />
            <rect x={bx - 165} y={by - 52} width={330} height={104} rx={20} fill="#16171D" stroke={accent} strokeWidth={4} />
            <T x={bx} y={by} text={label} size={34} max={16} center />
          </g>
        );
      })}
    </Svg>
  );
};

// ───────────────────────────── grid ─────────────────────────────
export const Grid: React.FC<P<"grid">> = ({ v, accent }) => {
  const { frame, fps, dur } = useTiming();
  const count = Math.max(1, Math.min(40, v.count));
  const cols = count <= 4 ? count : count <= 9 ? 3 : count <= 16 ? 4 : 5;
  const rows = Math.ceil(count / cols);
  const cell = Math.min(200, 760 / cols, 600 / rows);
  const x0 = CX - (cols * cell) / 2 + cell / 2;
  const y0 = CY - 40 - (rows * cell) / 2 + cell / 2;
  const per = Math.max(1, Math.floor((dur * 0.5) / count));
  return (
    <Svg>
      {Array.from({ length: count }).map((_, i) => {
        const s = spring({ frame: frame - i * per, fps, config: { damping: 12, stiffness: 180 } });
        const hl = i < (v.highlight ?? 0);
        return (
          <Glyph
            key={i}
            name={v.icon}
            x={x0 + (i % cols) * cell}
            y={y0 + Math.floor(i / cols) * cell}
            size={cell * 0.78 * Math.min(1.1, s)}
            color={hl ? accent : colorOf(v.color ?? "steel", 0, accent)}
            opacity={Math.min(1, s) * (hl || !v.highlight ? 1 : 0.45)}
          />
        );
      })}
      {v.label && <T x={CX} y={1250} text={v.label} size={50} max={26} color={theme.muted} opacity={ramp(frame, dur * 0.5, dur * 0.5 + 8)} />}
    </Svg>
  );
};

// ───────────────────────────── gauge ─────────────────────────────
export const Gauge: React.FC<P<"gauge">> = ({ v, accent }) => {
  const { frame, dur } = useTiming();
  const R = 330;
  const cy = 1040;
  const t = ramp(frame, 6, Math.max(12, dur * 0.6), Easing.out(Easing.back(1.4)));
  const value = Math.max(0, Math.min(100, v.value)) * t;
  const a = Math.PI + (value / 100) * Math.PI;
  const arc = (from: number, to: number, color: string) => {
    const a0 = Math.PI + (from / 100) * Math.PI;
    const a1 = Math.PI + (to / 100) * Math.PI;
    return (
      <path
        d={`M${CX + Math.cos(a0) * R},${cy + Math.sin(a0) * R} A${R},${R} 0 0 1 ${CX + Math.cos(a1) * R},${cy + Math.sin(a1) * R}`}
        fill="none"
        stroke={color}
        strokeWidth={46}
      />
    );
  };
  return (
    <Svg>
      {arc(0, 33, shade(theme.green, -0.2))}
      {arc(33.5, 66, shade(theme.accent, -0.2))}
      {arc(66.5, 100, shade(theme.red, -0.2))}
      <line x1={CX} y1={cy} x2={CX + Math.cos(a) * (R - 40)} y2={cy + Math.sin(a) * (R - 40)} stroke={theme.text} strokeWidth={16} strokeLinecap="round" />
      <circle cx={CX} cy={cy} r={30} fill={accent} />
      {v.low && <T x={CX - R} y={cy + 80} text={v.low} size={38} max={12} color={theme.muted} />}
      {v.high && <T x={CX + R} y={cy + 80} text={v.high} size={38} max={12} color={theme.muted} />}
      {v.label && <T x={CX} y={cy + 170} text={v.label} size={54} max={24} color={accent} opacity={ramp(frame, dur * 0.4, dur * 0.4 + 8)} />}
    </Svg>
  );
};

// ───────────────────────────── wave ─────────────────────────────
export const Wave: React.FC<P<"wave">> = ({ v, accent }) => {
  const { frame } = useTiming();
  const rows = v.waves.length;
  const x0 = 110;
  const x1 = 920;
  return (
    <Svg>
      {v.waves.map((w, r) => {
        const cy = rows === 1 ? CY : CY - 170 + r * 340;
        const amp = rows === 1 ? 150 : 100;
        const k = (w.freq / 10) * 0.06 + 0.008; // radians per px
        const pts: string[] = [];
        for (let x = x0; x <= x1; x += 6) {
          const y = cy + Math.sin(x * k - frame * 0.25) * amp * ramp(frame, 0, 15);
          pts.push(`${x},${y.toFixed(1)}`);
        }
        return (
          <g key={r}>
            <polyline points={pts.join(" ")} fill="none" stroke={colorOf(w.color, r, accent)} strokeWidth={12} strokeLinecap="round" />
            <T x={CX} y={cy + amp + 70} text={w.label} size={44} max={26} color={theme.muted} />
          </g>
        );
      })}
    </Svg>
  );
};

export const GenericVisualView: React.FC<{ v: GenericVisual; accent: string }> = ({ v, accent }) => {
  switch (v.kind) {
    case "hero":
      return <Hero v={v} accent={accent} />;
    case "layers":
      return <Layers v={v} accent={accent} />;
    case "flow":
      return <Flow v={v} accent={accent} />;
    case "compare":
      return <Compare v={v} accent={accent} />;
    case "cycle":
      return <Cycle v={v} accent={accent} />;
    case "counter":
      return <Counter v={v} accent={accent} />;
    case "timeline":
      return <Timeline v={v} accent={accent} />;
    case "bars":
      return <Bars v={v} accent={accent} />;
    case "zoom":
      return <Zoom v={v} accent={accent} />;
    case "callout":
      return <Callout v={v} accent={accent} />;
    case "grid":
      return <Grid v={v} accent={accent} />;
    case "gauge":
      return <Gauge v={v} accent={accent} />;
    case "wave":
      return <Wave v={v} accent={accent} />;
  }
};
