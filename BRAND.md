# Cutaway: brand strategy

> **Everyday things, cut open.**
> Faceless 25-45 second Shorts that slice open the objects people touch every day and show the one hidden trick
> that makes them work.

This is the brand book: who we are, how we look and sound, how the channel is set up, how we publish, how we grow,
and what we never do. [STRATEGY.md](STRATEGY.md) covers the content mechanics (hooks, retention, cadence), and
[GUIDE.md](GUIDE.md) covers running the pipeline. Brand files are in [`brand/`](brand/).

---

## 1. Brand core

| | |
| --- | --- |
| **Name** | Cutaway |
| **Tagline** | Everyday things, cut open. |
| **Promise** | In under a minute, you'll see inside something you use every day and never look at the same way again. |
| **Mission** | Make people curious about the engineering hiding in plain sight. |
| **Category** | Education / Science & Technology (Shorts-first) |
| **One-line positioning** | For curious people scrolling Shorts, Cutaway is the channel that shows how everyday objects actually work, in one clear visual reveal, with no fluff and no faces. |

**Why it wins:** everyone owns the objects (huge audience), "I use this daily and never knew" is a strong curiosity
gap, every video ends on a visual reveal, and the same look every time makes us recognisable in the first frame.

### Who we're for

| Persona | Who | What they want from us |
| --- | --- | --- |
| **The curious scroller** (core) | 16-34, watches Shorts on the commute/bed, likes "satisfying" and "how it works" content | A quick "huh, cool" they can share |
| **The tinkerer** | DIY, cars, gadgets, engineering students | The real mechanism, correct terms, no dumbing down |
| **The parent / teacher** | Shows clips to kids or a class | Accurate, clean, safe, explains clearly |

We write for the curious scroller, stay accurate enough for the tinkerer, and stay clean enough for the teacher.

---

## 2. Personality and voice

**Cutaway is:** curious, clear, a little playful, quietly confident, precise.
**Cutaway is never:** clickbait-y, smug, shouty, preachy, vague, or scary.

| Do | Don't |
| --- | --- |
| "Your key is hiding 5 passwords." (specific, about *you*) | "You WON'T BELIEVE what's inside!!!" |
| Short sentences. One idea per line. | Long setups, "so basically", "in this video" |
| Plain words a 12-year-old gets, then the real term once ("the shear line") | Jargon without explaining it |
| Numbers you can source, rounded honestly ("about 30 ms") | Made-up precision ("exactly 31.7 ms") |
| End on the reveal, loop back into the hook | Outros, "subscribe", "like and share" in the video |
| Admit nuance in one line ("on most models") | Overclaiming ("every toaster ever") |

**Title formulas** (pick one per reel, under 50 characters if possible):

1. **Your + object + secret:** "Your toaster has no timer chip"
2. **Specific number:** "Your house key is hiding 5 passwords"
3. **Mild contradiction:** "The hole in a pen cap isn't for the ink"
4. **Why-shape:** "Why manhole covers are always round"
5. **Before-it-existed:** "Before fridges, ice crossed oceans"

At most one emoji, at the end. Every title has the object's name in it (that's what people search).

---

## 3. Content architecture

Five permanent series plus one seasonal set. Each series is a playlist and has its own hook pattern and music.

| Series | Promise | Hook pattern | Music | Share of uploads |
| --- | --- | --- | --- | --- |
| **Cut It Open** (flagship) | The hidden mechanism inside | "This is what's inside your ___." | Investigations / Cipher | about 50% |
| **You've Been Using It Wrong** | The feature everyone ignores | "There's a reason this ___ has a ___." | Sneaky Snitch | about 12% |
| **Why Is It Shaped Like That?** | Shape = engineering | "This is why ___ are never ___." | Pixel Peeker Polka | about 12% |
| **The 1-Second Machine** | Things faster than a blink | "This happens faster than you can blink." | Hyperfun | about 12% |
| **Before It Existed** | Life before the invention | "Before ___, people ___." | Wallpaper | about 12% |
| **New Year** (seasonal, Dec-Jan) | Science behind the season | Varies | Varies | Only in season |

After about 8 posts per series, compare them on the *Series summary* tab of `publishing/Cutaway-reels.xlsx`. Shift the
mix toward the best two and keep the flagship.

---

## 4. Visual identity

### Logo

- **Emblem:** a solid object sliced on the diagonal. The grey outside, the coloured layers revealed inside, and the
  yellow **cut line**. It is the whole channel in one picture. Files: `brand/avatar.png`, `brand/watermark.png`.
- **Wordmark:** `CUT/AWAY` in Inter Black with the slash in Cut Yellow. Banner: `brand/banner.png`.
- Keep the emblem on dark backgrounds. Don't recolour it, rotate it, add effects, or put it on photos.
- Regenerate any time: `cd video` then `npx remotion still src/index.ts brand-avatar ../brand/avatar.png`
  (also `brand-banner`, `brand-watermark`). The source is `video/src/brand/Brand.tsx`.

### Colour

| Name | Hex | Use |
| --- | --- | --- |
| **Cut Yellow** | `#FFD60A` | The brand colour: cut line, key word highlight, captions' current word |
| Night | `#0B0B0F` | Every background |
| Glow | `#1B1B24` | Soft light behind the object |
| Steel | `#C9CED6` | Metal parts, secondary shapes |
| Shell | `#3A3F4B` | Housings, outsides of objects |
| White | `#FFFFFF` | Text |
| Muted | `#9AA0AA` | Labels, secondary text |
| Signal Green / Red | `#32D74B` / `#FF453A` | Works / doesn't work only |
| Layer colours | `#FF9F0A` `#0A84FF` `#32D74B` `#BF5AF2` `#64D2FF` | Parts and layers inside objects |

Each reel may set its own **accent** (from the palette) for variety. Cut Yellow stays the default and the brand anchor.

### Type

- **Inter** everywhere: Black (900) for big text and the wordmark, ExtraBold (800) for labels and captions, SemiBold (600) for small text.
- Big top text: capitals, 2-4 words, at most 28 characters, one word highlighted.
- Captions: 3 words at a time, the spoken word in the accent colour with a small pop.

### Layout and motion

- 1080×1920. The object sits in the middle. Big text goes in the top third and captions low.
- **Safe zones:** keep the bottom 380 px and the right 140 px clear (YouTube's buttons).
- **Frame 1 already shows the object, already moving.** No logo intros, no black frames.
- **Motion language:** things slide in and settle, the camera slowly pushes in, parts pop into place, and the cut line
  sweeps. Movement explains; it never just decorates. Something changes every 2-3 seconds.
- **Style:** clean code-drawn vector shapes with depth (extruded faces, soft shadows). No stock footage, no photos of
  real people, no brand logos.

---

## 5. Sonic identity

| Element | Choice |
| --- | --- |
| **Narrator** | Kokoro `af_heart` at 1.08x: warm, clear, brisk. Same voice on every reel; changing it later costs recognition. |
| **Music** | Kevin MacLeod (CC BY), one track per series (see the table above), under the voice at about 12% |
| **SFX palette** | whoosh (hook), slice (cut open), click (mechanism), thunk (lock or stop), pop (reveal), buzz (wrong), unlock (payoff) |
| **Signature** | Every reel opens on a whoosh and the reveal lands on a pop. That is our sound logo. |
| **Loudness** | Voice clearly on top; no clipping. Check one reel per batch on phone speakers. |

If the channel grows, the single biggest upgrade is a consistent human (or premium AI) narrator. Keep the same
voice once you switch.

---

## 6. Channel setup checklist

Do these once in YouTube Studio:

- [ ] **Name:** Cutaway
- [ ] **Handle:** first available of `@cutaway`, `@cutawayshorts`, `@cutaway.daily`, `@getcutaway` (check availability
      in Studio). Use the same handle on TikTok and Instagram.
- [ ] **Profile picture:** `brand/avatar.png` (800×800)
- [ ] **Banner:** `brand/banner.png` (2560×1440; the text sits in the safe area for all devices)
- [ ] **Video watermark:** `brand/watermark.png` (Studio > Customisation > Branding, "entire video")
- [ ] **Description (About):**

  > Everyday things, cut open. 🔍
  > Every day, one object you use all the time, sliced open in under a minute: locks, zippers, microwaves,
  > toasters, airbags and 1,800 more. Clear animation, real engineering, no fluff.
  > New Shorts daily. Tell us in the comments what we should cut open next.
  > Music: Kevin MacLeod (incompetech.com), CC BY 4.0. Facts are checked against sources; spot a mistake? Comment and we'll fix it.

- [ ] **Keywords:** how things work, engineering, how it works, everyday objects, explained, science, inventions, mechanisms, shorts
- [ ] **Category:** Education. **Audience:** "No, it's not made for kids" (the content is general-audience, not targeted at children)
- [ ] **Upload defaults:** paste the description template below; Category Education; comments on; "Allow remixing" on
- [ ] **Playlists**, one per series, using the series names and promises from section 3
- [ ] **Links:** TikTok / Instagram handles once created

**Description template** (the daily `.txt` and the publishing sheet already fill this in):

```
<one or two sentences: the hook + the payoff>

Music: <credit line from music/tracks.tsv>

#<object> #howthingswork #engineering #shorts
```

---

## 7. Publishing playbook

1. **Daily:** `npm run daily` renders 2 reels. Copy Title, Description and Pinned comment from `vid-N.txt` or from the
   publishing sheet. Post the pinned comment and pin it.
2. **Time:** start with about 6-8 pm local time. After 4 weeks, check *When your viewers are on YouTube* in Studio and move to the peak.
3. **Spacing:** two posts a day at least 4 hours apart, or one a day while testing.
4. **Hashtags:** 3-5, always `#shorts`, and the object's name first.
5. **Before posting, glance at** the sheet's *Optimisation needed* column (shorter title, keyword in the title, missing
   source...). The *Ready score* sorts what to fix first.
6. **48-hour check:** fill in *Viewed vs swiped* and *Avg % viewed* in the sheet. Under 60% viewed-vs-swiped means
   re-upload a week later with a backup hook (every script has backups).
7. **Corrections:** if a viewer finds a factual error, pin a correction comment within 24 h, fix the script, and
   re-render with `npm run daily -- --redo vid-N` for future cross-posts. Being openly correctable builds trust.

---

## 8. Community

- Reply to as many comments as you can in the first hour after posting. It boosts the video and builds the habit.
- Heart good questions. Turn the best topic requests into **"You asked: ___"** reels (it shows we listen).
- Every pinned comment is a question ("What should we cut open next?"), which feeds the topic list.
- Tone in replies: same as the videos. Friendly, precise, never defensive. Thank people who correct us.
- Ignore trolls; hide or delete abuse. No arguments in comments.

---

## 9. Growth beyond Shorts

| Channel | How | When |
| --- | --- | --- |
| **TikTok** | Same MP4s (no YouTube watermark), same title as the caption | From day 1 |
| **Instagram Reels** | Same MP4s; first line of the description as the caption | From day 1 |
| **Facebook Reels** | Cross-post from Instagram | Optional |
| **YouTube long-form** | Compilations: "50 everyday things, cut open" (10-15 min) stitched from Shorts, one per series | After about 100 Shorts |
| **Community posts** | Polls: "What should we cut open next?" | Weekly |

Use the same handle, avatar and banner everywhere so people recognise the brand across apps.

---

## 10. Measuring and decisions

**Weekly (15 minutes, using the publishing sheet):**

| Metric | Where | Target | Action if it misses |
| --- | --- | --- | --- |
| Viewed vs swiped away | Studio > Short | 70%+ | Under 60%: re-hook with a backup hook |
| Average % viewed | Studio > Short | 90%+ (loops push it over 100%) | Tighten the middle; the payoff comes too late |
| Subscribers per 1,000 views | Sheet, Series summary | Rising | The series builds views, not a channel: lower its share |
| Comments per video | Studio | Rising | Make pinned questions more specific |

**Rules:** after 8 uploads, drop a series that's last on all three of viewed-vs-swiped, average % viewed and subs per 1,000 views.
Double down (70% of uploads) on the top two.

### Milestones

| Phase | Weeks | Goal |
| --- | --- | --- |
| Launch | 1-4 | 1-2 a day, find the 2 best series, first Short over 10k views |
| Double down | 5-12 | 2 a day, 70% from the top series, first Short over 100k, 1,000 subscribers |
| Scale | 13+ | Hit the YouTube Partner Programme bar for Shorts, start TikTok/IG growth, first long-form compilation |

---

## 11. Making money (in order)

1. **YouTube Partner Programme.** Shorts can qualify through Shorts views (at the time of writing the full tier is
   1,000 subscribers + 10M public Shorts views in 90 days, with a lower tier for fan-funding features). Check the
   current numbers in Studio > Earn; they change.
2. **Sponsorships** that fit the brand: tools, maker kits, education apps, science boxes. Mark every one as a paid promotion.
3. **Affiliate links** in long-form descriptions only (for example, a tool featured in a compilation). Never in kids-targeted content.
4. **Merch** later: the emblem works well on stickers and tees.

---

## 12. Guardrails (what keeps the channel safe)

- **No mass-produced feel.** YouTube's monetisation policy excludes inauthentic, repetitive, mass-produced content.
  Our protection: every reel has its own researched script, fact check and visuals; we vary series, visuals and hooks;
  we reply to comments and make "You asked" reels; and over time we add a real human element (your voice, your
  picks, your corrections). Never upload near-duplicates, and never post the same reel twice except as a
  deliberate re-hook a week later.
- **AI disclosure.** The narration is synthetic and the visuals are animated. YouTube's "altered or synthetic content"
  label is for *realistic* content that could be mistaken for real people or events. Our clear animations normally don't need
  it, but tick the disclosure if a video ever shows realistic synthetic footage or a realistic synthetic person.
  Check Studio's current guidance.
- **Facts.** Only post what the script's Fact check supports. If unsure, soften it or cut it. The reports are in `fact-check/`.
- **Music.** Only tracks in `music/tracks.tsv` (CC BY, credit in every description) or YouTube's audio library. Never chart music.
- **No trademarks or real people.** Draw generic objects, with no brand logos and no celebrity likenesses.
- **No medical, legal or financial advice.** New Year habit and money reels stay educational, with hedged numbers.
- **Kids.** General audience, not "made for kids". Keep it clean and nothing dangerous to copy at home.

---

## 13. First 30 days

| Days | Do |
| --- | --- |
| 1 | Set up the channel (section 6). Post vid-01 and vid-02 from `out/2026-11-11/`. |
| 2-7 | 2 a day. Reply to every comment. Start TikTok and IG with the same files. |
| 8 | First weekly review in the sheet. Re-hook anything under 60% viewed-vs-swiped. |
| 9-21 | Keep the cadence. Note which series lead. Make the first "You asked" reel from comments. |
| 22-30 | Shift the mix toward the top 2 series. Plan the first long-form compilation once there are about 100 Shorts. |

**The brand in one line:** *same look, same voice, one clear reveal, every day.*
