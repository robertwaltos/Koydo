"use client";

import { ReactNode } from "react";
import MixpanelProvider from "./mixpanel-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { ThemeProvider } from "@/lib/theme/provider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <MixpanelProvider>{children}</MixpanelProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
