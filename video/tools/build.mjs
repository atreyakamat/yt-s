// Usage: npm run build:reel -- vid-01        (one reel)
//        npm run build:reel -- all           (every reel with status ready-to-build)
// Env:   BROWSER_EXECUTABLE=/path/to/chrome (optional)
// Output: ../out/<id>.mp4 (gitignored; offload to the pendrive)
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const videoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.resolve(videoDir, "../out");
const remotionCli = path.join(videoDir, "node_modules/@remotion/cli/remotion-cli.js"); // run via node: works on Windows and Linux
const target = process.argv[2];
if (!target) {
  console.error("Usage: npm run build:reel -- <vid-xx|all>");
  process.exit(1);
}

execFileSync(process.execPath, ["tools/sync.mjs"], { cwd: videoDir, stdio: "inherit" });
const reels = JSON.parse(fs.readFileSync(path.join(videoDir, "src/reels.generated.json"), "utf8"));
const ids = target === "all" ? reels.filter((r) => r.status === "ready-to-build").map((r) => r.id) : [target];

fs.mkdirSync(outDir, { recursive: true });
for (const id of ids) {
  if (!reels.some((r) => r.id === id)) {
    console.error(`No reel '${id}'. Known: ${reels.map((r) => r.id).join(", ")}`);
    process.exit(1);
  }
  const out = path.join(outDir, `${id}.mp4`);
  console.log(`\nRendering ${id} -> ${path.relative(process.cwd(), out)}`);
  const args = [remotionCli, "render", "src/index.ts", id, out, "--codec=h264", "--crf=18"];
  // Optional: use an existing Chrome instead of Remotion downloading one.
  if (process.env.BROWSER_EXECUTABLE) args.push(`--browser-executable=${process.env.BROWSER_EXECUTABLE}`);
  execFileSync(process.execPath, args, {
    cwd: videoDir,
    stdio: "inherit",
  });
}
console.log("\nDone. Offload the files in out/ to your pendrive.");
