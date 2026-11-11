---
id: vid-85
title: "Your CO alarm is smelling a gas you never can 🫁"
series: cut-it-open
topic: "Carbon monoxide alarm"
status: ready-to-build
duration: 41
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, science, safety, carbonmonoxide, shorts]
description: "Carbon monoxide has no colour and no smell. A CO alarm uses a tiny chemical cell that turns the gas into an electric current."
pinned: "What should we cut open next?"
---

# vid-85 · Your CO alarm is smelling a gas you never can

## Hook

- **Chosen (0-3s):** "Your CO alarm smells a gas you never can." Big text: A GAS YOU CAN'T SMELL
- **Backup hooks:**
    1. "This gas has no smell, so a battery cell smells it for you."
    2. "Your CO alarm is a tiny chemical battery."
    3. "Carbon monoxide hugs your blood 200 times harder than oxygen."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your CO alarm smells a gas you never can."
    text: "A GAS YOU CAN'T SMELL"
    highlight: "CAN'T SMELL"
    visual: { kind: hero, icon: cloud, motion: float, color: grey }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Carbon monoxide comes from burning fuel without enough air. It has no colour or smell."
    text: "NO COLOUR, NO SMELL"
    highlight: "NO SMELL"
    visual: { kind: flow, steps: [{ label: "Fuel burns", icon: flame }, { label: "Not enough air", icon: wind }, { label: "CO is made", icon: molecule, color: red }] }
  - at: 8
    dur: 6
    vo: "It grabs the blood's oxygen carrier over two hundred times harder than oxygen does."
    text: "200X STICKIER"
    highlight: "200X"
    visual: { kind: counter, to: 200, suffix: "x", label: "grip versus oxygen", icon: heart }
  - at: 14
    dur: 6
    vo: "So the alarm uses an electrochemical cell: two electrodes and a gel between them."
    text: "A CHEMICAL CELL"
    highlight: "CELL"
    visual: { kind: layers, items: [{ label: "Gas filter", color: white }, { label: "Sensing electrode", color: accent }, { label: "Electrolyte gel", color: cyan }, { label: "Counter electrode", color: steel }] }
    sfx: slice
  - at: 20
    dur: 6
    vo: "CO reacts on one electrode and makes a tiny current. More gas, more current."
    text: "GAS MAKES CURRENT"
    highlight: "CURRENT"
    visual: { kind: gauge, value: 70, low: "Clean air", high: "Lots of CO", label: "Current rises with CO" }
  - at: 26
    dur: 6
    vo: "The chip watches both level and time, so a small leak sounds later, a big one fast."
    text: "LEVEL AND TIME"
    highlight: "TIME"
    visual: { kind: bars, items: [{ label: "Low level", value: 30, color: orange }, { label: "High level", value: 95, color: red }] }
  - at: 32
    dur: 5
    vo: "The cell slowly wears out, which is why CO alarms have an end-of-life date."
    text: "IT EXPIRES"
    highlight: "EXPIRES"
    visual: { kind: compare, mode: before-after, left: { label: "New cell", icon: battery, color: green }, right: { label: "Worn cell", icon: battery, color: red } }
  - at: 37
    dur: 4
    vo: "Because carbon monoxide... your nose can't."
    text: ""
    visual: { kind: hero, icon: shield, motion: pulse, label: "Your second nose" }
    note: "Last line runs back into the hook."
```

## Fact check

- Carbon monoxide is colourless and odourless and is produced by incomplete combustion of fuels.
- Haemoglobin binds CO roughly 200-250 times more strongly than oxygen, so 'over two hundred times' is fair.
- Most home CO alarms use an electrochemical sensor where CO is oxidised at an electrode, producing a current proportional to concentration.
- CO alarm standards set alarm times based on both concentration and exposure time, and sensors have a limited life with an end-of-life warning. Bars are illustrative.
