import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingSocialTableError } from "@/lib/social/errors";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const postSchema = z.object({
  joinCode: z.string().trim().min(6).max(16),
});

type CohortRow = {
  id: string;
  name: string;
  description: string | null;
  visibility: "private" | "invite_only" | "public";
  join_code: string;
  max_member_count: number;
  moderation_state: "pending" | "approved" | "rejected";
  is_active: boolean;
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

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:join:post", {
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

  const admin = createSupabaseAdminClient();

  const { data: cohortData, error: cohortError } = await admin
    .from("social_cohorts")
    .select("id, name, description, visibility, join_code, max_member_count, moderation_state, is_active")
    .eq("join_code", parsed.data.joinCode.toUpperCase())
    .maybeSingle();

  if (cohortError) {
    if (isMissingSocialTableError(cohortError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to resolve social cohort join code.", toSafeErrorRecord(cohortError));
    return NextResponse.json({ error: "Failed to join social cohort." }, { status: 500 });
  }

  const cohort = cohortData as CohortRow | null;
  if (!cohort || !cohort.is_active) {
    return NextResponse.json({ error: "Invalid or inactive join code." }, { status: 404 });
  }

  if (cohort.moderation_state !== "approved") {
    return NextResponse.json(
      { error: "This cohort is currently unavailable due to moderation status." },
      { status: 403 },
    );
  }

  const { data: existingMembership, error: existingMembershipError } = await admin
    .from("social_cohort_members")
    .select("id, role, status, joined_at")
    .eq("cohort_id", cohort.id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingMembershipError) {
    if (isMissingSocialTableError(existingMembershipError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to check existing social cohort membership.", toSafeErrorRecord(existingMembershipError));
    return NextResponse.json({ error: "Failed to join social cohort." }, { status: 500 });
  }

  if (existingMembership && existingMembership.status === "active") {
    return NextResponse.json({
      cohort: {
        id: cohort.id,
        name: cohort.name,
        description: cohort.description,
        visibility: cohort.visibility,
      },
      membership: {
        role: existingMembership.role,
        status: existingMembership.status,
        joinedAt: existingMembership.joined_at,
      },
    });
  }

  if (existingMembership && existingMembership.status === "blocked") {
    return NextResponse.json(
      { error: "You are blocked from this cohort." },
      { status: 403 },
    );
  }

  const { count: activeMemberCount, error: countError } = await admin
    .from("social_cohort_members")
    .select("id", { head: true, count: "exact" })
    .eq("cohort_id", cohort.id)
    .eq("status", "active");

  if (countError) {
    if (isMissingSocialTableError(countError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to count social cohort members.", toSafeErrorRecord(countError));
    return NextResponse.json({ error: "Failed to join social cohort." }, { status: 500 });
  }

  if ((activeMemberCount ?? 0) >= cohort.max_member_count) {
    return NextResponse.json(
      { error: "This cohort is currently full." },
      { status: 409 },
    );
  }

  const { data: membershipData, error: membershipError } = await admin
    .from("social_cohort_members")
    .upsert({
      cohort_id: cohort.id,
      user_id: user.id,
      role: "member",
      status: "active",
    }, {
      onConflict: "cohort_id,user_id",
    })
    .select("id, role, status, joined_at")
    .maybeSingle();

  if (membershipError) {
    if (isMissingSocialTableError(membershipError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to join social cohort.", toSafeErrorRecord(membershipError));
    return NextResponse.json({ error: "Failed to join social cohort." }, { status: 500 });
  }

  return NextResponse.json({
    cohort: {
      id: cohort.id,
      name: cohort.name,
      description: cohort.description,
      visibility: cohort.visibility,
    },
    membership: {
      role: membershipData?.role ?? "member",
      status: membershipData?.status ?? "active",
      joinedAt: membershipData?.joined_at ?? new Date().toISOString(),
    },
  });
}
