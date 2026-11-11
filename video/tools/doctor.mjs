// Checks that this machine can run the whole pipeline, and prints the exact fix for anything missing.
//   npm run doctor
// Exit code 0 = ready to render with voice + music; 1 = something must be fixed first.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const videoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repo = path.resolve(videoDir, "..");
const win = process.platform === "win32";
const python = win ? "python" : "python3";
let bad = 0;
let warnings = 0;

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { encoding: "utf8", shell: false });
  return r.status === 0 ? (r.stdout || r.stderr || "").trim().split("\n")[0] : null;
};
const ok = (name, detail) => console.log(`  OK    ${name}${detail ? `: ${detail}` : ""}`);
const fail = (name, fix) => {
  bad++;
  console.log(`  FIX   ${name}\n        -> ${fix}`);
};
const warn = (name, fix) => {
  warnings++;
  console.log(`  WARN  ${name}\n        -> ${fix}`);
};

console.log("Cutaway doctor\n");

// Node
const [maj, min] = process.versions.node.split(".").map(Number);
if (maj > 22 || (maj === 22 && min >= 13) || (maj === 20 && min >= 19)) ok("Node", process.versions.node);
else fail("Node 20.19+, 22.13+ or 24 is required", win ? "winget install OpenJS.NodeJS.LTS" : "install Node from nodejs.org");

// npm packages
if (fs.existsSync(path.join(videoDir, "node_modules", "@remotion", "cli"))) ok("npm packages (Remotion)");
else fail("npm packages are not installed", "cd video && npm install");

// ffmpeg / ffprobe
const ff = run("ffmpeg", ["-version"]);
if (ff && run("ffprobe", ["-version"])) ok("ffmpeg + ffprobe", ff.split(" ").slice(0, 3).join(" "));
else fail("ffmpeg/ffprobe not found on PATH", win ? "winget install Gyan.FFmpeg  (then open a new terminal)" : "install ffmpeg");

// Python + voice
const py = run(python, ["--version"]);
if (!py) fail("Python 3 not found", win ? "winget install Python.Python.3.12" : "install python3");
else {
  ok("Python", py);
  const voices = path.join(repo, "tools", "voices");
  const kokoroFiles = ["kokoro-v1.0.onnx", "voices-v1.0.bin"].every((f) => fs.existsSync(path.join(voices, f)));
  const kokoroPkg = spawnSync(python, ["-c", "import kokoro_onnx, soundfile"], { stdio: "ignore" }).status === 0;
  if (kokoroFiles && kokoroPkg) ok("Voice: Kokoro (natural, free)");
  else {
    const piper =
      fs.existsSync(path.join(voices, "en_US-lessac-medium.onnx")) &&
      spawnSync(python, ["-c", "import piper"], { stdio: "ignore" }).status === 0;
    const fix = [
      !kokoroPkg && "pip install kokoro-onnx soundfile",
      !kokoroFiles &&
        "curl -L -o tools/voices/kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx && curl -L -o tools/voices/voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin   (run in the repo root)",
    ]
      .filter(Boolean)
      .join("   then   ");
    if (piper) warn("Voice: only Piper (robotic) is set up", fix);
    else fail("No voice is set up (reels would have captions only)", fix);
  }
}

// yt-dlp for music
const yt = run("yt-dlp", ["--version"]);
if (yt) ok("yt-dlp (music downloads)", yt);
else warn("yt-dlp not found: reels render without music", "pip install -U yt-dlp");
const musicDir = path.join(repo, "music", "files");
const have = fs.existsSync(musicDir) ? fs.readdirSync(musicDir).filter((f) => f.endsWith(".mp3")).length : 0;
ok("Music tracks downloaded", `${have} (the rest download automatically when first needed)`);

// Scripts
const check = spawnSync(process.execPath, ["tools/precheck.mjs"], { cwd: videoDir, encoding: "utf8" });
if (check.status === 0) ok("Scripts", check.stdout.trim());
else warn("Some scripts have errors (those reels are skipped)", "npm run check   and report the errors to the owner");

// Progress
const progress = path.join(repo, ".cutaway-progress.json");
if (fs.existsSync(progress)) {
  const done = Object.keys(JSON.parse(fs.readFileSync(progress, "utf8")).done ?? {}).length;
  ok("Progress file", `${done} reels already rendered`);
} else warn("No progress file yet", "normal on a new machine: npm run daily starts from vid-1");

// Disk
try {
  const st = fs.statfsSync(repo);
  const gb = (st.bavail * st.bsize) / 1e9;
  if (gb > 5) ok("Free disk", `${gb.toFixed(0)} GB`);
  else warn(`Low disk: ${gb.toFixed(1)} GB free`, "move finished videos out of out/ to the pendrive");
} catch {
  // statfs not available on very old Node: skip
}

console.log(
  bad
    ? `\n${bad} thing(s) to fix before rendering.`
    : `\nReady${warnings ? ` (${warnings} warning(s))` : ""}. Run: npm run daily`,
);
process.exit(bad ? 1 : 0);
