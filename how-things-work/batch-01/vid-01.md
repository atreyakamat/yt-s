---
id: vid-01
title: Your house key is hiding 5 passwords
series: cut-it-open
topic: Pin tumbler lock
status: ready-to-build
duration: 46
music: investigations
musicVolume: 0.12
accent: "#FFD60A"
hashtags: [howthingswork, engineering, lock, shorts]
---

# vid-01 · Your house key is hiding 5 passwords

## Hook

- **Chosen (0-3s):** "Your house key is carrying five secret passwords." Big text: 5 SECRET PASSWORDS.
- **Why it works:** everyone owns a key (instant relevance), "secret" opens a curiosity gap, and "5" is a specific number the brain wants explained.
- **Backup hooks** to A/B test on re-uploads:
    1. "Every lock in the world works on one tiny line."
    2. "This is why your neighbour's key can't open your door."
    3. "Locksmiths hate how simple this is."

## Story beats (one idea per beat)

1. Promise: your key holds 5 passwords.
2. Reveal: inside are 5 split pin stacks.
3. Problem: springs jam the cylinder, so it's locked.
4. Contrast: wrong key = wrong heights = nothing moves.
5. Payoff: right key lifts every split to the shear line.
6. Result: cylinder turns.
7. Scale: thousands of combinations.
8. Loop: line runs back into the hook.

## Visual style (applies to every scene)

- Canvas 1080x1920, 30 fps, background #0B0B0F with a soft radial glow (#1B1B24) behind the object.
- Everything is drawn in code as extruded vector shapes (pseudo-3D: front face + darker top and side faces offset 18px up-right). No photos needed.
- Colours: housing #3A3F4B, plug #5B6270, key pins #E0A526 (brass), driver pins #C9CED6 (steel), springs #8A93A3, shear line = accent #FFD60A, locked = #FF453A, unlocked = #32D74B.
- On-screen text: top third, centred, 96px, weight 900, white with accent on the key word. Captions: word-by-word, 64px, y about 1380, current word in accent.
- Keep the bottom 380px and right 140px clear: YouTube's Shorts buttons cover them.

## Scenes

The build reads this block. Times are in seconds.

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your house key is carrying five secret passwords."
    text: "5 SECRET PASSWORDS"
    highlight: "SECRET"
    visual: { kind: lock, state: closed, keyIn: 0.6, camera: punch-in }
    sfx: whoosh
    note: "Open on the key already 60% inserted so frame 1 is not static. Camera punches from 1.25x to 1x in 8 frames."
  - at: 3
    dur: 5
    vo: "Inside this lock are five tiny pin stacks, each split at a different height."
    text: "5 PIN STACKS"
    highlight: "5"
    visual: { kind: lock, state: cutaway, keyIn: 0 }
    sfx: slice
    note: "Housing front face fades to 15% opacity left to right (a 'slice'), revealing chambers. Pins pop in one by one, 4 frames apart."
  - at: 8
    dur: 7
    vo: "Springs push them down, so the top pins jam the cylinder. Locked."
    text: "LOCKED"
    highlight: "LOCKED"
    visual: { kind: lock, state: springs, keyIn: 0 }
    sfx: thunk
    note: "Springs compress and push. Driver pins straddle the shear line; the shear line flashes red on the word 'Locked'."
  - at: 15
    dur: 8
    vo: "Wrong key? The splits land in the wrong place. Nothing moves."
    text: "WRONG KEY"
    highlight: "WRONG"
    visual: { kind: lock, state: wrong-key }
    sfx: buzz
    note: "A grey key slides in over 1.2s. Splits stop at random heights. Plug shakes 3 times (±6px) and the line pulses red."
  - at: 23
    dur: 8
    vo: "Your key's bumps lift every pin to exactly the gap, a line called the shear line."
    text: "THE SHEAR LINE"
    highlight: "SHEAR LINE"
    visual: { kind: lock, state: right-key }
    sfx: click
    note: "Brass key slides in slowly. Each pin rises as the key tip passes it (one click each). Glowing yellow shear line draws left to right once all splits meet it."
  - at: 31
    dur: 7
    vo: "All five line up, the cylinder is free, and it turns."
    text: "UNLOCKED"
    highlight: "UNLOCKED"
    visual: { kind: lock, state: unlocked }
    sfx: unlock
    note: "Shear line turns green. Plug gets a rotating highlight sweep and a curved arrow, implying it turns into the screen."
  - at: 38
    dur: 5
    vo: "Five pins, several heights each. That's thousands of possible keys."
    text: "1000s OF KEYS"
    highlight: "1000s"
    visual: { kind: key-grid }
    sfx: pop
    note: "Keys with different cuts pop in a 4x6 grid, then a counter ticks up to 1000s."
  - at: 43
    dur: 3
    vo: "So next time you unlock your door, remember..."
    text: ""
    visual: { kind: lock, state: closed, keyIn: 0.6, camera: pull-to-start }
    note: "Ends on the same framing as frame 1 so the loop is seamless. No on-screen text."
```

## Audio

- **Voiceover:** about 115 words, brisk and warm, no long pauses. Record to the times above. Save as `assets/vo/vid-01.mp3`. Until it exists the build renders captions only.
- **Music:** `investigations` from [music/tracks.md](../../music/tracks.md), at 12% volume under the voice and 30% when no voice.
- **SFX:** `assets/sfx/<name>.mp3` (whoosh, slice, thunk, buzz, click, unlock, pop). Missing files are skipped.

## Fact check

- 5 pins: US residential pin tumbler locks typically use 5 pins (6 on some models), so "five" is the typical case. Source: https://lockwiki.com/index.php/Differs
- Thousands of keys: 5 pins with 6 to 10 depths gives roughly 6,000 to 100,000 theoretical codes, fewer once manufacturer rules apply. OK. Source: https://www.locksmithledger.com/locks/article/11319927/our-commodity-market-residential-locks

## Upload checklist

- Title: Your house key is hiding 5 passwords 🔑
- Description: first line repeats the hook, then the music credit from tracks.md.
- Pinned comment: "What should we cut open next?"
- Fact check: pin tumbler locks typically use 5-6 pin stacks with several cut depths each, giving thousands of combinations. Done.
