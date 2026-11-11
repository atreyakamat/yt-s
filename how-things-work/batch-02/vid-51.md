---
id: vid-51
title: "Your eraser doesn't wipe pencil, it steals it"
series: cut-it-open
topic: "Pencil eraser"
status: ready-to-build
duration: 37
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, eraser, school, science, shorts]
description: "An eraser is slightly stickier than paper, so graphite flakes grab onto it, and then it crumbles to carry them away."
pinned: "What should we cut open next?"
---

# vid-51 · Your eraser doesn't wipe pencil, it steals it

## Hook

- **Chosen (0-3s):** "Your eraser doesn't remove pencil. It steals it." Big text: IT STEALS GRAPHITE
- **Backup hooks:**
    1. "Eraser crumbs are not a design flaw."
    2. "Before erasers, people used bread."
    3. "This is why erasers can't remove pen."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your eraser doesn't remove pencil. It steals it."
    text: "IT STEALS GRAPHITE"
    highlight: "STEALS"
    visual: { kind: hero, icon: box, motion: shake, color: pink, label: "Eraser" }
    sfx: whoosh
  - at: 3
    dur: 5.5
    vo: "A pencil line is loose flakes of graphite resting on top of the paper fibres."
    text: "LOOSE FLAKES"
    highlight: "LOOSE"
    visual: { kind: zoom, levels: [{ label: "Pencil line", icon: tool }, { label: "Paper fibres", icon: leaf }, { label: "Graphite flakes", icon: molecule }] }
  - at: 8.5
    dur: 5
    vo: "An eraser is soft rubber or vinyl that's a little stickier than paper."
    text: "STICKIER THAN PAPER"
    highlight: "STICKIER"
    visual: { kind: callout, icon: box, color: pink, parts: ["Soft rubber or vinyl", "Slightly sticky", "Made to crumble"] }
  - at: 13.5
    dur: 5
    vo: "Rub it, and the flakes cling to the eraser instead of the page."
    text: "FLAKES SWITCH SIDES"
    highlight: "SWITCH"
    visual: { kind: flow, steps: [{ label: "Rub the line", icon: arrow }, { label: "Flakes grip the eraser", icon: molecule }, { label: "Paper lets go", icon: leaf }] }
    sfx: slice
  - at: 18.5
    dur: 5.5
    vo: "Then it crumbles on purpose, rolling the dirty bits away and baring a clean surface."
    text: "CRUMBS ON PURPOSE"
    highlight: "ON PURPOSE"
    visual: { kind: cycle, icon: box, color: pink, steps: ["Grab graphite", "Crumble away", "Fresh surface", "Grab again"] }
  - at: 24
    dur: 5
    vo: "Pen is different: ink soaks into the fibres, so there's nothing loose to grab."
    text: "INK SOAKS IN"
    highlight: "SOAKS IN"
    visual: { kind: layers, items: [{ label: "Pencil: sits on top", color: grey }, { label: "Paper fibres", color: white }, { label: "Ink: soaked inside", color: blue }] }
  - at: 29
    dur: 4.5
    vo: "Before rubber erasers, people rubbed out pencil with balls of damp bread."
    text: "BREAD ERASERS"
    highlight: "BREAD"
    visual: { kind: compare, mode: before-after, left: { label: "Damp bread", icon: food, color: brown }, right: { label: "Rubber eraser", icon: box, color: pink } }
  - at: 33.5
    dur: 3.5
    vo: "It grabs, crumbles, and leaves. Your eraser doesn't wipe..."
    text: ""
    visual: { kind: hero, icon: box, motion: float, color: pink, label: "Grab and crumble" }
    note: "Loops into: 'Your eraser doesn't remove pencil. It steals it.'"
```

## Fact check

- Graphite marks sit on the paper surface; erasers work because their material adheres to graphite particles more than paper does.
- Modern erasers are natural/synthetic rubber or vinyl (PVC); they are designed to abrade and shed crumbs that carry graphite away.
- Ink penetrates paper fibres, so a normal eraser cannot lift it.
- Before rubber erasers (late 1700s), bread crumbs were commonly used to erase pencil.
