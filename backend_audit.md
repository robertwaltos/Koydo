# Comprehensive Backend Systems Analysis — KOYDO

**Generated**: 2026-03-05
**Codebase**: Next.js 16.1.6, Supabase, Stripe, TypeScript

---

## Executive Summary

The KOYDO backend is **significantly more mature than expected** — it features a multi-tier RBAC system, comprehensive audit logging, full financial reporting, and production-grade security patterns. However, there are several important gaps that need attention, particularly around **role isolation for support staff**, **missing cron automation**, and a few **auth enforcement holes**.

---

## 1. ADMIN/OWNER CONSOLE — STRONG

| Aspect | Status | Notes |
|--------|--------|-------|
| Auth gating (layout + API) | **Solid** | Layout checks `is_admin`, API routes use `requireAdminForApi()` |
| Owner MFA step-up | **Solid** | TOTP, YubiKey, secondary email with scoped step-up sessions |
| Read-only admin mode | **Solid** | `requireFullAccess()` blocks mutations for read-only admins |
| Audit logging | **Solid** | `logAdminAction()` (fire-and-forget) + `logAdminActionStrict()` (throws on failure) |
| RLS policies | **Solid** | All admin tables gated by `is_admin=true` check |

### 13 Admin Pages — 10 fully implemented, 3 placeholders:
- **Implemented**: Overview, Alerts, Operations, Compliance, Finance, Partners, Media, Curriculum, Reports, Settings
- **Placeholder**: Audit log viewer, Costs, Provisioning

### 100+ API routes organized by domain:
- Security/MFA, Alerts, Approvals, Audit logs, Finance (Plaid banking, dividends, reconciliation), Compliance (DSAR, triple-pass), Billing, Media, Reports/Exports, System Health, AI, Owner-only operations

### Owner Security Model
The owner security model is enterprise-grade: factory reset requires step-up MFA + a password hash stored in env vars with pepper salt. A DB trigger prevents removing the last owner. This is proper defense-in-depth.

---

## 2. SUPPORT/TICKETING — FUNCTIONAL BUT NEEDS RBAC

### What works well:
- Full ticket CRUD with 6-category auto-classification (regex-based)
- Auto-response generation per category with security disclaimers
- SLA tracking for paid parent accounts (configurable hours)
- Admin queue at `/admin/operations?s=support-queue` with resolve/close actions
- Escalation: high-priority/safety/content tickets auto-create admin alerts + content moderation jobs
- CSV export of all tickets with SHA256 checksums

### **CRITICAL GAP: No dedicated support staff role**

Support staff currently get **full admin access** — they can see billing, media ops, compliance, audit logs, everything. There's no way to restrict a support person to only the ticket queue.

**Current state**: `is_admin=true` with `admin_access_level` (read_only | full_access) — that's it. No granular permissions.

### Other gaps:
- No external help desk integration (Zendesk/Intercom)
- No live chat or remote support
- No ticket search/advanced filtering (shows last 200 only)
- Users don't get email notifications when tickets are resolved
- No on-call rotation or workload balancing

---

## 3. INVESTOR PORTAL — WELL-GATED

### Security model:
- Access provisioned by admin only (no self-service)
- `investor_portal_access` table with roles: owner, finance_contact, auditor, viewer
- RLS: investors see only their own data, admins see all
- All access grants audit-logged

### Data exposed:
- Shares, ownership %, cost basis, acquisition dates
- Dividend payments (last 40)
- Investor reports with delivery status
- 365-day revenue + net pre-tax income

### Concern: No MFA enforcement for financial data access (only Supabase session required)

---

## 4. PARTNER PORTAL — PRODUCTION-READY

### API key management follows best practices:
- Keys hashed (SHA256), prefix stored for identification
- Full key shown only once on creation
- Scoped to allowed datasets per eligibility check
- Rate limited (120 GET / 45 POST per 5 min)
- Usage logging (requests, rows, bytes)

### **CRITICAL CONCERN**: `learner_roster_pii` scope grants full student names/emails/IDs with **no field-level masking**. This is a FERPA risk for school partners.

---

## 5. ORGANIZATIONS/SCHOOLS — COMPREHENSIVE

### Seat management flow:
Stripe purchase → license → provisioning tokens → teacher distribution → student enrollment

### Classroom access policy (anti-cheat):
- Configurable free window (default 7AM-3PM)
- Timezone + country enforcement via HTTP headers
- Rate limited API access

### Organization roles enforced via `requireOrganizationMembership()`:
owner > admin > it_manager > teacher > viewer

### Gap: No dedicated teacher console — teachers use the org portal or standard dashboard

---

## 6. REPORTING & AUDIT — RICH BUT MANUAL

### 13 report types available:
DSAR, Support tickets, Admin audit, Learning telemetry, Explorer funnel, Language pricing funnel, Finance ledger, Finance analytics, Compliance audit, Tax projection, Cap table, Dividend register, Banking audit

### All exports include:
- SHA256 checksums for integrity
- Export history in `admin_report_exports`
- Admin user tracking

### Audit logging covers:
- Admin actions (2 tiers: silent vs. strict)
- Auth events (login/logout/signup)
- Organization events (batch + single)

### **CRITICAL GAP: No cron jobs / scheduled automation**

- No `vercel.json` cron configuration
- No `/api/cron/` routes
- Alert runs require manual triggering (`/api/admin/alerts/run`)
- Report generation is on-demand only
- No scheduled parent digest emails
- No auto-expiry for stale parent consent records
- No cleanup of old telemetry data

This means **SLA monitoring, alert generation, and report scheduling all depend on someone manually clicking buttons**.

---

## 7. AUTH/RBAC — LAYERED BUT WITH HOLES

### Strengths:
- Server-side admin checks in layout + API
- Profile ownership verification (`account_id === user.id`)
- Auto-provision mechanism for admins (email match)
- Parent consent tracking with revocation + auto DSAR
- RLS at database level
- Teacher detection via 3 sources (access_grant, org, classroom)

### Gaps requiring attention:

| Priority | Issue | Impact |
|----------|-------|--------|
| **HIGH** | Parent portal layout does NOT check `is_parent` role | Any authenticated user can access `/parent/*` routes |
| **HIGH** | Parental consent status not enforced in middleware | Denied children can still access the app |
| **HIGH** | Support staff = full admin (no RBAC isolation) | Support person sees all financial/compliance data |
| **MEDIUM** | No `is_child` flag on user_profiles | Age must be recalculated from birth_date on every request |
| **MEDIUM** | Class enrollment `parent_consent` boolean not validated | Children can be enrolled without verified parent consent |
| **MEDIUM** | Teacher revocation doesn't cascade across 3 sources | Removing from org doesn't remove access_grant or classroom ownership |
| **LOW** | `data_mode` (live/beta) flag exists but never enforced | Beta users have same access as live users |
| **LOW** | Consent auto-expiry not implemented | Stale consents persist indefinitely |

---

## 8. INTER-SYSTEM COMMUNICATION MAP

```
Support Ticket Created
  ├─→ Auto-classified (6 categories)
  ├─→ Auto-response generated
  ├─→ If high/safety/content → admin_alerts created
  └─→ If safety/content → content_moderation_jobs created
         └─→ Multi-model consensus (Grok/OpenAI/Claude/Gemini)

Admin Alert Triggered
  ├─→ Email notification via Resend (if configured)
  └─→ Shown in /admin/alerts dashboard

Learning Event Ingested (/api/telemetry/events)
  ├─→ Stored in learning_events table
  ├─→ AI follow-ups triggered for lesson_completed
  └─→ Remediation worksheets generated

Organization License Purchased (Stripe)
  ├─→ organization_license_purchases tracked
  ├─→ Seats available for provisioning tokens
  └─→ Tokens redeemable by teachers → organization_learners

Investor Access Granted (Admin)
  ├─→ investor_portal_access row created
  ├─→ Audit logged
  └─→ Investor can view holdings/dividends via RLS
```

**What's NOT connected (gaps):**
- Alerts are not auto-triggered on schedule (no cron)
- Parent digest emails referenced but not implemented
- Report jobs queued but no worker processes them automatically
- Consent expiry tracked but never enforced

---

## 9. TOP RECOMMENDATIONS (Prioritized)

### P0 — Blocking / Security
1. **Add `is_parent` check to parent layout** — 5-line fix in `src/app/parent/layout.tsx`
2. **Create support staff RBAC** — Add `support_role` or scope-based permissions to limit support to ticket queue only
3. **Set up Vercel cron jobs** — At minimum: alert runs, consent expiry, SLA checks

### P1 — High Priority
4. **Enforce parental consent in middleware** — Block denied children globally
5. **Add MFA requirement for investor portal** — Financial data needs step-up auth
6. **Mask PII in school API** — `learner_roster_pii` scope needs field-level control
7. **Build the 3 placeholder admin pages** — Audit viewer, Costs, Provisioning

### P2 — Medium Priority
8. **Add `is_child` flag to user_profiles** — Eliminate repeated birth_date calculation
9. **Cascade teacher revocation** — Remove from all 3 sources atomically
10. **Implement ticket search/filtering** — Support can't efficiently work with only last 200 tickets
11. **Add email notifications** — Users should know when tickets are resolved

### P3 — Nice to Have
12. Add IP whitelist for school API keys
13. Implement admin service accounts (API keys vs user sessions)
14. Add data retention policies for old telemetry
15. Build dedicated teacher console

---

## 10. DETAILED SYSTEM REPORTS

### 10.1 Admin Action Audit Logging

**File**: `src/lib/admin/audit.ts`

Three logging modes:
- `logAdminAction()` — Fire-and-forget, silently catches errors (non-critical actions)
- `logAdminActionStrict()` — Throws on failure (regulated/high-impact: data deletion, access grants, settings, finance, DSAR)
- `logAuthEvent()` — Auth lifecycle: login, logout, signup, password_reset (stores IP + user agent)

All logs stored in `public.admin_action_logs` with fields: `admin_user_id`, `action_type`, `target_user_id`, `metadata`, `created_at`.

### 10.2 Organization Audit Events

**File**: `src/lib/organizations/audit.ts`

- `logOrganizationAuditEvents()` — Batch and single event logging
- Fields: `organization_id`, `actor_user_id`, `event_type`, `subject_type`, `subject_id`, `metadata`, `created_at`
- Validates event_type length (min 3 chars), gracefully handles missing tables

### 10.3 Alert System

**File**: `src/lib/admin/alerts.ts`

Alert types monitored:
- `cost_budget_overrun` — Average cost per user exceeds budget cap
- `media_queue_stale` / `media_queue_backlog` / `media_queue_failure_spike`
- `report_queue_stale` / `report_queue_backlog` / `report_queue_failure_spike`
- `dsar_backlog` — DSAR requests unresolved >7 days
- `support_urgent_backlog` — Urgent tickets open >24h

Severity levels: info, warning, critical. Auto-resolve when conditions clear (configurable hours). Deduplication to prevent alert fatigue. Email via Resend API.

### 10.4 Telemetry & Learning Events

**File**: `src/lib/analytics/xapi-lite.ts`, `src/lib/analytics/learning-events.ts`

Event types: `lesson_viewed`, `chunk_viewed`, `flashcard_flipped`, `activity_interacted`, `quiz_answered`, `lesson_completed`

Ingestion: `/api/telemetry/events` — rate limited (60 req/min), max 25 events per request, daily activity cap enforcement. Client-side queue (max 250 items, flush batch 25) with `navigator.sendBeacon` fallback.

### 10.5 Finance Reporting

**File**: `src/lib/finance/reporting.ts`

Double-entry bookkeeping with: ledger lines, revenue channels, expense categories, monthly summaries, tax projections. Sources: `business_chart_of_accounts`, `business_gl_transactions`, `owner_tax_profiles`.

### 10.6 Owner Step-Up MFA

**File**: `src/lib/admin/owner-security.ts`

Supported factors: TOTP, Secondary Email (6-digit code, 10-min expiry, 6 max attempts, timing-safe comparison), YubiKey OTP (Yubico API).

Step-up scopes: `owner_console`, `factory_reset`, `ownership_transfer`, `security_admin`. Sessions stored as HTTP-only cookies with configurable TTL (default 20 min, max 120).

Password-protected operations: Factory Reset, Ownership Transfer, Payout Approvals — all hashed with pepper salt from `OWNER_SECURITY_CODE_PEPPER`.

### 10.7 Support Ticket Classification

**File**: `src/app/api/support/tickets/route.ts`

Auto-classification via regex:
- `account_change`: password, email change, account lock, security
- `billing`: charge, refund, invoice, payment, subscription
- `safety`: abuse, harassment, threats, harm, violence
- `content`: lesson, module, curriculum, answer key
- `technical`: bug, error, crash, cannot load, not working
- `general`: fallback

SLA: Paid parent accounts get configurable response deadline. Rate limit: 12 tickets/hour per IP.

### 10.8 Partner School API

**File**: `src/app/api/partner/portal/school-api/route.ts`

Available datasets: `license_summary`, `classroom_policy`, `provisioning_summary`, `learner_aggregate`, `learner_roster_pii`

Key generation: 64-char base64url, SHA256 hashed for storage, prefix kept for identification. Keys scoped to allowed datasets per eligibility engine (partner status + organization link + regulatory mode).

### 10.9 Role Hierarchy

```
Owner (is_owner=true)
  └─ Admin full_access (is_admin=true, admin_access_level='full_access')
     └─ Admin read_only (is_admin=true, admin_access_level='read_only')

Organization Roles:
  owner (rank 50) > admin (40) > it_manager (30) > teacher (20) > viewer (10)

Investor Roles:
  owner | finance_contact | auditor | viewer

Partner Roles:
  owner | manager | finance_contact | viewer
```

### 10.10 Permission Matrix

| Role | Can Access | Cannot Access | Notes |
|------|-----------|---------------|-------|
| **Learner** | `/student/*`, `/explore/*`, `/dashboard` | `/admin/*`, `/parent/*` | Active profile required |
| **Parent** | `/parent/*`, child data, revoke consent | Admin console | Portal NOT role-protected (BUG) |
| **Teacher** | `/api/assignments`, classrooms | Non-owned class data | 3-way detection |
| **Admin** | `/admin/*`, user CRUD, role updates, logs | Owner-only actions | Respects read_only flag |
| **Owner** | All admin + step-up MFA scopes | (nothing) | Highest privilege |
| **Investor** | `/investor/portal` | Admin console | Provisioned by admin only |
| **Partner** | `/partner/portal` | Admin console | Org-scoped data access |
| **Support** | Currently = full admin | Nothing restricted | NEEDS RBAC isolation |
| **Guest** | `/`, `/auth/*` | Everything auth'd | No app access |
