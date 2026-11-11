---
id: vid-30
title: "Your cable reel can melt if you leave it wound up 🔌"
series: youve-been-using-it-wrong
topic: "Cable reel"
status: ready-to-build
duration: 41
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, safety, extensionlead, electricity, shorts]
description: "A coiled cable reel traps its own heat. That's why many reels list two power ratings, one for wound and one for unwound."
pinned: "What else have we all been using wrong?"
---

# vid-30 · Your cable reel can melt if you leave it wound up

## Hook

- **Chosen (0-3s):** "Your cable reel can melt if you don't unwind it." Big text: UNWIND IT
- **Backup hooks:**
    1. "There's a reason your cable reel has two ratings."
    2. "Never run a heater off a wound-up reel."
    3. "Your extension reel is a hidden heater."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your cable reel can melt if you don't unwind it."
    text: "UNWIND IT"
    highlight: "UNWIND"
    visual: { kind: hero, icon: plug, motion: shake, color: orange, label: "Cable reel" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Look at the label. Many reels list two power ratings, wound and unwound."
    text: "TWO RATINGS"
    highlight: "TWO"
    visual: { kind: callout, icon: plug, parts: ["Rating when coiled", "Rating when unwound", "Cut-out on some reels"] }
    sfx: click
  - at: 8
    dur: 6
    vo: "Every wire warms up a little when current flows through it."
    text: "WIRES GET WARM"
    highlight: "WARM"
    visual: { kind: gauge, value: 30, low: "Cool", high: "Hot", label: "One straight cable" }
  - at: 14
    dur: 6
    vo: "Stretched out, that heat escapes into the air. Coiled tight, every loop heats its neighbour."
    text: "COILED = TRAPPED HEAT"
    highlight: "TRAPPED"
    visual: { kind: compare, mode: versus, left: { label: "Unwound", icon: wind, tag: "Heat escapes" }, right: { label: "Coiled", icon: flame, tag: "Heat builds up" } }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "Plug a heater or a pressure washer into a wound reel and the heat stacks up."
    text: "THE HEAT STACKS UP"
    highlight: "STACKS"
    visual: { kind: cycle, icon: flame, steps: ["Current flows", "Wire warms", "Heat trapped in coil", "Gets even hotter"] }
  - at: 26
    dur: 6
    vo: "The insulation softens, and in bad cases it melts or catches fire."
    text: "IT CAN MELT"
    highlight: "MELT"
    visual: { kind: gauge, value: 92, low: "Safe", high: "Melting", label: "Inside a tight coil" }
    sfx: buzz
  - at: 32
    dur: 5
    vo: "Small loads like a phone charger are fine. Big heaters? Unwind it all."
    text: "BIG LOAD? UNWIND"
    highlight: "UNWIND"
    visual: { kind: compare, mode: wrong-right, left: { label: "Big load, coiled", icon: flame }, right: { label: "Big load, unwound", icon: plug } }
    sfx: pop
  - at: 37
    dur: 4
    vo: "Because if you leave it wound up..."
    text: ""
    visual: { kind: hero, icon: plug, motion: float, color: orange, label: "Unwind it fully" }
    note: "Loops into the hook: '...your cable reel can melt if you don't unwind it.'"
```

## Fact check

- Cable reels are commonly marked with two current ratings, a lower one when wound and the full rating when fully unwound (e.g. UK reels often show 13 A unwound and a much lower figure wound).
- All conductors heat with current (resistive heating); coiling stops the heat escaping, so the temperature climbs.
- Overheated coiled reels can soften or melt insulation and start fires; fire services warn to fully unwind reels for high-power appliances.
- Low loads such as a phone charger draw little current, so heat build-up is small.
