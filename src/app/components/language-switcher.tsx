"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { ACTIVE_LOCALES, localeLabels } from "@/lib/i18n/translations";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const router = useRouter();
  const [, startTransition] = useTransition();

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
        {ACTIVE_LOCALES.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
