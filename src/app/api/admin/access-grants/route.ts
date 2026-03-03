import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import {
  grantAccess,
  revokeAccess,
  listGrantsByType,
  listUserGrants,
  type GrantType,
} from "@/lib/access/access-grants";
import { logAdminActionStrict } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const VALID_GRANT_TYPES: GrantType[] = [
  "beta_tester", "teacher", "school", "influencer", "press", "investor", "employee",
];

const grantSchema = z.object({
  userId: z.string().uuid(),
  grantType: z.enum(VALID_GRANT_TYPES as [GrantType, ...GrantType[]]),
  label: z.string().max(200).optional(),
  expiresAt: z.string().datetime().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const revokeSchema = z.object({
  userId: z.string().uuid(),
  grantType: z.enum(VALID_GRANT_TYPES as [GrantType, ...GrantType[]]),
});

/**
 * GET /api/admin/access-grants?type=beta_tester&userId=...
 */
export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const url = new URL(request.url);
    const grantType = url.searchParams.get("type") as GrantType | null;
    const userId = url.searchParams.get("userId");
    const activeOnly = url.searchParams.get("activeOnly") !== "false";

    if (userId) {
      const grants = await listUserGrants(userId);
      return NextResponse.json({ grants });
    }

    if (grantType && VALID_GRANT_TYPES.includes(grantType)) {
      const grants = await listGrantsByType(grantType, activeOnly);
      return NextResponse.json({ grants });
    }

    // Return all grant types with counts
    const allGrants: Record<string, number> = {};
    for (const type of VALID_GRANT_TYPES) {
      const grants = await listGrantsByType(type, true);
      allGrants[type] = grants.length;
    }

    return NextResponse.json({ grantCounts: allGrants });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * POST /api/admin/access-grants — Grant access to a user
 */
export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));
    const validation = grantSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await grantAccess({
      userId: validation.data.userId,
      grantType: validation.data.grantType,
      label: validation.data.label,
      grantedBy: auth.userId,
      expiresAt: validation.data.expiresAt,
      metadata: validation.data.metadata,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "access_grant.created",
      targetUserId: validation.data.userId,
      metadata: {
        grantType: validation.data.grantType,
        label: validation.data.label,
        expiresAt: validation.data.expiresAt,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/access-grants — Revoke access from a user
 */
export async function DELETE(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));
    const validation = revokeSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await revokeAccess({
      userId: validation.data.userId,
      grantType: validation.data.grantType,
      revokedBy: auth.userId,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "access_grant.revoked",
      targetUserId: validation.data.userId,
      metadata: { grantType: validation.data.grantType },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
