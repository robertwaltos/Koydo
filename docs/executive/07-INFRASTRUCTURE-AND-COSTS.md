# 07 — Infrastructure & Costs

> **Hosting, Services, Media Generation Economics & API Operations**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo's infrastructure combines cloud-hosted services (Supabase, Vercel, Stripe, RevenueCat) with a local GPU-accelerated media production pipeline (FORGE engine running on an RTX 4090). The platform architecture is designed for cost efficiency: free-tier users never hit paid APIs, media generation uses local GPU first with cloud fallback, and content is cached aggressively. The StoryForge Cinema pipeline can convert **500 children's books into interactive films for ~$613** and the full 75,000-book Gutenberg catalog for under $190,000.

---

## 1. Core Infrastructure

### Service Stack

| Service | Purpose | Pricing Model |
|---------|---------|--------------|
| **Supabase** | PostgreSQL database, Auth, Storage, RLS | Free tier → Pro ($25/mo) |
| **Vercel** | Web hosting, CDN, static export | Free tier → Pro ($20/mo) |
| **Stripe** | Web payments, subscriptions, invoicing | 2.9% + $0.30 per transaction |
| **RevenueCat** | Native IAP management, subscription analytics | Free tier → $0.01/MTR |
| **Upstash Redis** | Rate limiting (sliding window) | Pay-per-use ($0.20/100K commands) |
| **GitHub** | Source control, CI/CD (Actions) | Free for public repos |

### Production Environment

| Component | Configuration | Status |
|-----------|--------------|--------|
| Database | Supabase PostgreSQL (managed) | ✅ Operational |
| Authentication | Supabase Auth (JWT, session management) | ✅ Operational |
| File Storage | Supabase Storage (media, audiobooks) | ✅ Operational |
| CDN | Vercel Edge Network (global) | ✅ Operational |
| Web Hosting | Vercel (static export) | ✅ Operational |
| Rate Limiting | Upstash Redis (production) | ❌ Needs configuration |
| Analytics | Mixpanel (consent-gated) | ✅ Configured |

---

## 2. FORGE Media Engine

### What is FORGE?

**F**ederated **O**utput **R**endering & **G**eneration **E**ngine — Koydo's unified media production layer for audio, images, video, and translated text.

### Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Tier-gated** | Free users NEVER hit paid APIs — only pre-recorded/cached content |
| **Cache-first** | Every generation checks Supabase Storage before API calls |
| **GPU-aware** | VRAM limits enforced by time of day |
| **Provider fallback** | Ranked chains with cost-free options at the bottom |

### Provider Fallback Chains

| Capability | Provider Chain |
|-----------|---------------|
| Text-to-Speech | OpenAI → ElevenLabs → Browser SpeechSynthesis (free) |
| Translation | DeepL → Google Translate → Pre-seeded cache (free) |
| Image Generation | ComfyUI/Flux local ($0) → Pre-generated assets ($0) |
| Video Generation | Wan 2.1 I2V local ($0) → Pre-generated assets |
| LLM Inference | Ollama local ($0) → Cloud APIs (paid tier only) |

### GPU Scheduler

Local RTX 4090 (24 GB VRAM) with time-based scheduling:

| Window | Hours | VRAM Budget | Use Case |
|--------|-------|-------------|----------|
| **Daytime** | 08:00–01:00 | 15 GB | Interactive work, small models (Flux fp8) |
| **Overnight** | 01:00–08:00 | 24 GB | Heavy batches, fp16, large models |

### Local LLM (Ollama)

| Time | Model | VRAM |
|------|-------|------|
| Daytime | `llama3.1:8b-q8_0` | ~8 GB |
| Overnight | `llama3.1:70b-q4_K_M` | ~24 GB |

---

## 3. StoryForge Cinema — Cost Analysis

### Pipeline Architecture

```
Gutenberg Text → LLM Scene Decomposition → Image + TTS + Music → Interactive Film Assembly
```

### Recommended Suppliers (Best Quality:Cost Ratio)

| Component | Supplier | Cost |
|-----------|----------|------|
| **LLM** (scene decomposition) | Gemini 1.5 Flash | $0.075/M input, $0.30/M output |
| **Images** (keyframes) | Google Imagen 4 Fast | $0.02/image |
| **Video** (animated clips) | ByteDance Seedance 1 Lite @ 720p | $0.036/sec |
| **TTS** (narration) | Google Cloud Neural2 | $16/M characters |
| **Music** (scores) | Udio Standard | ~$0.01/track |

### Cost Projections

| Scope | Books | Total Cost | Per Book |
|-------|-------|-----------|----------|
| **Tier A**: First 100 children's books | 100 | **$129.75** | $1.30 |
| **Tier B**: All children's books | ~500 | **$612.75** | $1.23 |
| **Tier C**: Full Gutenberg catalog | ~75,000 | **$188,512** | $2.51 |

### Maximum Savings (Self-Hosted GPU)

Using RTX 4090 for images + Google Standard TTS:

| Scope | Cost |
|-------|------|
| 100 Children's Books | **$42** |
| 500 Children's Books | **$199** |
| Full 75,000 Catalog | **$60,262** |

### Production Timeline

| Phase | Scope | Timeline |
|-------|-------|----------|
| Phase 1 | 5 pilot books (manual QA) | 1–2 weeks |
| Phase 2 | 100 children's books | 2–4 weeks |
| Phase 3 | Remaining ~400 children's books | 4–6 weeks |
| Phase 4 | 8,000 classic novels | 3–6 months |
| Phase 5 | Full 75,000 catalog | 6–12 months |

---

## 4. AI Budget Controls

### Per-Learner Cost Caps

| Constraint | Limit |
|-----------|-------|
| Total AI spend per active learner/month | ≤ $0.05 |
| LLM spend per active learner/month | ≤ $0.008 |
| Hard monthly LLM cap (organization-wide) | $300 |

### Cost Mitigation Strategies

| Strategy | Impact |
|----------|--------|
| Cache-first for all generated content | Eliminates repeat API calls |
| Free users use pre-seeded content only | Zero API cost for free tier |
| GPU-local generation for images/video | ~$0.003/image vs $0.02 cloud |
| Model routing by task value | Cheap models for simple tasks |
| Prompt distillation for recurring patterns | Reduced token usage |

---

## 5. API Operations

### Scale

| Metric | Value |
|--------|-------|
| Total API route handlers | 117 |
| Rate-limited mutation routes | All POST/PUT/PATCH/DELETE |
| Rate limiter backend | Upstash Redis (production) |

### Rate Limiting Tiers

| Route Category | Limit | Window |
|---------------|-------|--------|
| Billing webhooks | 300 req | 60s |
| Payment mutations | 60 req | 60s |
| AI/media generation | 40 req | 60s |
| General API mutations | 120 req | 60s |

### Database Tables (Key)

| Table | Purpose |
|-------|---------|
| `user_profiles` | User accounts, admin flags, preferences |
| `student_profiles` | Child learner profiles under family accounts |
| `subscriptions` | Subscription status, provider, period dates |
| `learning_progress` | Module/lesson completion tracking |
| `pronunciation_attempts` | Language lab grading records |
| `gamification_states` | XP, levels, badges, streaks |
| `stripe_webhook_events` | Idempotent webhook deduplication |
| `organizations` | B2B institutional accounts |
| `organization_licenses` | Per-seat licensing |
| `device_push_tokens` | Push notification registration |

---

## 6. Third-Party Service Costs (Monthly Estimates)

### Estimated Monthly Operating Costs at Scale

| Service | Free Tier Limit | Post-Free Pricing | Est. at 10K users |
|---------|----------------|-------------------|-------------------|
| Supabase | 500MB DB, 1GB storage | $25/mo (Pro) | $25–$75 |
| Vercel | 100GB bandwidth | $20/mo (Pro) | $20–$50 |
| Upstash Redis | 10K commands/day | $0.20/100K commands | $5–$20 |
| RevenueCat | 2,500 MTR | $0.01/MTR above | $0–$75 |
| Stripe | — | 2.9% + $0.30/txn | Transaction-based |
| Mixpanel | 20M events/mo | $28/mo (Growth) | $28–$100 |
| **Total infrastructure** | — | — | **~$100–$350/mo** |

> **Note**: AI API costs (OpenAI, ElevenLabs, DeepL) are paid-tier only and scale with active premium users, capped at $0.05/user/month.

---

## 7. Production Readiness Checklist

| Item | Status | Impact |
|------|--------|--------|
| Supabase production database | ✅ Pass | Core data |
| Supabase Auth + RLS | ✅ Pass | Security |
| Stripe keys configured | ✅ Pass | Web billing |
| Admin approval enforcement | ✅ Pass | Access control |
| Debug flags disabled | ✅ Pass | Security |
| Parent consent system | ✅ Pass | COPPA |
| **Upstash Redis rate limiting** | **❌ Fail** | **Launch blocker** |

### Action Required

Configure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` environment variables in the production runtime before launch to enable Redis-backed rate limiting.

---

*Document generated from Koydo infrastructure documentation. For infrastructure questions, contact the engineering team.*
