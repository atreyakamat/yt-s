---
id: vid-78
title: "Your gear stick never touches a single gear"
series: cut-it-open
topic: "Manual gearbox"
status: ready-to-build
duration: 43
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, cars, gearbox, manual, shorts]
description: "In a manual gearbox the gears are always meshed. Your stick just slides a collar that locks one of them to the shaft."
pinned: "What should we cut open next?"
---

# vid-78 · Your gear stick never touches a single gear

## Hook

- **Chosen (0-3s):** "Your gear stick never touches a single gear." Big text: IT NEVER TOUCHES A GEAR
- **Backup hooks:**
    1. "Every gear in your gearbox is spinning right now."
    2. "Changing gear doesn't move a single gear."
    3. "Your gear stick is really moving a tiny fork."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your gear stick never touches a single gear."
    text: "IT NEVER TOUCHES A GEAR"
    highlight: "NEVER"
    visual: { kind: hero, icon: gear, motion: spin, color: brass }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Inside a manual gearbox, every pair of gears is already meshed and turning together."
    text: "ALWAYS MESHED"
    highlight: "MESHED"
    visual: { kind: callout, icon: gear, parts: ["Gear pairs", "Selector forks", "Sliding collars", "Output shaft"] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "But the gears on the output shaft spin freely. They don't drive the wheels yet."
    text: "SPINNING FREE"
    highlight: "FREE"
    visual: { kind: layers, items: [{ label: "Input shaft", color: steel }, { label: "Gears, always turning", color: brass }, { label: "Output shaft", color: steel }] }
  - at: 15
    dur: 7
    vo: "Your stick moves a fork, which slides a toothed collar onto one gear and locks it to the shaft."
    text: "FORK, COLLAR, LOCK"
    highlight: "LOCK"
    visual: { kind: flow, steps: [{ label: "Stick moves", icon: arrow }, { label: "Fork slides a collar", icon: wrench }, { label: "Collar locks one gear", icon: lock }] }
    sfx: click
  - at: 22
    dur: 6
    vo: "Synchro rings rub first, matching the speeds so the teeth slide in without grinding."
    text: "NO GRINDING"
    highlight: "NO"
    visual: { kind: compare, mode: wrong-right, left: { label: "No synchro", icon: gear, color: red, tag: "Grind" }, right: { label: "Synchro ring", icon: gear, color: green, tag: "Smooth" } }
  - at: 28
    dur: 6
    vo: "First gear: small drives big, lots of force. Top gear: close to one to one, for cruising."
    text: "SMALL DRIVES BIG"
    highlight: "BIG"
    visual: { kind: bars, unit: ":1", items: [{ label: "First gear, roughly", value: 3.5, color: accent }, { label: "Top gear, roughly", value: 0.8, color: steel }] }
  - at: 34
    dur: 5
    vo: "Reverse adds one extra small gear, which flips the direction."
    text: "THE IDLER GEAR"
    highlight: "IDLER"
    visual: { kind: cycle, icon: gear, steps: ["Engine gear", "Idler gear", "Output gear"], color: brass }
    sfx: thunk
  - at: 39
    dur: 4
    vo: "So when you change gear, remember..."
    text: ""
    visual: { kind: hero, icon: gear, motion: float, color: brass, label: "Manual gearbox" }
    note: "Loops into the hook: 'Your gear stick never touches a single gear.'"
```

## Fact check

- Modern manual car gearboxes are constant-mesh: gear pairs are always in mesh; gears on one shaft freewheel until a selector fork slides a dog collar (synchro hub) to lock one to the shaft.
- Synchromesh cones/rings use friction to match speeds before the dog teeth engage, preventing grinding.
- Ratios are illustrative and labelled 'roughly': typical first gears are about 3-4:1 and top gears about 0.7-1:1.
- Reverse uses an extra idler gear to reverse rotation: standard design.
