# Terms Benchmark And Compliance Sources (2026-03-03)

This implementation used a benchmark-and-controls approach (not copy/paste) to harden Koydo Terms of Service while preserving required consumer and child-safety protections.

## Comparable Terms Structures
- IXL Terms of Service: https://www.ixl.com/company/terms
- Code.org Terms of Service: https://code.org/ta/terms-of-service
- Coursera Terms of Use: https://www.coursera.org/about/terms

## App Store / Platform Policy References
- Apple App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play subscriptions and recurring billing guidance: https://support.google.com/googleplay/android-developer/answer/16313518

## Federal U.S. Legal Baseline
- FTC COPPA Rule overview: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa
- FTC ROSCA overview (negative option / recurring online charges): https://www.ftc.gov/business-guidance/resources/restore-online-shoppers-confidence-act-compliance-guide-businesses
- U.S. Department of Education FERPA portal: https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html

## State Law Anchors For Addenda
- California Auto-Renewal Law (BPC 17600-17606): https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=BPC&division=7.&title=1.1.&part=3.&chapter=1.&article=
- California BPC 17602: https://leginfo.legislature.ca.gov/faces/codes_search_section.xhtml?lawCode=BPC&sectionNum=17602.
- New York General Business Law 527: https://www.nysenate.gov/legislation/laws/GBS/527

## Implementation Mapping (Code)
- State-aware Terms source + hash: `src/lib/legal/terms-of-service.ts`
- Terms PDF generator: `src/lib/legal/terms-pdf.ts`
- Signup state collection + mandatory terms acceptance: `src/app/auth/sign-up/page.tsx`
- Acceptance evidence persistence (hash/state/ip/user-agent): `src/app/api/compliance/policy-acceptance/route.ts`
- Post-signup email with Terms PDF attachment: `src/lib/email/signup-thank-you-email.ts` and `src/app/api/auth/signup-complete/route.ts`
- DB migration: `supabase/migrations/202603030004_terms_stateful_acceptance_and_signup_state.sql`

## Review Note
- This is engineering implementation support, not legal advice.
- Final legal review by licensed counsel is still required before production rollout.
