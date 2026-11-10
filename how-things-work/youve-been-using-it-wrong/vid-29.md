---
id: vid-29
title: "That tiny square on your radiator has a job 🔧"
series: youve-been-using-it-wrong
topic: "Radiator bleed valve"
status: ready-to-build
duration: 37
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [lifehacks, heating, radiator, home, shorts]
description: "Radiators that are cold at the top have trapped air. The little square valve lets it out."
pinned: "What else have we all been using wrong?"
---

# vid-29 · That tiny square on your radiator has a job 🔧

## Hook

- **Chosen (0-3s):** "That little square on your radiator lets the air out." Big text: THE AIR VALVE
- **Backup hooks:**
    1. "Your radiator is cold at the top for a reason."
    2. "There's a reason your radiator has a tiny square nut."
    3. "Half your radiator might be full of air."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "That little square on your radiator lets the air out."
    text: "THE AIR VALVE"
    highlight: "AIR"
    visual: { kind: hero, icon: thermometer, motion: shake, color: orange }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Air sneaks into heating pipes over time, and because it's lighter than water, it rises."
    text: "AIR RISES"
    highlight: "RISES"
    visual: { kind: layers, items: [{ label: "Trapped air: cold", color: white }, { label: "Hot water", color: orange }, { label: "Hot water", color: red }] }
    sfx: slice
  - at: 9
    dur: 5
    vo: "It collects at the top, so the radiator is cold up there and warm below."
    text: "COLD TOP, WARM BOTTOM"
    highlight: "COLD TOP"
    visual: { kind: gauge, value: 40, low: "Cold top", high: "Warm base", label: "Half a radiator working" }
  - at: 14
    dur: 7
    vo: "With the heating off and cooled down, fit a radiator key and turn it about a quarter turn."
    text: "QUARTER TURN"
    highlight: "QUARTER"
    visual: { kind: flow, steps: [{ label: "Heating off and cool", icon: flame }, { label: "Fit the radiator key", icon: key }, { label: "About a quarter turn", icon: wrench }] }
    sfx: click
  - at: 21
    dur: 6
    vo: "You'll hear a hiss. When water starts to dribble out, the air is gone. Close it."
    text: "HISS, THEN DRIP"
    highlight: "DRIP"
    visual: { kind: wave, waves: [{ label: "Hiss of escaping air", freq: 8, color: white }, { label: "Water dribbles out", freq: 2, color: blue }] }
  - at: 27
    dur: 6
    vo: "On many modern systems, check the boiler pressure afterwards. Bleeding can drop it."
    text: "CHECK THE PRESSURE"
    highlight: "PRESSURE"
    visual: { kind: compare, mode: before-after, left: { label: "Cold at the top", icon: snowflake, color: blue }, right: { label: "Hot all over", icon: flame, color: red } }
  - at: 33
    dur: 4
    vo: "So next time your radiator feels half cold, that little square..."
    text: ""
    visual: { kind: hero, icon: thermometer, motion: float, color: orange, label: "Bleed valve" }
    note: "Loop: runs back into the hook."
```

## Fact check

- Air (and gas from corrosion) collects in heating systems and rises to the top of radiators, leaving a cold top and warm bottom. Standard plumbing advice.
- Bleeding: heating off and cooled, radiator key on the bleed valve, open roughly a quarter to half turn until water appears, then close. 'About a quarter turn' kept vague.
- On sealed (combi/system) boilers, bleeding loses water and can lower the pressure, so checking the gauge afterwards is standard advice.
