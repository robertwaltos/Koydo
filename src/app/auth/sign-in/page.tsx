"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { publicEnv } from "@/lib/config/env";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import OAuthButtons from "./oauth-buttons";
import SoftCard from "@/app/components/ui/soft-card";

function SignInPageContent() {
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
  const errorFromCallback = searchParams.get("error");
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const onPasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (!hasSupabaseConfig) {
      setStatus("Sign-in is unavailable until Supabase public environment variables are configured.");
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

      setStatus("Signed in successfully.");
      router.push("/dashboard");
      router.refresh();
    } catch {
      setStatus(
        "Unable to sign in. Check environment configuration and try again."
      );
    } finally {
      setIsSubmittingPassword(false);
    }
  };

  const onEmailOtpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOtpStatus("");
    if (!hasSupabaseConfig) {
      setOtpStatus("Email OTP is unavailable until Supabase public environment variables are configured.");
      return;
    }
    setIsSubmittingEmailOtp(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOtp({
        email: emailOtp,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setOtpStatus(error.message);
        return;
      }

      setOtpStatus("Magic link sent. Check your email to continue.");
    } catch {
      setOtpStatus("Unable to send magic link. Check configuration and try again.");
    } finally {
      setIsSubmittingEmailOtp(false);
    }
  };

  const onSendPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) {
      setPhoneStatus("Phone OTP is unavailable until Supabase public environment variables are configured.");
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
      setPhoneStatus("Verification code sent to your phone.");
    } catch {
      setPhoneStatus("Unable to send SMS code. Check configuration and try again.");
    } finally {
      setIsSendingPhoneOtp(false);
    }
  };

  const onVerifyPhoneOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPhoneStatus("");
    if (!hasSupabaseConfig) {
      setPhoneStatus("Phone verification is unavailable until Supabase public environment variables are configured.");
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

      setPhoneStatus("Phone verified. Redirecting...");
      router.push("/dashboard");
      router.refresh();
    } catch {
      setPhoneStatus("Unable to verify SMS code. Try again.");
    } finally {
      setIsVerifyingPhoneOtp(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <SoftCard as="section" organicCorners className="bg-[var(--gradient-hero)] p-5">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <p className="mt-3 text-sm text-zinc-600">
          Use your EduForge account to continue.
        </p>
      </SoftCard>
      {!hasSupabaseConfig ? (
        <p role="status" className="mt-2 text-xs text-amber-700">
          Missing `NEXT_PUBLIC_SUPABASE_URL` and/or `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
        </p>
      ) : null}

      <SoftCard as="section" className="mt-6 p-4">
        <form onSubmit={onPasswordSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
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
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmittingPassword || !hasSupabaseConfig}
            className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
          >
            {isSubmittingPassword ? "Signing in..." : "Sign In with Email + Password"}
          </button>

          {status ? (
            <p role="status" className="text-sm text-red-600">{status}</p>
          ) : null}
        </form>
      </SoftCard>

      <SoftCard as="section" className="mt-6 space-y-4 p-4">
        <form onSubmit={onEmailOtpSubmit} className="space-y-4">
          <h2 className="text-sm font-semibold">Email Magic Link</h2>
          <div>
            <label htmlFor="email-otp" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email-otp"
              type="email"
              value={emailOtp}
              onChange={(event) => setEmailOtp(event.target.value)}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmittingEmailOtp || !hasSupabaseConfig}
            className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium disabled:opacity-70"
          >
            {isSubmittingEmailOtp ? "Sending link..." : "Send Magic Link"}
          </button>
          {otpStatus ? <p role="status" className="text-sm text-zinc-700">{otpStatus}</p> : null}
        </form>
      </SoftCard>

      <SoftCard as="section" className="mt-6 space-y-4 p-4">
        <h2 className="text-sm font-semibold">Phone Login (SMS)</h2>
        <form onSubmit={onSendPhoneOtp} className="space-y-3">
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
              placeholder="+15551234567"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSendingPhoneOtp || !hasSupabaseConfig}
            className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium disabled:opacity-70"
          >
            {isSendingPhoneOtp ? "Sending code..." : "Send SMS Code"}
          </button>
        </form>

        {phoneOtpSent ? (
          <form onSubmit={onVerifyPhoneOtp} className="space-y-3">
            <div>
              <label htmlFor="phone-token" className="mb-1 block text-sm font-medium">
                Verification Code
              </label>
              <input
                id="phone-token"
                type="text"
                value={phoneToken}
                onChange={(event) => setPhoneToken(event.target.value)}
                className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isVerifyingPhoneOtp || !hasSupabaseConfig}
              className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-full bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
            >
              {isVerifyingPhoneOtp ? "Verifying..." : "Verify SMS Code"}
            </button>
          </form>
        ) : null}

        {phoneStatus ? <p role="status" className="text-sm text-zinc-700">{phoneStatus}</p> : null}
      </SoftCard>

      <div className="relative mt-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-surface px-2 text-zinc-500">OR</span>
        </div>
      </div>

      <OAuthButtons />

      {errorFromCallback ? <p role="status" className="mt-4 text-sm text-red-600">{errorFromCallback}</p> : null}

      <p className="mt-8 text-center text-sm text-zinc-600">
        No account yet?{" "}
        <Link href="/auth/sign-up" className="font-semibold underline">
          Create one
        </Link>
      </p>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-md px-6 py-12">
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <p className="mt-3 text-sm text-zinc-600">
            Loading sign-in options...
          </p>
        </main>
      }
    >
      <SignInPageContent />
    </Suspense>
  );
}
