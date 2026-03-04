# Educational Content Enrichment Report

**Generated:** 2026-03-03
**Scope:** Free/OER sources for immediate integration + licensed content for future partnerships
**Current catalog:** 812 modules, 1,629 lessons across STEM, business, humanities, medicine, trades, test prep

---

## Executive Summary

Research identified **60+ educational content sources** containing an estimated **2M+ content items** (questions, lessons, images, textbooks, datasets). Of these:

- **Tier 1 (Free, commercially safe):** 15 sources, ~1.5M items under public domain / CC0 / CC-BY 4.0
- **Tier 2 (Free, share-alike/NC):** 8 sources, ~500K items under CC-BY-NC-SA (usable with attribution)
- **Tier 3 (Licensed/commercial):** 12+ providers requiring partnerships or per-seat licensing
- **Already integrated:** MMLU, MMLU-Pro, MedMCQA, MedQuAD, MedQA, Medical Meadow, CaseHOLD, DataTonic, TheoremQA, EE-MMLU, partial OpenStax

---

## TIER 1: Free, Commercially Safe (Public Domain / CC0 / CC-BY 4.0)

### 1. OpenStax Textbooks (Rice University)
| Field | Detail |
|-------|--------|
| URL | https://openstax.org/ |
| License | **CC-BY 4.0** (most books) |
| Content | 60+ peer-reviewed college textbooks in CNXML/PDF |
| Subjects | Biology, Chemistry, Physics, Anatomy, Microbiology, Astronomy, Algebra, Calculus, Statistics, Economics, Psychology, Sociology, US History, Political Science, Accounting |
| Volume | ~60 full textbooks with exercises, glossaries |
| Format | CNXML (structured XML), PDF, GitHub repos |
| Status | **Partially integrated** (TOC only). Full chapter text, exercises, and glossary terms NOT yet ingested. |
| Priority | **HIGHEST** -- peer-reviewed, adopted by 60% of US higher education |

### 2. NASA Educational Materials & APIs
| Field | Detail |
|-------|--------|
| URL | https://api.nasa.gov/ |
| License | **Public domain** (US Government Work) |
| Content | APOD (10K+ annotated astronomy images), Mars Rover photos (400K+), Earth/EPIC imagery, datasets |
| Subjects | Astronomy, Physics, Earth Science, Climate Science, Space Missions |
| API | REST API, JSON, free key, 1000 req/hr |
| Priority | HIGH -- enriches astronomy-101 through 601, space-missions, climate-science modules |

### 3. Smithsonian Open Access
| Field | Detail |
|-------|--------|
| URL | https://www.si.edu/openaccess |
| License | **CC0** (unrestricted, no attribution required) |
| Content | 4.5M+ images, 3D models, metadata from 19 museums |
| Subjects | Natural History, Art, History, Science, Culture, Anthropology, Aerospace |
| API | Smithsonian API, IIIF image services, bulk downloads |
| Priority | HIGH -- enriches arts, world-history, social-studies, general-science modules |

### 4. Metropolitan Museum of Art Open Access
| Field | Detail |
|-------|--------|
| URL | https://www.metmuseum.org/about-the-met/policies-and-documents/open-access |
| License | **CC0** |
| Content | 492K+ public domain artwork images with metadata |
| Subjects | Art History, World History, Archaeology, Architecture |
| API | REST API (`collectionapi.metmuseum.org`), JSON, GitHub CSV |
| Priority | HIGH -- directly enriches arts-101 through 601 modules |

### 5. Project Gutenberg
| Field | Detail |
|-------|--------|
| URL | https://www.gutenberg.org/ |
| License | **Public domain** |
| Content | 75K+ free ebooks (classic literature, philosophy, history, science) |
| Subjects | Literature, Language Arts, Reading, Philosophy, History |
| API | Gutendex unofficial API (`gutendex.com`) provides JSON REST |
| Status | Partially overlaps with existing epub-generated modules |
| Priority | HIGH -- enriches reading, language-arts, philosophy modules |

### 6. PubMed Central Open Access Subset
| Field | Detail |
|-------|--------|
| URL | https://pmc.ncbi.nlm.nih.gov/tools/openftlist/ |
| License | Per-article: CC0, **CC-BY**, CC-BY-SA (filter for commercial-safe) |
| Content | Millions of full-text peer-reviewed journal articles in JATS XML |
| Subjects | All biomedical/life sciences |
| API | PMC OA Web Service, BioC API, E-Utilities, FTP bulk |
| Priority | HIGH -- enriches medicine, biology, chemistry, neuroscience, public-health modules |

### 7. MedlinePlus (NIH/NLM)
| Field | Detail |
|-------|--------|
| URL | https://medlineplus.gov/ |
| License | **Public domain** (US Government; third-party content may vary) |
| Content | 1,000+ health topics, drug database, medical encyclopedia |
| Subjects | Medicine, Public Health, Pharmacology, Anatomy, Genetics, Nutrition |
| API | MedlinePlus Web Service API (XML/JSON), downloadable XML |
| Priority | MEDIUM -- supplements existing medical modules with patient-facing content |

### 8. NOAA Climate/Weather Data
| Field | Detail |
|-------|--------|
| URL | https://www.ncei.noaa.gov/products |
| License | **Public domain** |
| Content | Climate records, satellite imagery, real-time weather data |
| Subjects | Meteorology, Climate Science, Oceanography, Environmental Science |
| API | Climate Data Online API, real-time weather APIs |
| Priority | MEDIUM -- enriches meteorology, climate-science, oceanography; real-time data for interactive activities |

### 9. USGS Educational Materials
| Field | Detail |
|-------|--------|
| URL | https://www.usgs.gov/educational-resources |
| License | **Public domain** |
| Content | Geologic/topographic maps, satellite imagery, real-time earthquake/water data |
| Subjects | Geology, Geography, Hydrology, Seismology, Environmental Science |
| API | REST APIs for earthquakes, water data, geospatial data |
| Priority | MEDIUM -- enriches geoscience, geography modules; real-time data for activities |

### 10. Library of Congress
| Field | Detail |
|-------|--------|
| URL | https://www.loc.gov/apis/ |
| License | Mostly **public domain** (government-created content) |
| Content | 170M+ items: primary sources, photographs, maps, audio, OCR texts |
| Subjects | US History, World History, Language Arts, Social Studies, Government, Music |
| API | LOC.gov JSON API, IIIF image services |
| Priority | MEDIUM -- enriches social-studies-us, world-history, us-civics modules |

### 11. World Bank Open Data
| Field | Detail |
|-------|--------|
| URL | https://data.worldbank.org/ |
| License | **CC-BY 4.0** |
| Content | Thousands of development indicators across 200+ countries, 30K+ publications |
| Subjects | Economics, International Development, Public Health, Climate, Finance |
| API | REST API (`api.worldbank.org/v2/`), JSON/XML |
| Priority | MEDIUM -- enriches economics, international-business, comparative-politics |

### 12. EPA Environmental Education
| Field | Detail |
|-------|--------|
| URL | https://www.epa.gov/students |
| License | **Public domain** |
| Content | Lesson plans, quizzes, activity books, games |
| Subjects | Environmental Science, Chemistry, Biology, Public Health, Climate |
| Priority | LOW-MEDIUM -- K-12 focused, supplements general-science and climate modules |

### 13. National Park Service
| Field | Detail |
|-------|--------|
| URL | https://www.nps.gov/teachers/ |
| License | **Public domain** (NPS-created content) |
| Content | Common Core-aligned lesson plans, virtual field trips, primary sources |
| Subjects | US History, Geography, Ecology, Social Studies |
| API | NPS Data API (`developer.nps.gov/api/v1/`) |
| Priority | LOW -- supplements geography, us-history modules |

### 14. OSHA Training Materials
| Field | Detail |
|-------|--------|
| URL | https://www.osha.gov/training |
| License | **Public domain** (US Government) |
| Content | Safety training, workplace hazard guides, certification materials |
| Subjects | Electrical safety, construction, HVAC safety, workplace compliance |
| Priority | MEDIUM -- directly enriches trades modules (plumbing, hvac, electrician) |

### 15. SBAC/PARCC Released Assessment Items
| Field | Detail |
|-------|--------|
| URL | Various state education department sites |
| License | **Public domain / CC-BY** (released items) |
| Content | Standards-aligned test questions with metadata (Bloom's level, DOK, standard code) |
| Subjects | Math, ELA, Science (K-12) |
| Priority | HIGH -- validated assessment items with difficulty metadata |

---

## TIER 1 DATASETS: Question Banks (GitHub / Hugging Face)

### Already Integrated
| Dataset | Volume | License | Subjects |
|---------|--------|---------|----------|
| MMLU | 114K MCQs, 57 subjects | MIT | All |
| MMLU-Pro | Extended MMLU | MIT | All |
| MedMCQA | 194K MCQs | Apache 2.0 | Medicine |
| MedQuAD | 47K Q&A pairs | CC-BY 4.0 | Medicine |
| MedQA | 10K USMLE MCQs | MIT | Medicine |
| Medical Meadow | 34K pairs | CC | Medicine |
| CaseHOLD | Legal holdings | CC | Law |
| DataTonic | Legal cases | Open | Law |
| TheoremQA | Math theorems | MIT | Mathematics |
| EE-MMLU | Engineering | MIT | Electrical Engineering |

### Not Yet Integrated (Recommended)
| Dataset | Volume | License | Subjects | Priority |
|---------|--------|---------|----------|----------|
| **AQUA-RAT** | 98K algebra problems w/ rationales | Apache 2.0 | Math | HIGH |
| **GSM8K** | 8.8K grade school math w/ solutions | MIT | Math | HIGH |
| **MATH Dataset** | 12.5K competition math, 5 difficulty levels | MIT | Advanced Math | HIGH |
| **CommonsenseQA** | 12K general knowledge MCQs | MIT | General Science | MEDIUM |
| **PubMedQA** | 273K biomedical MCQs | MIT | Medicine/Biology | HIGH |
| **SciQ** | 13.7K science MCQs w/ support docs | CC-BY-NC 3.0 | Science | MEDIUM |
| **ARC** (AI2 Reasoning Challenge) | 7.7K grade-school science MCQs | CC-BY-SA | Science | MEDIUM |
| **LinkedIn Skill Quizzes** | 1000s professional MCQs, 60+ skills | Public domain | Business/Tech | MEDIUM |
| **Exercism** | 81 programming language tracks | MIT | Coding | HIGH |
| **LeetCode Dataset** | 2.3K problems w/ solutions | MIT | Coding | MEDIUM |
| **APPS** | 10K Python problems, 131K test cases | MIT | Coding | MEDIUM |

---

## TIER 2: Free, Share-Alike / Non-Commercial (CC-BY-NC-SA)

These sources are free to use but require **share-alike** (derivatives must use same license) and/or restrict **commercial use**. Usable for educational platforms with proper attribution and license compliance.

| Source | License | Volume | Subjects | Notes |
|--------|---------|--------|----------|-------|
| **MIT OpenCourseWare** | CC-BY-NC-SA 4.0 | 2,500 courses | All STEM + humanities | Problem sets, exams, lecture notes. NC restriction. |
| **WikiDoc** | CC-BY-SA | 1000s medical articles | 30+ medical specialties | MediaWiki API. Board review materials. |
| **Open University OpenLearn** | CC-BY-NC-SA 4.0 | 1,000+ courses | Broad | Interactive quizzes included. British English. |
| **Yale Open Courses** | CC-BY-NC-SA 3.0 | ~40 courses | Philosophy, History, Finance, Science | Full video transcripts. |
| **WHO Publications** | CC-BY-NC-SA 3.0 IGO | 30K+ documents | Public Health, Epidemiology | IRIS OAI-PMH harvesting. |
| **LibreTexts** | Varies (CC-BY, CC-BY-NC-SA) | 2,000+ textbooks, 240K+ homework elements | 17 subject libraries | Remixable textbooks. |
| **PhET Simulations** | GPL-3.0 (simulations) | 150+ STEM simulations | Physics, Chemistry, Math, Biology | Interactive, embeddable. |
| **Khan Academy** | CC-BY-NC-SA 3.0 (community) | 10K+ videos, 1000s exercises | Math, Science, Econ | API deprecated 2018. Cannot reliably integrate. |

---

## TIER 3: Licensed / Commercial (Future Partnerships)

### Textbook & Curriculum Publishers
| Provider | Content | Licensing Model | Estimated Cost | Priority |
|----------|---------|----------------|----------------|----------|
| **Pearson** | K-12 + higher ed textbooks, MyLab | Per-student annual or content bundle | $5-50/student/year | HIGH |
| **McGraw-Hill** | ALEKS adaptive, Connect platform | Per-student or institutional license | $10-40/student/year | MEDIUM |
| **Wiley "For Dummies"** | 300+ accessible intro titles | Per-title licensing, bulk discount | $500-5K/title | MEDIUM |
| **Cambridge University Press** | Academic textbooks, Cambridge One | Content licensing agreement | Custom | LOW |

### Question Bank & Test Prep Providers
| Provider | Content | Licensing Model | Estimated Cost | Priority |
|----------|---------|----------------|----------------|----------|
| **UWorld** | USMLE, NCLEX, SAT, CPA question banks | Per-user subscription | $50-400/user/year | LOW |
| **Kaplan** | Test prep across SAT, GRE, MCAT, LSAT | Content licensing or co-brand | Custom (typically 6-figure annual) | LOW |
| **ETS** | Official GRE/TOEFL items | Practice test licensing | High (strict IP controls) | LOW |
| **College Board** | Official SAT/AP items | Partnership program | Restrictive | LOW |

### Educational Content Platforms
| Provider | Content | Licensing Model | Estimated Cost | Priority |
|----------|---------|----------------|----------------|----------|
| **Discovery Education** | STEM video, interactives, virtual labs | Per-student, per-school | $3-15/student/year | HIGH |
| **Newsela** | Leveled reading across subjects | School/district license | $5-12/student/year | MEDIUM |
| **BrainPOP** | Animated STEM/social studies lessons | School license; API available | $3-8/student/year | MEDIUM |
| **Harvard Business Publishing** | MBA case studies | Per-case license | $4-15/case | MEDIUM |

### Specialized Domain Content
| Provider | Content | Licensing Model | Notes |
|----------|---------|----------------|-------|
| **UpToDate** | Clinical decision support | Institutional subscription | NOT available for EdTech redistribution |
| **Westlaw/LexisNexis** | Legal research databases | Institutional | NOT available for EdTech |
| **Getty Images Education** | Stock photos/illustrations | Educational licensing | $0.10-2/image educational rate |
| **Shutterstock Education** | Stock media | Annual educational license | $3K-15K/year institutional |

### Media & Visual Content
| Provider | Content | Licensing Model | Priority |
|----------|---------|----------------|----------|
| **Getty Images** | 477M+ images, videos | Educational licensing program | MEDIUM |
| **Shutterstock** | 400M+ images | Annual institutional license | LOW |
| **TED-Ed** | Animated educational lessons | Co-licensing possible | MEDIUM |

---

## Recommended Integration Roadmap

### Phase 1: High-Impact Free Sources (Immediate)

1. **AQUA-RAT + GSM8K + MATH datasets** -- Add 119K math questions with step-by-step solutions across basic-math through advanced-math modules. MIT/Apache licensed. Use existing `ingest-universal-curriculum.mjs` pipeline pattern.

2. **PubMedQA** -- Add 273K biomedical MCQs. MIT licensed. Enriches all 30 medical specialty modules plus biology and chemistry.

3. **Exercism coding tracks** -- Add structured programming exercises across 81 languages. MIT licensed. Enriches coding-101 through 601.

4. **OpenStax full textbook ingestion** -- Parse CNXML to extract chapter content as lesson chunks, end-of-chapter exercises as MCQs, glossary terms as flashcards. CC-BY 4.0. Adds peer-reviewed content for ~60 subjects.

5. **SBAC/PARCC released items** -- Standards-aligned K-12 assessment questions with difficulty metadata.

### Phase 2: Visual & Interactive Enrichment

6. **NASA APOD + Mars Rover API** -- Pull annotated astronomy images and Mars photos to illustrate astronomy, physics, and space mission modules.

7. **Met Museum + Smithsonian APIs** -- Pull curated artworks with metadata to illustrate arts and world history modules. CC0 licensed.

8. **NOAA/USGS real-time data** -- Build interactive activities that use live earthquake, weather, or water data in geoscience and climate modules.

9. **Project Gutenberg literature** -- Systematically chunk classic literature into reading comprehension lessons with auto-generated questions.

### Phase 3: University-Level Content (NC-SA licensed)

10. **MIT OCW problem sets** -- Convert to MCQ/flashcard format for 501/601-level modules. Requires CC-BY-NC-SA compliance.

11. **WikiDoc medical articles** -- Chunk into lesson text for medical specialties. CC-BY-SA compliant.

12. **World Bank economic indicators** -- Build data-driven lessons for economics and international business modules.

### Phase 4: Commercial Partnerships (Future)

13. **Harvard Business Publishing** -- Case studies for MBA modules ($4-15/case)
14. **Discovery Education** -- Video and interactive science ($3-15/student/year)
15. **Wiley "For Dummies"** -- Accessible intro content for 101-level modules

---

## Source Rights Registration

All new sources should be registered in:
- `src/lib/knowledgebase/source-registry.json` -- sourceId, displayName, url, contentType
- `src/lib/knowledgebase/source-rights.json` -- rightsStatus (green/yellow/red), license, attribution requirements, ingestionPolicy

### Recommended rights tiers:
- **Green (safe):** Public domain, CC0, CC-BY 4.0, MIT, Apache 2.0
- **Yellow (review):** CC-BY-SA, CC-BY-NC-SA (share-alike and/or non-commercial constraints)
- **Red (blocked):** Full copyright, proprietary, no redistribution

---

## Estimated Enrichment Impact

| Phase | New MCQs | New Lessons/Chunks | New Images | Investment |
|-------|----------|-------------------|------------|------------|
| Phase 1 | ~400K questions | ~5K lesson chunks | 0 | $0 (free data + eng time) |
| Phase 2 | ~2K questions | ~1K chunks | ~50K images | $0 (free APIs + eng time) |
| Phase 3 | ~10K questions | ~3K chunks | 0 | $0 (free, NC-SA compliance) |
| Phase 4 | ~5K questions | ~2K chunks | ~10K images | $10-50K/year licensing |
| **Total** | **~417K questions** | **~11K chunks** | **~60K images** | **$0-50K** |

This would roughly **double the platform's question bank** and add substantial visual/interactive content across all subject domains.
