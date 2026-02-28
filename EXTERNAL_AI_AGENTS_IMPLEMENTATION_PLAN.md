# External AI Agents Review and Implementation Plan

Date: 2026-02-21

## Handoff Update (2026-02-25, cycle 54)

Completed in this cycle:

- Expanded typography density system with a third mode:
  - updated `src/lib/theme/provider.tsx`
  - `TypographyDensity` now supports:
    - `comfortable`
    - `compact`
    - `spacious`
  - storage hydration now recognizes `spacious` values
- Extended settings UI to select all density modes:
  - updated `src/app/components/theme-controls.tsx`
  - `Type` selector now includes:
    - `Comfortable`
    - `Compact`
    - `Spacious`
- Improved typographic token responsiveness to density modes:
  - updated `src/app/globals.css`
  - added additional line-height tokens:
    - `--type-line-height-body-md`
    - `--type-line-height-body-sm`
  - body utility classes now consume tokenized line-heights (`ui-type-body-lg/md/sm`)
  - added `:root[data-typography-density="spacious"]` overrides for:
    - display/heading/body/caption/eyebrow scale tokens
    - line-height tokens
    - reading measure
- Added in-flow typography quick control to Explore:
  - updated `src/app/explore/_components/explore-toolbar.tsx`
  - added compact toolbar button that cycles density:
    - comfortable → compact → spacious → comfortable
  - button remains usable in pre-reader mode via icon-first presentation

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add explicit visual confirmation chip/toast when density changes in Explore
- optionally expose density as part of persisted server profile once schema support is added
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 53)

Completed in this cycle:

- Added global typography density preference in theme system:
  - updated `src/lib/theme/provider.tsx`
  - added new theme context state:
    - `typographyDensity: "comfortable" | "compact"`
    - `setTypographyDensity(...)`
  - added local persistence key:
    - `koydo.typography.density`
  - theme application now sets `data-typography-density` on `document.documentElement`
  - density preference now participates in re-apply flow for theme/motion sync
- Added density control to the UI:
  - updated `src/app/components/theme-controls.tsx`
  - new `Type` selector in non-compact controls:
    - `Comfortable`
    - `Compact`
  - selector updates shared theme context and persists locally via provider
- Connected density preference to typography tokens:
  - updated `src/app/globals.css`
  - body line-height now driven by token (`--type-line-height-body`)
  - added `:root[data-typography-density="compact"]` overrides for:
    - display/heading/body/caption/eyebrow scale tokens
    - body line-height token
    - reading measure token
  - result: global compact mode reduces typographic footprint while keeping semantic type classes intact

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally expose density toggle in explore toolbar for child-mode contexts (icon-only switch in pre-reader mode)
- optionally add third density option (`spacious`) for large screens/kiosk displays
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 52)

Completed in this cycle:

- Deepened app typography from font-swap into a full semantic type system:
  - updated `src/app/globals.css`
  - added fluid type-scale tokens (display/heading/body/caption/eyebrow) using `clamp(...)`
  - added reading measure token (`--reading-measure`)
  - tightened typographic rhythm:
    - improved body line-height
    - optical sizing and feature settings
    - explicit heading size fallbacks (`h1`-`h6`)
  - introduced reusable semantic utilities:
    - `.ui-type-hero`
    - `.ui-type-display-xl`
    - `.ui-type-display-lg`
    - `.ui-type-heading-xl`
    - `.ui-type-heading-lg`
    - `.ui-type-heading-md`
    - `.ui-type-body-lg`
    - `.ui-type-body-md`
    - `.ui-type-body-sm`
    - `.ui-type-caption`
    - `.ui-type-eyebrow`
    - `.ui-reading-measure`
- Applied typography utilities across major user surfaces:
  - updated `src/app/page.tsx`
    - hero eyebrow/headline/body copy now use semantic type classes
    - section and card titles aligned to heading utilities
  - updated `src/app/explore/page.tsx`
    - lobby hero title/subtitle/counter badge aligned to display/body/caption utilities
  - updated `src/app/modules/page.tsx`
    - atlas hero title/body and section/module titles aligned to semantic heading/body classes
  - updated `src/app/explore/[topicId]/page.tsx`
    - world hero title/subtitle and all major section headings now use display-scale utilities
  - updated `src/app/components/top-nav.tsx`
    - nav labels tuned with body utility + letterspacing consistency

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add per-surface type presets (e.g., `data-density="compact|comfortable"`) for tablet vs desktop rhythm control
- optionally add `font-variation-settings` tuning for display headings by theme pack
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 51)

Completed in this cycle:

- Researched and implemented a new app-wide typography system focused on beauty + readability:
  - updated `src/app/layout.tsx`
  - replaced prior default stack with:
    - `Nunito Sans` for body/UI copy
    - `Sora` for display/headings
    - `JetBrains Mono` for code/technical surfaces
  - wired all three through `next/font/google` variables for consistent, optimized delivery
- Applied global type rhythm and semantic font routing:
  - updated `src/app/globals.css`
  - theme font tokens now map to new font variables:
    - `--font-sans: --font-body-sans`
    - `--font-mono: --font-code-mono`
  - body typography improved with:
    - optimized legibility rendering
    - stronger line-height defaults
    - kerning/ligature feature settings
  - headings now use display font globally (`h1`–`h6`) with tighter tracking and balanced wrapping
  - added reusable utility class:
    - `.ui-type-display`
- Applied display-font branding touchpoint:
  - updated `src/app/components/top-nav.tsx`
  - brand wordmark now uses display type utility for stronger visual identity

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add a typography scale token set (`display-xl`, `heading-lg`, `body-sm`) to reduce per-component ad hoc sizing
- optionally add high-legibility font toggle under accessibility preferences
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 50)

Completed in this cycle:

- Redesigned global top navigation for stronger visual hierarchy and route clarity:
  - updated `src/app/components/top-nav.tsx`
  - added icon-enhanced nav items across public/authenticated/parent/admin links
  - added active-route pill styling (`aria-current="page"`) for faster orientation
  - replaced older violet-heavy chrome with a cleaner warm-to-cool glass gradient shell
  - upgraded brand block and controls cluster styling for a more cohesive app-wide look
- Rebuilt `/modules` into a visual subject atlas:
  - updated `src/app/modules/page.tsx`
  - added immersive hero panel with module/lesson/subject summary stats
  - grouped module cards by subject with jump links and subject-specific visual palettes
  - each module card now includes:
    - themed chip + gradient halo
    - improved cover presentation
    - metadata badges (version, age range, difficulty)
    - dual CTA flow:
      - `Visual Path` (`/explore/module/[moduleId]` with best topic context)
      - `Open Module` (`/modules/[moduleId]`)
- Added sticky section journey rail on topic world pages:
  - updated `src/app/explore/[topicId]/page.tsx`
  - new sticky icon-led anchor rail for long-page navigation:
    - Pictures
    - Path
    - Move
    - Missions
    - Adventures
    - Worlds
  - added section IDs for major blocks so anchor navigation is stable and mobile-friendly

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add subtle parallax/tilt interactions on scene and module cards
- optionally add a compact floating progress marker for topic section completion
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 49)

Completed in this cycle:

- Added threshold-aware flagged mission-prep CSV export in explorer admin report API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - added export query controls:
    - `flaggedOnly`
    - `includeStatus`
    - `minSheetSample`
    - `minOpenRateFromSelection`
    - `minPrintRateFromOpen`
  - mission-prep CSV can now:
    - include per-row status (`low_sample`, `healthy`, `watch`, `critical`)
    - include status reason + flag marker
    - filter to flagged-only rows using the passed thresholds
- Added second admin download path for fast triage sharing:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - "Mission Prep Daily Trend by Topic" now has:
    - `Download CSV` (full set with status columns)
    - `Download Flagged CSV` (watch/critical rows only)
  - download requests now pass current UI threshold settings to the API export route

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add scheduled flagged-export generation through report jobs
- optionally add threshold presets (strict/standard/lenient) for faster diagnostics
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 48)

Completed in this cycle:

- Added threshold-based mission-prep performance diagnostics in admin explorer panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - introduced configurable controls:
    - `Min Sheets`
    - `Min Sheet→Open %`
    - `Min Open→Print %`
  - added computed status model per topic/day:
    - `Low sample`
    - `Healthy`
    - `Watch`
    - `Critical`
  - top-topic mission-prep cards now:
    - render status pill + reason text
    - apply status-aware card styling
    - include open-rate context alongside existing print metrics
  - daily topic table now:
    - includes `Status` column
    - highlights flagged rows for quick scan
  - added `Flagged Topics` aggregate counter based on current thresholds

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add server-side export path for flagged-only rows with thresholds
- optionally add trend alerts driven by repeated `Critical` status across days
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 47)

Completed in this cycle:

- Added server-side CSV export in explorer admin report API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - API now supports `format=csv&export=mission_prep_trend_by_topic`
  - returns CSV attachment directly from `/api/admin/reports/explorer`
  - CSV includes:
    - `date`
    - `topic_id`
    - `topic_title`
    - `sheet_selections`
    - `opens`
    - `prints`
    - `open_rate_from_selection`
    - `print_rate_from_open`
    - `print_rate_from_selection`
  - filename encodes day window and topic filter context
- Migrated admin CSV download action to server export:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - "Download CSV" now fetches CSV from API export route (instead of client-side CSV string assembly)
  - includes error handling to surface download failures in-panel
- Added metric toggle for top-topic mission-prep trend cards:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - new metric selector for card trends:
    - `Sheet Selections`
    - `Opens`
    - `Prints`
  - topic cards now:
    - sort by selected metric total
    - render sparkline for selected metric
    - keep full totals + conversion context for quick diagnosis

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add a backend report-jobs export pathway for scheduled mission-prep CSV deliveries
- optionally add percentile/threshold highlighting on topic cards to flag underperforming worlds automatically
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 46)

Completed in this cycle:

- Added CSV export for mission-prep daily trend by topic:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added `Download CSV` action in "Mission Prep Daily Trend by Topic" section
  - export includes:
    - `date`
    - `topic_id`
    - `topic_label`
    - `sheet_selections`
    - `opens`
    - `prints`
    - `open_rate_from_selection`
    - `print_rate_from_open`
    - `print_rate_from_selection`
  - filename now encodes selected day window and topic filter context
- Added charted top-topic trend cards for mission-prep diagnostics:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - built per-topic trend summarization helper from `missionPrepTrendByTopic[]`
  - added compact cards (top 6 topics by prints) showing:
    - topic visual label
    - total sheets/opens/prints
    - print conversion rates
    - print sparkline
    - day-over-day delta presentation

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add server-side report export endpoint for mission-prep trend slices (instead of client-only CSV)
- optionally add filtering controls for top-topic cards (metric toggle: sheets/opens/prints)
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 45)

Completed in this cycle:

- Added topic-level daily mission-prep trend slices in explorer admin report API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - added `missionPrepTrendByTopic[]` payload with:
    - `date`
    - `topicId`
    - `sheetSelections`
    - `opens`
    - `prints`
    - `openRateFromSelection`
    - `printRateFromOpen`
    - `printRateFromSelection`
  - implemented per-topic per-day aggregation helpers:
    - mission-prep trend incrementer keyed by `topicId + day`
    - mission-prep trend row builder with conversion rates
  - wired trend-by-topic updates for actions:
    - `mission_prep_sheet_selected`
    - `mission_prep_opened`
    - `mission_prep_printed`
- Added world-level diagnostic table in admin Explorer metrics panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - extended response typing with `missionPrepTrendByTopic[]`
  - added new "Mission Prep Daily Trend by Topic" section:
    - date + topic + sheet/open/print counts
    - conversion rates (`Sheet → Open`, `Open → Print`, `Sheet → Print`)
    - topic visuals rendered via existing world icon/label helper

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add charted (sparkline) trend-by-topic cards for top mission-prep worlds
- optionally add CSV export for mission-prep trend-by-topic rows
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 44)

Completed in this cycle:

- Added daily mission-prep trend series to explorer admin report API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - added `missionPrepTrend[]` payload with per-day:
    - `sheetSelections`
    - `opens`
    - `prints`
    - `openRateFromSelection`
    - `printRateFromOpen`
    - `printRateFromSelection`
  - wired trend bucket accounting so mission-prep actions increment day-level trend data
- Added mission-prep daily trend charts in admin Explorer metrics UI:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - extended response typing with `missionPrepTrend[]`
  - added mission-prep sparkline data builders + delta summaries
  - added new "Mission Prep Trend (Daily)" section with:
    - Sheet Selection trend sparkline
    - Open trend sparkline
    - Print trend sparkline
    - daily table with counts and conversion rates
- Cleared an existing lint blocker in explore UI utility:
  - updated `src/app/explore/_components/scroll-reveal.tsx`
  - removed sync `setState` call inside effect by initializing reduced-motion visibility state up front and skipping observer when reduced motion is active

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add mission-prep trend by topic (daily) for deeper root-cause analysis by world
- optionally add CSV export support for mission-prep trend slices
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 43)

Completed in this cycle:

- Added mission-prep funnel analytics to admin explorer report API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - `funnel` now includes:
    - `missionPrepSheetSelections`
    - `missionPrepOpens`
    - `missionPrepPrints`
    - `missionPrepSheetSelectionRateFromTopicView`
    - `missionPrepOpenRateFromSheetSelection`
    - `missionPrepPrintRateFromOpen`
    - `missionPrepPrintRateFromSheetSelection`
  - added topic breakdown payload:
    - `missionPrepByTopic[]` with per-topic sheet/open/print counts and conversion rates
- Expanded admin Explorer Metrics panel with mission-prep visibility:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added KPI cards for:
    - Topic View → Mission Prep Sheet
    - Mission Prep Sheet → Open
    - Mission Prep Open → Print
  - added raw mission-prep funnel counters to the summary card grid
  - added new "Mission Prep by Topic" table
- Improved main topic mission UX with a compact pre-flight safety layer:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Safety Check Before You Start" block in Hands-On Missions:
    - per-mission safety checklist rows
    - pre-reader-friendly visual shield cue
    - dedicated read-aloud safety narration button

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add mission-prep daily trend charting similar to recommendation trend views
- optionally track safety-check read-aloud engagement as a dedicated explorer action
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 42)

Completed in this cycle:

- Expanded mission content schema with safety and reflection guidance:
  - updated `src/lib/explorer/topics.ts`
  - `miniMissions[]` now includes:
    - `safetyTip`
    - `reflectionPrompt`
  - populated all six worlds' mission entries with concrete safety language and reflection prompts
- Upgraded guided-path mission quality:
  - updated `src/app/explore/[topicId]/page.tsx`
  - Step 3 ("Build") now includes:
    - safety tip
    - reflection prompt
  - path narration now speaks safety and reflection details for mission steps
- Upgraded Hands-On Mission cards:
  - updated `src/app/explore/[topicId]/page.tsx`
  - each mission card now includes:
    - materials chips
    - helper cue
    - safety tip
    - reflection prompt
    - richer read-aloud payload including these fields
- Added mission-prep telemetry and tracked CTA flow:
  - updated `src/lib/analytics/explorer-events.ts` with actions:
    - `mission_prep_sheet_selected`
    - `mission_prep_opened`
    - `mission_prep_printed`
  - added new tracked components:
    - `src/app/explore/_components/mission-prep-link.tsx`
    - `src/app/explore/_components/mission-prep-tracker.tsx`
    - `src/app/explore/_components/mission-prep-print-button.tsx`
  - updated `src/app/explore/[topicId]/mission-prep/page.tsx` to:
    - emit mission-prep open event
    - emit print event via tracked print button
    - render safety + reflection fields in printable sheet
  - updated `src/app/explore/[topicId]/page.tsx` to use tracked Mission Prep CTA link
- Updated reusable print button API:
  - updated `src/app/explore/_components/print-button.tsx`
  - now supports optional `onPrint` callback before invoking `window.print()`

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add explorer admin report slices for mission-prep CTA/open/print funnel actions
- optionally add a compact mission safety checklist card in the main topic flow
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 41)

Completed in this cycle:

- Added printable mission planning workflow for caregiver support:
  - new route: `src/app/explore/[topicId]/mission-prep/page.tsx`
  - renders a world-specific "Mission Prep Sheet" with:
    - mission instructions
    - materials checklist (`☐` list)
    - helper cue text
    - notes area blocks
  - includes:
    - "Back to World" link
    - print action support via reusable print button component
- Added reusable print control component:
  - new file: `src/app/explore/_components/print-button.tsx`
  - uses `window.print()` with existing UI styling conventions
- Linked mission prep directly from topic mission flow:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Mission Prep Sheet" CTA in the Hands-On Missions section header
  - users can now move from interactive topic flow to printable offline prep in one tap

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add "Print Mission Prep" quick action inside Step 3 (Build) of the guided path
- optionally add telemetry tracking for mission-prep page opens and print actions
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 40)

Completed in this cycle:

- Enriched mission content model for higher execution clarity:
  - updated `src/lib/explorer/topics.ts`
  - expanded `miniMissions[]` items to include:
    - `materials[]`
    - `helperLine`
  - populated all mission entries across six worlds with concrete materials and caregiver facilitation cues
- Improved guided path mission detail quality:
  - updated `src/app/explore/[topicId]/page.tsx`
  - Step 3 ("Build") in "Your Next Steps" now includes:
    - mission materials summary
    - helper cue text
  - guided path narration now includes mission materials and helper guidance
- Improved Hands-On Missions section usability:
  - updated `src/app/explore/[topicId]/page.tsx`
  - each mission card now shows:
    - material chips for fast prep
    - helper cue line for adults
    - richer read-aloud text including materials + helper cue

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add mission-prep print view (materials + helper cue only) for offline use
- optionally add mission-specific telemetry for material-rich cards vs baseline cards
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 39)

Completed in this cycle:

- Added new explorer interaction actions for expanded sensory pathways:
  - updated `src/lib/analytics/explorer-events.ts`
  - exported `ExplorerAction` and added:
    - `movement_adventure_selected`
    - `chant_adventure_selected`
    - `calm_moment_selected`
- Added tracked link components for section-level adventure CTAs:
  - `src/app/explore/_components/movement-adventure-link.tsx`
  - `src/app/explore/_components/chant-adventure-link.tsx`
  - `src/app/explore/_components/calm-moment-link.tsx`
  - topic page now uses these for "Move into Adventure", "Sing into Adventure", and "Calm into Adventure" actions
- Added a calm-regulation content layer across all Explorer worlds:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `calmMoments[]` (`title`, `prompt`, `breatheCue`)
  - populated all six worlds (tree, ocean, space, numbers, story, world) with calm prompts and breathing cues
- Expanded guided path from 4 to 5 steps:
  - updated `src/app/explore/[topicId]/page.tsx`
  - "Your Next Steps" now includes:
    - Step 1: Look
    - Step 2: Move
    - Step 3: Build
    - Step 4: Sing
    - Step 5: Pause
  - focused path narration now includes calm prompt and breathing cue
  - focused auto-narration hint updated to "look, move, build, sing, and pause"
- Added a dedicated "Pause + Breathe" section to topic pages:
  - renders calm prompt cards with breathing cues
  - read-aloud support on each calm card
  - contextual "Calm into Adventure" links with telemetry tracking

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add explorer admin report breakdown for `movement_adventure_selected`, `chant_adventure_selected`, and `calm_moment_selected`
- optionally add parent-facing calm guidance snippets aligned with each calm moment
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 38)

Completed in this cycle:

- Added a new rhythm/language content layer to Explorer worlds:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `chantMoments[]` with:
      - `title`
      - `chant`
      - `beatCue`
  - populated all six worlds (tree, ocean, space, numbers, story, world) with chant and beat guidance designed for pre-readers and early language learners
- Expanded guided picture path into a full 4-step sequence:
  - updated `src/app/explore/[topicId]/page.tsx`
  - "Your Next Steps" now renders:
    - Step 1: Look
    - Step 2: Move
    - Step 3: Build
    - Step 4: Sing
  - integrated focused chant content into path narration and visual cards
- Added a dedicated "Sing + Say" section to topic pages:
  - updated `src/app/explore/[topicId]/page.tsx`
  - renders chant cards with:
    - chant text
    - beat cue
    - read-aloud support
    - contextual "Sing into Adventure" deep links
- Added focused path auto-narration assist:
  - when a picture focus is selected, page now provides a short contextual audio cue to guide child progression through the sequence

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add telemetry events for chant card engagement and "Sing into Adventure" click-through
- optionally add an accessibility preference to hide rhythm/movement prompts for low-stimulation mode
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 37)

Completed in this cycle:

- Added explorer telemetry coverage for the new visual choice flow:
  - updated `src/lib/analytics/explorer-events.ts`
  - extended explorer action set with:
    - `picture_choice_selected`
    - `picture_path_started`
  - interaction payload now supports `choiceId` for precise choice-level analysis
  - added new client telemetry link components:
    - `src/app/explore/_components/picture-choice-link.tsx`
    - `src/app/explore/_components/picture-path-start-link.tsx`
  - topic page now uses these components so both "Choose" and "Start This Adventure" actions are tracked
- Added a new body-based content layer across all Explorer worlds:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `movementMoments[]` (`title`, `instruction`)
  - populated all six worlds (tree, ocean, space, numbers, story, world) with movement prompts designed for pre-readers and high-energy learners
- Improved topic progression with stronger step structure:
  - updated `src/app/explore/[topicId]/page.tsx`
  - "Your Next Steps" now presents explicit sequential cards:
    - Step 1: Look (question + clue)
    - Step 2: Move (movement moment)
    - Step 3: Build (hands-on mission)
  - added new "Move + Learn" section with:
    - movement cards
    - read-aloud support
    - contextual adventure deep links

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add admin explorer report slices for new `picture_choice_selected` and `picture_path_started` actions
- optionally add a reduced-motion toggle for movement prompts where accessibility requires low physical activity
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 36)

Completed in this cycle:

- Added deeper structured guidance for visual-first topic choices:
  - updated `src/lib/explorer/topics.ts`
  - expanded `pictureChoices[]` model to include:
    - `id` (stable choice routing key)
    - `followUp` (child-friendly next-step cue)
  - enriched all six worlds (tree, ocean, space, numbers, story, world) with new follow-up micro-prompts per visual choice
- Added a guided picture-driven progression flow on topic pages:
  - updated `src/app/explore/[topicId]/page.tsx`
  - topic page now accepts `searchParams.focus` and resolves selected picture choice state
  - "Pick a Picture" cards now:
    - highlight selected state
    - route to the same topic page with `?focus=<choiceId>#picture-path`
    - use "Choose" as the primary selection CTA
  - added new "Your Next Steps" section (`#picture-path`) that appears after a picture selection and dynamically assembles:
    - focused follow-up cue
    - related question
    - related clue
    - related mission
    - related creative challenge (when available)
    - contextual "Start This Adventure" deep link into recommended lesson/module path
    - read-aloud support for the guided sequence
- Overall impact:
  - reduces random clicking by turning visual choice into a directed micro-learning path
  - keeps existing rich content sections intact while introducing a clearer pre-reader progression lane

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add telemetry events for picture selection (`focus` query) and path start click-through
- optionally add visual progress chips (Step 1/2/3) inside "Your Next Steps" for even clearer sequencing
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 35)

Completed in this cycle:

- Added a new visual-first content layer to all Explorer worlds:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `pictureChoices[]` with:
      - `emoji`
      - `label`
      - `prompt`
      - `action`
  - populated all world datasets (tree, ocean, space, numbers, story, world) with image-led starter choices so pre-readers can begin from visual attraction before dense text
- Expanded topic page with a pre-reader visual entry section:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Pick a Picture" section near the top of the flow:
    - large visual choice cards (emoji + short labels)
    - child-friendly prompt + action copy
    - read-aloud support on each card
    - contextual "Try This" links into recommended module paths
  - preserves existing deeper learning stack (questions, vocabulary, clues, discussions, challenges, missions, caregiver guidance)

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add telemetry for `pictureChoices` interactions to measure pre-reader visual-path engagement
- add optional "one-card mode" (single large choice at a time) for very young learners
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 34)

Completed in this cycle:

- Added two new structured content layers across all Explorer worlds:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `creativeChallenges[]` with:
      - `title`
      - `challenge`
      - `stretch`
    - `caregiverTips[]`
  - populated all world datasets (tree, ocean, space, numbers, story, world) with:
    - open-ended creative challenge prompts
    - stretch extensions for deeper thinking
    - actionable caregiver facilitation tips
- Expanded topic page with new sections:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Create + Imagine" section:
    - challenge cards with read-aloud support
    - "Build with Adventure" contextual links into recommended module paths
  - added "Grown-Up Guide" section:
    - caregiver tip cards with read-aloud support
  - content progression is now significantly richer while preserving existing flow and navigation

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add interaction telemetry for each content section (Key Words, Clues, Talk Together, Create + Imagine, Missions, Grown-Up Guide)
- optionally add printable activity mode for creative challenges and missions
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 33)

Completed in this cycle:

- Added deeper language and reflection content to every Explorer world:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `vocabulary[]` with `term` + child-friendly `meaning`
    - `talkTogether[]` with guided conversation prompts
  - all worlds now include enriched content sets:
    - Tree World
    - Ocean World
    - Space World
    - Number World
    - Story World
    - People + Places
- Expanded topic page to surface the new content layers:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Key Words" section:
    - vocabulary cards with read-aloud controls
  - added "Talk Together" section:
    - discussion prompt cards with read-aloud controls
  - preserved and integrated prior expanded sections (questions, clues, missions, adventures, portals)
  - resulting topic progression now reads:
    - Tap a Question
    - Key Words
    - Wonder Clues
    - Talk Together
    - Hands-On Missions
    - Related Adventures
    - Try Another World

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add click/read telemetry for Key Words, Wonder Clues, Talk Together, and Missions to measure engagement by content type
- optionally generate age-variant content blocks (pre-reader, early reader, fluent reader) from the same topic metadata
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 32)

Completed in this cycle:

- Added two new structured content layers to Explorer topics:
  - updated `src/lib/explorer/topics.ts`
  - `ExplorerTopic` now includes:
    - `vocabulary[]` (term + kid-friendly meaning)
    - `talkTogether[]` (guided conversation prompts)
  - expanded all 6 worlds with concrete vocabulary and discussion content:
    - Tree World
    - Ocean World
    - Space World
    - Number World
    - Story World
    - People + Places
- Expanded topic-page educational sections:
  - updated `src/app/explore/[topicId]/page.tsx`
  - added "Key Words" section:
    - term cards + meanings
    - per-term read-aloud controls
  - added "Talk Together" section:
    - guided conversation prompts
    - per-prompt read-aloud controls
  - existing sections remain and now stack into a fuller progression:
    - Tap a Question
    - Key Words
    - Wonder Clues
    - Talk Together
    - Hands-On Missions
    - Related Adventures / World Portals

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add mission/clue/keyword analytics events to measure which content types are most engaging
- optionally add age-band content variants (pre-reader vs early reader) for vocabulary and talk prompts
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 31)

Completed in this cycle:

- Expanded child-facing Explorer world content in topic metadata:
  - updated `src/lib/explorer/topics.ts`
  - each world now includes richer educational depth:
    - `prompts` expanded from 3 to 6 per world
    - new `wonderClues` list (short concept-building facts)
    - new `miniMissions` list (hands-on mission instructions)
  - content was expanded across all worlds:
    - Tree World
    - Ocean World
    - Space World
    - Number World
    - Story World
    - People + Places
- Improved topic page content rendering:
  - updated `src/app/explore/[topicId]/page.tsx`
  - prompts now intentionally render as 6 question cards (`promptCards`)
  - added new "Wonder Clues" section with read-aloud support (`SpeakButton`)
  - added new "Hands-On Missions" section:
    - mission title + concrete instruction
    - read-aloud button per mission
    - contextual "Start from Adventure" link to recommended module path
  - preserves existing hero, question bubbles, related adventures, and world portals

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add mission completion tracking events for the new hands-on mission cards
- optionally create a dedicated mission detail sheet/modal with step-by-step visuals
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 30)

Completed in this cycle:

- Added per-reason mini trend chips in the "Recommendation Types" list:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - each recommendation reason row now shows:
    - latest daily taps/impressions snapshot
    - taps delta chip (vs prior day)
    - impressions delta chip (vs prior day)
    - signed absolute + percent deltas where applicable
    - directional iconography + semantic colors
- Added trend aggregation helpers for recommendation reason rows:
  - `buildSuggestionTypeTrendMap(...)`
  - `getDeltaChipPresentation(...)`
  - computes per-suggestion-type daily snapshots using `recommendationTrendBySuggestionType` data
- Preserved existing report surface:
  - no removal of existing sparkline cards or detailed tables
  - reason-level chips add compact explanatory context to the existing recommendation type card list

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add per-reason mini sparkline glyphs in recommendation-type rows (not just delta chips)
- optionally switch recommendation type list to include a small "latest date" badge for quick temporal orientation
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 29)

Completed in this cycle:

- Added day-over-day delta indicators for sparkline trend cards in explorer admin reports:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - introduced reusable helpers:
    - `getSparklineDelta(...)`
    - `getSparklineDeltaPresentation(...)`
    - `formatSignedNumber(...)`
    - `formatSignedPercent(...)`
  - each sparkline card now shows:
    - latest daily value (with date)
    - delta vs prior day
    - signed percent change when denominator is valid
    - directional indicator and semantic color (`▲` up, `▼` down, `▬` flat)
- Added memoized delta derivations for all four sparkline tracks:
  - recommendation impressions
  - recommendation taps
  - recommendation-type aggregated impressions
  - recommendation-type aggregated taps
- Preserved existing analytics tables and sparkline strips:
  - no removal of detailed table rows
  - deltas are additive context for rapid trend scanning

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add 7-day moving-average overlay or baseline line to sparkline cards
- optionally add per-reason (individual suggestion type) mini trend badges near recommendation-type table rows
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 28)

Completed in this cycle:

- Added compact sparkline trend visuals to explorer admin reports:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - introduced lightweight sparkline utilities:
    - `buildTrendSparklinePoints(...)`
    - `buildTypeTrendSparklinePoints(...)`
    - `MiniSparkline(...)`
  - sparklines now render in "Recommendation Trend (Daily)":
    - impressions trend
    - suggested tap trend
  - sparklines now render in "Daily Trend by Recommendation Type":
    - aggregated impressions across recommendation reasons by day
    - aggregated suggested taps across recommendation reasons by day
- Added memoized sparkline dataset derivations:
  - preserves responsive rendering while avoiding repeated ad-hoc aggregation in JSX
  - trend tables remain unchanged and continue to provide full numeric detail

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add hover tooltips with richer delta context (day-over-day change) for sparklines
- optionally replace native topic `<select>` with custom listbox to support thumbnail rendering in selector options
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 27)

Completed in this cycle:

- Added topic thumbnail support to explorer admin report metadata + UI:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - `availableTopicMeta[]` now includes canonical `badge` values resolved from explorer world scenes
  - topic metadata remains canonical and stable for admin rendering (`id`, `title`, `subtitle`, `imageSrc`, `imageAlt`, `badge`)
- Added visual topic rendering helper path in admin explorer panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - imported `next/image` and added helper utilities:
    - `getTopicMetaMap(...)`
    - `getTopicDisplayData(...)`
    - `renderTopicWithVisual(...)` (image thumbnail + badge + label)
  - applied visual topic rendering to:
    - active topic filter chip
    - top topics list
    - recommendation-by-topic table
    - recent events topic column
  - kept dropdown options as text-formatted labels for native select compatibility
- Preserved existing topic filter hardening:
  - canonical topic-ID clamp and URL self-healing behavior remain unchanged

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` first attempt failed due transient Google Fonts fetch (`Geist`/`Geist Mono`), second attempt passed successfully

Open focus for next cycle:

- optionally replace native topic `<select>` with custom popover list to render thumbnails directly in selector options
- optionally add sparkline trend visuals for recommendation sections
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 26)

Completed in this cycle:

- Added canonical topic badge metadata to explorer reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - API now enriches `availableTopicMeta[]` with `badge` from explorer scene metadata (`getAllWorldScenes`)
  - maintains stable canonical topic ordering and existing `availableTopics[]` compatibility
- Added visual topic badges to admin explorer reports UI:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added badge mapping helpers:
    - `getTopicBadgeMap(...)`
    - enhanced `formatTopicDisplay(...)`
  - topic badge+label rendering now appears in:
    - topic filter chip
    - topic selector options
    - top topics list
    - recommendation-by-topic table
    - recent events topic column
- Preserved canonical filter stability:
  - existing unknown-topic URL clamp behavior remains intact
  - canonical IDs still sourced from `availableTopicMeta` with fallback to `availableTopics`

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally show topic thumbnail image (`imageSrc`) alongside badge in admin topic tables
- optionally add sparkline trend visuals for recommendation sections
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 25)

Completed in this cycle:

- Added canonical explorer topic metadata to admin reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new response field: `availableTopicMeta[]` with:
    - `id`
    - `title`
    - `subtitle`
    - `imageSrc`
    - `imageAlt`
  - metadata is sourced from the explorer topic registry (`getExplorerTopics`) and sorted for stable client rendering
  - existing `availableTopics[]` is preserved for backward compatibility
- Improved admin explorer report topic presentation:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - panel now derives canonical topic IDs from `availableTopicMeta` (fallback to `availableTopics`)
  - added topic label mapping helpers so the UI renders readable names:
    - topic filter badge
    - topic selector option labels
    - top topics list
    - recommendation-by-topic table
    - recent events topic column
  - active scope copy in trend sections now reflects formatted topic label
- Preserved robust filter behavior:
  - topic clamp/self-healing logic still clears invalid `topicId` URL values against canonical topics
  - selector fallback behavior for non-canonical datasets remains intact

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally surface topic badges/icons alongside labels in admin tables and filter options
- optionally add sparkline trend visuals for recommendation sections
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 24)

Completed in this cycle:

- Added canonical topic metadata to explorer reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - API now imports explorer topic registry (`getExplorerTopics`) and returns `availableTopics`
  - canonical topics are normalized/lowercased and sorted for stable client rendering
- Hardened `topicId` query handling server-side:
  - incoming `topicId` is now validated against canonical `availableTopics`
  - unknown topic values are clamped to `null` (treated as unfiltered scope)
  - response `topicFilter` now reflects only accepted canonical topics
- Updated admin explorer panel to consume canonical topics:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - `ExplorerSummaryResponse` now includes `availableTopics`
  - topic selector options now prioritize `availableTopics` (with telemetry fallback only if canonical list is absent)
- Added URL self-healing for stale/invalid topic filters:
  - panel now checks active `topicId` against API-provided canonical topics
  - if invalid, it clears local state and rewrites URL query via `router.replace(...)`

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally expose topic labels (not just IDs) in admin filter and report tables for readability
- optionally add compact trend visuals (sparklines) for recommendation sections
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 23)

Completed in this cycle:

- Added shareable URL state for explorer report filters:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - filter controls now synchronize `days` + `topicId` with URL query params via `router.replace(...)`
  - panel state restores from URL using `useSearchParams` observers (supports back/forward restoration)
  - added robust parsers:
    - `parseDaysParam(...)`
    - `parseTopicParam(...)`
- Improved topic option handling while filtering:
  - topic options are now merged over time from API responses rather than overwritten
  - keeps selector stable when toggling topic scope
- UX updates for filter actions:
  - changing window/topic immediately updates state and URL
  - clear-topic action now clears both local filter state and URL query value

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add API-provided canonical `availableTopics` list to clamp unknown topic query values
- optionally persist additional panel UI state (section collapse/expand) into URL
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 22)

Completed in this cycle:

- Added shareable URL persistence for explorer report filters in admin panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - `days` and `topicId` now sync to URL query params via `router.replace(...)`
  - back/forward navigation restores filter state through `useSearchParams` synchronization
  - added parser helpers for robust query parsing (`parseDaysParam`, `parseTopicParam`)
- Improved filter option hydration behavior:
  - topic options are now accumulated/merged across fetches rather than reset by view scope
  - maintains stable topic selector options while filtered
- UI interaction updates:
  - changing window/topic immediately updates both local state and URL query
  - clear-topic action now also clears `topicId` in URL

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally persist additional report UI state (expanded sections) to URL
- optionally clamp/normalize unknown `topicId` query values against discovered topic options
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 21)

Completed in this cycle:

- Added recommendation trend-by-type analytics to explorer reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new response block: `recommendationTrendBySuggestionType[]`
  - per-row fields:
    - `date`
    - `suggestionType`
    - `label`
    - `icon`
    - `recommendationImpressions`
    - `recommendationSelections`
    - `recommendationSelectionRateFromImpression`
  - trend-by-type rows respect existing `topicId` report filtering
- Added active-filter UX enhancements to admin explorer panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added filter-active badge near panel title when topic filter is set
  - added `Clear Topic` control for quick reset
- Added per-reason daily trend section in admin panel:
  - new "Daily Trend by Recommendation Type" table
  - shows per-day impressions/taps/CTR by recommendation reason
  - trend copy reflects selected topic scope (all vs filtered topic)

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add compact sparkline visuals for trend-by-type rows
- optionally persist selected topic filter in URL query for sharable admin views
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 20)

Completed in this cycle:

- Added topic filter support to explorer admin reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new query parameter support: `topicId`
  - added parsed response field: `topicFilter`
  - when `topicId` is provided, report aggregation is scoped to matching normalized topic events
- Added topic filter controls in admin explorer metrics panel:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - new topic select next to window control (`All` + discovered topics)
  - fetches `/api/admin/reports/explorer` with `topicId` when selected
  - preserves topic option list from unfiltered fetches for stable UX while filtered
- Updated trend section copy to reflect active topic scope:
  - recommendation trend description now indicates whether data is for all topics or a selected topic

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add per-topic suggestion-type breakdown in the filtered trend view
- optionally add a clear visual "filter active" badge near explorer report title
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 19)

Completed in this cycle:

- Added topic-level recommendation performance analytics in explorer reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new response block: `recommendationByTopic[]`
  - per-topic fields:
    - `topicId`
    - `moduleViews`
    - `recommendationImpressions`
    - `recommendationSelections`
    - `recommendationImpressionRateFromModuleView`
    - `recommendationSelectionRateFromImpression`
    - `topSuggestionType`
    - `topSuggestionLabel`
    - `topSuggestionIcon`
  - aggregation uses normalized topic IDs from payload/lesson context and tracks top selected suggestion type per topic
- Added helper utilities to support topic-level aggregation:
  - key normalization helper (`normalizeKey`)
  - nested suggestion-type counter helper for per-topic top reason extraction
- Added admin UI section for topic-level recommendation analytics:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - new "Recommendation by Topic" table includes:
    - module views, recommendation impressions, suggested taps
    - view->impression and impression->tap rates
    - top selected recommendation reason (icon + label)

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add topic filters to recommendation trend section
- optionally add topic-level sparkline trend mini-chart (impressions/taps)
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 18)

Completed in this cycle:

- Added daily recommendation trend analytics to explorer reports API:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new response block: `recommendationTrend[]`
  - each daily row includes:
    - `date`
    - `moduleViews`
    - `recommendationImpressions`
    - `recommendationSelections`
    - `recommendationImpressionRateFromModuleView`
    - `recommendationSelectionRateFromImpression`
  - uses UTC day bucketing with pre-seeded day keys across the selected window for stable chart/table rendering
  - added invalid-date guard in day-key parsing path
- Added daily recommendation trend UI section in admin reports:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - new "Recommendation Trend (Daily)" table shows:
    - module views
    - recommendation impressions
    - suggested taps
    - view->impression rate
    - impression->tap rate
  - includes empty-state messaging and date formatting helper

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add compact sparkline visualization for recommendation trend rows
- optionally break out trend data by suggestion type in API + UI
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 17)

Completed in this cycle:

- Added explicit recommendation impression analytics to explorer admin reporting:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - new funnel counts/rates:
    - `moduleRecommendationImpressions`
    - `moduleRecommendationImpressionRateFromModuleView`
    - `moduleRecommendedSelectionRateFromRecommendationImpression`
  - impressions are counted from module `lesson_viewed` events when recommendation context exists (`hasRecommendedLesson` or typed recommendation metadata)
- Extended suggestion-type analytics rows:
  - `bySuggestionType` now includes `impressionCount` (alias to typed view count for clearer UI semantics)
- Added payload boolean parsing helper in reports API for robust typed handling:
  - new helper: `getPayloadBoolean(...)`
- Updated admin explorer metrics UI for impression-centric conversion visibility:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added funnel KPI card:
    - "Module View → Rec. Impression"
  - changed recommendation tap conversion KPI to impression-based denominator:
    - "Rec. Impression → Suggested Tap"
  - added `recommendationImpressions` raw count tile
  - recommendation-type rows now render "impressions" label

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add time-series/trend view for recommendation impressions and taps
- optionally split recommendation analytics by `topicId` in admin report API/panel
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 16)

Completed in this cycle:

- Extended shared recommendation metadata for analytics/ops reuse:
  - updated `src/lib/explorer/recommendations.ts`
  - added recommendation icon metadata per type
  - added helpers:
    - `isRecommendationType(...)`
    - `toRecommendationType(...)`
- Upgraded explorer reports API to return typed recommendation conversion analytics:
  - updated `src/app/api/admin/reports/explorer/route.ts`
  - `bySuggestionType` now includes:
    - `suggestionType`
    - `label`
    - `icon`
    - `selectionCount`
    - `viewCount`
    - `selectionRateFromTypeViews`
    - `selectionRateFromModuleViews`
  - view counts are sourced from module view events carrying recommendation type metadata
  - selection counts are sourced from `module_recommended_selected` events
- Updated admin explorer panel to show human-friendly recommendation analytics:
  - updated `src/app/admin/reports/explorer-metrics-panel.tsx`
  - recommendation section now renders icon + label instead of raw IDs
  - displays per-type views and conversion rates:
    - type CTR (selections / type views)
    - module-view CTR (selections / total module views)

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally add recommendation-type trend series (7d sparkline per type) to admin panel
- optionally separate “recommendation impressions” and “recommendation selections” in top-level funnel cards
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 15)

Completed in this cycle:

- Extended admin explorer reporting with recommendation-type breakdowns:
  - API update: `src/app/api/admin/reports/explorer/route.ts`
    - added `bySuggestionType` aggregate
    - aggregates from telemetry payload keys:
      - `suggestionType`
      - `recommendationType`
- Extended admin explorer metrics UI to visualize recommendation reasons:
  - panel update: `src/app/admin/reports/explorer-metrics-panel.tsx`
  - added new section:
    - "Recommendation Types"
    - ranked counts for suggestion type values in current window
  - adjusted summary grid to fit the additional analytics panel

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- map suggestionType IDs to human-friendly labels in admin panel (`due_review` -> "Review Due", etc.)
- optionally add recommendation-type conversion rates (per type) from module views
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 14)

Completed in this cycle:

- Centralized recommendation metadata for explorer module guidance:
  - new helper module: `src/lib/explorer/recommendations.ts`
  - exports:
    - `RecommendationType`
    - `getRecommendationMeta(...)`
  - standardized recommendation metadata now includes:
    - `label`
    - `hint`
    - `pageCue`
- Wired shared recommendation metadata into CTA rendering:
  - updated `src/app/explore/_components/recommended-lesson-link.tsx`
  - removed duplicated local recommendation mapping
  - CTA now reads recommendation copy from shared helper
- Added module-level recommendation rationale line (reader mode):
  - updated `src/app/explore/module/[moduleId]/page.tsx`
  - when recommended lesson is shown, page now renders:
    - recommendation label
    - concise "why now" cue (`pageCue`)
  - rationale uses `explore-copy-heavy` and remains hidden in pre-reader mode

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- optionally surface recommendation icon metadata to align visual semantics between CTA and module-level rationale
- optionally expose recommendation labels in admin explorer reports for recommendation-type breakdowns
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 13)

Completed in this cycle:

- Improved recommendation clarity on visual module pages (reader mode):
  - updated `src/app/explore/_components/recommended-lesson-link.tsx`
  - recommendation CTA now includes both a badge and a short reason hint:
    - `due_review` -> "Review Due" + "Time to revisit this skill."
    - `new_path` -> "New Step" + "A lesson not started yet."
    - `sequential` -> "Next Step" + "Continue your latest path."
    - `fallback` -> "Suggested" + "A strong place to begin."
  - pre-reader mode remains icon-only to preserve low-text UX.
- Replaced raw flashcard `<img>` rendering with validated `next/image` flow:
  - updated `src/app/explore/_components/visual-flashcards.tsx`
  - added URL sanitization guard for flashcard image sources
  - local assets (`/path`) render through optimized Next image path
  - remote `http/https` sources render through a safe unoptimized loader fallback
  - invalid/unsupported URLs are skipped gracefully

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add explicit "why this is recommended" line on module page itself (outside CTA) for stronger glanceability
- consider centralizing recommendation metadata (label/hint/icon) for reuse in analytics/admin reporting
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 12)

Completed in this cycle:

- Added “recommended next lesson” shortcut on visual module pages:
  - new component: `src/app/explore/_components/recommended-lesson-link.tsx`
  - recommendation logic wired in `src/app/explore/module/[moduleId]/page.tsx`
  - recommendation priorities:
    - earliest scheduled review in module (`next_review_at`) when available
    - first unstarted lesson
    - sequential next lesson after resume point
    - first module lesson fallback
  - duplicate CTA suppression when recommendation equals resume lesson
- Expanded explorer telemetry for recommendation interactions:
  - `src/lib/analytics/explorer-events.ts`
  - new action: `module_recommended_selected`
  - optional payload field: `suggestionType`
- Expanded admin explorer funnel reporting for recommendation taps:
  - API update: `src/app/api/admin/reports/explorer/route.ts`
    - new count: `moduleRecommendedSelections`
    - new rate: `moduleRecommendedSelectionRateFromModuleView`
  - admin panel update: `src/app/admin/reports/explorer-metrics-panel.tsx`
    - surfaces new recommendation count and conversion rate

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain)
- `npm run build` passes successfully

Open focus for next cycle:

- convert `visual-flashcards` image rendering from raw `<img>` to optimized/validated image strategy
- add recommendation reason text cues on module page for reader mode (“review due”, “new lesson”, etc.)
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 11)

Completed in this cycle:

- Added resume shortcut on visual explore module page using learner progress:
  - `src/app/explore/module/[moduleId]/page.tsx`
  - server-side query against `user_learning_progress` scoped to module lesson IDs
  - chooses most recently reviewed lesson and renders a quick resume CTA
  - module page now marked `dynamic = "force-dynamic"` to support user-aware rendering
- Added dedicated resume link component with explorer telemetry:
  - `src/app/explore/_components/resume-lesson-link.tsx`
  - tracks `module_lesson_selected` interactions for resume taps
- Tightened module lesson cards for stricter pre-reader mode:
  - `src/app/explore/_components/module-lesson-link.tsx`
  - pre-reader view now uses icon + step-number visual language with lesson details moved to screen-reader text
  - reader mode retains title/type/duration labels

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain)
- `npm run build` passes successfully

Open focus for next cycle:

- add “next suggested lesson” hint (not just last reviewed) using review-due + mastery signals
- migrate `visual-flashcards` `<img>` to optimized image handling where possible
- continue curriculum depth rewrite tranche

## Handoff Update (2026-02-25, cycle 10)

Completed in this cycle:

- Added explorer toolbar sync indicator for queued offline telemetry:
  - new component: `src/app/explore/_components/telemetry-sync-pill.tsx`
  - integrated into toolbar: `src/app/explore/_components/explore-toolbar.tsx`
- Sync pill behavior:
  - shows when queued learning-event telemetry exists or manual flush is in progress
  - displays queued count in reader mode and icon-only status in pre-reader mode
  - supports manual retry flush via `flushLearningEventQueue()`
  - refreshes queued-count status on interval and on `online` / `visibilitychange`

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain)
- `npm run build` passes successfully

Open focus for next cycle:

- icon-only module lesson cards for stricter pre-reader mode
- optional “last lesson resume” chip on explore module pages
- continue curriculum depth pass

## Handoff Update (2026-02-25, cycle 9)

Completed in this cycle:

- Added visual explore-module overview route to keep children in image-first flow:
  - new route: `src/app/explore/module/[moduleId]/page.tsx`
  - renders immersive themed module page with large lesson cards and direct links to explore lesson flow (`/explore/learn/[lessonId]`)
  - supports `?topicId=` context and falls back to best-matching explorer world theme if topic context is missing
  - canonical module lookup/redirect behavior preserved for stable URLs
- Added module lesson link component with explorer telemetry:
  - `src/app/explore/_components/module-lesson-link.tsx`
  - emits `module_lesson_selected` action with topic/module/lesson metadata
- Extended explorer routing helpers:
  - `src/lib/routing/paths.ts`
  - new `toExploreModulePath(moduleId, topicId?)`
- Updated topic-world to module navigation to remain inside visual flow:
  - `src/app/explore/_components/adventure-card-link.tsx` now routes to `/explore/module/[moduleId]?topicId=...`
  - `src/app/explore/[topicId]/page.tsx` fallback module links now use visual module route
- Extended explorer topic utilities:
  - `src/lib/explorer/topics.ts`
  - new `getBestExplorerTopicForModule(...)` for contextual world theming on module pages
- Expanded explorer telemetry schema and view tracking:
  - `src/lib/analytics/explorer-events.ts`
    - added surface: `module`
    - added action: `module_lesson_selected`
    - supports module/lesson identifiers in payload
  - `src/app/explore/_components/explorer-view-tracker.tsx`
    - now supports `surface="module"` and optional payload/moduleId
- Upgraded admin explorer analytics summary/UI for module funnel visibility:
  - API: `src/app/api/admin/reports/explorer/route.ts`
    - adds `moduleViews`, `moduleSelections`, `moduleLessonSelections`
    - adds rates: `moduleViewRateFromTopicView`, `moduleLessonSelectionRateFromModuleView`
    - adds `byModule` aggregate and recent-event `moduleId`
  - panel: `src/app/admin/reports/explorer-metrics-panel.tsx`
    - surfaces new module funnel rates and counts
    - adds "Top Modules" table and module column in recent events

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in admin alerts; existing `<img>` warning remains in explore flashcards)
- `npm run build` passes successfully

Open focus for next cycle:

- tune module overview for stricter icon-only pre-reader variant (optional text suppression for age 3-5)
- add quick resume row on module page (last started lesson per user if progress exists)
- replace `visual-flashcards` raw `<img>` with optimized `next/image` path where feasible

## Handoff Update (2026-02-25, cycle 8)

Completed in this cycle:

- Added offline-friendly xAPI-lite telemetry queueing and reconnect flush behavior:
  - replaced telemetry client implementation in `src/lib/analytics/xapi-lite.ts`
  - new local queue storage key: `koydo.telemetry.learning_event_queue.v1`
  - bounded queue retention (max 250 events)
  - batched flushes to `/api/telemetry/events` in chunks of 25 (aligned to API max)
  - auto-flush triggers on:
    - browser reconnect (`online`)
    - tab becoming visible (`visibilitychange`)
    - successful immediate event delivery follow-up
  - 4xx non-auth malformed events are dropped from queue to avoid permanent queue blockage
  - 401/5xx/network failures are retained for retry
  - added helpers:
    - `flushLearningEventQueue()`
    - `getQueuedLearningEventCount()`
- Reliability behavior change:
  - `sendBeacon` path is now limited to hidden-tab contexts; active interactions prefer `fetch` so failures can be detected and queued.

Validation:

- `npm run lint` passes with warnings only (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`; existing explorer flashcards `<img>` warning remains)
- `npm run build` passes successfully

Open focus for next cycle:

- expose queued telemetry status in UI for parent/admin observability (optional small sync badge)
- add retry/backoff jitter for very high-frequency outage periods
- continue icon-only lobby variant for ages 3-5

## Handoff Update (2026-02-25, cycle 7)

Completed in this cycle:

- Added persistent pre-reader mode for the visual explorer flow (default on, local-storage backed):
  - new provider/context: `src/app/explore/_components/pre-reader-mode.tsx`
  - scoped mode state emitted via `data-pre-reader-mode` for CSS-level adaptation
- Refactored explorer layout navigation into a mode-aware client toolbar:
  - new toolbar: `src/app/explore/_components/explore-toolbar.tsx`
  - updated layout wrapper: `src/app/explore/layout.tsx`
  - pre-reader toolbar behavior now reduces visible options, emphasizes icon/tap targets, and keeps parent sign-in available
- Applied caption-light UI behavior across explorer discovery surfaces:
  - world cards: `src/app/explore/_components/scene-card.tsx`
  - question bubbles: `src/app/explore/_components/question-bubble.tsx`
  - world portals: `src/app/explore/_components/world-portal.tsx`
  - related adventures: `src/app/explore/_components/adventure-card-link.tsx`
  - text-heavy section headings now collapse in pre-reader mode: `src/app/explore/page.tsx`, `src/app/explore/[topicId]/page.tsx`
- Applied icon-forward controls in the immersive lesson runtime:
  - lesson shell and phase pills: `src/app/explore/learn/[lessonId]/explore-lesson-flow.tsx`
  - chunk, quiz, activity, and celebration controls now provide compact/icon affordances in pre-reader mode:
    - `src/app/explore/_components/visual-chunk-stepper.tsx`
    - `src/app/explore/_components/visual-quiz.tsx`
    - `src/app/explore/_components/visual-activity.tsx`
    - `src/app/explore/_components/lesson-celebration.tsx`
- Extended explorer telemetry with mode-toggle interaction tracking:
  - `src/lib/analytics/explorer-events.ts` now supports `pre_reader_mode_toggled` with mode payload
- Fixed existing offline progress type mismatch in explore lesson flow:
  - updated `saveOfflineProgress` payload shape to `{ score, totalQuestions }` in `src/app/explore/learn/[lessonId]/explore-lesson-flow.tsx`

Validation:

- `npm run lint` passes with warnings only (existing unrelated admin-alert warnings remain in `src/app/api/admin/alerts/run/route.ts`)
- `npm run build` passes successfully

Open focus for next cycle:

- add an optional fully icon-only lobby mode variant (no visible text labels at all) for ages 3-5
- introduce child-safe visual cue packs per topic (illustrated icon sets matched to prompt semantics)
- add offline retry/sync status UX for explorer lesson progress saves and deferred telemetry

## Handoff Update (2026-02-25, cycle 6)

Completed in this cycle:

- Explorer telemetry instrumentation shipped for the image-first child flow:
  - shared explorer telemetry client helpers: `src/lib/analytics/explorer-events.ts`
  - page-view tracker component: `src/app/explore/_components/explorer-view-tracker.tsx`
  - lobby world-tap tracking: `src/app/explore/_components/scene-link-card.tsx` + `src/app/explore/page.tsx`
  - question-bubble selection tracking: `src/app/explore/_components/question-bubble.tsx`
  - portal world-switch tracking: `src/app/explore/_components/world-portal.tsx`
  - related adventure card selection tracking: `src/app/explore/_components/adventure-card-link.tsx` + `src/app/explore/[topicId]/page.tsx`
- Added admin explorer analytics API:
  - `src/app/api/admin/reports/explorer/route.ts`
  - returns 30-day default JSON summary (funnel metrics, by-action counts, by-topic counts, recent events)
  - secured by existing admin auth gate (`requireAdminForApi`)
- Validation:
  - `npm run lint` has 0 new errors (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)
  - `npm run build` passes
  - `/api/admin/reports/explorer` responds (401 for unauthenticated request, as expected)

Open focus for next cycle:

- wire explorer analytics summary into admin reports UI (cards/charts) for non-API visibility
- add icon-only/caption-light mode toggle for pre-readers
- add offline-friendly fallback telemetry queue for anonymous/local pre-reader sessions

## Handoff Update (2026-02-25, cycle 5)

Completed in this cycle:

- GUI direction pivot for pre-readers from text-heavy navigation to image-first exploration:
  - new visual explorer entry route: `src/app/explore/page.tsx`
  - new topic drill-down route: `src/app/explore/[topicId]/page.tsx`
  - new explorer topic/semantic mapping engine: `src/lib/explorer/topics.ts`
  - topic image assets added in `public/explorer/*` (tree, ocean, rocket, numbers, storybook, globe)
- New kid-friendly flow:
  - child taps an image topic (example: tree) and receives topic-specific question bubbles
  - each question routes directly into a related lesson/module path with fewer clicks
  - optional in-browser read-aloud button for prompts/questions (`src/app/explore/_components/speak-button.tsx`)
- Home and catalog rerouting:
  - homepage (`src/app/page.tsx`) now prioritizes "Start With Pictures" and minimizes dense link walls
  - module catalog (`src/app/modules/page.tsx`) now includes a direct "Visual Explorer" entry
- Validation:
  - `npm run build` passes with new routes
  - `npm run lint` has 0 errors (existing unrelated warnings remain in `src/app/api/admin/alerts/run/route.ts`)

Open focus for next cycle:

- add voice-first mode with auto-play narrated prompts and larger icon-only controls
- add telemetry for topic taps/question taps to measure explorer completion funnel
- create 3-5 richer child-safe illustrated topic packs and tie them to age-banded module quality scoring

## Handoff Update (2026-02-25, cycle 4)

Completed in this cycle:

- Applied external curriculum imports with `npm run curriculum:import:external:apply` against `../External_AI_Agents`:
  - 19 units discovered/processed
  - 18 external module metadata updates applied in the first run (1 duplicate source-unit skipped)
  - no merges into canonical non-external modules in this batch
- Hardened importer idempotency in `scripts/import-external-curriculum.mjs`:
  - added no-op write detection for external replacements and merges by comparing normalized module content while ignoring volatile timestamp fields (`metadata.importedAt`, `metadata.externalMergeLastAt`, `external.externalMergeLastAt`)
  - added duplicate source-unit suppression within a single run using canonical source-unit IDs
  - prioritized JSX/JS/TS sources ahead of JSON when discovering import sources to avoid lower-fidelity sample payloads overriding richer authored units
  - normalized canonical source unit IDs to treat trailing `-external` suffixes consistently
  - standardized imported metadata to canonical `sourceUnitId` and preserved original variant as `sourceUnitIdRaw` when needed
- Verified idempotent apply behavior:
  - second consecutive `npm run curriculum:import:external:apply` run wrote 0 files and skipped 19 unchanged units
- Validation/build:
  - `npm run curriculum:validate` reports 0 errors, 0 warnings across all 118 modules
  - `npm run build` completes successfully

Open focus for next cycle:

- Continue depth pass on remaining template modules (201/301/401 levels for each subject)
- Continue reducing regenerated report markdownlint noise at generator-source level
- Flesh out pre-K module lesson content (16 placeholders remaining)

## Handoff Update (2026-02-24, cycle 3)

Completed in this cycle:

- Curriculum depth pass — batch 2, four more template modules fully rewritten:
  - `src/lib/modules/catalog/chemistry-101.ts` (v2.0.0): states of matter (particle model), atom structure (protons/neutrons/electrons), periodic table (groups/periods/metals/nonmetals/metalloids), elements vs compounds vs mixtures, 5 signs of chemical reactions, balancing equations, conservation of mass, lab safety, water purification scenario
  - `src/lib/modules/catalog/physics-101.ts` (v2.0.0): motion/speed/velocity, Newton's 3 laws, work/energy (KE/PE/conservation), waves (transverse/longitudinal, properties), Ohm's law and series vs parallel circuits, 6 simple machines, light/optics (reflection/refraction/spectrum/lenses), heat transfer (conduction/convection/radiation), roller coaster design lab
  - `src/lib/modules/catalog/social-studies-us-101.ts` (v2.0.0): Declaration of Independence and Constitution origins, three branches and checks/balances, Bill of Rights (RAPPS), elections and Electoral College, five US regions, landmarks/symbols, colonial-to-Civil-War milestones, cultural diversity and E Pluribus Unum, town hall budget scenario lab
  - `src/lib/modules/catalog/advanced-math-201.ts` (v2.0.0): fractions (representation/comparison/operations), decimals and percentages with conversions, ratios and proportions (cross-multiplication), algebraic expressions and equations (1-step and 2-step), data/graphs (mean/median/mode, graph types), probability basics, budget planning scenario
- All modules follow the same quality bar established in cycle 2: varied correct answers, domain-specific activities (sorting_buckets, drag_and_drop, matching_pairs), real flashcards, per-lesson objectives, explanation fields on all quiz questions
- Validation: `npm run curriculum:validate` reports 0 errors, 0 warnings across all 118 modules
- Total v2.0.0 modules completed: 7 of ~90+ template modules

Open focus for next cycle:

- Continue depth pass on remaining template modules (201/301/401 levels for each subject)
- Apply external curriculum imports (19 units dry-run ready) with `--apply` flag
- Continue reducing regenerated report markdownlint noise at generator-source level
- Flesh out pre-K module lesson content (16 placeholders remaining)

## Handoff Update (2026-02-24, cycle 2)

Completed in this cycle:

- Curriculum depth pass — replaced template-generated content with real educational material in three high-traffic foundational modules:
  - `src/lib/modules/catalog/basic-math-101.ts` (v2.0.0): real place value, addition/subtraction algorithms, regrouping, estimation, word problems with varied correct answers, subject-specific interactive activities
  - `src/lib/modules/catalog/biology-101.ts` (v2.0.0): real cell biology (organelles, plant vs animal), body systems and homeostasis, ecosystem energy flow and food webs, genetics/DNA/inheritance, natural selection and adaptation, coral reef conservation scenario
  - `src/lib/modules/catalog/language-arts-101.ts` (v2.0.0): real main idea and supporting details, context clue types with signal words, sentence structure (simple/compound/complex), paragraph writing with PEE structure, story elements and theme analysis, "The Lost Kite" mini-story scenario lab
- Key quality improvements across all three modules:
  - quiz questions now have varied correct option positions (not always "a"), specific explanations, and distinct plausible distractors
  - interactive activities use real subject data (e.g., sorting organelles into plant/animal cells, classifying addition strategies, identifying context clue types)
  - flashcards contain actual domain definitions rather than generic placeholders
  - chunks provide real educational content with worked examples and practice prompts
  - lesson objectives added per-lesson for standards alignment
- Validation: `npm run curriculum:validate` reports 0 errors, 0 warnings across all 118 modules

Open focus for next cycle:

- Apply the same curriculum depth pass to additional high-traffic modules: `chemistry-101`, `physics-101`, `us-history-101`, `advanced-math-101`
- Apply external curriculum imports (19 units dry-run ready) with `--apply` flag
- Continue reducing regenerated report markdownlint noise at generator-source level
- Flesh out pre-K module lesson content (16 placeholders remaining)

## Handoff Update (2026-02-24, cycle 1)

Completed in the previous unattended cycle:

- Curriculum/runtime stability:
  - resolved module-lesson lookup key collisions by aligning runtime and validator to module-scoped aliases
  - `npm run curriculum:validate` now reports 0 errors, 0 warnings
- Accessibility/semantic cleanup in admin and parent surfaces:
  - fixed list semantics (`ul` direct children) in `src/app/admin/compliance/page.tsx` and `src/app/parent/dashboard/page.tsx`
  - added accessible names for previously flagged `select`/`input` controls in:
    - `src/app/admin/compliance/compliance-admin-client.tsx`
    - `src/app/admin/curriculum/curriculum-client.tsx`
    - `src/app/admin/media/media-ops-client.tsx`
    - `src/app/admin/operations/operations-console.tsx`
    - `src/app/admin/reports/reports-client.tsx`
    - `src/app/account/privacy/privacy-client.tsx`
    - `src/app/support/support-client.tsx`
    - `src/app/lessons/[lessonId]/typed-interactive-activity.tsx`
- Lesson runtime polish:
  - replaced inline progress-bar styles with shared `<progress>` styling and cleaned related ARIA issues across lesson runtime components
- Documentation/ops cleanup:
  - fixed markdown lint structure in this plan doc for consistent ordered-list style
  - added workspace editor settings (`.vscode/settings.json`) to improve local schema/lint behavior for workflows and CSS at-rules
- Pipeline verification:
  - re-ran `npm run curriculum:validate; npm run reports:refresh` successfully after fixes

Open focus for next cycle:

- continue reducing regenerated report markdownlint noise at generator-source level (avoid hand-editing generated `public/*.md`)
- optional: tighten workflow lint false-positives with a dedicated GitHub Actions lint profile/config

## Progress Snapshot

Completed this cycle:

- External curriculum handoff export pipeline:
  - `scripts/export-curriculum-state-for-external-agents.mjs`
  - `public/CURRICULUM-STATE-FOR-EXTERNAL-AGENTS.{json,md}`
- External curriculum ingestion bridge (Tranche 1):
  - `scripts/import-external-curriculum.mjs` with `--source-dir` recursive import support
  - importer now supports multiple external JSON shapes (snake_case/camelCase roots, units arrays, single-unit payloads)
  - importer now supports merge automation into existing canonical modules with lesson/objective/locale dedupe
  - merge controls added: `--merge-into-existing`, `--no-merge-into-existing`, `--create-external-when-no-match`, `--sync-registry`
  - confidence-gated merge scoring added with `--merge-threshold` to defer weak matches into external module creation
  - generated module `src/lib/modules/catalog/lang-arts-prek-u1-external.ts`
  - import audit output in `public/EXTERNAL-CURRICULUM-IMPORT-REPORT.{json,md}`
  - scheduled/manual import workflow added: `.github/workflows/curriculum-import.yml`
  - npm shortcuts added:
    - `curriculum:import:external:apply`
    - `curriculum:import:external:apply:strict`
    - `curriculum:import:external:create-only`
- Automated media queue defaults and workflow hardening:
  - `package.json` (`media:queue:auto`)
  - `.github/workflows/media-automation.yml`
- xAPI-lite event pipeline:
  - DB model + RLS policies in `supabase/schema.sql` (`public.learning_events`)
  - ingestion API `src/app/api/telemetry/events/route.ts`
  - client tracking helpers `src/lib/analytics/learning-events.ts`, `src/lib/analytics/xapi-lite.ts`
  - lesson runtime instrumentation in:
    - `src/app/lessons/[lessonId]/lesson-session-tracker.tsx`
    - `src/app/lessons/[lessonId]/quiz.tsx`
    - `src/app/lessons/[lessonId]/interactive-activity.tsx`
    - `src/app/lessons/[lessonId]/video-lesson-player.tsx`
  - telemetry ops visibility:
    - new admin CSV export endpoint: `src/app/api/admin/reports/telemetry/route.ts`
    - report-job queue support for `telemetry` in API + worker scripts (`src/app/api/admin/report-jobs/*`, `scripts/process-report-jobs.mjs`, `scripts/requeue-stale-report-jobs.mjs`)
    - queue SLA summaries now include telemetry report type breakdown
    - admin reports page includes live 7-day telemetry snapshot (events, active learners, completion ratio, interaction depth)
    - generated telemetry artifact report: `public/TELEMETRY-LEARNING-EVENTS-REPORT.{json,md}` via `scripts/telemetry-learning-events-report.mjs`
- Media worker upgrade for optional OpenAI images + fallback:
  - `scripts/process-media-jobs.mjs`
  - `.env.example` additions for OpenAI/media storage settings
- Lesson player upgrade (Tranche 2):
  - tabbed lesson runtime in `src/app/lessons/[lessonId]/lesson-experience.tsx`
  - flashcard deck runtime in `src/app/lessons/[lessonId]/lesson-flashcards.tsx`
  - lesson page server/client split in `src/app/lessons/[lessonId]/page.tsx`
- Activity engine v1 foundation (Tranche 3):
  - typed activity renderer in `src/app/lessons/[lessonId]/typed-interactive-activity.tsx`
  - support for `sorting_buckets`, `matching_pairs`, and `drag_and_drop` scoring flows
  - lesson runtime now synthesizes safe typed activity fallbacks from quiz data when authored activity payloads are missing (`src/app/lessons/[lessonId]/lesson-experience.tsx`)
- Media prompt system improvement (Tranche 4 partial):
  - `scripts/generate-lesson-media-prompts.mjs` now prefers per-lesson prompt overrides before defaults
- Exam error-logbook and remediation loop:
  - DB model + RLS in `supabase/schema.sql` (`public.user_exam_error_logs`)
  - learner APIs in `src/app/api/exam/error-log/route.ts` and `src/app/api/exam/error-log/[errorId]/route.ts`
  - learner review UI in `src/app/exam-prep/error-log/page.tsx`
  - quiz integration for incorrect/timed-out capture in `src/app/lessons/[lessonId]/quiz.tsx`
  - exam hub + dashboard quick links and counts in `src/app/exam-prep/page.tsx` and `src/app/dashboard/page.tsx`
- Exam coverage reporting upgrade:
  - `scripts/exam-prep-coverage-report.mjs` now tracks timed quizzes, structured interactives, mock coverage, and blueprint coverage
  - `scripts/exam-prep-content-quality-report.mjs` now tracks question uniqueness, track-specific wording rate, generic-phrase regressions, and module quality priority
  - `scripts/curriculum-quality-report.mjs` now handles quoted/unquoted key styles so quiz question/aid counts are not under-reported
- Recommendation engine upgrade:
  - `src/app/api/ai/recommendations/route.ts` now scores by unresolved exam errors, top error skills, and timed remediation context
  - `src/app/dashboard/recommended-lesson.tsx` now surfaces recommendation rationale + unresolved exam error indicators + remediation queue links
  - `src/app/exam-prep/page.tsx` now displays top unresolved error skills/types from learner error logs
- Adaptive remediation sequencing (new):
  - shared queue/scoring engine in `src/lib/exam/remediation-queue.ts`
  - dedicated learner API `src/app/api/exam/remediation-queue/route.ts`
  - recommendation API now consumes shared queue output for scoring and rationale
  - exam logbook now renders a sequenced, priority-labeled remediation queue in `src/app/exam-prep/error-log/page.tsx`
- Auto-resolution heuristics for mastered errors:
  - shared heuristic utility `src/lib/exam/error-auto-resolve.ts`
  - preview/apply API in `src/app/api/exam/error-log/auto-resolve/route.ts`
  - learner UI trigger in `src/app/exam-prep/error-log/error-log-client.tsx`
  - mastery/attempt + elapsed-time criteria for safe auto-resolution
  - admin batch endpoint with rate limiting and audit trail: `src/app/api/admin/exam/error-log/auto-resolve/route.ts`
  - scheduled maintenance workflow: `.github/workflows/exam-maintenance.yml`
  - failure writeback alerting to `admin_alerts` via `scripts/create-admin-alert.mjs` and workflow failure hook
  - maintenance runner script for GitHub schedules: `scripts/auto-resolve-exam-errors.mjs`
  - owner console visibility for failure alerts + recent auto-resolve runs in `src/app/admin/operations/*`
  - owner console includes acknowledge + rerun controls for exam maintenance operations
  - run diagnostics hardening:
    - API/manual runs now include structured diagnostics in audit metadata (`topEligibleUsers`, `topUpdatedUsers`, `topErroredUsers`, coverage)
    - workflow runs now publish run-summary alerts (`exam_maintenance_run_summary`) with run/artifact link metadata
    - owner console now renders workflow run summaries and direct link-outs to Actions run + artifact panels
- Exam track taxonomy hardening:
  - typed track registry in `src/lib/exam/tracks.ts` (sections, timing, score scales, skill domains)
  - exam hub cards upgraded to use taxonomy metadata in `src/app/exam-prep/page.tsx`
  - public exam track metadata endpoint `src/app/api/exam/tracks/route.ts`
- Timed drill runtime hardening:
  - quiz runtime now supports drill mode switching (`untimed`, `paced`, `section_sprint`) in `src/app/lessons/[lessonId]/quiz.tsx`
  - section sprint timing now derives from exam track section metadata and lesson question counts
  - telemetry + exam error-log entries now include drill mode and active time-limit context
- Exam module interactivity hardening:
  - updated `scripts/generate-exam-modules.mjs` so quiz lessons also include typed `interactiveActivities` remediation blocks
  - upgraded generator prompts so quiz question text and activity labels now adapt to each exam track focus/strand taxonomy rather than shared generic wording
  - authored per-track activity profiles added for SAT/ACT/AP/GCSE/A-Level/JEE-NEET/Gaokao/IB/TOEFL/IELTS/CUET/ATAR (drag, matching, mock-error-sort data)
  - generator now emits richer scenario-based quiz stems, varied correct-option positions, and 8-question full-mock quiz lessons
  - regenerated exam catalogs in `src/lib/modules/catalog/*-prep-101.ts`
- Exam authoring queue automation:
  - new per-lesson rewrite backlog report `scripts/exam-authoring-backlog-report.mjs`
  - generated outputs in `public/EXAM-AUTHORING-BACKLOG-REPORT.{json,md}` with structured rewrite actions and external-agent prompt template
  - included in report refresh pipeline (`scripts/generate-all-reports.mjs`) and ops artifacts (`.github/workflows/ops-reports.yml`)

Open items:

- Replace generator-derived quiz interactive blocks with fully exam-specific authored content per lesson
- Run new external merge automation on additional subject/grade JSON batches from external agents

## Scope Reviewed

Recursive review completed for:

- `External_AI_Agents/CODING_AGENT_SPEC.md`
- `External_AI_Agents/curriculum_schema.json`
- `External_AI_Agents/curriculum_sample_data.json`
- `External_AI_Agents/curriculum_blueprint.docx`
- `External_AI_Agents/EdTech Expansion & Curriculum Design.docx`
- `External_AI_Agents/EdTech Platform Development Blueprint.docx`
- `External_AI_Agents/Koydo Grok research1.docx`
- `External_AI_Agents/Koydo Research2.docx`
- `External_AI_Agents/Global K-12 Curriculum Blueprint Development.docx`
- `External_AI_Agents/exam_prep_expansion.jsx`
- `External_AI_Agents/lesson_platform.jsx`
- `External_AI_Agents/lesson_platform (1).jsx` (duplicate of `lesson_platform.jsx`)
- `External_AI_Agents/platform_master.jsx`

## Key Findings

1. Content model quality is strong, implementation form is mixed:

  External JSON and DOCX assets contain robust curriculum and exam frameworks, while JSX assets are rich prototypes but monolithic and not production-structured for the current Next.js architecture.

1. Lesson interaction patterns worth adopting:

  Chunked lesson flow, flashcards with card flip and pagination, quiz feedback states with remediation messaging, drag/drop classification activity patterns, and per-lesson Seedance and Lottie prompt blocks.

1. Exam prep strategy is much deeper than current module data:

  Regional exam coverage and prioritization, timing and psychometric design intent (IRT/CAT), and stronger product roadmap/KPI framing.

1. Brand and differentiation research is substantial:

  Candidate name pools with linguistic risk tables, plus defensibility/moat framing and competitive benchmark matrixes.

## Compatibility Assessment Against Current App

Current strengths already in `koydo-web`:

- Module registry and schema validation:
  - `src/lib/modules/types.ts`
  - `src/lib/modules/schema.ts`
  - `src/lib/modules/generated/registry.ts`
- Lesson runtime with video/interactive/quiz rendering:
  - `src/app/lessons/[lessonId]/page.tsx`
  - `src/app/lessons/[lessonId]/quiz.tsx`
  - `src/app/lessons/[lessonId]/interactive-activity.tsx`
- Seedance prompt and media job pipeline:
  - `src/lib/media/seedance-prompts.ts`
  - `src/app/api/admin/media/prompt-pack/route.ts`
  - `src/app/api/admin/media/jobs/queue-from-pack/route.ts`
- SRS utility already exists:
  - `src/lib/srs.ts`
- Curriculum expansion and quality reporting already exists:
  - `src/lib/admin/curriculum-summary.ts`
  - `src/lib/admin/curriculum-backlog.ts`

Main gaps:

- Module content is mostly template/generated and repetitive for many tracks.
- Exam tracks currently lack exam-specific skill taxonomies and timed simulation UX.
- Most modules still rely on generated default media prompts and need richer lesson-specific prompt craft.

## Adopt / Adapt / Defer Decisions

Adopt now:

- `curriculum_schema.json` structure concepts (grade bands, content tiers, activity taxonomy, quiz blueprint).
- `curriculum_sample_data.json` as seed/source for converter tooling.
- `lesson_platform.jsx` flashcard UX and quiz feedback mechanics.
- `platform_master.jsx` subject color system and lesson tab IA.
- `exam_prep_expansion.jsx` exam metadata scaffolding (regions/tracks/skills timing categories).

Adapt before use:

- All JSX prototypes must be decomposed into typed components and data files.
- Brand/name tables must be treated as candidate input only, not final legal output.
- xAPI model should be implemented as a phased "xAPI-lite" telemetry envelope first.

Defer:

- Full psychometric IRT/CAT engine production rollout.
- Full cross-country exam expansion to all listed exams.
- Full LRS stack integration until event volume and analytics requirements are finalized.

## Proposed Implementation Tranches

### Tranche 1: Schema Bridge and Content Ingestion

Goals:

- Extend lesson/module types to support:
  - `chunks`
  - `flashcards`
  - `interactiveActivities` (typed)
  - rich `quizBlueprint`
  - per-lesson `videoPrompt` and `animPrompt`
- Build converter script:
  - input: `External_AI_Agents/curriculum_sample_data.json`
  - output: typed module catalog files under `src/lib/modules/catalog/`

Deliverables:

- Updated `src/lib/modules/types.ts` and `src/lib/modules/schema.ts`
- Ingestion script in `scripts/`
- Validation report for generated modules

### Tranche 2: Lesson Player Upgrade (Interactive UX)

Goals:

- Replace single-mode lesson UI with tabbed lesson runtime:
  - Learn
  - Flashcards
  - Interactive
  - Quiz
  - Media
- Port flashcard behavior and quiz result UX from prototype patterns.

Deliverables:

- New lesson UI components under `src/app/lessons/[lessonId]/`
- Backward compatibility for existing lesson types

### Tranche 3: Activity Engine v1

Goals:

- Add typed activity rendering for:
  - `drag_and_drop`
  - `matching_pairs`
  - `sorting_buckets`
- Add score and completion semantics for activities.

Deliverables:

- `InteractiveActivity` refactor to activity-type renderer
- Activity attempt tracking payloads

### Tranche 4: Media Prompt System Upgrade

Goals:

- Store lesson-specific Seedance/Lottie prompts from content data.
- Extend prompt-pack generation from module content.
- Tighten media job metadata for versioning and QA status.

Deliverables:

- Updated prompt-pack generation and queue APIs
- Admin UI filters by asset type/module/lesson already leveraged for richer prompt content

### Tranche 5: Exam Prep Content Hardening

Goals:

- Replace generic exam prep module text with exam-specific lesson structures.
- Start with P0 tracks:
  - SAT
  - ACT
  - AP core
  - GCSE
  - A-Level
  - JEE/NEET
- Add timed section drills and error logbook model.

Deliverables:

- Rewritten exam module catalogs
- Timed practice mode UX hooks

### Tranche 6: Telemetry (xAPI-lite) and Quality Loop

Goals:

- Emit normalized learning events:
  - `chunk_viewed`
  - `flashcard_flipped`
  - `activity_interacted`
  - `quiz_answered`
  - `lesson_completed`
- Persist to Supabase for analytics and remediation inputs.

Deliverables:

- Event envelope spec and helper
- API route/table for event ingestion
- Curriculum quality report enrichment

### Tranche 7: Brand and Positioning Workstream

Goals:

- Convert external naming tables into a tracked shortlist workflow.
- Add legal review checkpoints (trademark/domain/language risk).
- Keep product codename unchanged until legal validation complete.

Deliverables:

- Shortlist document with scoring criteria and decision log
- Naming decision gate in roadmap

## Recommended Execution Order

1. Tranche 1
2. Tranche 2
3. Tranche 4
4. Tranche 3
5. Tranche 5
6. Tranche 6
7. Tranche 7

Rationale:

- First establish data model compatibility.
- Then unblock learner-facing value (lesson UX and media quality).
- Then deepen exam quality and telemetry.

## Risk Notes

- Data bloat risk if full DOCX-derived scope is ingested too early.
- Prompt quality inconsistency risk without prompt QA gates.
- Schema migration risk if existing module consumers assume old structure only.
- Legal risk if candidate names are treated as final without trademark counsel.

## Suggested Immediate Next Actions

1. Start Tranche 5 by hardening one exam module family end-to-end (content, taxonomy, timed drills).
2. Add typed interactive activity datasets to at least 10 high-traffic lessons to exercise Tranche 3 in production paths.
3. Expand external curriculum imports beyond the initial preK language arts seed file.
4. Continue curriculum depth pass to replace placeholder/generated lessons across all subjects and grades.
5. Add error-log driven recommendations in dashboard/exam-prep (next remediation pass).
6. Add remediation completion automation (auto-resolve suggestions when mastery and retest thresholds are met).
