import { theme } from "../../theme";

/** Named colours scripts may use (`color: brass`). Anything else falls back to steel. */
export const PALETTE: Record<string, string> = {
  accent: theme.accent,
  brass: "#E0A526",
  steel: "#C9CED6",
  grey: "#5B6270",
  dark: "#3A3F4B",
  red: "#FF453A",
  green: "#32D74B",
  blue: "#0A84FF",
  cyan: "#64D2FF",
  orange: "#FF9F0A",
  purple: "#BF5AF2",
  pink: "#FF375F",
  white: "#F2F2F7",
  brown: "#A2845E",
};

export const COLOR_NAMES = Object.keys(PALETTE);

/** Cycle used when a list item has no colour of its own. */
const CYCLE = ["blue", "orange", "green", "purple", "cyan", "pink"];

export const colorOf = (name: string | undefined, index = 0, accent = theme.accent) => {
  if (name === "accent") return accent;
  if (name && PALETTE[name]) return PALETTE[name];
  return PALETTE[CYCLE[index % CYCLE.length]];
};
