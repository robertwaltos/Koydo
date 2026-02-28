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
  translate,
} from "@/lib/i18n/translations";

const LOCALE_STORAGE_KEY = "koydo.locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieEntry = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LOCALE_STORAGE_KEY}=`));

  if (!cookieEntry) {
    return null;
  }

  const value = decodeURIComponent(cookieEntry.slice(`${LOCALE_STORAGE_KEY}=`.length));
  return isSupportedLocale(value) ? value : null;
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const cookieLocale = getLocaleFromCookie();
  if (cookieLocale) {
    return cookieLocale;
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && isSupportedLocale(stored)) {
    return stored;
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
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: (key: string, vars?: Record<string, string | number>) =>
        translate(locale, key, vars),
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
