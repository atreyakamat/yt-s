// Reads every how-things-work/<series>/vid-xx.md, validates it, and writes
// src/reels.generated.json for Remotion. Also copies the music/SFX/VO the
// reels need from ../assets and ../music/files into public/ (gitignored).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const here = path.dirname(fileURLToPath(import.meta.url));
const videoDir = path.resolve(here, "..");
const repo = path.resolve(videoDir, "..");
const contentDir = path.join(repo, "how-things-work");
const publicDir = path.join(videoDir, "public");

// Every visual kind and the states it supports. Keep in sync with src/visuals/*.tsx.
const VISUALS = {
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
const errors = [];
const warn = (m) => console.warn(`  ! ${m}`);

function parseReel(file) {
  const raw = fs.readFileSync(file, "utf8");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) throw new Error("missing frontmatter");
  const meta = YAML.parse(fm[1]);
  const block = raw.match(/```yaml\n([\s\S]*?)\n```/);
  if (!block) throw new Error("missing ```yaml scenes block");
  const { scenes } = YAML.parse(block[1]);
  if (!Array.isArray(scenes) || scenes.length === 0) throw new Error("no scenes");

  let cursor = 0;
  for (const [i, s] of scenes.entries()) {
    const where = `scene ${i + 1}`;
    if (typeof s.at !== "number" || typeof s.dur !== "number") throw new Error(`${where}: at/dur must be numbers`);
    if (Math.abs(s.at - cursor) > 0.001) throw new Error(`${where}: starts at ${s.at}s but previous scene ends at ${cursor}s`);
    cursor = s.at + s.dur;
    s.visual ??= { kind: "placeholder" };
    const states = VISUALS[s.visual.kind];
    if (!states) {
      warn(`${meta.id} ${where}: visual '${s.visual.kind}' not built yet, using placeholder`);
      s.visual = { kind: "placeholder", label: s.visual.kind, note: s.note ?? "" };
    } else if (states.length && !states.includes(s.visual.state)) {
      throw new Error(`${where}: '${s.visual.kind}' has no state '${s.visual.state}' (use one of: ${states.join(", ")})`);
    }
    s.text ??= "";
    s.vo ??= "";
  }
  if (meta.duration && Math.abs(meta.duration - cursor) > 0.001)
    throw new Error(`scenes add up to ${cursor}s but duration says ${meta.duration}s`);
  return { ...meta, duration: cursor, scenes };
}

function copyIfExists(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return true;
}

const files = fs
  .readdirSync(contentDir, { recursive: true })
  .filter((f) => /vid-\d+\.md$/.test(f))
  .map((f) => path.join(contentDir, f))
  .sort();

const reels = [];
for (const file of files) {
  const rel = path.relative(repo, file);
  try {
    const reel = parseReel(file);
    // Assets: copied into public/ so Remotion can serve them.
    reel.assets = {
      vo: copyIfExists(path.join(repo, "assets/vo", `${reel.id}.mp3`), path.join(publicDir, "vo", `${reel.id}.mp3`)),
      music: reel.music
        ? copyIfExists(path.join(repo, "music/files", `${reel.music}.mp3`), path.join(publicDir, "music", `${reel.music}.mp3`))
        : false,
      sfx: [...new Set(reel.scenes.map((s) => s.sfx).filter(Boolean))].filter((n) =>
        copyIfExists(path.join(repo, "assets/sfx", `${n}.mp3`), path.join(publicDir, "sfx", `${n}.mp3`)),
      ),
    };
    if (!reel.assets.vo) warn(`${reel.id}: no voiceover (assets/vo/${reel.id}.mp3), captions only`);
    if (reel.music && !reel.assets.music) warn(`${reel.id}: music '${reel.music}' not downloaded (run music/download.sh)`);
    reels.push(reel);
    console.log(`  ✓ ${rel} (${reel.scenes.length} scenes, ${reel.duration}s)`);
  } catch (e) {
    errors.push(`${rel}: ${e.message}`);
  }
}

reels.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(videoDir, "src/reels.generated.json"), JSON.stringify(reels, null, 2));
if (errors.length) {
  console.error("\nErrors:\n" + errors.map((e) => `  ✗ ${e}`).join("\n"));
  process.exit(1);
}
console.log(`\nSynced ${reels.length} reels.`);
