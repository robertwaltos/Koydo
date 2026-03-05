/**
 * Server-side feature gate middleware for API routes.
 *
 * Usage:
 *   import { requireFeature } from "@/lib/platform/require-feature";
 *
 *   export async function POST(req: Request) {
 *     const gate = await requireFeature("math_solver", req);
 *     if (gate) return gate; // 403 JSON response
 *     // ... proceed
 *   }
 */

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getTierFromAge } from "@/lib/safety/age-tier";
import { canUseCloudAI } from "@/lib/forge/tier-gate";
import { evaluateFeature, getParentOverrides } from "./feature-gate";
import type { AppFeatureId } from "./feature-registry";

async function resolveUserContext(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    // Fetch active student profile for age tier
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("id, age_years, account_id")
      .eq("account_id", user.id)
      .limit(1)
      .maybeSingle();

    const ageTier = profile?.age_years != null ? getTierFromAge(profile.age_years) : undefined;
    const isPaidUser = await canUseCloudAI(user.id);

    let parentOverrides: Map<string, boolean> | undefined;
    if (profile?.id) {
      parentOverrides = await getParentOverrides(profile.id);
    }

    return { userId: user.id, ageTier, isPaidUser, profileId: profile?.id, parentOverrides };
  } catch {
    return null;
  }
}

/**
 * Middleware-style guard for API routes that require a specific feature.
 * Returns a 403 Response if denied, or null if allowed.
 */
export async function requireFeature(
  featureId: AppFeatureId,
  req: Request,
): Promise<Response | null> {
  const userCtx = await resolveUserContext(req);

  const result = await evaluateFeature({
    featureId,
    userId: userCtx?.userId,
    ageTier: userCtx?.ageTier,
    isPaidUser: userCtx?.isPaidUser ?? false,
    parentOverride: userCtx?.parentOverrides?.get(featureId) ?? null,
  });

  if (result.allowed) return null;

  const upgradeUrl = result.reason === "requires_subscription" ? "/pricing" : undefined;

  return new Response(
    JSON.stringify({
      error: "Feature not available",
      code: `FEATURE_GATE_${result.reason.toUpperCase()}`,
      featureId,
      reason: result.reason,
      ...(upgradeUrl && { upgradeUrl }),
    }),
    {
      status: 403,
      headers: { "Content-Type": "application/json" },
    },
  );
}
