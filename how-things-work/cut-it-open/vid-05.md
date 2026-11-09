---
id: vid-05
title: Your microwave door is a cage
series: cut-it-open
topic: Microwave
status: ready-to-build
duration: 45
music: cipher
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-05 · Your microwave door is a cage

## Hook

- **Chosen (0-2s):** "You're staring through a cage every time you heat food."
- **Backup hooks:**
    1. "Why doesn't the microwave cook your face?"
    2. "Those dots on your microwave door are a shield."
    3. "Microwaves don't heat food from the inside. Here's what they do."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "You're staring through a cage every time you heat food."
    text: "IT'S A CAGE"
    visual: { kind: microwave, state: mesh }
    note: "Macro on the dotted mesh of a microwave door"
  - at: 2
    dur: 7
    vo: "This part, the magnetron, fires invisible waves into the box."
    text: "MAGNETRON"
    visual: { kind: microwave, state: magnetron }
    note: "Microwave cut open, magnetron in the corner glows"
  - at: 9
    dur: 9
    vo: "The waves flip direction billions of times a second. Water molecules try to follow and spin."
    text: "2.45 BILLION / SEC"
    visual: { kind: microwave, state: molecules }
    note: "Animated water molecules flipping back and forth"
  - at: 18
    dur: 7
    vo: "All that spinning rubs them together, and that friction is heat."
    text: "FRICTION = HEAT"
    visual: { kind: microwave, state: heat }
    note: "Molecules rubbing, heat glow spreading"
  - at: 25
    dur: 10
    vo: "The waves are about 12 centimeters long. The holes in the door are tiny. Too small for the waves to pass."
    text: "WAVE > HOLE"
    visual: { kind: microwave, state: wave-vs-hole }
    note: "Wave about 12 cm long bumps against mesh holes about 1 mm wide"
  - at: 35
    dur: 5
    vo: "But light waves are far smaller, so you can still see in."
    text: "LIGHT GETS OUT"
    visual: { kind: microwave, state: light }
    note: "Light rays pass through holes easily"
  - at: 40
    dur: 5
    vo: "So yes, every time you watch your food spin..."
    text: ""
    visual: { kind: microwave, state: mesh }
    note: "Back to the macro of the mesh"
```

## Notes

**Loop:** "watch your food spin..." runs into "You're staring through a cage every time you heat food."
**Fact check:** 2.45 GHz, wavelength ~12.2 cm. "Friction" is a simplification of dielectric heating; acceptable for Shorts.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
