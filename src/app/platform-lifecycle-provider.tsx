"use client";

import { useEffect } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { initAppLifecycle } from "@/lib/platform/lifecycle";
import { initNetworkMonitor } from "@/lib/platform/network-monitor";

function redirectToExpiredSignIn() {
  if (typeof window === "undefined") return;
  if (window.location.pathname.startsWith("/auth/")) return;

  const signInUrl = new URL("/auth/sign-in", window.location.origin);
  signInUrl.searchParams.set("expired", "true");
  signInUrl.searchParams.set(
    "next",
    `${window.location.pathname}${window.location.search}`,
  );

  window.location.assign(`${signInUrl.pathname}${signInUrl.search}`);
}

export default function PlatformLifecycleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const lifecycleCleanup = initAppLifecycle({
      supabase,
      onResume: (user) => {
        if (!user) {
          redirectToExpiredSignIn();
        }
      },
    });

    let networkCleanup: (() => void) | null = null;
    initNetworkMonitor().then((cleanup) => {
      networkCleanup = cleanup;
    });

    return () => {
      lifecycleCleanup();
      if (networkCleanup) {
        networkCleanup();
      }
    };
  }, []);

  return <>{children}</>;
}
