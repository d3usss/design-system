#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT_DIR/src/assets"
DST_DIR="$ROOT_DIR/dist/assets"

if [[ ! -d "$SRC_DIR" ]]; then
  echo "[copy-assets] Source directory not found: $SRC_DIR"
  exit 0
fi

mkdir -p "$DST_DIR"
cp -R "$SRC_DIR"/. "$DST_DIR"/

echo "[copy-assets] Assets copied: $SRC_DIR -> $DST_DIR"
