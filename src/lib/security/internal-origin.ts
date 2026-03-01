import type { NextRequest } from "next/server";

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

function isLocalOrigin(origin: string | null) {
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname.toLowerCase();
    return host === "localhost" || host === "127.0.0.1";
  } catch {
    return false;
  }
}

export function resolveTrustedInternalOrigin(request: NextRequest) {
  const configured = normalizeOrigin(
    process.env.INTERNAL_API_ORIGIN
    ?? process.env.NEXT_PUBLIC_APP_URL
    ?? "http://localhost:3000",
  );
  const requestOrigin = normalizeOrigin(request.nextUrl.origin);

  // In production, never trust request Host-derived origin for server-side calls.
  if (process.env.NODE_ENV === "production") {
    return configured ?? "http://localhost:3000";
  }

  // In local development, allow dynamic localhost ports.
  if (isLocalOrigin(configured) && isLocalOrigin(requestOrigin)) {
    return requestOrigin ?? configured ?? "http://localhost:3000";
  }

  return configured ?? requestOrigin ?? "http://localhost:3000";
}

export function buildTrustedInternalApiUrl(request: NextRequest, path: string) {
  const origin = resolveTrustedInternalOrigin(request);
  return new URL(path, origin);
}
