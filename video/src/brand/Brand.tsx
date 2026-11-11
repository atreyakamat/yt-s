import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { theme } from "../theme";

loadFont("normal", { weights: ["600", "800", "900"], subsets: ["latin"] });

/**
 * Cutaway brand marks (see BRAND.md). Rendered as stills:
 *   npx remotion still src/index.ts brand-avatar ../brand/avatar.png
 *   npx remotion still src/index.ts brand-banner ../brand/banner.png
 *   npx remotion still src/index.ts brand-watermark ../brand/watermark.png
 *
 * The emblem: a solid object (grey) sliced on the diagonal, the cut face showing coloured inner layers,
 * with the accent cut line. It reads as "cut it open" even at 48px.
 */
export const BRAND = {
  bg: theme.bg,
  shell: "#3A3F4B",
  shellLight: "#5B6270",
  accent: theme.accent, // #FFD60A "Cut Yellow"
  layers: ["#FF9F0A", "#0A84FF", "#32D74B"],
};

export const Emblem: React.FC<{ size: number }> = ({ size }) => {
  const r = 100;
  return (
    <svg width={size} height={size} viewBox="-120 -120 240 240">
      <defs>
        <clipPath id="disc">
          <circle r={r} />
        </clipPath>
        <clipPath id="inside">
          <polygon points="-40,-130 130,-130 130,130 40,130" />
        </clipPath>
      </defs>
      {/* depth shadow */}
      <circle cx={8} cy={10} r={r} fill="#000" opacity={0.45} />
      <g clipPath="url(#disc)">
        {/* the outside of the object */}
        <rect x={-120} y={-120} width={240} height={240} fill={BRAND.shell} />
        <circle cx={-45} cy={-45} r={70} fill={BRAND.shellLight} opacity={0.35} />
        {/* the cut-open half: coloured layers */}
        <g clipPath="url(#inside)">
          <rect x={-120} y={-120} width={240} height={240} fill="#16171D" />
          {BRAND.layers.map((c, i) => (
            <rect key={c} x={-120} y={-58 + i * 44} width={260} height={30} rx={8} fill={c} transform="rotate(-22)" />
          ))}
          <circle cx={58} cy={-6} r={16} fill={BRAND.accent} />
        </g>
      </g>
      {/* the cut line */}
      <line x1={-46} y1={-118} x2={46} y2={118} stroke={BRAND.accent} strokeWidth={12} strokeLinecap="round" />
      <circle r={r} fill="none" stroke="#000" strokeOpacity={0.35} strokeWidth={4} />
    </svg>
  );
};

const Wordmark: React.FC<{ size: number }> = ({ size }) => (
  <div
    style={{
      fontFamily: theme.font,
      fontWeight: 900,
      fontSize: size,
      letterSpacing: -size * 0.02,
      color: theme.text,
      lineHeight: 1,
    }}
  >
    CUT<span style={{ color: BRAND.accent }}>/</span>AWAY
  </div>
);

const Dots: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 3px, transparent 3.5px)",
      backgroundSize: "64px 64px",
    }}
  />
);

/** Channel icon, 800×800. YouTube crops it to a circle. */
export const Avatar: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(circle at 50% 45%, ${theme.glow} 0%, ${BRAND.bg} 70%)`,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Emblem size={620} />
  </AbsoluteFill>
);

/** Channel banner, 2560×1440. Everything important sits in the 1546×423 centre that shows on every device. */
export const Banner: React.FC = () => (
  <AbsoluteFill style={{ background: BRAND.bg }}>
    <Dots />
    <AbsoluteFill
      style={{ background: `radial-gradient(ellipse at 50% 50%, ${BRAND.accent}22 0%, transparent 45%)` }}
    />
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 56, width: 1546, height: 423, justifyContent: "center" }}>
        <Emblem size={330} />
        <div>
          <Wordmark size={170} />
          <div style={{ fontFamily: theme.font, fontWeight: 800, fontSize: 58, color: theme.muted, marginTop: 22 }}>
            Everyday things, <span style={{ color: theme.text }}>cut open.</span>
          </div>
          <div style={{ fontFamily: theme.font, fontWeight: 600, fontSize: 38, color: BRAND.accent, marginTop: 18 }}>
            A new Short every day
          </div>
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

/** Small corner mark for videos/watermark (YouTube "branding watermark" is 150×150). */
export const Watermark: React.FC = () => (
  <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", background: "transparent" }}>
    <Emblem size={150} />
  </AbsoluteFill>
);
