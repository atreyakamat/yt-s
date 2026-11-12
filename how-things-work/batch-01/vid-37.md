---
id: vid-37
title: "There's a wrong way to hold an adjustable spanner"
series: youve-been-using-it-wrong
topic: "Adjustable spanner"
status: ready-to-build
duration: 36
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [tools, diy, lifehacks, spanner, shorts]
description: "An adjustable spanner has one solid jaw and one sliding jaw. Put the force into the solid one and it stops slipping."
pinned: "What else have we all been using wrong?"
---

# vid-37 · There's a wrong way to hold an adjustable spanner

## Hook

- **Chosen (0-3s):** "You're probably turning your adjustable spanner the wrong way." Big text: WRONG WAY ROUND
- **Backup hooks:**
    1. "Your adjustable spanner has a strong side and a weak side."
    2. "This is why your spanner keeps slipping."
    3. "Flip your spanner and it stops rounding nuts."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "You're probably turning your adjustable spanner the wrong way."
    text: "WRONG WAY ROUND"
    highlight: "WRONG"
    visual: { kind: hero, icon: wrench, motion: shake, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "One jaw is solid with the handle. The other slides on a little screw."
    text: "TWO DIFFERENT JAWS"
    highlight: "TWO"
    visual: { kind: callout, icon: wrench, parts: ["Fixed jaw", "Sliding jaw", "Worm screw"] }
    sfx: click
  - at: 9
    dur: 6
    vo: "The sliding jaw always has a tiny bit of play. Load it and it can spread open."
    text: "A LITTLE PLAY"
    highlight: "PLAY"
    visual: { kind: flow, steps: [{ label: "Force on the sliding jaw", icon: arrow }, { label: "Jaw tilts open a hair", icon: wrench }, { label: "Spanner slips", icon: question }] }
    sfx: thunk
  - at: 15
    dur: 5
    vo: "That slip is what rounds off the corners of a nut."
    text: "ROUNDED NUTS"
    highlight: "ROUNDED"
    visual: { kind: zoom, levels: [{ label: "Spanner slips", icon: wrench }, { label: "The nut", icon: gear }, { label: "Corners worn round", icon: gear, color: red }] }
  - at: 20
    dur: 6
    vo: "So turn it so the force pushes into the fixed jaw, not the sliding one."
    text: "PUSH INTO FIXED JAW"
    highlight: "FIXED"
    visual: { kind: compare, mode: wrong-right, left: { label: "Load on sliding jaw", icon: arrow, tag: "Slips" }, right: { label: "Load on fixed jaw", icon: wrench, tag: "Grips" } }
    sfx: click
  - at: 26
    dur: 5
    vo: "And roll the screw snug first. Any gap is room to slip."
    text: "SNUG IT UP"
    highlight: "SNUG"
    visual: { kind: gauge, value: 95, low: "Loose", high: "Snug", label: "Jaw fit on the nut" }
  - at: 31
    dur: 5
    vo: "So if your nuts keep rounding off..."
    text: ""
    visual: { kind: hero, icon: wrench, motion: spin, color: accent, label: "Fixed jaw takes the load" }
    note: "Last line runs back into the hook: 'You're probably turning your adjustable spanner the wrong way.'"
```

## Fact check

- Adjustable spanners have one jaw fixed to the handle and one moved by a worm screw; the moving jaw has some clearance (play).
- Standard tool-safety guidance: position the spanner so the turning force is taken by the fixed jaw, and adjust the jaws snugly to the nut.
- Slipping spanners round off nut corners; that is the usual cause of rounded nuts.
