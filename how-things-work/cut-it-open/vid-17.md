---
id: vid-17
title: "Every key on your keyboard hides its own tiny spring ⌨️"
series: cut-it-open
topic: "Mechanical keyboard switch"
status: ready-to-build
duration: 40
music: cipher
accent: "#FFD60A"
hashtags: [howthingswork, keyboard, tech, computers, shorts]
description: "Under each key of a mechanical keyboard sits a separate switch with a spring and two metal contacts. Press far enough and they touch."
pinned: "What should we cut open next?"
---

# vid-17 · Every key on your keyboard hides its own tiny spring

## Hook

- **Chosen (0-3s):** "Every key on this keyboard hides its own spring." Big text: A SPRING IN EVERY KEY
- **Backup hooks:**
    1. "Your keyboard has over a hundred tiny switches inside."
    2. "That click is not the key working."
    3. "Every key you press closes a little metal gate."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Every key on this keyboard hides its own spring."
    text: "A SPRING IN EVERY KEY"
    highlight: "SPRING"
    visual: { kind: hero, icon: key, motion: pulse, color: accent, label: "Mechanical keyboard" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Pull off a keycap and you find a plastic switch, one per key."
    text: "ONE SWITCH PER KEY"
    highlight: "ONE SWITCH"
    visual: { kind: zoom, levels: [{ label: "Keyboard", icon: screen }, { label: "One key", icon: key }, { label: "The switch", icon: box, color: accent }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Inside: a stem, a coil spring, and two thin metal contacts."
    text: "WHAT'S INSIDE"
    highlight: "INSIDE"
    visual: { kind: layers, items: [{ label: "Keycap", color: grey }, { label: "Plastic stem", color: accent }, { label: "Coil spring", color: steel }, { label: "Two metal contacts", color: brass }] }
    sfx: thunk
  - at: 14
    dur: 6
    vo: "Press about two millimetres and the stem lets the contacts touch."
    text: "2 MM IS ENOUGH"
    highlight: "2 MM"
    visual: { kind: gauge, value: 50, low: "Resting", high: "Bottom", label: "Fires about halfway down" }
  - at: 20
    dur: 6
    vo: "That closes a circuit, and a tiny chip reads which row and column it was."
    text: "ROW + COLUMN"
    highlight: "ROW"
    visual: { kind: flow, steps: [{ label: "Contacts touch", icon: bolt }, { label: "Circuit closes", icon: plug }, { label: "Chip finds row and column", icon: chip, color: accent }] }
    sfx: click
  - at: 26
    dur: 5
    vo: "Let go and the spring shoves the key back up."
    text: "SPRING RETURN"
    highlight: "RETURN"
    visual: { kind: cycle, icon: spring, steps: ["Press", "Contacts close", "Release", "Spring pushes up"] }
    sfx: pop
  - at: 31
    dur: 5
    vo: "Some switches add a tiny clicker just for the sound."
    text: "THE CLICK IS EXTRA"
    highlight: "EXTRA"
    visual: { kind: wave, waves: [{ label: "Clicky switch", freq: 8, color: accent }, { label: "Quiet switch", freq: 2, color: grey }] }
  - at: 36
    dur: 4
    vo: "So remember: under every letter, every key..."
    text: ""
    visual: { kind: hero, icon: key, motion: float, color: accent, label: "100+ tiny springs" }
    note: "Runs back into the hook: hides its own spring."
```

## Fact check

- Mechanical keyboards use one discrete switch per key, each with a stem, a spring and a metal contact leaf: standard design of common switch types.
- Actuation point around 2 mm on a roughly 4 mm total travel is typical for common mechanical switches.
- Keys are wired in a row/column matrix that a keyboard controller chip scans: standard keyboard design.
- Clicky switches add a separate click mechanism; linear switches have none: true of common switch families.
