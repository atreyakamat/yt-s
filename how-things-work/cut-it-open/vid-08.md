---
id: vid-08
title: There's a tiny machine in your clicky pen
series: cut-it-open
topic: Retractable pen click
status: script-ready
duration: 40
music: investigations
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-08 · There's a tiny machine in your clicky pen

> **Status: script ready, visuals not built yet.** The build renders it with a placeholder card where the `retractable-pen` visual will go. Next step: build that visual the way `Lock.tsx` was built for vid-01, then set `status: ready-to-build`.

## Hook

- **Chosen (0-2s):** "This click is a tiny rotating machine."
- **Backup hooks:**
    1. "There's a tiny machine in your clicky pen."
    2. "Click. What actually happens inside?"
    3. "Your pen does this every click and you never noticed."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "This click is a tiny rotating machine."
    text: "CLICK"
    visual: { kind: retractable-pen }
    note: "Thumb clicking a pen, sound loud and crisp"
  - at: 2
    dur: 6
    vo: "Inside: a spring, the ink, a plunger, and a little toothed cylinder."
    text: "4 PARTS"
    visual: { kind: retractable-pen }
    note: "Pen cut open: spring, ink tube, plunger, rotating cam"
  - at: 8
    dur: 9
    vo: "Press the button, and angled teeth push the cylinder down and twist it a little."
    text: "PUSH + TWIST"
    visual: { kind: retractable-pen }
    note: "Press: plunger's teeth push cam down; angled teeth make it turn a few degrees"
  - at: 17
    dur: 9
    vo: "Let go, and its ridges land on a ledge. The tip stays out."
    text: "LOCKED OUT"
    visual: { kind: retractable-pen }
    note: "Release: cam ridges land on a high ledge, tip stays out"
  - at: 26
    dur: 8
    vo: "Press again, it twists further, drops into a deep slot, and the spring pulls the tip back in."
    text: "RELEASED"
    visual: { kind: retractable-pen }
    note: "Press again: twist continues, ridges fall into a deep slot, spring pushes tip back"
  - at: 34
    dur: 6
    vo: "Every click turns it one step around. Click..."
    text: ""
    visual: { kind: retractable-pen }
    note: "Rapid clicks, cam spinning round and round"
```

## Notes

**Loop:** "Click..." runs into the opening click and "This click is a tiny rotating machine."

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
