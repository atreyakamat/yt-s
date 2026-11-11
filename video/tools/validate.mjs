// Every rule a reel script must pass. Shared by tools/sync.mjs (real build, full YAML parser)
// and tools/precheck.mjs (no dependencies, works before `npm install`).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const videoDir = path.resolve(here, "..");
export const repo = path.resolve(videoDir, "..");
export const contentDir = path.join(repo, "how-things-work");
// Hand-built visuals and the states they support. Keep in sync with src/visuals/*.tsx.
const BESPOKE = {
  lock: ["closed", "cutaway", "springs", "wrong-key", "right-key", "unlocked"],
  "key-grid": [],
  placeholder: [],
  zipper: ["race", "tunnel", "teeth", "interlock", "sideways", "wedge", "ykk"],
  "pen-cap": ["hook", "chew", "airway", "standard"],
  airbag: ["freeze", "sensor", "igniter", "gas", "clock", "vents"],
  microwave: ["mesh", "magnetron", "molecules", "heat", "wave-vs-hole", "light"],
  checkout: ["screen", "loadcells", "lookup", "match", "mismatch"],
  manhole: ["square-drop", "diagonal", "circle", "roll", "no-lineup"],
  "click-pen": ["click", "parts", "push-twist", "locked", "released", "spin"],
  touchscreen: ["glove", "layers", "field", "finger", "xy", "glove-block"],
  fridge: ["ship", "lake", "icehouse", "map", "fridge", "coils"],
};

// Icon and colour names are read straight from the source so they can never drift.
const src = (f) => fs.readFileSync(path.join(videoDir, "src/visuals/generic", f), "utf8");
const GLYPHS = new Set([...src("Glyph.tsx").matchAll(/^ {2}([a-z]+): \(/gm)].map((m) => m[1]));
const COLORS = new Set([...src("palette.ts").matchAll(/^ {2}([a-z]+): /gm)].map((m) => m[1]));
const ICONS = new Set(
  [...fs.readFileSync(path.join(videoDir, "src/visuals/icons.tsx"), "utf8").matchAll(/^  "?([a-z][a-z0-9-]*)"?: \(\) =>/gm)].map((m) => m[1]),
);
const EXPLAINER_LAYOUTS = ["hero", "pair", "flow", "grid", "num", "bars", "timeline", "ring", "ladder", "meter"];
const SFX = new Set(["whoosh", "slice", "thunk", "buzz", "click", "unlock", "pop"]);
const SERIES = new Set([
  "cut-it-open",
  "youve-been-using-it-wrong",
  "why-is-it-shaped-like-that",
  "the-1-second-machine",
  "before-it-existed",
  "new-year", // seasonal set: how-things-work/new-year/<group>/vid-N.md, drawn with the "explainer" visual
]);
const MUSIC = new Set(
  fs
    .readFileSync(path.join(repo, "music/tracks.tsv"), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => l.split("\t")[0].trim()),
);

// ── tiny schema helpers for the generic visuals ──
const fail = (m) => {
  throw new Error(m);
};
const str = (v, name, max, optional = false) => {
  if (v === undefined && optional) return;
  if (typeof v !== "string" || !v.trim()) fail(`${name} must be text`);
  if (v.length > max) fail(`${name} "${v}" is ${v.length} chars (max ${max})`);
};
const num = (v, name, min, max, optional = false) => {
  if (v === undefined && optional) return;
  if (typeof v !== "number" || !Number.isFinite(v)) fail(`${name} must be a number`);
  if (v < min || v > max) fail(`${name} ${v} must be between ${min} and ${max}`);
};
const icon = (v, name, optional = false) => {
  if (v === undefined && optional) return;
  if (!GLYPHS.has(v)) fail(`${name} '${v}' is not an icon (use one of: ${[...GLYPHS].join(", ")})`);
};
const color = (v, name) => {
  if (v !== undefined && !COLORS.has(v)) fail(`${name} '${v}' is not a colour (use one of: ${[...COLORS].join(", ")})`);
};
const list = (v, name, min, max) => {
  if (!Array.isArray(v)) fail(`${name} must be a list`);
  if (v.length < min || v.length > max) fail(`${name} needs ${min}-${max} entries (has ${v.length})`);
  return v;
};
const oneOf = (v, name, opts) => {
  if (v !== undefined && !opts.includes(v)) fail(`${name} '${v}' must be one of: ${opts.join(", ")}`);
};
const item = (it, name, max = 30) => {
  if (typeof it !== "object" || it === null) fail(`${name} must be { label: ... }`);
  str(it.label, `${name}.label`, max);
  icon(it.icon, `${name}.icon`, true);
  color(it.color, `${name}.color`);
};

const GENERIC = {
  hero: (v) => {
    icon(v.icon, "icon");
    str(v.label, "label", 30, true);
    color(v.color, "color");
    oneOf(v.motion, "motion", ["float", "spin", "pulse", "shake", "drop"]);
  },
  layers: (v) =>
    list(v.items, "items", 2, 6).forEach((it, i) => {
      str(it?.label, `items[${i}].label`, 26);
      color(it.color, `items[${i}].color`);
    }),
  flow: (v) => list(v.steps, "steps", 2, 5).forEach((it, i) => item(it, `steps[${i}]`, 36)),
  compare: (v) => {
    oneOf(v.mode, "mode", ["wrong-right", "versus", "before-after"]);
    for (const side of ["left", "right"]) {
      item(v[side], side, 24);
      str(v[side].tag, `${side}.tag`, 16, true);
    }
  },
  cycle: (v) => {
    list(v.steps, "steps", 3, 5).forEach((s, i) => str(s, `steps[${i}]`, 30));
    icon(v.icon, "icon", true);
    color(v.color, "color");
  },
  counter: (v) => {
    num(v.to, "to", -1e12, 1e12);
    num(v.from, "from", -1e12, 1e12, true);
    str(v.prefix, "prefix", 6, true);
    str(v.suffix, "suffix", 8, true);
    num(v.decimals, "decimals", 0, 2, true);
    str(v.label, "label", 30, true);
    icon(v.icon, "icon", true);
    color(v.color, "color");
    const shown = `${v.prefix ?? ""}${Math.round(v.to).toLocaleString("en-US")}${v.suffix ?? ""}`;
    if (shown.length > 14) fail(`counter "${shown}" is too long to show (max 14 chars incl. prefix/suffix)`);
  },
  timeline: (v) =>
    list(v.events, "events", 2, 5).forEach((e, i) => {
      str(String(e?.year ?? ""), `events[${i}].year`, 12);
      str(e.label, `events[${i}].label`, 50);
    }),
  bars: (v) => {
    list(v.items, "items", 2, 5).forEach((it, i) => {
      str(it?.label, `items[${i}].label`, 30);
      num(it.value, `items[${i}].value`, 0, 1e12);
      color(it.color, `items[${i}].color`);
    });
    str(v.unit, "unit", 8, true);
  },
  zoom: (v) =>
    list(v.levels, "levels", 2, 4).forEach((it, i) => {
      item(it, `levels[${i}]`, 30);
      icon(it.icon, `levels[${i}].icon`);
    }),
  callout: (v) => {
    icon(v.icon, "icon");
    list(v.parts, "parts", 2, 5).forEach((s, i) => str(s, `parts[${i}]`, 30));
    color(v.color, "color");
  },
  grid: (v) => {
    icon(v.icon, "icon");
    num(v.count, "count", 1, 40);
    if (!Number.isInteger(v.count)) fail("count must be a whole number");
    num(v.highlight, "highlight", 0, v.count, true);
    str(v.label, "label", 30, true);
    color(v.color, "color");
  },
  gauge: (v) => {
    num(v.value, "value", 0, 100);
    str(v.low, "low", 12, true);
    str(v.high, "high", 12, true);
    str(v.label, "label", 30, true);
  },
  wave: (v) =>
    list(v.waves, "waves", 1, 2).forEach((w, i) => {
      str(w?.label, `waves[${i}].label`, 30);
      num(w.freq, `waves[${i}].freq`, 1, 10);
      color(w.color, `waves[${i}].color`);
    }),
};

// Speech budget: Piper speaks ~2.6 words/s and voiceover.py may speed a line up to 1.3x.
const MAX_WORDS_PER_SEC = 3.4;

/** Parse + validate one script. `parseYaml` is the YAML parser to use. Throws on the first error. */
export function parseReel(file, parseYaml) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) fail("missing frontmatter");
  const meta = parseYaml(fm[1]);
  const base = path.basename(file, ".md");
  if (meta.id !== base) fail(`id '${meta.id}' does not match file name '${base}'`);
  str(meta.title, "title", 100);
  if (!SERIES.has(meta.series)) fail(`series '${meta.series}' unknown`);
  if (path.relative(contentDir, file).split(path.sep)[0] !== meta.series) fail(`file is in the wrong folder for series '${meta.series}'`);
  if (meta.music && !MUSIC.has(meta.music)) fail(`music '${meta.music}' is not in music/tracks.tsv`);
  if (meta.accent && !/^#[0-9A-Fa-f]{6}$/.test(meta.accent)) fail(`accent must be a #RRGGBB colour`);

  const block = raw.match(/```yaml\n([\s\S]*?)\n```/);
  if (!block) fail("missing ```yaml scenes block");
  const { scenes } = parseYaml(block[1]);
  if (!Array.isArray(scenes) || scenes.length === 0) fail("no scenes");

  let cursor = 0;
  for (const [i, s] of scenes.entries()) {
    const where = `scene ${i + 1}`;
    try {
      if (typeof s.at !== "number" || typeof s.dur !== "number") fail(`at/dur must be numbers`);
      if (Math.abs(s.at - cursor) > 0.001) fail(`starts at ${s.at}s but previous scene ends at ${cursor}s`);
      if (s.dur < 1.5 || s.dur > 12) fail(`dur ${s.dur}s must be 1.5-12s`);
      cursor = s.at + s.dur;
      s.text ??= "";
      s.vo ??= "";
      if (typeof s.text !== "string" || s.text.length > 28) fail(`text "${s.text}" is over 28 chars`);
      if (s.highlight && !s.text.includes(s.highlight)) fail(`highlight "${s.highlight}" is not in text "${s.text}"`);
      // Numbers are spoken as several words: "1833" = "eighteen thirty-three", "250" = "two hundred fifty".
      const words = s.vo
        .split(/\s+/)
        .filter(Boolean)
        .reduce((n, w) => n + (/\d/.test(w) ? Math.max(1, w.replace(/\D/g, "").length) : 1), 0);
      if (words > s.dur * MAX_WORDS_PER_SEC)
        fail(`vo has ${words} words for ${s.dur}s (max ${Math.floor(s.dur * MAX_WORDS_PER_SEC)}): shorten it or lengthen the scene`);
      if (i === 0 && words > 10) fail(`hook line has ${words} words (max 10)`);
      if (s.sfx && !SFX.has(s.sfx)) fail(`sfx '${s.sfx}' unknown (use one of: ${[...SFX].join(", ")})`);

      s.visual ??= { kind: "placeholder" };
      const kind = s.visual.kind;
      if (kind === "explainer") {
        const v = s.visual;
        if (!EXPLAINER_LAYOUTS.includes(v.layout)) fail(`explainer layout '${v.layout}' unknown (use: ${EXPLAINER_LAYOUTS.join(", ")})`);
        for (const it of v.items ?? []) if (it.icon && !ICONS.has(it.icon)) fail(`unknown explainer icon '${it.icon}'`);
        if ((v.layout === "num" || v.layout === "meter") && !v.value) fail(`explainer ${v.layout} needs a value`);
        if (v.layout === "meter" && !(Number(v.value) >= 0 && Number(v.value) <= 100)) fail("explainer meter value must be a number from 0 to 100");
        if (v.layout === "pair" && (v.items?.length ?? 0) !== 2) fail("explainer pair needs exactly 2 items");
        if (v.layout !== "num" && v.layout !== "meter" && !v.items?.length) fail(`explainer ${v.layout} needs items`);
      } else if (GENERIC[kind]) {
        GENERIC[kind](s.visual);
      } else if (BESPOKE[kind]) {
        const states = BESPOKE[kind];
        if (states.length && !states.includes(s.visual.state))
          fail(`'${kind}' has no state '${s.visual.state}' (use one of: ${states.join(", ")})`);
      } else {
        fail(`visual kind '${kind}' unknown (use one of: ${Object.keys(GENERIC).join(", ")})`);
      }
    } catch (e) {
      throw new Error(`${where}: ${e.message}`);
    }
  }
  if (meta.duration && Math.abs(meta.duration - cursor) > 0.001)
    fail(`scenes add up to ${cursor}s but duration says ${meta.duration}s`);
  if (cursor < 15 || cursor > 60) fail(`total length ${cursor}s must be 15-60s`);
  return { ...meta, duration: cursor, scenes };
}


/** Every script path, sorted by reel number. */
export const idNum = (id) => Number(String(id).replace(/\D/g, ""));
export const listScripts = () =>
  fs
    .readdirSync(contentDir, { recursive: true })
    .map(String)
    .filter((f) => /vid-\d+\.md$/.test(f))
    .map((f) => path.join(contentDir, f))
    .sort((a, b) => idNum(path.basename(a)) - idNum(path.basename(b)));

/** Validate every script. Returns { reels, errors }. */
export function validateAll(parseYaml) {
  const errors = [];
  const reels = [];
  const seen = new Map();
  const topics = new Map();
  for (const file of listScripts()) {
    const rel = path.relative(repo, file).replace(/\\/g, "/");
    try {
      const reel = parseReel(file, parseYaml);
      if (seen.has(reel.id)) fail(`duplicate id, also in ${seen.get(reel.id)}`);
      seen.set(reel.id, rel);
      const t = String(reel.topic ?? "").toLowerCase().trim();
      if (t && topics.has(t)) fail(`topic '${reel.topic}' is already used by ${topics.get(t)}`);
      topics.set(t, reel.id);
      reels.push(reel);
    } catch (e) {
      errors.push(`${rel}: ${e.message}`);
    }
  }
  return { reels, errors };
}