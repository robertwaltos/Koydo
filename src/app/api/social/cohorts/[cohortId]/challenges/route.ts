import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  SOCIAL_CHALLENGE_STATUSES,
  isValidChallengeLifecycleTransition,
  moderateUserGeneratedText,
  type SocialChallengeStatus,
} from "@/lib/social/cohort-challenges";
import { isMissingSocialTableError } from "@/lib/social/errors";
import { requireCohortMembership } from "@/lib/social/membership";
import { SOCIAL_COHORT_ROLES } from "@/lib/social/roles";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(25),
  status: z.enum(SOCIAL_CHALLENGE_STATUSES).optional(),
});

const postSchema = z.object({
  title: z.string().trim().min(1).max(120),
  description: z.string().trim().max(400).optional(),
  startsAt: z.string().datetime().optional(),
  endsAt: z.string().datetime().optional(),
  initialStatus: z.enum(["draft", "active"]).default("draft"),
});

type SocialChallengeRow = {
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

function mapChallenge(row: SocialChallengeRow) {
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

export async function GET(
  request: Request,
  context: { params: Promise<{ cohortId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:challenges:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { cohortId } = await context.params;
  const query = querySchema.safeParse({
    limit: new URL(request.url).searchParams.get("limit") ?? undefined,
    status: new URL(request.url).searchParams.get("status") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
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

  const admin = createSupabaseAdminClient();
  const membership = await requireCohortMembership(admin, user.id, cohortId, SOCIAL_COHORT_ROLES);
  if (!membership.ok) return membership.response;

  let challengesQuery = admin
    .from("social_challenges")
    .select("id, cohort_id, title, description, starts_at, ends_at, status, moderation_state, created_by, activated_at, completed_at, created_at, updated_at")
    .eq("cohort_id", cohortId)
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.status) {
    challengesQuery = challengesQuery.eq("status", query.data.status);
  }

  const { data, error } = await challengesQuery;
  if (error) {
    if (isMissingSocialTableError(error)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load cohort challenges.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load cohort challenges." }, { status: 500 });
  }

  return NextResponse.json({
    challenges: ((data ?? []) as SocialChallengeRow[]).map(mapChallenge),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ cohortId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:challenges:post", {
    max: 50,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { cohortId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireCohortMembership(admin, user.id, cohortId, ["owner", "moderator"]);
  if (!membership.ok) return membership.response;

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const moderatedTitle = moderateUserGeneratedText(parsed.data.title, {
    maxLength: 120,
  });
  if (!moderatedTitle.ok) {
    return NextResponse.json(
      {
        error: "Challenge title failed moderation.",
        details: moderatedTitle,
      },
      { status: 400 },
    );
  }

  const moderatedDescription = moderateUserGeneratedText(parsed.data.description ?? "", {
    maxLength: 400,
    allowEmpty: true,
  });
  if (!moderatedDescription.ok) {
    return NextResponse.json(
      {
        error: "Challenge description failed moderation.",
        details: moderatedDescription,
      },
      { status: 400 },
    );
  }

  const startsAt = parsed.data.startsAt ?? new Date().toISOString();
  const endsAt = parsed.data.endsAt ?? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const startsAtTs = Date.parse(startsAt);
  const endsAtTs = Date.parse(endsAt);

  if (!Number.isFinite(startsAtTs) || !Number.isFinite(endsAtTs) || endsAtTs <= startsAtTs) {
    return NextResponse.json(
      { error: "Challenge endsAt must be after startsAt." },
      { status: 400 },
    );
  }

  const nextStatus = parsed.data.initialStatus;
  if (!isValidChallengeLifecycleTransition("draft", nextStatus)) {
    return NextResponse.json(
      { error: "Invalid initial challenge status." },
      { status: 400 },
    );
  }

  const now = new Date().toISOString();
  const { data, error } = await admin
    .from("social_challenges")
    .insert({
      cohort_id: cohortId,
      created_by: user.id,
      title: moderatedTitle.sanitized,
      description: moderatedDescription.sanitized || null,
      starts_at: new Date(startsAtTs).toISOString(),
      ends_at: new Date(endsAtTs).toISOString(),
      status: nextStatus,
      moderation_state: "approved",
      activated_at: nextStatus === "active" ? now : null,
      completed_at: null,
    })
    .select("id, cohort_id, title, description, starts_at, ends_at, status, moderation_state, created_by, activated_at, completed_at, created_at, updated_at")
    .maybeSingle();

  if (error) {
    if (isMissingSocialTableError(error)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to create cohort challenge.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create cohort challenge." }, { status: 500 });
  }

  return NextResponse.json({
    challenge: mapChallenge(data as SocialChallengeRow),
  });
}