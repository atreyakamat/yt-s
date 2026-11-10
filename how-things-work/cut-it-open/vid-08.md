---
id: vid-08
title: There's a tiny machine in your clicky pen
series: cut-it-open
topic: Retractable pen click
status: ready-to-build
duration: 41
music: investigations
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-08 · There's a tiny machine in your clicky pen

## Hook

- **Chosen (0-3s):** "This click is a tiny rotating machine."
- **Backup hooks:**
    1. "There's a tiny machine in your clicky pen."
    2. "Click. What actually happens inside?"
    3. "Your pen does this every click and you never noticed."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: click
    vo: "This click is a tiny rotating machine."
    text: "CLICK"
    visual: { kind: click-pen, state: click }
    note: "Thumb clicking a pen, sound loud and crisp"
  - at: 3
    dur: 6
    sfx: slice
    vo: "Inside: a spring, the ink, a plunger, and a little toothed cylinder."
    text: "4 PARTS"
    visual: { kind: click-pen, state: parts }
    note: "Pen cut open: spring, ink tube, plunger, rotating cam"
  - at: 9
    dur: 9
    sfx: click
    vo: "Press the button, and angled teeth push the cylinder down and twist it a little."
    text: "PUSH + TWIST"
    visual: { kind: click-pen, state: push-twist }
    note: "Press: plunger's teeth push cam down; angled teeth make it turn a few degrees"
  - at: 18
    dur: 9
    sfx: thunk
    vo: "Let go, and its ridges land on a ledge. The tip stays out."
    text: "LOCKED OUT"
    visual: { kind: click-pen, state: locked }
    note: "Release: cam ridges land on a high ledge, tip stays out"
  - at: 27
    dur: 8
    sfx: click
    vo: "Press again, it twists further, drops into a deep slot, and the spring pulls the tip back in."
    text: "RELEASED"
    visual: { kind: click-pen, state: released }
    note: "Press again: twist continues, ridges fall into a deep slot, spring pushes tip back"
  - at: 35
    dur: 6
    sfx: click
    vo: "Every click turns it one step around. Click..."
    text: ""
    visual: { kind: click-pen, state: spin }
    note: "Rapid clicks, cam spinning round and round"
```

## Notes

**Loop:** "Click..." runs into the opening click and "This click is a tiny rotating machine."

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
