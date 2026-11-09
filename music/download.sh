#!/usr/bin/env bash
# Downloads every track in music/tracks.tsv as music/files/<slug>.mp3 using yt-dlp.
#
#   ./music/download.sh            # all tracks
#   ./music/download.sh cipher     # one track
#
# Needs: yt-dlp and ffmpeg on your PATH (pip install yt-dlp; ffmpeg from your package manager).
#
# IMPORTANT: a search can match a re-upload or the wrong song. After downloading,
# check music/files/<slug>.source.txt: the uploader should be Kevin MacLeod (or
# another channel you trust), and the title should match. If it's wrong, paste the
# exact YouTube URL into column 2 of tracks.tsv and run the script again.
set -euo pipefail
cd "$(dirname "$0")"
command -v yt-dlp >/dev/null || { echo "yt-dlp not found. Install: pip install -U yt-dlp"; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg not found. Install it first."; exit 1; }
mkdir -p files

only="${1:-}"
while IFS=$'\t' read -r slug query mood credit; do
  [[ -z "$slug" || "$slug" == \#* ]] && continue
  [[ -n "$only" && "$slug" != "$only" ]] && continue
  if [[ -f "files/$slug.mp3" ]]; then echo "✓ $slug (already downloaded)"; continue; fi

  if [[ "$query" == http* ]]; then src="$query"; else src="ytsearch1:$query"; fi
  echo "↓ $slug  <-  $src"
  yt-dlp "$src" \
    --no-playlist \
    --match-filter "duration < 600" \
    -x --audio-format mp3 --audio-quality 0 \
    -o "files/$slug.%(ext)s" \
    --print-to-file "title: %(title)s | uploader: %(uploader)s | url: %(webpage_url)s" "files/$slug.source.txt" \
    --quiet --no-warnings --progress
  echo "  $(cat "files/$slug.source.txt")"
  printf '%s\n' "$credit" > "files/$slug.credit.txt"
done < tracks.tsv

echo
echo "Done. Check each files/*.source.txt, then offload music/files/ to your pendrive."
