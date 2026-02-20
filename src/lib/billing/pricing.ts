import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function getActiveStripePriceId() {
  const fallback = serverEnv.STRIPE_PRICE_ID ?? null;

  if (!serverEnv.NEXT_PUBLIC_SUPABASE_URL || !serverEnv.SUPABASE_SERVICE_ROLE_KEY) {
    return fallback;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("app_settings")
      .select("value")
      .eq("key", "stripe_price_id")
      .maybeSingle();

    if (error || !data?.value) {
      return fallback;
    }

    const configured =
      typeof data.value === "object" &&
      data.value !== null &&
      "id" in data.value &&
      typeof data.value.id === "string"
        ? data.value.id
        : null;

    return configured ?? fallback;
  } catch {
    return fallback;
  }
}
