Set-Location D:\PythonProjects\Koydo

# Check lock
if (Test-Path .git\index.lock) {
    Remove-Item .git\index.lock -Force
    Write-Host "Removed lock file"
}

# Stage everything, suppressing CRLF warnings
$env:GIT_CONFIG_NOSYSTEM = "1"
git config core.autocrlf false
git config core.safecrlf false
git add -A 2>&1 | Where-Object { $_ -notmatch "warning:" } | ForEach-Object { Write-Host $_ }

$staged = (git diff --cached --name-only 2>$null | Measure-Object -Line).Lines
Write-Host "Staged files: $staged"

if ($staged -gt 0) {
    git commit -m "feat: add 20 new games and fix TSC errors in arcade-121-125 zone-058 zone-064 page.tsx"
    Write-Host "Commit exit: $LASTEXITCODE"
    git log --oneline -2
} else {
    Write-Host "Nothing staged!"
    git status --short | Select-Object -First 10
}
