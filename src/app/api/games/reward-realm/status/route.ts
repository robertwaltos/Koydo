import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { computeRewardRealmMasteryFromEvents } from "@/lib/games/reward-realm";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  studentProfileId: z.string().uuid().optional(),
});

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    {
      error: "Too many requests. Please retry shortly.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

async function validateProfileOwnership(
  userId: string,
  studentProfileId: string | undefined,
) {
  if (!studentProfileId) return { errorResponse: null };

  const supabase = await createSupabaseServerClient();
  const { data: profile, error } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", studentProfileId)
    .eq("account_id", userId)
    .maybeSingle();

  if (error || !profile) {
    return {
      errorResponse: NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      ),
    };
  }

  return { errorResponse: null };
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:reward-realm-status:get", {
    max: 120,
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

    const query = querySchema.safeParse({
      studentProfileId: request.nextUrl.searchParams.get("studentProfileId") ?? undefined,
    });

    if (!query.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: query.error.flatten() },
        { status: 400 },
      );
    }

    const ownership = await validateProfileOwnership(user.id, query.data.studentProfileId);
    if (ownership.errorResponse) return ownership.errorResponse;

    const eventsQuery = supabase
      .from("gamification_events")
      .select("metadata")
      .eq("user_id", user.id)
      .eq("event_type", "points_awarded")
      .order("created_at", { ascending: false })
      .limit(600);

    if (query.data.studentProfileId) {
      eventsQuery.eq("student_profile_id", query.data.studentProfileId);
    }

    const { data: events, error: eventsError } = await eventsQuery;

    if (eventsError) {
      if (isMissingTableError(eventsError.message)) {
        return NextResponse.json(
          { error: "Gamification tables not migrated yet." },
          { status: 503 },
        );
      }

      return NextResponse.json(
        {
          error: "Failed to load educational mastery history.",
        },
        { status: 500 },
      );
    }

    const mastery = computeRewardRealmMasteryFromEvents(events ?? []);
    return NextResponse.json({
      unlocked: mastery.unlocked,
      mastery,
    });
  } catch (error) {
    console.error(
      "Unexpected error in /api/games/reward-realm/status:",
      toSafeErrorRecord(error),
    );
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}

