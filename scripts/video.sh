#!/usr/bin/env bash
# usage: scripts/video.sh <video>  ->  public/video/<name>.webm
# 15fps + long keyframe interval, screen recordings are mostly static frames
set -euo pipefail

read -r -p "name: " name

ffmpeg -y -i "$1" -vf "fps=15" -c:v libvpx-vp9 -crf 30 -b:v 0 \
  -g 300 -auto-alt-ref 1 -lag-in-frames 25 -deadline good -cpu-used 1 -an \
  "public/video/$name.webm"
