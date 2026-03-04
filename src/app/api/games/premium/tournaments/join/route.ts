import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  challengeId: z.string().uuid(),
});

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSeconds) },
    },
  );
}

function premiumRequiredResponse() {
  return NextResponse.json(
    {
      error: "Premium subscription required for tournaments.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:tournaments:join:post", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const premium = await isPremiumUserWithClient(supabase, user.id);
    if (!premium) return premiumRequiredResponse();

    const body = await request.json().catch(() => null);
    const parsed = postSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
    }

    const admin = createSupabaseAdminClient();
    const nowIso = new Date().toISOString();
    const challenge = await admin
      .from("social_challenges")
      .select("id, cohort_id, title, starts_at, ends_at, status")
      .eq("id", parsed.data.challengeId)
      .maybeSingle();

    if (challenge.error || !challenge.data) {
      return NextResponse.json({ error: "Tournament not found." }, { status: 404 });
    }
    if (challenge.data.status !== "active") {
      return NextResponse.json({ error: "Tournament is not active." }, { status: 409 });
    }
    if (challenge.data.starts_at > nowIso || challenge.data.ends_at < nowIso) {
      return NextResponse.json({ error: "Tournament is not currently joinable." }, { status: 409 });
    }

    const membership = await admin
      .from("social_cohort_members")
      .select("id")
      .eq("cohort_id", challenge.data.cohort_id)
      .eq("user_id", user.id)
      .eq("status", "active")
      .maybeSingle();

    if (membership.error || !membership.data) {
      return NextResponse.json(
        { error: "You are not an active member of this cohort tournament." },
        { status: 403 },
      );
    }

    const join = await admin
      .from("social_challenge_participants")
      .upsert({
        cohort_id: challenge.data.cohort_id,
        challenge_id: challenge.data.id,
        user_id: user.id,
        status: "active",
      }, {
        onConflict: "challenge_id,user_id",
      });

    if (join.error) {
      return NextResponse.json({ error: "Failed to join tournament." }, { status: 500 });
    }

    return NextResponse.json({
      joined: true,
      tournament: {
        id: challenge.data.id,
        cohortId: challenge.data.cohort_id,
        title: challenge.data.title,
      },
    });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/tournaments/join:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
