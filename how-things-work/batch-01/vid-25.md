---
id: vid-25
title: "Some smoke alarms hide a speck of radioactive metal ☢️"
series: cut-it-open
topic: "Ionisation smoke alarm"
status: ready-to-build
duration: 40
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, science, smokealarm, safety, shorts]
description: "Ionisation smoke alarms use a tiny radioactive source to make air carry a current. Smoke breaks that current and sets off the alarm."
pinned: "What should we cut open next?"
---

# vid-25 · Some smoke alarms hide a speck of radioactive metal

## Hook

- **Chosen (0-3s):** "Some smoke alarms carry a speck of radioactive metal." Big text: A RADIOACTIVE SPECK
- **Backup hooks:**
    1. "This smoke alarm has a radioactive heart."
    2. "Your ceiling might be holding a nuclear trick."
    3. "Smoke doesn't trip this alarm. Missing electricity does."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Some smoke alarms carry a speck of radioactive metal."
    text: "A RADIOACTIVE SPECK"
    highlight: "RADIOACTIVE"
    visual: { kind: hero, icon: molecule, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "It's americium, a tiny amount, sealed inside a little metal chamber."
    text: "AMERICIUM INSIDE"
    highlight: "AMERICIUM"
    visual: { kind: layers, items: [{ label: "Plastic case", color: white }, { label: "Ion chamber", color: accent }, { label: "Americium foil", color: orange }, { label: "Circuit and horn", color: steel }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "It gives off alpha particles that knock electrons off air molecules in the chamber."
    text: "AIR GETS CHARGED"
    highlight: "CHARGED"
    visual: { kind: zoom, levels: [{ label: "The chamber", icon: box }, { label: "Air molecules", icon: molecule }, { label: "Loose electrons", icon: bolt, color: accent }] }
  - at: 14
    dur: 6
    vo: "Two metal plates pull those charged bits across, so a tiny current flows nonstop."
    text: "A TINY CURRENT"
    highlight: "CURRENT"
    visual: { kind: cycle, icon: bolt, steps: ["Alpha hits air", "Air is charged", "Plates pull it", "Current flows"] }
    sfx: buzz
  - at: 20
    dur: 6
    vo: "When smoke drifts in, the particles grab those charges and the current drops."
    text: "SMOKE STEALS IT"
    highlight: "SMOKE"
    visual: { kind: compare, mode: before-after, left: { label: "Clean air", icon: wind, tag: "Current on" }, right: { label: "Smoky air", icon: cloud, color: red, tag: "Current drops" } }
  - at: 26
    dur: 5
    vo: "The chip sees the drop and fires the horn."
    text: "BEEP BEEP BEEP"
    highlight: "BEEP"
    visual: { kind: wave, waves: [{ label: "Alarm horn", freq: 9, color: red }] }
    sfx: buzz
  - at: 31
    dur: 5
    vo: "Alpha particles can't even pass through paper, so sealed inside, it's harmless."
    text: "STOPPED BY PAPER"
    highlight: "PAPER"
    visual: { kind: gauge, value: 10, low: "Paper", high: "Lead", label: "Alpha barely travels" }
  - at: 36
    dur: 4
    vo: "So that quiet disc on your ceiling..."
    text: ""
    visual: { kind: hero, icon: house, motion: float, label: "Always watching" }
    note: "Loops into: 'Some smoke alarms carry a speck of radioactive metal.'"
```

## Fact check

- Ionisation smoke alarms contain a small sealed americium-241 source (well under a microgram) that emits alpha particles.
- Alpha particles ionise the air between two charged plates, so a small steady current flows; smoke particles attach to the ions and reduce the current, which triggers the alarm.
- Alpha particles are stopped by a sheet of paper or the outer layer of skin, and the source is sealed in a metal chamber, so an intact alarm poses no meaningful risk.
