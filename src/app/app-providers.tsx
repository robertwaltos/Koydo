"use client";

import { ReactNode } from "react";
import MixpanelProvider from "./mixpanel-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";
import { PreReaderModeProvider } from "./explore/_components/pre-reader-mode";
import { VoicePreferenceProvider } from "./explore/_components/voice-preference";
import { ActiveProfileProvider } from "@/lib/profiles/active-profile-context";
import SessionExpiryFetchGuard from "./components/session-expiry-fetch-guard";
import PlatformLifecycleProvider from "./platform-lifecycle-provider";
import PlatformClassProvider from "./components/platform-class-provider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <PlatformLifecycleProvider>
      <PlatformClassProvider>
        <ActiveProfileProvider>
          <PreReaderModeProvider>
          <VoicePreferenceProvider>
          <ThemeProvider>
            <I18nProvider>
              <SessionExpiryFetchGuard />
              <MixpanelProvider>{children}</MixpanelProvider>
            </I18nProvider>
          </ThemeProvider>
          </VoicePreferenceProvider>
          </PreReaderModeProvider>
        </ActiveProfileProvider>
      </PlatformClassProvider>
    </PlatformLifecycleProvider>
  );
}
