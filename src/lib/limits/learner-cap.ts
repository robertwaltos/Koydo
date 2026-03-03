/**
 * Learner (Student Profile) Cap
 *
 * Free users: 1 profile (configurable). Premium: unlimited.
 * Beta testers with full access: unlimited.
 */

import { resolveLimit } from "@/lib/settings/resolve-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { checkPremiumAccessServer } from "@/lib/billing/entitlement-check";
import { hasActiveGrant } from "@/lib/access/access-grants";

export type LearnerCapResult = {
  allowed: boolean;
  current: number;
  limit: number;
  isPremium: boolean;
  isBetaTester: boolean;
};

/**
 * Check if a user can create another student profile.
 */
export async function checkLearnerCap(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase?: any,
): Promise<LearnerCapResult> {
  // Check premium status
  const admin = createSupabaseAdminClient();
  const entitlement = supabase
    ? await checkPremiumAccessServer(supabase, userId)
    : await checkPremiumAccessServer(admin, userId);

  // Check beta tester grant
  const isBeta = await hasActiveGrant(userId, "beta_tester");

  // Premium and beta testers get unlimited
  if (entitlement.active || isBeta) {
    const { count } = await admin
      .from("student_profiles")
      .select("id", { count: "exact", head: true })
      .eq("account_id", userId);

    return {
      allowed: true,
      current: Number(count ?? 0),
      limit: Infinity,
      isPremium: entitlement.active,
      isBetaTester: isBeta,
    };
  }

  // Free users — check cap
  const limit = await resolveLimit("free_learner_cap", userId);
  const { count, error } = await admin
    .from("student_profiles")
    .select("id", { count: "exact", head: true })
    .eq("account_id", userId);

  if (error) {
    console.error("[learner-cap] Failed to check profile count:", error.message);
    return { allowed: true, current: 0, limit, isPremium: false, isBetaTester: false };
  }

  const current = Number(count ?? 0);
  return {
    allowed: current < limit,
    current,
    limit,
    isPremium: false,
    isBetaTester: false,
  };
}
