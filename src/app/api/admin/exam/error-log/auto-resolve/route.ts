import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { buildAutoResolveCandidates } from "@/lib/exam/error-auto-resolve";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  dryRun: z.boolean().optional(),
  targetUserId: z.string().uuid().optional(),
  limitUsers: z.number().int().min(1).max(500).optional(),
  limitItemsPerUser: z.number().int().min(1).max(500).optional(),
});

type PerUserSummary = {
  userId: string;
  eligibleCount: number;
  updatedCount: number;
  error?: string;
};

type RunDiagnostics = {
  generatedAt: string;
  coverage: {
    usersWithCandidates: number;
    usersUpdated: number;
    usersErrored: number;
  };
  topEligibleUsers: Array<{ userId: string; eligibleCount: number }>;
  topUpdatedUsers: Array<{ userId: string; updatedCount: number }>;
  topErroredUsers: Array<{ userId: string; error: string }>;
};

function buildRunDiagnostics(perUserResults: PerUserSummary[]): RunDiagnostics {
  const topEligibleUsers = [...perUserResults]
    .filter((row) => row.eligibleCount > 0)
    .sort((left, right) => right.eligibleCount - left.eligibleCount)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      eligibleCount: row.eligibleCount,
    }));

  const topUpdatedUsers = [...perUserResults]
    .filter((row) => row.updatedCount > 0)
    .sort((left, right) => right.updatedCount - left.updatedCount)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      updatedCount: row.updatedCount,
    }));

  const topErroredUsers = perUserResults
    .filter((row): row is PerUserSummary & { error: string } => typeof row.error === "string" && row.error.length > 0)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      error: row.error,
    }));

  return {
    generatedAt: new Date().toISOString(),
    coverage: {
      usersWithCandidates: perUserResults.filter((row) => row.eligibleCount > 0).length,
      usersUpdated: perUserResults.filter((row) => row.updatedCount > 0).length,
      usersErrored: perUserResults.filter((row) => typeof row.error === "string" && row.error.length > 0).length,
    },
    topEligibleUsers,
    topUpdatedUsers,
    topErroredUsers,
  };
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "exam_error_auto_resolve_run",
    windowSeconds: 3600,
    maxActions: 12,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for exam auto-resolve runs." },
      { status: 429 },
    );
  }

  const dryRun = payload.data.dryRun ?? false;
  const limitUsers = payload.data.limitUsers ?? 100;
  const limitItemsPerUser = payload.data.limitItemsPerUser ?? 200;
  const admin = createSupabaseAdminClient();

  let targetUserIds: string[] = [];
  if (payload.data.targetUserId) {
    targetUserIds = [payload.data.targetUserId];
  } else {
    const unresolvedSeedResult = await admin
      .from("user_exam_error_logs")
      .select("user_id")
      .eq("resolved", false)
      .order("created_at", { ascending: false })
      .limit(Math.min(10000, limitUsers * 120));

    if (unresolvedSeedResult.error) {
      console.error("Unexpected API error.", toSafeErrorRecord(unresolvedSeedResult.error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    const seen = new Set<string>();
    for (const row of unresolvedSeedResult.data ?? []) {
      if (!row.user_id || seen.has(row.user_id)) continue;
      seen.add(row.user_id);
      targetUserIds.push(row.user_id);
      if (targetUserIds.length >= limitUsers) break;
    }
  }

  if (targetUserIds.length === 0) {
    return NextResponse.json({
      success: true,
      dryRun,
      userCount: 0,
      totals: { eligible: 0, updated: 0, erroredUsers: 0 },
      users: [] as PerUserSummary[],
    });
  }

  const perUserResults: PerUserSummary[] = [];

  for (const userId of targetUserIds) {
    const [errorRowsResult, masteryRowsResult, progressRowsResult] = await Promise.all([
      admin
        .from("user_exam_error_logs")
        .select("id,lesson_id,skill_id,error_type,created_at,resolved")
        .eq("user_id", userId)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(limitItemsPerUser),
      admin
        .from("user_skill_mastery")
        .select("skill_id,mastery_level,attempts,correct_attempts")
        .eq("user_id", userId),
      admin
        .from("user_learning_progress")
        .select("lesson_id,next_review_at")
        .eq("user_id", userId),
    ]);

    if (errorRowsResult.error || masteryRowsResult.error || progressRowsResult.error) {
      perUserResults.push({
        userId,
        eligibleCount: 0,
        updatedCount: 0,
        error:
          errorRowsResult.error?.message ??
          masteryRowsResult.error?.message ??
          progressRowsResult.error?.message ??
          "Unknown error",
      });
      continue;
    }

    const candidates = buildAutoResolveCandidates({
      errors: errorRowsResult.data ?? [],
      masteryRows: masteryRowsResult.data ?? [],
      progressRows: progressRowsResult.data ?? [],
      limit: limitItemsPerUser,
    });

    if (dryRun || candidates.length === 0) {
      perUserResults.push({
        userId,
        eligibleCount: candidates.length,
        updatedCount: 0,
      });
      continue;
    }

    const idsToResolve = candidates.map((item) => item.id);
    const updateResult = await admin
      .from("user_exam_error_logs")
      .update({
        resolved: true,
        resolved_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .in("id", idsToResolve)
      .select("id");

    if (updateResult.error) {
      perUserResults.push({
        userId,
        eligibleCount: candidates.length,
        updatedCount: 0,
        error: updateResult.error.message,
      });
      continue;
    }

    perUserResults.push({
      userId,
      eligibleCount: candidates.length,
      updatedCount: updateResult.data?.length ?? 0,
    });
  }

  const totals = perUserResults.reduce(
    (accumulator, row) => {
      accumulator.eligible += row.eligibleCount;
      accumulator.updated += row.updatedCount;
      if (row.error) accumulator.erroredUsers += 1;
      return accumulator;
    },
    { eligible: 0, updated: 0, erroredUsers: 0 },
  );
  const diagnostics = buildRunDiagnostics(perUserResults);

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "exam_error_auto_resolve_run",
    targetUserId: payload.data.targetUserId ?? null,
    metadata: {
      dryRun,
      limitUsers,
      limitItemsPerUser,
      userCount: targetUserIds.length,
      totals,
      diagnostics,
    },
  });

  return NextResponse.json({
    success: true,
    dryRun,
    userCount: targetUserIds.length,
    totals,
    users: perUserResults,
    diagnostics,
  });
}
