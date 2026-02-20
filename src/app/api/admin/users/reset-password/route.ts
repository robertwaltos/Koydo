import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/config/env";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  email: z.string().email(),
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

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin.auth.admin.generateLink({
    type: "recovery",
    email: payload.data.email,
    options: {
      redirectTo: `${serverEnv.NEXT_PUBLIC_APP_URL}/auth/sign-in`,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "user_reset_password_link",
    metadata: { email: payload.data.email },
  });

  return NextResponse.json({
    success: true,
    actionLink: data.properties.action_link,
  });
}
