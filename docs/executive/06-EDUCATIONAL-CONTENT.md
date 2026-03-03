# 06 — Educational Content & Assets

> **Curriculum Catalog, Content Pipeline & Media Production**  
> Confidential · Executive Summary Document

---

## Executive Summary

Koydo's educational content library encompasses **706 curriculum modules** across **88 subject tracks**, spanning 6 education stages from Pre-K through Adult Professional Development. The content pipeline is powered by automated tooling for curriculum validation, EPUB-to-module generation, AI audiobook production, and a global knowledgebase ingestion system drawing from 8+ countries' official curriculum frameworks. All content achieves a **100/100 quality score** with zero validation errors across the entire catalog.

---

## 1. Curriculum Scale

### Content Inventory

| Metric | Count |
|--------|-------|
| **Total Modules** | 706 |
| **Subject Tracks** | 88 |
| **Depth Levels** | 6 (101 → 201 → 301 → 401 → 501 → 601) |
| **Capstone Modules** | 8 interdisciplinary |
| **EPUB-Generated Modules** | 131 |
| **Interactive Games** | 46 unique titles + 19 stubs |
| **Quiz Checkpoints** | 368 advanced (8 questions each) |
| **Total Advanced Quiz Questions** | 2,944 |
| **Validation Status** | 585 validated, 0 errors, 0 warnings |

### Education Stages

| Stage | Grade Band | Module Levels |
|-------|-----------|--------------|
| Pre-K | Ages 3–5 | 101 |
| Elementary | Grades K–5 | 101–201 |
| Middle School | Grades 6–8 | 201–301 |
| High School | Grades 9–12 | 301–401 |
| College/University | Post-secondary | 401–501 |
| Adult Professional | Career development | 501–601 |

---

## 2. Subject Coverage

### Track Families

| Family | Tracks | Examples |
|--------|--------|---------|
| **STEM & Technology** | 20+ | AI/ML, Coding, Cybersecurity, Data Science, Robotics, Quantum Computing |
| **Engineering & Trades** | 12+ | Civil, Electrical, HVAC, Plumbing, Renewable Energy |
| **Medical & Health** | 8+ | Medicine, Nursing, Neuroscience, Public Health, Nutrition Science |
| **Business & Professional** | 14+ | Entrepreneurship, Project Management, Finance, Marketing, Law |
| **Humanities & Social Sciences** | 10+ | Philosophy, Psychology, World History, International Relations |
| **Sciences** | 10+ | Biology, Chemistry, Physics, Astronomy, Meteorology, Oceanography |
| **Arts & Communication** | 5+ | Arts, Music Theory, Music Production, Language Arts |
| **Computing Platforms** | 3 | Linux, macOS, Windows |
| **Exam Preparation** | 8 | SAT, GRE, IELTS, TOEFL, JEE/NEET, GCSE, IB, GAOKAO |

### Module Quality Tiers

| Tier | Version | Count | Description |
|------|---------|-------|-------------|
| **Gold Standard** | 2.0.0+ | ~25 | Rich content, authored activities, answer explanations |
| **Production Quality** | 1.1.0 | ~50 | Content chunks, flashcards, interactive activities |
| **Draft** | 1.0.0 | ~100+ | Template scaffolds — auto-hidden via `status: "draft"` |
| **EPUB Generated** | 1.0.0 | 131 | Auto-generated from academic textbooks |

> **Note**: Draft (v1.0.0) modules are automatically filtered from the public catalog. Users only see production-quality and gold-standard content.

---

## 3. Curriculum Expansion History

### Delivery Waves (2026)

| Wave | Tracks Added | Modules Added | Cumulative Total |
|------|-------------|--------------|------------------|
| Baseline | 68 tracks × 4 levels | 321 | 321 |
| Wave 1 | 5 new tracks (AI Safety, Data Engineering, Climate Science, Neuroscience, Media Literacy) | +20 | 341 |
| Wave 2 | 5 new tracks (Distributed Systems, Public Health, Negotiation, Sustainability, Ethics of Tech) | +20 | 361 |
| Wave 3 | 5 new tracks (Quantum Computing, Space Engineering, Oceanography, International Relations, Sports Science) | +20 | 381 |
| Specialization (501/601) | 8 tracks × 2 levels | +16 | 397 |
| Capstones | 4 interdisciplinary | +4 | 401 |
| Completion | 5 new tracks | +20 | 421 |
| Extended Capstones | 4 more | +4 | 425 |
| Specialization Tranches 1–5 | 60+ tracks × 2 levels | +160 | 585 |
| Quiz Enrichment | — | 1,440 new questions | 585 |

### Quality Standards

| Criterion | Requirement | Status |
|-----------|------------|--------|
| Module quality score | ≥ 95 average | ✅ 100 average |
| Validation errors | 0 | ✅ 0 errors |
| Validation warnings | 0 | ✅ 0 warnings |
| Lessons per level | ≥ 6 | ✅ All compliant |
| Checkpoint assessments per level | ≥ 2 | ✅ All compliant |
| Advanced quiz questions (501/601) | ≥ 8 per checkpoint | ✅ All compliant |

---

## 4. EPUB Content Pipeline

### Overview

Automated pipeline that converts academic EPUB textbooks into Koydo learning modules:

```
EPUB Library → Scan → Academic Scoring → Module Generation → Registry Sync
```

### Pipeline Commands

| Step | Command | Output |
|------|---------|--------|
| Scan EPUBs | `npm run epub:scan` | `epub-catalog.json` |
| Score academically | `npm run epub:analyze` | `epub-educational-picks.json` |
| Generate modules | `npm run epub:generate` | `.ts` module files in catalog |
| Register modules | `npm run modules:sync` | Updated module registry |

### Academic Scoring

Books scored 0–100 based on:
- **+5** per academic keyword (textbook, fundamentals, study guide)
- **+15** for known academic publishers (Cambridge, Oxford, Springer, Pearson)
- **−4** per fiction signal (novel, fantasy, thriller)
- Threshold: **≥ 65** required for module generation

**Current yield**: 131 modules generated from academic EPUB library.

---

## 5. Knowledgebase Sourcing

### Global Curriculum Sources

| Country | Source | Status |
|---------|--------|--------|
| United Kingdom | National Curriculum (gov.uk) | ✅ Indexed |
| Australia | ACARA | ✅ Indexed |
| Singapore | MOE Syllabuses | ✅ Indexed |
| India | NCERT + CBSE | ✅ Indexed |
| New Zealand | NZ Curriculum (TKI) | ✅ Indexed |
| Canada (Ontario) | Ontario Curriculum | ✅ Indexed |
| South Africa | CAPS Resources | ✅ Indexed |
| Kenya | KICD Curriculum | ✅ Indexed |

### Open Course Transcript Sources

| Source | License | Status |
|-------|---------|--------|
| Open Yale Courses | Open license with transcripts | ✅ Green |
| NPTEL (India) | Open transcripts | ✅ Green |
| MIT OpenCourseWare | Open-licensed | ✅ Green |
| OpenLearn (Open University UK) | Many modules with transcripts | ✅ Green |

### Ingestion Pipeline

Full automated pipeline with quality gates:

```
Rights Gate → Harvest → Queue → Ingest → PDF Extract → Coverage → Quality Gate → Manifest → Lesson Pack
```

One-command execution: `npm run knowledgebase:pipeline:full`

### Source Rights Policy

Traffic-light compliance system:
- **Green**: Open license + transcript access + automation allowed
- **Yellow**: Transcript available but restricted — manual approval required
- **Red**: No rights or anti-scraping restrictions — do not ingest

---

## 6. AI Audiobook Production

### Public-Domain Audiobook Pipeline

AI-generated audiobooks from verified public-domain texts (Project Gutenberg):

| Step | Description |
|------|-------------|
| Rights verification | Catalog entry must have `rightsStatus: "public_domain_verified"` |
| Queue jobs | `npm run audiobooks:queue:public-domain` |
| TTS generation | `node scripts/process-audio-jobs.mjs` |
| Delivery | `GET /api/audiobooks/public-domain` |

### Titles Pending Rights Verification

10 classic works queued for rights confirmation:

| Title | Author | Status |
|-------|--------|--------|
| Don Quixote | Cervantes | Pending verification |
| Frankenstein | Shelley | Pending verification |
| Rights of Man | Paine | Pending verification |
| The Federalist Papers | Hamilton/Madison | Pending verification |
| On the Origin of Species | Darwin | Pending verification |
| Metaphysics | Aristotle | Pending verification |
| The Prince | Machiavelli | Pending verification |
| Dr Jekyll and Mr Hyde | Stevenson | Pending verification |
| Principal Writings on Religion | Hume | Pending verification |
| Decline and Fall of the Roman Empire | Gibbon | Pending verification |

---

## 7. Language Learning System

### Architecture

Modular, provider-swappable system supporting translation, pronunciation grading, and gamification:

| Component | Providers |
|-----------|----------|
| Translation | DeepL → Google Translate → pre-seeded cache |
| Pronunciation | Licensed assessment → AI-based fallback |
| Gamification | Badges, levels, daily/weekly quests |

### Budget Controls

| Constraint | Limit |
|-----------|-------|
| Total AI spend per active learner/month | ≤ $0.05 |
| LLM spend per active learner/month | ≤ $0.008 |
| Hard monthly LLM cap | $300 |
| Low ASR confidence threshold | < 0.70 → practice-only mode |

### Learner-Facing Surfaces

- **Speaking Lab** (`/language/speaking-lab`) — pronunciation workspace
- **Learner Dashboard** — language progress panel with CTA
- **Parent Dashboard** — per-learner language progress cards
- **Billing** — language plan comparison + upgrade entry

---

## 8. Interactive Games

### Game Portfolio

**46 unique interactive educational games** integrated into the lesson experience, plus 19 additional stubs in development:

| Category | Description |
|----------|-------------|
| Letter/word games | Spelling, vocabulary building, letter recognition |
| Math games | Number operations, pattern recognition, geometry |
| Science games | Lab simulations, classification, systems thinking |
| Assessment games | Quiz variations, flashcard challenges, timed tests |
| Creative games | Art-based activities, music composition elements |

### Gamification Engine

| Component | Status |
|-----------|--------|
| `ExperienceProvider` + `useExperience()` | ✅ Complete |
| `useGameResult()` hook | ✅ Complete |
| `JuicyConfetti` celebration | ✅ Complete |
| `AchievementToast` | ✅ Complete |
| `MascotHost` (AI mascot tracker) | ✅ Complete |
| `LevelProgressBar` / `BadgeGallery` / `StreakCalendar` | ✅ Complete |
| Physics-based UI (Phase 2) | Pending |
| Global Classroom Milestones (Phase 3) | Pending |

---

*Document generated from Koydo educational content documentation. For curriculum questions, contact the content team.*
