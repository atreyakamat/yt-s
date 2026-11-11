---
id: vid-24
title: "Your tennis ball is a tiny pressurized tank 🎾"
series: cut-it-open
topic: "Tennis ball"
status: ready-to-build
duration: 35.5
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, tennis, sports, physics, shorts]
description: "A tennis ball is a hollow rubber shell with gas squeezed inside. That's why new balls come in a pressurized can."
pinned: "What should we cut open next?"
---

# vid-24 · Your tennis ball is a tiny pressurized tank

## Hook

- **Chosen (0-3s):** "Your tennis ball is a tiny pressurized tank." Big text: A PRESSURIZED TANK
- **Backup hooks:**
    1. "Why does a new can of tennis balls hiss?"
    2. "Your tennis ball is slowly leaking right now."
    3. "There's squeezed air inside every tennis ball."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your tennis ball is a tiny pressurized tank."
    text: "A PRESSURIZED TANK"
    highlight: "PRESSURIZED"
    visual: { kind: hero, icon: ball, motion: pulse, color: green }
    sfx: whoosh
  - at: 3
    dur: 4.5
    vo: "Cut one open and it's hollow: a rubber shell with gas squeezed inside."
    text: "HOLLOW INSIDE"
    highlight: "HOLLOW"
    visual: { kind: layers, items: [{ label: "Felt cover", color: accent }, { label: "Rubber shell", color: dark }, { label: "Pressurized gas", color: cyan }] }
    sfx: slice
  - at: 7.5
    dur: 5.5
    vo: "That gas sits at higher pressure than the air outside, so the ball springs back hard."
    text: "HIGHER PRESSURE"
    highlight: "HIGHER"
    visual: { kind: gauge, value: 75, low: "Outside air", high: "Inside ball", label: "Gas pushes outward" }
  - at: 13
    dur: 4.5
    vo: "But rubber leaks. The gas slowly seeps out, and the bounce goes flat."
    text: "IT SLOWLY LEAKS"
    highlight: "LEAKS"
    visual: { kind: flow, steps: [{ label: "Gas seeps through rubber", icon: bubble }, { label: "Pressure drops", icon: arrow }, { label: "Bounce goes flat", icon: ball }] }
  - at: 17.5
    dur: 5.5
    vo: "That's why new balls come in a sealed, pressurized can that hisses when you open it."
    text: "THE CAN HISSES"
    highlight: "HISSES"
    visual: { kind: callout, icon: bottle, parts: ["Sealed lid", "Pressurized air", "Fresh balls"] }
    sfx: pop
  - at: 23
    dur: 5
    vo: "Pressure outside the ball matches pressure inside, so nothing leaks until you open it."
    text: "PRESSURE KEEPS BOUNCE"
    highlight: "BOUNCE"
    visual: { kind: compare, mode: before-after, left: { label: "Sealed can", icon: bottle, tag: "Bouncy" }, right: { label: "Open for weeks", icon: clock, tag: "Flat" } }
  - at: 28
    dur: 4.5
    vo: "Practice balls skip all this. They're pressureless, with thicker rubber doing the work."
    text: "PRESSURELESS BALLS"
    highlight: "PRESSURELESS"
    visual: { kind: callout, icon: ball, parts: ["No squeezed gas", "Thicker rubber", "Bounce lasts longer"] }
  - at: 32.5
    dur: 3
    vo: "So when the bounce dies, remember. Your tennis ball..."
    text: ""
    visual: { kind: hero, icon: ball, motion: float, color: green, label: "Pressurized" }
    note: "Last line runs back into the hook."
```

## Fact check

- Pressurized tennis balls have a hollow rubber core filled with gas above atmospheric pressure, which gives the bounce.
- Gas slowly diffuses out through the rubber, so balls go flat over time once out of the can.
- Cans are sealed under pressure so the balls stay fresh until opened; opening them makes the familiar hiss.
- Pressureless balls exist for practice and machines; they rely on thicker, stiffer rubber and lose bounce far more slowly.
