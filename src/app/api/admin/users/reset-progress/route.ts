import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";

const requestSchema = z.object({
  userId: z.string().uuid(),
  scope: z.enum(["progress", "mastery", "all"]).default("all"),
  confirmText: z.literal("RESET_PROGRESS"),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "user_reset_progress",
    windowSeconds: 3600,
    maxActions: 40,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for progress reset actions." },
      { status: 429 }
    );
  }

  const admin = createSupabaseAdminClient();

  if (payload.data.scope === "progress" || payload.data.scope === "all") {
    const { error } = await admin
      .from("user_learning_progress")
      .delete()
      .eq("user_id", payload.data.userId);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  if (payload.data.scope === "mastery" || payload.data.scope === "all") {
    const { error } = await admin
      .from("user_skill_mastery")
      .delete()
      .eq("user_id", payload.data.userId);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "user_reset_progress",
    targetUserId: payload.data.userId,
    metadata: { scope: payload.data.scope },
  });

  return NextResponse.json({ success: true });
}
