---
id: vid-09
title: Your phone feels your electricity
series: cut-it-open
topic: Touchscreen
status: ready-to-build
duration: 41
music: cipher
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-09 · Your phone feels your electricity

## Hook

- **Chosen (0-3s):** "Your phone isn't feeling your touch. It's feeling you."
- **Backup hooks:**
    1. "Your phone can't feel gloves. Here's why."
    2. "Your touchscreen feels your electricity."
    3. "Try tapping your phone with a sausage. It works."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: buzz
    vo: "Your phone isn't feeling your touch. It's feeling you."
    text: "IT FEELS YOU"
    visual: { kind: touchscreen, state: glove }
    note: "Gloved finger tapping a phone, nothing happens"
  - at: 3
    dur: 7
    sfx: slice
    vo: "Under the glass is a grid of see-through wires."
    text: "INVISIBLE GRID"
    visual: { kind: touchscreen, state: layers }
    note: "Screen peels apart in layers; an invisible grid glows"
  - at: 10
    dur: 8
    sfx: pop
    vo: "That grid holds a tiny, steady electric charge."
    text: "ELECTRIC FIELD"
    visual: { kind: touchscreen, state: field }
    note: "Grid holds a steady electric field, shown as soft glow"
  - at: 18
    dur: 8
    sfx: click
    vo: "Your body conducts electricity. When your finger gets close, it pulls some of that charge away."
    text: "YOU CONDUCT"
    visual: { kind: touchscreen, state: finger }
    note: "Bare finger approaches; charge drains toward it at one crossing"
  - at: 26
    dur: 7
    sfx: pop
    vo: "The phone measures which crossing changed, and that's exactly where you touched."
    text: "X + Y"
    visual: { kind: touchscreen, state: xy }
    note: "Chip pinpoints the crossing, cursor dot appears"
  - at: 33
    dur: 4
    sfx: buzz
    vo: "A normal glove doesn't conduct, so the grid can't feel you."
    text: ""
    visual: { kind: touchscreen, state: glove-block }
    note: "Glove blocks the charge"
  - at: 37
    dur: 4
    sfx: whoosh
    vo: "Which is why this..."
    text: ""
    visual: { kind: touchscreen, state: glove }
    note: "Back to the gloved tap"
```

## Notes

**Loop:** "this..." over the gloved tap runs into "Your phone isn't feeling your touch."
**Fact check:** capacitive screens (most phones); grid is indium tin oxide or similar.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).

## Fact check

- Capacitive touchscreens detect a conductive finger distorting the screen's electrostatic field; plain gloves insulate. OK. Source: https://en.wikipedia.org/wiki/Touchscreen
