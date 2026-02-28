# Install Script for ComfyUI + Flux Environment on WSL2
# Run this from PowerShell as Administrator if possible, or regular user.

$WSL_DISTRO = "Ubuntu"
$INSTALL_DIR = "~/ComfyUI"

Write-Host "Checking for WSL..."
wsl --status
if ($?) {
    Write-Host "WSL is active." -ForegroundColor Green
} else {
    Write-Host "WSL is not running. Please install WSL2 first." -ForegroundColor Red
    exit 1
}

Write-Host "Installing dependencies in WSL ($WSL_DISTRO)..."