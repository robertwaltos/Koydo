import type { SupabaseClient } from "@supabase/supabase-js";

type LearnerRow = {
  learner_user_id: string | null;
  student_profile_id: string | null;
  external_student_id: string | null;
  school_name: string | null;
};

type TestingAttemptRow = {
  user_id: string;
  score: number | null;
};

type GamificationEventRow = {
  user_id: string;
  metadata: Record<string, unknown> | null;
};

type OrganizationRow = {
  id: string;
  name: string;
  slug: string;
  organization_type: string;
  school_count: number;
  created_at: string;
};

export type OrganizationReportSnapshot = {
  organization: {
    id: string;
    name: string;
    slug: string;
    organizationType: string;
    schoolCount: number;
    createdAt: string;
  };
  reportWindowDays: number;
  sinceIso: string;
  schoolFilter: string | null;
  metrics: {
    learnerCount: number;
    learnerUserCount: number;
    examAttemptCount: number;
    averageExamScore: number | null;
    gamificationEventCount: number;
    avgGameStars: number | null;
    totalGamificationPoints: number;
  };
  bySchool: Array<{
    schoolName: string;
    learnerCount: number;
    learnerUserCount: number;
    examAttemptCount: number;
    averageExamScore: number | null;
    gamificationEventCount: number;
    avgGameStars: number | null;
    totalGamificationPoints: number;
  }>;
  byLearner: Array<{
    learnerUserId: string | null;
    studentProfileId: string | null;
    externalStudentId: string | null;
    schoolName: string;
    examAttemptCount: number;
    averageExamScore: number | null;
    gamificationEventCount: number;
    avgGameStars: number | null;
    totalGamificationPoints: number;
  }>;
};

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function extractStarsFromMetadata(metadata: Record<string, unknown> | null) {
  if (!metadata) return null;
  const result = metadata.result;
  if (!result || typeof result !== "object") return null;
  const row = result as Record<string, unknown>;
  const stars = row.stars;
  if (typeof stars === "number" && Number.isFinite(stars)) return stars;
  return null;
}

function extractPointsFromMetadata(metadata: Record<string, unknown> | null) {
  if (!metadata) return null;
  const awardedPoints = metadata.awardedPoints;
  if (typeof awardedPoints === "number" && Number.isFinite(awardedPoints)) return awardedPoints;
  const pointsDelta = metadata.pointsDelta;
  if (typeof pointsDelta === "number" && Number.isFinite(pointsDelta)) return pointsDelta;
  return null;
}

function average(values: number[]) {
  if (values.length === 0) return null;
  return round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

type SchoolBucket = {
  learnerCount: number;
  learnerUserIds: Set<string>;
  examScores: number[];
  examAttemptCount: number;
  starValues: number[];
  gameEventCount: number;
  pointValues: number[];
};

function createSchoolBucket(): SchoolBucket {
  return {
    learnerCount: 0,
    learnerUserIds: new Set<string>(),
    examScores: [],
    examAttemptCount: 0,
    starValues: [],
    gameEventCount: 0,
    pointValues: [],
  };
}

type LearnerBucket = {
  learnerUserId: string | null;
  studentProfileId: string | null;
  externalStudentId: string | null;
  schoolName: string;
  examScores: number[];
  examAttemptCount: number;
  starValues: number[];
  gameEventCount: number;
  pointValues: number[];
};

function createLearnerBucket(learner: LearnerRow, schoolName: string): LearnerBucket {
  return {
    learnerUserId: learner.learner_user_id,
    studentProfileId: learner.student_profile_id,
    externalStudentId: learner.external_student_id,
    schoolName,
    examScores: [],
    examAttemptCount: 0,
    starValues: [],
    gameEventCount: 0,
    pointValues: [],
  };
}

function csvEscape(value: unknown) {
  if (value === null || value === undefined) return "";
  const raw = typeof value === "string" ? value : String(value);
  const escaped = raw.replace(/"/g, "\"\"");
  if (/[",\n]/.test(escaped)) {
    return `"${escaped}"`;
  }
  return escaped;
}

export function organizationReportToCsv(snapshot: OrganizationReportSnapshot) {
  const summaryHeader = ["metric", "value"];
  const summaryRows: Array<[string, string | number | null]> = [
    ["organization_id", snapshot.organization.id],
    ["organization_name", snapshot.organization.name],
    ["organization_type", snapshot.organization.organizationType],
    ["report_window_days", snapshot.reportWindowDays],
    ["since_iso", snapshot.sinceIso],
    ["school_filter", snapshot.schoolFilter],
    ["learner_count", snapshot.metrics.learnerCount],
    ["learner_user_count", snapshot.metrics.learnerUserCount],
    ["exam_attempt_count", snapshot.metrics.examAttemptCount],
    ["average_exam_score", snapshot.metrics.averageExamScore],
    ["gamification_event_count", snapshot.metrics.gamificationEventCount],
    ["avg_game_stars", snapshot.metrics.avgGameStars],
    ["total_gamification_points", snapshot.metrics.totalGamificationPoints],
  ];

  const schoolHeader = [
    "school_name",
    "learner_count",
    "learner_user_count",
    "exam_attempt_count",
    "average_exam_score",
    "gamification_event_count",
    "avg_game_stars",
    "total_gamification_points",
  ];

  const learnerHeader = [
    "school_name",
    "learner_user_id",
    "student_profile_id",
    "external_student_id",
    "exam_attempt_count",
    "average_exam_score",
    "gamification_event_count",
    "avg_game_stars",
    "total_gamification_points",
  ];

  const lines: string[] = [];
  lines.push(summaryHeader.join(","));
  for (const [metric, value] of summaryRows) {
    lines.push([metric, value].map(csvEscape).join(","));
  }

  lines.push("");
  lines.push(schoolHeader.join(","));
  for (const school of snapshot.bySchool) {
    lines.push([
      school.schoolName,
      school.learnerCount,
      school.learnerUserCount,
      school.examAttemptCount,
      school.averageExamScore,
      school.gamificationEventCount,
      school.avgGameStars,
      school.totalGamificationPoints,
    ].map(csvEscape).join(","));
  }

  lines.push("");
  lines.push(learnerHeader.join(","));
  for (const learner of snapshot.byLearner) {
    lines.push([
      learner.schoolName,
      learner.learnerUserId,
      learner.studentProfileId,
      learner.externalStudentId,
      learner.examAttemptCount,
      learner.averageExamScore,
      learner.gamificationEventCount,
      learner.avgGameStars,
      learner.totalGamificationPoints,
    ].map(csvEscape).join(","));
  }

  return lines.join("\n");
}

export function organizationReportToPlainText(snapshot: OrganizationReportSnapshot) {
  const lines: string[] = [];
  lines.push(`Organization Report: ${snapshot.organization.name}`);
  lines.push(`Organization ID: ${snapshot.organization.id}`);
  lines.push(`Type: ${snapshot.organization.organizationType}`);
  lines.push(`Window: last ${snapshot.reportWindowDays} day(s), since ${snapshot.sinceIso}`);
  if (snapshot.schoolFilter) {
    lines.push(`School filter: ${snapshot.schoolFilter}`);
  }
  lines.push("");
  lines.push("Summary");
  lines.push(`- Learners: ${snapshot.metrics.learnerCount}`);
  lines.push(`- Learner users: ${snapshot.metrics.learnerUserCount}`);
  lines.push(`- Exam attempts: ${snapshot.metrics.examAttemptCount}`);
  lines.push(`- Avg exam score: ${snapshot.metrics.averageExamScore ?? "n/a"}`);
  lines.push(`- Game events: ${snapshot.metrics.gamificationEventCount}`);
  lines.push(`- Avg game stars: ${snapshot.metrics.avgGameStars ?? "n/a"}`);
  lines.push(`- Total gamification points: ${snapshot.metrics.totalGamificationPoints}`);
  lines.push("");
  lines.push("By School");
  for (const school of snapshot.bySchool) {
    lines.push(
      `${school.schoolName}: learners=${school.learnerCount}, learnerUsers=${school.learnerUserCount}, examAttempts=${school.examAttemptCount}, avgExam=${school.averageExamScore ?? "n/a"}, gameEvents=${school.gamificationEventCount}, avgStars=${school.avgGameStars ?? "n/a"}, points=${school.totalGamificationPoints}`,
    );
  }

  const learnerPreview = snapshot.byLearner.slice(0, 250);
  lines.push("");
  lines.push(`By Learner (${snapshot.byLearner.length})`);
  for (const learner of learnerPreview) {
    lines.push(
      `${learner.schoolName}: user=${learner.learnerUserId ?? "n/a"}, profile=${learner.studentProfileId ?? "n/a"}, external=${learner.externalStudentId ?? "n/a"}, examAttempts=${learner.examAttemptCount}, avgExam=${learner.averageExamScore ?? "n/a"}, gameEvents=${learner.gamificationEventCount}, avgStars=${learner.avgGameStars ?? "n/a"}, points=${learner.totalGamificationPoints}`,
    );
  }
  if (snapshot.byLearner.length > learnerPreview.length) {
    lines.push(
      `... ${snapshot.byLearner.length - learnerPreview.length} additional learners omitted from plain-text output. Download CSV export for full learner detail.`,
    );
  }
  return lines.join("\n");
}

export async function buildOrganizationReportSnapshot(
  admin: SupabaseClient,
  params: {
    organizationId: string;
    reportWindowDays: number;
    schoolFilter?: string | null;
    includeLearners?: boolean;
  },
): Promise<OrganizationReportSnapshot> {
  const sinceIso = new Date(
    Date.now() - params.reportWindowDays * 24 * 60 * 60 * 1000,
  ).toISOString();

  const { data: orgData, error: orgError } = await admin
    .from("organizations")
    .select("id, name, slug, organization_type, school_count, created_at")
    .eq("id", params.organizationId)
    .maybeSingle();

  if (orgError) throw orgError;
  const organization = orgData as OrganizationRow | null;
  if (!organization) {
    throw new Error("Organization not found.");
  }

  let learnersQuery = admin
    .from("organization_learners")
    .select("learner_user_id, student_profile_id, external_student_id, school_name")
    .eq("organization_id", params.organizationId)
    .eq("status", "active");

  if (params.schoolFilter) {
    learnersQuery = learnersQuery.eq("school_name", params.schoolFilter);
  }

  const { data: learnerData, error: learnerError } = await learnersQuery;
  if (learnerError) throw learnerError;

  const learners = (learnerData ?? []) as LearnerRow[];
  const learnerUserIds = Array.from(
    new Set(
      learners
        .map((row) => row.learner_user_id)
        .filter((value): value is string => typeof value === "string" && value.length > 0),
    ),
  );

  let attempts: TestingAttemptRow[] = [];
  let events: GamificationEventRow[] = [];
  if (learnerUserIds.length > 0) {
    const [attemptsResult, eventsResult] = await Promise.all([
      admin
        .from("testing_exam_attempts")
        .select("user_id, score")
        .in("user_id", learnerUserIds)
        .eq("status", "completed")
        .gte("completed_at", sinceIso)
        .limit(50_000),
      admin
        .from("gamification_events")
        .select("user_id, metadata")
        .in("user_id", learnerUserIds)
        .eq("event_type", "points_awarded")
        .gte("created_at", sinceIso)
        .limit(50_000),
    ]);

    if (attemptsResult.error) throw attemptsResult.error;
    if (eventsResult.error) throw eventsResult.error;
    attempts = (attemptsResult.data ?? []) as TestingAttemptRow[];
    events = (eventsResult.data ?? []) as GamificationEventRow[];
  }

  const userIdToSchool = new Map<string, string>();
  const userIdToLearnerKey = new Map<string, string>();
  const learnerBuckets = new Map<string, LearnerBucket>();
  const schoolBuckets = new Map<string, SchoolBucket>();
  learners.forEach((learner, index) => {
    const schoolName = learner.school_name?.trim() || "Unassigned";
    const learnerKey = learner.learner_user_id
      ? `user:${learner.learner_user_id}`
      : learner.student_profile_id
        ? `profile:${learner.student_profile_id}`
        : learner.external_student_id
          ? `external:${learner.external_student_id}`
          : `row:${index}`;

    learnerBuckets.set(learnerKey, createLearnerBucket(learner, schoolName));

    const bucket = schoolBuckets.get(schoolName) ?? createSchoolBucket();
    bucket.learnerCount += 1;
    if (learner.learner_user_id) {
      bucket.learnerUserIds.add(learner.learner_user_id);
      userIdToSchool.set(learner.learner_user_id, schoolName);
      userIdToLearnerKey.set(learner.learner_user_id, learnerKey);
    }
    schoolBuckets.set(schoolName, bucket);
  });

  const examScores: number[] = [];
  for (const attempt of attempts) {
    const schoolName = userIdToSchool.get(attempt.user_id) || "Unassigned";
    const bucket = schoolBuckets.get(schoolName) ?? createSchoolBucket();
    bucket.examAttemptCount += 1;
    if (typeof attempt.score === "number" && Number.isFinite(attempt.score)) {
      bucket.examScores.push(attempt.score);
      examScores.push(attempt.score);
    }
    schoolBuckets.set(schoolName, bucket);

    const learnerKey = userIdToLearnerKey.get(attempt.user_id);
    if (learnerKey) {
      const learnerBucket = learnerBuckets.get(learnerKey);
      if (learnerBucket) {
        learnerBucket.examAttemptCount += 1;
        if (typeof attempt.score === "number" && Number.isFinite(attempt.score)) {
          learnerBucket.examScores.push(attempt.score);
        }
      }
    }
  }

  const starValues: number[] = [];
  const pointValues: number[] = [];
  for (const event of events) {
    const schoolName = userIdToSchool.get(event.user_id) || "Unassigned";
    const bucket = schoolBuckets.get(schoolName) ?? createSchoolBucket();
    bucket.gameEventCount += 1;
    const stars = extractStarsFromMetadata(event.metadata);
    if (typeof stars === "number") {
      bucket.starValues.push(stars);
      starValues.push(stars);
    }
    const points = extractPointsFromMetadata(event.metadata);
    if (typeof points === "number") {
      bucket.pointValues.push(points);
      pointValues.push(points);
    }
    schoolBuckets.set(schoolName, bucket);

    const learnerKey = userIdToLearnerKey.get(event.user_id);
    if (learnerKey) {
      const learnerBucket = learnerBuckets.get(learnerKey);
      if (learnerBucket) {
        learnerBucket.gameEventCount += 1;
        if (typeof stars === "number") {
          learnerBucket.starValues.push(stars);
        }
        if (typeof points === "number") {
          learnerBucket.pointValues.push(points);
        }
      }
    }
  }

  const bySchool = Array.from(schoolBuckets.entries())
    .map(([schoolName, bucket]) => ({
      schoolName,
      learnerCount: bucket.learnerCount,
      learnerUserCount: bucket.learnerUserIds.size,
      examAttemptCount: bucket.examAttemptCount,
      averageExamScore: average(bucket.examScores),
      gamificationEventCount: bucket.gameEventCount,
      avgGameStars: average(bucket.starValues),
      totalGamificationPoints: bucket.pointValues.reduce((sum, value) => sum + value, 0),
    }))
    .sort((a, b) => b.learnerCount - a.learnerCount);

  const byLearner = params.includeLearners === false
    ? []
    : Array.from(learnerBuckets.values())
        .map((bucket) => ({
          learnerUserId: bucket.learnerUserId,
          studentProfileId: bucket.studentProfileId,
          externalStudentId: bucket.externalStudentId,
          schoolName: bucket.schoolName,
          examAttemptCount: bucket.examAttemptCount,
          averageExamScore: average(bucket.examScores),
          gamificationEventCount: bucket.gameEventCount,
          avgGameStars: average(bucket.starValues),
          totalGamificationPoints: bucket.pointValues.reduce((sum, value) => sum + value, 0),
        }))
        .sort((left, right) => {
          if (left.schoolName !== right.schoolName) {
            return left.schoolName.localeCompare(right.schoolName);
          }
          return right.totalGamificationPoints - left.totalGamificationPoints;
        });

  return {
    organization: {
      id: organization.id,
      name: organization.name,
      slug: organization.slug,
      organizationType: organization.organization_type,
      schoolCount: organization.school_count,
      createdAt: organization.created_at,
    },
    reportWindowDays: params.reportWindowDays,
    sinceIso,
    schoolFilter: params.schoolFilter ?? null,
    metrics: {
      learnerCount: learners.length,
      learnerUserCount: learnerUserIds.length,
      examAttemptCount: attempts.length,
      averageExamScore: average(examScores),
      gamificationEventCount: events.length,
      avgGameStars: average(starValues),
      totalGamificationPoints: pointValues.reduce((sum, value) => sum + value, 0),
    },
    bySchool,
    byLearner,
  };
}
