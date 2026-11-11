---
id: vid-59
title: "Why your door latch is only slanted on one side 🚪"
series: why-is-it-shaped-like-that
topic: "Angled door latch"
status: ready-to-build
duration: 35
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [design, door, engineering, home, shorts]
description: "The slope on a door latch lets the frame push it in when you close the door. The flat side stops anyone pushing it open."
pinned: "What shape should we explain next?"
---

# vid-59 · Why your door latch is only slanted on one side 🚪

## Hook

- **Chosen (0-3s):** "Your door latch is slanted on one side only." Big text: ONE SLANTED SIDE
- **Backup hooks:**
    1. "This is why door latches are never flat on both sides."
    2. "You can slam a door shut, but not push it open. Here's why."
    3. "One slope on your door does two jobs."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your door latch is slanted on one side only."
    text: "ONE SLANTED SIDE"
    highlight: "SLANTED"
    visual: { kind: hero, icon: door, motion: shake, color: brass }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Close the door, and the slope hits the metal plate on the frame."
    text: "THE SLOPE HITS FIRST"
    highlight: "SLOPE"
    visual: { kind: callout, icon: door, parts: ["Slanted face", "Flat back", "Spring inside", "Strike plate on frame"] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "The plate pushes on the slope, which turns a sideways push into a backwards one."
    text: "PUSHED BACK"
    highlight: "BACK"
    visual: { kind: flow, steps: [{ label: "Door swings shut", icon: door }, { label: "Slope meets plate", icon: arrow }, { label: "Latch slides in", icon: spring }] }
  - at: 14
    dur: 5
    vo: "A spring inside gets squashed, then shoves the latch out into the hole. Click."
    text: "SPRING, THEN CLICK"
    highlight: "CLICK"
    visual: { kind: cycle, icon: spring, steps: ["Plate pushes slope", "Spring squashes", "Hole lines up", "Latch snaps out"] }
    sfx: click
  - at: 19
    dur: 6
    vo: "Now try pushing the door open. The flat side is pressed against the edge of the hole."
    text: "FLAT SIDE HOLDS"
    highlight: "FLAT"
    visual: { kind: compare, mode: versus, left: { label: "Slope: slides past", icon: arrow, color: green, tag: "Closing" }, right: { label: "Flat: won't budge", icon: lock, color: red, tag: "Opening" } }
  - at: 25
    dur: 5
    vo: "There's no slope to push on, so only the handle can pull it back."
    text: "ONLY THE HANDLE"
    highlight: "HANDLE"
    visual: { kind: zoom, levels: [{ label: "Door handle", icon: door }, { label: "Square spindle", icon: gear }, { label: "Latch pulled in", icon: spring }] }
  - at: 30
    dur: 5
    vo: "That's why you can slam a door shut but never push it open. Your latch..."
    text: ""
    visual: { kind: hero, icon: door, motion: float, color: brass, label: "Door latch" }
    note: "Loop: runs back into the hook."
```

## Fact check

- A standard latch bolt has a bevelled (angled) face; the strike plate pushes on it as the door closes, retracting it against a spring until it springs into the strike hole.
- The flat face sits against the strike, so pushing the door from the other way can't retract it; only turning the handle (via the spindle and follower) can.
- Latches are fitted with the bevel facing the way the door closes, which is why they're reversible on many models.
