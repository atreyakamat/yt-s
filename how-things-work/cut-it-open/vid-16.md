---
id: vid-16
title: "Your phone buzzes because of a tiny lopsided weight 📳"
series: cut-it-open
topic: "Phone vibration motor"
status: ready-to-build
duration: 36
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, phone, vibration, engineering, shorts]
description: "Your phone's buzz comes from a tiny motor shaking a weight. Here is what's inside and why newer phones feel crisper."
pinned: "What should we cut open next?"
---

# vid-16 · Your phone buzzes because of a tiny lopsided weight

## Hook

- **Chosen (0-3s):** "Your phone buzzes by shaking a tiny weight." Big text: A TINY SHAKING WEIGHT
- **Backup hooks:**
    1. "There's a tiny spinning weight inside your phone."
    2. "Your phone shakes itself to get your attention."
    3. "This part makes your phone dance across the table."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your phone buzzes by shaking a tiny weight."
    text: "A TINY SHAKING WEIGHT"
    highlight: "SHAKING"
    visual: { kind: hero, icon: phone, motion: shake, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Older phones use a tiny motor with a lopsided weight on its shaft."
    text: "LOPSIDED WEIGHT"
    highlight: "LOPSIDED"
    visual: { kind: callout, icon: gear, color: steel, parts: ["Tiny motor", "Off-centre weight", "Spinning shaft"] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "When it spins, the weight pulls the whole phone back and forth. That wobble is the buzz."
    text: "SPIN = WOBBLE"
    highlight: "WOBBLE"
    visual: { kind: cycle, icon: gear, steps: ["Weight swings up", "Phone pulled up", "Weight swings down", "Phone pulled down"] }
    sfx: buzz
  - at: 14
    dur: 6
    vo: "Many newer phones use a different part: a magnet on a spring, pushed by a coil."
    text: "MAGNET ON A SPRING"
    highlight: "SPRING"
    visual: { kind: layers, items: [{ label: "Coil", color: accent }, { label: "Magnet weight", color: steel }, { label: "Spring", color: grey }] }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "Current flips direction, so the magnet slides left, right, left, at exactly the spring's favourite speed."
    text: "BACK AND FORTH"
    highlight: "BACK"
    visual: { kind: wave, waves: [{ label: "Coil current flips", freq: 7, color: accent }] }
  - at: 26
    dur: 6
    vo: "That's why it can start and stop in an instant. Sharp taps instead of a mushy rumble."
    text: "TAP, NOT RUMBLE"
    highlight: "TAP"
    visual: { kind: compare, mode: versus, left: { label: "Spinning motor", icon: gear, color: grey, tag: "slow rumble" }, right: { label: "Magnet + spring", icon: magnet, color: accent, tag: "sharp tap" } }
    sfx: click
  - at: 32
    dur: 4
    vo: "So next time it rattles your desk, remember..."
    text: ""
    visual: { kind: hero, icon: phone, motion: float, color: accent, label: "Buzz buzz" }
    note: "Last line runs back into the hook: Your phone buzzes by shaking a tiny weight."
```

## Fact check

- Eccentric rotating mass (ERM) vibration motors are small DC motors with an off-centre weight; spinning an unbalanced mass shakes the device. Widely used in older phones and pagers.
- Linear resonant actuators (LRA) move a magnetic mass on a spring with a voice coil driven by an alternating signal at the spring-mass resonant frequency; many modern phones use them.
- LRAs start and stop faster than ERMs, which is why they can make crisp tap-like haptics.
