"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  isSupportedLocale,
  Locale,
  translations,
} from "@/lib/i18n/translations";

const LOCALE_STORAGE_KEY = "eduforge.locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && isSupportedLocale(stored)) {
    return stored;
  }

  const browserLocale = navigator.language.split("-")[0]?.toLowerCase() ?? "en";
  if (isSupportedLocale(browserLocale)) {
    return browserLocale;
  }

  return "en";
}

function localeDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: (key: string) => translations[locale][key] ?? translations.en[key] ?? key,
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider.");
  }

  return context;
}
