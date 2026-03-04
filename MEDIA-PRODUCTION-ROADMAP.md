# Koydo Media Production Roadmap

> **Date**: March 3, 2026  
> **Status**: Pre-launch (Target: March 13, 2026)  
> **Decision**: Local video generation abandoned. Focus on cloud APIs for quality + reliability.

---

## Executive Summary

After extensive research and prototyping, the media production strategy has crystallized:

- **Local GPU video generation is dead** — Seedance 2.0 has no API, Seedance 1.x is China-only, Wan 2.1 I2V produced anatomy artifacts (2,181 images + 217 videos purged), and no open model can maintain character consistency across long sequences.
- **Long-form video (30–60 min) does NOT EXIST** in any AI video provider — market max is 12 seconds per clip (Seedance 1.5-pro), 8 seconds (Google Veo 3.1), or ~6.7 minutes (HeyGen talking-head only). "Video books" are not feasible with current technology.
- **Premium local TTS is the one viable play** — FishAudio S1 (#1 on TTS-Arena2, 4B params) produces human-quality speech with emotion control, but the full model is cloud-only; the open S1-mini (0.5B) is a quality step down. For production, OpenAI tts-1 + ElevenLabs remains the right choice.

---

## What Has Been Done

### ✅ Fully Operational (Launch-Ready)

| Capability | Provider | Status | Cost | Notes |
|---|---|---|---|---|
| **General TTS** | OpenAI `tts-1` → ElevenLabs → Browser fallback | PRODUCTION | $15/1M chars (OpenAI) | 6 voices, 0.95x speed, Supabase cache |
| **Lesson Narration** | Pre-generated → OpenAI → ElevenLabs | PRODUCTION | Same | Per-lesson chunks in Supabase |
| **Audiobook Chapter TTS** | Cached → OpenAI → ElevenLabs | PRODUCTION | Same | `audiobooks/{slug}/{lang}/{voice}/ch{NNN}.mp3` |
| **Audiobook Text Pipeline** | Project Gutenberg → Supabase | PRODUCTION | $0 | 5 public domain titles, chapter extraction complete |
| **Audiobook Catalog** | Local JSON | PRODUCTION | $0 | Sync loader, all metadata |
| **Translation** | DeepL → Google Translate | PRODUCTION | €5.49/1M chars | 4 launch locales (en/es/zh/pl) |
| **Image Gen (Grok Aurora)** | xAI Cloud | PRODUCTION | Pay-per-use | On-demand educational images |
| **Image Gen (Grok Manifest)** | Pre-generated catalog | PRODUCTION | $0 | `GROK-IMAGE-MANIFEST-NORMALIZED.json` |
| **GPU Scheduler** | RTX 4090 24GB | PRODUCTION | $0 | Time-based VRAM budget, overnight window |
| **Prompt Engine** | Template compiler + safety filter | PRODUCTION | $0 | Blocks nsfw/violent/hateful |
| **Companion System** | GPT-4o-mini chat, mood, greetings | PRODUCTION | ~$0.001/msg | Aria + Kai, multilingual |

### ✅ Wired & Ready (Need API Keys / Batch Run)

| Capability | Provider | Status | Cost | Notes |
|---|---|---|---|---|
| **HeyGen Avatar Videos** | HeyGen API v2 (Avatar III/IV) | READY | $1.00/min (III), $6.00/min (IV) | 7 avatar personas, companion intros filmed, $300 budget = ~300 min |
| **Google Imagen 4** | Gemini API | READY | $0.02–$0.06/img | All aspect ratios, multiple speed tiers |
| **Google Veo 3.1** | Gemini API | READY | $0.10–$0.40/sec | **Max 8 seconds per clip** |
| **Audiobook Translation** | DeepL → Google | READY | Same as translation | Chapter-level i18n |
| **StoryForge Scene Decomp** | Ollama → GPT-4o-mini | READY | ~$0.01/scene | 4 tiers (A: 2–8 min → D: 60–120 min) |
| **StoryForge Interactive** | LLM-powered | READY | Minimal | Vocabulary hotspots + quizzes per scene |
| **Multilingual Media Resolver** | Static mapping | READY | $0 | 11 locales, HeyGen language routing |

### ⚠️ Partial / Broken

| Capability | Issue | Impact |
|---|---|---|
| **StoryForge Music Scoring** | 14 mood mappings defined, NO generation provider | No background music for cinema mode |
| **Generated Media Assets** | Registry EMPTY — all 2,398 assets purged (anatomy artifacts) | `resolveGeneratedLessonMedia()` returns nothing |
| **ComfyUI / Flux Schnell** | Working but produced quality issues | Disabled due to artifact problems |

### ❌ Abandoned / Deprecated

| Capability | Why | Replacement |
|---|---|---|
| **Seedance 2.0** | No API exists — demo-only on ByteDance console | N/A — not viable |
| **Seedance 1.x** | China-only (Volcano Engine), no Western API | N/A |
| **Wan 2.1 I2V** | Deprecated, anatomy artifacts | Replaced by HeyGen + Veo pipeline |
| **Local GPU video gen** | Quality insufficient, character inconsistency | Cloud APIs only |
| **Kokoro-82M for audiobooks** | Marked `active: false`, quality gap vs OpenAI | OpenAI tts-1 |
| **XTTS v2 for audiobooks** | Marked `active: false`, quality gap | OpenAI tts-1 |
| **Helsinki-NLP OPUS** | Marked `active: false`, accuracy gap | DeepL |

---

## The Long-Form Video Problem

### What you need: 30–60 minute coherent "video books"
### What exists in the AI video market (March 2026):

| Provider | Max Duration | Character Consistency | Suitable? |
|---|---|---|---|
| **Google Veo 3.1** | 8 seconds per clip | None across clips | ❌ |
| **Seedance 1.5-pro** | 12 seconds per clip | None across clips | ❌ |
| **Runway Gen-4** | ~10 seconds per clip | Partial (style ref) | ❌ |
| **Kling 2.0** | ~10 seconds per clip | Partial | ❌ |
| **Sora** | ~20 seconds per clip | None across clips | ❌ |
| **HeyGen Avatar** | ~6.7 min (script limit) | ✅ (same avatar) | **Partial** — talking head only, no scenes |
| **Traditional animation** | Unlimited | ✅ (hand-crafted) | ✅ but $10K–$100K+ per episode |

**Hard truth**: No AI video provider can generate 30–60 minute coherent videos with maintained characters, consistent art style, and narrative continuity. The technology doesn't exist. Every provider generates isolated short clips.

### What IS feasible for "video books":

1. **Narrator + illustrated stills** (FEASIBLE NOW)  
   HeyGen avatar narrator reads the story → static Imagen 4 illustrations per scene → slideshow format. This is essentially a "Ken Burns" documentary style.  
   Cost: ~$6–$40 per 30-min book (narrator) + ~$2–$6 images.

2. **Narrator + short animated clips** (FEASIBLE NOW, expensive)  
   Same as above but with 4–8 second Veo clips for key moments.  
   Cost: ~$40–$200 per 30-min book.

3. **Full animated video books** (NOT FEASIBLE)  
   Would require character consistency, scene-to-scene continuity, lip sync, etc.  
   Status: 12–24 months away minimum.

---

## What Goes Behind a "Coming Soon" Gate

### Already Gated in Code

| Feature | Gate | Route |
|---|---|---|
| **Voyager Zero** (spatial runtime) | `isVoyagerZeroPremiumPending()` | `experience-hub` → `/coming-soon` |
| **StoryForge Cinema** | `isStoryForgeCinemaPremiumPending()` | Audiobook library + experience-hub |
| **Classroom Mode** | `isTestingClassroomModeV1Pending()` | Locked |
| **Quick Review** | `isTestingQuickReviewV1Pending()` | Locked |
| **Google Classroom** | `isTestingGoogleClassroomV1Pending()` | Locked |
| **Experience Hub** | `launch-readiness.ts` | → `/coming-soon?feature=experience-hub` |
| **Experience Hub Games** | `launch-readiness.ts` | → `/coming-soon?feature=experience-hub-games` |
| **Science Lab Immersive** | `launch-readiness.ts` | → `/coming-soon?feature=science-lab-immersive` |

### Should Be Added to "Coming Soon"

| Feature | Why | Priority to Build |
|---|---|---|
| **AI Video Books** | Technology doesn't exist yet. No provider can do 30+ min coherent video. | LOW — wait for market to mature (12–24 months) |
| **StoryForge Music** | No generation provider. Could use Suno/Udio API when available. | MEDIUM — nice-to-have ambient scoring |
| **AI-Generated Animations** (per-lesson) | Veo 3.1 can do 8s clips but character consistency is zero. Expensive at scale. | MEDIUM — viable for accent clips, not full lessons |
| **Spatial/VR Mode** | Already gated. Games spec says "Coming Soon 2026." | LOW — not MVP |
| **Multilingual Video** (11 locales) | HeyGen supports it but budget/scale constraints. Start with EN only. | MEDIUM — do 4 launch locales after EN proves out |

---

## Recommended Launch Strategy (March 13)

### Ship with confidence:

1. **TTS narration everywhere** — OpenAI tts-1 primary, ElevenLabs fallback. Already rock-solid.
2. **Audiobooks** — 5 Public Domain titles, chapter text + TTS narration. Working end-to-end.
3. **Static images** — Grok Aurora (cloud) for on-demand, Grok Manifest for pre-generated catalog.
4. **Companion avatars** — Aria & Kai with personality, mood, multilingual greetings. GPT-4o-mini chat.
5. **HeyGen companion intros** — Pre-recorded avatar videos for companion intro sequences.
6. **Google Imagen 4** — Queue up a batch run for lesson illustrations before launch.

### Gate as "Coming Soon":

1. **Video books / AI cinema** — Technology not ready. Gate under StoryForge Cinema (already done).
2. **Per-lesson animated clips** — Veo 3.1 is too short (8s) and too expensive for bulk generation.
3. **AI music scoring** — No provider. Gate under StoryForge Cinema.
4. **Full multilingual video** — Start English-only, expand after validating.

### Phase 2 (Post-Launch, Q2 2026):

1. **HeyGen lesson intro videos** — 30–60s avatar instructor intros per module using $300 budget.
2. **Illustrated storybook format** — Narrator (HeyGen) + Imagen 4 stills as "video books v0.1."
3. **Short accent clips** — Select 2–3 key moments per lesson for 4–8s Veo 3.1 visualizations.
4. **Music mood scoring** — Evaluate Suno API / Udio API when they ship stable APIs.

### Phase 3 (Q3–Q4 2026):

1. **Long-form video** — Reassess market. If a provider ships 60s+ with character consistency, integrate.
2. **Local premium TTS** — Monitor FishAudio S1 open model release (currently S1-mini only). If quality matches OpenAI, swap for $0/unlimited narration.
3. **Full multilingual media** — HeyGen in all 11 locales if unit economics work.

---

## Premium Open TTS Landscape (March 2026)

For the "find a premium quality local model" question:

| Model | Quality | Languages | VRAM | Open Weights? | Viable? |
|---|---|---|---|---|---|
| **FishAudio S1** | #1 TTS-Arena2, 0.008 WER, emotion markers | 13 languages incl. all Koydo locales | N/A (cloud) | ❌ (cloud-only, 4B) | Only via fish.audio API ($) |
| **FishAudio S1-mini** | Good, 0.011 WER | Same 13 languages | ~6–8 GB | ✅ Apache-2.0 (CC-BY-NC weights) | ⚠️ CC-BY-NC license = no commercial use |
| **F5-TTS v1** | Very good, flow-matching | EN/ZH primary | ~4–6 GB | ✅ MIT code, CC-BY-NC weights | ⚠️ Same CC-BY-NC license issue |
| **Kokoro-82M** | Decent, lightweight | 8 languages | ~200 MB | ✅ | Quality gap vs OpenAI tts-1 |
| **XTTS v2 (Coqui)** | Good, voice cloning | 17 languages | ~2 GB | ✅ | Coqui is dead (company folded) |
| **Parler-TTS** | Good, style-controllable | EN primary | ~2 GB | ✅ Apache-2.0 | Limited language support |
| **OpenAI tts-1** (current) | Excellent | All languages | N/A (cloud) | ❌ | ✅ Production choice |

**Bottom line**: The best open TTS models (S1-mini, F5-TTS) use **CC-BY-NC** licensed weights = **cannot be used commercially**. OpenAI tts-1 at $15/1M characters remains the best production option. Monitor FishAudio S1 for a commercial-licensed open release.

---

## Cost Projections (Monthly at Scale)

### Conservative (1,000 MAU, ~50K lesson views/month):

| Service | Usage | Monthly Cost |
|---|---|---|
| TTS (OpenAI tts-1) | ~5M characters | ~$75 |
| Images (Imagen 4) | ~500 on-demand | ~$20 |
| Translation (DeepL) | ~2M characters | ~$11 |
| HeyGen (one-time batch) | 50 min content | ~$50 (one-time) |
| Companion Chat (GPT-4o-mini) | ~10K messages | ~$10 |
| **Total recurring** | | **~$116/month** |

### Aggressive (10K MAU):

| Service | Usage | Monthly Cost |
|---|---|---|
| TTS | ~50M characters | ~$750 |
| Images | ~5,000 | ~$200 |
| Translation | ~20M characters | ~$110 |
| Companion Chat | ~100K messages | ~$100 |
| **Total recurring** | | **~$1,160/month** |

---

## Schema & Codebase Cleanup Needed

| Item | Current State | Action |
|---|---|---|
| `media_generation_jobs.provider` default | `'seedance'` | Should update to `'imagen'` or `'veo'` |
| `seedanceVideo` / `seedanceAnimation` fields in module types | Present but unused | Keep as legacy prompt data (reusable for Veo) |
| `seedance-prompts.ts` | Two prompt builder functions | Keep — prompts are provider-agnostic text descriptions |
| `services/local-tts/` | Full Docker TTS service built | Keep as opt-in dev tool, not production path |
| `GENERATED_MEDIA_ASSETS` | Empty (purged) | Will be repopulated via Imagen 4 / Grok batch |
| `voice-engine.ts` | Already deleted | ✅ Clean |

---

## Summary Decision Matrix

| Media Type | Launch State | Provider | "Coming Soon"? |
|---|---|---|---|
| **Voice narration** | ✅ Ship | OpenAI tts-1 + ElevenLabs | No |
| **Companion chat** | ✅ Ship | GPT-4o-mini | No |
| **Companion intro video** | ✅ Ship | HeyGen pre-recorded | No |
| **Lesson images** | ✅ Ship | Grok Aurora + Imagen 4 | No |
| **Audiobooks (text + audio)** | ✅ Ship | Gutenberg + OpenAI TTS | No |
| **Translation** | ✅ Ship | DeepL | No |
| **Short video clips** | ⏳ Phase 2 | Veo 3.1 (8s max) | **Yes** |
| **AI video books** | ⏳ Phase 3+ | Nothing viable yet | **Yes** |
| **AI music scoring** | ⏳ Phase 2–3 | TBD (Suno/Udio) | **Yes** |
| **Illustrated storybooks** | ⏳ Phase 2 | HeyGen narrator + Imagen stills | **Yes** |
| **Full animated cinema** | ❌ Not feasible | Market not ready | **Yes** |
| **Local premium TTS** | ❌ Blocked | CC-BY-NC licenses | No gate — just not used |
| **Spatial/VR mode** | ❌ Not MVP | N/A | Already gated |
