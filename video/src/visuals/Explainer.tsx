import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Arrow, Glow, Svg, lerp, ramp } from "../components/Shapes";
import { theme } from "../theme";
import { Icon } from "./icons";

export type ExplainerLayout = "hero" | "pair" | "flow" | "grid" | "num" | "bars" | "timeline" | "ring" | "ladder" | "meter";
export type ExplainerItem = { icon?: string; label?: string; value?: number };
export type ExplainerProps = {
  layout: ExplainerLayout;
  items?: ExplainerItem[];
  value?: string;
  unit?: string;
  vs?: string;
};

export const EXPLAINER_LAYOUTS: ExplainerLayout[] = ["hero", "pair", "flow", "grid", "num", "bars", "timeline", "ring", "ladder", "meter"];

const CY = 880; // visual centre, clear of captions and the Shorts UI

const Caption: React.FC<{ x: number; y: number; text?: string; size?: number; opacity?: number }> = ({ x, y, text, size = 44, opacity = 1 }) =>
  text ? (
    <text x={x} y={y} textAnchor="middle" fontFamily={theme.font} fontWeight={800} fontSize={size} fill={theme.text} opacity={opacity}>
      {text}
    </text>
  ) : null;

/** Pop-in progress for the i-th element. */
const pop = (frame: number, fps: number, i: number) =>
  spring({ frame: frame - 6 - i * 8, fps, config: { damping: 14, stiffness: 120 } });

const Tile: React.FC<{ item: ExplainerItem; x: number; y: number; size: number; i: number }> = ({ item, x, y, size, i }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = pop(frame, fps, i);
  return (
    <g opacity={Math.min(1, p)} transform={`translate(${x} ${y + (1 - p) * 40})`}>
      <circle cx={0} cy={0} r={size * 0.62} fill="#1D1F27" stroke="#2C2F3A" strokeWidth={4} />
      {item.icon && <Icon name={item.icon} x={0} y={0} size={size} />}
      <Caption x={0} y={size * 0.62 + 56} text={item.label} size={size > 260 ? 52 : 40} />
    </g>
  );
};

export const Explainer: React.FC<ExplainerProps> = ({ layout, items = [], value, unit, vs }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = items.length;
  const body = (() => {
    switch (layout) {
      case "hero":
        return items[0] ? <Tile item={items[0]} x={540} y={CY} size={420} i={0} /> : null;
      case "pair": {
        const [a, b] = items;
        const t = ramp(frame, 24, 40);
        return (
          <g>
            {a && <Tile item={a} x={290} y={CY} size={260} i={0} />}
            {b && <Tile item={b} x={790} y={CY} size={260} i={1} />}
            <g opacity={t}>
              <rect x={470} y={CY - 44} width={140} height={88} rx={44} fill={theme.accent} />
              <text x={540} y={CY + 18} textAnchor="middle" fontFamily={theme.font} fontWeight={900} fontSize={52} fill="#0B0B0F">
                {vs ?? "VS"}
              </text>
            </g>
          </g>
        );
      }
      case "flow": {
        const k = Math.min(n, 4);
        const size = k === 2 ? 240 : k === 3 ? 180 : 190;
        // 4 steps snake into 2 rows; 2-3 stay on one row
        const pos = (i: number) => {
          if (k <= 3) return { x: lerp(250, 830, k === 1 ? 0.5 : i / (k - 1)), y: CY };
          return { x: i % 2 === 0 ? 300 : 780, y: CY + (i < 2 ? -190 : 190) };
        };
        return (
          <g>
            {items.slice(0, k).map((it, i) => {
              const p = pos(i);
              const next = i < k - 1 ? pos(i + 1) : null;
              const t = ramp(frame, 14 + i * 8, 26 + i * 8);
              let arrow: React.ReactNode = null;
              if (next) {
                const same = Math.abs(next.y - p.y) < 1;
                const x1 = same ? p.x + size * 0.7 : p.x;
                const y1 = same ? p.y : p.y + size * 0.95;
                const x2 = same ? next.x - size * 0.7 : next.x;
                const y2 = same ? next.y : next.y - size * 0.95;
                arrow = <Arrow x1={x1} y1={y1} x2={lerp(x1, x2, t)} y2={lerp(y1, y2, t)} opacity={t} width={9} />;
              }
              return (
                <g key={i}>
                  <Tile item={it} x={p.x} y={p.y} size={size} i={i} />
                  {arrow}
                </g>
              );
            })}
          </g>
        );
      }
      case "grid": {
        const k = Math.min(n, 6);
        const cols = k <= 4 ? 2 : 3;
        const size = cols === 2 ? 220 : 160;
        const rows = Math.ceil(k / cols);
        return (
          <g>
            {items.slice(0, k).map((it, i) => (
              <Tile
                key={i}
                item={it}
                i={i}
                size={size}
                x={540 + (i % cols - (cols - 1) / 2) * (cols === 2 ? 440 : 330)}
                y={CY + (Math.floor(i / cols) - (rows - 1) / 2) * 400}
              />
            ))}
          </g>
        );
      }
      case "num": {
        const p = pop(frame, fps, 0);
        const icon = items[0];
        return (
          <g>
            {icon?.icon && <Icon name={icon.icon} x={540} y={CY - 280} size={260} opacity={Math.min(1, p)} />}
            <text
              x={540}
              y={CY + 120}
              textAnchor="middle"
              fontFamily={theme.font}
              fontWeight={900}
              fontSize={(value ?? "").length > 7 ? 170 : 230}
              fill={theme.accent}
              opacity={Math.min(1, p)}
            >
              {value}
            </text>
            <Caption x={540} y={CY + 230} text={unit} size={54} opacity={ramp(frame, 12, 24)} />
          </g>
        );
      }
      case "bars": {
        const k = Math.min(n, 5);
        const max = Math.max(...items.slice(0, k).map((it) => it.value ?? 1), 1);
        const rowH = 150;
        const top = CY - ((k - 1) * rowH) / 2;
        return (
          <g>
            {items.slice(0, k).map((it, i) => {
              const t = ramp(frame, 8 + i * 6, 34 + i * 6);
              const w = 560 * ((it.value ?? 1) / max) * t;
              const y = top + i * rowH;
              return (
                <g key={i}>
                  {it.icon && <Icon name={it.icon} x={150} y={y} size={110} />}
                  <rect x={240} y={y - 36} width={Math.max(8, w)} height={72} rx={14} fill={i === 0 ? theme.accent : "#4B8BFF"} />
                  <text x={252} y={y + 66} fontFamily={theme.font} fontWeight={800} fontSize={34} fill={theme.muted}>
                    {it.label}
                  </text>
                </g>
              );
            })}
          </g>
        );
      }
      case "ring": {
        // First item sits in the centre; the rest orbit it and pop in one by one.
        const [centre, ...rest] = items;
        const k = Math.min(rest.length, 5);
        const R = 300;
        return (
          <g>
            {k > 0 && <circle cx={540} cy={CY} r={R} fill="none" stroke="#2C2F3A" strokeWidth={6} strokeDasharray="4 18" strokeLinecap="round" />}
            {centre && <Tile item={centre} x={540} y={CY} size={260} i={0} />}
            {rest.slice(0, k).map((it, i) => {
              const a = -Math.PI / 2 + (i / k) * Math.PI * 2;
              const drift = frame * 0.004;
              return <Tile key={i} item={it} i={i + 1} size={150} x={540 + Math.cos(a + drift) * R} y={CY + Math.sin(a + drift) * R} />;
            })}
          </g>
        );
      }
      case "ladder": {
        // Rising steps, left to right: for levels, stages and "gets bigger" ideas.
        const k = Math.min(n, 5);
        const stepW = 800 / k;
        return (
          <g>
            {items.slice(0, k).map((it, i) => {
              const p = Math.min(1, pop(frame, fps, i));
              const h = (180 + i * (360 / Math.max(1, k - 1 || 1))) * p;
              const x = 140 + i * stepW;
              const yBase = CY + 300;
              return (
                <g key={i}>
                  <rect x={x} y={yBase - h} width={stepW - 14} height={h} rx={16} fill={i === k - 1 ? theme.accent : "#2C2F3A"} />
                  {it.icon && <Icon name={it.icon} x={x + (stepW - 14) / 2} y={yBase - h - 70} size={110} opacity={p} />}
                  <text x={x + (stepW - 14) / 2} y={yBase - 24} textAnchor="middle" fontFamily={theme.font} fontWeight={800} fontSize={k > 4 ? 28 : 34} fill={theme.text} opacity={p}>
                    {it.label}
                  </text>
                </g>
              );
            })}
          </g>
        );
      }
      case "meter": {
        // Percentage arc: value is a number 0-100 (shown with its unit).
        const pct = Math.max(0, Math.min(100, parseFloat(value ?? "0") || 0));
        const t = ramp(frame, 4, 44);
        const r = 300;
        const cx = 540;
        const cy = CY + 40;
        const end = Math.PI * (1 + (pct / 100) * t);
        const pt = (a: number) => `${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r}`;
        const icon = items[0];
        return (
          <g>
            <path d={`M ${pt(Math.PI)} A ${r} ${r} 0 0 1 ${pt(2 * Math.PI)}`} fill="none" stroke="#2C2F3A" strokeWidth={56} strokeLinecap="round" />
            {pct > 0 && <path d={`M ${pt(Math.PI)} A ${r} ${r} 0 0 1 ${pt(end)}`} fill="none" stroke={theme.accent} strokeWidth={56} strokeLinecap="round" />}
            {icon?.icon && <Icon name={icon.icon} x={cx} y={cy - 150} size={200} opacity={Math.min(1, t * 2)} />}
            <text x={cx} y={cy + 150} textAnchor="middle" fontFamily={theme.font} fontWeight={900} fontSize={170} fill={theme.accent}>
              {Math.round(pct * t)}%
            </text>
            <Caption x={cx} y={cy + 240} text={unit?.replace(/^%\s*/, "")} size={54} opacity={ramp(frame, 12, 24)} />
          </g>
        );
      }
      case "timeline": {
        const k = Math.min(n, 5);
        const gap = 190;
        const top = CY - ((k - 1) * gap) / 2;
        const line = ramp(frame, 4, 40);
        return (
          <g>
            <line x1={260} y1={top} x2={260} y2={lerp(top, top + (k - 1) * gap, line)} stroke="#3A3E4B" strokeWidth={8} strokeLinecap="round" />
            {items.slice(0, k).map((it, i) => {
              const p = pop(frame, fps, i);
              const y = top + i * gap;
              return (
                <g key={i} opacity={Math.min(1, p)}>
                  <circle cx={260} cy={y} r={26} fill={theme.accent} />
                  {it.icon && <Icon name={it.icon} x={420} y={y} size={110} />}
                  <text x={510} y={y + 16} fontFamily={theme.font} fontWeight={800} fontSize={46} fill={theme.text}>
                    {it.label}
                  </text>
                </g>
              );
            })}
          </g>
        );
      }
    }
  })();
  return (
    <Svg>
      <Glow cx={540} cy={CY} r={520} color={theme.accent} opacity={0.12} />
      {body}
    </Svg>
  );
};
