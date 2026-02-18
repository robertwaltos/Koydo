import { createBrowserClient } from "@supabase/ssr";
import { publicEnv } from "@/lib/config/env";

export function createSupabaseBrowserClient() {
  if (!publicEnv.NEXT_PUBLIC_SUPABASE_URL || !publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase public environment variables.");
  }

  return createBrowserClient(
    publicEnv.NEXT_PUBLIC_SUPABASE_URL,
    publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
