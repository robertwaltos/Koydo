/**
 * GET /api/mastery/recommendations
 *
 * Returns personalised next-N lesson recommendations for the
 * authenticated learner, based on their active learning paths,
 * mastery state, and spaced-review schedule.
 *
 * Query params:
 *   ?n=3      — number of recommendations (default 3, max 10)
 *   ?paths=   — comma-separated learning-path IDs to use as active
 *               context. When omitted, falls back to the learner's
 *               profile (planned) → all standard paths.
 */

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { buildAdaptiveRecommendations } from "@/lib/mastery/adaptive-recommendations";

/* ─── Default paths when none are provided ────────────────────── */
const DEFAULT_PATH_IDS = [
  "math-core",
  "language-core",
  "science-core",
  "social-core",
  "coding",
];

export async function GET(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:mastery:recommendations:get", {
      max: 30,
      windowMs: 60_000,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please retry shortly." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── Parse query params ────────────────────────────────────
    const url = new URL(request.url);
    const maxN = Math.min(10, Math.max(1, Number(url.searchParams.get("n")) || 3));
    const pathsParam = url.searchParams.get("paths");
    const activePathIds = pathsParam
      ? pathsParam.split(",").map((s) => s.trim()).filter(Boolean)
      : DEFAULT_PATH_IDS;

    // ── Fetch learner data ────────────────────────────────────
    const allModules = getAllLearningModules();

    const [masteryResult, progressResult] = await Promise.all([
      supabase
        .from("user_skill_mastery")
        .select("skill_id, mastery_level")
        .eq("user_id", user.id),
      supabase
        .from("user_learning_progress")
        .select("lesson_id, next_review_at")
        .eq("user_id", user.id),
    ]);

    if (masteryResult.error) {
      console.error("Mastery query failed:", masteryResult.error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    if (progressResult.error) {
      console.error("Progress query failed:", progressResult.error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // ── Run adaptive engine ───────────────────────────────────
    const result = buildAdaptiveRecommendations({
      allModules,
      activePathIds,
      masteryRows: masteryResult.data ?? [],
      progressRows: progressResult.data ?? [],
      maxRecommendations: maxN,
    });

    return NextResponse.json({
      recommendations: result.recommendations,
      weakSkillIds: result.weakSkillIds,
      dueLessonCount: result.dueLessonCount,
      coverage: result.skillGraph.coverage,
      activePathIds,
    });
  } catch (err) {
    console.error("Unexpected error in mastery recommendations:", toSafeErrorRecord(err));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
