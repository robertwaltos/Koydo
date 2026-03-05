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
  isOwner: z.boolean().optional(),
  isParent: z.boolean().optional(),
  isTeacher: z.boolean().optional(),
  isSchool: z.boolean().optional(),
  isPartner: z.boolean().optional(),
  isInvestor: z.boolean().optional(),
  isSupport: z.boolean().optional(),
  dataMode: z.enum(["live", "beta"]).optional(),
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
  if (parsed.data.userId === auth.userId && parsed.data.isOwner === false) {
    return NextResponse.json({ error: "You cannot remove your own owner role." }, { status: 400 });
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
  if (typeof parsed.data.isOwner === "boolean") {
    updatePayload.is_owner = parsed.data.isOwner;
    if (parsed.data.isOwner) {
      updatePayload.is_admin = true;
    }
  }
  if (typeof parsed.data.isParent === "boolean") {
    updatePayload.is_parent = parsed.data.isParent;
  }
  if (typeof parsed.data.isTeacher === "boolean") {
    updatePayload.is_teacher = parsed.data.isTeacher;
  }
  if (typeof parsed.data.isSchool === "boolean") {
    updatePayload.is_school = parsed.data.isSchool;
  }
  if (typeof parsed.data.isPartner === "boolean") {
    updatePayload.is_partner = parsed.data.isPartner;
  }
  if (typeof parsed.data.isInvestor === "boolean") {
    updatePayload.is_investor = parsed.data.isInvestor;
  }
  if (typeof parsed.data.isSupport === "boolean") {
    updatePayload.is_support = parsed.data.isSupport;
  }
  if (parsed.data.dataMode) {
    updatePayload.data_mode = parsed.data.dataMode;
  }

  if (Object.keys(updatePayload).length === 0) {
    return NextResponse.json({ error: "No role changes provided." }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();

  const { data: targetProfile, error: targetProfileError } = await admin
    .from("user_profiles")
    .select("is_owner")
    .eq("user_id", parsed.data.userId)
    .maybeSingle<{ is_owner: boolean }>();
  if (targetProfileError || !targetProfile) {
    return NextResponse.json({ error: "Target user profile not found." }, { status: 404 });
  }

  if (parsed.data.isOwner === false && targetProfile.is_owner) {
    const ownerCountResult = await admin
      .from("user_profiles")
      .select("user_id", { count: "exact", head: true })
      .eq("is_owner", true);
    if (ownerCountResult.error) {
      console.error("Unexpected API error.", toSafeErrorRecord(ownerCountResult.error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
    const ownerCount = ownerCountResult.count ?? 0;
    if (ownerCount <= 1) {
      return NextResponse.json({ error: "Cannot remove the last owner profile." }, { status: 400 });
    }
  }

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
      isOwner: parsed.data.isOwner ?? null,
      isParent: parsed.data.isParent ?? null,
      isTeacher: parsed.data.isTeacher ?? null,
      isSchool: parsed.data.isSchool ?? null,
      isPartner: parsed.data.isPartner ?? null,
      isInvestor: parsed.data.isInvestor ?? null,
      isSupport: parsed.data.isSupport ?? null,
      dataMode: parsed.data.dataMode ?? null,
    },
  });

  return NextResponse.json({ success: true });
}

