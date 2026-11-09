#!/usr/bin/env bash
# Split a big file into 45 MB parts under uploads/<name>/ so each part can be
# pushed to GitHub on its own (GitHub warns over 50 MB and blocks over 100 MB).
#
#   ./tools/chunk.sh out/vid-01.mp4
#   -> uploads/vid-01.mp4/vid-01.mp4.part-000, part-001, ... + SHA256SUMS
#
# Rebuild later with ./tools/unchunk.sh uploads/vid-01.mp4
set -euo pipefail
src="${1:?usage: tools/chunk.sh <file>}"
[[ -f "$src" ]] || { echo "No such file: $src"; exit 1; }
case "$src" in music/*) echo "Refusing: keep music off this public repo (some licences forbid re-sharing the audio files, and it bloats the repo). Keep it on the pendrive."; exit 1;; esac

root="$(cd "$(dirname "$0")/.." && pwd)"
name="$(basename "$src")"
dest="$root/uploads/$name"
mkdir -p "$dest"
rm -f "$dest/$name".part-*

split -b 45M -d -a 3 "$src" "$dest/$name.part-"
( cd "$dest" && sha256sum "$name".part-* > SHA256SUMS )
sha256sum "$src" | awk -v n="$name" '{print $1"  "n}' > "$dest/ORIGINAL.sha256"

parts=$(ls "$dest/$name".part-* | wc -l)
echo "Split $src into $parts part(s) in uploads/$name/"
echo
echo "Push them one at a time:"
for p in "$dest/$name".part-*; do
  rel="${p#$root/}"
  echo "  git add \"$rel\" && git commit -m \"upload: $(basename "$p")\" && git push"
done
echo "  git add uploads/$name/SHA256SUMS uploads/$name/ORIGINAL.sha256 && git commit -m \"upload: $name checksums\" && git push"
