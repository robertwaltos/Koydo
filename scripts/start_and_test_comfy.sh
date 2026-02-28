#!/bin/bash

# Koydo Local Media Pipeline - Start & Test Script
# Usage: ./scripts/start_and_test_comfy.sh

BASE_DIR="$HOME/Koydo_Media_Engine/ComfyUI"

# 1. Check if installed
if [ ! -d "$BASE_DIR" ]; then
    echo "❌ ComfyUI not found at $BASE_DIR"
    echo "   Please run setup-comfy_linux.sh first."
    exit 1
fi

# 2. Start ComfyUI
echo "🚀 Starting Neural Engine (ComfyUI)..."
cd "$BASE_DIR"
source venv/bin/activate

# Run in background and save PID
python3 main.py --listen --port 8188 > comfy.log 2>&1 &
COMFY_PID=$!

echo "   (PID: $COMFY_PID) - Logs in comfy.log"
echo "⏳ Waiting for server to initialize (10s)..."
sleep 10

# 3. Validation Check
if ps -p $COMFY_PID > /dev/null; then
   echo "✅ Server is responding."
else
   echo "❌ Server failed to start. Check comfy.log:"
   tail -n 10 comfy.log
   exit 1
fi

# 4. Trigger Test Generation via Client Script
# We assume the user is running this from the repo root or passing the path, 
# but let's locate the python client we created earlier.
REPO_root="/mnt/d/PythonProjects/Koydo/koydo-web"
CLIENT_SCRIPT="$REPO_root/scripts/comfy-client.py"

if [ -f "$CLIENT_SCRIPT" ]; then
    echo "🧪 Running Test Generation Client..."
    # We use the system python or venv python to run the simple client
    python3 "$CLIENT_SCRIPT"
else
    echo "⚠️  Client script not found at $CLIENT_SCRIPT"
fi

echo ""
echo "---------------------------------------------------"
echo "🎉 Engine is running at http://localhost:8188"
echo "   To stop it, run: kill $COMFY_PID"
echo "---------------------------------------------------"
