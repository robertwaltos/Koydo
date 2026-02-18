import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";

export function createSupabaseAdminClient() {
  if (!serverEnv.NEXT_PUBLIC_SUPABASE_URL || !serverEnv.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing Supabase admin environment variables.");
  }

  return createClient(serverEnv.NEXT_PUBLIC_SUPABASE_URL, serverEnv.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
