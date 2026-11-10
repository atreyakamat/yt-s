---
id: vid-76
title: "Your phone sprays thousands of invisible dots on your face 👀"
series: cut-it-open
topic: "Face unlock dot projector"
status: ready-to-build
duration: 38
music: cipher
accent: "#0A84FF"
hashtags: [howthingswork, faceunlock, phone, tech, shorts]
description: "Some phones unlock by projecting a grid of invisible infrared dots onto your face and reading how they bend."
pinned: "What should we cut open next?"
---

# vid-76 · Your phone sprays thousands of invisible dots on your face

## Hook

- **Chosen (0-3s):** "Your phone sprays thousands of invisible dots on your face." Big text: INVISIBLE DOTS
- **Backup hooks:**
    1. "Your phone fires invisible dots at your face."
    2. "A photo can't fool this kind of face unlock."
    3. "Your face is a 3D map to your phone."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your phone sprays thousands of invisible dots on your face."
    text: "INVISIBLE DOTS"
    highlight: "INVISIBLE"
    visual: { kind: hero, icon: eye, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Some face unlock systems hide a tiny infrared projector next to the selfie camera."
    text: "HIDDEN PROJECTOR"
    highlight: "PROJECTOR"
    visual: { kind: callout, icon: phone, color: steel, parts: ["Dot projector", "Infrared camera", "Flood light", "Selfie camera"] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "It throws about thirty thousand dots of infrared light, too red for your eyes to see."
    text: "30,000 DOTS"
    highlight: "30,000"
    visual: { kind: counter, to: 30000, label: "infrared dots", icon: eye }
    sfx: pop
  - at: 15
    dur: 6
    vo: "On a flat wall the grid stays even. On your nose and cheeks, the dots bend and bunch up."
    text: "DOTS BEND ON YOUR FACE"
    highlight: "BEND"
    visual: { kind: compare, mode: versus, left: { label: "Flat wall", icon: screen, color: grey, tag: "even grid" }, right: { label: "Your face", icon: person, color: accent, tag: "warped grid" } }
  - at: 21
    dur: 7
    vo: "An infrared camera reads that warped pattern and builds a 3D depth map of your face."
    text: "A 3D MAP"
    highlight: "3D"
    visual: { kind: flow, steps: [{ label: "Dots projected", icon: eye, color: red }, { label: "IR camera reads them", icon: lens }, { label: "Depth map built", icon: chip, color: accent }] }
    sfx: click
  - at: 28
    dur: 6
    vo: "A flat photo has no depth, so it fails. And infrared works in the dark too."
    text: "PHOTOS FAIL"
    highlight: "FAIL"
    visual: { kind: layers, items: [{ label: "Real face: depth", color: green }, { label: "Photo: flat", color: red }, { label: "Works in darkness", color: purple }] }
    sfx: buzz
  - at: 34
    dur: 4
    vo: "So every time you glance to unlock..."
    text: ""
    visual: { kind: hero, icon: eye, motion: float, color: accent, label: "Scanned" }
    note: "Last line runs back into the hook: Your phone sprays thousands of invisible dots on your face."
```

## Fact check

- Structured-light face unlock (used on some phones) uses a dot projector, an infrared camera and a flood illuminator.
- The best-known system projects over 30,000 infrared dots, per its maker's published description; so 'about thirty thousand'.
- Near-infrared light (around 940 nm) is invisible to human eyes.
- The distortion of a known dot pattern reveals surface depth (structured light), producing a 3D map that a flat photo cannot match; the IR flood light lets it work in darkness.
