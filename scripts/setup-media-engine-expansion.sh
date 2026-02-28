#!/bin/bash

# Koydo Neural Cinema - Full Stack Setup
# Installs Video, Audio, & TTS capabilities into ComfyUI
# execute from WSL home: ./media-engine-setup.sh

BASE_DIR="$HOME/Koydo_Media_Engine/ComfyUI"
CUSTOM_NODES="$BASE_DIR/custom_nodes"

echo "🎬 Koydo Neural Cinema Expansion"
echo "-----------------------------------"

# 1. Verify Base ComfyUI
if [ ! -d "$BASE_DIR" ]; then
    echo "❌ ComfyUI not found. Please run the base setup first."
    exit 1
fi

cd "$BASE_DIR"
source venv/bin/activate

# 2. Install Audio/TTS support (ComfyUI-XTTS - Native Node)
echo "🗣️  Installing Local TTS (XTTS via AIFSH)..."
cd "$CUSTOM_NODES"
if [ ! -d "ComfyUI-XTTS" ]; then
    # Using AIFSH/ComfyUI-XTTS as the native ComfyUI implementation of Coqui XTTS
    # (The original AllTalk repo is a standalone server, not a node)
    git clone https://github.com/AIFSH/ComfyUI-XTTS.git
    
    if [ -d "ComfyUI-XTTS" ]; then
        cd ComfyUI-XTTS
        pip install -r requirements.txt
    else
        echo "⚠️ Failed to clone ComfyUI-XTTS."
    fi
else
    echo "✅ ComfyUI-XTTS already installed."
fi

# 3. Install Video support (ComfyUI-VideoHelperSuite)
echo "🎥 Installing Video Helpers..."
cd "$CUSTOM_NODES"
if [ ! -d "ComfyUI-VideoHelperSuite" ]; then
    git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git
    
    if [ -d "ComfyUI-VideoHelperSuite" ]; then
        cd ComfyUI-VideoHelperSuite
        pip install -r requirements.txt
    fi
else
    echo "✅ VideoHelperSuite already installed."
fi

# 4. Install Audio Generation (AudioLDM wrapper)
echo "🎵 Installing Music/SFX Generator (ComfyUI-AudioLDM)..."
cd "$CUSTOM_NODES"
if [ ! -d "ComfyUI-AudioLDM" ]; then
    # switching to sanbuphy/ComfyUI-AudioLDM as previous repos are offline
    git clone https://github.com/sanbuphy/ComfyUI-AudioLDM.git
    
    if [ -d "ComfyUI-AudioLDM" ]; then
        cd ComfyUI-AudioLDM
        pip install -r requirements.txt
    else
         echo "⚠️ Failed to clone AudioLDM."
    fi
else
    echo "✅ AudioLDM already installed."
fi

echo "-----------------------------------"
echo "✅ Expansion Complete."
echo "   Restart ComfyUI to load new nodes."
