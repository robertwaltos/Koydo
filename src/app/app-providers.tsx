"use client";

import { ReactNode, useCallback, useState } from "react";
import MixpanelProvider from "./mixpanel-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";
import { PreReaderModeProvider } from "./explore/_components/pre-reader-mode";
import { VoicePreferenceProvider } from "./explore/_components/voice-preference";
import { ActiveProfileProvider } from "@/lib/profiles/active-profile-context";
import SessionExpiryFetchGuard from "./components/session-expiry-fetch-guard";
import PlatformLifecycleProvider from "./platform-lifecycle-provider";
import PlatformClassProvider from "./components/platform-class-provider";
import OfflineRuntimeProvider from "./components/offline-runtime-provider";
import { ExperienceProvider } from "@/lib/gamification/experience-context";
import { CompanionPreferencesProvider } from "@/lib/greeter/companion-preferences";
import GreeterCompanion from "@/components/experience/GreeterCompanion";
import GlobalSearch from "./components/global-search";
import { useRageClickDetector } from "@/lib/experience/use-rage-click-detector";
import AmbientRegulator from "@/components/experience/AmbientRegulator";

const GEMINI_UI_ENABLED =
  process.env.NEXT_PUBLIC_GEMINI_UI === "true" ||
  process.env.NEXT_PUBLIC_GEMINI_UI === "1";

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
          <VoicePreferenceProvider>
          <ThemeProvider>
            <I18nProvider>
              <OfflineRuntimeProvider>
                <SessionExpiryFetchGuard />
                {/* ExperienceProvider renders global celebration overlays
                    (JuicyConfetti, AchievementToast) and exposes useExperience()
                    to the entire tree. Owns: src/lib/gamification/ */}
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
              </OfflineRuntimeProvider>
            </I18nProvider>
          </ThemeProvider>
          </VoicePreferenceProvider>
          </PreReaderModeProvider>
        </ActiveProfileProvider>
      </PlatformClassProvider>
    </PlatformLifecycleProvider>
  );
}
