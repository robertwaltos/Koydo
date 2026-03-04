# Agent Directions

Last Updated: 2026-03-03

## Non-Negotiable UI Guardrail

- Do not modify landing page or sign-up page background assets or hero/background images without explicit user permission in the current session.
- Allowed without permission: reporting issues, proposing alternatives, and documenting recommendations.
- Not allowed without permission: swapping files, replacing image URLs, changing background-image CSS, or changing visual treatment tied to those background/hero assets.

## Scope Discipline

- Prefer fixes that improve reliability, accessibility, and runtime stability first.
- Keep changes targeted; avoid broad refactors unless directly required by the request.
- Treat `src/lib/games/catalog.ts` as canonical for game inventory and metadata.

## QA Expectations

- Run focused tests after each fix and summarize real pass/fail counts.
- When e2e is flaky, identify the root cause and reduce nondeterminism before updating snapshots.
- Document remaining risks and follow-up items in handoff docs.

---

## Active Work: Content Enrichment & Translation (2026-03-03)

### What Is Happening Now

The engineering agent is executing two parallel workstreams:

**Workstream A — Curriculum Translation (in progress)**
- Translating all 812 modules (320,731 unique strings) into Spanish, Simplified Chinese, and Polish
- Using multi-engine consensus pipeline (dual-OpenAI with verification) via `OPENAI_MEDIA_API_KEY`
- Spanish is ~56% complete; Chinese and Polish queued after Spanish finishes
- Runtime integration is wired — `useTranslatedLesson` hook in `explore-lesson-flow.tsx` fetches and applies translations per user locale
- Translation files land in `public/translations/{locale}/{moduleId}.json`
- 16 additional languages planned after priority 4 (fr, de, ar, hi, ja, ko, ru, pt, it, tr, vi, th, id, uk)

**Workstream B — Free/OER Content Enrichment (starting)**
Integrating free and open-licensed educational datasets to massively expand the curriculum. All sources are public domain, CC0, CC-BY 4.0, MIT, or Apache 2.0 — commercially safe, no licensing fees.

### Detailed Content Being Created

#### New Datasets Being Ingested

| Dataset | Source | License | Volume | Subjects Enriched | Script |
|---------|--------|---------|--------|--------------------|--------|
| **AQUA-RAT** | Hugging Face | Apache 2.0 | 98,000 algebra word problems with step-by-step rationales | basic-math, math, advanced-math (all levels) | `scripts/ingest-math-enrichment.mjs` |
| **GSM8K** | Hugging Face | MIT | 8,800 grade-school math problems with annotated solutions | basic-math-101 through 401 | `scripts/ingest-math-enrichment.mjs` |
| **MATH Dataset** | Hugging Face | MIT | 12,500 competition math problems across 5 difficulty levels | advanced-math-101 through 601 | `scripts/ingest-math-enrichment.mjs` |
| **PubMedQA** | Hugging Face | MIT | 273,000 biomedical multiple-choice questions | medicine (all 30 specialties), biology, chemistry, neuroscience, public-health, nursing | `scripts/ingest-pubmedqa.mjs` |
| **Exercism** | GitHub | MIT | 81 programming language tracks with structured exercises | coding-101 through 601 | `scripts/ingest-exercism.mjs` |
| **CommonsenseQA** | Hugging Face | MIT | 12,000 general knowledge MCQs | general-science, philosophy, psychology | `scripts/ingest-commonsense.mjs` |
| **ARC (AI2 Reasoning Challenge)** | Hugging Face | CC-BY-SA | 7,700 grade-school science MCQs (easy + challenge sets) | science-101 through 401, general-science | `scripts/ingest-arc-sciq.mjs` |
| **SciQ** | Hugging Face | CC-BY-NC 3.0 | 13,700 science MCQs with supporting documents | biology, chemistry, physics, general-science | `scripts/ingest-arc-sciq.mjs` |
| **LinkedIn Skill Quizzes** | GitHub | Public domain | 1,000+ professional/technical MCQs across 60+ skills | business-analytics, digital-marketing, cloud-computing, data-engineering, coding | `scripts/ingest-linkedin-quizzes.mjs` |

#### OpenStax Full Textbook Expansion

Currently only textbook table-of-contents are integrated. Expanding to full content:

| Textbook | Subjects Enriched | Content Extracted |
|----------|-------------------|-------------------|
| Anatomy & Physiology | medicine, biology, nursing | Chapter text → lesson chunks, exercises → MCQs, glossary → flashcards |
| Biology 2e | biology-101 through 601 | Section text, figure captions, review questions |
| Chemistry 2e | chemistry-101 through 601 | Section text, worked examples, end-of-chapter problems |
| College Physics 2e | physics-101 through 601 | Conceptual questions, problems, worked examples |
| Principles of Economics 3e | economics-101 through 601 | Key concepts, self-check questions, review questions |
| Psychology 2e | psychology-101 through 601 | Section summaries, review questions |
| U.S. History | social-studies-us, us-civics, world-history | Primary source excerpts, review questions |
| Introductory Statistics 2e | math (statistics), business-analytics | Practice problems, technology exercises |
| Principles of Accounting | accounting-finance-101 through 601 | Exercises, problems, thought experiments |
| College Algebra 2e | math-101 through 401 | Practice exercises, section reviews |
| Calculus (3 volumes) | advanced-math-301 through 601 | Problem sets, worked examples |
| Microbiology | medicine, biology | Case studies, clinical focus boxes |
| Astronomy 2e | astronomy-101 through 601 | Collaborative group activities, review questions |

Script: `scripts/ingest-openstax-full.mjs`

#### Visual Content from Public Domain APIs (Phase 2)

| Source | License | Content | Enriches |
|--------|---------|---------|----------|
| NASA APOD API | Public domain | 10,000+ annotated astronomy images with expert descriptions | astronomy, physics, space-missions modules — image + alt-text for lesson chunks |
| NASA Mars Rover Photos API | Public domain | 400,000+ Mars surface images with metadata | astronomy, space-missions — interactive exploration activities |
| Met Museum API | CC0 | 492,000 artwork images with artist/period/medium metadata | arts-101 through 601 — visual primary sources for art history lessons |
| Smithsonian Open Access API | CC0 | 4.5M+ images from 19 museums | world-history, social-studies, general-science — visual enrichment |
| USGS Earthquake API | Public domain | Real-time earthquake data (magnitude, location, depth) | geoscience, geography — live data for interactive activities |
| NOAA Climate Data API | Public domain | Historical weather/climate records | meteorology, climate-science — data-driven lesson activities |

Scripts: `scripts/ingest-nasa-media.mjs`, `scripts/ingest-museum-media.mjs`, `scripts/ingest-realtime-data-activities.mjs`

#### Trade & Safety Content

| Source | License | Content | Enriches |
|--------|---------|---------|----------|
| OSHA Training Materials | Public domain | Workplace safety guides, hazard identification, certification prep | electrician-electricity, plumbing, hvac, farming modules |
| EPA Environmental Education | Public domain | Environmental science lesson plans, quizzes, activity guides | climate-science, general-science, farming, gardening |
| NPS Primary Source Sets | Public domain | Common Core-aligned lesson plans with primary sources | us-civics, social-studies-us, geography |

### Expected Final Numbers After Enrichment

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total modules | 812 | ~850-900 | +38-88 new modules |
| Total questions (MCQs) | ~180,000 | ~600,000 | +417,000 questions |
| Total lesson chunks | ~15,000 | ~26,000 | +11,000 chunks |
| Visual assets (images with alt-text) | ~500 | ~50,000+ | +50,000 images |
| Subjects with 1000+ questions | ~12 | ~35+ | More depth per subject |
| Programming languages with exercises | ~5 | ~30+ | Via Exercism tracks |
| Math problems with step-by-step solutions | ~2,000 | ~121,000 | 60x increase |
| Medical specialty MCQs | ~50,000 | ~320,000 | 6x increase |

### Files Being Created/Modified

**New scripts:**
- `scripts/download-enrichment-datasets.py` — Downloads AQUA-RAT, GSM8K, MATH, PubMedQA, CommonsenseQA, ARC, SciQ from Hugging Face
- `scripts/ingest-math-enrichment.mjs` — Processes AQUA-RAT + GSM8K + MATH into math modules
- `scripts/ingest-pubmedqa.mjs` — Processes PubMedQA into medical/science modules
- `scripts/ingest-exercism.mjs` — Processes Exercism tracks into coding modules
- `scripts/ingest-commonsense.mjs` — Processes CommonsenseQA into general knowledge modules
- `scripts/ingest-arc-sciq.mjs` — Processes ARC + SciQ into science modules
- `scripts/ingest-openstax-full.mjs` — Expands OpenStax from TOC to full textbook content
- `scripts/ingest-linkedin-quizzes.mjs` — Processes LinkedIn Skill Quizzes
- `scripts/ingest-nasa-media.mjs` — Pulls NASA APOD + Mars Rover images (Phase 2)
- `scripts/ingest-museum-media.mjs` — Pulls Met + Smithsonian artwork images (Phase 2)

**Modified files:**
- `src/lib/modules/generated/registry.ts` — Will grow from 812 to ~900 modules
- `src/lib/knowledgebase/source-registry.json` — New source entries for each dataset
- `src/lib/knowledgebase/source-rights.json` — Rights tiers (green) for all free sources
- `src/lib/modules/catalog/*.ts` — New module files for each ingested dataset

**Reports:**
- `public/EDUCATIONAL-CONTENT-ENRICHMENT-REPORT.md` — Full research report (already generated)
- `public/EDUCATIONAL-CONTENT-ENRICHMENT-REPORT.json` — Structured data version (already generated)
- `public/MATH-ENRICHMENT-IMPORT-REPORT.json` — Post-ingestion math stats
- `public/PUBMEDQA-IMPORT-REPORT.json` — Post-ingestion medical stats
- `public/EXERCISM-IMPORT-REPORT.json` — Post-ingestion coding stats

### Attribution Requirements

All sources being integrated are free but most require attribution. Attribution is tracked in:
- `src/lib/knowledgebase/source-rights.json` — per-source license and attribution text
- Each module's `sourceAttribution` field in the TypeScript module definition

Standard attribution formats:
- **CC-BY 4.0:** "Content adapted from [Source Name], licensed under CC BY 4.0"
- **MIT/Apache:** "Derived from [Dataset Name] dataset, [License]"
- **Public domain:** "Source: [Agency Name], U.S. Government Work (public domain)"
- **CC0:** No attribution legally required (but provided as courtesy)

### For the Marketing Agent

**Key talking points for marketing updates:**

1. **Scale:** Platform now offers 600,000+ practice questions across 850+ modules — one of the largest free educational content libraries available
2. **Math depth:** 121,000 math problems with step-by-step solutions from grade school through competition level (AQUA-RAT, GSM8K, MATH datasets)
3. **Medical breadth:** 320,000+ medical MCQs covering 30+ specialties — comparable to UWorld/AMBOSS volume but free
4. **Coding practice:** Structured exercises across 30+ programming languages via Exercism integration
5. **Peer-reviewed content:** OpenStax textbook integration — the same peer-reviewed content adopted by 60% of US colleges
6. **Visual learning:** 50,000+ curated images from NASA, Smithsonian, and Metropolitan Museum of Art — all public domain
7. **Multilingual:** Full curriculum available in English, Spanish, Simplified Chinese, and Polish with AI-powered consensus translation (14 more languages coming)
8. **Sources:** Content sourced from NASA, NIH, Smithsonian, Metropolitan Museum of Art, Library of Congress, Rice University (OpenStax), MIT, and leading open research datasets
9. **All free, all legal:** Every source is public domain, CC0, or CC-BY 4.0 — no licensing fees, commercially safe
10. **Trade education:** OSHA-sourced safety training materials for electrician, plumbing, and HVAC modules

**Subject areas with the biggest enrichment:**
- Mathematics: 2K → 121K questions (60x)
- Medicine: 50K → 320K questions (6x)
- Coding: 5 languages → 30+ languages
- Science: basic coverage → 21K+ validated MCQs
- Arts/History: text-only → 50K+ visual primary sources
- General knowledge: minimal → 12K commonsense reasoning questions

**Content quality signals for marketing:**
- Peer-reviewed (OpenStax)
- Exam-validated (MedMCQA from AIIMS/JIPMER exams, PubMedQA from biomedical literature)
- Government-authoritative (NASA, NIH, OSHA, USGS, NOAA, Smithsonian)
- Community-proven (Exercism: 500K+ learners, MMLU: standard AI benchmark)
- Multi-engine translated with consensus verification (not raw machine translation)
