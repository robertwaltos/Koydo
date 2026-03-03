/**
 * GET  /api/offline/airplane-mode            — Estimate download size.
 * POST /api/offline/airplane-mode            — Generate & return the full pack.
 *
 * Both endpoints require premium entitlement (paid plans only).
 *
 * Anti-abuse limits (per user, per calendar day UTC):
 *   - Max 2 downloads per day
 *   - Max 12 hours of total downloaded content per day
 *   - Estimate endpoint: 10 calls per hour (IP-based)
 *   - Download endpoint: 2 per hour (IP-based burst guard)
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { checkPremiumAccessServer } from "@/lib/billing/entitlement-check";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  estimateAirplaneModePack,
  generateAirplaneModePack,
} from "@/lib/offline/offline-packs";

// ── Constants ────────────────────────────────────────────────────

/** Max distinct downloads per user per calendar day (UTC). */
const MAX_DOWNLOADS_PER_DAY = 2;
/** Max total content hours a user can download per calendar day. */
const MAX_HOURS_PER_DAY = 12;

const optionsSchema = z.object({
  subjects: z.array(z.string()).optional(),
  maxHours: z.number().min(1).max(12).optional(),
});

// ── Helpers ──────────────────────────────────────────────────────

/** Returns ISO string for the start of today (UTC). */
function todayUtcStart(): string {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  return d.toISOString();
}

/**
 * Check how many downloads (and total hours) a user has consumed today.
 * Reads from `airplane_mode_downloads` table; returns { count, totalHours }.
 */
async function getDailyUsage(
  userId: string,
): Promise<{ count: number; totalHours: number }> {
  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("airplane_mode_downloads")
      .select("hours_requested")
      .eq("user_id", userId)
      .gte("created_at", todayUtcStart());

    if (error || !data) return { count: 0, totalHours: 0 };

    const totalHours = data.reduce(
      (sum, row: { hours_requested: number }) => sum + (row.hours_requested ?? 0),
      0,
    );
    return { count: data.length, totalHours };
  } catch {
    // If table doesn't exist yet, allow the request (migration pending)
    return { count: 0, totalHours: 0 };
  }
}

/** Record a successful download for daily quota tracking. */
async function recordDownload(
  userId: string,
  hoursRequested: number,
  packId: string,
): Promise<void> {
  try {
    const admin = createSupabaseAdminClient();
    await admin.from("airplane_mode_downloads").insert({
      user_id: userId,
      hours_requested: hoursRequested,
      pack_id: packId,
    });
  } catch {
    // Non-blocking — download already succeeded
  }
}

// ── GET: Estimate size before downloading ────────────────────────

export async function GET(request: Request) {
  try {
    // IP burst guard: 10 estimates per hour
    const rateLimit = await enforceIpRateLimit(request, "api:airplane:estimate", {
      max: 10,
      windowMs: 3_600_000,
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

    // Include daily quota info so UI can show remaining allowance
    const usage = await getDailyUsage(user.id);
    const remainingDownloads = Math.max(0, MAX_DOWNLOADS_PER_DAY - usage.count);
    const remainingHours = Math.max(0, MAX_HOURS_PER_DAY - usage.totalHours);

    return NextResponse.json({
      ...estimate,
      plan: entitlement.plan,
      isPremium: true,
      dailyQuota: {
        downloadsUsed: usage.count,
        downloadsRemaining: remainingDownloads,
        hoursUsed: usage.totalHours,
        hoursRemaining: remainingHours,
        maxDownloadsPerDay: MAX_DOWNLOADS_PER_DAY,
        maxHoursPerDay: MAX_HOURS_PER_DAY,
      },
    });
  } catch (error) {
    console.error("Airplane mode estimate error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── POST: Generate and deliver the pack ──────────────────────────

export async function POST(request: Request) {
  try {
    // IP burst guard: 2 downloads per hour
    const rateLimit = await enforceIpRateLimit(request, "api:airplane:download", {
      max: 2,
      windowMs: 3_600_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
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

    const { subjects, maxHours: requestedHours } = validation.data;
    const hours = requestedHours ?? 6;

    // ── Per-user daily quota enforcement ───────────────────────────

    const usage = await getDailyUsage(user.id);

    if (usage.count >= MAX_DOWNLOADS_PER_DAY) {
      return NextResponse.json(
        {
          error: `Daily download limit reached (${MAX_DOWNLOADS_PER_DAY} per day). Resets at midnight UTC.`,
          code: "DAILY_DOWNLOAD_LIMIT",
          dailyQuota: {
            downloadsUsed: usage.count,
            downloadsRemaining: 0,
            hoursUsed: usage.totalHours,
            hoursRemaining: Math.max(0, MAX_HOURS_PER_DAY - usage.totalHours),
          },
        },
        { status: 429 },
      );
    }

    const remainingHours = MAX_HOURS_PER_DAY - usage.totalHours;
    if (remainingHours <= 0) {
      return NextResponse.json(
        {
          error: `Daily content limit reached (${MAX_HOURS_PER_DAY}h per day). Resets at midnight UTC.`,
          code: "DAILY_HOURS_LIMIT",
          dailyQuota: {
            downloadsUsed: usage.count,
            downloadsRemaining: Math.max(0, MAX_DOWNLOADS_PER_DAY - usage.count),
            hoursUsed: usage.totalHours,
            hoursRemaining: 0,
          },
        },
        { status: 429 },
      );
    }

    // Clamp requested hours to what the user has left today
    const effectiveHours = Math.min(hours, remainingHours);

    // ── Generate the pack ─────────────────────────────────────────

    const pack = generateAirplaneModePack({
      subjects,
      maxHours: effectiveHours,
    });

    // Record for daily quota tracking
    await recordDownload(user.id, effectiveHours, pack.manifest.packId);

    return NextResponse.json(pack, {
      headers: {
        "Cache-Control": "private, no-cache",
        "X-Pack-Version": pack.manifest.version,
        "X-Content-Hash": pack.manifest.contentHash,
        "X-Airplane-Mode": "true",
        "X-Hours-Requested": String(effectiveHours),
      },
    });
  } catch (error) {
    console.error("Airplane mode download error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
