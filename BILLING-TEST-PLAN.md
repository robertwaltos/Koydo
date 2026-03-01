# Koydo — Billing Test Plan

**Purpose**: Comprehensive test plan for in-app purchase flows on iOS and Android.

---

## Environments

| Environment | iOS | Android | RevenueCat |
|------------|-----|---------|-----------|
| Development | StoreKit 2 sandbox | Play billing test account | RevenueCat sandbox |
| TestFlight | Apple Sandbox | Internal Testing track | RevenueCat sandbox |
| Production | App Store | Production | RevenueCat production |

---

## Setup

### iOS Sandbox Testing
1. Create Sandbox Tester in App Store Connect: **Users and Access** → **Sandbox Testers**
2. On device: **Settings** → sign out of App Store → sign in with sandbox Apple ID
3. Or use StoreKit local testing config in Xcode (no sandbox Apple ID required)

### Android Test Account
1. Add test accounts in Google Play Console: **Monetization setup** → **License testing**
2. Test accounts can purchase without real charges on all tracks

### RevenueCat Sandbox
- RevenueCat Dashboard: verify **Sandbox environment** toggle is enabled
- Sandbox events appear in RevenueCat → Customer View with `[sandbox]` label

---

## Test Case Matrix

### TC-01: Free User — Paywall Display
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Launch app as free user | — | |
| Tap a premium-gated lesson | Paywall screen shown with plan options | |
| Verify plans visible: Language Plus + Language Family | Both plans visible with prices | |
| Family plan label appears on the family package | Badge/label visible | |
| "Restore Purchases" link visible | Link visible at bottom | |

---

### TC-02: Monthly Subscription Purchase (iOS)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| On paywall, tap "Monthly" plan | Plan selected/highlighted | |
| Tap "Subscribe" / "Start Free Trial" | Native iOS payment sheet appears | |
| Complete purchase with Sandbox Apple ID | Success confirmation shown | |
| Navigate back to gated content | Content unlocked and accessible | |
| Check RevenueCat Dashboard — sandbox | INITIAL_PURCHASE event logged | |
| Check Supabase `subscriptions` table | Row inserted with status `active`, provider `revenuecat` | |
| Check `/api/subscription/status` response | `{ active: true, plan: 'monthly' }` | |

---

### TC-03: Family Subscription Purchase (iOS)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| On paywall, tap "Language Family" plan | Plan selected | |
| Complete purchase with Sandbox Apple ID | Success confirmation | |
| Content unlocked | All premium content accessible | |
| Verify plan in account settings | Shows family tier plan | |
| Check `subscriptions` table | `plan_id` resolves to the mapped matrix plan ID when configured as package/product ID match; otherwise cadence fallback applies (`monthly`/`annual`) | |

---

### TC-04: Monthly Subscription Purchase (Android)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| On paywall, tap "Monthly" plan | Plan selected | |
| Tap Subscribe | Google Play billing sheet appears | |
| Complete purchase with test billing account | Success shown | |
| Content unlocked | All premium content accessible | |
| Check RevenueCat Dashboard | INITIAL_PURCHASE event logged | |
| Check Supabase `subscriptions` | Row inserted with `provider = 'revenuecat'` | |

---

### TC-05: Restore Purchases
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Sign out of app | Logged out to auth screen | |
| Sign back in with same account | — | |
| Navigate to gated premium content | Paywall shown (revalidating session) | |
| Tap "Restore Purchases" | Loading indicator shown | |
| Restore completes | "Your purchase has been restored" message | |
| Gated content accessible | Premium content unlocked | |
| Check `/api/subscription/status` | `{ active: true }` | |

---

### TC-06: Restore with No Prior Purchase
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Tap "Restore Purchases" on fresh account | Loading indicator | |
| Restore completes | "No active subscription found" message | |
| User remains on paywall | Paywall still visible | |
| No error crash | App stable | |

---

### TC-07: Subscription Renewal (simulated)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Wait for sandbox subscription to renew (or use RevenueCat event simulation) | — | |
| RevenueCat fires RENEWAL event | Webhook receives RENEWAL event | |
| Supabase `subscriptions.current_period_end` updated | Period extended | |
| Content remains accessible | No interruption | |

---

### TC-08: Cancellation During Active Period
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Cancel subscription in iOS Settings → Subscriptions | Cancelled in Apple backend | |
| RevenueCat fires CANCELLATION event | Webhook receives CANCELLATION | |
| Check Supabase | `cancel_at_period_end = true`, `status = 'cancelled'` | |
| Access premium content before expiry | Still accessible (grace period) | |
| Access premium content after expiry | Paywall shown | |

---

### TC-09: Billing Issue (Failed Renewal)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Simulate billing issue in RevenueCat Dashboard | BILLING_ISSUE event fired | |
| Webhook receives BILLING_ISSUE event | Supabase `status = 'billing_issue'` | |
| User opens app | Should see "Update payment method" prompt (if implemented) | |
| Subscription reinstated after payment fix | Status returns to `active` | |

---

### TC-10: Webhook Signature Verification
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Send POST to `/api/revenuecat/webhook` with invalid signature | HTTP 401 returned | |
| Send POST with valid signature + valid event | HTTP 200 returned | |
| Remove `REVENUECAT_WEBHOOK_SECRET` env var | HTTP 500 returned | |

---

### TC-11: Subscription Status API
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| GET `/api/subscription/status` — unauthenticated | HTTP 401 | |
| GET `/api/subscription/status` — free user | `{ active: false, plan: 'free' }` | |
| GET `/api/subscription/status` — active premium user | `{ active: true, plan: 'monthly' or 'annual' }` | |
| GET `/api/subscription/status` — expired premium user | `{ active: false, plan: 'free' }` | |

---

### TC-12: Entitlement Check Client (Native)
| Step | Expected | Pass/Fail |
|------|----------|-----------|
| Call `checkPremiumAccessClient()` on free user (native) | `{ active: false, source: 'revenuecat' }` | |
| Call `checkPremiumAccessClient()` on premium user (native) | `{ active: true, source: 'revenuecat' }` | |
| RevenueCat SDK unavailable — fallback | Falls back to API check | |

---

## Regression Gate

Before any release:
- [ ] All 12 test cases pass on iOS (TestFlight)
- [ ] All 12 test cases pass on Android (Internal Testing track)
- [ ] Webhook tests: TC-10 passes
- [ ] API tests: TC-11 passes
- [ ] No crashes during any billing flow
- [ ] Supabase rows correctly updated after each event type
