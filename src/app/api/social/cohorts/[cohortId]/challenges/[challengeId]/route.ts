import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  applyValidatedEventToLeaderboard,
  buildChallengeAccountabilityNudge,
  isValidChallengeLifecycleTransition,
  rankChallengeLeaderboard,
  sanitizeChallengeEventMetadata,
  validateChallengeEventPayload,
  type SocialChallengeStatus,
} from "@/lib/social/cohort-challenges";
import { isMissingSocialTableError } from "@/lib/social/errors";
import { requireCohortMembership } from "@/lib/social/membership";
import { SOCIAL_COHORT_ROLES, type SocialCohortRole } from "@/lib/social/roles";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const actionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("join"),
  }),
  z.object({
    action: z.literal("transition"),
    nextStatus: z.enum(["draft", "active", "completed", "archived"]),
  }),
  z.object({
    action: z.literal("submit_event"),
    source: z.enum(["daily_challenge", "lesson_quiz", "assignment"]),
    sourceEventId: z.string().trim().min(6).max(120),
    scorePercentage: z.number().min(0).max(1),
    totalQuestions: z.number().int().min(1).max(500),
    completedAt: z.string().datetime().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
  }),
]);

type ChallengeRow = {
  id: string;
  cohort_id: string;
  title: string;
  description: string | null;
  starts_at: string;
  ends_at: string;
  status: SocialChallengeStatus;
  moderation_state: "pending" | "approved" | "rejected";
  created_by: string;
  activated_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
};

type LeaderboardRow = {
  user_id: string;
  total_points: number;
  validated_event_count: number;
  updated_at: string;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function mapChallenge(row: ChallengeRow) {
  return {
    id: row.id,
    cohortId: row.cohort_id,
    title: row.title,
    description: row.description,
    startsAt: row.starts_at,
    endsAt: row.ends_at,
    status: row.status,
    moderationState: row.moderation_state,
    createdBy: row.created_by,
    activatedAt: row.activated_at,
    completedAt: row.completed_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function canModerate(role: SocialCohortRole) {
  return role === "owner" || role === "moderator";
}

async function loadChallenge(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  cohortId: string,
  challengeId: string,
) {
  const { data, error } = await admin
    .from("social_challenges")
    .select("id, cohort_id, title, description, starts_at, ends_at, status, moderation_state, created_by, activated_at, completed_at, created_at, updated_at")
    .eq("cohort_id", cohortId)
    .eq("id", challengeId)
    .maybeSingle();

  if (error) {
    if (isMissingSocialTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Social cohort tables are not migrated yet." },
          { status: 503 },
        ),
      };
    }

    console.error("Failed to load cohort challenge.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: "Failed to load cohort challenge." },
        { status: 500 },
      ),
    };
  }

  const challenge = data as ChallengeRow | null;
  if (!challenge) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Challenge not found." }, { status: 404 }),
    };
  }

  return {
    ok: true as const,
    challenge,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ cohortId: string; challengeId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:challenge:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { cohortId, challengeId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireCohortMembership(admin, user.id, cohortId, SOCIAL_COHORT_ROLES);
  if (!membership.ok) return membership.response;

  const challengeResult = await loadChallenge(admin, cohortId, challengeId);
  if (!challengeResult.ok) return challengeResult.response;

  const { data: participantData, error: participantError } = await admin
    .from("social_challenge_participants")
    .select("status, joined_at")
    .eq("challenge_id", challengeId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (participantError) {
    if (isMissingSocialTableError(participantError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load challenge participant.", toSafeErrorRecord(participantError));
    return NextResponse.json({ error: "Failed to load challenge participant." }, { status: 500 });
  }

  return NextResponse.json({
    challenge: mapChallenge(challengeResult.challenge),
    membership: {
      role: membership.membership.role,
      status: membership.membership.status,
      joinedAt: membership.membership.joined_at,
    },
    participant: participantData
      ? {
        status: participantData.status,
        joinedAt: participantData.joined_at,
      }
      : null,
    canModerate: canModerate(membership.membership.role),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ cohortId: string; challengeId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:challenge:post", {
    max: 65,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { cohortId, challengeId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = actionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireCohortMembership(admin, user.id, cohortId, SOCIAL_COHORT_ROLES);
  if (!membership.ok) return membership.response;

  const challengeResult = await loadChallenge(admin, cohortId, challengeId);
  if (!challengeResult.ok) return challengeResult.response;
  const challenge = challengeResult.challenge;

  if (parsed.data.action === "join") {
    if (challenge.status === "archived") {
      return NextResponse.json(
        { error: "Archived challenges no longer accept participants." },
        { status: 409 },
      );
    }

    const { data, error } = await admin
      .from("social_challenge_participants")
      .upsert({
        cohort_id: cohortId,
        challenge_id: challengeId,
        user_id: user.id,
        status: "active",
      }, {
        onConflict: "challenge_id,user_id",
      })
      .select("status, joined_at")
      .maybeSingle();

    if (error) {
      if (isMissingSocialTableError(error)) {
        return NextResponse.json(
          { error: "Social cohort tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to join cohort challenge.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to join challenge." }, { status: 500 });
    }

    return NextResponse.json({
      challenge: mapChallenge(challenge),
      participant: {
        status: data?.status ?? "active",
        joinedAt: data?.joined_at ?? new Date().toISOString(),
      },
    });
  }

  if (parsed.data.action === "transition") {
    if (!canModerate(membership.membership.role)) {
      return NextResponse.json({ error: "Insufficient cohort role." }, { status: 403 });
    }

    if (!isValidChallengeLifecycleTransition(challenge.status, parsed.data.nextStatus)) {
      return NextResponse.json(
        {
          error: "Invalid challenge status transition.",
          currentStatus: challenge.status,
          nextStatus: parsed.data.nextStatus,
        },
        { status: 409 },
      );
    }

    const now = new Date().toISOString();
    const { data, error } = await admin
      .from("social_challenges")
      .update({
        status: parsed.data.nextStatus,
        activated_at:
          parsed.data.nextStatus === "active"
            ? (challenge.activated_at ?? now)
            : challenge.activated_at,
        completed_at:
          parsed.data.nextStatus === "completed"
            ? now
            : parsed.data.nextStatus === "archived"
              ? (challenge.completed_at ?? now)
              : challenge.completed_at,
      })
      .eq("cohort_id", cohortId)
      .eq("id", challengeId)
      .select("id, cohort_id, title, description, starts_at, ends_at, status, moderation_state, created_by, activated_at, completed_at, created_at, updated_at")
      .maybeSingle();

    if (error) {
      if (isMissingSocialTableError(error)) {
        return NextResponse.json(
          { error: "Social cohort tables are not migrated yet." },
          { status: 503 },
        );
      }

      console.error("Failed to transition challenge lifecycle.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update challenge lifecycle." }, { status: 500 });
    }

    return NextResponse.json({
      challenge: mapChallenge(data as ChallengeRow),
    });
  }

  const { data: participantRow, error: participantError } = await admin
    .from("social_challenge_participants")
    .select("status")
    .eq("challenge_id", challengeId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (participantError) {
    if (isMissingSocialTableError(participantError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to verify challenge participant.", toSafeErrorRecord(participantError));
    return NextResponse.json({ error: "Failed to verify challenge participant." }, { status: 500 });
  }

  if (!participantRow || participantRow.status !== "active") {
    return NextResponse.json(
      { error: "Join the challenge before submitting leaderboard events." },
      { status: 403 },
    );
  }

  if (challenge.status !== "active") {
    return NextResponse.json(
      { error: "Challenge is not active." },
      { status: 409 },
    );
  }

  const validatedEvent = validateChallengeEventPayload({
    source: parsed.data.source,
    sourceEventId: parsed.data.sourceEventId,
    scorePercentage: parsed.data.scorePercentage,
    totalQuestions: parsed.data.totalQuestions,
    completedAt: parsed.data.completedAt,
  });

  if (!validatedEvent.ok) {
    return NextResponse.json(
      {
        error: "Challenge event failed validation and cannot affect the leaderboard.",
        reason: validatedEvent.reason,
      },
      { status: 400 },
    );
  }

  const safeMetadata = sanitizeChallengeEventMetadata(parsed.data.metadata ?? {});

  const { data: insertedEvent, error: eventInsertError } = await admin
    .from("social_challenge_events")
    .insert({
      cohort_id: cohortId,
      challenge_id: challengeId,
      user_id: user.id,
      event_type: validatedEvent.event.eventType,
      source: validatedEvent.event.source,
      source_event_id: validatedEvent.event.sourceEventId,
      score_percentage: validatedEvent.event.scorePercentage,
      total_questions: validatedEvent.event.totalQuestions,
      points_awarded: validatedEvent.event.pointsAwarded,
      validated: true,
      moderation_state: "approved",
      metadata: {
        ...safeMetadata,
        eventFingerprint: validatedEvent.event.fingerprint,
      },
      created_at: validatedEvent.event.completedAt,
    })
    .select("id, event_type, source, source_event_id, points_awarded, validated, moderation_state, created_at")
    .maybeSingle();

  if (eventInsertError) {
    const code = String((eventInsertError as { code?: unknown }).code ?? "");
    if (code === "23505") {
      return NextResponse.json(
        { error: "Duplicate event. This source event already contributed to the leaderboard." },
        { status: 409 },
      );
    }

    if (isMissingSocialTableError(eventInsertError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to insert challenge event.", toSafeErrorRecord(eventInsertError));
    return NextResponse.json({ error: "Failed to record challenge event." }, { status: 500 });
  }

  const { data: currentLeaderboardRow, error: currentLeaderboardError } = await admin
    .from("social_challenge_leaderboard")
    .select("user_id, total_points, validated_event_count, updated_at")
    .eq("challenge_id", challengeId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (currentLeaderboardError) {
    if (isMissingSocialTableError(currentLeaderboardError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to read current leaderboard row.", toSafeErrorRecord(currentLeaderboardError));
    return NextResponse.json({ error: "Failed to update leaderboard." }, { status: 500 });
  }

  const nextLeaderboardRow = applyValidatedEventToLeaderboard(
    currentLeaderboardRow
      ? {
        userId: currentLeaderboardRow.user_id,
        totalPoints: currentLeaderboardRow.total_points,
        validatedEventCount: currentLeaderboardRow.validated_event_count,
        updatedAt: currentLeaderboardRow.updated_at,
      }
      : null,
    validatedEvent.event,
    user.id,
  );

  const { error: leaderboardUpsertError } = await admin
    .from("social_challenge_leaderboard")
    .upsert({
      cohort_id: cohortId,
      challenge_id: challengeId,
      user_id: user.id,
      total_points: nextLeaderboardRow.totalPoints,
      validated_event_count: nextLeaderboardRow.validatedEventCount,
      updated_at: nextLeaderboardRow.updatedAt,
    }, {
      onConflict: "challenge_id,user_id",
    });

  if (leaderboardUpsertError) {
    if (isMissingSocialTableError(leaderboardUpsertError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to upsert leaderboard row.", toSafeErrorRecord(leaderboardUpsertError));
    return NextResponse.json({ error: "Failed to update leaderboard." }, { status: 500 });
  }

  const { data: leaderboardRows, error: leaderboardReadError } = await admin
    .from("social_challenge_leaderboard")
    .select("user_id, total_points, validated_event_count, updated_at")
    .eq("challenge_id", challengeId)
    .order("total_points", { ascending: false })
    .order("validated_event_count", { ascending: false })
    .order("updated_at", { ascending: true })
    .order("user_id", { ascending: true })
    .limit(100);

  if (leaderboardReadError) {
    if (isMissingSocialTableError(leaderboardReadError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to read leaderboard rankings.", toSafeErrorRecord(leaderboardReadError));
    return NextResponse.json({ error: "Leaderboard updated but ranking lookup failed." }, { status: 500 });
  }

  const rankedLeaderboard = rankChallengeLeaderboard(
    ((leaderboardRows ?? []) as LeaderboardRow[]).map((row) => ({
      userId: row.user_id,
      totalPoints: row.total_points,
      validatedEventCount: row.validated_event_count,
      updatedAt: row.updated_at,
    })),
  );

  const yourRow = rankedLeaderboard.find((entry) => entry.userId === user.id) ?? {
    rank: rankedLeaderboard.length + 1,
    userId: user.id,
    totalPoints: nextLeaderboardRow.totalPoints,
    validatedEventCount: nextLeaderboardRow.validatedEventCount,
    updatedAt: nextLeaderboardRow.updatedAt,
  };

  return NextResponse.json({
    challenge: mapChallenge(challenge),
    event: {
      id: insertedEvent?.id ?? null,
      eventType: insertedEvent?.event_type ?? validatedEvent.event.eventType,
      source: insertedEvent?.source ?? validatedEvent.event.source,
      sourceEventId: insertedEvent?.source_event_id ?? validatedEvent.event.sourceEventId,
      pointsAwarded: insertedEvent?.points_awarded ?? validatedEvent.event.pointsAwarded,
      validated: insertedEvent?.validated ?? true,
      moderationState: insertedEvent?.moderation_state ?? "approved",
      createdAt: insertedEvent?.created_at ?? validatedEvent.event.completedAt,
    },
    leaderboardEntry: {
      rank: yourRow.rank,
      totalPoints: yourRow.totalPoints,
      validatedEventCount: yourRow.validatedEventCount,
    },
    nudge: buildChallengeAccountabilityNudge({
      rank: yourRow.rank,
      participantCount: rankedLeaderboard.length,
      pointsAwarded: validatedEvent.event.pointsAwarded,
    }),
  });
}