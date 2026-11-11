---
id: vid-21
title: "Your pencil has zero lead in it ✏️"
series: cut-it-open
topic: "Pencil graphite core"
status: ready-to-build
duration: 36.5
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, pencil, school, science, shorts]
description: "There's no lead in a pencil. The core is graphite and clay, and the old name came from a 1500s mix-up."
pinned: "What should we cut open next?"
---

# vid-21 · Your pencil has zero lead in it ✏️

## Hook

- **Chosen (0-3s):** "Your pencil has no lead in it at all." Big text: ZERO LEAD
- **Backup hooks:**
    1. "Pencil lead is not lead."
    2. "Your pencil writes by shedding sheets of carbon."
    3. "This is why H pencils are pale and B pencils are dark."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your pencil has no lead in it at all."
    text: "ZERO LEAD"
    highlight: "ZERO"
    visual: { kind: hero, icon: tool, motion: drop, color: orange, label: "Pencil" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "The grey core is graphite, a soft form of carbon, mixed with clay."
    text: "GRAPHITE + CLAY"
    highlight: "GRAPHITE"
    visual: { kind: layers, items: [{ label: "Paint", color: accent }, { label: "Wood casing", color: brown }, { label: "Graphite and clay core", color: dark }] }
    sfx: slice
  - at: 8
    dur: 5
    vo: "Graphite is stacked sheets of carbon atoms that slide apart with a gentle push."
    text: "SLIDING SHEETS"
    highlight: "SLIDING"
    visual: { kind: zoom, levels: [{ label: "Pencil tip", icon: tool }, { label: "Graphite core", icon: box }, { label: "Sheets of carbon atoms", icon: molecule }] }
  - at: 13
    dur: 6
    vo: "Drag it across paper, and sheets flake off and catch in the fibres. That's your line."
    text: "FLAKES ON PAPER"
    highlight: "FLAKES"
    visual: { kind: flow, steps: [{ label: "Tip drags on paper", icon: arrow }, { label: "Carbon sheets flake off", icon: molecule }, { label: "Flakes catch in fibres", icon: leaf }] }
  - at: 19
    dur: 5
    vo: "More clay makes it harder and paler. More graphite makes it softer and darker."
    text: "H VS B"
    highlight: "H VS B"
    visual: { kind: compare, mode: versus, left: { label: "More clay", icon: box, color: grey, tag: "H: hard, pale" }, right: { label: "More graphite", icon: molecule, color: dark, tag: "B: soft, dark" } }
  - at: 24
    dur: 6.5
    vo: "So why lead? When a big graphite deposit was found in England, people called it black lead."
    text: "BLACK LEAD"
    highlight: "BLACK LEAD"
    visual: { kind: timeline, events: [{ year: "1500s", label: "Graphite found in England, called black lead" }, { year: "1795", label: "Graphite mixed with clay and baked in France" }] }
  - at: 30.5
    dur: 3
    vo: "The name stuck. The metal never did."
    text: "0% LEAD"
    highlight: "0%"
    visual: { kind: counter, from: 100, to: 0, suffix: "%", label: "lead in your pencil", icon: tool }
  - at: 33.5
    dur: 3
    vo: "Just carbon and clay. Because your pencil..."
    text: ""
    visual: { kind: hero, icon: tool, motion: float, color: orange, label: "Carbon, not metal" }
    note: "Runs back into the hook: '...has no lead in it at all.'"
```

## Fact check

- Pencil cores are graphite (a form of carbon) mixed with clay and fired; they contain no metallic lead.
- Graphite is layered carbon; the layers are weakly bound and slide off, leaving marks.
- A large graphite deposit was found at Borrowdale, England in the 1500s and was called 'black lead' or plumbago.
- Nicolas-Jacques Conté patented the graphite-and-clay process in France in 1795.
- More clay = harder (H) and lighter; more graphite = softer (B) and darker.
