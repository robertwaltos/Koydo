#!/bin/bash

# Koydo Local Media Pipeline Setup
# Installs ComfyUI + Flux.1 [dev] environment

# Base Directory
INSTALL_DIR="$HOME/Koydo_Media_Engine"
COMFY_DIR="$INSTALL_DIR/ComfyUI"

echo "🚀 Starting Koydo Neural Cinema Setup..."
echo "📂 Installing to: $INSTALL_DIR"

# 1. System Dependencies
echo "📦 Updating system and installing dependencies..."
sudo apt-get update && sudo apt-get install -y git python3-venv python3-pip wget google-perftools

# 2. Clone ComfyUI
mkdir -p "$INSTALL_DIR"
if [ -d "$COMFY_DIR" ]; then
    echo "✅ ComfyUI already cloned."
else
    echo "⬇️ Cloning ComfyUI..."
    git clone https://github.com/comfyanonymous/ComfyUI.git "$COMFY_DIR"
fi

# 3. Setup Python Environment
cd "$COMFY_DIR"
if [ ! -d "venv" ]; then
    echo "🐍 Creating Python Virtual Environment..."
    python3 -m venv venv
fi

source venv/bin/activate

echo "📦 Installing PyTorch (CUDA 12.1)..."
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

echo "📦 Installing ComfyUI Dependencies..."
pip install -r requirements.txt

# 4. Install ComfyUI Manager (Essential)
MANAGER_DIR="$COMFY_DIR/custom_nodes/ComfyUI-Manager"
if [ ! -d "$MANAGER_DIR" ]; then
    echo "⬇️ Installing ComfyUI Manager..."
    git clone https://github.com/ltdrdata/ComfyUI-Manager.git "$MANAGER_DIR"
fi

# 5. Download Flux Models (Interactive Check)
MODELS_DIR="$COMFY_DIR/models"
CHECKPOINT_DIR="$MODELS_DIR/checkpoints"
CLIP_DIR="$MODELS_DIR/clip"
VAE_DIR="$MODELS_DIR/vae"

echo "----------------------------------------------------------------"
echo "⚠️  FLUX.1 [dev] MODEL DOWNLOAD "
echo "These files are large (~25GB total). "
echo "Make sure you have ~30GB free space and a good internet connection."
echo "----------------------------------------------------------------"

read -p "Do you want to download Flux.1 models now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then

    # Checkpoint (Flux.1 Dev - FP8 version for better compatibility)
    echo "⬇️ Downloading Flux.1 [dev] FP8 Checkpoint (17GB)..."
    wget -nc -P "$CHECKPOINT_DIR" "https://huggingface.co/Comfy-Org/flux1-dev/resolve/main/flux1-dev-fp8.safetensors"

    # CLIP Encoders
    echo "⬇️ Downloading CLIP Encoders (t5xxl & clip_l)..."
    wget -nc -P "$CLIP_DIR" "https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp16.safetensors"
    wget -nc -P "$CLIP_DIR" "https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/clip_l.safetensors"

    # VAE
    echo "⬇️ Downloading AE.sft (VAE)..."
    wget -nc -P "$VAE_DIR" "https://huggingface.co/black-forest-labs/FLUX.1-schnell/resolve/main/ae.safetensors"

    echo "✅ Downloads Complete."
else
    echo "Skipping model downloads. You can download them later to $CHECKPOINT_DIR"
fi

echo "----------------------------------------------------------------"
echo "🎉 Setup Complete!"
echo ""
echo "To start ComfyUI:"
echo "1. cd $COMFY_DIR"
echo "2. source venv/bin/activate"
echo "3. python main.py --listen"
echo ""
echo "Then open http://localhost:8188 in your browser."
echo "----------------------------------------------------------------"
