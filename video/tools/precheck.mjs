// Check reel scripts without installing anything (no `yaml` package needed).
//   node tools/precheck.mjs              every script
//   node tools/precheck.mjs vid-12 vid-27   just these (topic clashes are still checked against all)
import path from "node:path";
import { parse } from "./miniyaml.mjs";
import { validateAll } from "./validate.mjs";

const want = new Set(process.argv.slice(2));
const { reels, errors } = validateAll(parse);
const shown = want.size ? errors.filter((e) => want.has(path.basename(e.split(":")[0], ".md"))) : errors;
// A requested id with no file at all is an error too (e.g. a script written to the wrong folder).
const found = new Set([...reels.map((r) => r.id), ...errors.map((e) => path.basename(e.split(":")[0], ".md"))]);
for (const id of want) if (!found.has(id)) shown.push(`${id}: no file found under how-things-work/ (wrong folder or not written yet)`);
if (shown.length) {
  console.error(shown.map((e) => `x ${e}`).join("\n"));
  console.error(`\n${shown.length} script(s) with errors.`);
  process.exit(1);
}
console.log(`OK: ${want.size ? want.size + " checked, " : ""}${reels.length} valid scripts in total.`);
