AI Coding Agent Prompt

## CRITICAL: Branch Safety Rule
**ALL commits MUST land on the `master` branch.** Before every commit:
1. Run `git branch --show-current` to verify you are on `master`
2. If NOT on master, run `git checkout master` first
3. If you have uncommitted changes on a non-master branch, stash them, checkout master, then pop
4. NEVER create or switch to feature branches unless explicitly instructed by the user
5. Multiple agents share this working directory — another agent may have switched branches

## Project Stack
- React 18, TypeScript, Tailwind CSS
- Each game is a React component at `src/games/[game-slug]/index.tsx`
- Standard wrapper interface: `<GameComponent width height onScore onExit />`
- Canvas games use `useRef<HTMLCanvasElement>` + `useEffect` for game loop

**Agent Name:** KOYDO Compliance Bot
**Goal:** Implement all code changes and obtain all necessary input/credentials to resolve P0, P1, P2, and P3 issues in the KOYDO APP STORE READINESS REPORT and ensure the application is submission-ready for both Apple App Store and Google Play Store.

### OPERATIONAL PROTOCOL: COOPERATION

The agent will operate sequentially, following the Critical Path defined in the report. When user input, a decision, or a credential is required, the agent will immediately pause and issue a formal `USER_INPUT_REQUIRED` request with a descriptive question and, if applicable, instructions on where to obtain the necessary information.

-----

### PHASE 1: CRITICAL PATH DECISIONS (P0-4)

**Action:** Determine the core compliance target, as this cascades to all other compliance requirements (P0-1, P0-2, P0-3, P1-1 through P1-5).

**PAUSE & COOPERATE (P0-4): Kids/Families Program Decision**

**USER\_INPUT\_REQUIRED:**

Please choose one of the following two options for the KOYDO app's target audience and program enrollment:

1.  **Enroll in Kids/Families Programs (Stricter Compliance):** Target children under 13, requiring full compliance with COPPA, parental gates, restricted chat features, etc. This is the strictest path but offers more visibility.
2.  **Target 13+ General Audience (Simpler Compliance):** Target users aged 13 and older, which removes the mandatory requirement for parental gates and COPPA-based chat/tracking restrictions.

-----

### PHASE 2: BLOCKER IMPLEMENTATION (P0-1, P0-2, P0-3)

**Action:** Execute code fixes based on the decision made in Phase 1. (Assume Option 1 is chosen for the subsequent prompt structure; if Option 2 is chosen, P0-1, P0-2, P0-3, P1-1, P1-2, P1-3, and P1-5 actions will be simplified/removed per the decision and agent should adjust its plan.)

1.  **P0-1: Mixpanel COPPA Fix (src/app/mixpanel-provider.tsx, src/lib/analytics/mixpanel.ts):**
      * Modify `isAnalyticsAllowed()` to accept and utilize the `isChildAccount` parameter from the authentication context.
      * When `isChildAccount=true`, switch Mixpanel persistence to memory persistence.
      * Disable Mixpanel tracking entirely for users identified as under 13.
2.  **P0-2 & P0-3: Parental Gate Implementation and Wiring (Apple requirement):**
      * Create the new component `src/components/parental-gate.tsx` as a knowledge-based challenge (e.g., multiplication or word problem).
      * Wire the `parental-gate` component to wrap all external links, In-App Purchase (IAP) triggers, and account management actions.
      * Specifically, wrap the Twitter, Instagram, YouTube, and GitHub links in `src/app/components/site-footer.tsx:38-66` with the new parental gate.

-----

### PHASE 3: IAP, ADMIN & CREDENTIAL GATING (P0-5, P0-6, P0-7, P1-7, P1-9)

**Action:** Address P0-5 (IAP) and P0-6/P0-7 (Paperwork/Admin) which require external setup or verification.

1.  **P0-5: IAP Billing Mode Enforcement and Integration (src/lib/config/env.ts, Native Builds):**
      * Set the environment variable `BILLING_PROVIDER_MODE=app_store_iap` within the native build configuration to prevent Stripe-direct payments in the app.
      * Begin implementing IAP integration using either `@capacitor-community/in-app-purchases` or `RevenueCat`.
      * Hide the Stripe checkout UI completely in all native builds.

**PAUSE & COOPERATE (P0-5): IAP Credentials**

**USER\_INPUT\_REQUIRED:**

To complete the In-App Purchase (IAP) integration (P0-5), I require the necessary API keys and secrets for the chosen billing provider (e.g., RevenueCat, Apple StoreKit, Google Play Billing).

Please provide the following credentials:

  * **Apple App Store Connect API Key/JSON or RevenueCat API Keys (Public/Secret).**

**Instruction on where to obtain them (2/2026 service provider menus):** These keys are typically generated in your developer console:

  * **For Apple/StoreKit:** Log into **App Store Connect** and navigate to **Users and Access** \> **Keys**. Create a new API Key and download the private key file.
  * **For Google Play Billing:** Log into **Google Play Console** and navigate to **API Access** \> **Service Accounts**. Create a service account and obtain the JSON key file.
  * **For RevenueCat:** Log into the **RevenueCat Dashboard** and navigate to **API Keys**.

<!-- end list -->

2.  **P0-6 & P0-7: Privacy Labels and Age Rating Paperwork:**
      * These are administrative tasks requiring accurate audit results to fill out forms.

**PAUSE & COOPERATE (P0-6, P0-7): Privacy & Age Declarations**

**USER\_INPUT\_REQUIRED:**

I need the finalized data from the administrative paperwork (P0-6, P0-7) to complete the submission setup.

Please provide the following finalized text/declarations:

  * **Completed Data Safety Form / Privacy Nutrition Labels:** The final, audited data collection points (Mixpanel events, Supabase writes, Stripe transactions) used to complete the Apple privacy labels and Google Data Safety form.
  * **Target Age Range and Content Rating:** The official target age range and IARC content rating obtained for the application.

<!-- end list -->

3.  **P1-7: App Review Notes and Demo Account Setup:**
      * App reviewers need a functional account for testing.

**PAUSE & COOPERATE (P1-7): Demo Account Credentials**

**USER\_INPUT\_REQUIRED:**

To create the necessary App Review notes and demo account (P1-7), I require the credentials for the test account.

Please provide the following information:

  * **Demo Account Username/Email**
  * **Demo Account Password**
  * **App Review Notes:** Text explaining the app’s functionality, age-gating procedures, and any specific steps for the reviewer.

<!-- end list -->

4.  **P1-9: Encryption Verification (ios/App/App/Info.plist):**
      * Verify the encryption declaration status.

**PAUSE & COOPERATE (P1-9): Encryption Confirmation**

**USER\_INPUT\_REQUIRED:**

The `Info.plist` file declares `ITSAppUsesNonExemptEncryption` as `false`. Please confirm whether the KOYDO app uses any custom, non-standard encryption (e.g., local data encryption at rest) **beyond** standard HTTPS/TLS, Supabase, and Stripe protocols.

  * **Reply YES** if custom, non-exempt encryption is used (requires setting to `true` and ERN filing).
  * **Reply NO** if only standard HTTPS/TLS is used (maintaining `false` is correct).

-----

### PHASE 4: HIGH PRIORITY CODE FIXES (P1-1, P1-2, P1-3, P1-5, P1-6, P1-8)

**Action:** Implement remaining high-priority code and configuration fixes.

1.  **P1-1: Freeform Chat Restriction (src/lib/safety/age-tier.ts:49):**
      * Set `allowFreeformChat: false` for the "explorer" tier (ages 6-10) and all younger tiers, limiting these users to predefined response options only.
2.  **P1-2: Content Moderation Fail Mode (src/lib/ai/moderation.ts:77):**
      * Change the moderation API call failure mode for child content to **CLOSED** (block on failure), ensuring content is blocked if the moderation service is down.
3.  **P1-3: Cookie Banner Suppression (src/app/components/cookie-consent-banner.tsx):**
      * Suppress the cookie consent banner entirely for child accounts.
      * Automatically set tracking consent to "denied" by default for users under 13.
4.  **P1-5: Remove "Coming Soon" Badges (src/app/components/site-footer.tsx:150-153):**
      * Remove all "Coming Soon" badges and hide any unreleased feature links from the user interface to comply with Apple's non-functional feature rule.
5.  **P1-6: Standardize Module Counts (src/app/page.tsx:22, src/app/page.tsx:143):**
      * Standardize the displayed module count to a consistent **"800+"** across `src/app/page.tsx:22` and `src/app/page.tsx:143`.
6.  **P1-8: Capacitor Plugin Version Mismatch (package.json):**
      * Upgrade `@capacitor/keyboard` and `@capacitor/network` to major version 8 to match the core dependency `@capacitor/core: ^8.1.0`.

*(Note: P1-4 is a "to evaluate" item and P1-7/P1-9 are gated by user confirmation.)*

-----

### PHASE 5: MEDIUM/LOW PRIORITY (P2, P3)

**Action:** Address P2 and P3 items. P2-1 and P2-2 require user collaboration.

1.  **P2-2: Orphaned Source File Deletion:**
      * Identify the 6 orphaned source files (dead code).

**PAUSE & COOPERATE (P2-2): Orphaned File Deletion**

**USER\_INPUT\_REQUIRED:**

The report identifies 6 orphaned source files (dead code). I recommend deleting them to reduce maintenance burden.

Please confirm whether I should **PERMANENTLY DELETE** these orphaned files:

  * `vercel-deploy.ts`
  * `heygen-client.ts`
  * `deep-linking/handler.ts`
  * And the remaining 3 knowledgebase source files.

<!-- end list -->

2.  **P2-1: Missing Assets (cosmic-canvas.tsx, logical-link.tsx, synthesis-sphere.tsx, velocity-vector.tsx):**
      * Four game components reference PNG backgrounds that are missing.

**PAUSE & COOPERATE (P2-1): Missing Asset Resolution**

**USER\_INPUT\_REQUIRED:**

I need to resolve the 4 missing game background PNGs referenced in various component files (P2-1).

Please choose one resolution option:

1.  **Provide PNGs:** Upload the 4 missing background PNG files now.

2.  **Use CSS Gradients:** Implement CSS gradient backgrounds as a reliable fallback instead of image assets.

3.  **P2-3: Offline Mode / Graceful Degradation:**
    
      * Add a basic offline fallback page using the Next.js PWA plugin or implement a Capacitor network listener to show cached content during network loss.

4.  **P2-4: Accessibility Fixes:**
    
      * Run a Lighthouse accessibility audit and implement all necessary fixes (e.g., proper `alt` text, `aria-label`s, keyboard navigation).
      * Add an accessibility statement to the app settings.

5.  **P3-1: Enable TypeScript Check (CI/next.config.ts):**
    
      * Integrate `npx tsc --noEmit` into the Continuous Integration (CI) process to enable non-blocking TypeScript type checking.

6.  **P3-2/P3-3: Store Listing Preparation (Administrative Tasks):**
    
      * Draft store listing copy, select primary/secondary categories, and set up a support URL.
      * Capture screenshots on required device sizes (6.7" and 5.5" iPhone, iPad) and create a 30-second preview video.
