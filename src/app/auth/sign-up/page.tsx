"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { publicEnv } from "@/lib/config/env";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { ASSETS } from "@/lib/config/assets";
import OAuthButtons from "@/app/auth/sign-in/oauth-buttons";
import { useI18n } from "@/lib/i18n/provider";
import { usStateOptions, internationalOptions } from "@/lib/legal/jurisdictions";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" /></div>}>
      <SignUpPageInner />
    </Suspense>
  );
}

type SignUpRole = "parent" | "student" | "teacher";

const ROLE_CARDS: {
  id: SignUpRole;
  emoji: string;
  title: string;
  desc: string;
  accentClass: string;
  borderClass: string;
}[] = [
  {
    id: "parent",
    emoji: "👨‍👩‍👧‍👦",
    title: "Parent / Guardian",
    desc: "Manage kids' learning, set goals, and track progress from one dashboard.",
    accentClass: "text-emerald-700",
    borderClass: "border-emerald-400",
  },
  {
    id: "student",
    emoji: "🎓",
    title: "Student (13+)",
    desc: "Self-directed learning across every subject — from basics to college-level.",
    accentClass: "text-violet-700",
    borderClass: "border-violet-400",
  },
  {
    id: "teacher",
    emoji: "🏫",
    title: "Educator",
    desc: "Assign modules, monitor class progress, and integrate with your curriculum.",
    accentClass: "text-sky-700",
    borderClass: "border-sky-400",
  },
];

function SignUpPageInner() {
  const { t } = useI18n();
  const [selectedRole, setSelectedRole] = useState<SignUpRole | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billingState, setBillingState] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = sanitizeNextPath(searchParams.get("next"));
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const termsHref = useMemo(() => {
    if (!billingState) return "/legal/terms";
    return `/legal/terms?state=${encodeURIComponent(billingState)}`;
  }, [billingState]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");

    if (!hasSupabaseConfig) {
      setStatus(t("auth_sign_up_status_unavailable"));
      return;
    }

    if (!billingState) {
      setStatus("Please select your billing state before creating an account.");
      return;
    }

    if (!acceptedTerms) {
      setStatus("You must accept the Terms of Service to continue.");
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

      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (!signInError) {
        const acceptanceResponse = await fetch("/api/compliance/policy-acceptance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ policyType: "terms", billingState }),
        });

        if (!acceptanceResponse.ok) {
          const data = (await acceptanceResponse.json().catch(() => ({}))) as { error?: string };
          setStatus(data.error ?? "Unable to record Terms acceptance. Please try again.");
          return;
        }

        const completionResponse = await fetch("/api/auth/signup-complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ billingState, role: selectedRole }),
        });

        if (!completionResponse.ok) {
          const data = (await completionResponse.json().catch(() => ({}))) as {
            error?: string;
            details?: string;
          };
          const reason = data.details ?? data.error ?? "Unable to send signup email right now.";
          setStatus(`Account created. ${reason}`);
        } else {
          setStatus(t("auth_sign_up_status_created"));
        }

        const postAgeGateNextPath =
          nextPath && (nextPath.startsWith("/billing") || nextPath.startsWith("/account"))
            ? nextPath
            : "/student/onboarding";
        // Full page load to guarantee fresh server-side session cookies
        window.location.href = `/auth/age-gate?next=${encodeURIComponent(postAgeGateNextPath)}`;
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 w-full">
      <div className="w-full max-w-lg p-8 sm:p-10">
        {/* ══════════════════════════════════════
            STEP 1: Role selector
        ══════════════════════════════════════ */}
        {!selectedRole ? (
          <>
            <div className="mb-6 text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
                {t("auth_sign_up_hero_eyebrow")}
              </p>
              <h1
                className="mt-1 text-2xl font-black tracking-tight text-zinc-900"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                Who&apos;s joining today?
              </h1>
              <p className="mt-1.5 text-sm text-zinc-500">
                We&apos;ll personalise your experience based on your role
              </p>
            </div>

            <div className="space-y-3">
              {ROLE_CARDS.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={[
                    "group flex w-full items-center gap-4 rounded-2xl border bg-white/80 px-5 py-4 text-left transition-all duration-200 hover:border-current hover:bg-white hover:shadow-md",
                    role.borderClass,
                  ].join(" ")}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-50 text-2xl shadow-sm group-hover:bg-white">
                    {role.emoji}
                  </span>
                  <div>
                    <p className={`text-sm font-bold ${role.accentClass}`}>{role.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{role.desc}</p>
                  </div>
                  <span className="ml-auto text-zinc-300 group-hover:text-zinc-500">›</span>
                </button>
              ))}
            </div>

            <p className="mt-5 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                href={nextPath ? `/auth/sign-in?next=${encodeURIComponent(nextPath)}` : "/auth/sign-in"}
                className="font-semibold text-emerald-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </>
        ) : (
          /* ══════════════════════════════════════
              STEP 2: Registration form
          ══════════════════════════════════════ */
          <>
            {/* Back + role badge header */}
            <div className="mb-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-sm text-zinc-500 hover:bg-zinc-100"
                aria-label="Back to role selector"
              >
                ←
              </button>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
                  Signing up as
                </p>
                <p className="text-sm font-bold text-zinc-900">
                  {ROLE_CARDS.find((r) => r.id === selectedRole)?.emoji}{" "}
                  {ROLE_CARDS.find((r) => r.id === selectedRole)?.title}
                </p>
              </div>
            </div>

            <h2
              className="text-xl font-black tracking-tight text-zinc-900"
              style={{ fontFamily: "var(--font-display-sans)" }}
            >
              {t("auth_sign_up_title")}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">{t("auth_sign_up_subtitle")}</p>

            <OAuthButtons intent="up" nextPath={nextPath} className="mt-5" />

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-zinc-200/70" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                {t("auth_sign_up_divider_or")}
              </span>
              <div className="h-px flex-1 bg-zinc-200/70" />
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  {t("auth_sign_up_label_email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                  required
                  aria-required="true"
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                  minLength={8}
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="billing-state" className="mb-1 block text-sm font-medium">
                  Billing State
                </label>
                <select
                  id="billing-state"
                  value={billingState}
                  onChange={(e) => setBillingState(e.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm"
                  required
                >
                  <option value="">Select billing region</option>
                  <optgroup label="United States">
                    {usStateOptions.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="International">
                    {internationalOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <label className="flex items-start gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-emerald-600"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link href={termsHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                    Terms of Service
                  </Link>
                  {billingState ? ` for ${billingState}` : ""}.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting || !hasSupabaseConfig}
                className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full border-transparent bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-95 disabled:opacity-60"
              >
                {isSubmitting ? t("auth_sign_up_button_creating") : t("auth_sign_up_button_create")}
              </button>

              {status ? <p role="status" className="text-sm text-zinc-600">{status}</p> : null}
              {!hasSupabaseConfig ? (
                <p className="text-xs text-amber-700">{t("auth_sign_up_missing_supabase")}</p>
              ) : null}
            </form>

            <p className="mt-5 text-center text-sm text-zinc-500">
              {t("auth_sign_up_footer_have_account")}{" "}
              <Link
                href={nextPath ? `/auth/sign-in?next=${encodeURIComponent(nextPath)}` : "/auth/sign-in"}
                className="font-semibold text-emerald-700 hover:underline"
              >
                {t("auth_sign_up_footer_sign_in")}
              </Link>
            </p>

            {/* Trust pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 border-t border-zinc-100/80 pt-4">
              {[
                { icon: "🛡️", text: "COPPA" },
                { icon: "🚫", text: "Zero Ads" },
                { icon: "🔒", text: "No Tracking" },
                { icon: "✨", text: "Free" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="flex items-center gap-1 rounded-full border border-zinc-200/60 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400"
                >
                  <span aria-hidden="true">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}


