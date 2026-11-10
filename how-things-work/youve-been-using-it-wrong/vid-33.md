---
id: vid-33
title: "That tiny arrow on your fuel gauge has a secret job ⛽"
series: youve-been-using-it-wrong
topic: "Fuel door arrow"
status: ready-to-build
duration: 34
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, cars, driving, lifehack, shorts]
description: "The small triangle next to the pump icon on your dashboard points to the side your fuel cap is on."
pinned: "What else have we all been using wrong?"
---

# vid-33 · That tiny arrow on your fuel gauge has a secret job

## Hook

- **Chosen (0-3s):** "That little arrow on your fuel gauge has a job." Big text: THE TINY ARROW
- **Backup hooks:**
    1. "Never pull up on the wrong side of the pump again."
    2. "Your dashboard already tells you which side the fuel cap is."
    3. "There's a reason your fuel gauge has a tiny triangle."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "That little arrow on your fuel gauge has a job."
    text: "THE TINY ARROW"
    highlight: "ARROW"
    visual: { kind: hero, icon: arrow, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Look next to the pump icon on your dashboard. There's a small triangle."
    text: "NEXT TO THE PUMP"
    highlight: "PUMP"
    visual: { kind: callout, icon: car, parts: ["Pump icon", "Small arrow", "Fuel needle"] }
    sfx: click
  - at: 8
    dur: 6
    vo: "It points to the side of the car your fuel cap is on."
    text: "LEFT OR RIGHT?"
    highlight: "LEFT OR RIGHT?"
    visual: { kind: compare, mode: versus, left: { label: "Arrow points left", icon: arrow, color: cyan, tag: "Cap on left" }, right: { label: "Arrow points right", icon: arrow, color: accent, tag: "Cap on right" } }
  - at: 14
    dur: 6
    vo: "So in a rental or a friend's car, you pull up on the correct side first time."
    text: "NO MORE GUESSING"
    highlight: "GUESSING"
    visual: { kind: flow, steps: [{ label: "Check the arrow", icon: arrow }, { label: "Pick the pump side", icon: car }, { label: "Cap faces the pump", icon: drop }] }
  - at: 20
    dur: 5
    vo: "Why no standard side? Each carmaker picks, based on how the tank and pipes fit."
    text: "NO STANDARD SIDE"
    highlight: "NO"
    visual: { kind: zoom, levels: [{ label: "The car", icon: car }, { label: "Fuel tank", icon: box }, { label: "Filler pipe", icon: pipe }] }
  - at: 25
    dur: 5
    vo: "Next time the needle drops low, glance at the arrow before you turn in."
    text: "GLANCE FIRST"
    highlight: "GLANCE"
    visual: { kind: gauge, value: 12, low: "Empty", high: "Full", label: "Arrow points to the cap" }
  - at: 30
    dur: 4
    vo: "So before you pull in, remember..."
    text: ""
    visual: { kind: hero, icon: arrow, motion: float, color: accent, label: "Fuel door arrow" }
    note: "Loops into the hook: 'That little arrow on your fuel gauge has a job.'"
```

## Fact check

- Many modern cars show a small triangle beside the fuel pump symbol on the fuel gauge; it points to the side of the car with the fuel filler door. Not every car has it, which is why the script says 'look' rather than 'every car'.
- There is no universal standard for which side the filler sits on; it varies by model and maker and depends on packaging of the tank, filler pipe and exhaust.
