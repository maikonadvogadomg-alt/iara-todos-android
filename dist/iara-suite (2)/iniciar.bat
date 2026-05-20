@echo off
chcp 65001 >nul 2>&1
title Iara Suite

echo.
echo  ╔═══════════════════════════════════════════════════╗
echo  ║          ⚡  IARA SUITE  v2.0                    ║
echo  ║  Code Editor · Terminal Linux · APK Builder      ║
echo  ║  Site Extractor · IA Auto-detecção               ║
echo  ║                                                   ║
echo  ║  Advogado Maikon Caldeira — OAB/MG 183712        ║
echo  ╚═══════════════════════════════════════════════════╝
echo.
echo  Abrindo no navegador...

:: Tenta abrir no Chrome, Firefox ou Edge
set FILE=%~dp0index.html

start "" "chrome.exe" "%FILE%" 2>nul || ^
start "" "msedge.exe" "%FILE%" 2>nul || ^
start "" "firefox.exe" "%FILE%" 2>nul || ^
start "" "%FILE%"

echo  ✅ Iara Suite aberto!
echo.
echo  Se não abrir, arraste o arquivo index.html
echo  para qualquer navegador (Chrome, Firefox, Edge).
echo.
echo  Terminal Linux: aba "Terminal Linux" no app
echo                  → WebVM (Alpine Linux sem servidor)
echo.
pause
