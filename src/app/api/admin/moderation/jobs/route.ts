import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  sourceType: z.string().min(1).max(60).default("manual"),
  sourceRef: z.string().max(240).optional(),
  accountScopeUserId: z.string().uuid().optional(),
  content: z.string().min(1).max(12000),
  requestedAction: z.string().max(40).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("content_moderation_jobs")
    .select(
      "id,source_type,source_ref,account_scope_user_id,status,attempt_count,max_attempts,consensus_action,consensus_confidence,consensus_reason,run_started_at,run_completed_at,error,created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) {
    console.error("Failed to load moderation jobs.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Unable to load moderation jobs." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    jobs: data ?? [],
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = createSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("content_moderation_jobs")
    .insert({
      created_by: auth.userId,
      source_type: payload.data.sourceType,
      source_ref: payload.data.sourceRef ?? null,
      account_scope_user_id: payload.data.accountScopeUserId ?? null,
      content_text: payload.data.content,
      requested_action: payload.data.requestedAction ?? null,
      status: "queued",
    })
    .select("id,status,created_at")
    .single<{ id: string; status: string; created_at: string }>();
  if (error || !data) {
    console.error("Failed to create moderation job.", toSafeErrorRecord(error));
    return NextResponse.json({ error: error?.message ?? "Unable to create moderation job." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    job: data,
  });
}
