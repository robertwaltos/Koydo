"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { publicEnv } from "@/lib/config/env";
import { useI18n } from "@/lib/i18n/provider";
import { normalizeNextPath } from "@/lib/routing/next-path";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { ASSETS } from "@/lib/config/assets";
import OAuthButtons from "./oauth-buttons";

function getCallbackErrorMessage(
  errorCode: string | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  if (!errorCode) return null;
  switch (errorCode) {
    case "oauth_access_denied":
      return t("auth_sign_in_error_oauth_access_denied");
    case "oauth_missing_code":
    case "oauth_callback_failed":
    case "oauth_exchange_failed":
      return t("auth_sign_in_error_oauth_failed");
    default:
      return errorCode;
  }
}

type SignInTab = "password" | "magic" | "phone";

function SignInPageContent() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<SignInTab>("password");

  // Password form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string>("");
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);

  // Magic link state
  const [emailOtp, setEmailOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState<string>("");
  const [isSubmittingEmailOtp, setIsSubmittingEmailOtp] = useState(false);

  // Phone OTP state
  const [phone, setPhone] = useState("");
  const [phoneToken, setPhoneToken] = useState("");
  const [phoneStatus, setPhoneStatus] = useState<string>("");
  const [isSendingPhoneOtp, setIsSendingPhoneOtp] = useState(false);
  const [isVerifyingPhoneOtp, setIsVerifyingPhoneOtp] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackErrorMessage = getCallbackErrorMessage(searchParams.get("error"), t);
  const isSessionExpired =
    searchParams.get("expired") === "true" ||
    searchParams.get("message") === "session-expired";
  const nextPath = normalizeNextPath(searchParams.get("next"));
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const onPasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (!hasSupabaseConfig) { setStatus(t("auth_sign_in_status_unavailable")); return; }
    setIsSubmittingPassword(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { setStatus(error.message); return; }
      setStatus(t("auth_sign_in_status_success"));
      // Full page load to guarantee fresh server-side session cookies
      window.location.href = nextPath;
    } catch { setStatus(t("auth_sign_in_status_unable")); }
    finally { setIsSubmittingPassword(false); }
  };

  const onEmailOtpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOtpStatus("");
    if (!hasSupabaseConfig) { setOtpStatus(t("auth_sign_in_magic_unavailable")); return; }
    setIsSubmittingEmailOtp(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const callbackUrl = new URL("/auth/callback", location.origin);
      callbackUrl.searchParams.set("next", nextPath);
      const { error } = await supabase.auth.signInWithOtp({
        email: emailOtp,
        options: { emailRedirectTo: callbackUrl.toString() },
      });
      if (error) { setOtpStatus(error.message); return; }
      setOtpStatus(t("auth_sign_in_magic_sent"));
    } catch { setOtpStatus(t("auth_sign_in_magic_unable")); }
    finally { setIsSubmittingEmailOtp(false); }
  };

  const onSendPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) { setPhoneStatus(t("auth_sign_in_phone_unavailable")); return; }
    setIsSendingPhoneOtp(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOtp({ phone });
      if (error) { setPhoneStatus(error.message); return; }
      setPhoneOtpSent(true);
      setPhoneStatus(t("auth_sign_in_phone_sent"));
    } catch { setPhoneStatus(t("auth_sign_in_phone_unable_send")); }
    finally { setIsSendingPhoneOtp(false); }
  };

  const onVerifyPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) { setPhoneStatus(t("auth_sign_in_phone_verify_unavailable")); return; }
    setIsVerifyingPhoneOtp(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.verifyOtp({ phone, token: phoneToken, type: "sms" });
      if (error) { setPhoneStatus(error.message); return; }
      setPhoneStatus(t("auth_sign_in_phone_verified_redirect"));
      // Full page load to guarantee fresh server-side session cookies
      window.location.href = nextPath;
    } catch { setPhoneStatus(t("auth_sign_in_phone_unable_verify")); }
    finally { setIsVerifyingPhoneOtp(false); }
  };

  const tabs: { id: SignInTab; label: string }[] = [
    { id: "password", label: t("auth_sign_in_email_password_title") },
    { id: "magic",    label: t("auth_sign_in_magic_link_title") },
    { id: "phone",    label: t("auth_sign_in_phone_title") },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 w-full">
      {/* Glass card - the background is handled by the layout */}
      <div className="w-full max-w-md p-8 sm:p-10">
        {/* Logo / wordmark */}
        <div className="mb-6 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
            {t("auth_sign_in_hero_eyebrow")}
          </p>
          <h1
            className="mt-1 text-2xl font-black tracking-tight text-zinc-900"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            {t("auth_sign_in_title")}
          </h1>
        </div>

        {/* Session expired / callback error banners */}
        {isSessionExpired && (
          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {t("auth_sign_in_session_expired")}
          </div>
        )}
        {callbackErrorMessage && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {callbackErrorMessage}
          </div>
        )}

        {/* OAuth buttons */}
        <OAuthButtons layout="grid-2" nextPath={nextPath} />

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200/70" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200/70" />
        </div>

        {/* Tab switcher */}
        <div className="mb-5 flex rounded-xl border border-zinc-200/60 bg-zinc-100/60 p-1" role="tablist" aria-label="Sign-in methods">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                "ui-auth-tab flex-1 text-xs",
                activeTab === tab.id
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Password ── */}
        {activeTab === "password" && (
          <form onSubmit={onPasswordSubmit} className="space-y-4" aria-label={t("auth_sign_in_email_password_title")}>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
                {t("auth_sign_in_label_email")}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ui-focus-ring w-full rounded-xl border border-zinc-300/80 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                required
                aria-required="true"
                aria-invalid={!!status || undefined}
                aria-describedby={status ? "sign-in-error" : undefined}
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-zinc-700">
                {t("auth_sign_in_label_password")}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ui-focus-ring w-full rounded-xl border border-zinc-300/80 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                required
                aria-required="true"
                aria-invalid={!!status || undefined}
                aria-describedby={status ? "sign-in-error" : undefined}
              />
            </div>
            {status && <p id="sign-in-error" role="alert" className="text-sm text-red-600">{status}</p>}
            <button
              type="submit"
              disabled={isSubmittingPassword || !hasSupabaseConfig}
              className="ui-soft-button ui-focus-ring w-full min-h-11 rounded-full border-transparent bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-95 disabled:opacity-60"
            >
              {isSubmittingPassword ? t("auth_sign_in_button_signing_in") : t("auth_sign_in_button_continue_email")}
            </button>
            {!hasSupabaseConfig && (
              <p className="text-xs text-amber-700">{t("auth_sign_in_missing_supabase")}</p>
            )}
          </form>
        )}

        {/* ── Tab: Magic Link ── */}
        {activeTab === "magic" && (
          <form onSubmit={onEmailOtpSubmit} className="space-y-4" aria-label={t("auth_sign_in_magic_link_title")}>
            <div>
              <label htmlFor="email-otp" className="mb-1 block text-sm font-medium text-zinc-700">
                {t("auth_sign_in_label_email")}
              </label>
              <input
                id="email-otp"
                type="email"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                className="ui-focus-ring w-full rounded-xl border border-zinc-300/80 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                required
              />
            </div>
            {otpStatus && (
              <p role="status" className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                {otpStatus}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmittingEmailOtp || !hasSupabaseConfig}
              className="ui-soft-button ui-focus-ring w-full min-h-11 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold hover:bg-zinc-100 disabled:opacity-60"
            >
              {isSubmittingEmailOtp ? t("auth_sign_in_magic_link_sending") : t("auth_sign_in_magic_link_send")}
            </button>
          </form>
        )}

        {/* ── Tab: Phone OTP ── */}
        {activeTab === "phone" && (
          <div className="space-y-4" aria-label={t("auth_sign_in_phone_title")}>
            <form onSubmit={onSendPhoneOtp} className="space-y-4">
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-700">
                  {t("auth_sign_in_label_phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300/80 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                  placeholder="+15551234567"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSendingPhoneOtp || !hasSupabaseConfig}
                className="ui-soft-button ui-focus-ring w-full min-h-11 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold hover:bg-zinc-100 disabled:opacity-60"
              >
                {isSendingPhoneOtp ? t("auth_sign_in_phone_sending_code") : t("auth_sign_in_phone_send_code")}
              </button>
            </form>

            {phoneOtpSent && (
              <form onSubmit={onVerifyPhoneOtp} className="space-y-4 border-t border-zinc-200/60 pt-4">
                <div>
                  <label htmlFor="phone-token" className="mb-1 block text-sm font-medium text-zinc-700">
                    {t("auth_sign_in_label_verification_code")}
                  </label>
                  <input
                    id="phone-token"
                    type="text"
                    value={phoneToken}
                    onChange={(e) => setPhoneToken(e.target.value)}
                    className="ui-focus-ring w-full rounded-xl border border-zinc-300/80 bg-white px-3.5 py-2.5 text-sm shadow-sm"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isVerifyingPhoneOtp || !hasSupabaseConfig}
                  className="ui-soft-button ui-focus-ring w-full min-h-11 rounded-full border-transparent bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-95 disabled:opacity-60"
                >
                  {isVerifyingPhoneOtp ? t("auth_sign_in_phone_verifying") : t("auth_sign_in_phone_verify")}
                </button>
              </form>
            )}
            {phoneStatus && (
              <p role="status" className="rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                {phoneStatus}
              </p>
            )}
          </div>
        )}

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          {t("auth_sign_in_footer_no_account")}{" "}
          <Link
            href={`/auth/sign-up?next=${encodeURIComponent(nextPath)}`}
            className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            {t("auth_sign_in_footer_create_one")}
          </Link>
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-zinc-200/60 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Child lost access?</p>
          <Link
            href="/auth/device"
            className="flex items-center gap-2 rounded-xl bg-indigo-50 px-5 py-2.5 text-sm font-bold text-indigo-700 hover:bg-indigo-100 transition-colors"
          >
            <span className="text-lg">📱</span> Ask an Adult to Log In
          </Link>
        </div>

        {/* Trust pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
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
      </div>
    </main>
  );
}

export default function SignInPage() {
  const { t } = useI18n();
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-md px-6 py-12">
          <h1 className="text-2xl font-semibold">{t("auth_sign_in_title")}</h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-foreground/70">{t("auth_sign_in_loading_subtitle")}</p>
        </main>
      }
    >
      <SignInPageContent />
    </Suspense>
  );
}

