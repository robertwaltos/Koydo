import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const schema = z.object({
  postId: z.string().uuid(),
  action: z.enum(["hide", "unhide", "pin", "unpin"]),
});

/**
 * POST /api/discussions/moderate — Admin moderation actions
 */
export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const { postId, action } = parsed.data;
  const admin = createSupabaseAdminClient();

  const updateFields: Record<string, boolean> = {};
  if (action === "hide") updateFields.is_hidden = true;
  if (action === "unhide") updateFields.is_hidden = false;
  if (action === "pin") updateFields.is_pinned = true;
  if (action === "unpin") updateFields.is_pinned = false;

  const { error } = await admin
    .from("discussion_posts")
    .update(updateFields)
    .eq("id", postId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
