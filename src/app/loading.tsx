"use client";

import { useI18n } from "@/lib/i18n/provider";

export default function RootLoading() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="family-orbit-spinner" />
        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{t("root_loading_label")}</p>
      </div>
    </div>
  );
}
