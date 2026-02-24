"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { publicEnv } from "@/lib/config/env";
import { Provider } from "@supabase/supabase-js";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.45a5.51 5.51 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.57-5.15 3.57-8.86z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.86-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.12A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.37-2.28V6.6H1.29A11.99 11.99 0 0 0 0 12c0 1.93.46 3.76 1.29 5.4l3.98-3.12z"
      />
      <path
        fill="#EA4335"
        d="M12 4.76c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.95 1.06 15.24 0 12 0 7.31 0 3.27 2.69 1.29 6.6l3.98 3.12c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.023 4.388 11.015 10.125 11.927V15.563H7.078V12.073h3.047V9.413c0-3.022 1.792-4.689 4.533-4.689 1.312 0 2.686.235 2.686.235v2.969h-1.514c-1.491 0-1.956.931-1.956 1.887v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.088 24 18.096 24 12.073z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="currentColor"
        d="M16.365 1.43c0 1.14-.433 2.191-1.153 2.954-.866.914-2.278 1.62-3.508 1.52-.156-1.087.42-2.25 1.132-2.995.78-.82 2.133-1.427 3.53-1.48zm3.569 15.94c-.546 1.213-.808 1.755-1.51 2.825-.978 1.49-2.358 3.35-4.068 3.362-1.52.014-1.912-.99-3.973-.978-2.06.01-2.49.996-4.01.982-1.71-.013-3.018-1.694-3.997-3.182-2.736-4.17-3.024-9.06-1.335-11.657 1.2-1.845 3.095-2.927 4.873-2.927 1.81 0 2.95 1 4.447 1 1.45 0 2.335-1.003 4.432-1.003 1.585 0 3.264.863 4.462 2.35-3.92 2.15-3.285 7.77.679 9.228z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.034 9.179L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.592-9.82L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.291 19.496h2.039L6.486 3.24H4.298z"
      />
    </svg>
  );
}

export default function OAuthButtons({ intent = "in" }: { intent?: "in" | "up" }) {
  const actionText = intent === "up" ? "Sign Up" : "Sign In";
  const hasSupabaseConfig =
    Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const handleOAuthSignIn = async (provider: Provider) => {
    if (!hasSupabaseConfig) {
      return;
    }

    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="mt-6 space-y-3">
      <button
        onClick={() => handleOAuthSignIn("google")}
        disabled={!hasSupabaseConfig}
        title={!hasSupabaseConfig ? "OAuth unavailable until Supabase is configured." : undefined}
        className="ui-soft-button ui-focus-ring flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium hover:bg-surface"
      >
        <GoogleIcon />
        {actionText} with Google
      </button>
      <button
        onClick={() => handleOAuthSignIn("facebook")}
        disabled={!hasSupabaseConfig}
        title={!hasSupabaseConfig ? "OAuth unavailable until Supabase is configured." : undefined}
        className="ui-soft-button ui-focus-ring flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium hover:bg-surface"
      >
        <FacebookIcon />
        {actionText} with Facebook
      </button>
      <button
        onClick={() => handleOAuthSignIn("apple")}
        disabled={!hasSupabaseConfig}
        title={!hasSupabaseConfig ? "OAuth unavailable until Supabase is configured." : undefined}
        className="ui-soft-button ui-focus-ring flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium hover:bg-surface"
      >
        <AppleIcon />
        {actionText} with Apple
      </button>
      <button
        onClick={() => handleOAuthSignIn("twitter")}
        disabled={!hasSupabaseConfig}
        title={!hasSupabaseConfig ? "OAuth unavailable until Supabase is configured." : undefined}
        className="ui-soft-button ui-focus-ring flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium hover:bg-surface"
      >
        {/* Supabase uses the "twitter" provider ID for X */}
        <XIcon />
        {actionText} with X
      </button>
      {!hasSupabaseConfig ? (
        <p className="text-xs text-zinc-500">
          OAuth providers are unavailable until Supabase public keys are configured.
        </p>
      ) : null}
    </div>
  );
}
