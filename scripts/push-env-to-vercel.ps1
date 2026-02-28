# push-env-to-vercel.ps1
# Reads .env and adds each variable to Vercel for production, preview, and development.
# Pass -Remove to delete existing vars first before re-adding.

param(
    [switch]$Remove
)

$envFile = Join-Path (Join-Path $PSScriptRoot "..") ".env"
$lines = Get-Content $envFile | Where-Object { $_ -match '^\s*[A-Za-z_]' -and $_ -notmatch '^\s*#' }

$seen = @{}
$added = 0
$skipped = 0

foreach ($line in $lines) {
    $parts = $line -split '=', 2
    $name = $parts[0].Trim()
    $rawValue = if ($parts.Length -gt 1) { $parts[1].Trim() } else { '' }

    # Strip inline comments (e.g., "value   # comment here")
    if ($rawValue -match '^([^#]+?)\s+#\s') {
        $rawValue = $Matches[1].Trim()
    }

    # Skip duplicates, empty values, and placeholders
    if ($seen[$name]) { continue }
    if ($rawValue -eq '' -or $rawValue -match '^placeholder' -or $rawValue -match '^price_\.\.\.' -or $rawValue -eq 'price_...') {
        Write-Host "  SKIP  $name (empty/placeholder)" -ForegroundColor Yellow
        $skipped++
        $seen[$name] = $true
        continue
    }

    $seen[$name] = $true

    # Remove existing var first if -Remove flag is set
    if ($Remove) {
        foreach ($env in @("production", "preview", "development")) {
            npx vercel env rm $name $env --yes 2>&1 | Out-Null
        }
        Write-Host "  DEL   $name" -ForegroundColor DarkGray
    }

    foreach ($env in @("production", "preview", "development")) {
        Write-Host "  ADD   $name -> $env" -ForegroundColor Cyan -NoNewline
        # Write value to a temp file to avoid pipe adding \r\n
        $tmpFile = [System.IO.Path]::GetTempFileName()
        [System.IO.File]::WriteAllText($tmpFile, $rawValue)
        $result = (Get-Content $tmpFile -Raw | npx vercel env add $name $env 2>&1) -join "`n"
        Remove-Item $tmpFile -ErrorAction SilentlyContinue
        if ($result -match "Error") {
            Write-Host "  [WARN]" -ForegroundColor Yellow
        } else {
            Write-Host "  [OK]" -ForegroundColor Green
        }
    }
    $added++
}

Write-Host ""
Write-Host "Done! Added $added variables, skipped $skipped." -ForegroundColor Green
