---
id: vid-02
title: A zipper is just one tiny wedge
series: cut-it-open
topic: Zipper
status: ready-to-build
duration: 40
music: investigations
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-02 · A zipper is just one tiny wedge

## Hook

- **Chosen (0-2s):** "Your zipper has no moving parts that do the work."
- **Backup hooks:**
    1. "Your zipper is just one tiny wedge."
    2. "Nobody tells you what the letters YKK mean."
    3. "Pull a zipper sideways: it won't open. Here's why."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "Your zipper has no moving parts that do the work."
    text: "NO MOVING PARTS?"
    visual: { kind: zipper, state: race }
    note: "Macro shot: zipper slider racing up a jacket"
  - at: 2
    dur: 6
    vo: "The slider is just a block of metal with a Y-shaped tunnel inside."
    text: "Y-SHAPED TUNNEL"
    visual: { kind: zipper, state: tunnel }
    note: "Slider cut in half from above, Y-shaped channel glows"
  - at: 8
    dur: 8
    vo: "Every tooth has a bump on top and a hollow underneath."
    text: "BUMP + HOLLOW"
    visual: { kind: zipper, state: teeth }
    note: "Macro of teeth: each has a bump on top, a hollow underneath"
  - at: 16
    dur: 9
    vo: "The tunnel squeezes both rows in at an angle, so each bump drops into the next tooth's hollow."
    text: "INTERLOCK"
    visual: { kind: zipper, state: interlock }
    note: "Slow-mo: two rows enter the Y at an angle, teeth slot into each other"
  - at: 25
    dur: 6
    vo: "Pull sideways and they hold. They only come apart at that same angle."
    text: "LOCKED SIDEWAYS"
    visual: { kind: zipper, state: sideways }
    note: "Pull sideways on closed zipper, nothing moves"
  - at: 31
    dur: 5
    vo: "Going down, a small wedge inside pries them back apart."
    text: "THE WEDGE"
    visual: { kind: zipper, state: wedge }
    note: "Slider goes down; a tiny wedge splits the rows"
  - at: 36
    dur: 4
    vo: "And those three letters? The maker's name. Now look at your zipper again..."
    text: "Y K K"
    visual: { kind: zipper, state: ykk }
    note: "Zoom to slider's letters \"YKK\", cut back to 0s shot"
```

## Notes

**Loop:** "look at your zipper again..." runs into "Your zipper has no moving parts that do the work."
**Fact check:** YKK = Yoshida Kogyo Kabushikikaisha (the company name).

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
