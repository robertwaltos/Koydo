"""
Download models for the Koydo Local TTS service.

Kokoro-82M:  ~200 MB (model) + ~50 MB (voicepacks)
XTTS v2:     ~1.8 GB

Run:  python3 download_models.py
"""

import os
import sys
import shutil
import hashlib
from pathlib import Path

MODELS_DIR = Path(os.getenv("MODELS_DIR", "/models"))


def download_kokoro():
    """Download Kokoro-82M model + default voicepacks from HuggingFace."""
    print("\n═══ Downloading Kokoro-82M ═══")
    kokoro_dir = MODELS_DIR / "kokoro"
    kokoro_dir.mkdir(parents=True, exist_ok=True)
    voices_dir = kokoro_dir / "voices"
    voices_dir.mkdir(exist_ok=True)

    try:
        from huggingface_hub import hf_hub_download

        # Download model weights
        print("  → Model weights (kokoro-v1.0.pth) ...")
        hf_hub_download(
            repo_id="hexgrad/Kokoro-82M",
            filename="kokoro-v1.0.pth",
            local_dir=str(kokoro_dir),
            local_dir_use_symlinks=False,
        )
        print("  ✓ Model weights downloaded")

        # Download child-friendly voicepacks
        # af = American Female, am = American Male
        voicepacks = [
            "af_nova.pt",     # Female — warm, friendly (maps to OpenAI "nova")
            "af_heart.pt",    # Female — nurturing
            "af_bella.pt",    # Female — clear, bright
            "am_echo.pt",     # Male — calm, steady (maps to OpenAI "echo")
            "am_michael.pt",  # Male — warm, gentle
            "am_adam.pt",     # Male — friendly
            "bf_emma.pt",     # British Female
            "bm_lewis.pt",    # British Male
            "ef_dora.pt",     # Spanish Female
            "em_alex.pt",     # Spanish Male
        ]

        for vp in voicepacks:
            print(f"  → Voicepack: {vp} ...")
            try:
                hf_hub_download(
                    repo_id="hexgrad/Kokoro-82M",
                    filename=f"voices/{vp}",
                    local_dir=str(kokoro_dir),
                    local_dir_use_symlinks=False,
                )
                print(f"  ✓ {vp}")
            except Exception as e:
                print(f"  ⚠ {vp} not found, skipping: {e}")

        print("═══ Kokoro-82M download complete ═══\n")
        return True

    except ImportError:
        print("  ✗ huggingface_hub not installed. Run: pip install huggingface_hub")
        return False
    except Exception as e:
        print(f"  ✗ Kokoro download failed: {e}")
        return False


def download_xtts():
    """Download XTTS v2 model from Coqui."""
    print("\n═══ Downloading XTTS v2 ═══")
    xtts_dir = MODELS_DIR / "xtts-v2"
    xtts_dir.mkdir(parents=True, exist_ok=True)

    try:
        from TTS.utils.manage import ModelManager

        print("  → Downloading XTTS v2 checkpoint (~1.8 GB) ...")
        manager = ModelManager()
        model_path, config_path, _ = manager.download_model("tts_models/multilingual/multi-dataset/xtts_v2")

        # Copy to our models dir
        model_parent = Path(model_path).parent
        for f in model_parent.iterdir():
            dest = xtts_dir / f.name
            if not dest.exists():
                shutil.copy2(str(f), str(dest))
                print(f"  ✓ Copied {f.name}")

        print("═══ XTTS v2 download complete ═══\n")
        return True

    except ImportError:
        print("  ✗ TTS (Coqui) not installed. Run: pip install TTS")
        return False
    except Exception as e:
        print(f"  ✗ XTTS download failed: {e}")
        return False


def create_default_reference():
    """Create a default voice reference file for XTTS (silence placeholder)."""
    ref_dir = MODELS_DIR / "voice-references"
    ref_dir.mkdir(parents=True, exist_ok=True)
    default_ref = ref_dir / "default.wav"

    if not default_ref.exists():
        print("\n  ⚠ No default.wav reference file found.")
        print("  → To use XTTS voice cloning, place a 6-10 second WAV")
        print(f"    recording in: {ref_dir}/")
        print("  → Name files to match Kokoro voice IDs (e.g., af_nova.wav)")
        print("  → A default 'silence' reference will be created.\n")

        # Create a short silence file as placeholder
        try:
            import numpy as np
            import soundfile as sf
            silence = np.zeros(24000 * 3, dtype=np.float32)  # 3 seconds of silence
            sf.write(str(default_ref), silence, 24000)
            print("  ✓ Created placeholder default.wav (replace with real reference)")
        except Exception:
            print("  ⚠ Could not create placeholder — install soundfile")


def verify_models():
    """Check which models are available."""
    print("\n═══ Model Verification ═══")
    checks = {
        "Kokoro model":     MODELS_DIR / "kokoro" / "kokoro-v1.0.pth",
        "Kokoro af_nova":   MODELS_DIR / "kokoro" / "voices" / "af_nova.pt",
        "Kokoro am_echo":   MODELS_DIR / "kokoro" / "voices" / "am_echo.pt",
        "XTTS config":      MODELS_DIR / "xtts-v2" / "config.json",
        "Default ref WAV":  MODELS_DIR / "voice-references" / "default.wav",
    }

    all_ok = True
    for label, path in checks.items():
        exists = path.exists()
        size = f" ({path.stat().st_size / 1024 / 1024:.1f} MB)" if exists else ""
        status = "✓" if exists else "✗"
        print(f"  {status} {label}: {path}{size}")
        if not exists:
            all_ok = False

    if all_ok:
        print("\n  ✅ All models ready!")
    else:
        print("\n  ⚠ Some models missing — TTS may fall back to available engines")

    return all_ok


if __name__ == "__main__":
    print("╔══════════════════════════════════════════════════════╗")
    print("║  Koydo Local TTS — Model Downloader                 ║")
    print("╚══════════════════════════════════════════════════════╝")

    # Install huggingface_hub if needed
    try:
        import huggingface_hub
    except ImportError:
        print("Installing huggingface_hub...")
        os.system(f"{sys.executable} -m pip install huggingface_hub")

    kokoro_ok = download_kokoro()
    xtts_ok = download_xtts()
    create_default_reference()
    verify_models()

    if kokoro_ok or xtts_ok:
        print("\n🎉 Setup complete! Start the service with:")
        print("   docker compose up -d")
    else:
        print("\n⚠ Model downloads had issues. Check errors above.")
        sys.exit(1)
