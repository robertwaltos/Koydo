/**
 * GET /api/features/check — Batch feature availability check for client.
 *
 * Returns all feature states for the current user context.
 * Used by FeatureProvider on mount.
 *
 * Query params:
 *   ?ids=feat1,feat2  — optional: check specific features only
 */

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getTierFromAge } from "@/lib/safety/age-tier";
import { canUseCloudAI } from "@/lib/forge/tier-gate";
import { evaluateAllFeatures, evaluateFeatures, getParentOverrides } from "@/lib/platform/feature-gate";
import { APP_FEATURE_IDS, type AppFeatureId } from "@/lib/platform/feature-registry";

export async function GET(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    let userId: string | undefined;
    let ageTier: ReturnType<typeof getTierFromAge> | undefined;
    let isPaidUser = false;
    let parentOverrideMap: Map<string, boolean> | undefined;

    if (user) {
      userId = user.id;
      isPaidUser = await canUseCloudAI(user.id);

      // Get active student profile for age tier
      const { data: profile } = await supabase
        .from("student_profiles")
        .select("id, age_years")
        .eq("account_id", user.id)
        .limit(1)
        .maybeSingle();

      if (profile?.age_years != null) {
        ageTier = getTierFromAge(profile.age_years);
      }

      if (profile?.id) {
        parentOverrideMap = await getParentOverrides(profile.id);
      }
    }

    // Check if specific IDs requested
    const url = new URL(request.url);
    const idsParam = url.searchParams.get("ids");

    const ctx = {
      userId,
      ageTier,
      isPaidUser,
    };

    let features: Record<string, unknown>;

    if (idsParam) {
      const ids = idsParam.split(",").filter(Boolean) as AppFeatureId[];
      const results = await evaluateFeatures(ids, ctx);
      // Apply parent overrides
      if (parentOverrideMap) {
        for (const id of ids) {
          const override = parentOverrideMap.get(id);
          if (override !== undefined) {
            const r = await import("@/lib/platform/feature-gate").then(m =>
              m.evaluateFeature({ ...ctx, featureId: id, parentOverride: override })
            );
            results[id] = r;
          }
        }
      }
      features = results;
    } else {
      const results = await evaluateAllFeatures(ctx);
      // Apply parent overrides
      if (parentOverrideMap) {
        for (const [fid, override] of parentOverrideMap) {
          const r = await import("@/lib/platform/feature-gate").then(m =>
            m.evaluateFeature({ ...ctx, featureId: fid as AppFeatureId, parentOverride: override })
          );
          results[fid] = r;
        }
      }
      features = results;
    }

    return NextResponse.json({ features });
  } catch (error) {
    console.error("[api/features/check] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
