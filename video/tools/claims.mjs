// Lists every specific, checkable claim in the scripts (numbers, years, %, "first", "invented", superlatives...)
// so they can be verified against sources. No dependencies.
//   node tools/claims.mjs                 -> writes ../fact-check/claims.tsv and prints a summary
//   node tools/claims.mjs --from 1 --to 300
import fs from "node:fs";
import path from "node:path";
import { parse } from "./miniyaml.mjs";
import { idNum, repo, validateAll } from "./validate.mjs";

const args = process.argv.slice(2);
const arg = (k, d) => (args.includes(k) ? Number(args[args.indexOf(k) + 1]) : d);
const from = arg("--from", 1);
const to = arg("--to", Infinity);

const CHECKABLE =
  /\d|\b(first|invent\w*|discover\w*|patent\w*|oldest|newest|largest|biggest|smallest|fastest|slowest|hottest|coldest|most|least|record|million|billion|thousand|hundred|dozen|half|twice|triple|percent|century|decade|ancient|medieval|victorian|roman|egypt\w*|chinese|named after|only)\b/i;

const { reels } = validateAll(parse);
const rows = [];
for (const r of reels) {
  const n = idNum(r.id);
  if (n < from || n > to) continue;
  const seen = new Set();
  const add = (where, text) => {
    const t = String(text ?? "").trim();
    if (!t || seen.has(t) || !CHECKABLE.test(t)) return;
    seen.add(t);
    rows.push([r.id, r.topic ?? "", where, t.replace(/\t|\n/g, " ")]);
  };
  add("title", r.title);
  add("description", r.description);
  r.scenes.forEach((s, i) => {
    add(`scene ${i + 1} vo`, s.vo);
    add(`scene ${i + 1} text`, s.text);
    const v = s.visual ?? {};
    const bits = JSON.stringify(v).match(/"(label|year|to|value|suffix|prefix|low|high)":("[^"]*"|-?[\d.]+)/g) ?? [];
    if (bits.length) add(`scene ${i + 1} visual`, bits.join(" "));
  });
}
const dir = path.join(repo, "fact-check");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "claims.tsv"), ["id\ttopic\twhere\tclaim", ...rows.map((r) => r.join("\t"))].join("\n") + "\n");
const reelsWith = new Set(rows.map((r) => r[0])).size;
console.log(`${rows.length} checkable claims in ${reelsWith} reels -> fact-check/claims.tsv`);
