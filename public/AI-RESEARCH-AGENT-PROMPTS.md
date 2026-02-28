# Koydo External AI Research Prompt Pack

Use these prompts with web-enabled AI agents to accelerate curriculum, market, and brand decisions.

## Prompt 1: Full Curriculum Build (Pre-K through Grade 12)

You are an educational research analyst and curriculum architect. Build a complete curriculum blueprint for a global EdTech app serving pre-K through grade 12.

Requirements:
- Cover core subjects: language arts, math (basic + advanced), science (general/biology/chemistry/physics), social studies (US + world), history (worldwide), arts, coding, financial literacy, household management, farming, astronomy, geography, and introductory relativity.
- For each grade band (pre-K, elementary, middle, high school):
  - Define standards-aligned learning objectives.
  - Propose 10 modules per subject, with 10 lessons per module.
  - For each lesson, provide:
    - learning objective
    - activity type (video, interactive simulation, guided practice, quiz)
    - 5 sample questions
    - media suggestions (image/animation/video)
    - mastery criteria.
- Include scaffolding for learners with different levels and multilingual support.
- Produce output as:
  1) curriculum map table
  2) JSON schema for lesson objects
  3) phased rollout plan (MVP, V2, V3).

Constraints:
- Child-safe and culturally inclusive.
- Supports low-bandwidth and offline-first use cases.
- Designed for app-based interaction, not textbook-only instruction.

## Prompt 2: College Entrance Exam Pathways (US + International)

You are a global exam-prep strategist for K-12 EdTech. Build exam prep pathways that integrate into a single learning app.

Tasks:
- Identify major exams by region:
  - US: SAT, ACT, AP
  - UK: GCSE, A-level
  - India: JEE, NEET
  - China: Gaokao
  - Other major national entrance exams worth supporting.
- For each exam:
  - target age/grade
  - tested competencies
  - recommended module prerequisites
  - adaptive study plan structure (8, 12, 24-week versions)
  - diagnostic test + remediation loop design
  - mock exam cadence.
- Recommend data model fields needed to support exam prep analytics.
- Include a monetization-safe approach for subscriptions that remains app-store compliant.

Output:
- Comparative matrix by exam
- Technical implementation checklist
- Priority order for rollout by global demand and implementation effort.

## Prompt 3: Market Differentiation and Competitive Positioning

You are a product strategy lead for EdTech. Analyze how this app can be differentiated from existing platforms.

Platform goals:
- child-friendly, high-engagement lessons
- strong parent/admin oversight
- offline-first and multilingual
- AI-guided personalization
- affordable subscription model.

Tasks:
- Compare against major competitors (Khan Academy, Duolingo, ABCmouse, BYJU'S, Coursera where relevant by segment).
- Identify 5 strongest differentiators we can own and defend for 3+ years.
- For each differentiator:
  - user value statement
  - technical enabler
  - operational risk
  - measurable KPI.
- Recommend a messaging framework for parents, students, and schools.
- Suggest pricing/packaging experiments by region.

Output:
- concise strategy memo
- differentiation scorecard
- 90-day execution roadmap.

## Prompt 4: Global Brand Name Research (No Negative Connotations)

You are a global naming and trademark pre-screen researcher.

Goal:
- Propose a new brand name for an education platform currently using a temporary name.

Requirements:
- Name must imply learning, growth, or self-improvement.
- Must be easy to pronounce in: English, Spanish, French, Arabic, Hindi, Chinese, Japanese, Korean, Russian.
- Avoid negative meanings or awkward sounds in those languages.
- Prefer short, memorable names and likely available domains (`.com`, `.ai`, `.io`).

Tasks:
- Generate 50 candidate names.
- For each candidate provide:
  - meaning/story
  - pronunciation complexity score (1-5)
  - potential linguistic risk flags
  - preliminary trademark collision risk (high/medium/low heuristic)
  - domain availability check guidance steps.
- Shortlist top 10 with strongest global viability.

Output:
- ranked table of 50 candidates
- top-10 recommendation with rationale
- due-diligence checklist before final selection.

## Prompt 5: Product Development Expansion Research

You are a principal engineer + product researcher. Propose the next 12 months of platform evolution for a global K-12 EdTech app.

Include:
- AI tutoring architecture (on-device + cloud hybrid inference)
- privacy-compliant child safety and parental consent workflows
- creator pipeline for rapidly generating high-quality lessons
- teacher/school dashboard requirements
- support/admin operations maturity model
- app store policy compliance checkpoints (Apple + Google).

Deliverables:
- quarter-by-quarter roadmap
- team composition and hiring priorities
- risk register with mitigation plans
- technical debt prevention checklist.

## Prompt 6: Language Learning + Voice Intelligence (Build vs License)

You are a principal architect and market researcher for multilingual EdTech. Produce a production-ready strategy for adding language learning to an existing K-12 platform with live translation, voice recording, pronunciation comparison, and automated grading.

Context:
- Existing stack: Next.js web app, Supabase backend, AI-generated lesson media pipeline.
- Must be extensible and safe for continuous feature expansion.
- Primary users include minors; privacy and compliance are non-negotiable.

Research tasks:
1. Market and product:
  - Identify top 8-12 current trends in language learning UX (2025-2026), including short-form speaking drills, adaptive micro-lessons, and parent/teacher visibility.
  - Map which features are now baseline vs differentiators.
2. Technical architecture:
  - Propose a modular architecture for:
    - real-time and async speech-to-text
    - on-the-fly translation (text + optional speech)
    - pronunciation scoring and feedback
    - voice activity detection, noise handling, and confidence scoring
    - rubric-based speaking grading (fluency, accuracy, prosody, vocabulary, grammar).
  - Include API boundaries, data contracts, and fallback strategy for low bandwidth/offline.
3. Build vs buy decision:
  - Compare at least 6 candidate providers/approaches (cloud APIs + open-source/hybrid).
  - For each: quality, latency, multilingual coverage, pricing model, privacy posture, SDK maturity, and lock-in risk.
  - Recommend what to build in-house vs what to license in each phase.
4. Data and governance:
  - Define data model additions for attempts, recordings, transcripts, scores, and revision history.
  - Include retention, deletion, parental controls, and compliance checks (COPPA/FERPA/GDPR-K where relevant).
5. Rollout:
  - Create a 3-phase rollout (MVP, scale, advanced coaching) with engineering effort estimates.
  - Include KPI framework (activation, completion, speaking score lift, latency, cost per active learner).

Output format:
- Section A: Executive summary (1 page max)
- Section B: Build-vs-buy comparison matrix
- Section C: Reference architecture diagram (ASCII or Mermaid)
- Section D: Implementation backlog (epics -> stories -> acceptance criteria)
- Section E: Risk register + mitigation plan

Constraints:
- Prioritize child-safe defaults and explainability of scores.
- Avoid vendor-specific lock-in where practical.
- Keep recommendations directly implementable for a small-to-mid engineering team.

## Prompt 7: Phase-1 Launch Content Prioritization + Dark Theme UX Calibration

You are a senior EdTech product strategist and UX researcher. Produce a launch-focused plan that prioritizes what content and design changes matter most for Phase 1 release quality.

Context:
- Current platform has large media backlog and a reviewed 200-image sample gate.
- Team wants to ship fast without sacrificing usability.
- Current dark theme has overly drastic contrast and abrupt color shifts.

Tasks:
1. Phase-1 content scope:
  - Define the smallest high-value launch content set for first public release.
  - Prioritize by learner impact, parent trust, and implementation effort.
  - Recommend what to exclude from Phase 1 to reduce launch risk.
2. Content ops model:
  - Propose a repeatable workflow for approving media assets before production use.
  - Include reviewer roles, acceptance criteria, and quality gates.
  - Provide a simple status model (`pending`, `in_review`, `approved`, `rejected`, `needs_regen`).
3. Dark theme refinement:
  - Recommend dark-theme palettes with reduced contrast shock and smoother tonal hierarchy.
  - Define contrast targets for headings/body/buttons (WCAG-aware) without harsh neon transitions.
  - Provide tokenized design guidance (semantic color tokens + elevation/surface rules).
4. Validation:
  - Propose a 2-week validation plan with measurable UX metrics:
    - task completion
    - reading comfort
    - visual fatigue feedback
    - CTA click-through
    - parent/student satisfaction.

Output format:
- Section A: Phase-1 must-have vs defer table
- Section B: Content approval operating model
- Section C: Dark theme token proposal (with example values)
- Section D: 14-day validation plan with KPI targets

Constraints:
- Keep recommendations practical for a small team.
- Must support continuous upgrades without redesigning foundations each month.
