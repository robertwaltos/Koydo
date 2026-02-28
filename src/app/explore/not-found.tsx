"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";

export default function ExploreNotFound() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[calc(100vh-52px)] flex-col items-center justify-center px-4 text-center">
      <span className="text-5xl" aria-hidden="true">🔍</span>
      <h1 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
        {t("explore_not_found_title")}
      </h1>
      <p className="mt-2 max-w-md text-sm text-zinc-500 dark:text-zinc-400">
        {t("explore_not_found_message")}
      </p>
      <Link
        href="/explore"
        className="ui-focus-ring mt-6 inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-600 active:scale-95"
      >
        {t("explore_not_found_back_to_explore")}
      </Link>
    </div>
  );
}
