"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { publicEnv } from "@/lib/config/env";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import OAuthButtons from "@/app/auth/sign-in/oauth-buttons";
import SoftCard from "@/app/components/ui/soft-card";
import { useI18n } from "@/lib/i18n/provider";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" /></div>}>
      <SignUpPageInner />
    </Suspense>
  );
}

function SignUpPageInner() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = sanitizeNextPath(searchParams.get("next"));
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (!hasSupabaseConfig) {
      setStatus(t("auth_sign_up_status_unavailable"));
      return;
    }
    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setStatus(error.message);
        return;
      }

      setStatus(t("auth_sign_up_status_created"));
      // New accounts must complete age gate before onboarding.
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (!signInError) {
        const postAgeGateNextPath =
          nextPath && (nextPath.startsWith("/billing") || nextPath.startsWith("/account"))
            ? nextPath
            : "/student/onboarding";
        router.push(`/auth/age-gate?next=${encodeURIComponent(postAgeGateNextPath)}`);
      } else {
        const signInPath = nextPath
          ? `/auth/sign-in?next=${encodeURIComponent(nextPath)}`
          : "/auth/sign-in";
        router.push(signInPath);
      }

    } catch {
      setStatus(t("auth_sign_up_status_unable"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <SoftCard as="section" organicCorners className="bg-[var(--gradient-hero)] p-5">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-foreground">{t("auth_sign_up_title")}</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-foreground/70">{t("auth_sign_up_subtitle")}</p>
      </SoftCard>

      <SoftCard as="section" className="mt-6 p-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              {t("auth_sign_up_label_email")}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              {t("auth_sign_up_label_password")}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !hasSupabaseConfig}
            className="ui-soft-button ui-focus-ring min-h-11 rounded-full bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
          >
            {isSubmitting ? t("auth_sign_up_button_creating") : t("auth_sign_up_button_create")}
          </button>

          {status ? <p role="status" className="text-sm text-zinc-600 dark:text-foreground/70">{status}</p> : null}
          {!hasSupabaseConfig ? (
            <p role="status" className="text-xs text-amber-700">
              {t("auth_sign_up_missing_supabase")}
            </p>
          ) : null}
        </form>
      </SoftCard>

      <div className="relative mt-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-surface px-2 text-zinc-500 dark:text-foreground/60">{t("auth_sign_up_divider_or")}</span>
        </div>
      </div>

      <OAuthButtons intent="up" nextPath={nextPath} />

      <p className="mt-6 text-sm text-zinc-600 dark:text-foreground/70">
        {t("auth_sign_up_footer_have_account")}{" "}
        <Link
          href={nextPath ? `/auth/sign-in?next=${encodeURIComponent(nextPath)}` : "/auth/sign-in"}
          className="underline"
        >
          {t("auth_sign_up_footer_sign_in")}
        </Link>
      </p>
    </main>
  );
}
