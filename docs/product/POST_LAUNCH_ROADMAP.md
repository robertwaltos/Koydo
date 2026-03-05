# KOYDO — Post-Launch Feature Roadmap

> Distilled from ChatGPT & Gemini industry research (Top-100 EdTech platforms, 95 unique features)
> Cross-referenced with: PRODUCT-ROADMAP-12-WEEK, PRODUCT-BACKLOG-EPICS, executive roadmap
> Last Updated: 2026-03-05

---

## Feature Gap Analysis Summary

**Industry standard features (95 identified across top 100 platforms):**
- Already built in Koydo: **~67 features** (70%)
- High-priority gaps (implement pre-launch): **8 features**
- Post-launch Phase 1 (months 1-3): **9 features**
- Post-launch Phase 2 (months 4-6): **6 features**
- Post-launch Phase 3 (months 7-12): **5 features**

---

## ALREADY BUILT — No Action Required

These features are fully implemented and functional:

| # | Feature | Koydo Implementation |
|---|---------|---------------------|
| 1 | Structured course/lesson modules | 821 modules, v4.0.0 format (6 video + 2 interactive + 2 quiz) |
| 2 | Video lessons | Chunk-based video player with playback controls |
| 3 | Interactive exercises | Visual activities, drag-drop, MCQ with immediate feedback |
| 4 | Readings and articles | Module text content with embedded media |
| 5 | Downloadable resources | Mission prep print button, worksheet exports |
| 6 | Offline mode | Airplane mode with lesson pack downloads |
| 7 | Multilingual content and UI | English + Spanish with language switcher |
| 8 | Concept maps / skill trees | Knowledge graph, mastery map, galaxy map |
| 9 | Simulations / virtual labs | Science Lab with 6 tracks, 100+ educational games |
| 10 | Audio-first lessons | Speaking Lab, audiobook library with TTS |
| 11 | Auto-graded quizzes | Visual quiz with immediate scoring |
| 12 | Practice question sets | Repeatable drills per module/topic |
| 13 | Timed tests / exam simulation | Full exam simulator with pacing |
| 14 | Adaptive assessment | AI placement diagnostic with CAT-like behavior |
| 15 | Placement tests | Multi-stage onboarding diagnostic |
| 16 | Item explanations / worked solutions | AI follow-up with step-by-step reasoning |
| 17 | Flashcards | Visual flashcards with mastery states per lesson |
| 18 | Spaced repetition scheduling | AI review queue with forgetting curve optimization |
| 19 | Error-based remediation | Error log → auto-remediation engine → worksheets |
| 20 | Personalized learning paths | AI-generated curriculum sessions |
| 21 | Goal setting (daily/weekly) | Daily goal XP setting in preferences |
| 22 | Personalized recommendations | AI recommendations API, recommended lessons |
| 23 | Difficulty calibration | Stage-based content gating, adaptive difficulty |
| 24 | Microlearning lessons | Bite-sized 3-chunk video lessons |
| 25 | Retrieval practice loops | Flashcard reviews, quiz repetition |
| 26 | Interleaving (mixed practice) | Interleaving scheduler in mastery system |
| 27 | Mastery gating | Prerequisite tracking in knowledge graph |
| 28 | Competency dashboards | Parent analytics, student dashboard, mastery map |
| 29 | Contextual scaffolding | AI tutor with Socratic hints, progressive hints |
| 30 | Personal learning profile | Multi-learner profiles with preferences |
| 31 | Accessibility supports | Reduced motion, high contrast, sound prefs, WCAG targets |
| 32 | Points/XP | Full XP system with accumulation |
| 33 | Levels | Level = 1 + floor(points/100), level-up celebrations |
| 34 | Streaks | Daily + weekly streak tracking with calendar UI |
| 35 | Badges/achievements | Badge gallery with 12+ badge types, sharing |
| 36 | Timed challenges | Speed rounds in educational games |
| 37 | Quests/missions | Mission prep system, quest-based progression |
| 38 | Avatars and customization | 5 mascot companions (Pixel, Echo, Spark, Terra, Luna) |
| 39 | Reward stores / unlockables | Reward Realm game tier, season pass |
| 40 | Daily quests / streak freezes | Streak freeze badges earned at 7-day milestones |
| 41 | Celebration UX | Confetti, achievement toasts, level-up cards |
| 42 | Asynchronous assignments | Teacher class management with assignments |
| 43 | Parent/guardian access | Full parent portal with analytics, compliance, reports |
| 44 | Notifications (push/email/SMS) | Notification bell, push notifications, email digests |
| 45 | AI tutor chat (Socratic-style) | AI tutor panel with grounding, scaffolding |
| 46 | AI-generated practice | AI remediation worksheets from error patterns |
| 47 | AI feedback on writing | AI content analysis API |
| 48 | AI study planning | Weekly study plan generation |
| 49 | AI summarization / study guides | AI-generated study materials |
| 50 | Voice recognition / pronunciation | Speaking Lab with recorder and pronunciation grading |
| 51 | Cross-device sync | Cloud-first with Supabase, works on any device |
| 52 | Progress reports | Parent reports, admin reports, weekly digests |
| 53 | Completion certificates | Mastery badges and achievement certificates |
| 54 | Grades and feedback portal | Testing results with domain breakdown |
| 55 | Calendar + due dates | Exam scheduling, assignment deadlines |
| 56 | Announcements stream | Notification inbox, admin alerts |
| 57 | Anti-cheat signals | Moderation system, content safety checks |
| 58 | Progressive mastery states | Attempted → familiar → proficient → mastered |
| 59 | Badging/certification of mastery | Badge gallery with earned-at tracking |
| 60 | OCR problem solving | AI analyze endpoint for content |
| 61 | Step-by-step math solving | AI follow-up with step decomposition |
| 62 | Content moderation | AI moderation with closed fail-mode for children |
| 63 | Formative assessment dashboards | Admin reports, parent analytics per child |
| 64 | Offline synchronization | Airplane mode with local cache + cloud sync |
| 65 | SEL integrations | Calm moment links, adventure activities, mascot friends |
| 66 | Narrative/avatar progression | Experience hub with mascot journey |
| 67 | Virtual economies | XP economy feeding levels and unlockables |

---

## HIGH PRIORITY — Implement Before Launch

These are industry-standard features users expect that we're missing:

### HP-1: Note-Taking System
**Gap**: No in-app note-taking tied to lessons
**Industry**: Coursera, Udemy, Khan Academy all offer lesson-linked notes
**Implementation**: Note panel in lesson player + notes library page
**Impact**: High retention, study tool expectation

### HP-2: Bookmarks / Favorites
**Gap**: No way to save/bookmark lessons, modules, or games for quick access
**Industry**: Universal across all platforms (Quizlet, Coursera, Udemy, etc.)
**Implementation**: Bookmark button on modules/lessons + saved items page
**Impact**: Core navigation UX, reduces friction for return visits

### HP-3: Search Across All Content
**Gap**: Module search exists but no unified global search
**Industry**: Universal — search across lessons, games, modules, exams
**Implementation**: Global search in top nav with multi-type results
**Impact**: Critical navigation feature, especially at 821+ modules

### HP-4: Study Timer / Focus Mode
**Gap**: No Pomodoro-style focus timer or study session tracking
**Industry**: Yeolpumta, Forest, Elevate — highly popular in education apps
**Implementation**: Focus timer widget + session tracking
**Impact**: Habit formation, time-on-task visibility for parents

### HP-5: Leaderboards
**Gap**: No competitive ranking system
**Industry**: Duolingo leagues, Kahoot rankings, Quizizz — core engagement driver
**Implementation**: Weekly XP leaderboard with opt-in leagues
**Impact**: Major retention driver, social competition

### HP-6: Discussion / Q&A per Lesson
**Gap**: No way for learners to ask questions about specific lessons
**Industry**: Brainly, Coursera, Udemy — Q&A threads per lesson
**Implementation**: Simple Q&A thread on each module/lesson page
**Impact**: Peer support, reduces support tickets

### HP-7: Study Plan Calendar View
**Gap**: AI generates plans but no visual calendar interface
**Industry**: Khan Academy, Coursera — calendar-based study planning
**Implementation**: Calendar view of assigned/recommended lessons with due dates
**Impact**: Time management, completion rates

### HP-8: Certificate Download / Export
**Gap**: Badges exist but no downloadable/shareable completion certificates
**Industry**: Coursera, edX, Udemy — PDF certificates with verification
**Implementation**: Generate PDF certificate on module/exam completion
**Impact**: Motivation, portfolio building, parent satisfaction

---

## PHASE 1 — Post-Launch (Months 1-3)

### P1-1: Live Multiplayer Quiz Games
Real-time quiz competitions with host/join mechanics (Kahoot-style).
Leverage existing game engine + WebSocket for live state sync.

### P1-2: Peer Review Workflows
Students evaluate each other's work using rubrics.
Builds critical thinking, reduces teacher grading load.

### P1-3: Collaborative Workspaces
Shared digital boards for group projects (Padlet-like).
Enables project-based learning for school/org accounts.

### P1-4: AI Role-Play / Simulations
Conversational AI scenarios for language practice, interview prep, historical dialogues.
Extend existing AI tutor with role-play prompts.

### P1-5: Highlighting and Annotations
Mark up readings, PDF exports, and module content.
Active reading support for text-heavy modules.

### P1-6: Skill Portfolio / Learning Profile
Public-facing profile showing completed modules, mastery levels, badges.
Shareable URL for parents/teachers/employers.

### P1-7: Daily Challenge System
One challenge per day across different subjects.
Existing daily-challenge-card.tsx component → wire to actual challenge content.

### P1-8: Glossary / Key Terms
In-context definitions and concept lookup within lessons.
Auto-generated from module metadata.

### P1-9: Microcredentials / Stackable Pathways
Short credentials (e.g., "Algebra Foundations") that ladder into larger ones.
Extend existing badge system with credential tracks.

---

## PHASE 2 — Growth (Months 4-6)

### P2-1: Direct Messaging (Moderated)
1:1 or small-group messaging between learners in same class/org.
Requires COPPA-compliant moderation layer for child accounts.

### P2-2: Peer Tutoring / Matching
Connect learners who mastered topics with those who need help.
Incentivize with XP bonus for tutoring.

### P2-3: AI Content Authoring for Teachers
Tools for educators to build custom modules and quizzes using AI.
Revenue driver for B2B institutional sales.

### P2-4: Interactive Whiteboard / Canvas
Spatial reasoning tool, annotation, collaborative drawing.
Useful for math problem solving and science diagrams.

### P2-5: Career Pathways / Role-Based Tracks
Map skills to career outcomes (e.g., "Data Analyst track").
Relevant for teen and adult learner segments.

### P2-6: Adaptive Polling / Live Quick Checks
Real-time classroom polling for teacher-led sessions.
Supports school/org use case.

---

## PHASE 3 — Scale (Months 7-12)

### P3-1: Full VR/AR Simulations (Voyager Zero)
Extended reality for science labs, historical exploration, spatial learning.
Already spec'd in PRODUCT-BACKLOG-EPICS E-17.

### P3-2: Blockchain-Verified Credentials
Tamper-proof certificates for professional and academic use.
Integration with LinkedIn, Credly.

### P3-3: Advanced Learning Analytics / AI Insights
Predictive analytics for at-risk learners, churn prediction.
ML pipeline from xAPI events.

### P3-4: Creator Submission Pipeline
Community-contributed modules with review/approval workflow.
Already spec'd in PRODUCT-BACKLOG-EPICS E-15.

### P3-5: Multi-Language Expansion
Expand beyond EN/ES to FR, PT, DE, ZH, AR, HI.
Leverage existing translation API infrastructure.

---

## Cross-Reference with Existing Roadmaps

| Existing Epic | Status | Roadmap Alignment |
|--------------|--------|-------------------|
| E-01 Adaptive mastery map | GREEN | Already built |
| E-02 Spaced repetition + interleaving | GREEN | Already built |
| E-03 Citation-grounded AI tutor | GREEN | Already built |
| E-04 Error-log auto-remediation | GREEN | Already built |
| E-05 Placement diagnostics | GREEN | Already built |
| E-06 Audiobook mode | GREEN | Already built |
| E-07 Teacher/parent dashboards | GREEN | Already built |
| E-08 Assignment builder | GREEN | Already built |
| E-09 Offline packs + sync | GREEN | Already built |
| E-10 Cohort challenges | GREEN | Maps to P1-1 (Live Quiz) |
| E-11 Knowledge graph | GREEN | Already built |
| E-15 Creator pipeline | GREEN (spec) | Maps to P3-4 |
| E-16 StoryForge Cinema | GREEN (spec) | Already built (basic) |
| E-17 Voyager Zero | GREEN (spec) | Maps to P3-1 |

---

## Competitive Intelligence Notes

Features that appear in research but we should **NOT** publicly disclose as planned:
- AI content authoring (P2-3) — competitive advantage
- Blockchain credentials (P3-2) — surprise differentiator
- VR/AR integration (P3-1) — already spec'd but don't telegraph timeline
- Creator marketplace (P3-4) — network effects, don't tip off competitors
- Predictive analytics / at-risk detection (P3-3) — enterprise selling point

---

## Success Metrics

| Metric | Current | Post-Phase 1 Target | Post-Phase 2 Target |
|--------|---------|--------------------|--------------------|
| D30 Retention | Baseline | +20% | +35% |
| Weekly Active Learners | Baseline | +30% | +50% |
| Time-on-Platform (daily) | Baseline | +25% | +40% |
| Module Completion Rate | Baseline | +15% | +25% |
| Parent Satisfaction (NPS) | Baseline | 60+ | 70+ |
