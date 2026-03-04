# Koydo Local TTS — Kokoro-82M + XTTS v2

Self-hosted text-to-speech for Koydo's educational content pipeline.
Eliminates per-character cloud costs while maintaining high quality.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Next.js App  (tts-service.ts)                          │
│                                                         │
│  generateTTS() ─── provider fallback chain:             │
│    1. local (Kokoro/XTTS)  ← NEW                        │
│    2. openai (tts-1)                                    │
│    3. elevenlabs (eleven_multilingual_v2)                │
│    4. browser (SpeechSynthesis)                         │
│                                                         │
│  POST http://localhost:8100/generate                     │
│    └─ { text, voice, language, speed, format }          │
└───────────┬─────────────────────────────────────────────┘
            │
┌───────────▼─────────────────────────────────────────────┐
│  Local TTS Service (FastAPI)           GPU: RTX 3060+   │
│                                                         │
│  Kokoro-82M (primary)                                   │
│    • 82M params, 24kHz, Apache 2.0                      │
│    • en, es, fr, pt, ja, zh, hi, it                     │
│    • ~10× realtime on RTX 4090                          │
│    • VRAM: ~500 MB                                      │
│                                                         │
│  XTTS v2 (extended languages + voice cloning)           │
│    • de, ko, pl, tr, ru, nl, cs, ar, hu                 │
│    • Voice cloning from 6-second reference              │
│    • VRAM: ~2 GB                                        │
│    • Coqui CPML license                                 │
└─────────────────────────────────────────────────────────┘
```

## Quick Start

```bash
# 1. Build the container
docker compose build

# 2. Download models (~2 GB total)
docker compose run --rm tts python3 download_models.py

# 3. Start the service
docker compose up -d

# 4. Test it
curl -X POST http://localhost:8100/generate \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello! Welcome to Koydo. Let us learn something fun today!","voice":"af_nova","language":"en"}' \
  --output test.mp3

# 5. Check health
curl http://localhost:8100/health
```

## Connect to Next.js App

Add to your `.env.local`:
```env
LOCAL_TTS_URL=http://localhost:8100
TTS_PRIMARY_PROVIDER=local          # optional: make local the primary
TTS_FALLBACK_PROVIDER=openai        # cloud fallback if local is down
```

## Voices

Kokoro voices are auto-mapped from OpenAI voice names:

| OpenAI Voice | Kokoro Voice | Character  |
|-------------|-------------|------------|
| nova        | af_nova     | Friendly, energetic (Aria) |
| echo        | am_echo     | Smooth, reflective (Kai) |
| alloy       | af_bella    | Clear, bright |
| shimmer     | af_heart    | Nurturing, gentle |
| fable       | bf_emma     | Expressive, British |
| onyx        | am_adam     | Deep, friendly |

Additional Kokoro voices available: `am_michael`, `bm_lewis`, `ef_dora`, `em_alex`

## Language Routing

| Language | Engine      | Quality |
|----------|-------------|---------|
| English  | Kokoro-82M  | ★★★★★  |
| Spanish  | Kokoro-82M  | ★★★★☆  |
| Chinese  | Kokoro-82M  | ★★★★☆  |
| French   | Kokoro-82M  | ★★★★☆  |
| Polish   | XTTS v2     | ★★★☆☆  |
| German   | XTTS v2     | ★★★☆☆  |
| Korean   | XTTS v2     | ★★★☆☆  |

---

## Cost & Quality Comparison

### Per-Character Costs

| Provider          | Cost per 1M chars | Monthly cost (10M chars) | Quality | Latency |
|-------------------|--------------------|--------------------------|---------|---------|
| **OpenAI tts-1**  | $15.00             | $150.00                  | ★★★★☆  | ~1-2s   |
| **OpenAI tts-1-hd** | $30.00          | $300.00                  | ★★★★★  | ~2-3s   |
| **ElevenLabs v2** | $300.00 (0.30/1K)  | $3,000.00                | ★★★★★  | ~1-3s   |
| **Kokoro-82M**    | **$0.00** (local)  | **$0.00** *              | ★★★★☆  | ~0.3-1s |
| **XTTS v2**       | **$0.00** (local)  | **$0.00** *              | ★★★☆☆  | ~1-2s   |
| Browser Speech    | $0.00              | $0.00                    | ★★☆☆☆  | instant |

_* Requires GPU hardware — see infrastructure costs below._

### Infrastructure Cost (Local TTS)

| Hardware          | Purchase | Monthly amortized (3yr) | Power/mo |
|-------------------|----------|-------------------------|----------|
| RTX 3060 12GB     | ~$300    | ~$8                     | ~$5      |
| RTX 4060 Ti 16GB  | ~$400    | ~$11                    | ~$6      |
| RTX 4090 24GB     | ~$1,600  | ~$44                    | ~$10     |
| Cloud GPU (A10G)  | —        | ~$80-150/mo             | incl.    |

### Break-Even Analysis

At **10M characters/month** (typical for full curriculum + audiobooks):

| Setup             | Monthly cost | Annual cost | Break-even vs OpenAI |
|-------------------|-------------|-------------|---------------------|
| OpenAI tts-1      | $150        | $1,800      | —                   |
| RTX 3060 local    | ~$13        | ~$156       | **Month 1**         |
| RTX 4060 Ti local | ~$17        | ~$204       | **Month 1**         |
| Cloud GPU local   | ~$100       | ~$1,200     | **Month 2**         |

### Quality Notes

- **Kokoro-82M**: Best open-source TTS as of 2025. Natural prosody, good emotion range. English is near OpenAI quality. Multilingual support is strong for supported languages.
- **XTTS v2**: Broader language coverage than Kokoro. Voice cloning capability. Slightly more robotic than Kokoro for English. Great for Polish, German, Korean where Kokoro has no support.
- **OpenAI tts-1**: Industry standard, extremely consistent, all-language. Best for production where quality must be guaranteed.
- **ElevenLabs**: Premium quality, best emotional range, but 20× more expensive than OpenAI.

### Recommended Strategy

```
Production (Vercel):
  primary = openai       # guaranteed quality, reasonable cost
  fallback = browser     # free degraded fallback

Dev / Staging (local GPU):
  primary = local        # zero cost, fast iteration
  fallback = openai      # cloud fallback for testing

Curriculum Pre-Generation (batch):
  primary = local        # generate thousands of clips offline
  fallback = openai      # only for failed clips
```

## Voice References (XTTS)

For XTTS voice cloning, place 6-10 second WAV reference clips in:
```
services/local-tts/voice-references/
├── af_nova.wav          # Reference for Aria-like voice
├── am_echo.wav          # Reference for Kai-like voice
└── default.wav          # Fallback reference
```

The download script creates a silence placeholder. Replace with actual voice samples
for quality voice cloning.

## API Reference

### `POST /generate`
Generate audio from text.

**Request body:**
```json
{
  "text": "The cat sat on the mat.",
  "voice": "af_nova",
  "language": "en",
  "speed": 1.0,
  "format": "mp3"
}
```

**Response:** audio/mpeg stream

**Response headers:**
- `X-TTS-Provider`: `kokoro-82m` or `xtts-v2`
- `X-TTS-Cached`: `true` or `false`
- `X-TTS-Duration-Ms`: generation time
- `X-TTS-Language`: resolved language code

### `GET /health`
Service health check.

**Response:**
```json
{
  "status": "ok",
  "device": "cuda",
  "kokoro_loaded": true,
  "xtts_loaded": false,
  "cached_voices": 3,
  "gpu_name": "NVIDIA GeForce RTX 4090",
  "gpu_memory_gb": 24.0
}
```
