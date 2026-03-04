import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { requeueStaleModerationJobs } from "@/lib/moderation/consensus";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  maxAgeMinutes: z.number().int().min(5).max(10080).optional(),
  limit: z.number().int().min(1).max(500).optional(),
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
    const result = await requeueStaleModerationJobs(
      admin,
      payload.data.maxAgeMinutes,
      payload.data.limit,
    );
    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Moderation stale-job requeue failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to requeue stale moderation jobs." },
      { status: 500 },
    );
  }
}
