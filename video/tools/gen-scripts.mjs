// Compiles the compact script sources in ../scripts-src/**/*.md into the full
// how-things-work/<series>/<group>/vid-NNN.md files the renderer reads, plus SCRIPTS.md.
// Usage: node tools/gen-scripts.mjs        (from video/)  ->  npm run gen
//
// Source format (one file per group):
//   # series: new-year | group: fireworks | accent: #FF9F0A | music: investigations
//   ## 101 | Why fireworks come in colours
//   hook: Every firework colour is a metal. | EVERY COLOUR = *A METAL* | grid: burst Fireworks; flame Heat
//   - vo line | ON-SCREEN TEXT with *highlight* | layout: spec
//   fact: the claim, plus where it can be checked
//   alt: backup hook one
//   alt: backup hook two
//   tags: fireworks, chemistry
//
// Layout specs (icons are names from src/visuals/icons.tsx):
//   hero: icon Label           pair: iconA Label; iconB Label        flow/grid/timeline: icon Label; icon Label; ...
//   num: 1,000 | unit | icon   bars: icon Label=value; icon Label=value
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const videoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repo = path.resolve(videoDir, "..");
const srcDir = path.join(repo, "scripts-src");
const outRoot = path.join(repo, "how-things-work");

const ICONS = new Set(
  [...fs.readFileSync(path.join(videoDir, "src/visuals/icons.tsx"), "utf8").matchAll(/^  "?([a-z][a-z0-9-]*)"?: \(\) =>/gm)].map((m) => m[1]),
);
const LAYOUTS = ["hero", "pair", "flow", "grid", "num", "bars", "timeline"];
const SFX = ["pop", "click", "thunk", "pop"];
const errors = [];
const seen = new Map();

const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;
const round1 = (n) => Math.round(n * 10) / 10;

function parseLayout(spec, where) {
  const m = spec.match(/^([a-z]+)\s*:\s*(.*)$/);
  if (!m) throw new Error(`${where}: layout must look like 'grid: icon Label; icon Label'`);
  const [, layout, rest] = m;
  if (!LAYOUTS.includes(layout)) throw new Error(`${where}: unknown layout '${layout}'`);
  const visual = { kind: "explainer", layout };
  const icon = (name) => {
    if (!ICONS.has(name)) throw new Error(`${where}: unknown icon '${name}'`);
    return name;
  };
  if (layout === "num") {
    const [value, unit, ic] = rest.split("|").map((x) => x.trim());
    if (!value) throw new Error(`${where}: num needs a value`);
    visual.value = value;
    if (unit) visual.unit = unit;
    if (ic) visual.items = [{ icon: icon(ic) }];
    return visual;
  }
  visual.items = rest.split(";").map((part) => {
    const [ic, ...label] = part.trim().split(/\s+/);
    let text = label.join(" ");
    const item = { icon: icon(ic) };
    if (layout === "bars") {
      const b = text.match(/^(.*?)=(-?[\d.]+)$/);
      if (!b) throw new Error(`${where}: bars item needs 'Label=number'`);
      text = b[1];
      item.value = Number(b[2]);
    }
    if (text) item.label = text;
    return item;
  });
  if (layout === "pair" && visual.items.length !== 2) throw new Error(`${where}: pair needs exactly 2 items`);
  if (visual.items.length > 6) throw new Error(`${where}: at most 6 items`);
  return visual;
}

function compile(entry, ctx) {
  const where = `${ctx.file} #${entry.id}`;
  const scenes = [];
  const alts = [];
  const meta = { tags: [] };
  for (const raw of entry.lines) {
    const line = raw.trim();
    if (!line) continue;
    let m;
    if ((m = line.match(/^fact:\s*(.+)$/))) meta.fact = m[1];
    else if ((m = line.match(/^alt:\s*(.+)$/))) alts.push(m[1]);
    else if ((m = line.match(/^tags:\s*(.+)$/))) meta.tags = m[1].split(",").map((t) => t.trim().replace(/^#/, ""));
    else if ((m = line.match(/^music:\s*(.+)$/))) meta.music = m[1].trim();
    else if ((m = line.match(/^(hook:|-)\s*(.+)$/))) {
      const parts = m[2].split("|").map((p) => p.trim());
      if (parts.length < 3) throw new Error(`${where}: scene needs 'vo | TEXT | layout: spec'`);
      const [vo, textRaw, ...rest] = parts;
      const spec = rest.join("|");
      const hl = textRaw.match(/\*([^*]+)\*/);
      scenes.push({
        isHook: m[1] === "hook:",
        vo,
        text: textRaw.replace(/\*/g, ""),
        highlight: hl ? hl[1] : undefined,
        visual: parseLayout(spec, where),
      });
    } else throw new Error(`${where}: can't read line '${line}'`);
  }
  if (!scenes[0]?.isHook) throw new Error(`${where}: first scene must be 'hook:'`);
  if (scenes.some((s, i) => i > 0 && s.isHook)) throw new Error(`${where}: only one hook`);
  if (scenes.length < 5) throw new Error(`${where}: needs at least 5 scenes (has ${scenes.length})`);
  if (!meta.fact) throw new Error(`${where}: needs a 'fact:' line (what to check, and a source)`);
  if (words(scenes[0].vo) > 8) throw new Error(`${where}: hook is ${words(scenes[0].vo)} words, max 8`);
  for (const s of scenes) {
    if (s.text.length > 34) throw new Error(`${where}: on-screen text too long (${s.text.length} > 34): '${s.text}'`);
    if (s.highlight && !s.text.includes(s.highlight)) throw new Error(`${where}: highlight not in text`);
  }

  let at = 0;
  const out = scenes.map((s, i) => {
    const dur = round1(Math.max(i === 0 ? 3 : 2.5, words(s.vo) / 2.6 + 0.4));
    const sc = { at: round1(at), dur, vo: s.vo, text: s.text };
    if (s.highlight) sc.highlight = s.highlight;
    sc.visual = s.visual;
    sc.sfx = i === 0 ? "whoosh" : SFX[(i - 1) % SFX.length];
    at += dur;
    return sc;
  });
  const duration = round1(at);
  if (duration > 55) throw new Error(`${where}: runs ${duration}s, keep under 55s`);
  if (duration < 18) throw new Error(`${where}: runs ${duration}s, too short (min 18s)`);
  return { scenes: out, duration, alts, meta };
}

function parseFile(file) {
  const raw = fs.readFileSync(file, "utf8");
  const head = raw.match(/^#\s*(.+)$/m);
  const cfg = {};
  for (const kv of head[1].split("|")) {
    const [k, ...v] = kv.split(":");
    cfg[k.trim()] = v.join(":").trim();
  }
  const chunks = raw.split(/^## /m).slice(1);
  return {
    cfg,
    entries: chunks.map((c) => {
      const [first, ...lines] = c.split("\n");
      const m = first.match(/^(\d+)\s*\|\s*(.+)$/);
      if (!m) throw new Error(`${file}: heading must be '## 123 | Title' (got '${first}')`);
      return { id: m[1], title: m[2].trim(), lines };
    }),
  };
}

const yamlStr = (s) => JSON.stringify(s);
function render(entry, c, cfg) {
  const id = `vid-${entry.id}`;
  const music = c.meta.music ?? cfg.music ?? "investigations";
  const tags = [...new Set(["howthingswork", "newyear", ...c.meta.tags, "shorts"])];
  const fm = [
    "---",
    `id: ${id}`,
    `title: ${yamlStr(entry.title)}`,
    `series: ${cfg.series}`,
    `group: ${cfg.group}`,
    `status: ready-to-build`,
    `duration: ${c.duration}`,
    `music: ${music}`,
    `musicVolume: 0.12`,
    `accent: ${yamlStr(cfg.accent ?? "#FFD60A")}`,
    `hashtags: [${tags.join(", ")}]`,
    `factCheck: ${yamlStr(c.meta.fact)}`,
    "---",
  ].join("\n");
  const scenesYaml = YAMLish(c.scenes);
  return `${fm}

# ${id} · ${entry.title}

## Hook

- **Chosen (0-3s):** "${c.scenes[0].vo}"
${c.alts.map((a, i) => `- Backup ${i + 1}: "${a}"`).join("\n")}

## Fact check (verify before posting)

${c.meta.fact}

## Voiceover (read-through)

${c.scenes.map((s, i) => `${i + 1}. ${s.vo}`).join("\n")}

## Upload text

- **Title:** ${entry.title}
- **Description:** ${c.scenes.map((s) => s.vo).slice(0, 2).join(" ")} #Shorts
- **Hashtags:** ${tags.map((t) => "#" + t).join(" ")}

## Scenes

\`\`\`yaml
scenes:
${scenesYaml}
\`\`\`
`;
}

// Tiny YAML emitter: JSON flow style per scene is valid YAML and keeps the files compact.
function YAMLish(scenes) {
  return scenes.map((s) => `  - ${JSON.stringify(s)}`).join("\n");
}

const files = fs.existsSync(srcDir) ? fs.readdirSync(srcDir, { recursive: true }).filter((f) => f.endsWith(".md")).sort() : [];
const index = [];
for (const f of files) {
  const file = path.join(srcDir, f);
  try {
    const { cfg, entries } = parseFile(file);
    cfg.group ??= path.basename(f, ".md").replace(/^\d+-/, "");
    if (!cfg.series) throw new Error("header needs 'series: ...'");
    for (const e of entries) {
      try {
        const c = compile(e, { file: f });
        if (seen.has(e.id)) throw new Error(`id ${e.id} already used in ${seen.get(e.id)}`);
        seen.set(e.id, f);
        const dir = path.join(outRoot, cfg.series, cfg.group);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, `vid-${e.id}.md`), render(e, c, cfg));
        index.push({ id: e.id, title: e.title, series: cfg.series, group: cfg.group, duration: c.duration, hook: c.scenes[0].vo, fact: c.meta.fact });
      } catch (err) {
        errors.push(err.message);
      }
    }
  } catch (err) {
    errors.push(`${f}: ${err.message}`);
  }
}

index.sort((a, b) => Number(a.id) - Number(b.id));
const lines = [
  "# Script index",
  "",
  `${index.length} generated scripts. Source: \`scripts-src/\`. Regenerate with \`npm run gen\` in \`video/\`. Hand-built launch reels (vid-01..10) are not listed here.`,
  "",
  "| ID | Series / group | Hook | Length | Title |",
  "|---|---|---|---|---|",
  ...index.map((r) => `| ${r.id} | ${r.series} / ${r.group} | ${r.hook} | ${r.duration}s | ${r.title} |`),
  "",
];
fs.writeFileSync(path.join(repo, "SCRIPTS.md"), lines.join("\n"));
if (errors.length) {
  console.error(errors.map((e) => `  ✗ ${e}`).join("\n"));
  process.exit(1);
}
console.log(`Generated ${index.length} scripts -> how-things-work/, SCRIPTS.md`);
