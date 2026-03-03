/**
 * GET  /api/social/circles      — List user's study circles
 * POST /api/social/circles      — Create a new study circle
 * PUT  /api/social/circles      — Join a circle by invite code
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  createStudyCircle,
  joinCircleByCode,
  getUserCircles,
} from "@/lib/social/study-circles";

const createSchema = z.object({
  name: z.string().min(2).max(60),
  description: z.string().max(300).optional(),
  subject: z.string().max(60).optional(),
  maxMembers: z.number().int().min(2).max(20).optional(),
  isPublic: z.boolean().optional(),
});

const joinSchema = z.object({
  inviteCode: z.string().min(4).max(10),
});

export async function GET(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:circles:get", {
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

    const circles = await getUserCircles(supabase, user.id);
    return NextResponse.json({ circles });
  } catch (error) {
    console.error("Circles GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:circles:create", {
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

    const { circle, error } = await createStudyCircle(supabase, user.id, validation.data);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ circle }, { status: 201 });
  } catch (error) {
    console.error("Circles POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const rl = await enforceIpRateLimit(request, "api:social:circles:join", {
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
        { error: "Invalid invite code format" },
        { status: 400 },
      );
    }

    const { circleId, error } = await joinCircleByCode(
      supabase,
      user.id,
      validation.data.inviteCode,
    );
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ circleId, joined: true });
  } catch (error) {
    console.error("Circles PUT error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
