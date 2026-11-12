---
id: vid-34
title: "There's a reason they make you open the window shade 🪟"
series: youve-been-using-it-wrong
topic: "Plane window shades on landing"
status: ready-to-build
duration: 36
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, aviation, planes, travel, shorts]
description: "Crews ask for the window shades up on take-off and landing. It is so everyone can see outside if something goes wrong."
pinned: "What else have we all been using wrong?"
---

# vid-34 · There's a reason they make you open the window shade

## Hook

- **Chosen (0-3s):** "There's a reason they want your window shade up." Big text: SHADES UP. WHY?
- **Backup hooks:**
    1. "Open window shades are a safety rule, not a view."
    2. "The crew wants your window shade up for one reason."
    3. "Your window shade helps the crew in an emergency."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "There's a reason they want your window shade up."
    text: "SHADES UP. WHY?"
    highlight: "WHY?"
    visual: { kind: hero, icon: plane, motion: float, color: accent, label: "Take-off and landing" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Take-off and landing are the busiest, riskiest minutes of any flight."
    text: "THE RISKY MINUTES"
    highlight: "RISKY"
    visual: { kind: bars, items: [{ label: "Cruise", value: 20, color: green }, { label: "Take-off", value: 80, color: orange }, { label: "Landing", value: 90, color: red }] }
    sfx: click
  - at: 8
    dur: 6
    vo: "With shades open, the crew can see fire, smoke or debris outside before opening an exit."
    text: "SEE THE DANGER"
    highlight: "SEE"
    visual: { kind: callout, icon: eye, parts: ["Fire on a wing", "Smoke", "Debris on the ground"] }
    sfx: slice
  - at: 14
    dur: 5
    vo: "Passengers by the window often notice a problem first."
    text: "YOU'RE A LOOKOUT"
    highlight: "LOOKOUT"
    visual: { kind: grid, icon: person, count: 30, highlight: 10, label: "Window seats can see out" }
  - at: 19
    dur: 6
    vo: "It also helps your eyes adjust to the light outside, in case you need to get out fast."
    text: "EYES ALREADY ADJUSTED"
    highlight: "ADJUSTED"
    visual: { kind: compare, mode: before-after, left: { label: "Dark cabin, bright sun", icon: sun, tag: "Blinded" }, right: { label: "Shade open", icon: eye, tag: "Ready" } }
  - at: 25
    dur: 6
    vo: "That's also why cabin lights are often dimmed for night landings."
    text: "DIMMED FOR NIGHT"
    highlight: "DIMMED"
    visual: { kind: flow, steps: [{ label: "Dim the cabin", icon: bulb }, { label: "Eyes adapt to dark", icon: eye }, { label: "Faster evacuation", icon: door }] }
    sfx: click
  - at: 31
    dur: 5
    vo: "So it's not about the view. That's why..."
    text: ""
    visual: { kind: hero, icon: sun, motion: pulse, color: accent, label: "Shade up" }
    note: "Last line runs back into the hook."
```

## Fact check

- Many airlines require shades open during take-off and landing so crew and passengers can see hazards like fire outside before an exit is opened.
- Take-off and landing phases account for the majority of accidents; the bar chart is illustrative, not data (no numbers shown).
- Cabin lights are dimmed for night take-off and landing so eyes are adapted to the dark if an evacuation happens.
- Rules vary by airline and country; the script says 'they want', not that it is law everywhere.
