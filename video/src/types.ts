import type { ExplainerProps } from "./visuals/Explainer";

export type LockState = "closed" | "cutaway" | "springs" | "wrong-key" | "right-key" | "unlocked";

/** Reusable data-driven visuals (src/visuals/generic). Field rules live in tools/sync.mjs. */
type Item = { label: string; icon?: string; color?: string };
export type GenericVisual =
  | { kind: "hero"; icon: string; label?: string; color?: string; motion?: "float" | "spin" | "pulse" | "shake" | "drop" }
  | { kind: "layers"; items: { label: string; color?: string }[] }
  | { kind: "flow"; steps: Item[] }
  | {
      kind: "compare";
      mode?: "wrong-right" | "versus" | "before-after";
      left: Item & { tag?: string };
      right: Item & { tag?: string };
    }
  | { kind: "cycle"; steps: string[]; icon?: string; color?: string }
  | {
      kind: "counter";
      to: number;
      from?: number;
      prefix?: string;
      suffix?: string;
      decimals?: number;
      label?: string;
      icon?: string;
      color?: string;
    }
  | { kind: "timeline"; events: { year: string; label: string }[] }
  | { kind: "bars"; items: { label: string; value: number; color?: string }[]; unit?: string }
  | { kind: "zoom"; levels: Item[] }
  | { kind: "callout"; icon: string; parts: string[]; color?: string }
  | { kind: "grid"; icon: string; count: number; highlight?: number; label?: string; color?: string }
  | { kind: "gauge"; value: number; low?: string; high?: string; label?: string }
  | { kind: "wave"; waves: { label: string; freq: number; color?: string }[] };

export type GenericKind = GenericVisual["kind"];

export type Visual =
  | { kind: "lock"; state: LockState; keyIn?: number; camera?: "punch-in" | "pull-to-start" }
  | { kind: "key-grid" }
  | { kind: "placeholder"; label?: string; note?: string }
  | GenericVisual
  | ({ kind: "explainer" } & ExplainerProps)
  | { kind: BespokeKind; state: string };

export type BespokeKind =
  | "zipper"
  | "pen-cap"
  | "airbag"
  | "microwave"
  | "checkout"
  | "manhole"
  | "click-pen"
  | "touchscreen"
  | "fridge";

export type VisualKind = "lock" | "key-grid" | "placeholder" | BespokeKind | GenericKind;

export type Scene = {
  at: number;
  dur: number;
  vo: string;
  text: string;
  highlight?: string;
  visual: Visual;
  sfx?: string;
  note?: string;
};

export type Reel = {
  id: string;
  title: string;
  series: string;
  status: string;
  duration: number;
  music?: string;
  musicVolume?: number;
  accent?: string;
  scenes: Scene[];
  assets: { vo: boolean; music: boolean; sfx: string[] };
};
