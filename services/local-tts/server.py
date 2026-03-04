# Local TTS Service — Kokoro-82M + XTTS v2
#
# Provides a FastAPI HTTP endpoint for local text-to-speech generation.
# Designed to run on a machine with an NVIDIA GPU (RTX 3060+ recommended).
#
# Kokoro-82M:  82M params, Apache 2.0, ~10x realtime on consumer GPU
#   Supports: en, es, fr, pt, ja, zh, hi, it
#
# XTTS v2: Voice cloning + 16 languages via Coqui
#   Supports: de, ko, pl + everything Kokoro supports (as fallback)

import os
import io
import time
import hashlib
import logging
import torch
import numpy as np
from pathlib import Path
from typing import Optional
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
import soundfile as sf

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(message)s")
logger = logging.getLogger("local-tts")

app = FastAPI(title="Koydo Local TTS", version="1.0.0")

# ── Configuration ──────────────────────────────────────────────────────────

MODELS_DIR = Path(os.getenv("MODELS_DIR", "/models"))
CACHE_DIR = Path(os.getenv("CACHE_DIR", "/cache"))
CACHE_DIR.mkdir(parents=True, exist_ok=True)
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# Kokoro language codes
KOKORO_LANG_CODES = {
    "en": "a",  # American English
    "en-gb": "b",  # British English
    "es": "e",
    "fr": "f",
    "pt": "p",
    "ja": "j",
    "zh": "z",
    "hi": "h",
    "it": "i",
}

# Languages that require XTTS (Kokoro doesn't support them)
XTTS_ONLY_LANGUAGES = {"de", "ko", "pl", "tr", "ru", "nl", "cs", "ar", "hu"}

# ── Model Singletons ──────────────────────────────────────────────────────

_kokoro_model = None
_kokoro_voicepack_cache = {}
_xtts_model = None


def get_kokoro():
    """Lazy-load Kokoro-82M model."""
    global _kokoro_model
    if _kokoro_model is None:
        logger.info("Loading Kokoro-82M model...")
        try:
            from kokoro import KModel
            model_path = MODELS_DIR / "kokoro" / "kokoro-v1.0.pth"
            _kokoro_model = KModel(str(model_path)).to(DEVICE)
            logger.info(f"Kokoro-82M loaded on {DEVICE}")
        except Exception as e:
            logger.error(f"Failed to load Kokoro: {e}")
            raise
    return _kokoro_model


def get_kokoro_voicepack(voice_id: str):
    """Load and cache a Kokoro voice pack."""
    if voice_id not in _kokoro_voicepack_cache:
        logger.info(f"Loading Kokoro voicepack: {voice_id}")
        voicepack_path = MODELS_DIR / "kokoro" / "voices" / f"{voice_id}.pt"
        if not voicepack_path.exists():
            raise FileNotFoundError(f"Voicepack not found: {voicepack_path}")
        _kokoro_voicepack_cache[voice_id] = torch.load(
            str(voicepack_path), map_location=DEVICE, weights_only=True
        )
    return _kokoro_voicepack_cache[voice_id]


def get_xtts():
    """Lazy-load XTTS v2 model."""
    global _xtts_model
    if _xtts_model is None:
        logger.info("Loading XTTS v2 model...")
        try:
            from TTS.tts.configs.xtts_config import XttsConfig
            from TTS.tts.models.xtts import Xtts

            config = XttsConfig()
            model_dir = MODELS_DIR / "xtts-v2"
            config.load_json(str(model_dir / "config.json"))
            _xtts_model = Xtts.init_from_config(config)
            _xtts_model.load_checkpoint(config, checkpoint_dir=str(model_dir))
            _xtts_model.to(DEVICE)
            logger.info(f"XTTS v2 loaded on {DEVICE}")
        except Exception as e:
            logger.error(f"Failed to load XTTS: {e}")
            raise
    return _xtts_model


# ── Request / Response Models ──────────────────────────────────────────────

class TTSRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=5000)
    voice: str = Field(default="af_nova", description="Kokoro voice ID or 'xtts' for XTTS")
    language: str = Field(default="en", description="BCP-47 language code (en, es, zh, etc.)")
    speed: float = Field(default=1.0, ge=0.5, le=2.0)
    format: str = Field(default="mp3", pattern="^(mp3|wav)$")
    reference_audio: Optional[str] = Field(default=None, description="Path to XTTS reference audio for voice cloning")


class TTSHealthResponse(BaseModel):
    status: str
    device: str
    kokoro_loaded: bool
    xtts_loaded: bool
    cached_voices: int
    gpu_name: Optional[str] = None
    gpu_memory_gb: Optional[float] = None


# ── Endpoints ──────────────────────────────────────────────────────────────

@app.get("/health", response_model=TTSHealthResponse)
async def health():
    gpu_name = None
    gpu_memory_gb = None
    if torch.cuda.is_available():
        gpu_name = torch.cuda.get_device_name(0)
        gpu_memory_gb = round(torch.cuda.get_device_properties(0).total_mem / (1024**3), 1)

    return TTSHealthResponse(
        status="ok",
        device=DEVICE,
        kokoro_loaded=_kokoro_model is not None,
        xtts_loaded=_xtts_model is not None,
        cached_voices=len(_kokoro_voicepack_cache),
        gpu_name=gpu_name,
        gpu_memory_gb=gpu_memory_gb,
    )


@app.post("/generate")
async def generate_tts(req: TTSRequest):
    """Generate TTS audio from text."""
    start = time.time()

    # Check cache
    cache_hash = hashlib.sha256(
        f"{req.voice}:{req.language}:{req.speed}:{req.text}".encode()
    ).hexdigest()[:16]
    cache_path = CACHE_DIR / f"{req.voice}" / f"{cache_hash}.{req.format}"

    if cache_path.exists():
        logger.info(f"Cache hit: {cache_path.name}")
        media_type = "audio/mpeg" if req.format == "mp3" else "audio/wav"
        return StreamingResponse(
            open(cache_path, "rb"),
            media_type=media_type,
            headers={
                "X-TTS-Provider": "cache",
                "X-TTS-Cached": "true",
                "X-TTS-Duration-Ms": "0",
            },
        )

    # Route to correct engine
    lang_base = req.language.split("-")[0].lower()

    if lang_base in XTTS_ONLY_LANGUAGES:
        audio_array, sample_rate = await _generate_xtts(req, lang_base)
        provider = "xtts-v2"
    elif lang_base in KOKORO_LANG_CODES:
        audio_array, sample_rate = await _generate_kokoro(req, lang_base)
        provider = "kokoro-82m"
    else:
        # Try XTTS as last resort (broadest language coverage)
        try:
            audio_array, sample_rate = await _generate_xtts(req, lang_base)
            provider = "xtts-v2"
        except Exception:
            raise HTTPException(
                status_code=400,
                detail=f"Unsupported language: {req.language}. Supported: {list(KOKORO_LANG_CODES.keys()) + list(XTTS_ONLY_LANGUAGES)}"
            )

    elapsed_ms = int((time.time() - start) * 1000)

    # Convert to requested format
    audio_bytes = _encode_audio(audio_array, sample_rate, req.format)

    # Write to cache
    cache_path.parent.mkdir(parents=True, exist_ok=True)
    with open(cache_path, "wb") as f:
        f.write(audio_bytes)

    media_type = "audio/mpeg" if req.format == "mp3" else "audio/wav"
    return StreamingResponse(
        io.BytesIO(audio_bytes),
        media_type=media_type,
        headers={
            "X-TTS-Provider": provider,
            "X-TTS-Cached": "false",
            "X-TTS-Duration-Ms": str(elapsed_ms),
            "X-TTS-Language": lang_base,
        },
    )


async def _generate_kokoro(req: TTSRequest, lang_code: str) -> tuple:
    """Generate audio using Kokoro-82M."""
    model = get_kokoro()
    voicepack = get_kokoro_voicepack(req.voice)
    kokoro_lang = KOKORO_LANG_CODES.get(lang_code, "a")

    from kokoro import KPipeline

    pipeline = KPipeline(lang_code=kokoro_lang, model=model, voice=voicepack)

    # Generate, collect all segments
    segments = []
    for _, _, audio in pipeline(req.text, speed=req.speed):
        if audio is not None:
            segments.append(audio)

    if not segments:
        raise HTTPException(status_code=500, detail="Kokoro produced no audio")

    audio_array = np.concatenate(segments)
    sample_rate = 24000  # Kokoro outputs at 24kHz
    return audio_array, sample_rate


async def _generate_xtts(req: TTSRequest, lang_code: str) -> tuple:
    """Generate audio using XTTS v2."""
    model = get_xtts()

    # Get reference audio for voice cloning
    ref_audio = req.reference_audio
    if not ref_audio:
        # Use stored reference clip matching the voice
        ref_path = MODELS_DIR / "voice-references" / f"{req.voice}.wav"
        if ref_path.exists():
            ref_audio = str(ref_path)
        else:
            # Use default reference
            default_ref = MODELS_DIR / "voice-references" / "default.wav"
            if not default_ref.exists():
                raise HTTPException(
                    status_code=500,
                    detail=f"No reference audio for voice {req.voice} and no default.wav found"
                )
            ref_audio = str(default_ref)

    outputs = model.synthesize(
        req.text,
        model.config,
        speaker_wav=ref_audio,
        gpt_cond_len=6,
        language=lang_code,
    )

    audio_array = outputs["wav"]
    sample_rate = 24000
    return audio_array, sample_rate


def _encode_audio(audio_array: np.ndarray, sample_rate: int, fmt: str) -> bytes:
    """Encode audio array to MP3 or WAV bytes."""
    buf = io.BytesIO()

    if fmt == "wav":
        sf.write(buf, audio_array, sample_rate, format="WAV", subtype="PCM_16")
    else:
        # For MP3, write WAV first then convert
        sf.write(buf, audio_array, sample_rate, format="WAV", subtype="PCM_16")
        buf.seek(0)
        try:
            from pydub import AudioSegment
            segment = AudioSegment.from_wav(buf)
            mp3_buf = io.BytesIO()
            segment.export(mp3_buf, format="mp3", bitrate="64k")
            return mp3_buf.getvalue()
        except ImportError:
            # pydub not available — return WAV
            logger.warning("pydub not installed, returning WAV instead of MP3")

    buf.seek(0)
    return buf.read()


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8100"))
    logger.info(f"Starting Local TTS service on port {port} (device={DEVICE})")
    uvicorn.run(app, host="0.0.0.0", port=port)
