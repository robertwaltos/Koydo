"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function useAuthGuard() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        const currentPath = `${window.location.pathname}${window.location.search}`;
        const signInUrl = new URL("/auth/sign-in", window.location.origin);
        signInUrl.searchParams.set("expired", "true");
        signInUrl.searchParams.set("next", currentPath);
        router.push(`${signInUrl.pathname}${signInUrl.search}`);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, router]);
}
