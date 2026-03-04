/**
 * GET /api/mastery/skill-graph
 *
 * Returns the skill graph with an optional mastery overlay for
 * the authenticated learner. Used for visualisation on the
 * experience-hub or dashboard.
 *
 * Query params:
 *   ?overlay=true  — include the learner's mastery levels per node
 *   ?compact=true  — omit edge list to reduce payload size
 */

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";
import { buildMasterySkillGraph } from "@/lib/mastery/skill-graph";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:mastery:skill-graph:get", {
      max: 20,
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

    const url = new URL(request.url);
    const wantOverlay = url.searchParams.get("overlay") === "true";
    const compact = url.searchParams.get("compact") === "true";

    const allModules = getAllLearningModules();
    const graph = buildMasterySkillGraph(allModules);

    // ── Build mastery overlay ─────────────────────────────────
    type MasteryOverlay = Record<string, number>;
    let overlay: MasteryOverlay | undefined;

    if (wantOverlay) {
      const { data: masteryData, error: masteryError } = await supabase
        .from("user_skill_mastery")
        .select("skill_id, mastery_level")
        .eq("user_id", user.id);

      if (masteryError) {
        console.error("Mastery overlay query failed:", masteryError);
      } else if (masteryData) {
        overlay = {};
        for (const row of masteryData) {
          overlay[row.skill_id] = Number(row.mastery_level);
        }
      }
    }

    // ── Assemble response ─────────────────────────────────────
    const nodes = graph.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      moduleId: n.moduleId,
      subject: n.subject,
      questionCount: n.questionCount,
      isFallback: n.isFallback,
      prerequisiteSkillIds: n.prerequisiteSkillIds,
      mastery: overlay?.[n.id] ?? null,
    }));

    return NextResponse.json({
      nodes,
      edges: compact ? undefined : graph.edges,
      coverage: graph.coverage,
      overlay: wantOverlay ? (overlay ?? {}) : undefined,
    });
  } catch (err) {
    console.error("Unexpected error in skill-graph route:", toSafeErrorRecord(err));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
