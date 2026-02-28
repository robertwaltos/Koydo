"use client";

import { ReactNode } from "react";
import MixpanelProvider from "./mixpanel-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";
import { PreReaderModeProvider } from "./explore/_components/pre-reader-mode";
import { ActiveProfileProvider } from "@/lib/profiles/active-profile-context";
import SessionExpiryFetchGuard from "./components/session-expiry-fetch-guard";
import PlatformLifecycleProvider from "./platform-lifecycle-provider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <PlatformLifecycleProvider>
      <ActiveProfileProvider>
        <PreReaderModeProvider>
        <ThemeProvider>
          <I18nProvider>
            <SessionExpiryFetchGuard />
            <MixpanelProvider>{children}</MixpanelProvider>
          </I18nProvider>
        </ThemeProvider>
        </PreReaderModeProvider>
      </ActiveProfileProvider>
    </PlatformLifecycleProvider>
  );
}
