"use client";

import { useI18n } from "@/lib/i18n/provider";

export default function ExploreLoading() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[calc(100vh-52px)] flex-col">
      <span className="sr-only">{t("root_loading_label")}</span>
      {/* Hero skeleton */}
      <header className="relative overflow-hidden px-4 pb-8 pt-10 text-center sm:pb-10 sm:pt-14">
        <div className="mx-auto mb-5 flex items-center justify-center gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-9 animate-pulse rounded-full bg-zinc-200/60 sm:h-10 sm:w-10"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
        <div className="mx-auto flex flex-col items-center gap-3">
          <div className="h-10 w-56 animate-pulse rounded-xl bg-zinc-200/50" />
          <div className="h-5 w-72 animate-pulse rounded-lg bg-zinc-100/60" />
        </div>
      </header>

      {/* Stage card skeletons */}
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-5 px-4 pb-10 sm:grid-cols-2 sm:gap-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex min-h-[280px] animate-pulse flex-col items-center justify-center rounded-3xl border-2 border-zinc-100 bg-surface-muted/50 p-5 sm:min-h-[320px]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="h-14 w-14 rounded-full bg-zinc-200/50" />
            <div className="mt-4 h-7 w-36 rounded-lg bg-zinc-200/40" />
            <div className="mt-2 h-4 w-48 rounded bg-zinc-100/60" />
            <div className="mt-3 flex gap-2">
              <div className="h-5 w-14 rounded-full bg-zinc-200/40" />
              <div className="h-5 w-16 rounded-full bg-zinc-100/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
