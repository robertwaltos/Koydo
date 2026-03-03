# 05 — Web Application

> **Web Platform Capabilities, Stripe Billing & Deployment**  
> Confidential · Executive Summary Document

---

## Executive Summary

The Koydo web application is the primary development surface and the highest-margin billing channel. Built on Next.js with static export, it delivers the complete learning experience through any modern browser while serving as the source codebase for both native apps. Web billing via Stripe retains **~92% of revenue** (vs. ~70% on native IAP Year 1), making web acquisition strategically critical. The web app supports full offline capability, responsive tablet/desktop layouts, and progressive enhancement for users who may later transition to native apps.

---

## 1. Web-Specific Capabilities

### Feature Set

| Feature | Status | Notes |
|---------|--------|-------|
| Full curriculum access | ✅ | All 706 modules, interactive activities, quizzes |
| Stripe Checkout | ✅ | Web-only billing with subscription management |
| Stripe Customer Portal | ✅ | Self-service subscription management |
| Responsive Design | ✅ | Phone → Tablet → Desktop breakpoints |
| Dark Mode | ✅ | System-aware with manual override |
| Offline Mode | ✅ | Service Worker + cache for downloaded lessons |
| PWA-Ready | ✅ | Installable via browser "Add to Home Screen" |
| Deep Linking | ✅ | Standard HTTPS URLs (no app required) |
| Accessibility | ✅ | ARIA attributes, VoiceOver/screen reader support |
| Account Deletion | ✅ | Settings → Danger Zone (30-day grace period) |
| DSAR Portal | ✅ | Data access, export, and erasure requests |

### Hidden on Web

| Feature | Reason |
|---------|--------|
| RevenueCat IAP | Native-only (Apple/Google billing) |
| Push Notifications | Uses browser notifications (if supported) |
| Haptic Feedback | No hardware support on web |
| App Rating Prompt | Not applicable |

---

## 2. Stripe Billing (Web)

### Revenue Advantage

| Platform | Commission | Net on $5.99 |
|----------|-----------|-------------|
| **Web (Stripe)** | **2.9% + $0.30** | **$5.52** |
| iOS (Apple IAP — Yr 1) | 30% | $4.19 |
| iOS (Apple IAP — Yr 2+) | 15% | $5.09 |
| Google Play (first $1M) | 15% | $5.09 |

**Web subscriptions yield 32% more net revenue** than native IAP in Year 1.

### Stripe Integration Architecture

```
User clicks Subscribe
       │
       ▼
Stripe Checkout Session created (server-side)
       │
       ▼
User completes payment on Stripe-hosted page
       │
       ▼
Stripe fires webhook → /api/stripe/webhook
       │
       ▼
Webhook handler verifies signature + processes event
       │
       ▼
Supabase `subscriptions` table updated
       │
       ▼
User sees premium content unlocked
```

### Webhook Events Handled

| Event | Action |
|-------|--------|
| `checkout.session.completed` | Create subscription record |
| `invoice.payment_succeeded` | Extend period, confirm active |
| `customer.subscription.updated` | Plan change, cancellation status |
| `customer.subscription.deleted` | Revert to free tier |

### Idempotency

Processed webhook events are tracked in `stripe_webhook_events` table — duplicate deliveries are safely ignored.

---

## 3. Web Deployment

### Deployment Target

| Setting | Value |
|---------|-------|
| Platform | Vercel |
| Domain | `koydo.app` |
| Current staging | `koydo.vercel.app` |
| Build output | Static export (`out/`) |
| CDN | Vercel Edge Network (global) |

### Pre-Deploy Validation

The FORGE engine includes a pre-deploy checklist that validates:
- All environment variables present and non-placeholder
- Build completes with zero errors
- Production debug flags disabled
- Health check endpoint responsive

### CI/CD Pipeline

```yaml
Build → Lint → Type Check → Security Audit → Deploy
```

Version derived from git tag in GitHub Actions:
```
VERSION = package.json version
BUILD_NUMBER = git rev-list --count HEAD
```

---

## 4. Production Environment Status

### Environment Check Results

| Check | Status |
|-------|--------|
| Public App URL | ✅ PASS — `https://koydo.vercel.app` |
| Supabase URL | ✅ PASS |
| Supabase Anon Key | ✅ PASS |
| Supabase Service Role Key | ✅ PASS |
| Stripe Secret + Webhook | ✅ PASS |
| Stripe Publishable Key | ✅ PASS |
| Admin Approval Enforcement | ✅ PASS |
| Debug Flags | ✅ PASS — None enabled |
| Placeholder Secrets Audit | ✅ PASS |
| Parent Consent Email | ✅ PASS |
| Parent Consent Token Secret | ✅ PASS |
| **Upstash Redis** | **❌ FAIL** — Missing `UPSTASH_REDIS_REST_URL` and token |

**Launch Blockers**: 1 item — Redis configuration for production rate limiting.

---

## 5. Content Security Policy

### Production CSP

- **Scripts**: Nonce-based (`'nonce-<random>' 'strict-dynamic'`) — no `unsafe-eval`, no `unsafe-inline`
- **Styles**: `'unsafe-inline'` retained (standard for Tailwind CSS)
- **Development**: Relaxed CSP with `unsafe-eval`/`unsafe-inline` for HMR

### Security Headers

| Header | Value |
|--------|-------|
| `X-Frame-Options` | DENY |
| `X-Content-Type-Options` | nosniff |
| `Referrer-Policy` | strict-origin-when-cross-origin |
| `Permissions-Policy` | Restricted camera, microphone, geolocation |

---

## 6. Web-Specific User Flows

### Onboarding Flow

```
Landing Page → Sign Up → Age Gate → Profile Creation → Diagnostic Assessment → Dashboard
```

- Under-13 users trigger COPPA parent consent flow
- Parent consent uses HMAC-signed email verification tokens
- Parents can revoke consent and trigger data erasure

### Account Management

| Action | Location |
|--------|----------|
| Update Profile | Settings → Profile |
| Change Password | Settings → Security |
| Manage Subscription | Settings → Billing → Stripe Portal |
| Delete Account | Settings → Danger Zone |
| Export Data (DSAR) | Settings → Privacy → Data Export |
| Revoke Consent (parent) | Parent Dashboard → Child Profile → Revoke |

---

## 7. Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | > 90 | Pending measurement |
| First Contentful Paint | < 1.5s | Optimized with static export |
| Time to Interactive | < 3s | Code-splitting enabled |
| Bundle Size (initial) | < 200KB | Next.js automatic splitting |

### Optimization Techniques

- Static HTML export (no server runtime required)
- Automatic code splitting per route
- Dynamic imports for heavy components
- Image optimization with Supabase CDN (7-day cache)
- Package import optimization for large libraries
- Console.log stripped in production builds

---

*Document generated from Koydo web platform documentation. For web deployment questions, contact the engineering team.*
