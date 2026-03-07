"use client";

import { ReactNode, useCallback, useState } from "react";
import MixpanelProvider from "./mixpanel-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";
import { PreReaderModeProvider } from "./explore/_components/pre-reader-mode";
import { VoicePreferenceProvider } from "./explore/_components/voice-preference";
import { ActiveProfileProvider, useActiveProfile } from "@/lib/profiles/active-profile-context";
import { getTierFromAge } from "@/lib/safety/age-tier";
import SessionExpiryFetchGuard from "./components/session-expiry-fetch-guard";
import PlatformLifecycleProvider from "./platform-lifecycle-provider";
import PlatformClassProvider from "./components/platform-class-provider";
import OfflineRuntimeProvider from "./components/offline-runtime-provider";
import { ExperienceProvider } from "@/lib/gamification/experience-context";
import { ZenModeProvider } from "@/lib/theme/zen-mode-context";
import { FeatureProvider } from "@/lib/platform/feature-context";
import { CompanionPreferencesProvider } from "@/lib/greeter/companion-preferences";
import { AccessibilityProvider } from "@/lib/accessibility/accessibility-context";
import GreeterCompanion from "@/components/experience/GreeterCompanion";
import GlobalSearch from "./components/global-search";
import { useRageClickDetector } from "@/lib/experience/use-rage-click-detector";
import AmbientRegulator from "@/components/experience/AmbientRegulator";

const GEMINI_UI_ENABLED =
  process.env.NEXT_PUBLIC_GEMINI_UI === "true" ||
  process.env.NEXT_PUBLIC_GEMINI_UI === "1";

/** Reads the active profile's age and passes the derived tier to VoicePreferenceProvider */
function AgeAwareVoiceProvider({ children }: { children: ReactNode }) {
  const { profile } = useActiveProfile();
  const ageTier = profile?.age_years != null ? getTierFromAge(profile.age_years) : undefined;
  return <VoicePreferenceProvider ageTier={ageTier}>{children}</VoicePreferenceProvider>;
}

function FrustrationDetector({ children }: { children: ReactNode }) {
  const [breathingOpen, setBreathingOpen] = useState(false);
  const handleFrustration = useCallback(() => setBreathingOpen(true), []);
  const handleClose = useCallback(() => setBreathingOpen(false), []);

  useRageClickDetector({ onFrustration: handleFrustration });

  return (
    <>
      {children}
      <AmbientRegulator open={breathingOpen} onClose={handleClose} />
    </>
  );
}

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <PlatformLifecycleProvider>
      <PlatformClassProvider>
        <ActiveProfileProvider>
          <PreReaderModeProvider>
          <AgeAwareVoiceProvider>
          <ThemeProvider>
            <I18nProvider>
              <OfflineRuntimeProvider>
                <SessionExpiryFetchGuard />
                {/* ExperienceProvider renders global celebration overlays
                    (JuicyConfetti, AchievementToast) and exposes useExperience()
                    to the entire tree. Owns: src/lib/gamification/ */}
                <AccessibilityProvider>
                <FeatureProvider>
                <ZenModeProvider>
                <ExperienceProvider>
                  <CompanionPreferencesProvider>
                  <MixpanelProvider>
                    {GEMINI_UI_ENABLED ? (
                      <FrustrationDetector>{children}</FrustrationDetector>
                    ) : (
                      children
                    )}
                    <GlobalSearch />
                    <GreeterCompanion />
                  </MixpanelProvider>
                  </CompanionPreferencesProvider>
                </ExperienceProvider>
                </ZenModeProvider>
                </FeatureProvider>
                </AccessibilityProvider>
              </OfflineRuntimeProvider>
            </I18nProvider>
          </ThemeProvider>
          </AgeAwareVoiceProvider>
          </PreReaderModeProvider>
        </ActiveProfileProvider>
      </PlatformClassProvider>
    </PlatformLifecycleProvider>
  );
}
