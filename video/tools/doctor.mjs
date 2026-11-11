// Preflight: tells you (or agy) in one screen whether `npm run daily` will work.
//   npm run doctor
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import YAML from "yaml";
import { validateAll } from "./validate.mjs";
import { findExe, repo, videoDir, voiceReady } from "./render.mjs";

let bad = 0;
const row = (ok, name, fix) => {
  console.log(`${ok ? "  OK " : " FAIL"}  ${name}${ok || !fix ? "" : `\n         -> ${fix}`}`);
  if (!ok) bad++;
};
const warn = (name, note) => console.log(`  WARN  ${name}\n         -> ${note}`);

const major = Number(process.versions.node.split(".")[0]);
row(major >= 20, `Node ${process.versions.node}`, "install Node 20.19+, 22.13+ or 24");
row(fs.existsSync(path.join(videoDir, "node_modules", "remotion")), "Remotion installed", "cd video && npm install");
row(Boolean(findExe("ffmpeg")), "ffmpeg on PATH", "install ffmpeg (winget install ffmpeg)");
if (voiceReady()) row(true, "Piper voice ready");
else warn("Piper voice not set up", "reels still render (captions + SFX, no voice). pip install piper-tts, then python -m piper.download_voices en_US-lessac-medium --data-dir tools/voices (run in repo root)");
if (findExe("yt-dlp")) row(true, "yt-dlp on PATH (music)");
else warn("yt-dlp missing", "reels render without music. pip install yt-dlp");

const { reels, errors } = validateAll((t) => YAML.parse(t));
row(errors.length === 0, `Scripts valid: ${reels.length} ok, ${errors.length} with errors`, errors.slice(0, 3).join("; "));

const stateFile = path.join(repo, ".cutaway-progress.json");
const done = fs.existsSync(stateFile) ? Object.keys(JSON.parse(fs.readFileSync(stateFile, "utf8")).done ?? {}).length : 0;
console.log(`\n  Progress: ${done} of ${reels.length} reels rendered so far.`);

const gitExe = findExe("git");
const g = gitExe ? spawnSync(gitExe, ["-C", repo, "status", "-sb"], { encoding: "utf8" }) : null;
if (g && g.status === 0) console.log(`  Git: ${g.stdout.split("\n")[0]}   (run "git pull origin main" first if behind)`);

console.log(bad ? `\n${bad} problem(s). Fix the FAIL lines, then run again.` : "\nReady: run  npm run daily");
process.exit(bad ? 1 : 0);
