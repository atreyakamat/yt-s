import React from "react";
import { shade, theme } from "../../theme";

/**
 * A small library of code-drawn icons. Each one is drawn in a 200x200 box centred on 0,0
 * and scaled by <Glyph size>. Scripts reference them by name (`icon: gear`).
 * Keep the list in sync with GLYPHS in tools/sync.mjs (run `npm run lint` to check).
 */
type Draw = (c: string, d: string, l: string) => React.ReactNode;

const gearPath = (teeth: number, rOut: number, rIn: number) => {
  const pts: string[] = [];
  for (let i = 0; i < teeth * 4; i++) {
    const a = (i / (teeth * 4)) * Math.PI * 2;
    const r = i % 4 < 2 ? rOut : rIn;
    pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
};

const BG = theme.bg;

const G: Record<string, Draw> = {
  gear: (c, d) => (
    <>
      <polygon points={gearPath(10, 92, 72)} fill={c} />
      <circle r={52} fill={d} />
      <circle r={26} fill={BG} />
    </>
  ),
  spring: (c) => (
    <polyline
      points="-60,-90 60,-70 -60,-45 60,-20 -60,5 60,30 -60,55 60,80 -60,95"
      fill="none"
      stroke={c}
      strokeWidth={16}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  magnet: () => (
    <>
      <path d="M-80,-90 L-80,10 A80,80 0 0 0 80,10 L80,-90 L40,-90 L40,10 A40,40 0 0 1 -40,10 L-40,-90 Z" fill="#8E8E93" />
      <rect x={-80} y={-90} width={40} height={45} fill="#FF453A" />
      <rect x={40} y={-90} width={40} height={45} fill="#0A84FF" />
    </>
  ),
  battery: (c, d) => (
    <>
      <rect x={-55} y={-80} width={110} height={175} rx={16} fill={d} />
      <rect x={-25} y={-98} width={50} height={20} rx={6} fill={d} />
      <rect x={-40} y={-10} width={80} height={90} rx={8} fill={c} />
      <polygon points="8,-60 -22,5 2,5 -8,55 24,-12 0,-12" fill={theme.accent} />
    </>
  ),
  bolt: (c) => <polygon points="25,-95 -55,15 -5,15 -25,95 55,-20 5,-20" fill={c} />,
  drop: (c, _d, l) => (
    <>
      <path d="M0,-95 C30,-50 70,-5 70,35 A70,70 0 0 1 -70,35 C-70,-5 -30,-50 0,-95 Z" fill={c} />
      <ellipse cx={-25} cy={30} rx={12} ry={24} fill={l} />
    </>
  ),
  flame: (c) => (
    <>
      <path d="M0,-95 C40,-40 75,-10 70,35 A70,62 0 0 1 -70,35 C-72,0 -40,-20 -30,-55 C-15,-30 -10,-20 0,-95 Z" fill="#FF9F0A" />
      <path d="M0,-20 C20,10 35,25 32,50 A32,32 0 0 1 -32,50 C-32,30 -15,15 0,-20 Z" fill={c} />
    </>
  ),
  snowflake: (c) => (
    <g stroke={c} strokeWidth={12} strokeLinecap="round">
      {[0, 60, 120].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <line x1={0} y1={-90} x2={0} y2={90} />
          <polyline points="-22,-70 0,-50 22,-70" fill="none" />
          <polyline points="-22,70 0,50 22,70" fill="none" />
        </g>
      ))}
    </g>
  ),
  wave: (c) => (
    <path
      d="M-95,0 C-75,-70 -50,-70 -30,0 S15,70 35,0 S75,-70 95,0"
      fill="none"
      stroke={c}
      strokeWidth={16}
      strokeLinecap="round"
    />
  ),
  chip: (c, d) => (
    <>
      {[-50, -17, 17, 50].map((p) => (
        <g key={p} fill={theme.muted}>
          <rect x={p - 7} y={-95} width={14} height={30} />
          <rect x={p - 7} y={65} width={14} height={30} />
          <rect x={-95} y={p - 7} width={30} height={14} />
          <rect x={65} y={p - 7} width={30} height={14} />
        </g>
      ))}
      <rect x={-68} y={-68} width={136} height={136} rx={12} fill={d} />
      <rect x={-38} y={-38} width={76} height={76} rx={6} fill={c} />
    </>
  ),
  eye: (c) => (
    <>
      <path d="M-95,0 Q0,-85 95,0 Q0,85 -95,0 Z" fill="#F2F2F7" />
      <circle r={38} fill={c} />
      <circle r={17} fill={BG} />
      <circle cx={10} cy={-12} r={7} fill="#FFFFFF" />
    </>
  ),
  key: (c) => (
    <>
      <circle cx={-55} cy={0} r={40} fill={c} />
      <circle cx={-55} cy={0} r={15} fill={BG} />
      <polygon points="-20,-14 95,-14 95,20 80,20 80,34 62,34 62,20 46,20 46,38 28,38 28,20 -20,20" fill={c} />
    </>
  ),
  lock: (c, d) => (
    <>
      <path d="M-45,-10 L-45,-45 A45,45 0 0 1 45,-45 L45,-10" fill="none" stroke="#C9CED6" strokeWidth={18} />
      <rect x={-70} y={-15} width={140} height={110} rx={14} fill={c} />
      <circle cx={0} cy={30} r={14} fill={d} />
      <rect x={-6} y={30} width={12} height={32} fill={d} />
    </>
  ),
  wheel: (c, d) => (
    <>
      <circle r={92} fill="#2C2C30" />
      <circle r={62} fill={c} />
      {[0, 72, 144, 216, 288].map((a) => (
        <rect key={a} x={-6} y={-60} width={12} height={60} fill={d} transform={`rotate(${a})`} />
      ))}
      <circle r={16} fill={d} />
    </>
  ),
  coil: (c) => (
    <g fill="none" stroke={c} strokeWidth={12}>
      {[-60, -30, 0, 30, 60].map((x) => (
        <ellipse key={x} cx={x} cy={0} rx={22} ry={70} />
      ))}
    </g>
  ),
  lens: (c, _d, l) => (
    <>
      <path d="M0,-95 Q55,0 0,95 Q-55,0 0,-95 Z" fill={c} opacity={0.85} />
      <path d="M-8,-60 Q15,-20 -5,10" fill="none" stroke={l} strokeWidth={8} strokeLinecap="round" />
    </>
  ),
  sun: (c) => (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={-6} y={-96} width={12} height={28} rx={6} fill={c} transform={`rotate(${i * 30})`} />
      ))}
      <circle r={55} fill={c} />
    </>
  ),
  fan: (c, d) => (
    <>
      {[0, 120, 240].map((a) => (
        <path key={a} d="M0,0 C-30,-30 -25,-90 10,-92 C40,-90 35,-40 0,0 Z" fill={c} transform={`rotate(${a})`} />
      ))}
      <circle r={18} fill={d} />
    </>
  ),
  plug: (c, d) => (
    <>
      <rect x={-30} y={-95} width={12} height={40} rx={4} fill="#C9CED6" />
      <rect x={18} y={-95} width={12} height={40} rx={4} fill="#C9CED6" />
      <rect x={-55} y={-60} width={110} height={80} rx={18} fill={c} />
      <path d="M0,20 L0,50 Q0,95 50,95" fill="none" stroke={d} strokeWidth={16} />
    </>
  ),
  bulb: (c) => (
    <>
      <circle cx={0} cy={-25} r={65} fill={c} />
      <rect x={-32} y={35} width={64} height={22} fill="#C9CED6" />
      <rect x={-28} y={60} width={56} height={14} fill="#8E8E93" />
      <rect x={-20} y={77} width={40} height={14} rx={6} fill="#5B6270" />
      <path d="M-20,-20 L-10,10 M20,-20 L10,10" stroke={BG} strokeWidth={6} opacity={0.5} />
    </>
  ),
  clock: (c, d) => (
    <>
      <circle r={90} fill={d} />
      <circle r={74} fill="#F2F2F7" />
      <line x1={0} y1={0} x2={0} y2={-52} stroke={BG} strokeWidth={10} strokeLinecap="round" />
      <line x1={0} y1={0} x2={38} y2={10} stroke={c} strokeWidth={8} strokeLinecap="round" />
      <circle r={8} fill={BG} />
    </>
  ),
  coin: (c, d) => (
    <>
      <ellipse cx={0} cy={20} rx={85} ry={40} fill={d} />
      <rect x={-85} y={-10} width={170} height={30} fill={d} />
      <ellipse cx={0} cy={-10} rx={85} ry={40} fill={c} />
      <ellipse cx={0} cy={-10} rx={55} ry={24} fill="none" stroke={d} strokeWidth={6} />
    </>
  ),
  phone: (c) => (
    <>
      <rect x={-52} y={-95} width={104} height={190} rx={18} fill="#2C2C30" />
      <rect x={-44} y={-80} width={88} height={160} rx={8} fill={c} />
      <rect x={-14} y={-90} width={28} height={6} rx={3} fill={BG} />
    </>
  ),
  car: (c, d) => (
    <>
      <path d="M-95,30 L-95,0 Q-90,-15 -70,-20 L-45,-55 Q-40,-62 -30,-62 L35,-62 Q45,-62 52,-55 L75,-20 Q95,-15 95,5 L95,30 Z" fill={c} />
      <path d="M-35,-52 L-55,-22 L-5,-22 L-5,-52 Z M5,-52 L5,-22 L62,-22 L42,-52 Z" fill={d} />
      <circle cx={-55} cy={32} r={24} fill="#2C2C30" />
      <circle cx={55} cy={32} r={24} fill="#2C2C30" />
      <circle cx={-55} cy={32} r={9} fill="#8E8E93" />
      <circle cx={55} cy={32} r={9} fill="#8E8E93" />
    </>
  ),
  house: (c, d) => (
    <>
      <polygon points="0,-95 -95,-10 95,-10" fill={d} />
      <rect x={-70} y={-12} width={140} height={100} fill={c} />
      <rect x={-18} y={30} width={36} height={58} fill={d} />
      <rect x={30} y={8} width={26} height={26} fill={theme.accent} />
    </>
  ),
  globe: (c, d) => (
    <>
      <circle r={90} fill={c} />
      <g fill="none" stroke={d} strokeWidth={7}>
        <ellipse rx={40} ry={90} />
        <line x1={-90} y1={0} x2={90} y2={0} />
        <path d="M-80,-42 Q0,-25 80,-42 M-80,42 Q0,25 80,42" />
      </g>
    </>
  ),
  molecule: (c, d) => (
    <>
      <g stroke="#8E8E93" strokeWidth={12}>
        <line x1={0} y1={0} x2={-62} y2={-50} />
        <line x1={0} y1={0} x2={62} y2={-50} />
        <line x1={0} y1={0} x2={0} y2={72} />
      </g>
      <circle r={42} fill={c} />
      <circle cx={-62} cy={-50} r={28} fill="#F2F2F7" />
      <circle cx={62} cy={-50} r={28} fill="#F2F2F7" />
      <circle cx={0} cy={72} r={24} fill={d} />
    </>
  ),
  bubble: (c, _d, l) => (
    <g fill="none" stroke={c} strokeWidth={8}>
      <circle cx={-25} cy={20} r={55} />
      <circle cx={50} cy={-45} r={32} />
      <circle cx={55} cy={55} r={18} />
      <path d="M-55,0 A35,35 0 0 1 -30,-25" stroke={l} />
    </g>
  ),
  thermometer: (c) => (
    <>
      <rect x={-22} y={-95} width={44} height={150} rx={22} fill="#F2F2F7" />
      <circle cx={0} cy={60} r={38} fill="#F2F2F7" />
      <rect x={-10} y={-40} width={20} height={100} fill={c} />
      <circle cx={0} cy={60} r={26} fill={c} />
    </>
  ),
  box: (c, d, l) => (
    <>
      <polygon points="0,-90 85,-45 0,0 -85,-45" fill={l} />
      <polygon points="-85,-45 0,0 0,95 -85,50" fill={c} />
      <polygon points="85,-45 0,0 0,95 85,50" fill={d} />
    </>
  ),
  speaker: (c, d) => (
    <>
      <polygon points="-90,-30 -50,-30 0,-75 0,75 -50,30 -90,30" fill={c} />
      <g fill="none" stroke={d} strokeWidth={10} strokeLinecap="round">
        <path d="M25,-35 A50,50 0 0 1 25,35" />
        <path d="M50,-62 A85,85 0 0 1 50,62" />
      </g>
    </>
  ),
  wifi: (c) => (
    <g fill="none" stroke={c} strokeWidth={16} strokeLinecap="round">
      <path d="M-90,-20 A130,130 0 0 1 90,-20" />
      <path d="M-58,15 A85,85 0 0 1 58,15" />
      <path d="M-28,48 A40,40 0 0 1 28,48" />
      <circle cx={0} cy={80} r={10} fill={c} />
    </g>
  ),
  cloud: (c) => (
    <g fill={c}>
      <circle cx={-40} cy={10} r={45} />
      <circle cx={15} cy={-20} r={58} />
      <circle cx={55} cy={20} r={38} />
      <rect x={-80} y={10} width={170} height={48} rx={24} />
    </g>
  ),
  leaf: (c, d) => (
    <>
      <path d="M-80,80 C-90,-20 -10,-90 85,-85 C90,10 20,90 -80,80 Z" fill={c} />
      <path d="M-80,80 L60,-60" stroke={d} strokeWidth={8} />
    </>
  ),
  bottle: (c, _d, l) => (
    <>
      <rect x={-18} y={-98} width={36} height={22} rx={4} fill="#5B6270" />
      <path d="M-18,-76 L-18,-50 Q-50,-35 -50,0 L-50,90 Q-50,98 -42,98 L42,98 Q50,98 50,90 L50,0 Q50,-35 18,-50 L18,-76 Z" fill={c} opacity={0.9} />
      <rect x={-35} y={5} width={18} height={70} rx={9} fill={l} opacity={0.6} />
    </>
  ),
  cup: (c, d) => (
    <>
      <path d="M-70,-60 L70,-60 L55,85 Q53,95 43,95 L-43,95 Q-53,95 -55,85 Z" fill={c} />
      <path d="M68,-30 Q110,-25 100,20 Q95,45 60,45" fill="none" stroke={c} strokeWidth={14} />
      <ellipse cx={0} cy={-60} rx={70} ry={14} fill={d} />
      <path d="M-20,-75 Q-30,-95 -15,-110 M15,-75 Q5,-95 20,-110" fill="none" stroke="#8E8E93" strokeWidth={6} opacity={0.6} />
    </>
  ),
  shield: (c, d) => (
    <>
      <path d="M0,-95 L80,-65 L80,0 Q80,65 0,98 Q-80,65 -80,0 L-80,-65 Z" fill={c} />
      <polyline points="-35,0 -8,28 40,-28" fill="none" stroke={d} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  star: (c) => (
    <polygon
      points={Array.from({ length: 10 })
        .map((_, i) => {
          const r = i % 2 === 0 ? 95 : 40;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`;
        })
        .join(" ")}
      fill={c}
    />
  ),
  pipe: (c, d) => (
    <>
      <path d="M-90,-40 L20,-40 Q60,-40 60,0 L60,95" fill="none" stroke={c} strokeWidth={48} />
      <rect x={-95} y={-72} width={20} height={64} fill={d} />
      <rect x={28} y={75} width={64} height={20} fill={d} />
    </>
  ),
  person: (c) => (
    <>
      <circle cx={0} cy={-55} r={36} fill={c} />
      <path d="M-70,95 L-70,40 Q-70,-5 -25,-5 L25,-5 Q70,-5 70,40 L70,95 Z" fill={c} />
    </>
  ),
  antenna: (c, d) => (
    <>
      <polygon points="0,-40 -50,95 -30,95 0,15 30,95 50,95" fill={d} />
      <circle cx={0} cy={-45} r={16} fill={c} />
      <g fill="none" stroke={c} strokeWidth={9} strokeLinecap="round">
        <path d="M-40,-80 A55,55 0 0 0 -40,-10" />
        <path d="M40,-80 A55,55 0 0 1 40,-10" />
        <path d="M-68,-100 A90,90 0 0 0 -68,10" />
        <path d="M68,-100 A90,90 0 0 1 68,10" />
      </g>
    </>
  ),
  screen: (c) => (
    <>
      <rect x={-95} y={-75} width={190} height={120} rx={10} fill="#2C2C30" />
      <rect x={-84} y={-64} width={168} height={98} rx={4} fill={c} />
      <rect x={-10} y={45} width={20} height={30} fill="#5B6270" />
      <rect x={-50} y={75} width={100} height={14} rx={6} fill="#5B6270" />
    </>
  ),
  germ: (c, d) => (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 36})`}>
          <line x1={0} y1={-60} x2={0} y2={-88} stroke={c} strokeWidth={8} />
          <circle cx={0} cy={-90} r={9} fill={c} />
        </g>
      ))}
      <circle r={62} fill={c} />
      <circle cx={-20} cy={-15} r={12} fill={d} />
      <circle cx={22} cy={10} r={9} fill={d} />
      <circle cx={-5} cy={28} r={7} fill={d} />
    </>
  ),
  plane: (c, d) => (
    <>
      <path d="M0,-95 Q12,-95 12,-70 L12,-20 L95,25 L95,42 L12,18 L12,60 L35,78 L35,92 L0,82 L-35,92 L-35,78 L-12,60 L-12,18 L-95,42 L-95,25 L-12,-20 L-12,-70 Q-12,-95 0,-95 Z" fill={c} />
      <ellipse cx={0} cy={-70} rx={6} ry={12} fill={d} />
    </>
  ),
  heart: (c) => <path d="M0,85 C-60,40 -95,5 -95,-35 A48,48 0 0 1 0,-55 A48,48 0 0 1 95,-35 C95,5 60,40 0,85 Z" fill={c} />,
  barcode: (c) => (
    <>
      <rect x={-95} y={-70} width={190} height={140} rx={8} fill="#F2F2F7" />
      {[-78, -66, -58, -44, -36, -22, -10, 0, 14, 22, 36, 46, 58, 70].map((x, i) => (
        <rect key={x} x={x} y={-52} width={i % 3 === 0 ? 8 : 4} height={88} fill={BG} />
      ))}
      <rect x={-95} y={-4} width={190} height={8} fill={c} opacity={0.9} />
    </>
  ),
  card: (c, d) => (
    <>
      <rect x={-95} y={-60} width={190} height={120} rx={14} fill={c} />
      <rect x={-95} y={-35} width={190} height={22} fill={d} />
      <rect x={-75} y={5} width={40} height={30} rx={5} fill={theme.accent} />
      <rect x={-20} y={30} width={90} height={10} rx={5} fill={d} />
    </>
  ),
  pill: (c) => (
    <g transform="rotate(-35)">
      <rect x={-90} y={-35} width={180} height={70} rx={35} fill="#F2F2F7" />
      <path d="M0,-35 L55,-35 A35,35 0 0 1 55,35 L0,35 Z" fill={c} />
    </g>
  ),
  wrench: (c) => (
    <path
      d="M45,-95 A50,50 0 0 0 -5,-35 L-85,45 A20,20 0 0 0 -55,75 L25,-5 A50,50 0 0 0 85,-55 L60,-35 L35,-40 L30,-65 L55,-90 Z"
      fill={c}
    />
  ),
  arrow: (c) => <polygon points="-90,-25 30,-25 30,-70 95,0 30,70 30,25 -90,25" fill={c} />,
  question: (c) => (
    <>
      <path d="M-45,-40 A45,45 0 1 1 15,2 Q0,12 0,35" fill="none" stroke={c} strokeWidth={26} strokeLinecap="round" />
      <circle cx={0} cy={80} r={16} fill={c} />
    </>
  ),
  wind: (c) => (
    <g fill="none" stroke={c} strokeWidth={14} strokeLinecap="round">
      <path d="M-90,-40 L40,-40 A30,30 0 1 0 10,-70" />
      <path d="M-90,0 L70,0 A28,28 0 1 1 42,28" />
      <path d="M-90,40 L20,40 A25,25 0 1 1 -5,65" />
    </g>
  ),
  water: (c) => (
    <g fill="none" stroke={c} strokeWidth={14} strokeLinecap="round">
      {[-50, 0, 50].map((y) => (
        <path key={y} d={`M-90,${y} q22,-25 45,0 t45,0 t45,0 t45,0`} />
      ))}
    </g>
  ),
  tooth: (c) => <path d="M-60,-80 Q0,-100 60,-80 Q85,-40 60,10 L45,85 Q35,95 25,80 L10,20 Q0,10 -10,20 L-25,80 Q-35,95 -45,85 L-60,10 Q-85,-40 -60,-80 Z" fill={c} />,
  food: (c, d) => (
    <>
      <ellipse cx={0} cy={40} rx={95} ry={30} fill="#F2F2F7" />
      <path d="M-70,30 Q-70,-70 0,-70 Q70,-70 70,30 Z" fill={c} />
      <circle cx={-25} cy={-25} r={8} fill={d} />
      <circle cx={20} cy={-40} r={8} fill={d} />
      <circle cx={30} cy={0} r={8} fill={d} />
    </>
  ),
  shirt: (c, d) => (
    <>
      <path d="M-35,-90 L-95,-55 L-70,-5 L-50,-15 L-50,95 L50,95 L50,-15 L70,-5 L95,-55 L35,-90 Q0,-60 -35,-90 Z" fill={c} />
      <path d="M-35,-90 Q0,-60 35,-90" fill="none" stroke={d} strokeWidth={8} />
    </>
  ),
  ball: (c, d) => (
    <>
      <circle r={90} fill={c} />
      <path d="M-90,0 Q0,-40 90,0 M-90,0 Q0,40 90,0" fill="none" stroke={d} strokeWidth={7} />
      <path d="M0,-90 Q-40,0 0,90" fill="none" stroke={d} strokeWidth={7} />
    </>
  ),
  tree: (c, d) => (
    <>
      <rect x={-14} y={30} width={28} height={65} fill="#A2845E" />
      <circle cx={0} cy={-30} r={60} fill={c} />
      <circle cx={-45} cy={10} r={40} fill={c} />
      <circle cx={45} cy={10} r={40} fill={d} />
    </>
  ),
  bag: (c, d) => (
    <>
      <path d="M-40,-40 L-40,-60 A40,40 0 0 1 40,-60 L40,-40" fill="none" stroke={d} strokeWidth={12} />
      <path d="M-75,-40 L75,-40 L85,95 L-85,95 Z" fill={c} />
    </>
  ),
  door: (c, d) => (
    <>
      <rect x={-60} y={-95} width={120} height={190} rx={6} fill={c} />
      <rect x={-45} y={-80} width={90} height={70} rx={4} fill={d} />
      <rect x={-45} y={5} width={90} height={75} rx={4} fill={d} />
      <circle cx={42} cy={0} r={10} fill={theme.accent} />
    </>
  ),
  tool: (c, d) => (
    <>
      <rect x={-12} y={-20} width={24} height={115} rx={10} fill="#A2845E" />
      <path d="M-80,-60 L60,-60 Q85,-60 85,-40 L85,-25 L-80,-25 Z" fill={c} />
      <rect x={-80} y={-75} width={30} height={65} fill={d} />
    </>
  ),
};

export const GLYPH_NAMES = Object.keys(G);

export const Glyph: React.FC<{
  name: string;
  x: number;
  y: number;
  size: number;
  color: string;
  rotate?: number;
  opacity?: number;
}> = ({ name, x, y, size, color, rotate = 0, opacity = 1 }) => {
  const draw = G[name] ?? G.question;
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size / 200})`}
      opacity={opacity}
    >
      {draw(color, shade(color, -0.4), shade(color, 0.45))}
    </g>
  );
};
