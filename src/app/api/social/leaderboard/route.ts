/**
 * GET /api/social/leaderboard — Fetch leaderboard rankings
 *
 * Query params:
 *   metric: xp | streak | weekly_xp | lessons
 *   scope:  global | circle | class
 *   scopeId: (required if scope=circle or scope=class)
 *   limit:  1-50 (default 25)
 */

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  getLeaderboard,
  type LeaderboardMetric,
  type LeaderboardScope,
} from "@/lib/social/leaderboard";

const VALID_METRICS: LeaderboardMetric[] = ["xp", "streak", "weekly_xp", "lessons"];

export async function GET(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:leaderboard", {
      max: 20,
      windowMs: 60_000,
    });
    if (!rl.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(request.url);
    const metric = url.searchParams.get("metric") as LeaderboardMetric;
    const scopeType = url.searchParams.get("scope") ?? "global";
    const scopeId = url.searchParams.get("scopeId");
    const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "25", 10), 50);

    if (!VALID_METRICS.includes(metric)) {
      return NextResponse.json(
        { error: `Invalid metric. Must be one of: ${VALID_METRICS.join(", ")}` },
        { status: 400 },
      );
    }

    let scope: LeaderboardScope;
    switch (scopeType) {
      case "circle":
        if (!scopeId)
          return NextResponse.json({ error: "scopeId required for circle scope" }, { status: 400 });
        scope = { kind: "circle", circleId: scopeId };
        break;
      case "class":
        if (!scopeId)
          return NextResponse.json({ error: "scopeId required for class scope" }, { status: 400 });
        scope = { kind: "class", classId: scopeId };
        break;
      default:
        scope = { kind: "global" };
    }

    const result = await getLeaderboard(supabase, user.id, metric, scope, limit);

    return NextResponse.json(result, {
      headers: { "Cache-Control": "private, max-age=30" },
    });
  } catch (error) {
    console.error("Leaderboard error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
