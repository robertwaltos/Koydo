# Koydo EduForge-Web Codebase Review Report

**Date:** 2025-07-22 (Updated: 2025-07-23)  
**Scope:** `d:\PythonProjects\Koydo\eduforge-web\`  
**Stack:** Next.js 16.1.6 · React 19.2.3 · TypeScript 5.9.3 · Supabase · Stripe · Capacitor 8.x · Zod 4.3.6

> **Resolution Legend:** ✅ RESOLVED | 🔧 MITIGATED | ⏳ DEFERRED | ❌ OPEN

---

## 1. CRITICAL Issues (Blocks Launch)

### ✅ C-1  `activities` field silently stripped by Zod — hand-crafted interactive content lost

**Files:**
- `src/lib/modules/schema.ts` (line 141) — `lessonSchema` defines `interactiveActivities` but **NOT** `activities`
- `src/lib/modules/index.ts` (line 6–11) — `safeParse()` parses registry, stripping unknown fields
- `src/app/lessons/[lessonId]/lesson-experience.tsx` (line 226) — renderer reads **only** `lesson.interactiveActivities`
- `src/lib/modules/types.ts` — `Lesson` type has **both** `activities?: InteractiveActivity[]` and `interactiveActivities?: InteractiveActivity[]`

**Impact:** At least **10 gold-standard modules** declare their interactive activities under the `activities` field:
- `coding-101.ts` (8 lessons × activities)
- `arts-101.ts` (8 lessons × activities)
- `astronomy-101.ts` (8 lessons × activities)
- `geography-101.ts` (8 lessons × activities)
- `world-history-101.ts` (8 lessons × activities)
- `language-arts-201.ts` (8 lessons × activities)
- `us-civics-201.ts` (6 lessons × activities)
- `pre-k-biology-101.ts`, `pre-k-geography-101.ts`, `pre-k-general-science-101.ts` (8 lessons each)

Zod `z.object()` strips properties not listed in the schema. After `safeParse()`, the `activities` data is gone. The renderer then checks `lesson.interactiveActivities` (empty/undefined), falls back to `synthesizeInteractiveActivities()` which auto-generates basic activities from quiz/flashcard data — users never see the carefully authored interactive content.

**Fix:** Either:
- (a) Add `activities: z.array(interactiveActivitySchema).optional()` to `lessonSchema` AND update `lesson-experience.tsx` to fall back to `lesson.activities` when `interactiveActivities` is empty, OR
- (b) Bulk rename `activities` → `interactiveActivities` across all affected catalog modules (preferred — eliminates the ambiguity permanently)

---

### ✅ C-2  In-memory rate limiting is per-instance — ineffective on Vercel/serverless

> **Status:** RESOLVED — Replaced with dual-mode rate limiter: Upstash Redis sliding-window in production (set `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`), graceful fallback to in-memory for dev. Installed `@upstash/ratelimit` + `@upstash/redis`. All 43 call sites updated to async. Env vars added to `serverEnvSchema`.

**File:** `src/lib/security/ip-rate-limit.ts` (entire file, ~92 lines)

**Detail:** Rate limiting uses `new Map<string, Bucket>()` stored in module-level memory. On Vercel (or any serverless platform), each cold start creates a fresh empty Map. An attacker hitting different instances bypasses limits entirely.

**Impact:** Routes relying on this for abuse prevention (`/api/stripe/checkout`, `/api/account/delete`) have no effective rate limiting in production.

**Fix:** Switch to Redis-backed rate limiting (e.g., `@upstash/ratelimit`) or Vercel Edge middleware rate limiting. The `Map` approach only works on long-lived single-process servers.

---

### ✅ C-3  All critical environment variables are `.optional()` — no startup validation

> **Status:** RESOLVED — critical vars now have `.min(1)` with descriptive error messages in `env.ts`.

**File:** `src/lib/config/env.ts`

The `serverEnvSchema` marks every key (including `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) as `.optional()`. The app boots successfully with empty/missing env and crashes at the first Supabase or Stripe call at runtime — no fail-fast behavior.

**Fix:** Make essential vars `.min(1)` (not optional) and call the validation at build time or server startup, throwing a clear error listing all missing vars.

---

## 2. HIGH Issues (Should Fix Before Launch)

### ✅ H-1  Multiple API routes missing rate limiting

> **Status:** RESOLVED — Rate limiting added to all 5 unprotected routes: `api/progress` (30/min), `api/answers` (60/min), `api/ai/tutor` (10/min), `api/telemetry/events` (30/min), `api/health` (60/min). All use `enforceIpRateLimit` with Retry-After headers.

| Route | Auth | Zod | Rate Limit |
|---|---|---|---|
| `api/progress/route.ts` | Yes | Yes | **No** |
| `api/answers/route.ts` | Yes | Yes | **No** |
| `api/ai/tutor/route.ts` | Yes | Yes | **No** (has daily DB usage cap) |
| `api/telemetry/events/route.ts` | Yes | Yes | **No** |
| `api/health/route.ts` | No | N/A | **No** |

The AI tutor endpoint is the most expensive — no rate limiting means a compromised token could burn API credits. The health endpoint has no auth and no rate limiting, enabling infrastructure probing.

---

### ✅ H-2  Two routes bypass env validation with `process.env!` assertions

> **Status:** RESOLVED — `subscription/status/route.ts` now uses `serverEnv.NEXT_PUBLIC_APP_URL`. `revenuecat/webhook/route.ts` lazy factory now uses `serverEnv.NEXT_PUBLIC_SUPABASE_URL` / `serverEnv.SUPABASE_SERVICE_ROLE_KEY` and webhook secret via `serverEnv.REVENUECAT_WEBHOOK_SECRET`. `REVENUECAT_WEBHOOK_SECRET` added to env schema.

- **`src/app/api/subscription/status/route.ts`** — uses `process.env.NEXT_PUBLIC_SUPABASE_URL!` directly
- **`src/app/api/revenuecat/webhook/route.ts`** — creates `supabaseAdmin` at **module scope** using `process.env.NEXT_PUBLIC_SUPABASE_URL!` and `process.env.SUPABASE_SERVICE_ROLE_KEY!`

These routes sidestep the `serverEnv` validation layer. If env vars are missing, the non-null assertion (`!`) silently produces `undefined`, causing confusing runtime errors instead of clear validation failures.

The RevenueCat route also creates the admin client at module import time (not lazily), triggering a Supabase connection for every cold start even if the webhook is never called.

---

### ✅ H-3  CSP includes `unsafe-eval` and `unsafe-inline`

> **Status:** RESOLVED — CSP moved from static `next.config.ts` header to dynamic per-request nonce in `proxy.ts`. Production uses `'nonce-<random>' 'strict-dynamic'` — no `unsafe-eval`, no `unsafe-inline` for scripts. `style-src 'unsafe-inline'` retained (standard for Tailwind). Dev mode keeps `unsafe-eval`/`unsafe-inline` for HMR.

**File:** `next.config.ts` (CSP header definition)

```
script-src 'self' 'unsafe-eval' 'unsafe-inline' ...
```

`unsafe-eval` allows `eval()`, `Function()`, and related — this is a significant XSS vector. `unsafe-inline` allows arbitrary inline scripts. For an educational platform handling children's data, this is a compliance concern (COPPA, FERPA).

**Fix:** Use nonce-based CSP (`'nonce-xxxx'`) and remove both `unsafe-*` directives. Next.js supports `nonce` via `headers()` and `<Script strategy="afterInteractive" nonce={...} />`.

---

### ✅ H-4  ~100+ modules still at v1.0.0 template scaffold quality

> **Status:** RESOLVED — Auto-draft system implemented. Modules with `version: "1.0.0"` are automatically marked `status: "draft"` at registry init and filtered from `getAllLearningModules()`. Template `localeSupport` also corrected to `["en"]` only.

100+ catalog modules have `version: "1.0.0"` with generic placeholder content. Template-quality modules have these characteristics:
- Generic quiz questions like *"Which choice best matches the main idea of [Subject]?"*
- Only 2 quiz questions per lesson (gold standard has 3+)
- No content chunks, no flashcards, no interactive activities, no answer explanations
- Boilerplate lesson content that doesn't teach the actual subject

**Categories of v1.0.0 template modules (count):**

| Category | Modules |
|---|---|
| AI/ML & CS | ai-machine-learning-{201,301,401}, cloud-computing-{101,201}, cpu-gpu-memory-design-{101–401}, cybersecurity-{201–401}, data-science-{101–401}, micro-circuits-{101–301}, microelectronics-{101–401}, network-engineering-{101,201}, robotics-{101–401} |
| Engineering & Trades | civil-engineering-{101–401}, electrical-engineering-{101–401}, electrician-electricity-{101–401}, hvac-{101–401}, plumbing-{101–401}, renewable-energy-systems-{101–401} |
| Medical & Science | biotechnology-101, medicine-{101–401}, meteorology-{101–401}, nursing-{101–401} |
| Business & Professional | digital-marketing-101, entrepreneurship-101, law-studies-{101–401}, project-management-{201–401}, ux-design-101 |
| Exam Prep | atar-prep-101, cuet-prep-101, gaokao-prep-101, gcse-prep-101, ib-prep-101, ielts-prep-101, jee-neet-prep-101, toefl-prep-101 |
| OS Fundamentals | linux-101, macos-101, windows-101 |
| Pre-K (real content, unversioned) | pre-k-{advanced-math, astronomy, chemistry, coding, farming, financial-literacy, general-relativity, household-management, physics, social-studies-us, social-studies-world, world-history}-101 |
| Other | apple-vision-science-lab |

**Note:** Pre-K modules have real authored content (activities, flashcards, substantive lessons) but just haven't been version-bumped. The rest are true scaffolds.

**Risk:** Shipping 100+ template-quality modules dilutes the catalog and creates a poor first impression when users open one. Consider:
- Hiding template modules behind a `status: "draft"` flag
- Prioritizing upgrade of modules that appear in default browse/search results

---

## 3. MEDIUM Issues (Fix Soon After Launch)

### ✅ M-1  Duplicate field ambiguity: `activities` vs `interactiveActivities` on `Lesson` type

> **Status:** RESOLVED — `activities` field removed from `Lesson` type in `types.ts` and `lessonSchema` in `schema.ts`. All 25 catalog modules that used `activities:` bulk-migrated to `interactiveActivities:`. Fallback logic in `lesson-experience.tsx` (line 226–231) removed. Single canonical field `interactiveActivities` now used everywhere.

**File:** `src/lib/modules/types.ts`

The `Lesson` interface previously defined:
```ts
activities?: InteractiveActivity[];
interactiveActivities?: InteractiveActivity[];
```

Same type, two field names, only one validated by schema, only one read by renderer. This created confusion for module authors.

---

### ✅ M-2  Loose index signatures weaken TypeScript safety

> **Status:** RESOLVED — All 3 `[key: string]: unknown` index signatures removed from `InteractiveActivity`, `QuizBlueprint`, and `Lesson`. Replaced with 5 explicit optional fields on `InteractiveActivity`: `buckets?: string[]`, `items?: (string | { id?: string; text: string; bucket: string })[]`, `pairs?: { id?: string; left: string; right: string }[]`, `prompt?: string`, `zones?: string[]`. Union types used for `items` and `pairs` to accommodate varied usage patterns. `music-history-101.ts` non-standard quiz format converted to standard. Build passes with 0 TypeScript errors.

**File:** `src/lib/modules/types.ts`

Both `Lesson` and `InteractiveActivity` interfaces previously included `[key: string]: unknown`, which allowed any arbitrary property without type checking.

---

### ✅ M-3  Template modules advertise 10-locale support, only 2 are active

> **Status:** RESOLVED — Registry init now corrects `localeSupport` to `["en"]` for all v1.0.0 modules.

**File:** `src/lib/i18n/translations.ts`

- `SUPPORTED_LOCALES`: 10 languages (en, es, fr, de, ar, hi, zh, ja, ko, ru)
- `ACTIVE_LOCALES`: only `["en", "es"]`

Template modules declare `localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"]` — this is misleading since actual locale switching only works for en/es. Module listings could surface a "10 languages" badge to users who then find the content is English-only.

**Fix:** Set template module `localeSupport` to `["en"]` until translations actually exist. Or add a UI indicator showing which locales are "coming soon."

---

### M-4  `.bak` files polluting catalog directory

**Location:** `src/lib/modules/catalog/`

Multiple `.bak` files (e.g., `accounting-finance-101.ts.bak5`, `arts-101.ts.bak3`, `arts-101.ts.bak4`) exist in the catalog directory. These are dead files that add to the repo size and could cause confusion.

**Fix:** Add `*.bak*` to `.gitignore` and delete existing backup files.

---

### ✅ M-5  Eager registry validation at module load — 300+ modules parsed synchronously

> **Status:** RESOLVED — Removed runtime `safeParse()` from `index.ts`. TypeScript compile-time type checking provides the same safety without runtime cost.

**File:** `src/lib/modules/index.ts` (line 6)

```ts
const parsedRegistry = moduleRegistrySchema.safeParse(generatedModuleRegistry);
```

This runs Zod validation on 300+ complete module objects at import time, blocking the first page load. The validation is deterministic (input never changes at runtime) and would be better suited as a build-time check.

**Fix:** Move Zod validation to the `modules:sync` build script or a CI step. At runtime, trust the pre-validated data and skip the Zod parse.

---

### M-6  RevenueCat webhook creates admin client at module scope

**File:** `src/app/api/revenuecat/webhook/route.ts`

```ts
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  ...
);
```

This runs at module import time, not when the webhook is actually called. On serverless, this means every cold start for any request touching this module initializes a Supabase admin connection even if the RevenueCat webhook is never invoked.

**Fix:** Wrap in a lazy factory function.

---

## 4. LOW Issues (Nice to Have)

### L-1  `jsx: "react-jsx"` in tsconfig instead of `"preserve"`

**File:** `tsconfig.json`

Next.js conventionally uses `"preserve"` to let its own compiler handle JSX transformation. `"react-jsx"` works but could cause subtle issues with future Next.js compiler changes.

---

### ✅ L-2  Redundant `moduleVersion` + `version` fields on modules

> **Status:** RESOLVED — `moduleVersion` removed from `LearningModule` type in `types.ts` and `learningModuleSchema` in `schema.ts`. `moduleVersion:` lines bulk-removed from 337 catalog files. Runtime consumer in `topics.ts` updated to use `version` only. Single canonical field `version` now used everywhere.

Most catalog modules previously declared both `moduleVersion: "x.x.x"` and `version: "x.x.x"` with identical values. This was redundant and risked them drifting out of sync.

---

### L-3  Some gold-standard modules have fewer flashcards than target

Sampled modules like `gardening-101` have only 2 flashcards per lesson. The gold standard target is 4. Not a blocker but reduces the learning experience quality.

---

### L-4  `(string & {})` extensible union pattern used extensively

**File:** `src/lib/modules/types.ts`

Types like `LessonType`, `InteractiveActivityType`, `QuizQuestionType` use the pattern:
```ts
type LessonType = "video" | "reading" | ... | (string & {});
```

This allows any string while preserving autocomplete for known values. It's intentional but means the type system cannot catch typos in lesson/activity type values. Consider using a strict union with an explicit `"custom"` escape hatch instead.

---

## 5. Module Audit Results

### Gold-Standard Modules (v2.0.0+)

These modules have rich content, chunks, flashcards, hand-crafted activities, and answer explanations:

| Module | Version | Quality Notes |
|---|---|---|
| `coding-101` | 2.0.0 | Full content, activities (affected by C-1 stripping) |
| `music-theory-101` | 2.0.0 | Full content, activities use `interactiveActivities` field |
| `sat-prep-101` | 3.0.0 | Full content, comprehensive quiz blueprints |
| `world-history-{301,401}` | ≥1.1.0 | Use `interactiveActivities` correctly |

### Upgraded Modules (v1.1.0)

| Module | Version | Notes |
|---|---|---|
| `food-science-101` | 1.1.0 | Has chunks, flashcards, activities |
| `gardening-101` | 1.1.0 | Has chunks, flashcards (2 per lesson, target is 4) |

### Template Modules (v1.0.0) — 99+ modules

See H-4 above for the complete categorized list. These need content development before they're production-quality.

### Pre-K Modules (v1.0.0 but real content)

12 modules have authored content (activities, flashcards, subject-specific lessons) but use the `activities` field (affected by C-1) and haven't been version-bumped:

`pre-k-advanced-math-101`, `pre-k-astronomy-101`, `pre-k-chemistry-101`, `pre-k-coding-101`, `pre-k-farming-101`, `pre-k-financial-literacy-101`, `pre-k-general-relativity-101`, `pre-k-household-management-101`, `pre-k-physics-101`, `pre-k-social-studies-us-101`, `pre-k-social-studies-world-101`, `pre-k-world-history-101`

---

## 6. Specific Files/Lines Reference

| Issue | File | Line(s) |
|---|---|---|
| C-1: Schema missing `activities` | `src/lib/modules/schema.ts` | 141 (only `interactiveActivities`) |
| C-1: Renderer reads only `interactiveActivities` | `src/app/lessons/[lessonId]/lesson-experience.tsx` | 226 |
| C-1: Type defines both fields | `src/lib/modules/types.ts` | Both fields on `Lesson` |
| C-2: In-memory rate limit Map | `src/lib/security/ip-rate-limit.ts` | 1–92 (entire file) |
| C-3: Optional env vars | `src/lib/config/env.ts` | All schema definitions |
| H-2: Direct process.env | `src/app/api/subscription/status/route.ts` | Top of file |
| H-2: Module-scope admin client | `src/app/api/revenuecat/webhook/route.ts` | Top of file |
| H-3: CSP unsafe directives | `next.config.ts` | Security headers section |
| M-1: Duplicate activity fields | `src/lib/modules/types.ts` | `activities` + `interactiveActivities` |
| M-2: Index signatures | `src/lib/modules/types.ts` | `[key: string]: unknown` on Lesson |
| M-5: Eager parse | `src/lib/modules/index.ts` | 6 |

---

## 7. What's Working Well

- **Webhook security**: Stripe (`/api/stripe/webhook`) and RevenueCat (`/api/revenuecat/webhook`) both verify request signatures (Stripe signature + HMAC respectively)
- **Admin auth guard**: All admin routes consistently use `requireAdminForApi()` which checks auth + `user_profiles.is_admin`
- **Zod input validation**: Most API routes validate request bodies with Zod schemas
- **Stripe idempotency**: Webhook handler tracks processed events via `stripe_webhook_events` table
- **Security headers**: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` all properly configured
- **Lazy loading in UI**: `explore-lesson-flow.tsx` uses `next/dynamic` for `VisualFlashcards`, `VisualActivity`, `VisualQuiz`, `LessonCelebration`
- **Accessibility**: `top-nav.tsx` has comprehensive ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-hidden`, `aria-current`)
- **Image optimization**: Remote patterns configured for Supabase CDN with 7-day cache TTL
- **Package import optimization**: `optimizePackageImports` configured for supabase, ssr, date-fns
- **Console removal**: Production builds strip `console.log` (keeping `error`/`warn`)
- **Registry auto-generation**: `modules:sync` script keeps registry in sync with catalog files

---

## 8. Recommended Priority Order

1. **C-1** — Fix `activities`/`interactiveActivities` mismatch (data loss affecting 10+ shipped modules)
2. **C-3** — Make critical env vars required (prevents silent deployment failures)
3. **C-2** — Replace in-memory rate limiting with Redis/edge solution
4. **H-3** — Remove `unsafe-eval`/`unsafe-inline` from CSP
5. **H-1** — Add rate limiting to unprotected routes (especially `/api/ai/tutor`)
6. **H-2** — Consolidate env access through `serverEnv` validation layer
7. **H-4** — Hide or flag template modules to prevent user-facing exposure
8. **M-1 through M-6** — Clean up types, dead files, and optimization opportunities
