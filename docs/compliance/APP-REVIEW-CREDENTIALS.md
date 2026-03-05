# App Store Review — Demo Accounts & Review Notes

**Last Updated:** 2026-03-04

> **CONFIDENTIAL** — Do not commit to public repos. For internal release management only.

---

## Demo Account Credentials

All accounts share the same password: `MyKodoApp55125`

| Email | Role |
|---|---|
| robert@waltos.net | Primary tester |
| marek@waltos.net | Tester |
| pwaltos@gmail.com | Tester |
| nataliawaltos93@gmail.com | Tester |
| cherlloydgirl9@gmail.com | Tester |

**For App Store Connect / Google Play Console review forms, use:**
- **Username:** `robert@waltos.net`
- **Password:** `MyKodoApp55125`

---

## App Review Notes (paste into store submission)

```
Koydo is an educational platform for learners ages 3+.

DEMO LOGIN:
  Email: robert@waltos.net
  Password: MyKodoApp55125

KEY FEATURES TO TEST:
1. Sign in with the demo account above
2. Browse the Explore page — module catalog with 800+ learning modules
3. Open any module → watch video lessons, take quizzes
4. Visit /games — 225+ educational games
5. Visit /student/dashboard — learning progress dashboard

AGE GATING:
- The app targets ages 3+ (Kids & Families + General Audience)
- Children under 13: Mixpanel analytics disabled, cookie consent suppressed,
  freeform AI chat disabled, content moderation fails CLOSED
- Parental gate (multiplication challenge) required for external links
- Parental consent flow for under-13 account creation

SUBSCRIPTIONS:
- Free tier includes all content
- Premium tier available via in-app purchase (RevenueCat)
- Web billing uses Stripe; native builds use Apple IAP / Google Play Billing

ACCOUNT DELETION:
- Available at: https://koydo.app/account-deletion
- Also accessible from: Settings > Delete Account
```

---

## Checklist

- [x] Demo accounts created with pre-populated data
- [ ] App Review notes pasted into App Store Connect
- [ ] App Review notes pasted into Google Play Console
- [ ] Screenshots uploaded (iPhone 6.7", iPad 12.9", Android phone, Android tablet)
- [ ] Preview video uploaded (optional)
