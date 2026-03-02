# Koydo 12-Week Product Roadmap

Last Updated: 2026-03-02  
Owner: Product + Engineering

## Codex-1 Continuity Contract (2026-03-02)

- Active owner for execution: `Codex-1`
- Assignment scope: complete all open roadmap + backlog + handoff tasks until all gates below are green.
- Resume protocol after interruption:
  1. Review this section first.
  2. Review `PRODUCT-BACKLOG-EPICS.md` (`Codex-1 Assignment Lock` section).
  3. Review `ORGANIZATION-BACKEND-API.md` (`Codex-1 Handoff Ownership` section).
- Update protocol after each completed task:
  1. Add/update the dated `Status update` on the affected epic in `PRODUCT-BACKLOG-EPICS.md`.
  2. Update affected handoff status in `ORGANIZATION-BACKEND-API.md` when organization/billing/reporting scope changes.
  3. Update the 10/10 gate score below.

### 10/10 Green Gate Scoreboard

| Gate | Status | Current evidence snapshot |
| --- | --- | --- |
| Required CI + Security checks | GREEN | `validate`, `semgrep`, `detect-secrets`, `dast-zap-baseline`, `dependency-audit-prod` passing on `master` |
| Production deployment health | GREEN | `koydo.vercel.app` currently points to a Ready production deployment |
| Curriculum validation | GREEN | Latest validation report shows 0 errors, 0 warnings |
| Exam prep track coverage | GREEN | Coverage report shows `12/12` tracks, `100%` completion |
| Organization backend handoff API surface | GREEN | Core/invites/provisioning/reporting routes present and active |
| Billing hardening and webhook safety | IN_PROGRESS | Stripe + RevenueCat hardening landed; continued verification in progress |
| Parent/teacher access hardening | IN_PROGRESS | Major role/consent guardrails shipped; roadmap work still open |
| Store receipt verification (Apple/Google) | RED | `/api/receipt/verify/apple` and `/api/receipt/verify/google` still return `501` placeholder mode |
| Knowledgebase domain health | IN_PROGRESS | Backlog still lists critical growth areas (`gardening`, `food-science`) |
| External import + telemetry automation | IN_PROGRESS | External import currently zero-source; telemetry learning-events report is skipped |

### Gate Summary

- Green: `5/10`
- In progress: `4/10`
- Red: `1/10`

### Codex-1 Completion Log

- `2026-03-02`:
  - Synced to latest `master` while preserving concurrent agent changes.
  - Fixed companion feature regressions that were breaking CI/Security on upstream commits:
    - exported `FriendId` for `experience-hub` typing usage;
    - added detect-secrets allowlist pragmas for non-secret HeyGen `introVideoId` values;
    - fixed `DeviceGatewayProvider` WebXR typing (`navigator.xr`) for TypeScript build stability.
  - Verified fresh green checks on head `0dca89b`:
    - CI run `22595590199`: success
    - Security Scans run `22595590145`: success

## Principles

- Pricing matrix and curriculum research remain source of truth.
- RevenueCat is the near-term billing control plane; matrix-to-package mapping must stay contract-tested.
- Content quality, rights compliance, and learner outcomes take priority over feature breadth.
- Any future in-house billing platform must be buildable inside Koydo first, then separable as a standalone SaaS product.

## Outcome KPIs (12-week targets)

- `D30 retention`: +20% from current baseline.
- `Weekly active learners`: +30%.
- `Practice -> paid conversion`: +15%.
- `Mean time to first value` (first mastery gain): < 15 minutes.
- `Tutor grounded-answer rate` (with citations): >= 98%.
- `Rights-compliant audiobook coverage`: >= 95% of queued catalog.

## Sprint Plan (Week-by-week)

| Week | Focus | Milestones | Exit Criteria |
|---|---|---|---|
| 1 | Mastery graph foundations | Skill-node schema, prerequisite edges, importer from module graph | Graph coverage >= 90% of active modules |
| 2 | Diagnostic placement v1 | Adaptive diagnostic flow + initial mastery state | Placement finishes in <= 12 min and writes mastery profile |
| 3 | Error-log remediation loop | Wrong-answer capture -> remediation queue | >= 80% of new errors mapped to remediation tasks |
| 4 | Spaced repetition scheduler | Daily review queue + interleaving rules | Daily queue generated for all active learners |
| 5 | Citation-grounded tutor | "Ask this lesson/book" with evidence snippets | All tutor answers include source reference or explicit uncertainty |
| 6 | Tutor quality harness | Hallucination/accuracy scoring + safety thresholds | Failing prompts blocked from rollout |
| 7 | Audiobook workflow | Chapter playback + checkpoint quiz + progress sync | End-to-end listen -> quiz -> mastery update works |
| 8 | Parent/teacher dashboards | Mastery heatmaps + risk alerts + intervention list | Teacher/parent surfaces available for pilot cohort |
| 9 | Assignment builder | Skill-graph-based assignment composer | Teacher can generate and assign graph-based sets |
| 10 | Offline pack + sync | Download bundle, local attempts, conflict resolution | Core learner loop works offline and syncs cleanly |
| 11 | Cohorts and challenges | Study circles, weekly league scaffolding | Cohort challenge loop available in beta |
| 12 | Creator pipeline pilot | Submission, review rubric, publish gate | At least 3 reviewed creator packs in staging |

## Epics Mapped to Your Feature Set

1. Adaptive mastery map with prerequisites  
2. Spaced repetition + interleaving scheduler  
3. Citation-grounded AI tutor and contradiction checks  
4. Error-log auto-remediation engine  
5. Placement diagnostics and dynamic pathing  
6. Audiobook mode + comprehension checkpoints  
7. Grounded "Ask this lesson/book" Q&A  
8. Teacher/parent dashboards + alerts  
9. Assignment builder from content graph  
10. Offline packs + sync  
11. Cohort challenges / study groups / leagues  
12. Creator submission + review pipeline  
13. AI quality-eval harness (accuracy/hallucination)  
14. Rights/provenance compliance pipeline  
15. Knowledge graph search backbone
16. StoryForge Cinema — public-domain book-to-film pipeline  
17. Voyager Zero — spatial computing & 8K ecosystem (Phases 1–5 complete)

## Long-Term (Post-content priority): In-house RevenueCat-compatible Platform

### Initiative

`Project Atlas Billing` (last-priority initiative, starts only after content-scale milestones are stable).

### Why

- Variable-fee reduction at high scale.
- Shared billing core across future Koydo apps.
- Option to productize as external SaaS.

### Non-negotiable requirements

- API and behavior compatibility with current RevenueCat-backed app flows.
- Dashboard parity: offerings, entitlements, packages, customer history, webhook observability.
- Multi-app and multi-tenant support.
- Webhook reliability, replay, idempotency, and audit logs.
- Export/import path for migration from RevenueCat.
- Architecture boundary so the module can run embedded in Koydo or as standalone deployment.

### Phased execution (after primary roadmap)

1. `Spec & compatibility`: define API contracts mirroring current app expectations.
2. `Core services`: products/offerings/entitlements/customer records.
3. `Store adapters`: Apple/Google server notification ingestion.
4. `Dashboard`: operator tools with logs and manual overrides.
5. `Migration`: dual-write/shadow-read with RevenueCat before cutover.
6. `Standalone packaging`: separate deployable service + tenant onboarding.

---

## Long-Term: StoryForge Cinema (`E-16`)

### Initiative

`StoryForge Cinema` — public-domain book-to-film pipeline. Converts literary classics into
interactive, narrated, comprehension-gated short films. Extends E-06 (Audiobook) beyond
audio into full cinematic experiences.

### Pipeline

```
Gutenberg text → Scene decomp (LLM) → Imagen 4 keyframes → Veo 3.1 clips
    → TTS narration → Music AI score → Interactive layer → 360° VR (Tier 3)
```

### Phase 1 titles (public domain ✅)

- *The Velveteen Rabbit* (2–8 min, Tier A)
- *Peter Pan* (2–8 min, Tier A)
- *Alice’s Adventures in Wonderland* (15–30 min, Tier B)
- *The Wonderful Wizard of Oz* (15–30 min, Tier B)
- *Aesop’s Fables* (1–3 min micro-films × 20, Tier A)

### FORGE capabilities required

| Capability | Module | Status |
|---|---|---|
| `audiobook.text` | `forge/audiobooks/chapter-text-service.ts` | production ✅ |
| `audiobook.tts` | `forge/audiobooks/audiobook-tts-service.ts` | production ✅ |
| `image.google-imagen` | `forge/media/google-ai-client.ts` | ready — needs batch script |
| `video.google-veo` | `forge/media/google-ai-client.ts` | ready — needs batch script |
| `storyforge.scene-decomp` | `forge/storyforge/scene-decomp.ts` | **planned** |
| `storyforge.music-score` | `forge/storyforge/music-score.ts` | **planned** |

### Cost estimate (Phase 1, 5 titles, avg 20 scenes/title)

| Line item | Qty | Unit cost | Total |
|---|---|---|---|
| Imagen 4 Fast (1 image/scene) | 100 | $0.02 | **$2** |
| Veo 3.1 Fast (6 sec/scene) | 100 | $0.60 | **$60** |
| OpenAI TTS (avg 500 chars/scene) | 100 | ~$0.008 | **$0.80** |
| LLM scene decomp (gpt-4o-mini) | 100 scenes | ~$0.002 | **$0.20** |
| **Phase 1 total** | | | **~$63** |

Full 50-title catalog at same rate: **~$630**

---

## Long-Term: Voyager Zero (`E-17`) — Spatial Computing & 8K Ecosystem

### Initiative

Transform the Experience Hub from a 4K web app into a PhD-level, 8K-native Spatial Computing
Ecosystem. Fully device-gated — all spatial features dormant until hardware passes capability checks.

### Phase completion (from `implementation_plan.md.resolved`)

| Phase | Description | Status |
|---|---|---|
| 1 | WebXR & Spatial Initialization (`SpatialExperienceHub`) | ✅ DONE |
| 2 | Advanced Shaders & Particle Engine (`SpatialParticles`, 15k+) | ✅ DONE |
| 3 | AI Socratic Tutors (`SocraticTutor`) | ✅ DONE |
| 4 | Volumetric 3D Asset Pipeline (`VolumetricModel`, `useGLTF`) | ✅ DONE |
| 5 | Adaptive Device Capability Gateway (`DeviceGatewayProvider`) | ✅ DONE |
| 6 | StoryForge Cinema (book-to-film) | ⬜ Tracked as E-16 |

### Remaining work before production

1. Wire `DeviceGatewayProvider` into `experience-hub/page.tsx` as the conditional mount wrapper
2. Replace simulated tier detection with real WebXR probe + GPU memory query
3. Add `navigator.getBattery()` thermal downscale for mobile
4. Build "Upgrade Path" animated UI for Tier 0/1 users (shows what’s unlocked on better hardware)
5. Remote streaming fallback detection (Chromecast, AirPlay, DLNA)

### Device tier gate

| Tier | Condition | Features |
|---|---|---|
| 0 — Minimal | No WebGL2, low memory | HTML/CSS only, no canvas |
| 1 — Standard | WebGL1, < 4GB GPU | 4K + CSS animations |
| 2 — Enhanced | WebGL2, 4–8GB GPU | Three.js, particles (reduced), LOD models |
| 3 — Immersive | WebGPU or 8GB+ GPU / XR headset | 8K, 15k+ particles, WebXR, Socratic AI |
- Owner: Codex agent (this thread)
- Scope claimed:
  - Full 100-400 completion ownership for established and expansion tracks, including all delivered wave closures.
  - Post-401 specialization ownership (501/601 delivered across baseline and newly added track families).
  - Full interdisciplinary capstone ownership (all proposed capstone families delivered).
  - Ongoing ownership of module-flow hardening, quiz depth, and capstone defense alignment across these tracks.
- Primary files in active scope (latest specialization tranche):
  - `eduforge-web/src/lib/modules/catalog/*-501.ts` and `eduforge-web/src/lib/modules/catalog/*-601.ts` (catalog-wide specialization closure across all tracks).
  - `eduforge-web/src/lib/modules/catalog/capstone-*-501.ts` and `eduforge-web/src/lib/modules/catalog/capstone-*-601.ts`.
  - `eduforge-web/CURRICULUM-EXPANSION-PROPOSALS-2026.md`
  - `eduforge-web/PRODUCT-BACKLOG-EPICS.md`
- Current status:
  - Curriculum sync and validation are green after catalog-wide specialization closure: `npm run modules:sync` -> 715 modules; `npm run curriculum:validate` -> 585 modules, 0 errors, 0 warnings.
  - Module-level 101-401 coverage remains fully closed and expanded: 88/88 tracks complete.
  - Post-401 specialization closure is now complete: 88/88 tracks include both 501 and 601 modules.
  - Advanced assessment-depth hardening is complete: every 501/601 checkpoint quiz now contains 8 questions (2,944 total advanced checkpoint questions across 368 quizzes).
  - Automated depth-regression guard is in place: `npm run curriculum:advanced-quiz-depth:check` validates minimum 8-question coverage for all 501/601 quizzes.
  - Curriculum quality report remains strong (average score 100, 0 medium-priority modules, 0 no-interactive flags).
- Coordination request to other agents:
  - Do not modify files listed in this ownership scope without explicit coordination in handoff docs.
  - Route overlap proposals through this handoff update section first.
- Ownership window: active until explicitly released in a follow-up handoff update.
