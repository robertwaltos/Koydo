# UI Visual QA Checklist

Date: 2026-02-21

## Purpose

Run a fast, repeatable visual + interaction QA pass after neo-soft UI updates.

## Core Routes

- `/`
- `/modules`
- `/modules/[moduleId]`
- `/dashboard`
- `/lessons/[lessonId]`
- `/exam-prep`
- `/exam-prep/error-log`
- `/auth/sign-in`
- `/auth/sign-up`
- `/support`
- `/account/settings`
- `/account/privacy`
- `/parent/dashboard`
- `/parent/reports`
- `/parent/compliance`
- `/legal/privacy`
- `/legal/terms`
- `/legal/refunds`
- `/admin/overview`
- `/admin/reports`
- `/admin/compliance`
- `/admin/audit`
- `/admin/costs`
- `/admin/operations`
- `/admin/curriculum`
- `/admin/media`
- `/admin/alerts`

## Device Breakpoints

- Mobile: 375x812
- Tablet: 768x1024
- Desktop: 1440x900

## Theme Packs

- `simple`
- `sunrise`
- `ocean`
- `forest`
- `candy`
- `space`

## Motion Modes

- Standard motion
- Reduced motion (`prefers-reduced-motion: reduce`)

## Visual Checks

- Cards use consistent soft elevation and border rhythm.
- Primary actions use consistent rounded-pill button shape.
- Focus ring is visible on keyboard navigation.
- Text remains readable in all theme packs.
- No clipping/truncation in tab labels, chips, and CTA buttons.
- No layout jumps when switching lesson tabs.

## Interaction Checks

- Lesson tabs switch correctly and show count badges.
- Flashcard flip works and degrades to non-3D in reduced motion.
- Quiz option states show selected/correct/wrong clearly.
- Support, privacy, and settings forms remain fully functional.
- Auth forms and OAuth buttons remain functional.
- Parent report and compliance cards show readable status chips on all packs.

## Accessibility Checks

- Keyboard-only navigation works on all interactive controls.
- Status updates announce meaningful feedback (`role="status"`).
- Touch targets are >= 44x44 on major controls.
- Color is not the only indicator for quiz/support status.

## Regression Checks

- `npm run ui:audit:styles` passes (0 findings).
- `npm run lint` passes.
- `npm run build` passes.
- No route-level runtime errors in browser console.
- Existing telemetry events still fire in lesson flows.

## Current Sweep Status

- Legacy style cleanup sweep completed for migrated routes:
  - no remaining `border-black/15`, `border-black/10`, `hover:bg-black/5`, `dark:bg-zinc*`, `dark:text-zinc*`, or `dark:border*` in `src/app` migration scope
- Latest validation run:
  - `npm run ui:audit:styles` passed (0 findings)
  - `npm run lint` passed
  - `npm run build` passed
