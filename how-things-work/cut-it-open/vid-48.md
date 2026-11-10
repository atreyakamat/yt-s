---
id: vid-48
title: "There's lightning going off inside your engine ⚡"
series: cut-it-open
topic: "Spark plug"
status: ready-to-build
duration: 42
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, cars, engine, sparkplug, shorts]
description: "A spark plug turns your 12-volt battery into a spark of tens of thousands of volts, many times a second."
pinned: "What should we cut open next?"
---

# vid-48 · There's lightning going off inside your engine

## Hook

- **Chosen (0-3s):** "A tiny lightning bolt fires inside your engine nonstop." Big text: TINY LIGHTNING
- **Backup hooks:**
    1. "Your car turns twelve volts into tens of thousands."
    2. "This tiny gap starts your car every single time."
    3. "Your engine makes its own lightning."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "A tiny lightning bolt fires inside your engine nonstop."
    text: "TINY LIGHTNING"
    highlight: "LIGHTNING"
    visual: { kind: hero, icon: bolt, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "That's the spark plug. One screws into the top of each cylinder in a petrol engine."
    text: "THE SPARK PLUG"
    highlight: "SPARK"
    visual: { kind: callout, icon: bolt, parts: ["Ceramic insulator", "Centre electrode", "Tiny gap", "Metal thread"] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "But your car battery only gives twelve volts. That can't jump a gap of air."
    text: "12 VOLTS ISN'T ENOUGH"
    highlight: "12 VOLTS"
    visual: { kind: flow, steps: [{ label: "Battery: 12 volts", icon: battery }, { label: "Ignition coil", icon: coil }, { label: "Spark plug", icon: bolt }] }
  - at: 15
    dur: 6
    vo: "So an ignition coil steps it up to tens of thousands of volts."
    text: "TENS OF THOUSANDS"
    highlight: "THOUSANDS"
    visual: { kind: bars, unit: "V", items: [{ label: "Battery", value: 12, color: grey }, { label: "Coil output, roughly", value: 30000, color: accent }] }
    sfx: buzz
  - at: 21
    dur: 6
    vo: "That voltage leaps a gap about as thin as a credit card, making a spark."
    text: "LEAP THE GAP"
    highlight: "GAP"
    visual: { kind: zoom, levels: [{ label: "Engine", icon: car }, { label: "Spark plug", icon: bolt }, { label: "The gap", icon: lens }] }
  - at: 27
    dur: 6
    vo: "The spark lights the squeezed fuel and air, and the blast pushes the piston down."
    text: "SPARK, THEN BLAST"
    highlight: "BLAST"
    visual: { kind: compare, mode: before-after, left: { label: "Squeezed mix", icon: molecule, color: cyan }, right: { label: "Blast", icon: flame, color: orange } }
    sfx: thunk
  - at: 33
    dur: 5
    vo: "At highway speed, each plug fires around twenty times a second."
    text: "20 A SECOND"
    highlight: "20"
    visual: { kind: counter, to: 20, label: "Sparks per second", icon: bolt }
    sfx: pop
  - at: 38
    dur: 4
    vo: "Every second you drive, remember..."
    text: ""
    visual: { kind: hero, icon: bolt, motion: float, color: accent, label: "Spark plug" }
    note: "Loops into the hook: 'A tiny lightning bolt fires inside your engine nonstop.'"
```

## Fact check

- Petrol engines use one spark plug per cylinder (some designs use two); diesels have none.
- Car electrical systems are 12 V; the ignition coil is a step-up transformer producing roughly 20,000-40,000 V, so 'tens of thousands' and a bar of about 30,000 V are fair.
- Typical plug gaps are about 0.7-1.1 mm; a bank card is about 0.76 mm thick, hence 'about as thin as a credit card'.
- Around twenty sparks a second per plug: in a four-stroke engine each plug fires once every two revolutions, so at about 2,400 rpm that is 20 per second.
