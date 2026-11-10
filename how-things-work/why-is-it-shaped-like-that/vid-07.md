---
id: vid-07
title: Why manhole covers are round
series: why-is-it-shaped-like-that
topic: Why manhole covers are round
status: script-ready
duration: 30
music: pixel-peeker-polka
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-07 · Why manhole covers are round

> **Status: script ready, visuals not built yet.** The build renders it with a placeholder card where the `manhole-round` visual will go. Next step: build that visual the way `Lock.tsx` was built for vid-01, then set `status: ready-to-build`.

## Hook

- **Chosen (0-2s):** "This is why manhole covers are almost never square."
- **Backup hooks:**
    1. "A square manhole cover could kill someone."
    2. "There's a reason you've never stepped on a square manhole."
    3. "Circles are the only safe shape for this. Here's why."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "This is why manhole covers are almost never square."
    text: "NEVER SQUARE"
    visual: { kind: manhole-round }
    note: "Top-down: square cover tilts and drops into its hole"
  - at: 2
    dur: 8
    vo: "A square's diagonal is longer than its side, so turned the right way, it falls right through."
    text: "DIAGONAL > SIDE"
    visual: { kind: manhole-round }
    note: "Square cover rotated diagonally; diagonal measurement line longer than the side"
  - at: 10
    dur: 7
    vo: "A circle is the same width in every direction. It can never fall into its own hole."
    text: "SAME WIDTH"
    visual: { kind: manhole-round }
    note: "Round cover rotated every way, never fits through"
  - at: 17
    dur: 6
    vo: "It's heavy, so being able to roll it helps too."
    text: "ROLLS"
    visual: { kind: manhole-round }
    note: "Worker rolls a round cover along the street"
  - at: 23
    dur: 4
    vo: "And you don't have to line it up to put it back."
    text: "NO LINING UP"
    visual: { kind: manhole-round }
    note: "Cover dropped in without lining it up"
  - at: 27
    dur: 3
    vo: "Now you'll notice every one you walk over..."
    text: ""
    visual: { kind: manhole-round }
    note: "Cut back to square cover tilting"
```

## Notes

**Loop:** "every one you walk over..." runs into "This is why manhole covers are almost never square."
**Fact check:** "never" is an overstatement; some square and triangular covers exist with a lip. Change to "almost never" in the hook if you want no pushback.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
