/**
 * Daily Activity Cap
 *
 * Configurable per-user daily learning event limit.
 * Default: 20 events/day. Adjustable via owner console.
 */

import { resolveLimit } from "@/lib/settings/resolve-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function getStartOfUtcDayIso() {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0),
  ).toISOString();
}

export type ActivityCapResult = {
  allowed: boolean;
  used: number;
  limit: number;
  remaining: number;
};

/**
 * Check if a user has exceeded their daily activity cap.
 * Does NOT insert events — call this before insertion.
 */
export async function checkDailyActivityCap(
  userId: string,
  eventCount: number = 1,
): Promise<ActivityCapResult> {
  const limit = await resolveLimit("daily_activity_cap", userId);

  // limit of 0 means unlimited
  if (limit <= 0) {
    return { allowed: true, used: 0, limit: 0, remaining: Infinity };
  }

  const admin = createSupabaseAdminClient();
  const { count, error } = await admin
    .from("learning_events")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .gte("event_at", getStartOfUtcDayIso());

  if (error) {
    // Fail open — don't block users if we can't check
    console.error("[daily-activity] Failed to check cap:", error.message);
    return { allowed: true, used: 0, limit, remaining: limit };
  }

  const used = Math.max(0, Number(count ?? 0));
  const remaining = Math.max(0, limit - used);
  const allowed = used + eventCount <= limit;

  return { allowed, used, limit, remaining };
}
