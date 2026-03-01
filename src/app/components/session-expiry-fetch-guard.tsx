"use client";

import { useEffect } from "react";

const AUTH_PATH_PREFIX = "/auth/";
const API_PATH_PREFIX = "/api/";
// Paths that legitimately return 401 for unauthenticated users and should not
// trigger the session-expiry redirect (they are handled gracefully by callers).
const EXCLUDED_API_PATHS = new Set([
  "/api/health",
  "/api/user/preferences",
  "/api/telemetry/events",
]);

function resolveRequestUrl(input: RequestInfo | URL): URL | null {
  if (typeof window === "undefined") return null;

  if (typeof input === "string") {
    return new URL(input, window.location.origin);
  }

  if (input instanceof URL) {
    return input;
  }

  if (input instanceof Request) {
    return new URL(input.url, window.location.origin);
  }

  return null;
}

export default function SessionExpiryFetchGuard() {
  useEffect(() => {
    const originalFetch = window.fetch.bind(window);
    let isRedirecting = false;

    window.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const response = await originalFetch(input, init);

      if (isRedirecting || window.location.pathname.startsWith(AUTH_PATH_PREFIX)) {
        return response;
      }

      const requestUrl = resolveRequestUrl(input);
      if (!requestUrl) {
        return response;
      }

      const isSameOriginApiRequest =
        requestUrl.origin === window.location.origin
        && requestUrl.pathname.startsWith(API_PATH_PREFIX)
        && !EXCLUDED_API_PATHS.has(requestUrl.pathname);

      if (response.status === 401 && isSameOriginApiRequest) {
        isRedirecting = true;
        const signInUrl = new URL("/auth/sign-in", window.location.origin);
        signInUrl.searchParams.set("expired", "true");
        signInUrl.searchParams.set(
          "next",
          `${window.location.pathname}${window.location.search}`,
        );
        window.location.assign(signInUrl.toString());
      }

      return response;
    }) as typeof window.fetch;

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  return null;
}
