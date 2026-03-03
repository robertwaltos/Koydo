import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import {
  getUserOverrides,
  setUserOverride,
  deleteUserOverride,
} from "@/lib/settings/per-user-overrides";
import { logAdminActionStrict } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const getOverridesSchema = z.object({
  userId: z.string().uuid(),
});

const setOverrideSchema = z.object({
  userId: z.string().uuid(),
  settingKey: z.string().min(1).max(100),
  value: z.unknown(),
  reason: z.string().max(500).optional(),
});

const deleteOverrideSchema = z.object({
  userId: z.string().uuid(),
  settingKey: z.string().min(1).max(100),
});

/**
 * GET /api/admin/settings/user-overrides?userId=...
 */
export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "userId query param required" }, { status: 400 });
    }

    const validation = getOverridesSchema.safeParse({ userId });
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    const overrides = await getUserOverrides(validation.data.userId);
    return NextResponse.json({ overrides });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * POST /api/admin/settings/user-overrides — Set a per-user override
 */
export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));
    const validation = setOverrideSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await setUserOverride({
      userId: validation.data.userId,
      settingKey: validation.data.settingKey,
      value: validation.data.value,
      reason: validation.data.reason,
      setBy: auth.userId,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "settings.user_override_set",
      targetUserId: validation.data.userId,
      metadata: {
        settingKey: validation.data.settingKey,
        value: validation.data.value,
        reason: validation.data.reason,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/settings/user-overrides — Remove a per-user override
 */
export async function DELETE(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));
    const validation = deleteOverrideSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await deleteUserOverride(
      validation.data.userId,
      validation.data.settingKey,
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "settings.user_override_deleted",
      targetUserId: validation.data.userId,
      metadata: { settingKey: validation.data.settingKey },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
