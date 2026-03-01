import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  userId: z.string().uuid(),
  isAdmin: z.boolean().optional(),
  isParent: z.boolean().optional(),
  confirmText: z.literal("UPDATE_ROLES"),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.userId === auth.userId && parsed.data.isAdmin === false) {
    return NextResponse.json({ error: "You cannot remove your own admin role." }, { status: 400 });
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "user_role_update",
    windowSeconds: 3600,
    maxActions: 80,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Rate limit exceeded for role updates." }, { status: 429 });
  }

  const updatePayload: Record<string, unknown> = {};
  if (typeof parsed.data.isAdmin === "boolean") {
    updatePayload.is_admin = parsed.data.isAdmin;
  }
  if (typeof parsed.data.isParent === "boolean") {
    updatePayload.is_parent = parsed.data.isParent;
  }

  if (Object.keys(updatePayload).length === 0) {
    return NextResponse.json({ error: "No role changes provided." }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin
    .from("user_profiles")
    .update(updatePayload)
    .eq("user_id", parsed.data.userId);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "user_role_update",
    targetUserId: parsed.data.userId,
    metadata: {
      isAdmin: parsed.data.isAdmin ?? null,
      isParent: parsed.data.isParent ?? null,
    },
  });

  return NextResponse.json({ success: true });
}

