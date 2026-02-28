# Koydo: End-to-End Native Test Plan

## 1. Test Matrix
- **Android:** Emulator / Real Device (API 33+, Android 13+)
- **iOS:** Simulator / Real Device (iPhone 15, iOS 17; iPad Pro, iPadOS 17)

## 2. Happy Path
1. **Launch:** Open the app from the home screen. Verify splash screen displays correctly and transitions securely.
2. **Sign-in:** Enter credentials. Verify proper handling of the authentication session and callback.
3. **Select Profile:** Choose a learner profile. Ensure `ActiveProfileProvider` updates the UI theme/context globally.
4. **Explore:** Navigate to the main lobby and select an educational stage (e.g., Middle School).
5. **Pick Module:** Browse the free/premium module cards and select a topic.
6. **Start Lesson:** Ensure media and text load properly within the lesson UI.
7. **Complete:** Finish the lesson and verify the system records the progress and correctly returns to the module overview.

## 3. IAP Test Flow (RevenueCat Sandbox)
1. Navigate to a Premium-locked module.
2. Click **Subscribe with App Store / Google Play**.
3. **Trigger Sandbox Checkout:** Enter sandbox test credentials when prompted by the native OS overlay.
4. **Subscribe:** Complete the mock purchase.
5. **Verify Entitlement:** Ensure RevenueCat SDK acknowledges the `language_learning_premium` (or relevant) entitlement and updates UI state.
6. **Access:** The premium module should instantly unlock without requiring a restart.

## 4. Offline Behavior
- **Simulation:** Toggle Airplane mode / disconnect WiFi mid-lesson.
- **Expectation:** Active lesson UI should remain responsive if data was pre-fetched. Submitting progress should gracefully defer/queue or prompt a "Network Error. Progress saved locally, please reconnect" dialogue instead of a hard crash.

## 5. Deep Linking
- Verify custom URL schemes (e.g. `capacitor://localhost` setup or standard `koydo://`) route correctly from emails/web directly to specific stages or modules within the installed app.

## 6. Performance Targets
- **Initial Load Time:** < 3.0 seconds from tap to profile selection.
- **Lesson Transition:** < 1.0 second between pressing "Start Lesson" and the first interactive screen rendering.
- **Memory Footprint:** Monitor system usage to ensure there are no severe memory leaks during sustained 30+ minute language lab usages.

## 7. Known Issues / Blockers to Track
- Android Gradle tasks require Java 21 due to Capacitor v6 specifications (Note: JDK 21 dependency resolved in internal env).
- Camera permission prompted globally, but specific AR/Camera interaction modules are in upcoming sprint.
- OAuth (Google/Apple) native parity needs verification against standard web-flow redirects to avoid popup blocking in strict mobile environments.