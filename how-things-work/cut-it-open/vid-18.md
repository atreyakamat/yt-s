---
id: vid-18
title: "Your engine only pushes on 1 stroke out of 4 🚗"
series: cut-it-open
topic: "Four-stroke engine"
status: ready-to-build
duration: 43
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, cars, engine, engineering, shorts]
description: "A petrol engine sucks, squeezes, bangs and blows. Only one of those four strokes pushes the car."
pinned: "What should we cut open next?"
---

# vid-18 · Your engine only pushes on 1 stroke out of 4

## Hook

- **Chosen (0-3s):** "Your engine only makes power on one stroke in four." Big text: 1 STROKE IN 4
- **Backup hooks:**
    1. "Your engine spends three quarters of its time not pushing."
    2. "Suck, squeeze, bang, blow: that's your whole engine."
    3. "Each cylinder in your car explodes twenty times a second."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your engine only makes power on one stroke in four."
    text: "1 STROKE IN 4"
    highlight: "1"
    visual: { kind: hero, icon: car, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Inside each cylinder, a piston slides up and down, turning the crankshaft like a bike pedal."
    text: "PISTON + CRANKSHAFT"
    highlight: "PISTON"
    visual: { kind: callout, icon: gear, parts: ["Piston", "Cylinder", "Crankshaft", "Spark plug"] }
    sfx: slice
  - at: 9
    dur: 7
    vo: "Stroke one: the piston drops and sucks in air and fuel. Stroke two: it rises and squeezes them."
    text: "SUCK, SQUEEZE"
    highlight: "SQUEEZE"
    visual: { kind: flow, steps: [{ label: "Piston drops", icon: arrow }, { label: "Air and fuel sucked in", icon: wind }, { label: "Piston rises, squeezes", icon: gear }] }
  - at: 16
    dur: 6
    vo: "Stroke three: a spark lights the mix, and the blast shoves the piston down."
    text: "BANG"
    highlight: "BANG"
    visual: { kind: gauge, value: 95, low: "Squeezed", high: "Bang", label: "Pressure spike" }
    sfx: thunk
  - at: 22
    dur: 6
    vo: "Stroke four: it rises again and pushes the burnt gas out the exhaust."
    text: "BLOW"
    highlight: "BLOW"
    visual: { kind: cycle, icon: flame, steps: ["Suck", "Squeeze", "Bang", "Blow"], color: orange }
  - at: 28
    dur: 6
    vo: "Only the bang pushes. A heavy flywheel keeps the crank spinning through the other three."
    text: "ONLY 1 PUSHES"
    highlight: "1"
    visual: { kind: grid, icon: flame, count: 4, highlight: 1, label: "1 power stroke in 4" }
  - at: 34
    dur: 5
    vo: "At highway speed, each cylinder fires around twenty times every second."
    text: "20 BANGS A SECOND"
    highlight: "20"
    visual: { kind: counter, to: 20, label: "Bangs per cylinder, per sec", icon: flame }
    sfx: pop
  - at: 39
    dur: 4
    vo: "Thousands of bangs a minute, and still..."
    text: ""
    visual: { kind: hero, icon: gear, motion: spin, color: steel, label: "Four strokes" }
    note: "Loops into the hook: 'Your engine only makes power on one stroke in four.'"
```

## Fact check

- Four-stroke cycle (intake, compression, power, exhaust): standard operating cycle of almost all car petrol engines; only the power stroke does work on the piston.
- Flywheel stores rotational energy to carry the crankshaft through the non-power strokes: standard engine design.
- About twenty firings per cylinder per second: a four-stroke cylinder fires once every two crank turns, so at about 2,400 rpm (typical highway cruising) that is 1,200 firings a minute = 20 per second.
