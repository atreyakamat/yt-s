---
id: vid-10
title: Before fridges, ice crossed oceans
series: before-it-existed
topic: Before fridges
status: ready-to-build
duration: 46
music: wallpaper
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-10 · Before fridges, ice crossed oceans

## Hook

- **Chosen (0-3s):** "In 1833, ice sailed from Boston to India."
- **Backup hooks:**
    1. "In 1833, a ship sailed ice to India."
    2. "Before fridges, ice crossed oceans."
    3. "Rich people in 1800s India had New England ice."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: whoosh
    vo: "In 1833, ice sailed from Boston to India."
    text: "BOSTON \u2192 INDIA"
    visual: { kind: fridge, state: ship }
    note: "Ice block on a ship's deck in tropical sun"
  - at: 3
    dur: 7
    sfx: pop
    vo: "Before fridges, people cut ice from frozen lakes in winter."
    text: "LAKE ICE"
    visual: { kind: fridge, state: lake }
    note: "Men sawing blocks from a frozen lake"
  - at: 10
    dur: 8
    sfx: thunk
    vo: "They packed it in sawdust inside thick-walled ice houses. Sawdust slows heat down."
    text: "SAWDUST = INSULATION"
    visual: { kind: fridge, state: icehouse }
    note: "Ice house cutaway: thick walls, blocks packed in sawdust"
  - at: 18
    dur: 8
    sfx: whoosh
    vo: "A trader called Frederic Tudor shipped it around the world. A lot of it made the trip."
    text: "THE ICE KING"
    visual: { kind: fridge, state: map }
    note: "Map: ship route crossing oceans, 4 months"
  - at: 26
    dur: 10
    sfx: pop
    vo: "Today a fridge does the opposite trick. A liquid evaporates inside, soaking up heat, then dumps it out the back."
    text: "MOVES HEAT OUT"
    visual: { kind: fridge, state: fridge }
    note: "Modern fridge cutaway, coolant arrows looping"
  - at: 36
    dur: 5
    sfx: click
    vo: "That's why the back of your fridge is warm."
    text: "BACK = WARM"
    visual: { kind: fridge, state: coils }
    note: "Hand on the warm coils behind a fridge"
  - at: 41
    dur: 5
    sfx: whoosh
    vo: "No electricity, just sawdust, and a ship that..."
    text: ""
    visual: { kind: fridge, state: ship }
    note: "Back to the ship in the sun"
```

## Notes

**Loop:** "a ship that..." runs into "In 1833, ice sailed from Boston to India."
**Fact check:** Tudor's ice reached Calcutta in 1833 (ship Tuscany). Confirm voyage length before recording.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
