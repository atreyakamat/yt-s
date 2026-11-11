# Fact check

All 1,800 scripts went through two passes on 11 Nov 2026.

1. **Quick review** (`batch-01.md` … `batch-18.md`, vid-1..900): every script read, with obvious errors fixed.
2. **Claim-by-claim check against sources** (`verified-<from>-<to>.md`, all 1,800): `video/tools/claims.mjs` pulled
   every specific claim (numbers, years, percentages, "first"/"invented", superlatives) into `claims.tsv`. Each one was
   checked against a reliable page (mostly Wikipedia, plus standards bodies, agencies and manufacturers), and the URL
   was written into the script's `## Fact check` section.

## Results

| | |
| --- | --- |
| Reels with a sourced Fact check line | 694 |
| Claims corrected (wrong number, year, name or rule) | about 37 |
| Claims softened (sources disagree, vary by model, or couldn't be confirmed) | about 130 |

Some of the fixes: the aircraft-lights rule was backwards (vid-829), the Moravia/Bohemia mix-up (vid-1077), the Frisbee
naming year (vid-969), the electric shaver patent year (vid-1318), the speed of sound (vid-214), the CO2 pressure
(vid-145), the popcorn temperatures (vid-162), a "ten-week" study that was really one week (vid-1612), and an unsupported
"healing frequency" claim (vid-1683). Each `verified-*.md` file lists every change, with the before, the after and the source.

## Limits (read before posting)

- Web search has a small shared budget per session, and it ran out early. Most checks used direct page fetches,
  mostly of Wikipedia. Claims that no fetched page confirmed were softened or are flagged in the script's Fact check
  section. They were never silently passed.
- Reels whose only "numbers" are illustrative gauges, definitions or arithmetic have no source URL, by design.
- Advice-style New Year reels (habits, money, health) are educational and not personal advice. Their numbers are
  rounded or hedged.
- If a viewer corrects a fact in the comments, fix the script (`how-things-work/batch-NN/vid-N.md`, or for vid-1501+
  the entry in `scripts-src/new-year/` followed by `npm run gen`) and re-render with `npm run daily -- --redo vid-N`.
