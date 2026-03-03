/**
 * GET /api/knowledge-graph/search — Cross-subject concept search
 *
 * Query params:
 *   q:                Search query (required)
 *   subject:          Filter to subject
 *   prerequisites:    Include prerequisite chain (true/false)
 *   limit:            Max results (default 10, max 50)
 */

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getAllLearningModules } from "@/lib/modules";
import {
  getOrBuildKnowledgeGraph,
  searchKnowledgeGraph,
} from "@/lib/knowledge-graph/search";

export async function GET(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:knowledge-graph:search", {
      max: 30,
      windowMs: 60_000,
    });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
      );
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const query = url.searchParams.get("q")?.trim();
    if (!query || query.length < 2) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required (min 2 chars)" },
        { status: 400 },
      );
    }

    const subject = url.searchParams.get("subject")?.trim();
    const includePrerequisites = url.searchParams.get("prerequisites") === "true";
    const limit = Math.min(
      parseInt(url.searchParams.get("limit") ?? "10", 10),
      50,
    );

    // Build or retrieve cached graph
    const modules = getAllLearningModules();
    const { knowledgeGraph, skillGraph } = getOrBuildKnowledgeGraph(modules);

    // Fetch user mastery scores for ranking
    let masteryScores: Map<string, number> | undefined;
    const { data: masteryRows } = await supabase
      .from("user_skill_mastery")
      .select("skill_id, mastery_level")
      .eq("user_id", user.id);

    if (masteryRows && masteryRows.length > 0) {
      masteryScores = new Map(
        masteryRows.map((r: { skill_id: string; mastery_level: number }) => [
          r.skill_id,
          r.mastery_level,
        ]),
      );
    }

    const results = searchKnowledgeGraph(knowledgeGraph, skillGraph, {
      query,
      subject: subject || undefined,
      includePrerequisites,
      masteryScores,
      limit,
    });

    return NextResponse.json(
      {
        query,
        resultCount: results.length,
        results,
        graphStats: {
          conceptCount: knowledgeGraph.conceptCount,
          crossSubjectEdges: knowledgeGraph.crossSubjectEdgeCount,
          generatedAt: knowledgeGraph.generatedAt,
        },
      },
      {
        headers: { "Cache-Control": "private, max-age=60" },
      },
    );
  } catch (error) {
    console.error("Knowledge graph search error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
