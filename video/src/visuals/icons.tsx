import React from "react";
import { shade } from "../theme";

/**
 * Flat 3D-style icons, each drawn in a 200x200 box (centre 100,100).
 * Add one by adding a key below: the script checker reads the keys from this file.
 * Keys MUST start at two spaces, then the name, then `: () =>` so the checker finds them.
 */
const W = "#E8E8EC";
const S = "#9AA0AA";
const D = "#3A3F4B";
const Y = "#FFD60A";
const R = "#FF453A";
const G = "#32D74B";
const B = "#4FA3FF";
const O = "#FF9F0A";
const P = "#BF5AF2";
const K = "#15171C";

const rays = (n: number, r1: number, r2: number, color: string, w: number) =>
  Array.from({ length: n }).map((_, i) => {
    const a = (i / n) * Math.PI * 2;
    return (
      <line
        key={i}
        x1={100 + Math.cos(a) * r1}
        y1={100 + Math.sin(a) * r1}
        x2={100 + Math.cos(a) * r2}
        y2={100 + Math.sin(a) * r2}
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
      />
    );
  });

const star = (cx: number, cy: number, r: number, color: string) => {
  const pts = Array.from({ length: 10 }).map((_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? r * 0.45 : r;
    return `${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`;
  });
  return <polygon points={pts.join(" ")} fill={color} />;
};

const person = (cx: number, cy: number, s: number, color: string) => (
  <g>
    <circle cx={cx} cy={cy - 28 * s} r={20 * s} fill={color} />
    <path d={`M ${cx - 34 * s} ${cy + 50 * s} Q ${cx - 34 * s} ${cy - 4 * s} ${cx} ${cy - 4 * s} Q ${cx + 34 * s} ${cy - 4 * s} ${cx + 34 * s} ${cy + 50 * s} Z`} fill={color} />
  </g>
);

export const ICONS: Record<string, () => React.ReactElement> = {
  burst: () => (
    <g>
      {rays(12, 34, 92, Y, 10)}
      {rays(12, 34, 70, R, 10).map((e, i) => (i % 2 ? e : null))}
      <circle cx={100} cy={100} r={24} fill={O} />
    </g>
  ),
  star: () => <g>{star(100, 104, 86, Y)}</g>,
  sparkle: () => (
    <g>
      <path d="M100 14 Q108 92 186 100 Q108 108 100 186 Q92 108 14 100 Q92 92 100 14 Z" fill={W} />
      <path d="M160 28 Q163 52 186 55 Q163 58 160 82 Q157 58 134 55 Q157 52 160 28 Z" fill={Y} />
    </g>
  ),
  rocket: () => (
    <g>
      <path d="M100 14 Q150 60 140 130 L60 130 Q50 60 100 14 Z" fill={W} />
      <circle cx={100} cy={72} r={16} fill={B} />
      <polygon points="60,100 28,150 62,136" fill={R} />
      <polygon points="140,100 172,150 138,136" fill={R} />
      <path d="M78 134 Q100 196 122 134 Z" fill={O} />
    </g>
  ),
  moon: () => <path d="M 130 20 A 82 82 0 1 0 176 146 A 66 66 0 1 1 130 20 Z" fill={Y} />,
  sun: () => (
    <g>
      {rays(10, 56, 90, Y, 12)}
      <circle cx={100} cy={100} r={44} fill={O} />
    </g>
  ),
  snowflake: () => (
    <g stroke={B} strokeWidth={10} strokeLinecap="round">
      {[0, 60, 120].map((a) => (
        <line key={a} x1={100 + Math.cos((a * Math.PI) / 180) * 84} y1={100 + Math.sin((a * Math.PI) / 180) * 84} x2={100 - Math.cos((a * Math.PI) / 180) * 84} y2={100 - Math.sin((a * Math.PI) / 180) * 84} />
      ))}
      <circle cx={100} cy={100} r={12} fill={W} stroke="none" />
    </g>
  ),
  cloud: () => (
    <g fill={W}>
      <circle cx={70} cy={110} r={34} />
      <circle cx={112} cy={86} r={40} />
      <circle cx={148} cy={116} r={30} />
      <rect x={52} y={110} width={112} height={36} rx={18} />
    </g>
  ),
  bolt: () => <polygon points="118,10 46,112 94,112 76,190 156,80 106,80" fill={Y} />,
  flame: () => (
    <g>
      <path d="M100 16 C 128 56 162 88 152 134 C 146 168 122 188 100 188 C 76 188 50 168 48 134 C 46 102 74 86 80 58 C 90 70 96 54 100 16 Z" fill={O} />
      <path d="M100 96 C 116 120 132 134 126 156 C 122 174 110 182 100 182 C 88 182 76 172 76 156 C 76 138 92 126 100 96 Z" fill={Y} />
    </g>
  ),
  drop: () => <path d="M100 14 C 132 66 164 98 164 134 A 64 64 0 0 1 36 134 C 36 98 68 66 100 14 Z" fill={B} />,
  wave: () => <path d="M10 100 Q 35 30 60 100 T 110 100 T 160 100 T 200 100" fill="none" stroke={B} strokeWidth={14} strokeLinecap="round" />,
  globe: () => (
    <g>
      <circle cx={100} cy={100} r={84} fill={B} />
      <path d="M60 60 Q90 40 110 62 Q96 90 76 96 Q50 90 60 60 Z" fill={G} />
      <path d="M118 108 Q150 100 160 126 Q146 156 120 150 Q108 128 118 108 Z" fill={G} />
      <ellipse cx={100} cy={100} rx={36} ry={84} fill="none" stroke={W} strokeWidth={4} opacity={0.6} />
    </g>
  ),
  orbit: () => (
    <g>
      <ellipse cx={100} cy={100} rx={86} ry={50} fill="none" stroke={S} strokeWidth={5} strokeDasharray="10 8" />
      <circle cx={100} cy={100} r={26} fill={Y} />
      <circle cx={170} cy={78} r={14} fill={B} />
    </g>
  ),
  atom: () => (
    <g fill="none" stroke={B} strokeWidth={6}>
      {[0, 60, 120].map((a) => (
        <ellipse key={a} cx={100} cy={100} rx={86} ry={30} transform={`rotate(${a} 100 100)`} />
      ))}
      <circle cx={100} cy={100} r={14} fill={R} stroke="none" />
    </g>
  ),
  clock: () => (
    <g>
      <circle cx={100} cy={100} r={84} fill={W} stroke={D} strokeWidth={8} />
      {rays(12, 70, 78, D, 5)}
      <line x1={100} y1={100} x2={100} y2={44} stroke={D} strokeWidth={9} strokeLinecap="round" />
      <line x1={100} y1={100} x2={140} y2={118} stroke={R} strokeWidth={7} strokeLinecap="round" />
      <circle cx={100} cy={100} r={8} fill={D} />
    </g>
  ),
  calendar: () => (
    <g>
      <rect x={22} y={34} width={156} height={144} rx={16} fill={W} />
      <path d="M22 50 Q22 34 38 34 L162 34 Q178 34 178 50 L178 78 L22 78 Z" fill={R} />
      <rect x={56} y={20} width={12} height={30} rx={6} fill={D} />
      <rect x={132} y={20} width={12} height={30} rx={6} fill={D} />
      {[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => <rect key={`${r}${c}`} x={40 + c * 34} y={92 + r * 26} width={20} height={14} rx={3} fill={r === 1 && c === 2 ? R : S} />))}
    </g>
  ),
  hourglass: () => (
    <g>
      <polygon points="50,24 150,24 108,100 150,176 50,176 92,100" fill={W} opacity={0.35} />
      <polygon points="62,34 138,34 104,92 96,92" fill={Y} />
      <polygon points="74,168 126,168 106,126 94,126" fill={Y} />
      <rect x={36} y={14} width={128} height={14} rx={7} fill={D} />
      <rect x={36} y={172} width={128} height={14} rx={7} fill={D} />
    </g>
  ),
  bell: () => (
    <g>
      <path d="M100 22 Q146 28 146 90 L146 124 L162 146 L38 146 L54 124 L54 90 Q54 28 100 22 Z" fill={Y} />
      <circle cx={100} cy={166} r={14} fill={O} />
      <circle cx={100} cy={20} r={8} fill={O} />
    </g>
  ),
  bottle: () => (
    <g>
      <rect x={84} y={8} width={32} height={22} rx={4} fill={Y} />
      <rect x={88} y={28} width={24} height={50} fill="#1E6B3A" />
      <path d="M88 70 Q60 90 60 120 L60 184 L140 184 L140 120 Q140 90 112 70 Z" fill="#1E6B3A" />
      <rect x={64} y={120} width={72} height={36} fill={W} />
    </g>
  ),
  glass: () => (
    <g>
      <path d="M62 16 L138 16 L124 98 Q100 118 76 98 Z" fill={Y} opacity={0.9} />
      <rect x={96} y={110} width={8} height={54} fill={S} />
      <ellipse cx={100} cy={170} rx={34} ry={9} fill={S} />
      {[[88, 70], [104, 52], [112, 80], [96, 36]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill={W} />
      ))}
    </g>
  ),
  bubble: () => (
    <g fill="none" stroke={B} strokeWidth={7}>
      <circle cx={80} cy={116} r={50} />
      <circle cx={146} cy={64} r={28} />
      <circle cx={52} cy={46} r={16} />
      <circle cx={70} cy={100} r={10} stroke={W} strokeWidth={5} />
    </g>
  ),
  balloon: () => (
    <g>
      <ellipse cx={100} cy={80} rx={56} ry={66} fill={R} />
      <polygon points="92,144 108,144 100,158" fill={shade(R, -0.3)} />
      <path d="M100 158 Q86 172 100 184 Q114 192 100 200" fill="none" stroke={S} strokeWidth={4} />
      <ellipse cx={80} cy={56} rx={10} ry={18} fill={W} opacity={0.5} />
    </g>
  ),
  confetti: () => (
    <g>
      {[
        [40, 40, Y, 20], [100, 24, R, -30], [150, 50, B, 40], [64, 100, G, 10],
        [124, 96, P, -20], [170, 120, O, 30], [50, 160, B, -40], [112, 150, Y, 15], [160, 170, R, -10],
      ].map(([x, y, c, a], i) => (
        <rect key={i} x={(x as number) - 12} y={(y as number) - 6} width={24} height={12} rx={2} fill={c as string} transform={`rotate(${a} ${x} ${y})`} />
      ))}
    </g>
  ),
  gift: () => (
    <g>
      <rect x={30} y={80} width={140} height={100} rx={8} fill={R} />
      <rect x={22} y={60} width={156} height={34} rx={8} fill={shade(R, 0.15)} />
      <rect x={90} y={60} width={20} height={120} fill={Y} />
      <path d="M100 60 Q60 10 50 40 Q60 62 100 60 Z M100 60 Q140 10 150 40 Q140 62 100 60 Z" fill={Y} />
    </g>
  ),
  candle: () => (
    <g>
      <rect x={76} y={80} width={48} height={100} rx={6} fill={W} />
      <rect x={96} y={64} width={8} height={20} fill={D} />
      <path d="M100 14 Q122 44 112 62 Q100 70 88 62 Q78 44 100 14 Z" fill={O} />
    </g>
  ),
  lantern: () => (
    <g>
      <rect x={84} y={10} width={32} height={16} rx={4} fill={D} />
      <ellipse cx={100} cy={100} rx={62} ry={66} fill={R} />
      <rect x={72} y={150} width={56} height={14} rx={4} fill={D} />
      <ellipse cx={100} cy={100} rx={22} ry={52} fill={Y} opacity={0.5} />
      <line x1={100} y1={164} x2={100} y2={196} stroke={Y} strokeWidth={6} />
    </g>
  ),
  ball: () => (
    <g>
      <circle cx={100} cy={100} r={80} fill={B} />
      {[-48, -16, 16, 48].map((o) => (
        <line key={`h${o}`} x1={26} y1={100 + o} x2={174} y2={100 + o} stroke={W} strokeWidth={3} opacity={0.6} />
      ))}
      {[-48, -16, 16, 48].map((o) => (
        <line key={`v${o}`} x1={100 + o} y1={28} x2={100 + o} y2={172} stroke={W} strokeWidth={3} opacity={0.6} />
      ))}
      <circle cx={74} cy={72} r={14} fill={W} opacity={0.5} />
    </g>
  ),
  heart: () => <path d="M100 178 C 20 120 14 52 62 40 C 86 34 100 52 100 64 C 100 52 114 34 138 40 C 186 52 180 120 100 178 Z" fill={R} />,
  pulse: () => <polyline points="8,104 50,104 66,60 92,152 112,40 128,104 192,104" fill="none" stroke={R} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />,
  brain: () => (
    <g fill={P}>
      <path d="M100 40 C 70 14 20 40 36 78 C 10 96 24 140 56 140 C 64 170 100 176 100 176 Z" />
      <path d="M100 40 C 130 14 180 40 164 78 C 190 96 176 140 144 140 C 136 170 100 176 100 176 Z" fill={shade(P, 0.15)} />
      <path d="M100 44 L100 172" stroke={D} strokeWidth={4} fill="none" />
    </g>
  ),
  eye: () => (
    <g>
      <path d="M8 100 Q100 12 192 100 Q100 188 8 100 Z" fill={W} />
      <circle cx={100} cy={100} r={38} fill={B} />
      <circle cx={100} cy={100} r={18} fill={K} />
      <circle cx={112} cy={88} r={7} fill={W} />
    </g>
  ),
  bed: () => (
    <g>
      <rect x={14} y={70} width={14} height={100} rx={4} fill={D} />
      <rect x={14} y={120} width={172} height={30} rx={6} fill={B} />
      <rect x={28} y={100} width={44} height={22} rx={10} fill={W} />
      <rect x={72} y={104} width={114} height={20} rx={8} fill={shade(B, 0.25)} />
      <text x={130} y={64} fontFamily="Inter" fontWeight={900} fontSize={40} fill={Y}>
        z z
      </text>
    </g>
  ),
  dumbbell: () => (
    <g fill={S}>
      <rect x={60} y={90} width={80} height={20} rx={6} fill={D} />
      <rect x={30} y={56} width={30} height={88} rx={8} />
      <rect x={140} y={56} width={30} height={88} rx={8} />
      <rect x={12} y={76} width={18} height={48} rx={6} />
      <rect x={170} y={76} width={18} height={48} rx={6} />
    </g>
  ),
  coin: () => (
    <g>
      <circle cx={100} cy={100} r={80} fill={Y} />
      <circle cx={100} cy={100} r={62} fill="none" stroke={O} strokeWidth={6} />
      <text x={100} y={128} textAnchor="middle" fontFamily="Inter" fontWeight={900} fontSize={84} fill={O}>
        $
      </text>
    </g>
  ),
  coins: () => (
    <g>
      {[150, 126, 102, 78].map((y, i) => (
        <g key={y}>
          <ellipse cx={100} cy={y + 14} rx={62} ry={20} fill={O} />
          <ellipse cx={100} cy={y} rx={62} ry={20} fill={Y} opacity={1 - i * 0.04} />
        </g>
      ))}
    </g>
  ),
  "chart-up": () => (
    <g>
      <polyline points="20,20 20,180 184,180" fill="none" stroke={S} strokeWidth={8} strokeLinecap="round" />
      <polyline points="32,150 76,104 110,126 170,50" fill="none" stroke={G} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="150,44 184,38 176,72" fill={G} />
    </g>
  ),
  "chart-down": () => (
    <g>
      <polyline points="20,20 20,180 184,180" fill="none" stroke={S} strokeWidth={8} strokeLinecap="round" />
      <polyline points="32,50 76,96 110,74 170,150" fill="none" stroke={R} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="150,156 184,162 176,128" fill={R} />
    </g>
  ),
  bank: () => (
    <g fill={W}>
      <polygon points="100,16 184,64 16,64" fill={S} />
      {[34, 70, 106, 142].map((x) => (
        <rect key={x} x={x} y={74} width={24} height={72} rx={3} />
      ))}
      <rect x={20} y={152} width={160} height={22} rx={4} />
    </g>
  ),
  percent: () => (
    <text x={100} y={146} textAnchor="middle" fontFamily="Inter" fontWeight={900} fontSize={160} fill={G}>
      %
    </text>
  ),
  lock: () => (
    <g>
      <path d="M58 90 L58 66 A42 42 0 0 1 142 66 L142 90" fill="none" stroke={S} strokeWidth={16} />
      <rect x={34} y={86} width={132} height={98} rx={14} fill={Y} />
      <circle cx={100} cy={128} r={12} fill={D} />
      <rect x={95} y={132} width={10} height={28} rx={4} fill={D} />
    </g>
  ),
  key: () => (
    <g fill={Y}>
      <circle cx={56} cy={100} r={40} />
      <circle cx={56} cy={100} r={14} fill={K} />
      <rect x={90} y={92} width={96} height={16} rx={4} />
      <rect x={146} y={106} width={14} height={28} rx={3} />
      <rect x={168} y={106} width={14} height={20} rx={3} />
    </g>
  ),
  phone: () => (
    <g>
      <rect x={52} y={12} width={96} height={176} rx={18} fill={D} />
      <rect x={60} y={28} width={80} height={140} rx={6} fill={B} />
      <circle cx={100} cy={178} r={5} fill={S} />
    </g>
  ),
  watch: () => (
    <g>
      <rect x={72} y={10} width={56} height={180} rx={14} fill={D} />
      <rect x={52} y={52} width={96} height={96} rx={24} fill={K} stroke={S} strokeWidth={6} />
      <polyline points="64,104 80,104 88,84 100,122 110,92 118,104 136,104" fill="none" stroke={R} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  wifi: () => (
    <g fill="none" stroke={B} strokeWidth={14} strokeLinecap="round">
      <path d="M20 78 Q100 6 180 78" />
      <path d="M48 106 Q100 62 152 106" />
      <path d="M76 134 Q100 114 124 134" />
      <circle cx={100} cy={162} r={9} fill={B} />
    </g>
  ),
  battery: () => (
    <g>
      <rect x={14} y={52} width={158} height={96} rx={16} fill="none" stroke={W} strokeWidth={9} />
      <rect x={174} y={82} width={14} height={36} rx={4} fill={W} />
      <rect x={28} y={66} width={90} height={68} rx={8} fill={G} />
    </g>
  ),
  gear: () => (
    <g>
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={86} y={6} width={28} height={40} rx={4} fill={S} transform={`rotate(${i * 45} 100 100)`} />
      ))}
      <circle cx={100} cy={100} r={62} fill={S} />
      <circle cx={100} cy={100} r={26} fill={K} />
    </g>
  ),
  chip: () => (
    <g>
      {[44, 72, 100, 128, 156].map((v) => (
        <g key={v} fill={S}>
          <rect x={v - 5} y={14} width={10} height={24} />
          <rect x={v - 5} y={162} width={10} height={24} />
          <rect x={14} y={v - 5} width={24} height={10} />
          <rect x={162} y={v - 5} width={24} height={10} />
        </g>
      ))}
      <rect x={36} y={36} width={128} height={128} rx={12} fill={D} />
      <rect x={64} y={64} width={72} height={72} rx={6} fill={B} />
    </g>
  ),
  lightbulb: () => (
    <g>
      <path d="M100 14 A58 58 0 0 1 134 120 L134 138 L66 138 L66 120 A58 58 0 0 1 100 14 Z" fill={Y} />
      <rect x={70} y={144} width={60} height={14} rx={5} fill={S} />
      <rect x={78} y={162} width={44} height={14} rx={5} fill={S} />
    </g>
  ),
  magnet: () => (
    <g>
      <path d="M40 20 L40 110 A60 60 0 0 0 160 110 L160 20" fill="none" stroke={R} strokeWidth={34} />
      <rect x={23} y={14} width={34} height={36} fill={W} />
      <rect x={143} y={14} width={34} height={36} fill={W} />
    </g>
  ),
  plug: () => (
    <g>
      <rect x={66} y={10} width={14} height={50} rx={4} fill={S} />
      <rect x={120} y={10} width={14} height={50} rx={4} fill={S} />
      <rect x={48} y={56} width={104} height={66} rx={18} fill={D} />
      <path d="M100 122 L100 160 Q100 190 140 190" fill="none" stroke={D} strokeWidth={14} />
    </g>
  ),
  satellite: () => (
    <g transform="rotate(-30 100 100)">
      <rect x={72} y={74} width={56} height={52} rx={8} fill={W} />
      <rect x={6} y={78} width={60} height={44} fill={B} />
      <rect x={134} y={78} width={60} height={44} fill={B} />
      <line x1={100} y1={74} x2={100} y2={36} stroke={S} strokeWidth={5} />
      <circle cx={100} cy={32} r={8} fill={R} />
    </g>
  ),
  speaker: () => (
    <g>
      <polygon points="30,76 66,76 112,36 112,164 66,124 30,124" fill={W} />
      <path d="M130 76 Q152 100 130 124" fill="none" stroke={B} strokeWidth={10} strokeLinecap="round" />
      <path d="M150 54 Q190 100 150 146" fill="none" stroke={B} strokeWidth={10} strokeLinecap="round" />
    </g>
  ),
  camera: () => (
    <g>
      <rect x={14} y={54} width={172} height={116} rx={18} fill={D} />
      <rect x={64} y={36} width={52} height={24} rx={6} fill={D} />
      <circle cx={100} cy={112} r={44} fill={S} />
      <circle cx={100} cy={112} r={30} fill={K} />
      <circle cx={88} cy={100} r={8} fill={B} />
      <circle cx={162} cy={78} r={6} fill={R} />
    </g>
  ),
  person: () => <g>{person(100, 100, 1.7, B)}</g>,
  people: () => (
    <g>
      {person(54, 110, 0.9, S)}
      {person(146, 110, 0.9, S)}
      {person(100, 100, 1.1, B)}
    </g>
  ),
  house: () => (
    <g>
      <polygon points="100,18 188,92 12,92" fill={R} />
      <rect x={32} y={90} width={136} height={90} fill={W} />
      <rect x={84} y={124} width={32} height={56} fill={D} />
      <rect x={46} y={106} width={28} height={28} fill={B} />
    </g>
  ),
  box: () => (
    <g>
      <polygon points="30,70 100,34 170,70 100,106" fill={shade(O, 0.25)} />
      <polygon points="30,70 100,106 100,176 30,140" fill={O} />
      <polygon points="170,70 100,106 100,176 170,140" fill={shade(O, -0.3)} />
    </g>
  ),
  "arrow-right": () => <polygon points="14,76 110,76 110,40 188,100 110,160 110,124 14,124" fill={Y} />,
  check: () => <polyline points="30,104 80,152 172,50" fill="none" stroke={G} strokeWidth={26} strokeLinecap="round" strokeLinejoin="round" />,
  cross: () => (
    <g stroke={R} strokeWidth={26} strokeLinecap="round">
      <line x1={42} y1={42} x2={158} y2={158} />
      <line x1={158} y1={42} x2={42} y2={158} />
    </g>
  ),
  question: () => (
    <text x={100} y={158} textAnchor="middle" fontFamily="Inter" fontWeight={900} fontSize={190} fill={Y}>
      ?
    </text>
  ),
  flag: () => (
    <g>
      <rect x={30} y={14} width={12} height={170} rx={5} fill={S} />
      <path d="M42 24 L172 24 L146 62 L172 100 L42 100 Z" fill={R} />
    </g>
  ),
  target: () => (
    <g>
      <circle cx={100} cy={100} r={84} fill={W} />
      <circle cx={100} cy={100} r={62} fill={R} />
      <circle cx={100} cy={100} r={40} fill={W} />
      <circle cx={100} cy={100} r={18} fill={R} />
    </g>
  ),
  scale: () => (
    <g>
      <rect x={94} y={30} width={12} height={140} fill={S} />
      <rect x={50} y={168} width={100} height={14} rx={6} fill={D} />
      <rect x={24} y={42} width={152} height={10} rx={5} fill={W} />
      <path d="M24 52 L8 110 L56 110 Z" fill={Y} />
      <path d="M176 52 L144 110 L192 110 Z" fill={Y} />
    </g>
  ),
  thermometer: () => (
    <g>
      <rect x={78} y={14} width={44} height={120} rx={22} fill={W} />
      <rect x={92} y={50} width={16} height={90} fill={R} />
      <circle cx={100} cy={148} r={34} fill={R} />
    </g>
  ),
  spring: () => <polyline points="100,10 150,34 50,60 150,86 50,112 150,138 50,164 100,190" fill="none" stroke={S} strokeWidth={12} strokeLinejoin="round" />,
  tree: () => (
    <g>
      <rect x={88} y={120} width={24} height={64} fill="#8B5A2B" />
      <circle cx={100} cy={72} r={48} fill={G} />
      <circle cx={64} cy={104} r={34} fill={shade(G, -0.15)} />
      <circle cx={138} cy={104} r={34} fill={shade(G, -0.15)} />
    </g>
  ),
  plant: () => (
    <g>
      <path d="M60 130 L140 130 L128 184 L72 184 Z" fill={O} />
      <path d="M100 130 L100 60" stroke={G} strokeWidth={8} />
      <path d="M100 90 Q50 80 54 36 Q100 44 100 90 Z" fill={G} />
      <path d="M100 76 Q150 66 146 24 Q100 32 100 76 Z" fill={shade(G, 0.15)} />
    </g>
  ),
  mountain: () => (
    <g>
      <polygon points="10,176 80,46 140,176" fill={S} />
      <polygon points="80,176 140,70 192,176" fill={shade(S, -0.2)} />
      <polygon points="80,46 100,82 82,76 66,84" fill={W} />
    </g>
  ),
  door: () => (
    <g>
      <rect x={48} y={14} width={104} height={172} rx={8} fill="#8B5A2B" />
      <rect x={62} y={30} width={76} height={60} rx={4} fill={shade("#8B5A2B", -0.2)} />
      <circle cx={132} cy={110} r={8} fill={Y} />
    </g>
  ),
  list: () => (
    <g>
      <rect x={30} y={14} width={140} height={172} rx={14} fill={W} />
      {[56, 100, 144].map((y) => (
        <g key={y}>
          <polyline points={`48,${y} 56,${y + 8} 70,${y - 8}`} fill="none" stroke={G} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
          <rect x={84} y={y - 6} width={66} height={10} rx={5} fill={S} />
        </g>
      ))}
    </g>
  ),
  shield: () => (
    <g>
      <path d="M100 12 L172 38 L172 100 Q172 156 100 190 Q28 156 28 100 L28 38 Z" fill={B} />
      <polyline points="64,100 92,128 138,72" fill="none" stroke={W} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  "loop-arrow": () => (
    <g>
      <path d="M160 100 A60 60 0 1 1 100 40" fill="none" stroke={B} strokeWidth={18} strokeLinecap="round" />
      <polygon points="88,12 130,40 88,70" fill={B} />
    </g>
  ),
  sunrise: () => (
    <g>
      <path d="M36 140 A64 64 0 0 1 164 140 Z" fill={O} />
      {rays(7, 80, 104, Y, 9).map((e, i) => (i < 7 ? e : null))}
      <rect x={10} y={140} width={180} height={12} rx={6} fill={S} />
    </g>
  ),
  sparkler: () => (
    <g>
      <line x1={46} y1={186} x2={116} y2={80} stroke={S} strokeWidth={8} strokeLinecap="round" />
      {rays(14, 12, 40, Y, 6).map((e) => (
        <g key={e.key} transform="translate(116 66) scale(0.9) translate(-100 -100)">
          {e}
        </g>
      ))}
    </g>
  ),
  cork: () => (
    <g>
      <rect x={66} y={70} width={68} height={70} rx={8} fill="#C9A26B" />
      <rect x={60} y={58} width={80} height={16} rx={6} fill="#B0894F" />
      {rays(8, 80, 98, Y, 8)}
    </g>
  ),
  fireworks: () => (
    <g>
      {rays(16, 20, 84, Y, 7)}
      {rays(16, 20, 56, R, 7).map((e, i) => (i % 2 ? e : null))}
      <circle cx={100} cy={100} r={10} fill={W} />
    </g>
  ),
  crowd: () => (
    <g>
      {person(40, 120, 0.7, S)}
      {person(160, 120, 0.7, S)}
      {person(76, 110, 0.85, shade(B, -0.2))}
      {person(124, 110, 0.85, shade(B, -0.2))}
      {person(100, 100, 1, B)}
    </g>
  ),
};

export const ICON_NAMES = Object.keys(ICONS);

/** Draw an icon centred at (x, y) with the given size in canvas units. */
export const Icon: React.FC<{ name: string; x: number; y: number; size: number; opacity?: number }> = ({ name, x, y, size, opacity = 1 }) => {
  const draw = ICONS[name];
  return (
    <g transform={`translate(${x - size / 2} ${y - size / 2}) scale(${size / 200})`} opacity={opacity}>
      {draw ? (
        draw()
      ) : (
        <g>
          <circle cx={100} cy={100} r={70} fill="none" stroke="#FF453A" strokeWidth={8} strokeDasharray="14 10" />
          <text x={100} y={112} textAnchor="middle" fontFamily="Inter" fontWeight={800} fontSize={30} fill="#FF453A">
            {name}
          </text>
        </g>
      )}
    </g>
  );
};
