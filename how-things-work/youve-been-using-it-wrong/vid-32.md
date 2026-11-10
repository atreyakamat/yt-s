---
id: vid-32
title: "There's a reason the USB logo is on the plug"
series: youve-been-using-it-wrong
topic: "USB plug"
status: ready-to-build
duration: 41
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [usb, techtips, computers, lifehacks, howthingswork, shorts]
description: "The USB logo stamped on a standard USB plug is meant to face up. It's the quickest way to get it in first time."
pinned: "What else have we all been using wrong?"
---

# vid-32 · There's a reason the USB logo is on the plug

## Hook

- **Chosen (0-3s):** "The USB logo on your plug is an instruction." Big text: THE LOGO IS A HINT
- **Backup hooks:**
    1. "You've been flipping USB plugs for nothing."
    2. "The USB logo is an instruction, not decoration."
    3. "Why does it always take three tries?"

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "The USB logo on your plug is an instruction."
    text: "THE LOGO IS A HINT"
    highlight: "HINT"
    visual: { kind: hero, icon: plug, motion: shake, color: accent, label: "USB plug" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "A classic USB plug only fits one way, but both sides look the same."
    text: "ONLY ONE WAY"
    highlight: "ONE WAY"
    visual: { kind: compare, mode: wrong-right, left: { label: "Flip, flip, flip", icon: arrow, color: red }, right: { label: "Check the logo", icon: eye, color: green } }
    sfx: buzz
  - at: 8
    dur: 6
    vo: "Look inside: the metal contacts sit on just one side of a plastic block."
    text: "CONTACTS ON ONE SIDE"
    highlight: "ONE SIDE"
    visual: { kind: callout, icon: plug, parts: ["Metal shell", "Plastic block", "Four contacts, one side"] }
    sfx: slice
  - at: 14
    dur: 6
    vo: "The USB design rules say the logo goes on the side meant to face up."
    text: "LOGO FACES UP"
    highlight: "UP"
    visual: { kind: flow, steps: [{ label: "Find the trident logo", icon: eye }, { label: "Logo side up", icon: arrow, color: accent }, { label: "Push in", icon: plug }] }
  - at: 20
    dur: 6
    vo: "On an odd port, peek in: the plug's plastic block goes into the port's empty half."
    text: "PEEK INSIDE THE PORT"
    highlight: "PEEK"
    visual: { kind: zoom, levels: [{ label: "The port", icon: plug }, { label: "Find the empty half", icon: box }, { label: "Plug's block goes there", icon: arrow, color: accent }] }
  - at: 26
    dur: 6
    vo: "Bonus: the two outer pins are longer, so power connects before data."
    text: "POWER TOUCHES FIRST"
    highlight: "FIRST"
    visual: { kind: flow, steps: [{ label: "Plug slides in", icon: plug }, { label: "Long power pins touch", icon: bolt, color: accent }, { label: "Then the data pins", icon: chip }] }
  - at: 32
    dur: 5
    vo: "That's why you can plug it in with the computer running."
    text: "SAFE WHILE ON"
    highlight: "SAFE"
    visual: { kind: gauge, value: 90, low: "Risky", high: "Safe", label: "Hot-plugging" }
  - at: 37
    dur: 4
    vo: "Next time, before you flip it, remember..."
    text: ""
    visual: { kind: hero, icon: plug, motion: float, color: accent, label: "Logo up" }
    note: "Loops into: the USB logo on your plug is an instruction."
```

## Fact check

- USB-A plugs are not reversible; contacts are on one side of the plastic tongue.
- The USB specification asks for the USB icon on the plug's top side (the side facing up when inserted into a horizontal port); some cheap cables ignore it.
- In USB-A, the power (VBUS) and ground pins are longer than the data pins so power connects first, which supports hot-plugging.
- In USB-A, the plug's plastic block fills the empty half of the port while the port's tongue slides into the plug's hollow half, so the empty half of the port shows where the block goes.
