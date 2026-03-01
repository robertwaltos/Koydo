# Curriculum State For External AI Agents

Generated: 2026-03-01T07:43:42.728Z

## Current Snapshot

- Modules: 259
- Lessons: 2909

### Module Coverage By Subject

- Exam Prep: 12
- Accounting and Finance: 4
- Advanced Math: 4
- AI & Machine Learning: 1
- AI and ML: 3
- AI Workflows: 1
- Science: 8
- Arts: 4
- Astronomy: 4
- Math: 5
- Mathematics: 6
- Biology: 5
- Biotechnology: 1
- Business: 44
- Chemistry: 5
- Engineering: 7
- Civil Engineering: 3
- Computer Science: 3
- Cloud Computing: 1
- Coding: 5
- Computer Architecture: 3
- Cybersecurity: 4
- Data Science: 3
- Digital Marketing: 1
- Power Systems: 3
- Trades: 3
- Electricity: 3
- Entrepreneurship: 1
- Farming: 4
- Financial Literacy: 5
- Gardening: 1
- General Science: 6
- General Relativity: 4
- Geography: 5
- Household Management: 4
- HVAC: 3
- Language Arts: 10
- Law: 4
- Operating Systems: 3
- Medicine: 4
- Meteorology: 3
- Circuit Design: 2
- Microelectronics: 3
- Music: 6
- Network Engineering: 1
- Nursing: 4
- Philosophy: 1
- Physics: 5
- Plumbing: 3
- Basic Math: 1
- Reading: 2
- Social Studies US: 5
- Social Studies World: 5
- World History: 1
- Project Management: 4
- Psychology: 1
- Renewable Energy: 3
- Robotics: 3
- Social Studies: 1
- UX Design: 1
- History Worldwide: 4

### Module Coverage By Grade Band

- mixed: 111
- 11-12: 114
- 3-5: 3
- 6-8: 3
- 9-10: 3
- preK: 25

## External Source Merge Context

- External schema loaded: true
- External sample loaded: true
- External docs folder: ../External_AI_Agents

## Required Contribution Contract

```json
{
  "format": "JSON",
  "encoding": "UTF-8",
  "topLevel": {
    "version": "string",
    "modules": "LearningModule[]",
    "notes": "string[]"
  },
  "learningModuleShape": {
    "id": "string (kebab-case, unique)",
    "title": "string",
    "description": "string",
    "subject": "string",
    "tags": "string[]",
    "minAge": "number",
    "maxAge": "number",
    "localeSupport": "string[]",
    "lessons": "Lesson[] (minimum 10 recommended per module)"
  },
  "lessonShape": {
    "id": "string (module-id-lNN pattern recommended)",
    "title": "string",
    "type": "video | interactive | quiz",
    "duration": "number (minutes)",
    "metadata": "object (optional, must stay JSON-serializable)",
    "learningAids": "LearningAid[] (optional)",
    "questions": "Question[] required for type=quiz"
  },
  "questionShape": {
    "id": "string",
    "text": "string",
    "skillId": "string",
    "options": "array of >=2 options",
    "correctOptionId": "string matching option id",
    "hint": "string (optional)",
    "explanation": "string (optional)"
  },
  "contentQualityExpectations": [
    "No placeholder options like 'Option A/B/C'.",
    "Age-appropriate language and culturally neutral examples.",
    "At least one learning aid per lesson when possible.",
    "Include en and es text variants where possible in metadata or companion fields.",
    "Include media prompts (video/animation/image) in lesson metadata when available."
  ],
  "techStackTargets": {
    "frontend": "Next.js 16 App Router + React 19 + TypeScript",
    "styling": "Tailwind CSS v4 + CSS variables",
    "backend": "Supabase Postgres + Row Level Security + Next.js route handlers",
    "analytics": "Mixpanel + internal progress/event APIs",
    "mediaPipeline": "Seedance-style prompt packs + admin queue + background processors"
  }
}
```

## Prompt: Curriculum Expansion

```text
You are contributing curriculum content to an existing Next.js + TypeScript + Supabase app. Expand the provided curriculum state using the required JSON contract exactly. Deliver complete module payloads with realistic lesson content (not placeholders). Prioritize balanced coverage across all subjects and grade bands. For each lesson include actionable instructional content, quality quiz items, and media prompt metadata. Ensure multilingual readiness: include English and Spanish content variants where feasible. Return valid JSON only. Do not include markdown wrappers.
```

## Prompt: Organic Theme Research

```text
Research modern educational UI themes where visual elements blend organically and transitions feel natural. Context: Existing app keeps current visual language, but needs a more flowing, living, non-rigid design system. Deliver: 1) 8-12 concrete visual directions with rationale and references, 2) typography, color, spacing, and motion tokens for each direction, 3) accessibility implications (contrast, motion sensitivity, readability), 4) implementation notes for Next.js + Tailwind CSS variable-driven theming, 5) sample CSS variable palettes and component interaction patterns. Avoid dark-only or purple-heavy defaults. Keep recommendations production-implementable.
```

## Notes

- Respond in strict JSON for curriculum payloads.
- Keep data compatible with `src/lib/modules/schema.ts` validation.
- Use lesson-level realism and avoid placeholders.
- Prefer content that can run on low-bandwidth/offline-friendly pathways.