/**
 * GET  /api/social/challenges  — List user's challenges
 * POST /api/social/challenges  — Create a new challenge
 * PUT  /api/social/challenges  — Join a challenge
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  createChallenge,
  joinChallenge,
  getUserChallenges,
} from "@/lib/social/challenges";

const createSchema = z.object({
  title: z.string().min(2).max(120),
  description: z.string().max(500).optional(),
  circleId: z.string().uuid().optional(),
  challengeType: z.enum(["xp_race", "lesson_count", "streak", "quiz_score"]),
  targetValue: z.number().int().min(1).max(10000),
  subject: z.string().max(60).optional(),
  endsAt: z.string().datetime(),
  maxParticipants: z.number().int().min(2).max(200).optional(),
});

const joinSchema = z.object({
  challengeId: z.string().uuid(),
});

export async function GET(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:challenges:get", {
      max: 30,
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

    const challenges = await getUserChallenges(supabase, user.id);
    return NextResponse.json({ challenges });
  } catch (error) {
    console.error("Challenges GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:challenges:create", {
      max: 5,
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

    const body = await request.json().catch(() => ({}));
    const validation = createSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.issues },
        { status: 400 },
      );
    }

    const { challenge, error } = await createChallenge(
      supabase,
      user.id,
      validation.data,
    );
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ challenge }, { status: 201 });
  } catch (error) {
    console.error("Challenges POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:challenges:join", {
      max: 10,
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

    const body = await request.json().catch(() => ({}));
    const validation = joinSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid challenge ID" },
        { status: 400 },
      );
    }

    const { error } = await joinChallenge(
      supabase,
      user.id,
      validation.data.challengeId,
    );
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ joined: true });
  } catch (error) {
    console.error("Challenges PUT error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
