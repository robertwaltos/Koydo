import { NextResponse } from "next/server";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { getOwnerSecurityStatus } from "@/lib/admin/owner-security";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const status = await getOwnerSecurityStatus(admin, auth.userId);

    return NextResponse.json({
      owner: {
        userId: auth.userId,
        email: auth.userEmail,
        dataMode: auth.profile.data_mode,
      },
      security: status,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load owner security status." }, { status: 500 });
  }
}
