#!/bin/bash
# Iara Suite v2.0 — Launcher Linux/macOS
# Advogado Maikon Caldeira — OAB/MG 183712

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FILE="file://$DIR/index.html"

echo ""
echo "  ╔═══════════════════════════════════════════════════╗"
echo "  ║          ⚡  IARA SUITE  v2.0                    ║"
echo "  ║  Code Editor · Terminal Linux · APK Builder      ║"
echo "  ║  Site Extractor · IA Auto-detecção               ║"
echo "  ╚═══════════════════════════════════════════════════╝"
echo ""
echo "  Abrindo: $FILE"
echo ""

# macOS
if command -v open &>/dev/null; then
  open "$FILE"
# Linux — tenta vários
elif command -v google-chrome &>/dev/null; then
  google-chrome "$FILE" &
elif command -v chromium-browser &>/dev/null; then
  chromium-browser "$FILE" &
elif command -v chromium &>/dev/null; then
  chromium "$FILE" &
elif command -v firefox &>/dev/null; then
  firefox "$FILE" &
elif command -v xdg-open &>/dev/null; then
  xdg-open "$FILE" &
else
  echo "  ⚠️  Abra manualmente: $DIR/index.html"
fi

echo "  ✅ Iara Suite iniciado!"
echo ""
echo "  Terminal Linux: aba 'Terminal Linux' → WebVM (Alpine sem servidor)"
echo ""
