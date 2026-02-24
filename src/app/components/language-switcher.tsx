"use client";

import { useI18n } from "@/lib/i18n/provider";
import { localeLabels, SUPPORTED_LOCALES } from "@/lib/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-foreground">{t("language_label")}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="ui-focus-ring min-h-9 rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground shadow-sm [color-scheme:light]"
      >
        {SUPPORTED_LOCALES.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
