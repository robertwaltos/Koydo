"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";

const DISMISSED_KEY = "koydo.upgrade-banner-dismissed";

export default function UpgradeBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem(DISMISSED_KEY);
  });

  if (!visible) return null;

  return (
    <div className="mx-auto mb-6 w-full max-w-3xl rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-4 shadow-sm border-warn/40 dark:from-amber-950/30 dark:to-orange-950/20">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span className="text-2xl" aria-hidden="true">
          ✨
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-amber-900 dark:text-amber-200">
            {t("explore_upgrade_banner_title")}
          </p>
          <p className="mt-0.5 text-xs text-amber-800/80 dark:text-amber-300/70">
            {t("explore_upgrade_banner_body")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/billing/checkout"
            className="ui-focus-ring rounded-full bg-amber-700 px-4 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-amber-800"
          >
            {t("explore_upgrade_banner_cta")}
          </Link>
          <button
            type="button"
            onClick={() => {
              window.sessionStorage.setItem(DISMISSED_KEY, "1");
              setVisible(false);
            }}
            className="ui-focus-ring rounded-full px-3 py-1.5 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-900/30"
          >
            {t("explore_upgrade_banner_dismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
