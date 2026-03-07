import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { publicEnv } from "@/lib/config/env";
import { getAppId } from "@/lib/platform/app-manifest";

export async function createSupabaseServerClient() {
  if (!publicEnv.NEXT_PUBLIC_SUPABASE_URL || !publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase public environment variables.");
  }

  const cookieStore = await cookies();

  const client = createServerClient(
    publicEnv.NEXT_PUBLIC_SUPABASE_URL,
    publicEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    },
  );

  // Set the app.id session variable so RLS policies scope to this micro-app
  const appId = getAppId();
  if (appId !== "koydo_main") {
    await client.rpc("set_app_context", { app_id_value: appId }).then(() => {}, () => {
      // Fallback: if the RPC doesn't exist yet, it's a no-op.
      // RLS policies will use the default 'koydo_main' from coalesce().
    });
  }

  return client;
}
