"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl" aria-hidden="true">🔍</span>
      <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {t("root_not_found_title")}
      </h1>
      <p className="mt-2 max-w-md text-sm text-zinc-500 dark:text-zinc-400">
        {t("root_not_found_message")}
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/explore"
          className="ui-focus-ring inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-600 active:scale-95"
        >
          {t("root_not_found_start_exploring")}
        </Link>
        <Link
          href="/"
          className="ui-focus-ring inline-flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-slate-900 dark:text-zinc-200"
        >
          {t("root_not_found_go_home")}
        </Link>
      </div>
    </div>
  );
}
