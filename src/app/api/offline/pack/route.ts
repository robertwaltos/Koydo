/**
 * GET  /api/offline/pack — Generate and return an offline lesson pack.
 * POST /api/offline/sync — Sync offline progress entries back to the server.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  generateOfflinePack,
  deduplicateOfflineProgress,
  resolveConflicts,
  type OfflineProgressEntry,
} from "@/lib/offline/offline-packs";

const syncSchema = z.object({
  packId: z.string().min(1),
  clientDeviceId: z.string().min(1).max(200),
  entries: z
    .array(
      z.object({
        lessonId: z.string().min(1),
        moduleId: z.string().min(1),
        questionId: z.string().min(1),
        selectedOptionId: z.string().min(1),
        correct: z.boolean(),
        answeredAt: z.string().datetime(),
        clientEventId: z.string().uuid(),
      }),
    )
    .min(1)
    .max(500),
});

export async function GET(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:offline:pack", {
      max: 5,
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

    const url = new URL(request.url);
    const moduleIds = url.searchParams.get("moduleIds")?.split(",").filter(Boolean);
    const subject = url.searchParams.get("subject")?.trim();
    const maxModules = parseInt(url.searchParams.get("maxModules") ?? "5", 10);

    const pack = generateOfflinePack({
      moduleIds,
      subject: subject || undefined,
      maxModules: Math.min(maxModules, 10),
    });

    return NextResponse.json(pack, {
      headers: {
        "Cache-Control": "private, max-age=3600",
        "X-Pack-Version": pack.manifest.version,
        "X-Content-Hash": pack.manifest.contentHash,
      },
    });
  } catch (error) {
    console.error("Offline pack generation error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:offline:sync", {
      max: 10,
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

    const body = await request.json().catch(() => ({}));
    const validation = syncSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid sync payload", details: validation.error.issues },
        { status: 400 },
      );
    }

    const { entries, packId, clientDeviceId } = validation.data;

    // Check for existing events to deduplicate
    const clientEventIds = entries.map((e) => e.clientEventId);
    const admin = createSupabaseAdminClient();

    const { data: existingEvents } = await admin
      .from("offline_sync_events")
      .select("client_event_id")
      .eq("user_id", user.id)
      .in("client_event_id", clientEventIds.slice(0, 100));

    const existingIds = new Set(
      (existingEvents ?? []).map((e: { client_event_id: string }) => e.client_event_id),
    );

    const { newEntries, duplicateCount } = deduplicateOfflineProgress(
      entries as OfflineProgressEntry[],
      existingIds,
    );

    // Resolve last-write-wins conflicts
    const resolved = resolveConflicts(newEntries);

    // Insert sync events
    if (resolved.length > 0) {
      const rows = resolved.map((entry) => ({
        user_id: user.id,
        client_event_id: entry.clientEventId,
        client_device_id: clientDeviceId,
        pack_id: packId,
        lesson_id: entry.lessonId,
        module_id: entry.moduleId,
        question_id: entry.questionId,
        selected_option_id: entry.selectedOptionId,
        correct: entry.correct,
        answered_at: entry.answeredAt,
      }));

      const { error: insertError } = await admin
        .from("offline_sync_events")
        .insert(rows);

      if (insertError) {
        console.error("Offline sync insert error:", toSafeErrorRecord(insertError));
        return NextResponse.json(
          {
            accepted: 0,
            duplicates: duplicateCount,
            rejected: resolved.length,
            errors: ["Failed to save sync events."],
          },
          { status: 500 },
        );
      }

      // Also insert into learning_events for mastery tracking
      const learningEvents = resolved.map((entry) => ({
        user_id: user.id,
        event_type: "question_answered" as const,
        lesson_id: entry.lessonId,
        module_id: entry.moduleId,
        metadata: {
          question_id: entry.questionId,
          correct: entry.correct,
          source: "offline_sync",
          client_device_id: clientDeviceId,
          answered_at: entry.answeredAt,
        },
      }));

      const { error: learningError } = await admin
        .from("learning_events")
        .insert(learningEvents);

      if (learningError) {
        console.error("Learning events sync error:", toSafeErrorRecord(learningError));
        // Non-blocking — sync events were saved
      }
    }

    return NextResponse.json({
      accepted: resolved.length,
      duplicates: duplicateCount,
      rejected: 0,
      errors: [],
    });
  } catch (error) {
    console.error("Offline sync error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
