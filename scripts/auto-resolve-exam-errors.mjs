import { createClient } from "@supabase/supabase-js";

function parseArgs(argv) {
  const args = {
    apply: false,
    limitUsers: 100,
    limitItemsPerUser: 200,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--apply") {
      args.apply = true;
      continue;
    }
    if (token === "--limit-users") {
      const value = Number(argv[index + 1]);
      if (Number.isFinite(value)) {
        args.limitUsers = Math.max(1, Math.min(500, Math.trunc(value)));
      }
      index += 1;
      continue;
    }
    if (token === "--limit-items-per-user") {
      const value = Number(argv[index + 1]);
      if (Number.isFinite(value)) {
        args.limitItemsPerUser = Math.max(1, Math.min(500, Math.trunc(value)));
      }
      index += 1;
      continue;
    }
  }

  return args;
}

function toTimestamp(value) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

function isReviewDue(nextReviewAt, nowMs) {
  const timestamp = toTimestamp(nextReviewAt);
  return timestamp !== null && timestamp <= nowMs;
}

function buildCandidates({ errors, masteryRows, progressRows, limit, nowMs }) {
  const masteryBySkill = new Map(masteryRows.map((row) => [row.skill_id, row]));
  const progressByLesson = new Map(progressRows.map((row) => [row.lesson_id, row]));

  const candidates = [];
  for (const row of errors) {
    if (row.resolved) continue;

    const createdAtMs = toTimestamp(row.created_at);
    const ageHours =
      createdAtMs === null ? 0 : Math.max(0, (nowMs - createdAtMs) / (1000 * 60 * 60));

    if (row.skill_id) {
      const masteryRow = masteryBySkill.get(row.skill_id);
      if (!masteryRow) continue;

      const masteryLevel = Number(masteryRow.mastery_level ?? 0);
      const attempts = Number(masteryRow.attempts ?? 0);
      const correctAttempts = Number(masteryRow.correct_attempts ?? 0);
      const accuracy = attempts > 0 ? correctAttempts / attempts : 0;

      if (ageHours >= 24 && masteryLevel >= 0.82 && attempts >= 6 && accuracy >= 0.7) {
        candidates.push({
          id: row.id,
          reason: `mastery ${Math.round(masteryLevel * 100)}% with ${attempts} attempts`,
        });
      }
    } else if (row.error_type === "timed_out" && ageHours >= 48) {
      const progressRow = progressByLesson.get(row.lesson_id);
      if (progressRow && !isReviewDue(progressRow.next_review_at, nowMs)) {
        candidates.push({
          id: row.id,
          reason: "timed_out older than 48h and lesson not currently due",
        });
      }
    }

    if (candidates.length >= limit) {
      break;
    }
  }

  return candidates;
}

function buildRunDiagnostics(perUserRows) {
  const topEligibleUsers = [...perUserRows]
    .filter((row) => row.eligibleCount > 0)
    .sort((left, right) => right.eligibleCount - left.eligibleCount)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      eligibleCount: row.eligibleCount,
    }));

  const topUpdatedUsers = [...perUserRows]
    .filter((row) => row.updatedCount > 0)
    .sort((left, right) => right.updatedCount - left.updatedCount)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      updatedCount: row.updatedCount,
    }));

  const topErroredUsers = perUserRows
    .filter((row) => typeof row.error === "string" && row.error.length > 0)
    .slice(0, 5)
    .map((row) => ({
      userId: row.userId,
      error: row.error,
    }));

  return {
    generatedAt: new Date().toISOString(),
    coverage: {
      usersWithCandidates: perUserRows.filter((row) => row.eligibleCount > 0).length,
      usersUpdated: perUserRows.filter((row) => row.updatedCount > 0).length,
      usersErrored: perUserRows.filter((row) => typeof row.error === "string" && row.error.length > 0).length,
    },
    topEligibleUsers,
    topUpdatedUsers,
    topErroredUsers,
  };
}

function buildWorkflowContext() {
  if (process.env.GITHUB_ACTIONS !== "true") {
    return null;
  }
  const repository = process.env.GITHUB_REPOSITORY ?? null;
  const runId = process.env.GITHUB_RUN_ID ?? null;
  return {
    workflow: process.env.GITHUB_WORKFLOW ?? null,
    job: process.env.GITHUB_JOB ?? null,
    runId,
    runNumber: process.env.GITHUB_RUN_NUMBER ?? null,
    repository,
    ref: process.env.GITHUB_REF ?? null,
    sha: process.env.GITHUB_SHA ?? null,
    actor: process.env.GITHUB_ACTOR ?? null,
    runUrl: repository && runId ? `https://github.com/${repository}/actions/runs/${runId}` : null,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const unresolvedSeed = await supabase
    .from("user_exam_error_logs")
    .select("user_id")
    .eq("resolved", false)
    .order("created_at", { ascending: false })
    .limit(Math.min(10000, args.limitUsers * 120));

  if (unresolvedSeed.error) {
    console.error("Failed to load unresolved exam errors:", unresolvedSeed.error.message);
    process.exit(1);
  }

  const userIds = [];
  const seen = new Set();
  for (const row of unresolvedSeed.data ?? []) {
    if (!row.user_id || seen.has(row.user_id)) continue;
    seen.add(row.user_id);
    userIds.push(row.user_id);
    if (userIds.length >= args.limitUsers) break;
  }

  const nowMs = Date.now();
  const perUser = [];

  for (const userId of userIds) {
    const [errorRowsResult, masteryRowsResult, progressRowsResult] = await Promise.all([
      supabase
        .from("user_exam_error_logs")
        .select("id,lesson_id,skill_id,error_type,created_at,resolved")
        .eq("user_id", userId)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(args.limitItemsPerUser),
      supabase
        .from("user_skill_mastery")
        .select("skill_id,mastery_level,attempts,correct_attempts")
        .eq("user_id", userId),
      supabase
        .from("user_learning_progress")
        .select("lesson_id,next_review_at")
        .eq("user_id", userId),
    ]);

    if (errorRowsResult.error || masteryRowsResult.error || progressRowsResult.error) {
      perUser.push({
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

    const candidates = buildCandidates({
      errors: errorRowsResult.data ?? [],
      masteryRows: masteryRowsResult.data ?? [],
      progressRows: progressRowsResult.data ?? [],
      limit: args.limitItemsPerUser,
      nowMs,
    });

    if (!args.apply || candidates.length === 0) {
      perUser.push({
        userId,
        eligibleCount: candidates.length,
        updatedCount: 0,
      });
      continue;
    }

    const idsToResolve = candidates.map((item) => item.id);
    const updateResult = await supabase
      .from("user_exam_error_logs")
      .update({
        resolved: true,
        resolved_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .in("id", idsToResolve)
      .select("id");

    if (updateResult.error) {
      perUser.push({
        userId,
        eligibleCount: candidates.length,
        updatedCount: 0,
        error: updateResult.error.message,
      });
      continue;
    }

    perUser.push({
      userId,
      eligibleCount: candidates.length,
      updatedCount: updateResult.data?.length ?? 0,
    });
  }

  const totals = perUser.reduce(
    (accumulator, row) => {
      accumulator.eligible += row.eligibleCount;
      accumulator.updated += row.updatedCount;
      if (row.error) accumulator.erroredUsers += 1;
      return accumulator;
    },
    { eligible: 0, updated: 0, erroredUsers: 0 },
  );
  const diagnostics = buildRunDiagnostics(perUser);
  const workflow = buildWorkflowContext();

  const summary = {
    apply: args.apply,
    userCount: userIds.length,
    limitUsers: args.limitUsers,
    limitItemsPerUser: args.limitItemsPerUser,
    totals,
    diagnostics,
    workflow,
    users: perUser,
    generatedAt: new Date().toISOString(),
  };

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error("Unexpected auto-resolve run failure:", error);
  process.exit(1);
});
