# agent-prompt: Neural Cinema Infrastructure Setup (WSL2)

**Role:** AI DevOps Engineer & Media Pipeline Architect
**Target Environment:** WSL2 (Ubuntu 22.04+) on Windows Host
**Project Root:** `/mnt/d/PythonProjects/Koydo`
**Constraint:** Total active VRAM usage must remain **under 20GB** to allow for parallel manufacturing of assets (Image/Video/Audio).

---

## 🚀 The Mission: "Neural Cinema"
You are tasked with transforming a standard WSL environment into a local, multi-modal media generation server for the Koydo platform. This server will act as the backend engine for our "Retro Future" UI.

## 🛠️ Infrastructure Requirements (The Stack)

### 1. Core Engine: ComfyUI (Headless)
- **Repo:** `comfyanonymous/ComfyUI`
- **Mode:** Listen on `0.0.0.0` (Host accessible)
- **Memory Strategy:** `--highvram` (if 24GB GPU) or `--normalvram` (if <16GB).

### 2. The Model Matrix (<20GB Budget Strategy)
*Select these specific quantized versions to fit the budget:*

| Component | Model Selection | Est. VRAM | Notes |
| :--- | :--- | :--- | :--- |
| **Image** | **Flux.1 [schnell]** (fp8 checkpoint) | ~11.0 GB | *Fastest generation, low footprint.* |
| **Video** | **SVD XT 1.1** (fp16) | ~6.5 GB | *Stable Video Diffusion.* |
| **Audio** | **AudioLDM2** (Large) | ~3.0 GB | *For SFX/Background.* |
| **TTS** | **XTTS v2** (Coqui) | ~2.5 GB | *Character voices.* |
| **LLM** | **Llama 3 8B Instruct** (Q4_K_M GGUF) | ~5.0 GB | *Prompt Expansion Intelligence.* |

*Note: The total sum > 20GB, so the agent must configure ComfyUI to **unload** models aggressively between manufacturing steps (Smart Memory Management).*

### 3. Required Custom Nodes
Install these via `git clone` into `ComfyUI/custom_nodes`:
1.  **Manager:** `ltdrdata/ComfyUI-Manager`
2.  **Video:** `Kosinkadink/ComfyUI-VideoHelperSuite`
3.  **Audio:** `sanbuphy/ComfyUI-AudioLDM`
4.  **TTS:** `AIFSH/ComfyUI-XTTS`
5.  **LLM:** `city96/ComfyUI-GGUF` (Efficient local LLM loader)

---

## 📝 Execution Protocol (Step-by-Step for the Agent)

### Phase 1: Dependency Validation
Run this check inside WSL:
```bash
# 1. Verify CUDA
nvidia-smi
# 2. Install System Deps
sudo apt update && sudo apt install -y ffmpeg git python3-venv build-essential
```

### Phase 2: Automated Installation
Execute the pre-prepared scripts located in `koydo-web/scripts/`:
```bash
cd /mnt/d/PythonProjects/Koydo/koydo-web
chmod +x scripts/setup-media-engine-expansion.sh
./scripts/setup-media-engine-expansion.sh
```

### Phase 3: Model Acquisition (Manual or Scripted)
*Agent Action: Download these URLS to `ComfyUI/models/checkpoints/`*
- **Flux Schnell FP8**: `https://huggingface.co/Comfy-Org/flux1-schnell/resolve/main/flux1-schnell-fp8.safetensors`
- **Clip (T5)**: `https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp8_e4m3fn.safetensors`

### Phase 4: Verification
Start the server and confirm:
1.  **Endpoint:** `http://localhost:8188` is reachable.
2.  **Workflow:** Load the `api/media/workflows/flux_schnell_basic.json` (to be created) and queue a generation.

---

## ✅ Expected Output
Return a **Readiness Report** containing:
1.  **VRAM Analysis**: Max peak usage during a Flux generation.
2.  **IP Address**: The internal IP to configure in `Next.js` environment variables.
3.  **Status**: "OPERATIONAL" or specific error logs.
