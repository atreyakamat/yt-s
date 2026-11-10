---
id: vid-14
title: "Your fuse box has no fuses in it anymore ⚡"
series: cut-it-open
topic: "Fuse box"
status: ready-to-build
duration: 37
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, electricity, fusebox, home, shorts]
description: "Most fuse boxes today hold circuit breakers, not fuses. Each one has a bending strip for slow overloads and a magnet for short circuits."
pinned: "What should we cut open next?"
---

# vid-14 · Your fuse box has no fuses in it anymore ⚡

## Hook

- **Chosen (0-3s):** "Most fuse boxes today have no fuses inside." Big text: NO FUSES INSIDE
- **Backup hooks:**
    1. "Every switch in your fuse box has two ways to save you."
    2. "That row of switches is watching every wire in your house."
    3. "Your fuse box flips itself off, and here's how."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Most fuse boxes today have no fuses inside."
    text: "NO FUSES INSIDE"
    highlight: "NO FUSES"
    visual: { kind: hero, icon: box, motion: pulse, color: grey }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Open the cover and you'll see a row of switches called circuit breakers."
    text: "A ROW OF BREAKERS"
    highlight: "BREAKERS"
    visual: { kind: callout, icon: box, parts: ["Main switch", "Safety switch (RCD)", "Circuit breakers", "A label for each circuit"] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Each breaker guards one circuit: the lights upstairs, the kitchen sockets, the cooker."
    text: "ONE PER CIRCUIT"
    highlight: "ONE"
    visual: { kind: flow, steps: [{ label: "Breaker 1: lights", icon: bulb }, { label: "Breaker 2: sockets", icon: plug }, { label: "Breaker 3: cooker", icon: flame }] }
  - at: 14
    dur: 6
    vo: "Inside each one is a bimetal strip. Too much current for too long heats it, and it bends."
    text: "SLOW: A BENDING STRIP"
    highlight: "BENDING"
    visual: { kind: gauge, value: 70, low: "Normal", high: "Overload", label: "The strip heats and bends" }
  - at: 20
    dur: 6
    vo: "A short circuit is faster. A coil becomes a magnet and yanks the switch open."
    text: "FAST: A MAGNET"
    highlight: "MAGNET"
    visual: { kind: compare, mode: versus, left: { label: "Overload", icon: thermometer, color: orange, tag: "Bimetal strip" }, right: { label: "Short circuit", icon: magnet, color: red, tag: "Magnet coil" } }
    sfx: thunk
  - at: 26
    dur: 6
    vo: "Unlike an old fuse wire, nothing melts. Fix the fault, flip it back up, and the power returns."
    text: "JUST FLIP IT BACK"
    highlight: "FLIP"
    visual: { kind: flow, steps: [{ label: "Fault happens", icon: bolt }, { label: "Breaker trips", icon: arrow }, { label: "Fix it, flip it back", icon: wrench }] }
    sfx: click
  - at: 32
    dur: 5
    vo: "That's why most fuse boxes today..."
    text: ""
    visual: { kind: hero, icon: box, motion: float, color: grey, label: "Consumer unit" }
    note: "Loop: runs back into the hook."
```

## Fact check

- Modern consumer units / breaker panels use miniature circuit breakers (MCBs) instead of rewireable or cartridge fuses, so 'most fuse boxes today have no fuses' is fair for current installations.
- A typical consumer unit has a main switch, one or more RCDs and a row of MCBs, one per circuit (lighting, sockets, cooker, etc.).
- Thermal-magnetic MCBs: a bimetal strip handles slow overloads, an electromagnetic coil trips instantly on short circuits. Standard design.
- A tripped breaker is reset by switching it back on; it does not need replacing like a blown fuse.
