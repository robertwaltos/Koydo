# Google Play Data Safety Declarations (Release Fill-In)

**Last verified**: 2026-03-04
**Primary reference**: https://support.google.com/googleplay/android-developer/answer/10787469

Use this with:
- `store-assets/DATA-SAFETY.md` (canonical source)
- `docs/google-play-data-safety.md` (detailed worksheet)

---

## Console Questions (Always Answer)

1. **Does your app collect or share any of the required user data types?**
- Expected: **Yes** (current architecture collects account + usage data)

2. **Is all user data encrypted in transit?**
- Expected: **Yes** (HTTPS/TLS)

3. **Do you provide a way to request deletion?**
- Expected: **Yes**
- Public URL: `https://koydo.app/account-deletion` (alias `https://koydo.app/data-deletion`)

---

## Data Types You Must Validate Before Submit

Mark each from the release build behavior:
- Email address
- User IDs
- Profile/display name
- Phone number (if OTP enabled)
- Purchase history
- App interactions / learning events
- User-generated content fields
- Device IDs (for push tokens where enabled)
- Diagnostics / technical logs (if collected by app-integrated services)

Do not submit a declaration unless each type is validated against current production config.

---

## Third-Party Sharing / Processing

Evaluate service providers per release config:
- Supabase
- RevenueCat
- Stripe
- Mixpanel
- DeepL / Google Translation
- Licensed pronunciation provider
- OpenAI / ElevenLabs

If a provider is disabled for this release, exclude it from declarations.
If a provider is enabled and receives app data, include it.

---

## Reviewer Safety Check

Before pressing submit:
- [ ] Declaration matches shipping SDKs and enabled server integrations
- [ ] Deletion flow works for real users
- [ ] Privacy policy matches Data Safety answers
- [ ] No stale assumptions copied from older docs
