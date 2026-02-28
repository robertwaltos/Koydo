#!/bin/bash

# Koydo Unified Media Server
# Starts ComfyUI with all media engines loaded
# Execute from WSL home with: /mnt/d/PythonProjects/Koydo/koydo-web/scripts/start-media-server.sh

# 1. Define Paths (Hardcoded relative to Windows mount for reliability)
PROJECT_DIR="/mnt/d/PythonProjects/Koydo/koydo-web"
ENGINE_DIR="$HOME/Koydo_Media_Engine/ComfyUI"

# 2. Check Paths
if [ ! -d "$ENGINE_DIR" ]; then
    echo "❌ Neural Engine not found at $ENGINE_DIR"
    exit 1
fi

# 3. Start Server
echo "🚀 Starting Koydo High-Performance Media Server..."
echo "   - Image: Flux.1 [dev]"
echo "   - Video: SVD / CogVideoX"
echo "   - Audio: AudioLDM + XTTS"

cd "$ENGINE_DIR"
source venv/bin/activate

# Start in foreground so we can see output immediately
python3 main.py --listen 0.0.0.0 --port 8188 --highvram --preview-method auto
