// Shared helpers: run the Remotion CLI and the voiceover tool in a way that works on Windows too
// (no `npx`, no shell: the CLI is started with this same Node binary).
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const videoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const repo = path.resolve(videoDir, "..");
const cliDir = path.join(videoDir, "node_modules", "@remotion", "cli");
const cliBin = () => {
  try {
    const { bin } = JSON.parse(fs.readFileSync(path.join(cliDir, "package.json"), "utf8"));
    return path.join(cliDir, typeof bin === "string" ? bin : (bin.remotion ?? "remotion-cli.js"));
  } catch {
    return path.join(cliDir, "remotion-cli.js");
  }
};
const remotionCli = cliBin();

export function requireInstall() {
  if (!fs.existsSync(remotionCli)) {
    console.error("Remotion is not installed yet. Run this once:\n\n  cd video\n  npm install\n");
    process.exit(1);
  }
}

/** Validate every script and bundle only these reels. */
export function sync(ids) {
  execFileSync(process.execPath, ["tools/sync.mjs", "--only", ids.join(",")], { cwd: videoDir, stdio: "inherit" });
}

/** Render one reel to `out`. Throws if Remotion fails. */
export function render(id, out) {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const args = [remotionCli, "render", "src/index.ts", id, out, "--codec=h264", "--crf=18", "--log=warn"];
  if (process.env.CONCURRENCY) args.push(`--concurrency=${process.env.CONCURRENCY}`);
  // Optional: use an existing Chrome instead of the one Remotion downloads.
  if (process.env.BROWSER_EXECUTABLE) args.push(`--browser-executable=${process.env.BROWSER_EXECUTABLE}`);
  execFileSync(process.execPath, args, { cwd: videoDir, stdio: "inherit" });
}

/** Find a program on PATH ourselves and run it by absolute path (no bare-name lookup at spawn time). */
export function findExe(name) {
  const exts = process.platform === "win32" ? (process.env.PATHEXT ?? ".EXE;.CMD;.BAT").split(";") : [""];
  for (const dir of (process.env.PATH ?? "").split(path.delimiter).filter(Boolean)) {
    for (const ext of exts) {
      const candidate = path.join(dir, name + ext.toLowerCase());
      if (fs.existsSync(candidate)) return candidate;
    }
  }
  return null;
}

const python = findExe(process.platform === "win32" ? "python" : "python3") ?? "python3";

/** Is the free offline Piper voice set up? (see tools/voiceover.py) */
export function voiceReady() {
  const voice = process.env.PIPER_VOICE ?? "en_US-lessac-medium";
  if (!fs.existsSync(path.join(repo, "tools", "voices", `${voice}.onnx`))) return false;
  return spawnSync(python, ["-c", "import piper"], { stdio: "ignore" }).status === 0;
}

/** Make assets/vo/<id>.mp3 for these reels. Returns false if it failed. */
export function voiceover(ids) {
  const r = spawnSync(python, ["tools/voiceover.py", ...ids], {
    cwd: repo,
    stdio: "inherit",
    env: { ...process.env, PYTHONIOENCODING: "utf-8", PYTHONUTF8: "1" },
  });
  return r.status === 0;
}

/** Music slug -> credit line, from music/tracks.tsv. */
export function musicCredits() {
  const map = {};
  for (const line of fs.readFileSync(path.join(repo, "music/tracks.tsv"), "utf8").split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const [slug, query, , credit] = line.split("\t");
    map[slug] = { query, credit };
  }
  return map;
}

/** Download a music track with yt-dlp if it's missing (same as music/download.sh). */
export function ensureMusic(slug) {
  const dest = path.join(repo, "music", "files", `${slug}.mp3`);
  if (fs.existsSync(dest)) return true;
  const track = musicCredits()[slug];
  if (!track) return false;
  const ytdlp = findExe("yt-dlp");
  if (!ytdlp || spawnSync(ytdlp, ["--version"], { stdio: "ignore" }).status !== 0) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const src = track.query.startsWith("http") ? track.query : `ytsearch1:${track.query}`;
  console.log(`  downloading music '${slug}' <- ${src}`);
  const r = spawnSync(
    ytdlp,
    [
      src,
      "--no-playlist",
      "--match-filter",
      "duration < 600",
      "-x",
      "--audio-format",
      "mp3",
      "--audio-quality",
      "0",
      "-o",
      path.join(repo, "music", "files", `${slug}.%(ext)s`),
      "--print-to-file",
      "title: %(title)s | uploader: %(uploader)s | url: %(webpage_url)s",
      path.join(repo, "music", "files", `${slug}.source.txt`),
      "--quiet",
      "--no-warnings",
    ],
    { stdio: "inherit" },
  );
  return r.status === 0 && fs.existsSync(dest);
}
