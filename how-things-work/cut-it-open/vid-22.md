---
id: vid-22
title: "Your tape measure has a wind-up spring hiding inside"
series: cut-it-open
topic: "Tape measure"
status: ready-to-build
duration: 35
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, tools, diy, tapemeasure, shorts]
description: "Pull the blade out and you wind a flat steel spring. Let go of the brake and that spring whips it home."
pinned: "What should we cut open next?"
---

# vid-22 · Your tape measure has a wind-up spring hiding inside

## Hook

- **Chosen (0-3s):** "Your tape measure hides a coiled steel spring." Big text: A HIDDEN SPRING
- **Backup hooks:**
    1. "Pulling a tape measure winds a spring."
    2. "Why does a tape measure snap back by itself?"
    3. "This curved blade is why your tape doesn't flop."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your tape measure hides a coiled steel spring."
    text: "A HIDDEN SPRING"
    highlight: "SPRING"
    visual: { kind: hero, icon: tool, motion: pulse, color: accent, label: "Tape measure" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Crack the case open and there's a long flat spring wound around the centre."
    text: "CRACK THE CASE"
    highlight: "CASE"
    visual: { kind: layers, items: [{ label: "Plastic case", color: grey }, { label: "Steel blade on a spool", color: accent }, { label: "Flat coiled spring", color: steel }, { label: "Centre post", color: dark }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Pulling the blade out winds that spring tighter, storing energy like a wind-up toy."
    text: "PULL = WIND UP"
    highlight: "WIND UP"
    visual: { kind: flow, steps: [{ label: "Blade pulled out", icon: arrow }, { label: "Spool turns", icon: gear }, { label: "Spring winds tighter", icon: spring }] }
    sfx: click
  - at: 14
    dur: 5
    vo: "A lock button pushes a brake onto the blade, so it stays put."
    text: "THE BRAKE"
    highlight: "BRAKE"
    visual: { kind: callout, icon: lock, parts: ["Lock button", "Brake pad", "Steel blade"] }
    sfx: click
  - at: 19
    dur: 6
    vo: "The blade is curved side to side. That curve keeps it stiff when it sticks out."
    text: "CURVED BLADE"
    highlight: "CURVED"
    visual: { kind: compare, mode: versus, left: { label: "Flat blade", icon: arrow, tag: "Flops" }, right: { label: "Curved blade", icon: tool, tag: "Stays stiff" } }
  - at: 25
    dur: 5
    vo: "Release the brake and the spring unwinds, whipping the blade back in."
    text: "SNAP BACK"
    highlight: "SNAP"
    visual: { kind: gauge, value: 90, low: "Slack", high: "Wound tight", label: "Spring tension" }
    sfx: whoosh
  - at: 30
    dur: 5
    vo: "So every time it zips home, remember..."
    text: ""
    visual: { kind: hero, icon: spring, motion: spin, color: accent, label: "Wound and ready" }
    note: "Last line runs back into the hook: 'Your tape measure hides a coiled steel spring.'"
```

## Fact check

- Retracting tape measures use a flat coiled steel spring attached to the blade spool; pulling the blade out winds it (standard design).
- The lock button presses a brake or pad against the blade to hold it.
- The blade has a concave (curved) cross-section, which makes it far stiffer so it can stick out unsupported.
- Releasing the lock lets the stored spring energy rewind the blade.
