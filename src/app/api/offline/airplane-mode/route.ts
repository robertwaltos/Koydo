/**
 * GET  /api/offline/airplane-mode            — Estimate download size.
 * POST /api/offline/airplane-mode            — Generate & return the full pack.
 *
 * Both endpoints require premium entitlement (paid plans only).
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { checkPremiumAccessServer } from "@/lib/billing/entitlement-check";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  estimateAirplaneModePack,
  generateAirplaneModePack,
} from "@/lib/offline/offline-packs";

const optionsSchema = z.object({
  subjects: z.array(z.string()).optional(),
  maxHours: z.number().min(1).max(12).optional(),
});

// ── GET: Estimate size before downloading ────────────────────────

export async function GET(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:airplane:estimate", {
      max: 20,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
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

    // Require premium plan
    const entitlement = await checkPremiumAccessServer(supabase, user.id);
    if (!entitlement.active) {
      return NextResponse.json(
        { error: "Airplane Mode requires a paid plan.", code: "PREMIUM_REQUIRED" },
        { status: 403 },
      );
    }

    const url = new URL(request.url);
    const subjectsRaw = url.searchParams.get("subjects");
    const maxHoursRaw = url.searchParams.get("maxHours");

    const subjects = subjectsRaw ? subjectsRaw.split(",").filter(Boolean) : undefined;
    const maxHours = maxHoursRaw ? parseInt(maxHoursRaw, 10) : 6;

    const estimate = estimateAirplaneModePack({
      subjects,
      maxHours: Math.min(Math.max(maxHours, 1), 12),
    });

    return NextResponse.json({
      ...estimate,
      plan: entitlement.plan,
      isPremium: true,
    });
  } catch (error) {
    console.error("Airplane mode estimate error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── POST: Generate and deliver the pack ──────────────────────────

export async function POST(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:airplane:download", {
      max: 3,
      windowMs: 300_000, // 3 downloads per 5 minutes
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
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

    // Require premium plan
    const entitlement = await checkPremiumAccessServer(supabase, user.id);
    if (!entitlement.active) {
      return NextResponse.json(
        { error: "Airplane Mode requires a paid plan.", code: "PREMIUM_REQUIRED" },
        { status: 403 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const validation = optionsSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid options", details: validation.error.issues },
        { status: 400 },
      );
    }

    const { subjects, maxHours } = validation.data;

    const pack = generateAirplaneModePack({
      subjects,
      maxHours: maxHours ?? 6,
    });

    return NextResponse.json(pack, {
      headers: {
        "Cache-Control": "private, no-cache",
        "X-Pack-Version": pack.manifest.version,
        "X-Content-Hash": pack.manifest.contentHash,
        "X-Airplane-Mode": "true",
      },
    });
  } catch (error) {
    console.error("Airplane mode download error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
