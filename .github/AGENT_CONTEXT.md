# Agent Context — Koydo Repository

This file is the **single source of truth** for any AI agent, CI bot, or automated tool
working in this repo. Read it before making any changes.

---

## Git Workflow Rules (MANDATORY for all agents)

### Auto-push on every commit
Every `git commit` **must** be immediately followed by a `git push origin <current-branch>`.
A git post-commit hook enforces this automatically (`.git/hooks/post-commit`).
If you are running git commands manually, always run:
```bash
git add -A && git commit -m "..." && git push origin $(git branch --show-current)
```

### Branch strategy
| Branch | Purpose | Deploys to |
|---|---|---|
| `master` | Production | Vercel production URL |
| Any other branch | Feature / review | Vercel preview URL (auto) |

**Never commit directly to `master`.** Open a PR.

---

## Deployment Pipeline

### How it works
1. Push any non-`master` branch → GitHub Actions runs `.github/workflows/vercel-preview.yml`
2. Workflow installs deps, runs `vercel build`, deploys to Vercel preview
3. Preview URL is posted as a comment on any open PR for that branch
4. Merging to `master` → Vercel production deploy (handled by Vercel's GitHub integration)

### Secrets already configured
| Secret name | What it is | Status |
|---|---|---|
| `VERCEL_TOKEN` | Vercel personal access token for CLI deploys | ✅ Set (March 2026) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ Set |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | ✅ Set |

Vercel project and org IDs are **hardcoded** in the workflow (not secrets) — they are safe
to commit and come from `.vercel/project.json`:
- `VERCEL_ORG_ID`: `team_Rjgb3m3TRQJLzzraH63zyCtn`
- `VERCEL_PROJECT_ID`: `prj_djBqL0JZbdrle195lhUwCAwzmokn`

### Do NOT store the VERCEL_TOKEN value in any file.
It lives only in GitHub Actions secrets.

---

## Active Feature Branches

| Branch | Description | PR |
|---|---|---|
| `opus_ui` | Complete UI/UX redesign (Phases 1-7) — landing, auth, dashboard, design tokens | [open PR](https://github.com/robertwaltos/Koydo/pull/new/opus_ui) |
| `sonnet_ui` | Early nav/dropdown work (superseded by opus_ui) | — |

---

## Tech Stack Quick Reference
- **Framework**: Next.js (App Router), React 19, TypeScript strict
- **CSS**: Tailwind v4 CSS-first (`globals.css` — no `tailwind.config.js`)
- **Auth + DB**: Supabase
- **Payments**: Stripe
- **Fonts**: Nunito Sans (body), Sora (display), JetBrains Mono (code), Fredoka (ages 1-11)
- **Animations**: Framer Motion 12

## Key File Locations
| File | Purpose |
|---|---|
| `src/app/globals.css` | All design tokens, theme packs, utility classes |
| `src/lib/theme/provider.tsx` | Theme context (dark mode reactive to OS pref) |
| `src/lib/i18n/translations.ts` | All UI strings, 11 locales |
| `src/app/components/ui/soft-card.tsx` | Primary card primitive |
| `src/app/components/ui/soft-button.tsx` | Button primitive |
| `vercel.json` | Vercel build config |
| `.github/workflows/vercel-preview.yml` | Preview deployment pipeline |
| `.github/workflows/ci.yml` | Lint + build CI (master + PRs only) |
