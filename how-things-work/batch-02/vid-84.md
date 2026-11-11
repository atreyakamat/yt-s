---
id: vid-84
title: "Your electric guitar has no microphone, just magnets 🎸"
series: cut-it-open
topic: "Electric guitar pickup"
status: ready-to-build
duration: 35
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, guitar, music, magnets, shorts]
description: "An electric guitar pickup is magnets wrapped in thin copper wire. Vibrating steel strings disturb the field and make a tiny current."
pinned: "What should we cut open next?"
---

# vid-84 · Your electric guitar has no microphone, just magnets

## Hook

- **Chosen (0-3s):** "Your electric guitar has no microphone inside." Big text: NO MICROPHONE
- **Backup hooks:**
    1. "Nylon strings on an electric guitar make no sound. Here's why."
    2. "Your guitar turns string wobble into electricity."
    3. "Those little dots under the strings are magnets."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your electric guitar has no microphone inside."
    text: "NO MICROPHONE"
    highlight: "NO"
    visual: { kind: hero, icon: speaker, motion: pulse, color: red }
    sfx: whoosh
  - at: 3
    dur: 5.5
    vo: "Under the strings sits a pickup: magnets wrapped in thousands of turns of hair-thin copper wire."
    text: "THE PICKUP"
    highlight: "PICKUP"
    visual: { kind: callout, icon: magnet, parts: ["Six magnet poles", "Hair-thin copper wire", "Thousands of turns"] }
    sfx: slice
  - at: 8.5
    dur: 4
    vo: "The magnets make a magnetic field right where the steel strings sit."
    text: "A MAGNETIC FIELD"
    highlight: "MAGNETIC"
    visual: { kind: layers, items: [{ label: "Steel strings", color: steel }, { label: "Magnetic field", color: purple }, { label: "Magnet poles", color: red }, { label: "Copper coil", color: brass }] }
  - at: 12.5
    dur: 5
    vo: "Pluck a string and it wobbles through that field, hundreds of times a second."
    text: "THE STRING WOBBLES"
    highlight: "WOBBLES"
    visual: { kind: wave, waves: [{ label: "Low string", freq: 3 }, { label: "High string", freq: 8, color: accent }] }
  - at: 17.5
    dur: 4
    vo: "A changing magnetic field pushes a tiny electric current through the coil."
    text: "MOTION BECOMES CURRENT"
    highlight: "CURRENT"
    visual: { kind: flow, steps: [{ label: "String vibrates", icon: wave }, { label: "Field changes", icon: magnet }, { label: "Current in the coil", icon: bolt }] }
    sfx: buzz
  - at: 21.5
    dur: 5
    vo: "That signal is far too weak to hear, so the amp boosts it into sound."
    text: "THE AMP BOOSTS IT"
    highlight: "AMP"
    visual: { kind: compare, mode: before-after, left: { label: "Pickup signal", icon: bolt, tag: "Tiny" }, right: { label: "After the amp", icon: speaker, tag: "Loud" } }
  - at: 26.5
    dur: 5
    vo: "That's why nylon strings stay silent. They aren't magnetic, so the pickup feels nothing."
    text: "NYLON STAYS SILENT"
    highlight: "SILENT"
    visual: { kind: callout, icon: magnet, parts: ["Steel string: works", "Nylon string: silent"] }
  - at: 31.5
    dur: 3.5
    vo: "It listens with magnets, not air. Because your electric guitar..."
    text: ""
    visual: { kind: hero, icon: magnet, motion: float, color: red, label: "Magnets, not mics" }
    note: "Last line runs back into the hook."
```

## Fact check

- Magnetic pickups are permanent magnets (or pole pieces on a magnet) wound with thousands of turns of very fine copper wire.
- A vibrating steel string changes the magnetic flux through the coil, inducing a small voltage (Faraday's law of induction).
- Guitar strings vibrate from about 80 times a second (low E) to over 300 (high E), hence 'hundreds of times a second'.
- The pickup output is small and needs an amplifier to drive a speaker.
- Nylon strings are not ferromagnetic, so a magnetic pickup can't sense them; nylon-string guitars use piezo pickups or microphones instead.
