import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { processModerationActionQueue, processModerationQueue } from "@/lib/moderation/consensus";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  limit: z.number().int().min(1).max(30).optional(),
  applyActions: z.boolean().optional().default(true),
  actionLimit: z.number().int().min(1).max(100).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  try {
    const queueResult = await processModerationQueue(admin, {
      limit: payload.data.limit,
    });
    const actionResult = payload.data.applyActions
      ? await processModerationActionQueue(admin, {
          limit: payload.data.actionLimit ?? payload.data.limit ?? 12,
        })
      : null;
    return NextResponse.json({
      success: true,
      result: {
        queue: queueResult,
        actions: actionResult,
      },
    });
  } catch (error) {
    console.error("Moderation queue run failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run moderation queue." },
      { status: 500 },
    );
  }
}
