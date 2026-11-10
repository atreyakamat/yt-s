export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const theme = {
  bg: "#0B0B0F",
  glow: "#1B1B24",
  text: "#FFFFFF",
  muted: "#9AA0AA",
  accent: "#FFD60A",
  red: "#FF453A",
  green: "#32D74B",
  font: "Inter",
};

// Shorts UI covers the bottom ~380px and the right ~140px.
export const SAFE = { top: 140, bottom: 380, side: 90, right: 140 };

/** Mix a hex colour toward white (amount > 0) or black (amount < 0). */
export const shade = (hex: string, amount: number) => {
  const n = parseInt(hex.slice(1), 16);
  const target = amount > 0 ? 255 : 0;
  const a = Math.abs(amount);
  const ch = (shift: number) => {
    const c = (n >> shift) & 255;
    return Math.round(c + (target - c) * a);
  };
  return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
};
