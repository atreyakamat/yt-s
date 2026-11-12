---
id: vid-56
title: "Your blender doesn't need sharp blades. Speed does the work 🌀"
series: cut-it-open
topic: "Blender"
status: ready-to-build
duration: 39
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, engineering, blender, kitchen, shorts]
description: "Blender blades smash food more than they slice it. Speed, angled blades and a swirling vortex do the real work."
pinned: "What should we cut open next?"
---

# vid-56 · Your blender doesn't need sharp blades. Speed does the work

## Hook

- **Chosen (0-3s):** "Your blender's blades don't need to be sharp." Big text: BLUNT BLADES?
- **Backup hooks:**
    1. "Your blender blades are blunter than you think."
    2. "A blender doesn't cut, it smashes."
    3. "The real trick in your blender is a whirlpool."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your blender's blades don't need to be sharp."
    text: "BLUNT BLADES?"
    highlight: "BLUNT"
    visual: { kind: hero, icon: fan, motion: spin, color: accent, label: "Blender" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "The motor in the base spins them thousands of times every minute."
    text: "THOUSANDS OF TURNS"
    highlight: "THOUSANDS"
    visual: { kind: gauge, value: 95, low: "Off", high: "Max", label: "Thousands of turns a minute" }
    sfx: buzz
  - at: 8
    dur: 6
    vo: "At that speed, the blades smash and tear food more than they slice it."
    text: "SMASH, NOT SLICE"
    highlight: "SMASH"
    visual: { kind: compare, mode: versus, left: { label: "Knife: slices", icon: tool }, right: { label: "Blender: smashes", icon: fan } }
  - at: 14
    dur: 6
    vo: "Spinning blades fling everything outward and up the walls, then it falls back into the middle."
    text: "THE VORTEX"
    highlight: "VORTEX"
    visual: { kind: cycle, icon: wind, steps: ["Flung outward", "Up the walls", "Falls to the centre", "Back into the blades"] }
  - at: 20
    dur: 5
    vo: "Many jars have ridges inside that break the swirl, so food doesn't just spin in place."
    text: "RIDGED JAR"
    highlight: "RIDGED"
    visual: { kind: callout, icon: cup, parts: ["Ridged walls", "Lid", "Blade assembly", "Motor base"] }
  - at: 25
    dur: 5
    vo: "The blades are bent at different angles. Some lift food, some push it down."
    text: "ANGLED BLADES"
    highlight: "ANGLED"
    visual: { kind: layers, items: [{ label: "Upturned blades: lift", color: accent }, { label: "Flat blades: cut", color: steel }, { label: "Downturned blades: pull", color: grey }] }
  - at: 30
    dur: 5
    vo: "Put liquid in first, so the vortex can start before thick stuff jams."
    text: "LIQUID FIRST"
    highlight: "LIQUID"
    visual: { kind: flow, steps: [{ label: "Liquid", icon: drop }, { label: "Soft food", icon: food }, { label: "Ice and frozen", icon: snowflake }] }
    sfx: pop
  - at: 35
    dur: 4
    vo: "Speed does the work. That's why..."
    text: ""
    visual: { kind: hero, icon: fan, motion: float, color: accent, label: "Speed, not sharpness" }
    note: "Loop: the last line runs straight back into the hook."
```

## Fact check

- Speed: countertop blender motors spin the blade assembly at thousands to tens of thousands of rpm, so 'thousands of times every minute' is safe.
- Blunt blades: many high-power blenders use deliberately blunt blades; food is broken up by high-speed impact and shear rather than slicing.
- Vortex: the spinning blades throw contents outward and up the jar walls, and they fall back down the centre into the blades.
- Jar ribs/ridges and blades bent up and down are common design features to disrupt the swirl and circulate food.
- Adding liquids first is standard manufacturer loading advice.
