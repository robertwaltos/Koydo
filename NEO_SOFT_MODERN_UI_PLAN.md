# Neo-Soft + Modern UI Integration Plan

Date: 2026-02-21

## Progress Snapshot

Implemented in this pass:

- U1 token foundation shipped in `src/app/globals.css`
  - depth, radius, motion, and focus tokens
  - theme-pack-aware soft shadow tuning
  - shared `ui-soft-*` utility classes
- U2 primitives added:
  - `src/app/components/ui/soft-card.tsx`
  - `src/app/components/ui/soft-button.tsx`
  - `src/app/components/ui/soft-tab-bar.tsx`
  - `src/app/components/ui/progress-chip.tsx`
- U2/U4 wiring applied:
  - `src/app/modules/page.tsx`
  - `src/app/modules/[moduleId]/page.tsx`
  - `src/app/dashboard/page.tsx`
- U3 interaction upgrades applied:
  - animated lesson tab bar in `src/app/lessons/[lessonId]/lesson-experience.tsx`
  - 3D flip flashcards with reduced-motion fallback in `src/app/lessons/[lessonId]/lesson-flashcards.tsx`
  - richer quiz option feedback states in `src/app/lessons/[lessonId]/quiz.tsx`

Verification:

- `npm run lint` passed
- `npm run build` passed

Additional implementation pass:

- U3/U4 lesson surface migration:
  - `src/app/lessons/[lessonId]/lesson-experience.tsx` now uses `SoftCard` for learn/interactive/media panel shells
  - chunk selector buttons now include focus-ring + pressed state semantics
  - lesson tab content uses motion-safe panel enter animation (`.lesson-tab-panel` in `src/app/globals.css`)
- Accessibility hardening on interactive components:
  - `src/app/lessons/[lessonId]/interactive-activity.tsx`
  - `src/app/lessons/[lessonId]/typed-interactive-activity.tsx`
  - status messages use `role="status"` and controls now share `ui-focus-ring` + `ui-soft-button` patterns
- Quiz accessibility + polish pass:
  - `src/app/lessons/[lessonId]/quiz.tsx` now uses consistent focus-ring buttons/links, `aria-pressed` options, and live status updates
- Lesson tab information architecture improvement:
  - `src/app/lessons/[lessonId]/lesson-experience.tsx` now shows per-tab counts (chunks, cards, activities, quiz items, media aids)
- Lesson shell modernization:
  - `src/app/lessons/[lessonId]/page.tsx` now uses `SoftCard` hero shell + summary chips for subject/duration
- Motion accessibility activation:
  - `src/lib/theme/provider.tsx` now maps `prefers-reduced-motion` to `data-motion="reduced"` and listens for OS changes
- Navigation + account/auth/support rollout:
  - `src/app/components/top-nav.tsx`
  - `src/app/components/theme-controls.tsx`
  - `src/app/components/language-switcher.tsx`
  - `src/app/auth/sign-in/page.tsx`
  - `src/app/auth/sign-up/page.tsx`
  - `src/app/auth/sign-in/oauth-buttons.tsx`
  - `src/app/support/page.tsx`
  - `src/app/support/support-client.tsx`
  - `src/app/account/settings/page.tsx`
  - `src/app/account/settings/settings-client.tsx`
  - `src/app/account/privacy/page.tsx`
  - `src/app/account/privacy/privacy-client.tsx`
- Parent experience rollout:
  - `src/app/parent/dashboard/page.tsx`
  - `src/app/parent/reports/page.tsx`
  - `src/app/parent/reports/parent-reports-client.tsx`
  - `src/app/parent/compliance/page.tsx`
  - migrated parent routes to shared `SoftCard` + `ProgressChip` language
  - added clearer parent status/summary chips and softer hierarchy on report/compliance surfaces
  - aligned parent empty/error states with the same accessibility and focus-ring patterns
- Exam prep surface rollout:
  - `src/app/exam-prep/page.tsx`
  - `src/app/exam-prep/error-log/page.tsx`
  - `src/app/dashboard/recommended-lesson.tsx`
  - aligned exam discovery and remediation cards with shared `SoftCard` and `ProgressChip` primitives
  - standardized CTA buttons to `ui-soft-button` + `ui-focus-ring` patterns
  - preserved existing remediation/error logic while improving hierarchy and readability
- Public + legal surface rollout:
  - `src/app/page.tsx`
  - `src/app/legal/privacy/page.tsx`
  - `src/app/legal/terms/page.tsx`
  - `src/app/legal/refunds/page.tsx`
  - unified landing/legal sections on `SoftCard` structure and shared chip metadata presentation
  - replaced legacy bordered link blocks with consistent pill-button interactions
- Secondary surface and edge-state rollout:
  - `src/app/science-lab/page.tsx`
  - `src/app/science-lab/apple-vision-lab.tsx`
  - `src/app/modules/[moduleId]/not-found.tsx`
  - `src/app/lessons/[lessonId]/not-found.tsx`
  - `src/app/components/theme-toggle.tsx`
  - aligned capability/readiness and not-found states with shared soft cards and focus-safe button styles
- Admin operations surface rollout:
  - `src/app/admin/overview/page.tsx`
  - `src/app/admin/reports/page.tsx`
  - `src/app/admin/reports/reports-client.tsx`
  - `src/app/admin/compliance/page.tsx`
  - `src/app/admin/compliance/compliance-admin-client.tsx`
  - upgraded admin KPI cards, queue health panels, and DSAR/report controls to shared card/button/focus patterns
  - added summary chips for backlog/stale/failure visibility at page header level
- Additional admin route alignment:
  - `src/app/admin/audit/page.tsx`
  - `src/app/admin/costs/page.tsx`
  - `src/app/admin/operations/page.tsx`
  - `src/app/admin/operations/operations-console.tsx`
  - unified access-denied, header, and section-shell styling with soft-card system across these routes
- Admin content-ops shell alignment:
  - `src/app/admin/curriculum/page.tsx`
  - `src/app/admin/curriculum/curriculum-client.tsx`
  - `src/app/admin/media/page.tsx`
  - `src/app/admin/media/media-ops-client.tsx`
  - migrated repeated section shells to shared `ui-soft-card` surfaces
  - standardized high-frequency refresh/export controls to focus-safe soft-button styles
- Alerting + lesson-media adjunct alignment:
  - `src/app/admin/alerts/page.tsx`
  - `src/app/admin/alerts/alerts-client.tsx`
  - `src/app/lessons/[lessonId]/video-lesson-player.tsx`
  - `src/app/lessons/[lessonId]/lesson-animation-preview.tsx`
  - aligned alerts controls/summaries and lesson media blocks with same soft-card/button/focus system
- Legacy utility cleanup sweep completed:
  - normalized remaining legacy control styles across auth, billing, support, account, parent-consent, dashboard, legal, curriculum/media/reports admin clients, and lesson adjunct surfaces
  - removed remaining `border-black/*`, `bg-zinc-50`, and legacy dark utility carryovers in migrated routes
  - updated impacted files to tokenized `border-border`, `bg-surface`, `bg-surface-muted`, `ui-soft-button`, and `ui-focus-ring` patterns
  - re-validated all changes with `npm run lint` and `npm run build`
- Added automated guardrail for future tranches:
  - `scripts/ui-style-audit.mjs`
  - npm script: `npm run ui:audit:styles`
  - report outputs: `public/UI-STYLE-AUDIT-REPORT.md` and `public/UI-STYLE-AUDIT-REPORT.json`

## Objective

Blend the best external UI ideas into the current EduForge app by creating a child-friendly design language between:

- soft neumorphism (tactile, organic, playful depth)
- clean modern layout (clear hierarchy, readable, fast, accessible)

This plan keeps the existing architecture and progressively upgrades tokens, components, and lesson interactions.

## Sources Reviewed

- `External_AI_Agents/lumiq-design-system.html`
- `External_AI_Agents/Grok UI recommendations.docx`
- `External_AI_Agents/EdTech Curriculum and UI Design.docx`
- `External_AI_Agents/platform_master.jsx`
- `External_AI_Agents/lesson_platform.jsx`

Current app integration points reviewed:

- `src/app/globals.css`
- `src/lib/theme/provider.tsx`
- `src/app/components/theme-controls.tsx`
- `src/app/dashboard/page.tsx`
- `src/app/modules/page.tsx`
- `src/app/modules/[moduleId]/page.tsx`
- `src/app/lessons/[lessonId]/lesson-experience.tsx`
- `src/app/lessons/[lessonId]/lesson-flashcards.tsx`
- `src/app/lessons/[lessonId]/quiz.tsx`

## Target Visual Direction: "Neo-Soft Learning"

Use a hybrid style:

- clean information layout and spacing from current app
- soft raised and pressed surfaces on cards/buttons
- warm, friendly color system with subject-color semantics preserved
- organic motion cues only where state changes (flip, submit, tab switch)
- accessibility-first defaults (high contrast, reduced motion support, larger touch targets)

Do not adopt:

- heavy dark-first aesthetic
- glass-heavy low-contrast surfaces
- excessive decorative animation

## Adopt / Adapt / Defer

Adopt now:

- tokenized color + depth system (OKLCH-ready path)
- flashcard flip pattern with reduced-motion fallback
- quiz feedback states (correct, wrong, explanation reveal)
- animated lesson tab indicator
- consistent subject-color semantics across surfaces

Adapt before use:

- external monolithic JSX into typed local components
- all motion patterns through `prefers-reduced-motion` and current theme provider
- neumorphic shadows tuned for readable light theme baseline

Defer:

- full visual-direction switcher with 10 directions
- dark-theme-first variants
- extra celebration effects until core lesson flows stabilize

## Implementation Tranches

### Tranche U1: Token Foundation

Goal:

- add soft-depth tokens without breaking existing theme packs

Changes:

- extend `src/app/globals.css` with:
  - elevation tokens (`--shadow-soft-raised`, `--shadow-soft-pressed`)
  - radius tokens (`--radius-card`, `--radius-pill`, optional organic radius)
  - motion tokens (`--dur-fast`, `--dur-normal`, `--ease-organic`, `--ease-spring`)
  - focus ring token (`--focus-ring`)
- keep existing packs (`simple`, `sunrise`, `ocean`, `forest`, `candy`, `space`) and map each to the new depth tokens

Acceptance:

- no visual regressions on existing pages
- all packs still selectable from `ThemeControls`

### Tranche U2: Base UI Primitives

Goal:

- centralize look-and-feel in reusable primitives

Add components under `src/app/components/ui/`:

- `soft-card.tsx`
- `soft-button.tsx`
- `soft-tab-bar.tsx`
- `progress-chip.tsx`

Rules:

- each primitive supports subject accent overrides
- keyboard + focus states included by default
- minimum touch target 44x44 or higher

Acceptance:

- dashboard and modules pages can switch to primitives with no logic changes

### Tranche U3: Lesson Interaction Upgrade

Goal:

- improve engagement where it matters most: learn, flashcards, quiz, tabs

Changes:

- `src/app/lessons/[lessonId]/lesson-flashcards.tsx`
  - add 3D flip card interaction with smooth state transition
  - reduced-motion fallback to cross-fade
  - maintain current telemetry event (`flashcard_flipped`)
- `src/app/lessons/[lessonId]/quiz.tsx`
  - stronger option-state feedback visuals
  - correct/wrong micro-animations with reduced-motion fallback
  - explanation reveal animation that remains keyboard accessible
- `src/app/lessons/[lessonId]/lesson-experience.tsx`
  - replace static tab styles with animated indicator bar
  - add content transition between tabs (fade/slide with fallback)

Acceptance:

- no regression to scoring, progress sync, or error-log capture
- xAPI-lite events continue to fire as-is

### Tranche U4: Module + Dashboard Visual Refresh

Goal:

- make discovery surfaces feel cohesive and child-friendly

Changes:

- `src/app/dashboard/page.tsx`
- `src/app/modules/page.tsx`
- `src/app/modules/[moduleId]/page.tsx`

Apply:

- soft cards + consistent corner radii
- cleaner spacing rhythm
- subject accent strip/pill per module card
- subtle depth hierarchy (page background -> card -> interactive elements)

Acceptance:

- readability improved without reducing information density
- module list and lesson entry remain fast and clear on mobile

### Tranche U5: Accessibility + Motion Safety Hardening

Goal:

- guarantee polished motion while keeping safety and compliance

Changes:

- global reduced-motion rules for flips, tab transitions, quiz effects
- explicit focus-visible styling for all actionable controls
- contrast checks on each theme pack against WCAG AA minimum

Acceptance:

- keyboard-only navigation passes across dashboard, modules, lesson tabs, flashcards, quiz
- no animation-only state communication

### Tranche U6: Visual QA and Rollout

Goal:

- ship safely with measurable impact

Steps:

- add visual regression screenshots for key pages
- rollout behind an internal flag if needed
- monitor:
  - lesson completion rate
  - flashcard engagement
  - quiz completion and retry behavior
  - support tickets for UI confusion/accessibility

## Style Guardrails

- Keep current bright baseline and subject semantics.
- Prefer soft neutrals + vivid accents, not neon-heavy screens.
- Use motion to explain state change, not decoration.
- Preserve clean modern layout structure first; add neumorphic depth second.
- Keep surfaces tactile but not muddy: one primary shadow system, one pressed state.

## Immediate Next Build Sequence

1. U1 token foundation in `globals.css`.
2. U2 primitives and refactor dashboard/modules to use them.
3. U3 lesson tabs + flashcard + quiz behavior upgrades.
4. U5 accessibility/motion audit pass before wider rollout.

## Open Technical Notes

- Current theme provider is intentionally light-only (`src/lib/theme/provider.tsx`), which aligns with child-friendly baseline and reduces risk.
- Existing theme pack DB constraints already support pack switching; no schema migration is required unless we add new named packs.
- External JSX should remain reference material only; production logic stays in current typed Next.js structure.
