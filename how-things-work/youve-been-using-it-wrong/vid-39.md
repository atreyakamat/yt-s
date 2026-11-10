---
id: vid-39
title: "Your tent has two walls, and you're probably pitching it wrong ⛺"
series: youve-been-using-it-wrong
topic: "Tent rainfly"
status: ready-to-build
duration: 37.5
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, camping, outdoors, tent, shorts]
description: "A double-wall tent keeps a gap between the breathable inner and the waterproof fly. Let them touch and water wicks straight in."
pinned: "What else have we all been using wrong?"
---

# vid-39 · Your tent has two walls, and you're probably pitching it wrong

## Hook

- **Chosen (0-3s):** "Your tent has two walls for a reason." Big text: TWO WALLS
- **Backup hooks:**
    1. "Never let these two layers of your tent touch."
    2. "Why your tent is wet inside when it didn't leak."
    3. "That gap in your tent is doing a job."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your tent has two walls for a reason."
    text: "TWO WALLS"
    highlight: "TWO"
    visual: { kind: hero, icon: house, motion: float, color: green, label: "Your tent" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "The inner tent breathes. The outer fly is waterproof. And the gap between them matters."
    text: "THE GAP MATTERS"
    highlight: "GAP"
    visual: { kind: layers, items: [{ label: "Rainfly: waterproof", color: blue }, { label: "Air gap", color: cyan }, { label: "Inner: breathable", color: green }, { label: "You", color: accent }] }
  - at: 8
    dur: 5
    vo: "Overnight, your breath and body release a lot of water vapor into the tent."
    text: "YOU MAKE WATER"
    highlight: "WATER"
    visual: { kind: flow, steps: [{ label: "Breath and sweat", icon: person }, { label: "Water vapor rises", icon: cloud }, { label: "Reaches the cold fly", icon: snowflake }] }
  - at: 13
    dur: 5.5
    vo: "It hits the cold fly, turns back into droplets, and runs down outside the inner tent."
    text: "IT CONDENSES"
    highlight: "CONDENSES"
    visual: { kind: cycle, icon: drop, steps: ["Vapor rises", "Hits the cold fly", "Turns to droplets", "Runs down outside"] }
  - at: 18.5
    dur: 5
    vo: "But most people pitch the fly loose, so it sags and touches the inner wall."
    text: "DON'T LET IT TOUCH"
    highlight: "TOUCH"
    visual: { kind: compare, mode: wrong-right, left: { label: "Saggy fly", icon: arrow, tag: "Wet inside" }, right: { label: "Tight fly", icon: shield, tag: "Dry inside" } }
  - at: 23.5
    dur: 5
    vo: "Where the two layers touch, water wicks straight through the fabric and drips on you."
    text: "WATER WICKS THROUGH"
    highlight: "WICKS"
    visual: { kind: zoom, levels: [{ label: "Touching spot", icon: drop }, { label: "Fabric fibers", icon: shirt }, { label: "Water pulled through", icon: water }] }
    sfx: thunk
  - at: 28.5
    dur: 6
    vo: "So tighten the guy lines, keep the gap, and open the vents to let damp air out."
    text: "TIGHTEN AND VENT"
    highlight: "VENT"
    visual: { kind: gauge, value: 20, low: "Dry", high: "Soaked", label: "Taut fly, open vents" }
  - at: 34.5
    dur: 3
    vo: "Keep that gap, because your tent..."
    text: ""
    visual: { kind: hero, icon: house, motion: float, color: green, label: "Two walls" }
    note: "Last line runs back into the hook."
```

## Fact check

- Double-wall tents use a breathable inner body and a separate waterproof rainfly with an air gap between them.
- People exhale and sweat water vapor overnight; it condenses on the cold fly, which is why tents get damp even without a leak.
- Where wet fabric touches another layer, capillary action wicks water through; 'don't touch the tent wall in rain' is classic camping advice.
- Tensioning guy lines keeps the fly off the inner, and vents reduce condensation. Standard manufacturer advice.
