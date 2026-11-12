---
id: vid-91
title: "Your phone takes the photo before you tap the button ⚡"
series: the-1-second-machine
topic: "Zero shutter lag"
status: ready-to-build
duration: 37
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, camera, phone, fast, shorts]
description: "Your camera is already recording before you press. When you tap, it reaches back and grabs the frame from that instant."
pinned: "What else happens in under a second?"
---

# vid-91 · Your phone takes the photo before you tap the button

## Hook

- **Chosen (0-3s):** "Your phone takes the photo before you tap." Big text: BEFORE YOU TAP
- **Backup hooks:**
    1. "Your camera is recording before you press anything."
    2. "The photo you took was already taken."
    3. "Your phone camera can see a tiny bit into the past."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your phone takes the photo before you tap."
    text: "BEFORE YOU TAP"
    highlight: "BEFORE"
    visual: { kind: hero, icon: lens, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "The moment the camera app opens, the sensor starts grabbing frames, about 30 every second."
    text: "ALWAYS RECORDING"
    highlight: "ALWAYS"
    visual: { kind: counter, to: 30, label: "frames every second", icon: lens }
    sfx: click
  - at: 9
    dur: 6
    vo: "Those frames go into a small rolling buffer. Old ones get thrown away to make room."
    text: "A ROLLING BUFFER"
    highlight: "BUFFER"
    visual: { kind: cycle, icon: chip, steps: ["Capture frame", "Store in buffer", "Drop the oldest", "Repeat"] }
  - at: 15
    dur: 6
    vo: "When you tap, the phone picks the frame from that instant, often merging several of them."
    text: "IT PICKS THE MOMENT"
    highlight: "MOMENT"
    visual: { kind: flow, steps: [{ label: "You tap", icon: person }, { label: "Find matching frame", icon: clock, color: accent }, { label: "Merge and save", icon: chip }] }
    sfx: pop
  - at: 21
    dur: 6
    vo: "Old cameras had to start the whole process after you pressed, so you missed the smile."
    text: "NO MORE LAG"
    highlight: "LAG"
    visual: { kind: compare, mode: before-after, left: { label: "Press, then capture", icon: clock, color: grey, tag: "missed it" }, right: { label: "Already captured", icon: lens, color: accent, tag: "got it" } }
    sfx: thunk
  - at: 27
    dur: 6
    vo: "That's why it's called zero shutter lag. Your finger is slower than the camera."
    text: "ZERO SHUTTER LAG"
    highlight: "ZERO"
    visual: { kind: gauge, value: 5, low: "No lag", high: "Big lag", label: "Near zero delay" }
  - at: 33
    dur: 4
    vo: "So when you think you just shot it..."
    text: ""
    visual: { kind: hero, icon: lens, motion: float, color: accent, label: "Already done" }
    note: "Last line runs back into the hook: Your phone takes the photo before you tap."
```

## Fact check

- Zero shutter lag (ZSL) is a standard phone-camera technique: the camera preview continuously streams frames into a ring buffer, and the capture uses a frame from the moment of the button press.
- Typical preview streams run around 30 frames per second (some higher); 'about 30' is used.
- Many phones merge several buffered frames (multi-frame processing) for the final photo.
