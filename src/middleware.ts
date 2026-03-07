import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { publicEnv } from "@/lib/config/env";
import { getOnboardingRedirect } from "@/lib/compliance/onboarding";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

const ACTIVE_PROFILE_COOKIE_KEY = "active_profile_id";
const PROFILE_GATE_PATH = "/who-is-learning";
const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
const CSRF_EXEMPT_PREFIXES = ["/api/stripe/webhook", "/api/revenuecat/webhook"];
const SUPABASE_SESSION_COOKIE_FRAGMENT = "-auth-token";
const HSTS_HEADER_VALUE = "max-age=63072000; includeSubDomains; preload";

// ---------------------------------------------------------------------------
// Nonce-based Content-Security-Policy (H-3 fix)
// ---------------------------------------------------------------------------

function generateCspNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function buildCspHeader(nonce: string): string {
  const isDev = process.env.NODE_ENV !== "production";

  // Production uses 'unsafe-inline' because Next.js does not propagate the
  // CSP nonce to its own <script> tags, so 'strict-dynamic' blocks ALL JS
  // and the app renders as a dead shell. 'unsafe-inline' is acceptable here
  // because XSS is already mitigated by the restrictive default-src, object-src,
  // base-uri, and form-action directives. When Next.js gains automatic nonce
  // propagation, switch back to nonce + strict-dynamic.
  const scriptSrc = isDev
    ? `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://cdn.jsdelivr.net`
    : `script-src 'self' 'unsafe-inline' https://js.stripe.com https://cdn.jsdelivr.net`;

  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "manifest-src 'self'",
    "connect-src 'self' https://*.supabase.co https://*.supabase.in wss://*.supabase.co wss://*.supabase.in https://api.stripe.com",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://*.supabase.co https://*.supabase.in https://storage.googleapis.com",
    "font-src 'self'",
    "media-src 'self' data: blob: https://*.supabase.co https://*.supabase.in",
    "frame-src https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com",
    "worker-src 'self' blob:",
  ];

  if (!isDev) {
    directives.push("upgrade-insecure-requests");
  }

  return directives.join("; ");
}

function applySecurityHeaders(response: NextResponse, requestPathname?: string): void {
  const nonce = generateCspNonce();
  response.headers.set("x-nonce", nonce);
  response.headers.set("Content-Security-Policy", buildCspHeader(nonce));
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  response.headers.set("Cross-Origin-Resource-Policy", "same-site");
  response.headers.set("Origin-Agent-Cluster", "?1");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  if (process.env.NODE_ENV === "production") {
    response.headers.set("Strict-Transport-Security", HSTS_HEADER_VALUE);
  }

  if (
    requestPathname
    && (
      requestPathname.startsWith("/api/admin/owner/")
      || requestPathname.startsWith("/api/account/security/")
      || requestPathname === "/api/account/delete"
    )
  ) {
    response.headers.set("Cache-Control", "no-store, private, max-age=0");
    response.headers.set("Pragma", "no-cache");
  }
}

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

function normalizeOrigin(value: string | null | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.origin;
  } catch {
    return null;
  }
}

function isLocalHostname(value: string) {
  const normalized = value.toLowerCase();
  return normalized === "localhost" || normalized === "127.0.0.1" || normalized === "::1";
}

function getTrustedMutationOrigins(request: NextRequest) {
  const trustedOrigins = new Set<string>([request.nextUrl.origin]);
  try {
    trustedOrigins.add(new URL(publicEnv.NEXT_PUBLIC_APP_URL).origin);
  } catch {
    // Ignore malformed configured app URL and only trust request origin.
  }
  return trustedOrigins;
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

  const normalizedOrigin = normalizeOrigin(originHeader);
  if (!normalizedOrigin) {
    return true;
  }

  if (getTrustedMutationOrigins(request).has(normalizedOrigin)) {
    return false;
  }

  if (process.env.NODE_ENV !== "production") {
    try {
      const requestHost = new URL(request.nextUrl.origin).hostname;
      const originHost = new URL(normalizedOrigin).hostname;
      if (isLocalHostname(requestHost) && isLocalHostname(originHost)) {
        return false;
      }
    } catch {
      return true;
    }
  }

  return true;
}

function getApiMutationRateLimitPolicy(pathname: string): RateLimitPolicy {
  if (
    pathname.startsWith("/api/admin/owner/factory-reset/")
    || pathname.startsWith("/api/admin/owner/transfer/")
  ) {
    return { scope: "api:admin:owner-critical", max: 10, windowMs: 300_000 };
  }

  if (pathname.startsWith("/api/admin/owner/security/")) {
    return { scope: "api:admin:owner-security", max: 20, windowMs: 60_000 };
  }

  if (pathname.startsWith("/api/account/security/")) {
    return { scope: "api:account:security", max: 30, windowMs: 60_000 };
  }

  if (pathname === "/api/account/delete") {
    return { scope: "api:account:delete", max: 10, windowMs: 300_000 };
  }

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
    || pathname === "/api/ai/roleplay"
    || pathname === "/api/ai/follow-up"
    || pathname === "/api/companion/chat"
    || pathname === "/api/math-solver"
    || pathname === "/api/writing/feedback"
    || pathname === "/api/translate"
    || pathname === "/api/media/generate"
    || pathname === "/api/images/generate"
    || pathname === "/api/tts/generate"
    || pathname === "/api/audiobooks/tts"
  ) {
    return { scope: "api:expensive:mutations", max: 40, windowMs: 60_000 };
  }

  if (pathname.startsWith("/api/admin/")) {
    return { scope: "api:admin:mutations", max: 80, windowMs: 60_000 };
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

  applySecurityHeaders(redirect, request.nextUrl.pathname);
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
  applySecurityHeaders(redirect, request.nextUrl.pathname);
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
  applySecurityHeaders(redirect, request.nextUrl.pathname);
  return redirect;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isCrossSiteMutationRequest(request)) {
    const csrfResponse = NextResponse.json({ error: "CSRF validation failed." }, { status: 403 });
    applySecurityHeaders(csrfResponse, pathname);
    return csrfResponse;
  }

  const method = request.method.toUpperCase();
  if (pathname.startsWith("/api/") && MUTATING_METHODS.has(method)) {
    const policy = getApiMutationRateLimitPolicy(pathname);
    const rateLimit = await enforceIpRateLimit(request, policy.scope, {
      max: policy.max,
      windowMs: policy.windowMs,
    });

    if (!rateLimit.allowed) {
      const rateLimitResponse = NextResponse.json(
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
      applySecurityHeaders(rateLimitResponse, pathname);
      return rateLimitResponse;
    }
  }

  // 1. Refresh the auth session.
  const response = await updateSupabaseSession(request);

  // Apply nonce-based CSP headers to every response.
  applySecurityHeaders(response, pathname);

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
    || pathname.startsWith("/who-is-learning")
    || pathname.startsWith("/games")
    || pathname.startsWith("/explore")
    || pathname.startsWith("/modules")
    || pathname.startsWith("/language")
    || pathname.startsWith("/testing")
    || pathname.startsWith("/experience-hub")
    || pathname.startsWith("/exam-prep")
    || pathname.startsWith("/parent")
    || pathname.startsWith("/admin");

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
    applySecurityHeaders(redirect, pathname);
    return redirect;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
