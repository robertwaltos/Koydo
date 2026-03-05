"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

export default function WhoIsLearningPage() {
  const { t } = useI18n();
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
        <AdaptiveBackground ageGroup="standard" />
        <div className="family-orbit-spinner z-10" role="status" aria-label={t("who_learning_loading_aria")} />
      </main>
    }>
      <WhoIsLearningInner />
    </Suspense>
  );
}

function WhoIsLearningInner() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const nextPath = sanitizeNextPath(searchParams.get("next"));

  // When called with ?next, preserve redirect behavior for middleware flow
  if (nextPath) {
    redirect(`/select-profile?next=${encodeURIComponent(nextPath)}`);
  }

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12"
      aria-labelledby="family-heading"
    >
      <AdaptiveBackground ageGroup="standard" />

      <div className="family-card-enter relative z-10 mx-auto max-w-md text-center rounded-[2.5rem] border border-white/60 bg-white/40 p-10 sm:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        {/* Badge */}
        <div
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 shadow-[0_12px_32px_rgba(16,185,129,0.4)] sm:h-28 sm:w-28"
          aria-hidden="true"
        >
          <span className="text-5xl sm:text-6xl drop-shadow-md">👋</span>
        </div>

        <h1
          id="family-heading"
          className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-tight"
        >
          {t("who_learning_heading")}
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-base font-medium text-zinc-600">
          {t("who_learning_subtitle")}
        </p>

        {/* Primary CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/select-profile"
            className="ui-soft-button ui-focus-ring inline-flex min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-base font-black text-white shadow-[0_8px_20px_rgba(16,185,129,0.4)] transition-transform hover:scale-105 hover:bg-emerald-400 active:scale-95 sm:w-auto uppercase tracking-widest"
          >
            {t("who_learning_choose_learner")}
          </Link>
          <Link
            href="/student/onboarding"
            className="ui-focus-ring inline-flex min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/50 px-6 py-3 text-sm font-bold text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/80 hover:text-zinc-900 hover:shadow-md sm:w-auto"
          >
            <span aria-hidden="true" className="text-lg leading-none">+</span>
            {t("who_learning_add_new")}
          </Link>
        </div>

        {/* Tertiary link */}
        <p className="mt-10 text-sm font-semibold">
          <Link
            href="/parent/dashboard"
            className="ui-focus-ring rounded-md text-zinc-500 hover:text-zinc-800 transition-colors underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-400"
          >
            {t("who_learning_parent_settings")}
          </Link>
        </p>
      </div>
    </main>
  );
}

