// The everyday command. Renders the next reels in order, with voice and music when available,
// and writes the text to paste when you post. Remembers what's done in ../.cutaway-progress.json.
//
//   npm run daily                 next 2 reels
//   npm run daily -- 3            next 3 reels
//   npm run daily -- --dry        just show what's next
//   npm run daily -- --redo vid-26   render one again (e.g. after a script fix)
//   npm run daily -- --redo vid-1..vid-30   or   --redo vid-3,vid-9   render several again
//
// Output: ../out/<YYYY-MM-DD>/<id>.mp4 + <id>.txt (title, description, hashtags, pinned comment) + <id>.transcript.txt + <id>.srt
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { validateAll } from "./validate.mjs";
import { ensureMusic, musicCredits, render, repo, requireInstall, sync, voiceover, voiceReady } from "./render.mjs";

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const redoAt = args.indexOf("--redo");
const redo = redoAt >= 0 ? args[redoAt + 1] : undefined;
// "vid-1..vid-30" (a range) or "vid-3,vid-9" (a list) or "vid-26".
const redoIds = (() => {
  if (!redo) return null;
  const range = redo.match(/^vid-(\d+)\.\.(?:vid-)?(\d+)$/);
  if (range) {
    const [a, b] = [Number(range[1]), Number(range[2])];
    return new Set(Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i));
  }
  return new Set(redo.split(",").filter(Boolean).map((id) => Number(id.replace(/\D/g, ""))));
})();
const count = Number(args.find((a) => /^\d+$/.test(a)) ?? process.env.DAILY_COUNT ?? 2);

const stateFile = path.join(repo, ".cutaway-progress.json");
const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, "utf8")) : { done: {} };
const save = () => fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));

const PINNED = {
  "cut-it-open": "What should we cut open next?",
  "youve-been-using-it-wrong": "What else have we all been using wrong?",
  "why-is-it-shaped-like-that": "What shape should we explain next?",
  "the-1-second-machine": "What else happens in under a second?",
  "before-it-existed": "What should we go back in time for next?",
  "new-year": "What should we explain for the new year?",
};

const stamp = (t) => {
  const ms = Math.round(t * 1000);
  const p = (n, w = 2) => String(n).padStart(w, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};
const toSrt = (scenes) =>
  scenes
    .filter((sc) => sc.vo)
    .map((sc, i) => `${i + 1}\n${stamp(sc.at)} --> ${stamp(sc.at + sc.dur - 0.05)}\n${sc.vo}\n`)
    .join("\n");

const { reels, errors } = validateAll((t) => YAML.parse(t));
if (errors.length) {
  // Never block the day on one bad script: skip it and say so.
  console.warn(`  ! ${errors.length} script(s) have errors and will be skipped:\n` + errors.map((e) => `    ${e}`).join("\n"));
}
const ready = reels.filter((r) => r.status === "ready-to-build");
// The "new-year" set is seasonal: it jumps the queue from 1 Dec to 5 Jan, and waits otherwise (set DAILY_SEASON=1 to force it).
const now = new Date();
const newYearSeason = process.env.DAILY_SEASON === "1" || now.getMonth() === 11 || (now.getMonth() === 0 && now.getDate() <= 5);
const todo = ready.filter((r) => !state.done[r.id] && (r.series !== "new-year" || newYearSeason));
if (newYearSeason) todo.sort((a, b) => Number(b.series === "new-year") - Number(a.series === "new-year"));
const picks = redoIds ? ready.filter((r) => redoIds.has(Number(r.id.replace(/\D/g, "")))) : todo.slice(0, count);

const doneCount = Object.keys(state.done).length;
console.log(`Cutaway daily: ${doneCount} of ${ready.length} reels done, ${ready.length - doneCount} left.`);
if (!picks.length) {
  console.log(redo ? `No ready reel called ${redo}.` : "Nothing left to render. All scripts are done!");
  process.exit(0);
}
console.log(`Today: ${picks.map((r) => `${r.id} (${r.topic ?? r.title})`).join(", ")}`);
if (dry) process.exit(0);
requireInstall();

// Music: fetch any missing track once (needs yt-dlp). Reels still render without it.
for (const slug of new Set(picks.map((r) => r.music).filter(Boolean))) {
  if (!ensureMusic(slug)) console.warn(`  ! music '${slug}' unavailable, rendering without it`);
}

// Voice: the free offline Piper voice, if it's set up (see README "Sound").
const ids = picks.map((r) => r.id);
if (voiceReady()) {
  if (!voiceover(ids)) console.warn("  ! voiceover failed, rendering with captions only");
} else {
  console.warn("  ! no voice set up yet (README > Sound): rendering with captions + music only");
}

sync(ids);
const day = new Date().toISOString().slice(0, 10);
const dir = path.join(repo, "out", day);
const credits = musicCredits();
const made = [];
for (const reel of picks) {
  const out = path.join(dir, `${reel.id}.mp4`);
  const t0 = Date.now();
  console.log(`\nRendering ${reel.id}: ${reel.title}`);
  try {
    render(reel.id, out);
  } catch {
    console.error(`  x ${reel.id} failed to render, skipped (the next run will try it again)`);
    continue;
  }
  const tags = (reel.hashtags ?? []).map((t) => `#${String(t).replace(/^#/, "")}`).join(" ");
  const description = reel.description ?? reel.scenes[0]?.vo ?? "";
  const credit = reel.music && credits[reel.music] ? `\n\nMusic: ${credits[reel.music].credit}` : "";
  const post = [
    `TITLE:\n${reel.title}`,
    `DESCRIPTION:\n${description}${credit}\n\n${tags}`,
    `PINNED COMMENT:\n${reel.pinned ?? PINNED[reel.series] ?? ""}`,
  ].join("\n\n");
  fs.writeFileSync(path.join(dir, `${reel.id}.txt`), post + "\n");
  // Transcript (plain text) and an .srt subtitle file (YouTube accepts it as a caption upload).
  fs.writeFileSync(path.join(dir, `${reel.id}.transcript.txt`), reel.scenes.map((sc) => sc.vo).filter(Boolean).join("\n") + "\n");
  fs.writeFileSync(path.join(dir, `${reel.id}.srt`), toSrt(reel.scenes));
  state.done[reel.id] = day;
  save();
  made.push(reel.id);
  console.log(`  done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}

console.log(`\n${made.length} reel(s) ready in ${path.relative(process.cwd(), dir) || dir}:`);
for (const id of made) console.log(`  ${id}.mp4  + ${id}.txt (post text) + ${id}.transcript.txt + ${id}.srt`);
console.log("Post them, then run the same command tomorrow.");
