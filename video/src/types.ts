export type LockState = "closed" | "cutaway" | "springs" | "wrong-key" | "right-key" | "unlocked";

export type Visual =
  | { kind: "lock"; state: LockState; keyIn?: number; camera?: "punch-in" | "pull-to-start" }
  | { kind: "key-grid" }
  | { kind: "placeholder"; label?: string; note?: string }
  | { kind: Exclude<VisualKind, "lock" | "key-grid" | "placeholder">; state: string };

export type VisualKind =
  | "lock"
  | "key-grid"
  | "placeholder"
  | "zipper"
  | "pen-cap"
  | "airbag"
  | "microwave"
  | "checkout"
  | "manhole"
  | "click-pen"
  | "touchscreen"
  | "fridge";

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
