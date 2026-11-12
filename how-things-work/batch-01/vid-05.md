---
id: vid-05
title: Your microwave door is a cage
series: cut-it-open
topic: Microwave
status: ready-to-build
duration: 46
music: cipher
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-05 · Your microwave door is a cage

## Hook

- **Chosen (0-3s):** "Your microwave door is a cage."
- **Backup hooks:**
    1. "Why doesn't the microwave cook your face?"
    2. "Those dots on your microwave door are a shield."
    3. "Microwaves don't heat food from the inside. Here's what they do."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: whoosh
    vo: "Your microwave door is a cage."
    text: "IT'S A CAGE"
    visual: { kind: microwave, state: mesh }
    note: "Macro on the dotted mesh of a microwave door"
  - at: 3
    dur: 7
    sfx: slice
    vo: "This part, the magnetron, fires invisible waves into the box."
    text: "MAGNETRON"
    visual: { kind: microwave, state: magnetron }
    note: "Microwave cut open, magnetron in the corner glows"
  - at: 10
    dur: 9
    sfx: pop
    vo: "The waves flip direction billions of times a second. Water molecules try to follow and spin."
    text: "2.45 BILLION / SEC"
    visual: { kind: microwave, state: molecules }
    note: "Animated water molecules flipping back and forth"
  - at: 19
    dur: 7
    sfx: pop
    vo: "All that spinning rubs them together, and that friction is heat."
    text: "FRICTION = HEAT"
    visual: { kind: microwave, state: heat }
    note: "Molecules rubbing, heat glow spreading"
  - at: 26
    dur: 10
    sfx: thunk
    vo: "The waves are about 12 centimeters long. The holes in the door are tiny. Too small for the waves to pass."
    text: "WAVE > HOLE"
    visual: { kind: microwave, state: wave-vs-hole }
    note: "Wave about 12 cm long bumps against mesh holes about 1 mm wide"
  - at: 36
    dur: 5
    sfx: unlock
    vo: "But light waves are far smaller, so you can still see in."
    text: "LIGHT GETS OUT"
    visual: { kind: microwave, state: light }
    note: "Light rays pass through holes easily"
  - at: 41
    dur: 5
    sfx: whoosh
    vo: "So yes, every time you watch your food spin..."
    text: ""
    visual: { kind: microwave, state: mesh }
    note: "Back to the macro of the mesh"
```

## Notes

**Loop:** "watch your food spin..." runs into "Your microwave door is a cage."
**Fact check:** 2.45 GHz, wavelength ~12.2 cm. "Friction" is a simplification of dielectric heating; acceptable for Shorts.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).

## Fact check

- Microwave ovens use 2.45 GHz (about 2.45 billion cycles a second), wavelength about 12.2 cm. OK. Source: https://hyperphysics.gsu.edu/hbase/waves/mwoven.html
- Door mesh holes are far smaller than the wavelength, so waves cannot pass; light does. OK. Source: https://www.slashgear.com/1906854/microwaves-mesh-door-use-explained/
