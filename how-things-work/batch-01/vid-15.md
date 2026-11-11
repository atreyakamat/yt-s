---
id: vid-15
title: "Why your washing machine has concrete inside 🧱"
series: cut-it-open
topic: "Washing machine"
status: ready-to-build
duration: 40
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, engineering, washingmachine, laundry, shorts]
description: "Front-loading washing machines carry heavy concrete blocks bolted to the tub. Here is why that weight stops them walking across the floor."
pinned: "What should we cut open next?"
---

# vid-15 · Why your washing machine has concrete inside

## Hook

- **Chosen (0-3s):** "Your washing machine has a block of concrete inside." Big text: CONCRETE INSIDE
- **Backup hooks:**
    1. "There's a lump of concrete hiding in your washing machine."
    2. "Your washing machine is heavy on purpose."
    3. "Why doesn't your washing machine fly apart on spin?"

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your washing machine has a block of concrete inside."
    text: "CONCRETE INSIDE"
    highlight: "CONCRETE"
    visual: { kind: hero, icon: gear, motion: shake, color: grey, label: "Washing machine" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Cut it open. The drum you see sits inside a sealed outer tub."
    text: "DRUM IN A TUB"
    highlight: "TUB"
    visual: { kind: layers, items: [{ label: "Steel drum with holes", color: steel }, { label: "Plastic outer tub", color: grey }, { label: "Concrete weights", color: accent }, { label: "Springs and dampers", color: brass }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Bolted to that tub are heavy blocks of concrete, on the top and front."
    text: "CONCRETE WEIGHTS"
    highlight: "CONCRETE"
    visual: { kind: callout, icon: box, parts: ["Concrete counterweight", "Bolted to the tub", "Top and front"] }
    sfx: thunk
  - at: 14
    dur: 6
    vo: "Why? When the drum spins, wet clothes bunch up on one side and it wobbles."
    text: "LOPSIDED LOAD"
    highlight: "LOPSIDED"
    visual: { kind: wave, waves: [{ label: "Uneven load wobble", freq: 6, color: red }] }
  - at: 20
    dur: 6
    vo: "A heavy tub barely moves, so the wobble can't shake the whole machine around."
    text: "HEAVY = STEADY"
    highlight: "STEADY"
    visual: { kind: compare, mode: versus, left: { label: "Light tub", icon: wave, tag: "Shakes, walks" }, right: { label: "Heavy tub", icon: box, tag: "Stays put" } }
  - at: 26
    dur: 5
    vo: "Springs hang it from the top, and dampers soak up what's left."
    text: "SPRINGS AND DAMPERS"
    highlight: "DAMPERS"
    visual: { kind: flow, steps: [{ label: "Springs hold the tub", icon: spring }, { label: "Dampers slow the bounce", icon: gear }, { label: "Cabinet barely moves", icon: house }] }
    sfx: click
  - at: 31
    dur: 5
    vo: "That lets it spin up to about fourteen hundred times a minute."
    text: "1,400 SPINS A MINUTE"
    highlight: "1,400"
    visual: { kind: counter, to: 1400, suffix: " rpm", label: "top spin speed, about", icon: fan }
  - at: 36
    dur: 4
    vo: "So next time it thunders through a spin, remember..."
    text: ""
    visual: { kind: hero, icon: gear, motion: spin, color: grey, label: "Heavy on purpose" }
    note: "Loops into the hook: '...your washing machine has a block of concrete inside.'"
```

## Fact check

- Front-loading washers commonly spin 900 to 1400 rpm (1400 is a common maximum, some 1600); script says "up to about". OK. Source: https://redmondelectric.ie/blogs/news/washing-machines-spin-speed-explained-do-you-really-need-1400rpm
