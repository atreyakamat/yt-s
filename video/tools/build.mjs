// Render specific reels (for testing a script). For the everyday routine use `npm run daily`.
//   npm run build:reel -- vid-01              one reel
//   npm run build:reel -- vid-01 vid-12       several
// Env: CONCURRENCY=4 (render threads), BROWSER_EXECUTABLE=/path/to/chrome (optional)
// Output: ../out/<id>.mp4 (gitignored; offload to the pendrive)
import path from "node:path";
import { render, repo, requireInstall, sync } from "./render.mjs";

const ids = process.argv.slice(2);
if (!ids.length || ids.includes("all")) {
  console.error("Usage: npm run build:reel -- <vid-N> [vid-M ...]\nFor the daily batch use: npm run daily");
  process.exit(1);
}
requireInstall();
sync(ids);
for (const id of ids) {
  const out = path.join(repo, "out", `${id}.mp4`);
  const t0 = Date.now();
  console.log(`\nRendering ${id} -> ${path.relative(process.cwd(), out)}`);
  render(id, out);
  console.log(`  done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
