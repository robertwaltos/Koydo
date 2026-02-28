import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { normalizeNextPath, sanitizeNextPath } from "@/lib/routing/next-path";

function buildSignInRedirect(requestUrl: URL, nextPath: string | null, errorCode: string) {
  const errorUrl = new URL("/auth/sign-in", requestUrl.origin);
  errorUrl.searchParams.set("error", errorCode);
  if (nextPath) {
    errorUrl.searchParams.set("next", nextPath);
  }
  return NextResponse.redirect(errorUrl);
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const safeNextPath = sanitizeNextPath(requestUrl.searchParams.get("next"));
  const nextPath = normalizeNextPath(requestUrl.searchParams.get("next"));
  const oauthError = requestUrl.searchParams.get("error");

  if (oauthError) {
    const accessDeniedSignals = new Set(["access_denied", "oauth_access_denied", "user_denied"]);
    const errorCode = accessDeniedSignals.has(oauthError.toLowerCase())
      ? "oauth_access_denied"
      : "oauth_callback_failed";
    return buildSignInRedirect(requestUrl, safeNextPath, errorCode);
  }

  if (!code) {
    return buildSignInRedirect(requestUrl, safeNextPath, "oauth_missing_code");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return buildSignInRedirect(requestUrl, safeNextPath, "oauth_exchange_failed");
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl.origin));
}
