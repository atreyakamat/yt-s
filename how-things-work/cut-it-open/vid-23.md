---
id: vid-23
title: "Your rain jacket is full of billions of tiny holes ☔"
series: cut-it-open
topic: "Waterproof breathable jacket"
status: ready-to-build
duration: 37
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, raincoat, outdoors, clothing, shorts]
description: "A breathable rain jacket hides a membrane full of pores. Raindrops are too big to get in, but sweat vapour is small enough to get out."
pinned: "What should we cut open next?"
---

# vid-23 · Your rain jacket is full of billions of tiny holes

## Hook

- **Chosen (0-3s):** "Your rain jacket is full of billions of tiny holes." Big text: FULL OF HOLES
- **Backup hooks:**
    1. "Your raincoat keeps rain out by being full of holes."
    2. "This jacket lets sweat out but never lets rain in."
    3. "There are billions of holes in your waterproof."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your rain jacket is full of billions of tiny holes."
    text: "FULL OF HOLES"
    highlight: "HOLES"
    visual: { kind: hero, icon: shirt, label: "Rain jacket", color: blue, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Cut it open and there are three layers: tough outer fabric, a thin membrane, and a soft lining."
    text: "THREE LAYERS"
    highlight: "THREE"
    visual: { kind: layers, items: [{ label: "Tough outer fabric", color: blue }, { label: "Thin membrane", color: accent }, { label: "Soft lining", color: grey }] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "The membrane is a stretched plastic film riddled with pores far smaller than any raindrop."
    text: "TINY PORES"
    highlight: "PORES"
    visual: { kind: zoom, levels: [{ label: "Jacket", icon: shirt }, { label: "Membrane", icon: shield, color: accent }, { label: "Tiny pores", icon: molecule }] }
  - at: 15
    dur: 6
    vo: "A raindrop is a big crowd of water molecules held together. It can't squeeze through."
    text: "RAIN STAYS OUT"
    highlight: "OUT"
    visual: { kind: compare, mode: versus, left: { label: "Raindrop", icon: drop, color: blue, tag: "BLOCKED" }, right: { label: "Water vapour", icon: cloud, color: accent, tag: "GETS OUT" } }
    sfx: thunk
  - at: 21
    dur: 6
    vo: "But your sweat leaves your skin as vapour, single molecules small enough to slip out."
    text: "SWEAT GETS OUT"
    highlight: "SWEAT"
    visual: { kind: flow, steps: [{ label: "Body heats up", icon: person }, { label: "Sweat turns to vapour", icon: cloud }, { label: "Vapour slips through pores", icon: arrow, color: accent }] }
  - at: 27
    dur: 5
    vo: "It works best when it's warmer and damper inside than outside."
    text: "WARM INSIDE WINS"
    highlight: "WARM"
    visual: { kind: gauge, value: 75, low: "Dry outside", high: "Damp inside", label: "Vapour pushes outward" }
  - at: 32
    dur: 5
    vo: "Rain out, sweat out. All because your rain jacket..."
    text: ""
    visual: { kind: hero, icon: shirt, label: "Holes that keep you dry", color: blue, motion: float }
    note: "Last line runs back into the hook: Your rain jacket is full of billions of tiny holes."
```

## Fact check

- Breathable membranes (expanded PTFE or microporous PU) have pores thousands of times smaller than a water droplet but much larger than a water vapour molecule; makers quote billions of pores per square inch.
- Typical construction is a face fabric, a membrane and a lining or protective layer: true.
- Liquid water can't pass because surface tension holds a drop together and the pores are far too small; single vapour molecules diffuse through.
- Vapour moves from the warmer, more humid side to the cooler, drier side, so breathability depends on the inside being warmer and damper: true.
