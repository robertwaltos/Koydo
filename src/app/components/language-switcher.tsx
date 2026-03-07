"use client";

import { useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { ACTIVE_LOCALES, localeLabels } from "@/lib/i18n/translations";
import { getAppLocales } from "@/lib/platform/app-manifest";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Filter ACTIVE_LOCALES to only those the current micro-app supports
  const visibleLocales = useMemo(() => {
    const appLocales = getAppLocales();
    if (appLocales.includes("*")) return ACTIVE_LOCALES;
    return ACTIVE_LOCALES.filter((code) => appLocales.includes(code));
  }, []);

  // Don't render if only one locale available
  if (visibleLocales.length <= 1) return null;

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className={compact ? "sr-only" : "text-foreground"}>{t("language_label")}</span>
      <select
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as typeof locale;
          setLocale(nextLocale);
          startTransition(() => {
            router.refresh();
          });
        }}
        aria-label={t("language_label")}
        className="ui-focus-ring min-h-9 rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground shadow-sm [color-scheme:light]"
      >
        {visibleLocales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
