# Start Script for Local AI (ComfyUI)
# Run via: ./scripts/start-local-ai.ps1

$WSL_DISTRO = "Ubuntu"
$COMFY_DIR = "~/ComfyUI"

Write-Host "Starting ComfyUI in WSL ($WSL_DISTRO)..." -ForegroundColor Cyan
Write-Host "Access UI at: http://localhost:8188" -ForegroundColor Yellow

wsl -d $WSL_DISTRO -- bash -c "cd $COMFY_DIR && ./start.sh"
