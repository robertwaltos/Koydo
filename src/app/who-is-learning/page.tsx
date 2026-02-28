"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { sanitizeNextPath } from "@/lib/routing/next-path";

export default function WhoIsLearningPage() {
  const { t } = useI18n();
  return (
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="family-orbit-spinner" role="status" aria-label={t("who_learning_loading_aria")} />
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12"
      aria-labelledby="family-heading"
    >
      <div className="family-ambient-bg" aria-hidden="true" />

      <div className="family-card-enter relative mx-auto max-w-md text-center">
        {/* Badge */}
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg sm:h-24 sm:w-24"
          aria-hidden="true"
        >
          <span className="text-4xl sm:text-5xl">👋</span>
        </div>

        <h1
          id="family-heading"
          className="ui-type-display-lg font-extrabold tracking-tight text-zinc-900"
        >
          {t("who_learning_heading")}
        </h1>
        <p className="ui-type-body-md mx-auto mt-3 max-w-xs text-zinc-500">
          {t("who_learning_subtitle")}
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/select-profile"
            className="ui-soft-button ui-focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-sm sm:w-auto"
          >
            {t("who_learning_choose_learner")}
          </Link>
          <Link
            href="/student/onboarding"
            className="ui-focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-600 backdrop-blur-sm transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-700 sm:w-auto"
          >
            <span aria-hidden="true">+</span>
            {t("who_learning_add_new")}
          </Link>
        </div>

        {/* Tertiary link */}
        <p className="mt-8 text-sm text-zinc-400">
          <Link
            href="/parent/dashboard"
            className="ui-focus-ring rounded-md underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-zinc-600 hover:decoration-zinc-400"
          >
            {t("who_learning_parent_settings")}
          </Link>
        </p>
      </div>
    </main>
  );
}
