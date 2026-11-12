// Builds the publishing sheet: every reel with its title, description, hashtags, pinned comment, hooks,
// and an automatic optimisation check. Writes ../publishing/reels.csv (opens in Excel/Sheets) and
// ../publishing/reels.json (used by tools/make_sheet.py to build the formatted .xlsx). No dependencies.
//   node tools/sheet.mjs
import fs from "node:fs";
import path from "node:path";
import { parse } from "./miniyaml.mjs";
import { batchDir, idNum, listScripts, repo, validateAll } from "./validate.mjs";

const { reels } = validateAll(parse);
const files = new Map(listScripts().map((f) => [path.basename(f, ".md"), f]));

// Music credit lines from music/tracks.tsv.
const credits = {};
for (const line of fs.readFileSync(path.join(repo, "music/tracks.tsv"), "utf8").split(/\r?\n/)) {
  if (!line || line.startsWith("#")) continue;
  const [slug, , , credit] = line.split("\t");
  credits[slug] = credit;
}
const PINNED = {
  "cut-it-open": "What should we cut open next?",
  "youve-been-using-it-wrong": "What else have we all been using wrong?",
  "why-is-it-shaped-like-that": "What shape should we explain next?",
  "the-1-second-machine": "What else happens in under a second?",
  "before-it-existed": "What should we go back in time for next?",
};
const progressFile = path.join(repo, ".cutaway-progress.json");
const done = fs.existsSync(progressFile) ? JSON.parse(fs.readFileSync(progressFile, "utf8")).done ?? {} : {};

const STOP = new Set(["the", "a", "an", "of", "your", "in", "on", "and", "for", "to", "how", "why", "what", "is", "it", "its", "with"]);
const keywordsOf = (topic) =>
  String(topic ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
const emojiCount = (s) => (String(s).match(/\p{Extended_Pictographic}/gu) ?? []).length;

const rows = reels.map((r, i) => {
  const raw = fs.readFileSync(files.get(r.id), "utf8").replace(/\r\n/g, "\n");
  const hookSection = raw.split(/\n## /).find((s) => s.startsWith("Hook")) ?? "";
  const backups = [
    ...hookSection.matchAll(/^(?:\s+\d\.\s+|- Backup \d+:\s*)"?(.+?)"?\s*$/gm),
  ].map((m) => m[1]).slice(0, 3);
  const factSection = raw.split(/\n## /).find((s) => /^Fact check/i.test(s)) ?? "";
  const sources = (factSection.match(/https?:\/\/\S+/g) ?? []).length + (r.factCheck && /https?:\/\//.test(r.factCheck) ? 1 : 0);
  const tags = (r.hashtags ?? []).map((t) => `#${String(t).replace(/^#/, "")}`);
  const description = String(r.description ?? r.scenes[0]?.vo ?? "").trim();
  const credit = r.music && credits[r.music] ? `Music: ${credits[r.music]}` : "";
  const fullDescription = [description, credit, tags.join(" ")].filter(Boolean).join("\n\n");
  const title = String(r.title ?? "");
  const hook = r.scenes[0]?.vo ?? "";
  const numbersInScript = r.scenes.some((s) => /\d/.test(`${s.vo} ${s.text}`));

  // Optimisation checks. Each finding costs points off a 100 "ready" score.
  const fixes = [];
  let score = 100;
  const flag = (pts, msg) => {
    score -= pts;
    fixes.push(msg);
  };
  const plainTitle = title.replace(/\p{Extended_Pictographic}/gu, "").trim();
  if (plainTitle.length > 60) flag(15, `Shorten title to under 60 characters (now ${plainTitle.length}); the feed cuts it off`);
  else if (plainTitle.length > 50) flag(5, `Title is ${plainTitle.length} characters; under 50 shows in full on most phones`);
  if (emojiCount(title) > 1) flag(5, "Use at most one emoji in the title");
  const kws = keywordsOf(r.topic);
  if (kws.length && !kws.some((k) => title.toLowerCase().includes(k.replace(/s$/, ""))))
    flag(10, `Put the search word "${kws.at(-1)}" in the title (helps search and suggested)`);
  if (kws.length && !kws.some((k) => description.toLowerCase().includes(k.replace(/s$/, ""))))
    flag(5, `Mention "${kws.at(-1)}" in the first line of the description`);
  if (description.length < 60) flag(5, "Description is very short; add one sentence on the payoff");
  if (!tags.map((t) => t.toLowerCase()).includes("#shorts")) flag(5, "Add #shorts to the hashtags");
  if (tags.length > 6) flag(5, `Use 3-5 hashtags (now ${tags.length}); too many looks spammy`);
  if (tags.length < 3) flag(5, "Use at least 3 hashtags");
  if (r.duration > 50) flag(10, `Video is ${r.duration}s; aim for 25-45s to keep the loop and retention`);
  if (r.duration < 18) flag(5, `Video is only ${r.duration}s; viewers may swipe before the payoff`);
  if (backups.length < 2) flag(5, "Write 2-3 backup hooks for re-uploads");
  if (numbersInScript && sources === 0) flag(10, "Has numbers but no source link in Fact check: verify before posting");
  if (!credit && r.music) flag(10, "Music credit missing: required by the CC BY licence");

  return {
    "Posting #": i + 1,
    "Reel ID": r.id,
    Batch: batchDir(r.id),
    Series: r.series,
    Topic: r.topic ?? "",
    Title: title,
    "Title length": plainTitle.length,
    Description: fullDescription,
    Hashtags: tags.join(" "),
    "Pinned comment": r.pinned ?? PINNED[r.series] ?? "",
    "Hook (first line)": hook,
    "Backup hook 1": backups[0] ?? "",
    "Backup hook 2": backups[1] ?? "",
    "Backup hook 3": backups[2] ?? "",
    "Length (s)": r.duration,
    Music: r.music ?? "",
    "Source links": sources,
    "Ready score": Math.max(0, score),
    "Optimisation needed": fixes.length ? fixes.join("; ") : "Ready to post",
    Rendered: done[r.id] ?? "",
    "Video file": done[r.id] ? `out/${done[r.id]}/${r.id}.mp4` : "",
    "Script file": path.relative(repo, files.get(r.id)).replace(/\\/g, "/"),
  };
});
rows.sort((a, b) => idNum(a["Reel ID"]) - idNum(b["Reel ID"]));

const outDir = path.join(repo, "publishing");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "reels.json"), JSON.stringify(rows, null, 1));
const headers = Object.keys(rows[0]);
const cell = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => cell(r[h])).join(","))].join("\r\n");
// The BOM makes Excel open it as UTF-8 (emoji, °, ×).
fs.writeFileSync(path.join(outDir, "reels.csv"), "﻿" + csv + "\r\n");
const ready = rows.filter((r) => r["Optimisation needed"] === "Ready to post").length;
const avg = Math.round(rows.reduce((a, r) => a + r["Ready score"], 0) / rows.length);
console.log(`Wrote publishing/reels.csv and reels.json: ${rows.length} reels, ${ready} ready as-is, average ready score ${avg}/100.`);
