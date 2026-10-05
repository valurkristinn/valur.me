#!/usr/bin/env bash
# usage: scripts/webp.sh <image>  ->  src/assets/<name>.webp
set -euo pipefail

read -r -p "name: " name

cwebp -q 95 -sharp_yuv -resize 2048 0 "$1" -o "src/assets/$name.webp"
