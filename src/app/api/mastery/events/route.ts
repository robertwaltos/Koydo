/**
 * POST /api/mastery/events
 *
 * Accepts learning-event records from StoryForge quiz interactions
 * and other mastery-tracking sources. Events are persisted to
 * the mastery_events table for analytics and adaptive learning.
 *
 * Body: { event_type, module_id, score, metadata? }
 */

import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function POST(req: NextRequest) {
  /* ── Rate-limit ─────────────────────────────────────────────── */
  const rateLimit = await enforceIpRateLimit(req, "mastery-events", {
    windowMs: 60_000,
    max: 120,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      { status: 429 },
    );
  }

  /* ── Auth ────────────────────────────────────────────────────── */
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  /* ── Parse body ──────────────────────────────────────────────── */
  let body: {
    event_type?: string;
    module_id?: string;
    score?: number;
    metadata?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { event_type, module_id, score, metadata } = body;

  if (!event_type || typeof event_type !== "string") {
    return NextResponse.json(
      { error: "event_type is required" },
      { status: 400 },
    );
  }

  if (!module_id || typeof module_id !== "string") {
    return NextResponse.json(
      { error: "module_id is required" },
      { status: 400 },
    );
  }

  /* ── Persist ─────────────────────────────────────────────────── */
  try {
    const { error: insertError } = await supabase
      .from("mastery_events")
      .insert({
        user_id: user.id,
        event_type,
        module_id,
        score: typeof score === "number" ? score : null,
        metadata: metadata ?? null,
      });

    if (insertError) {
      // Table may not exist yet in some environments — log but don't crash
      const isMissingTable =
        insertError.message?.toLowerCase().includes("does not exist") ||
        insertError.code === "42P01";

      if (isMissingTable) {
        // Silently accept — table will be created during migration
        return NextResponse.json({ ok: true, persisted: false });
      }

      console.error(
        "[mastery/events] insert error:",
        toSafeErrorRecord(insertError),
      );
      return NextResponse.json(
        { error: "Failed to persist event" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, persisted: true });
  } catch (err) {
    console.error(
      "[mastery/events] unexpected error:",
      toSafeErrorRecord(err),
    );
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 },
    );
  }
}
