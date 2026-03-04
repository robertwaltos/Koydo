# Koydo — Content Rating Questionnaire Guide

**Scope**: Google Play (IARC) + Apple App Store Age Rating
**Last verified**: 2026-03-04

Official references:
- Google content ratings: https://support.google.com/googleplay/android-developer/answer/9859655
- Apple App Information / age rating fields: https://developer.apple.com/help/app-store-connect/reference/app-information

This is a guidance worksheet, not a guaranteed rating result.

---

## Google Play — IARC (Guidance)

Complete at:
`Google Play Console -> App Content -> Content Rating`

### Core safety content
Typical Koydo answers (verify for release):
- Violence: No
- Sexual content/nudity: No
- Profanity/crude humor: No
- Controlled substances: No
- Gambling: No

### User interaction / UGC decision point
Choose answers from shipped behavior:

If social/cohort/challenge features are enabled and user text is visible to others:
- Users interact with each other: Yes
- UGC visible to others: Yes
- Moderation/reporting controls: Yes

If those features are fully disabled for this release:
- Users interact with each other: No
- UGC visible to others: No

Do not answer from roadmap intent; answer from release reality.

---

## Apple App Store — Age Rating (Guidance)

Set at:
`App Store Connect -> App Information -> Age Rating`

### Content categories
For the current educational profile, answers are typically:
- Violence: None
- Sexual content/nudity: None
- Profanity/crude humor: None
- Substance use references: None
- Gambling: None

### User-generated or interactive features
If any release includes user-visible content from other users, reflect that accurately in Apple’s age-rating questionnaire.

### Expected result
Do not hard-code expected age rating in advance. Use the generated value from completed questionnaire responses.

---

## Final Check Before Submission

- [ ] IARC answers match currently enabled features
- [ ] Apple age rating answers match currently enabled features
- [ ] Store listing copy does not contradict rating answers
- [ ] Moderation/reporting controls verified if interaction/UGC is enabled
