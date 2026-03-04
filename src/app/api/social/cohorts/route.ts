import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  SOCIAL_COHORT_VISIBILITIES,
  moderateUserGeneratedText,
  type SocialCohortVisibility,
} from "@/lib/social/cohort-challenges";
import { isMissingSocialTableError } from "@/lib/social/errors";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(25),
});

const postSchema = z.object({
  name: z.string().trim().min(1).max(80),
  description: z.string().trim().max(240).optional(),
  visibility: z.enum(SOCIAL_COHORT_VISIBILITIES).default("invite_only"),
  maxMemberCount: z.coerce.number().int().min(2).max(500).default(30),
});

type CohortRow = {
  id: string;
  owner_user_id: string;
  name: string;
  description: string | null;
  visibility: SocialCohortVisibility;
  join_code: string;
  max_member_count: number;
  moderation_state: "pending" | "approved" | "rejected";
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

type CohortMembershipRow = {
  cohort_id: string;
  role: "owner" | "moderator" | "member";
  status: "active" | "removed" | "blocked";
  joined_at: string;
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

function buildJoinCode() {
  return randomBytes(6).toString("hex").toUpperCase();
}

function mapCohort(row: CohortRow, membership: CohortMembershipRow | null) {
  return {
    id: row.id,
    ownerUserId: row.owner_user_id,
    name: row.name,
    description: row.description,
    visibility: row.visibility,
    joinCode: row.join_code,
    maxMemberCount: row.max_member_count,
    moderationState: row.moderation_state,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    membership: membership
      ? {
        role: membership.role,
        status: membership.status,
        joinedAt: membership.joined_at,
      }
      : null,
  };
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const query = querySchema.safeParse({
    limit: new URL(request.url).searchParams.get("limit") ?? undefined,
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
  const { data: membershipRows, error: membershipError } = await admin
    .from("social_cohort_members")
    .select("cohort_id, role, status, joined_at")
    .eq("user_id", user.id)
    .eq("status", "active")
    .order("joined_at", { ascending: false })
    .limit(query.data.limit);

  if (membershipError) {
    if (isMissingSocialTableError(membershipError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load social cohort memberships.", toSafeErrorRecord(membershipError));
    return NextResponse.json({ error: "Failed to load social cohorts." }, { status: 500 });
  }

  const memberships = (membershipRows ?? []) as CohortMembershipRow[];
  const cohortIds = Array.from(new Set(memberships.map((entry) => entry.cohort_id)));
  if (cohortIds.length === 0) {
    return NextResponse.json({ cohorts: [] });
  }

  const { data: cohortRows, error: cohortError } = await admin
    .from("social_cohorts")
    .select("id, owner_user_id, name, description, visibility, join_code, max_member_count, moderation_state, is_active, created_at, updated_at")
    .in("id", cohortIds)
    .order("updated_at", { ascending: false });

  if (cohortError) {
    if (isMissingSocialTableError(cohortError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load social cohorts.", toSafeErrorRecord(cohortError));
    return NextResponse.json({ error: "Failed to load social cohorts." }, { status: 500 });
  }

  const membershipByCohortId = new Map(memberships.map((entry) => [entry.cohort_id, entry]));
  const cohorts = ((cohortRows ?? []) as CohortRow[]).map((row) =>
    mapCohort(row, membershipByCohortId.get(row.id) ?? null));

  return NextResponse.json({ cohorts });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:post", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const moderatedName = moderateUserGeneratedText(parsed.data.name, {
    maxLength: 80,
  });
  if (!moderatedName.ok) {
    return NextResponse.json(
      {
        error: "Cohort name failed moderation.",
        details: moderatedName,
      },
      { status: 400 },
    );
  }

  const moderatedDescription = moderateUserGeneratedText(parsed.data.description ?? "", {
    maxLength: 240,
    allowEmpty: true,
  });
  if (!moderatedDescription.ok) {
    return NextResponse.json(
      {
        error: "Cohort description failed moderation.",
        details: moderatedDescription,
      },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();

  let createdCohort: CohortRow | null = null;
  let lastInsertError: unknown = null;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const joinCode = buildJoinCode();
    const { data, error } = await admin
      .from("social_cohorts")
      .insert({
        owner_user_id: user.id,
        name: moderatedName.sanitized,
        description: moderatedDescription.sanitized || null,
        visibility: parsed.data.visibility,
        join_code: joinCode,
        max_member_count: parsed.data.maxMemberCount,
        moderation_state: "approved",
      })
      .select("id, owner_user_id, name, description, visibility, join_code, max_member_count, moderation_state, is_active, created_at, updated_at")
      .maybeSingle();

    if (!error && data) {
      createdCohort = data as CohortRow;
      break;
    }

    lastInsertError = error;
    const maybeCode = String((error as { code?: unknown } | null)?.code ?? "");
    if (maybeCode !== "23505") {
      break;
    }
  }

  if (!createdCohort) {
    if (isMissingSocialTableError(lastInsertError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to create social cohort.", toSafeErrorRecord(lastInsertError));
    return NextResponse.json({ error: "Failed to create social cohort." }, { status: 500 });
  }

  const { data: membershipData, error: membershipError } = await admin
    .from("social_cohort_members")
    .upsert({
      cohort_id: createdCohort.id,
      user_id: user.id,
      role: "owner",
      status: "active",
    }, {
      onConflict: "cohort_id,user_id",
    })
    .select("cohort_id, role, status, joined_at")
    .maybeSingle();

  if (membershipError) {
    if (isMissingSocialTableError(membershipError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to create social cohort membership.", toSafeErrorRecord(membershipError));
    return NextResponse.json({ error: "Failed to finalize cohort creation." }, { status: 500 });
  }

  return NextResponse.json({
    cohort: mapCohort(createdCohort, (membershipData as CohortMembershipRow | null) ?? null),
  });
}