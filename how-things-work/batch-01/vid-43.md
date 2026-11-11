---
id: vid-43
title: "Most of your hair dryer's power goes into a glowing wire 🔥"
series: cut-it-open
topic: "Hair dryer heating element"
status: ready-to-build
duration: 38
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, hairdryer, electricity, engineering, shorts]
description: "A hair dryer is a small fan behind a big heater. Nichrome wire wound on mica takes almost all the power."
pinned: "What should we cut open next?"
---

# vid-43 · Most of your hair dryer's power goes into a glowing wire

## Hook

- **Chosen (0-3s):** "Most of your hair dryer's power goes into a wire." Big text: IT'S MOSTLY A HEATER
- **Backup hooks:**
    1. "Your hair dryer is a fan glued to a toaster."
    2. "There's a sheet of mineral inside your hair dryer."
    3. "Your hair dryer's motor barely uses any power."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Most of your hair dryer's power goes into a wire."
    text: "IT'S MOSTLY A HEATER"
    highlight: "HEATER"
    visual: { kind: hero, icon: wind, label: "Hair dryer", color: orange, motion: spin }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Inside: a small motor, a fan, and a coil of wire wound around a heat-proof frame."
    text: "MOTOR, FAN, COIL"
    highlight: "COIL"
    visual: { kind: layers, items: [{ label: "Back filter", color: grey }, { label: "Motor and fan", color: steel }, { label: "Coiled heating wire", color: red }, { label: "Nozzle", color: accent }] }
  - at: 9
    dur: 6
    vo: "The wire is nichrome, which resists current and glows hot instead of melting."
    text: "NICHROME WIRE"
    highlight: "NICHROME"
    visual: { kind: zoom, levels: [{ label: "Heating element", icon: flame }, { label: "Nichrome wire", icon: coil }, { label: "Resists current", icon: bolt }] }
  - at: 15
    dur: 6
    vo: "It's wrapped on sheets of mica, a mineral that won't burn or carry electricity."
    text: "WRAPPED ON MICA"
    highlight: "MICA"
    visual: { kind: callout, icon: flame, parts: ["Mica frame", "Heat-proof", "Electrical insulator"] }
  - at: 21
    dur: 6
    vo: "Out of about two thousand watts, the heater uses nearly all of it. The motor needs a small fraction."
    text: "THE HEATER HOGS IT"
    highlight: "HEATER"
    visual: { kind: bars, unit: "W", items: [{ label: "Motor and fan", value: 100, color: grey }, { label: "Heating wire", value: 1900, color: red }] }
  - at: 27
    dur: 6
    vo: "The heat settings just choose how much of the heater gets power, and how fast the fan spins."
    text: "SETTINGS: WIRE + FAN"
    highlight: "WIRE"
    visual: { kind: gauge, value: 60, low: "Low", high: "High", label: "Heat setting" }
  - at: 33
    dur: 5
    vo: "Think of it as a fan behind a toaster. Most of your hair dryer's power..."
    text: ""
    visual: { kind: hero, icon: wind, label: "Fan plus heater", color: orange, motion: float }
    note: "Last line runs back into the hook."
```

## Fact check

- Layout → hair dryers contain an intake filter, a small motor and fan, a resistance heating element and a nozzle.
- Nichrome → nickel-chromium alloy used for heating elements: high resistance and resists oxidation at red heat.
- Mica → elements are wound on mica boards, a mineral that is heat-resistant and an electrical insulator.
- Power split → typical dryers are about 1,800-2,200 W; the motor uses tens of watts to around 100 W, so the heater takes the vast majority (bars show rounded figures).
- Settings switch element sections and fan speed.
