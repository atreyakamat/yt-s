---
id: vid-68
title: "The tip of your shoelace has a name and a job 👟"
series: why-is-it-shaped-like-that
topic: "Shoelace aglet"
status: ready-to-build
duration: 36
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [shoelaces, design, didyouknow, shoes, shorts]
description: "The plastic tip on a shoelace is called an aglet. It stops the lace fraying and works like a needle through the eyelets."
pinned: "What shape should we explain next?"
---

# vid-68 · The tip of your shoelace has a name and a job

## Hook

- **Chosen (0-3s):** "The plastic tip on your shoelace has a name." Big text: IT HAS A NAME
- **Backup hooks:**
    1. "You've never known what this shoelace part is called."
    2. "This tiny tube saves every shoelace you own."
    3. "Shoelace tips used to be made of gold."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "The plastic tip on your shoelace has a name."
    text: "IT HAS A NAME"
    highlight: "NAME"
    visual: { kind: hero, icon: pill, label: "Aglet", color: accent, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "It's called an aglet, from an old French word meaning little needle."
    text: "AN AGLET"
    highlight: "AGLET"
    visual: { kind: callout, icon: pill, parts: ["Plastic or metal tip", "Wrapped round the lace", "Stiff and narrow"] }
  - at: 8
    dur: 6
    vo: "A lace is just a bundle of woven fibres. Without a tip, the end frays apart."
    text: "NO TIP, NO LACE"
    highlight: "NO TIP"
    visual: { kind: compare, mode: before-after, left: { label: "No aglet", icon: wave, color: red, tag: "FRAYED" }, right: { label: "Aglet", icon: pill, color: accent, tag: "NEAT" } }
    sfx: slice
  - at: 14
    dur: 6
    vo: "And its shape is the point. A thin, stiff tube works like a needle through the eyelets."
    text: "A BUILT-IN NEEDLE"
    highlight: "NEEDLE"
    visual: { kind: flow, steps: [{ label: "Stiff narrow tip", icon: pill }, { label: "Finds the eyelet", icon: eye }, { label: "Pulls the lace through", icon: arrow, color: accent }] }
  - at: 20
    dur: 5
    vo: "Most are a plastic film wrapped around the lace end and sealed with heat."
    text: "HEAT-SEALED"
    highlight: "HEAT"
    visual: { kind: layers, items: [{ label: "Plastic film", color: accent }, { label: "Sealed with heat", color: orange }, { label: "Lace fibres", color: grey }] }
  - at: 25
    dur: 6
    vo: "Long before plastic, aglets were metal, and on rich people's clothes they could be gold."
    text: "ONCE MADE OF GOLD"
    highlight: "GOLD"
    visual: { kind: timeline, events: [{ year: "Long ago", label: "Metal tips on laces and ties" }, { year: "Tudor times", label: "Gold aglets worn as jewellery" }, { year: "Today", label: "Plastic tips" }] }
    sfx: thunk
  - at: 31
    dur: 5
    vo: "Lose one and the lace is ruined. So remember..."
    text: ""
    visual: { kind: hero, icon: pill, label: "Aglet", color: accent, motion: float }
    note: "Last line runs back into the hook: The plastic tip on your shoelace has a name."
```

## Fact check

- 'Aglet' comes from Old French 'aguillette', a diminutive of 'aguille' (needle).
- Without a tip, braided lace fibres unravel: true.
- Modern aglets are usually plastic film wrapped and heat-sealed (or a metal crimp): true.
- In Tudor-era England, decorative metal aglets (aiglets), including gold ones, were worn on clothing ties: well documented in portraits and inventories.
