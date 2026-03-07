$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

function Invoke-Locale([string]$locale) {
  $attempt = 0
  while ($true) {
    $attempt++
    Write-Host ("[{0}] Attempt #{1} started at {2}" -f $locale.ToUpper(), $attempt, (Get-Date).ToString("s"))
    node --env-file=.env scripts/translate-fast-chunks.mjs --locale $locale --concurrency 4 --batch-size 80 --max-chars 12000 --checkpoint-every 20
    $code = $LASTEXITCODE

    if ($code -eq 0) {
      Write-Host ("[{0}] Translation complete." -f $locale.ToUpper())
      break
    }

    Write-Host ("[{0}] Exit code {1}; retrying in 15s..." -f $locale.ToUpper(), $code)
    Start-Sleep -Seconds 15
  }

  Write-Host ("[{0}] Writing output files..." -f $locale.ToUpper())
  node --max-old-space-size=4096 scripts/write-translation-output.mjs --locale $locale
  if ($LASTEXITCODE -ne 0) {
    throw ("write-translation-output failed for locale " + $locale)
  }
  Write-Host ("[{0}] Output files written." -f $locale.ToUpper())
}

Write-Host ("Fast ES/ZH translation runner started: " + (Get-Date).ToString("s"))
Invoke-Locale "es"
Invoke-Locale "zh"
Write-Host ("Fast ES/ZH translation runner finished: " + (Get-Date).ToString("s"))
