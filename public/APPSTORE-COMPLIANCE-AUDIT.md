# App Store Compliance Audit

Generated: 2026-02-24T04:20:25.925Z

Checks: 12 | Pass: 11 | Warn: 1 | Fail: 0

| Category | ID | Status | Detail |
| --- | --- | --- | --- |
| required-file | file:src/app/account/settings/page.tsx | PASS | Exists |
| required-file | file:src/app/api/account/delete/route.ts | PASS | Exists |
| required-file | file:src/app/legal/privacy/page.tsx | PASS | Exists |
| required-file | file:src/app/legal/terms/page.tsx | PASS | Exists |
| required-file | file:src/app/legal/refunds/page.tsx | PASS | Exists |
| required-file | file:src/app/auth/age-gate/page.tsx | PASS | Exists |
| required-file | file:src/app/auth/parent-consent/page.tsx | PASS | Exists |
| required-file | file:src/app/api/compliance/age-gate/route.ts | PASS | Exists |
| required-file | file:src/app/api/compliance/parent-consent/route.ts | PASS | Exists |
| required-file | file:src/app/api/compliance/policy-acceptance/route.ts | PASS | Exists |
| billing-mode | env:BILLING_PROVIDER_MODE | PASS | Configured as stripe_external |
| auth | auth:oauth-parity | WARN | Missing or inconsistent: google, facebook, apple, twitter |

## Notes

- This audit checks structural and configuration basics only.
- Final app store compliance still requires policy/legal and UX review before submission.


## App Store Metadata Formulation

### Required External URLs
* **Privacy Policy URL:** \https://koydo.app/legal/privacy\
* **Terms of Service URL:** \https://koydo.app/legal/terms\
* **Support URL:** \https://koydo.app/support\

### English Metadata
**App Name:** Koydo - Language Learning
**Subtitle:** Master languages with AI
**Description:**
Koydo revolutionizes language learning through AI-driven personalization, culturally rich dialogues, and engaging interactive scenarios. From beginner to advanced levels, our adaptive platform listens, corrects, and guides your pronunciation while building real-world vocabulary. Join a community of modern learners taking advantage of instant feedback loops, spaced repetition flashcards, and native-speaker accuracy.

*Features:*
- High-fidelity AI speech tutors
- Extensive library covering dozens of dialects
- Dynamic real-time grammar feedback
- Subscription-based premium content with family and growth tiers

### Spanish Metadata
**App Name:** Koydo - Aprende Idiomas
**Subtitle:** Domina idiomas con IA
**Description:**
Koydo revoluciona el aprendizaje de idiomas a través de la personalización impulsada por inteligencia artificial, diálogos culturalmente ricos y escenarios interactivos emocionantes. Desde nivel principiante hasta avanzado, nuestra plataforma adaptativa escucha, corrige y guía tu pronunciación mientras construyes un vocabulario del mundo real. Únete a una comunidad de estudiantes modernos que aprovechan los ciclos de retroalimentación instantáneos, las tarjetas de memoria con repetición espaciada y una precisión de hablante nativo.

*Características:*
- Tutores de voz con IA de alta fidelidad
- Amplia biblioteca que cubre decenas de dialectos
- Retroalimentación dinámica de gramática en tiempo real
- Contenido premium con suscripción, con planes familiares y de crecimiento

### Required Screenshots List
1. **Welcome/Onboarding:** Showing the sleek profile selection and topic cards.
2. **AI Speech Tutor:** Depicting the pronunciation analysis waveform interface.
3. **Skill Tree / Progress:** Real-time view of a learner unlocking new topic modules (like 'Cultural Exchange').
4. **Checkout/IAP screen:** Displaying the Subscription modes (Plus / Family).
5. **Dark Mode Settings:** Displaying the UI toggle and soft modern design in night mode.

