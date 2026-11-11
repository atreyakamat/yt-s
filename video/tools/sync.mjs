// Validates every how-things-work/batch-NN/vid-N.md (rules: tools/validate.mjs) and writes
// src/reels.generated.json for Remotion. Also copies the music/SFX/VO the reels need from
// ../assets and ../music/files into public/ (gitignored).
//
//   node tools/sync.mjs                         validate + sync every reel
//   node tools/sync.mjs --only vid-12,vid-13    validate all, but only bundle these
//   node tools/sync.mjs --check                 validate only (writes nothing)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { repo, validateAll } from "./validate.mjs";

const videoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(videoDir, "public");

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const onlyArg = args.find((a, i) => args[i - 1] === "--only");
const only = onlyArg ? new Set(onlyArg.split(",").filter(Boolean)) : null;

const { reels, errors: allErrors } = validateAll((t) => YAML.parse(t));
// When rendering chosen reels, a broken script elsewhere must not block them: only their own errors count.
const errors = only ? allErrors.filter((e) => [...only].some((id) => e.includes(`/${id}.md:`))) : allErrors;
if (only && allErrors.length > errors.length)
  console.warn(`  ! ${allErrors.length - errors.length} other script(s) have errors (not rendered now): run npm run check`);
if (errors.length) {
  console.error(`\n${errors.length} script(s) have errors:\n` + errors.map((e) => `  x ${e}`).join("\n"));
  process.exit(1);
}
if (checkOnly) {
  console.log(`Checked ${reels.length} reels: all valid.`);
  process.exit(0);
}

let out = reels;
if (only) {
  const missing = [...only].filter((id) => !reels.some((r) => r.id === id));
  if (missing.length) {
    console.error(`No reel(s): ${missing.join(", ")}`);
    process.exit(1);
  }
  out = reels.filter((r) => only.has(r.id));
}

function copyIfExists(from, dest) {
  if (!fs.existsSync(from)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(from, dest);
  return true;
}

const warnings = [];
for (const reel of out) {
  // How long each line is really spoken (written by tools/voiceover.py) so captions follow the voice.
  const timingFile = path.join(repo, "assets/vo", `${reel.id}.timing.json`);
  if (fs.existsSync(timingFile)) {
    try {
      const { scenes = {} } = JSON.parse(fs.readFileSync(timingFile, "utf8"));
      reel.scenes.forEach((s, i) => {
        if (typeof scenes[i] === "number") s.voDur = scenes[i];
      });
    } catch {
      // A bad timing file just means captions fall back to even spacing.
    }
  }
  reel.assets = {
    vo: copyIfExists(path.join(repo, "assets/vo", `${reel.id}.mp3`), path.join(publicDir, "vo", `${reel.id}.mp3`)),
    music: reel.music
      ? copyIfExists(path.join(repo, "music/files", `${reel.music}.mp3`), path.join(publicDir, "music", `${reel.music}.mp3`))
      : false,
    sfx: [...new Set(reel.scenes.map((s) => s.sfx).filter(Boolean))].filter((n) =>
      copyIfExists(path.join(repo, "assets/sfx", `${n}.mp3`), path.join(publicDir, "sfx", `${n}.mp3`)),
    ),
  };
  if (!reel.assets.vo) warnings.push(`${reel.id}: no voiceover (assets/vo/${reel.id}.mp3), captions only`);
  if (reel.music && !reel.assets.music) warnings.push(`${reel.id}: music '${reel.music}' not downloaded (music/download.sh)`);
}

fs.writeFileSync(path.join(videoDir, "src/reels.generated.json"), JSON.stringify(out, null, 2));
if (warnings.length <= 12) warnings.forEach((w) => console.warn(`  ! ${w}`));
else console.warn(`  ! ${warnings.length} reels have no voiceover/music yet (captions only)`);
console.log(`\nSynced ${out.length} reels${only ? ` (all ${reels.length} scripts valid)` : ""}.`);
