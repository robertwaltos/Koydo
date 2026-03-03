/**
 * Next.js Middleware — COPPA / Age-Gate / Consent Enforcement
 *
 * Runs on EVERY protected route to ensure:
 * 1. Authenticated users have completed age-gate
 * 2. Under-13 users have verified parental consent
 * 3. Users with denied consent are blocked
 *
 * This is a CRITICAL COPPA compliance control. Removing or weakening
 * this middleware without legal review is a violation risk.
 */

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/* ---------- Route classification ---------- */

/** Routes that must be accessible without any checks */
const PUBLIC_PATHS = new Set([
  "/",
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/callback",
  "/auth/age-gate",
  "/auth/parent-consent",
  "/auth/parent-consent/verify",
  "/legal/privacy",
  "/legal/terms",
  "/legal/refunds",
]);

/** Path prefixes that are always public */
const PUBLIC_PREFIXES = [
  "/api/",         // API routes have their own auth
  "/_next/",       // Next.js internals
  "/favicon",
  "/images/",
  "/manifest",
  "/robots.txt",
  "/sitemap",
];

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) return true;
  return PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/* ---------- Middleware ---------- */

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public routes
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Create supabase client for middleware
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        response = NextResponse.next({
          request: { headers: request.headers },
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  // Refresh session (required by Supabase SSR)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not authenticated — let the page handle its own redirect
  if (!user) {
    return response;
  }

  // Fetch compliance-critical profile fields
  const { data: profile } = await supabase
    .from("user_profiles")
    .select(
      "birth_date, parental_consent_required, parental_consent_status, is_parent",
    )
    .eq("user_id", user.id)
    .single();

  // No profile yet — send to age gate
  if (!profile || !profile.birth_date) {
    const ageGateUrl = new URL("/auth/age-gate", request.url);
    ageGateUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(ageGateUrl);
  }

  // Consent denied — block access entirely
  if (profile.parental_consent_status === "denied") {
    const deniedUrl = new URL("/auth/parent-consent", request.url);
    deniedUrl.searchParams.set("status", "denied");
    return NextResponse.redirect(deniedUrl);
  }

  // Under-13 without verified consent — redirect to parent consent
  if (
    profile.parental_consent_required &&
    profile.parental_consent_status !== "verified" &&
    profile.parental_consent_status !== "not_required"
  ) {
    const consentUrl = new URL("/auth/parent-consent", request.url);
    consentUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(consentUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder assets
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|manifest|robots.txt|sitemap).*)",
  ],
};
