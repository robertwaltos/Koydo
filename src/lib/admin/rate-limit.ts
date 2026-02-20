import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createAdminAlert } from "@/lib/admin/alerts";

type RateLimitInput = {
  adminUserId: string;
  actionType: string;
  windowSeconds: number;
  maxActions: number;
};

export async function enforceAdminActionRateLimit({
  adminUserId,
  actionType,
  windowSeconds,
  maxActions,
}: RateLimitInput): Promise<{ allowed: boolean; observedActions: number }> {
  const admin = createSupabaseAdminClient();
  const windowStart = new Date(Date.now() - windowSeconds * 1000).toISOString();

  const { count, error } = await admin
    .from("admin_action_logs")
    .select("id", { count: "exact", head: true })
    .eq("admin_user_id", adminUserId)
    .eq("action_type", actionType)
    .gte("created_at", windowStart);

  if (error) {
    return { allowed: true, observedActions: 0 };
  }

  const observedActions = count ?? 0;
  if (observedActions >= maxActions) {
    await admin.from("admin_rate_limit_events").insert({
      admin_user_id: adminUserId,
      action_type: actionType,
      window_seconds: windowSeconds,
      max_actions: maxActions,
      observed_actions: observedActions,
    });

    await createAdminAlert({
      severity: "critical",
      category: "admin_rate_limit",
      message: `Rate limit exceeded for ${actionType}`,
      metadata: {
        adminUserId,
        actionType,
        windowSeconds,
        maxActions,
        observedActions,
      },
    });

    return { allowed: false, observedActions };
  }

  return { allowed: true, observedActions };
}
