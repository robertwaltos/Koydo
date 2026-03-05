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
      router.push(nextPath);
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
      router.push(nextPath);
    } catch { setPhoneStatus(t("auth_sign_in_phone_unable_verify")); }
    finally { setIsVerifyingPhoneOtp(false); }
  };

  const tabs: { id: SignInTab; label: string }[] = [
    { id: "password", label: t("auth_sign_in_email_password_title") },
    { id: "magic",    label: t("auth_sign_in_magic_link_title") },
    { id: "phone",    label: t("auth_sign_in_phone_title") },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={ASSETS.bgAuth}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" />
      </div>

      {/* Floating orbs for depth */}
      <span className="ui-hero-orb-1 pointer-events-none fixed left-1/4 top-1/4 h-64 w-64 rounded-full opacity-20" aria-hidden="true" />
      <span className="ui-hero-orb-3 pointer-events-none fixed bottom-1/4 right-1/4 h-48 w-48 rounded-full opacity-20" aria-hidden="true" />

      {/* Glass card */}
      <div className="ui-auth-card ui-page-enter w-full max-w-md">
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
              />
            </div>
            {status && <p role="status" className="text-sm text-red-600">{status}</p>}
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
          <p className="mt-3 text-sm text-zinc-600">{t("auth_sign_in_loading_subtitle")}</p>
        </main>
      }
    >
      <SignInPageContent />
    </Suspense>
  );
}

function getCallbackErrorMessage(
  errorCode: string | null,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  if (!errorCode) {
    return null;
  }

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

function SignInPageContent() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneToken, setPhoneToken] = useState("");
  const [status, setStatus] = useState<string>("");
  const [otpStatus, setOtpStatus] = useState<string>("");
  const [phoneStatus, setPhoneStatus] = useState<string>("");
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);
  const [isSubmittingEmailOtp, setIsSubmittingEmailOtp] = useState(false);
  const [isSendingPhoneOtp, setIsSendingPhoneOtp] = useState(false);
  const [isVerifyingPhoneOtp, setIsVerifyingPhoneOtp] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackErrorMessage = getCallbackErrorMessage(searchParams.get("error"), t);
  const isSessionExpired = searchParams.get("expired") === "true" || searchParams.get("message") === "session-expired";
  const nextPath = normalizeNextPath(searchParams.get("next"));
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const onPasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (!hasSupabaseConfig) {
      setStatus(t("auth_sign_in_status_unavailable"));
      return;
    }
    setIsSubmittingPassword(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setStatus(error.message);
        return;
      }

      setStatus(t("auth_sign_in_status_success"));
      router.push(nextPath);
    } catch {
      setStatus(t("auth_sign_in_status_unable"));
    } finally {
      setIsSubmittingPassword(false);
    }
  };

  const onEmailOtpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOtpStatus("");
    if (!hasSupabaseConfig) {
      setOtpStatus(t("auth_sign_in_magic_unavailable"));
      return;
    }
    setIsSubmittingEmailOtp(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const callbackUrl = new URL("/auth/callback", location.origin);
      callbackUrl.searchParams.set("next", nextPath);
      const { error } = await supabase.auth.signInWithOtp({
        email: emailOtp,
        options: {
          emailRedirectTo: callbackUrl.toString(),
        },
      });

      if (error) {
        setOtpStatus(error.message);
        return;
      }

      setOtpStatus(t("auth_sign_in_magic_sent"));
    } catch {
      setOtpStatus(t("auth_sign_in_magic_unable"));
    } finally {
      setIsSubmittingEmailOtp(false);
    }
  };

  const onSendPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) {
      setPhoneStatus(t("auth_sign_in_phone_unavailable"));
      return;
    }
    setIsSendingPhoneOtp(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOtp({ phone });

      if (error) {
        setPhoneStatus(error.message);
        return;
      }

      setPhoneOtpSent(true);
      setPhoneStatus(t("auth_sign_in_phone_sent"));
    } catch {
      setPhoneStatus(t("auth_sign_in_phone_unable_send"));
    } finally {
      setIsSendingPhoneOtp(false);
    }
  };

  const onVerifyPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) {
      setPhoneStatus(t("auth_sign_in_phone_verify_unavailable"));
      return;
    }
    setIsVerifyingPhoneOtp(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: phoneToken,
        type: "sms",
      });

      if (error) {
        setPhoneStatus(error.message);
        return;
      }

      setPhoneStatus(t("auth_sign_in_phone_verified_redirect"));
      router.push(nextPath);
    } catch {
      setPhoneStatus(t("auth_sign_in_phone_unable_verify"));
    } finally {
      setIsVerifyingPhoneOtp(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-14">
      {/* Page background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={ASSETS.bgAuth}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <section className="relative isolate overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Hero image with overlaid title */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/40">
            <Image
              src={ASSETS.heroSignIn}
              alt="Students exploring the world of learning on Koydo"
              width={800}
              height={480}
              className="w-full object-cover"
              priority
            />
            {/* Soft vignette to feather edges */}
            <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 40px 12px rgba(255,255,255,0.45)' }} aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-14">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                {t("auth_sign_in_hero_eyebrow")}
              </p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {t("auth_sign_in_hero_title")}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 w-full max-w-6xl space-y-6 px-4 sm:px-6">
        <SoftCard as="section" className="border-zinc-200/60 p-6 backdrop-blur-sm" style={{ background: 'rgba(237,241,248,0.95)' }}>
          <h2 className="ui-type-heading-xl text-zinc-900">{t("auth_sign_in_title")}</h2>
          <OAuthButtons layout="grid-2" className="mt-5" nextPath={nextPath} />
          {!hasSupabaseConfig ? (
            <p role="status" className="mt-4 text-xs text-amber-700">
              {t("auth_sign_in_missing_supabase")}
            </p>
          ) : null}
        </SoftCard>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <SoftCard as="section" className="border-zinc-200/60 p-5" style={{ background: 'rgba(237,241,248,0.95)' }}>
            <h3 className="ui-type-heading-md text-zinc-900">{t("auth_sign_in_email_password_title")}</h3>
            <form onSubmit={onPasswordSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  {t("auth_sign_in_label_email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium">
                  {t("auth_sign_in_label_password")}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingPassword || !hasSupabaseConfig}
                className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
              >
                {isSubmittingPassword ? t("auth_sign_in_button_signing_in") : t("auth_sign_in_button_continue_email")}
              </button>

              {status ? <p role="status" className="text-sm text-red-600">{status}</p> : null}
            </form>
          </SoftCard>

          <SoftCard as="section" className="border-zinc-200/60 p-5" style={{ background: 'rgba(237,241,248,0.95)' }}>
            <h3 className="ui-type-heading-md text-zinc-900">{t("auth_sign_in_magic_link_title")}</h3>
            <form onSubmit={onEmailOtpSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="email-otp" className="mb-1 block text-sm font-medium">
                  {t("auth_sign_in_label_email")}
                </label>
                <input
                  id="email-otp"
                  type="email"
                  value={emailOtp}
                  onChange={(event) => setEmailOtp(event.target.value)}
                  className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmittingEmailOtp || !hasSupabaseConfig}
                className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold disabled:opacity-70"
              >
                {isSubmittingEmailOtp ? t("auth_sign_in_magic_link_sending") : t("auth_sign_in_magic_link_send")}
              </button>
              {otpStatus ? <p role="status" className="text-sm text-zinc-700">{otpStatus}</p> : null}
            </form>
          </SoftCard>

          <SoftCard as="section" className="border-zinc-200/60 p-5" style={{ background: 'rgba(237,241,248,0.95)' }}>
            <h3 className="ui-type-heading-md text-zinc-900">{t("auth_sign_in_phone_title")}</h3>
            <form onSubmit={onSendPhoneOtp} className="mt-4 space-y-4">
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  {t("auth_sign_in_label_phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
                  placeholder="+15551234567"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSendingPhoneOtp || !hasSupabaseConfig}
                className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold disabled:opacity-70"
              >
                {isSendingPhoneOtp ? t("auth_sign_in_phone_sending_code") : t("auth_sign_in_phone_send_code")}
              </button>
            </form>

            {phoneOtpSent ? (
              <form onSubmit={onVerifyPhoneOtp} className="mt-4 space-y-4 border-t border-zinc-200 pt-4">
                <div>
                  <label htmlFor="phone-token" className="mb-1 block text-sm font-medium">
                    {t("auth_sign_in_label_verification_code")}
                  </label>
                  <input
                    id="phone-token"
                    type="text"
                    value={phoneToken}
                    onChange={(event) => setPhoneToken(event.target.value)}
                    className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isVerifyingPhoneOtp || !hasSupabaseConfig}
                  className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
                >
                  {isVerifyingPhoneOtp ? t("auth_sign_in_phone_verifying") : t("auth_sign_in_phone_verify")}
                </button>
              </form>
            ) : null}

            {phoneStatus ? <p role="status" className="mt-4 text-sm text-zinc-700">{phoneStatus}</p> : null}
          </SoftCard>
        </div>

        {callbackErrorMessage ? (
          <SoftCard as="section" className="border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {callbackErrorMessage}
          </SoftCard>
        ) : null}
        {isSessionExpired ? (
          <SoftCard as="section" className="border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            {t("auth_sign_in_session_expired")}
          </SoftCard>
        ) : null}

        <p className="pb-2 text-center text-sm text-zinc-600">
          {t("auth_sign_in_footer_no_account")}{" "}
          <Link
            href={`/auth/sign-up?next=${encodeURIComponent(nextPath)}`}
            className="font-semibold underline decoration-2 underline-offset-2"
          >
            {t("auth_sign_in_footer_create_one")}
          </Link>
        </p>

        {/* Trust badges — subtle social proof */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pb-4">
          {[
            { icon: "🛡️", text: "COPPA\u00A0Compliant" },
            { icon: "🚫", text: "Zero\u00A0Ads" },
            { icon: "🔒", text: "No\u00A0Tracking" },
            { icon: "✨", text: "Free\u00A0to\u00A0Start" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>
      </section>
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

