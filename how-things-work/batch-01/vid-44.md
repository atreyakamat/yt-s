---
id: vid-44
title: "Your safety switch is counting the electricity coming back"
series: cut-it-open
topic: "RCD safety switch"
status: ready-to-build
duration: 42
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, electricity, safety, fusebox, shorts]
description: "An RCD compares the current going out with the current coming back. If 30 milliamps goes missing, it cuts the power."
pinned: "What should we cut open next?"
---

# vid-44 · Your safety switch is counting the electricity coming back

## Hook

- **Chosen (0-3s):** "Your safety switch notices 30 milliamps going missing." Big text: 30 MILLIAMPS MISSING
- **Backup hooks:**
    1. "This switch notices when electricity takes a wrong turn."
    2. "Your fuse box has a switch that counts every amp."
    3. "The T button in your fuse box fakes an accident."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your safety switch notices 30 milliamps going missing."
    text: "30 MILLIAMPS MISSING"
    highlight: "MISSING"
    visual: { kind: hero, icon: shield, motion: pulse, color: green }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "It's called an RCD. Both the live and neutral wires pass through one iron ring."
    text: "TWO WIRES, ONE RING"
    highlight: "ONE RING"
    visual: { kind: callout, icon: coil, parts: ["Live wire out", "Neutral wire back", "Iron ring", "Small sense coil"] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "Normally the current going out equals the current coming back, so their magnetic fields cancel."
    text: "OUT EQUALS BACK"
    highlight: "EQUALS"
    visual: { kind: bars, items: [{ label: "Current going out", value: 10, color: orange }, { label: "Current coming back", value: 10, color: blue }] }
  - at: 15
    dur: 6
    vo: "If some current leaks through a faulty wire, or a person, the two no longer match."
    text: "SOME GOES MISSING"
    highlight: "MISSING"
    visual: { kind: flow, steps: [{ label: "Fault, or a person", icon: person }, { label: "Current leaks to earth", icon: bolt }, { label: "Out and back don't match", icon: question }] }
  - at: 21
    dur: 6
    vo: "The leftover field makes a current in a small coil, and that trips the switch."
    text: "THE COIL TRIPS IT"
    highlight: "TRIPS"
    visual: { kind: zoom, levels: [{ label: "Iron ring", icon: coil }, { label: "Sense coil", icon: coil }, { label: "Trip switch", icon: bolt }] }
    sfx: thunk
  - at: 27
    dur: 5
    vo: "Most home RCDs trip at 30 milliamps, in a fraction of a second."
    text: "TRIPS AT 30 MILLIAMPS"
    highlight: "30"
    visual: { kind: counter, to: 30, suffix: " mA", label: "milliamps of leak to trip", icon: bolt }
  - at: 32
    dur: 6
    vo: "That T button fakes a leak on purpose, so you can check it still works."
    text: "THE TEST BUTTON"
    highlight: "TEST"
    visual: { kind: gauge, value: 100, low: "Normal", high: "Tripped", label: "Press T to fake a leak" }
    sfx: click
  - at: 38
    dur: 4
    vo: "Because every second of the day, your safety switch..."
    text: ""
    visual: { kind: hero, icon: shield, motion: float, color: green, label: "RCD" }
    note: "Loop: runs back into the hook."
```

## Fact check

- Domestic RCDs are most commonly rated 30 mA and about 40 ms (usually under 30 to 40 ms). OK. Source: https://en.wikipedia.org/wiki/Residual-current_device
