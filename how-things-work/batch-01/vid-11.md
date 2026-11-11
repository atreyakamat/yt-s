---
id: vid-11
title: "Your toaster has no timer chip, just a bending strip 🍞"
series: cut-it-open
topic: "Pop-up toaster"
status: ready-to-build
duration: 38
music: investigations
accent: "#FF9F0A"
hashtags: [howthingswork, engineering, toaster, kitchen, shorts]
description: "Most toasters don't have a clock inside. A strip of two metals bends as it heats and lets the bread go."
pinned: "What should we cut open next?"
---

# vid-11 · Your toaster has no timer chip, just a bending strip

## Hook

- **Chosen (0-3s):** "Your toaster's timer is a strip of metal that bends." Big text: A BENDING TIMER
- **Backup hooks:**
    1. "There's no clock inside your toaster."
    2. "Your toaster knows when to stop without a single chip."
    3. "This tiny metal strip decides how burnt your toast gets."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your toaster's timer is a strip of metal that bends."
    text: "A BENDING TIMER"
    highlight: "BENDING"
    visual: { kind: hero, icon: food, motion: drop, color: brown }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Push the lever down and a magnet or a catch holds the bread tray in place."
    text: "LEVER DOWN"
    highlight: "DOWN"
    visual: { kind: flow, steps: [{ label: "Lever pushed down", icon: arrow }, { label: "Catch holds the tray", icon: magnet }, { label: "Wires switch on", icon: bolt }] }
    sfx: click
  - at: 8
    dur: 6
    vo: "Current runs through thin nichrome wires. They glow red hot, around six hundred degrees."
    text: "RED HOT WIRES"
    highlight: "RED HOT"
    visual: { kind: bars, unit: "°C", items: [{ label: "Boiling water", value: 100, color: blue }, { label: "Oven", value: 220, color: orange }, { label: "Toaster wire", value: 600, color: red }] }
    sfx: thunk
  - at: 14
    dur: 7
    vo: "In older and simple toasters, the timer is a bimetal strip: two metals glued together that expand at different speeds."
    text: "TWO METALS, ONE STRIP"
    highlight: "TWO METALS"
    visual: { kind: layers, items: [{ label: "Brass: expands more", color: brass }, { label: "Steel: expands less", color: steel }] }
    sfx: slice
  - at: 21
    dur: 6
    vo: "As it heats, one side grows longer, so the whole strip curls."
    text: "IT CURLS"
    highlight: "CURLS"
    visual: { kind: gauge, value: 80, low: "Cold", high: "Hot", label: "The strip bends" }
  - at: 27
    dur: 6
    vo: "When it curls far enough it trips the catch, the power cuts, and a spring fires the toast up."
    text: "POP!"
    highlight: "POP!"
    visual: { kind: flow, steps: [{ label: "Strip curls", icon: spring }, { label: "Catch released", icon: magnet }, { label: "Spring pops the toast", icon: food }] }
    sfx: pop
  - at: 33
    dur: 5
    vo: "The browning dial just moves how far it has to bend. So your toaster's timer..."
    text: ""
    visual: { kind: hero, icon: food, motion: float, color: brown, label: "No chip needed" }
    note: "Last line runs back into the hook: '...is a strip of metal that bends.'"
```

## Fact check

- Bimetal strip timers: classic and budget pop-up toasters use a bimetallic strip (or a thermostat) to time browning; many modern toasters use an electronic timer. The script says "older and simple toasters" for this reason.
- Nichrome element temperature: elements glow red at roughly 500-650 °C, so "around six hundred degrees" is fair.
- The tray is held by a mechanical catch or an electromagnet depending on the model, hence "a magnet or a catch".
- Browning dial changes the strip's travel / trip point: true for bimetal designs.
