#!/usr/bin/env bash
# Rebuild a file from uploads/<name>/ parts and verify it against the original checksum.
#   ./tools/unchunk.sh uploads/vid-01.mp4 [output-path]
set -euo pipefail
dir="${1:?usage: tools/unchunk.sh uploads/<name> [output]}"
name="$(basename "$dir")"
out="${2:-$name}"
( cd "$dir" && sha256sum -c --quiet SHA256SUMS ) || { echo "A part is corrupt or missing."; exit 1; }
cat "$dir/$name".part-* > "$out"
want=$(awk '{print $1}' "$dir/ORIGINAL.sha256")
got=$(sha256sum "$out" | awk '{print $1}')
[[ "$want" == "$got" ]] || { echo "Checksum mismatch after joining."; exit 1; }
echo "Rebuilt $out (checksum OK)"
