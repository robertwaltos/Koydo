# Koydo: 1000x Better User Experience Research

## Objective
Design and ship product improvements that compound learner outcomes, parent trust, and retention far beyond baseline educational apps.

## North-Star Metrics
- Weekly Active Learners (WAL)
- 30-day retention by age band
- Lesson completion rate
- Mastery velocity (time to mastery per skill)
- Parent trust score (consent + safety + transparency)
- Subscription conversion and churn

## Highest-Impact Improvement Pillars

### 1) True Personal Tutor Loop (Outcome Multiplier)
- Build a per-learner knowledge graph, not just score history.
- Use error taxonomy (conceptual vs careless vs language comprehension).
- Generate adaptive next-best activity with confidence estimates.
- Trigger micro-remediation within 30 seconds of error detection.

### 2) “Flow State” Learning UX (Engagement Multiplier)
- Keep challenge in the zone: target 70-85% success rate.
- Dynamic hint ladder (visual -> contextual -> worked example).
- Auto-switch modality (story, quiz, simulation, explainer) based on fatigue signals.

### 3) Parent Trust Engine (Trust Multiplier)
- Human-readable “why we asked for this data” on every sensitive action.
- Real-time consent ledger visible to parent.
- One-click DSAR/export/delete workflows with completion SLA.

### 4) Multilingual First-Class Experience (Access Multiplier)
- Not only translation—localize pedagogy examples, units, and context.
- Voice-assisted instructions with accent-robust playback.
- Reading-level adaptation per language.

### 5) Progress Visibility That Motivates (Retention Multiplier)
- Daily mission + streak freeze + achievable weekly goals.
- Skill-tree map with clear prerequisites and mastery confidence.
- Parent digest: “wins, struggles, what to do tonight in 10 minutes.”

### 6) Assessment Quality Uplift (Learning Multiplier)
- Confidence-based answering (student rates certainty).
- Two-stage testing: answer -> explain reasoning.
- Calibrated item bank with difficulty and discrimination tracking.

### 7) Safety + Fairness by Design (Risk Multiplier)
- Automated bias and stereotype linting for generated content.
- Age-safe language filters and policy guardrails per region.
- Escalation path for harmful output or inappropriate recommendations.

### 8) Offline-First Reliability (Adoption Multiplier)
- Full lesson bundles available offline with conflict-safe sync.
- “Never lose progress” guarantee with local snapshots.
- Network-aware adaptive media quality.

### 9) Teacher/Parent Co-Pilot (Impact Multiplier)
- Explainable recommendations: “because the learner missed X and Y.”
- Printable/airdrop practice packs in parent language.
- Intervention playbooks (5-min, 15-min, weekend plans).

### 10) Cost Intelligence Automation (Scale Multiplier)
- Model routing by task value and budget.
- Token budget policy engine with graceful fallback.
- Cache + distilled prompts for recurring educational patterns.

## 90-Day Execution Plan

### Days 1-30 (Quick Wins)
- Add onboarding quality telemetry (drop-offs by step).
- Implement parent digest email MVP.
- Ship confidence-based quiz answers + explanation textbox.
- Add adaptive hint ladder and per-question dwell-time tracking.

### Days 31-60 (Core Differentiation)
- Build learner knowledge graph and mastery confidence model.
- Launch next-best-lesson recommender (with reason codes).
- Add multilingual reading-level adaptation.

### Days 61-90 (Compounding Effects)
- Introduce weekly personalized study plans.
- Add safety/fairness content linting pipeline.
- Release parent/teacher intervention dashboard.

## Experiment Backlog (A/B Ready)
- Hint timing: immediate vs delayed
- Reward cadence: every lesson vs milestone-based
- Lesson length: 5-min micro vs 12-min standard
- Remediation format: video vs simulation vs guided practice
- Parent digest frequency: daily vs 3x weekly

## Technical Enablers Needed
- Feature flags + experiment assignment service
- Event taxonomy and warehouse-ready analytics schema
- Prompt registry with versioning and outcome labels
- Content QA pipeline with automated policy checks
- Model routing layer with dynamic cost/latency policy

## What “1000x Better” Looks Like (Target Outcomes)
- 2x+ 30-day retention
- 30-50% faster mastery on core skills
- 40% reduction in churn from parents
- <1% consent-related support tickets
- AI spend held inside budget while increasing personalization coverage

## Recommended Next Build Items
1. Parent digest pipeline (daily summary + action plan)
2. Knowledge graph schema + mastery confidence service
3. Adaptive hint ladder in quiz engine
4. Experiment framework and feature flags
5. Safety/fairness linting for generated curriculum
