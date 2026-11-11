---
id: vid-26
title: "Your kettle switches itself off with its own steam ☕"
series: cut-it-open
topic: "Electric kettle"
status: ready-to-build
duration: 39
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, engineering, kettle, kitchen, shorts]
description: "There's no chip deciding when your kettle is done. Steam flips a tiny two-metal disc that knocks the switch off."
pinned: "What should we cut open next?"
---

# vid-26 · Your kettle switches itself off with its own steam

## Hook

- **Chosen (0-3s):** "Your kettle switches off using its own steam." Big text: STEAM SWITCH
- **Backup hooks:**
    1. "Your kettle has no thermometer inside."
    2. "That click is a metal disc flipping inside out."
    3. "A coin-sized disc decides when your water is ready."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your kettle switches off using its own steam."
    text: "STEAM SWITCH"
    highlight: "STEAM"
    visual: { kind: hero, icon: drop, motion: pulse, color: steel, label: "Electric kettle" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Under the floor sits a heating element, often more than a thousand watts."
    text: "HIDDEN ELEMENT"
    highlight: "ELEMENT"
    visual: { kind: layers, items: [{ label: "Water", color: blue }, { label: "Steel floor", color: steel }, { label: "Heating element", color: red }, { label: "Power connector", color: grey }] }
    sfx: slice
  - at: 8
    dur: 5
    vo: "As the water nears boiling, steam is channelled into a small tube near the handle."
    text: "STEAM TUBE"
    highlight: "TUBE"
    visual: { kind: flow, steps: [{ label: "Water boils", icon: drop }, { label: "Steam rises", icon: cloud }, { label: "Tube to the switch", icon: pipe }] }
  - at: 13
    dur: 6
    vo: "At the end of that tube is a small disc made of two metals bonded together."
    text: "BIMETAL DISC"
    highlight: "BIMETAL"
    visual: { kind: callout, icon: gear, parts: ["Metal A: expands more", "Metal B: expands less", "Domed disc"] }
  - at: 19
    dur: 5
    vo: "Hot steam heats the disc until it suddenly snaps from one dome shape to the other."
    text: "SNAP!"
    highlight: "SNAP!"
    visual: { kind: gauge, value: 90, low: "Cool", high: "Hot", label: "Disc flips near boiling" }
    sfx: click
  - at: 24
    dur: 5
    vo: "That snap pushes a rod, which flicks the switch and cuts the power."
    text: "POWER CUT"
    highlight: "CUT"
    visual: { kind: compare, mode: before-after, left: { label: "Power on", icon: bolt, color: green }, right: { label: "Power off", icon: plug, color: red } }
  - at: 29
    dur: 6
    vo: "A second safety disc under the element cuts out if you boil it dry."
    text: "DRY-BOIL BACKUP"
    highlight: "BACKUP"
    visual: { kind: zoom, levels: [{ label: "The base", icon: plug }, { label: "Under the element", icon: flame }, { label: "Backup disc", icon: shield }] }
  - at: 35
    dur: 4
    vo: "So the next time it clicks off, remember..."
    text: ""
    visual: { kind: hero, icon: drop, motion: float, color: steel, label: "Click!" }
    note: "Loop: the last line runs straight back into the hook."
```

## Fact check

- Steam switch: most automatic kettles route steam from the boiling water through a channel to a bimetallic snap-disc control near the handle; the disc flips when it gets hot and trips the switch.
- Bimetal disc: two bonded metals expand by different amounts, so a pre-domed disc snaps over at a set temperature.
- Power: kettles are typically rated from about 1,000 W (many US models around 1,500 W) up to about 3,000 W (UK), so 'often more than a thousand watts' holds.
- Dry-boil protection: a second thermal cut-out under the element switches the kettle off if it is run empty.
