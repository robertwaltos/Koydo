import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string().min(1).max(80).optional(),
  isAdmin: z.boolean().optional(),
  isParent: z.boolean().optional(),
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
  const { data, error } = await admin.auth.admin.createUser({
    email: payload.data.email,
    password: payload.data.password,
    email_confirm: true,
    user_metadata: payload.data.displayName ? { display_name: payload.data.displayName } : undefined,
  });

  if (error || !data.user) {
    return NextResponse.json({ error: error?.message ?? "Failed to create user." }, { status: 500 });
  }

  const { error: profileError } = await admin.from("user_profiles").upsert({
    user_id: data.user.id,
    display_name: payload.data.displayName ?? null,
    is_admin: payload.data.isAdmin ?? false,
    is_parent: payload.data.isParent ?? false,
  });

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "user_create",
    targetUserId: data.user.id,
    metadata: {
      email: payload.data.email,
      isAdmin: payload.data.isAdmin ?? false,
      isParent: payload.data.isParent ?? false,
    },
  });

  return NextResponse.json({ success: true, userId: data.user.id });
}
