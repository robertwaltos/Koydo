import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { publicEnv } from "@/lib/config/env";
import { getOnboardingRedirect } from "@/lib/compliance/onboarding";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

const ACTIVE_PROFILE_COOKIE_KEY = "active_profile_id";
const PROFILE_GATE_PATH = "/who-is-learning";
const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
const CSRF_EXEMPT_PREFIXES = ["/api/stripe/webhook"];
const SUPABASE_SESSION_COOKIE_FRAGMENT = "-auth-token";

type RateLimitPolicy = {
  scope: string;
  max: number;
  windowMs: number;
};

function copyCookies(from: NextResponse, to: NextResponse) {
  from.cookies.getAll().forEach((cookie) => {
    const { name, value, ...options } = cookie;
    to.cookies.set(name, value, options);
  });
}

function isValidProfileId(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function isCsrfExemptPath(pathname: string) {
  return CSRF_EXEMPT_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function isCrossSiteMutationRequest(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!pathname.startsWith("/api/")) return false;
  if (!MUTATING_METHODS.has(request.method.toUpperCase())) return false;
  if (isCsrfExemptPath(pathname)) return false;

  const secFetchSite = request.headers.get("sec-fetch-site")?.toLowerCase();
  if (secFetchSite && !["same-origin", "same-site", "none"].includes(secFetchSite)) {
    return true;
  }

  const originHeader = request.headers.get("origin");
  if (!originHeader) return false;

  try {
    const originUrl = new URL(originHeader);
    return originUrl.host !== request.nextUrl.host;
  } catch {
    return true;
  }
}

function getApiMutationRateLimitPolicy(pathname: string): RateLimitPolicy {
  if (pathname === "/api/stripe/webhook" || pathname === "/api/revenuecat/webhook") {
    return { scope: "api:billing:webhook", max: 300, windowMs: 60_000 };
  }

  if (
    pathname.startsWith("/api/stripe/")
    || pathname.startsWith("/api/receipt/verify/")
    || pathname.startsWith("/api/language/exam-unlocks/")
  ) {
    return { scope: "api:billing:mutations", max: 60, windowMs: 60_000 };
  }

  if (pathname.startsWith("/api/auth/")) {
    return { scope: "api:auth:mutations", max: 60, windowMs: 60_000 };
  }

  if (
    pathname === "/api/ai/tutor"
    || pathname === "/api/media/generate"
    || pathname === "/api/images/generate"
  ) {
    return { scope: "api:expensive:mutations", max: 40, windowMs: 60_000 };
  }

  return { scope: "api:mutations", max: 120, windowMs: 60_000 };
}

function buildProfileGateRedirect(request: NextRequest, baseResponse: NextResponse, clearProfileCookie = false) {
  const nextPathWithQuery = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const profileGateUrl = new URL(PROFILE_GATE_PATH, request.url);
  profileGateUrl.searchParams.set("next", nextPathWithQuery);

  const redirect = NextResponse.redirect(profileGateUrl);
  copyCookies(baseResponse, redirect);

  if (clearProfileCookie) {
    redirect.cookies.set(ACTIVE_PROFILE_COOKIE_KEY, "", {
      maxAge: 0,
      path: "/",
      sameSite: "lax",
    });
  }

  return redirect;
}

function hadSupabaseSessionCookie(request: NextRequest) {
  return request.cookies
    .getAll()
    .some(
      ({ name }) =>
        name.startsWith("sb-") && name.includes(SUPABASE_SESSION_COOKIE_FRAGMENT),
    );
}

function buildSignInRedirect(
  request: NextRequest,
  baseResponse: NextResponse,
  includeExpiredParam = false,
) {
  const nextPathWithQuery = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const signInUrl = new URL("/auth/sign-in", request.url);
  signInUrl.searchParams.set("next", nextPathWithQuery);
  if (includeExpiredParam) {
    signInUrl.searchParams.set("expired", "true");
  }

  const redirect = NextResponse.redirect(signInUrl);
  copyCookies(baseResponse, redirect);
  return redirect;
}

function buildComplianceRedirect(
  request: NextRequest,
  baseResponse: NextResponse,
  targetPath: string,
) {
  const nextPathWithQuery = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const redirectUrl = new URL(targetPath, request.url);
  redirectUrl.searchParams.set("next", nextPathWithQuery);

  const redirect = NextResponse.redirect(redirectUrl);
  copyCookies(baseResponse, redirect);
  return redirect;
}

export async function proxy(request: NextRequest) {
  if (isCrossSiteMutationRequest(request)) {
    return NextResponse.json({ error: "CSRF validation failed." }, { status: 403 });
  }

  const pathname = request.nextUrl.pathname;
  const method = request.method.toUpperCase();
  if (pathname.startsWith("/api/") && MUTATING_METHODS.has(method)) {
    const policy = getApiMutationRateLimitPolicy(pathname);
    const rateLimit = enforceIpRateLimit(request, policy.scope, {
      max: policy.max,
      windowMs: policy.windowMs,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again shortly.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        },
      );
    }
  }

  // 1. Refresh the auth session.
  const response = await updateSupabaseSession(request);

  if (!publicEnv.NEXT_PUBLIC_SUPABASE_URL || !publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return response;
  }

  // 2. Validate user presence for protected zones.
  const supabase = createServerClient(
    publicEnv.NEXT_PUBLIC_SUPABASE_URL,
    publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll() {
          // Read-only during guard checks.
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtectedPath = pathname.startsWith("/student")
    || pathname.startsWith("/parent")
    || pathname.startsWith("/select-profile")
    || pathname.startsWith("/who-is-learning")
    || pathname.startsWith("/dashboard")
    || pathname.startsWith("/account");

  if (isProtectedPath && !user) {
    return buildSignInRedirect(request, response, hadSupabaseSessionCookie(request));
  }

  const requiresComplianceGate = pathname.startsWith("/student")
    || pathname.startsWith("/dashboard")
    || pathname.startsWith("/select-profile")
    || pathname.startsWith("/who-is-learning");

  if (user && requiresComplianceGate) {
    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("birth_date, parental_consent_required, parental_consent_status")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!profileError) {
      const onboardingRedirect = getOnboardingRedirect(profile ?? null);
      if (onboardingRedirect) {
        return buildComplianceRedirect(request, response, onboardingRedirect);
      }
    }
  }

  // 3. Student zone requires an active learner profile context.
  if (user && pathname.startsWith("/student") && !pathname.includes("/onboarding")) {
    const activeProfileCookie = request.cookies.get(ACTIVE_PROFILE_COOKIE_KEY);
    const activeProfileId = activeProfileCookie?.value ?? null;

    if (!activeProfileId) {
      return buildProfileGateRedirect(request, response);
    }

    if (!isValidProfileId(activeProfileId)) {
      return buildProfileGateRedirect(request, response, true);
    }

    const { data: profile, error: profileError } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", activeProfileId)
      .eq("account_id", user.id)
      .maybeSingle();

    if (profileError || !profile) {
      return buildProfileGateRedirect(request, response, true);
    }
  }

  // 4. Keep auth pages clean for signed-in users.
  if (user && (pathname === "/auth/sign-in" || pathname === "/auth/sign-up")) {
    const redirect = NextResponse.redirect(new URL(PROFILE_GATE_PATH, request.url));
    copyCookies(response, redirect);
    return redirect;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
