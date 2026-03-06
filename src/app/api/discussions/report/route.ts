import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/discussions/report — Report a post for moderation
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { postId } = await request.json().catch(() => ({ postId: null }));
  if (!postId) return NextResponse.json({ error: "postId required" }, { status: 400 });

  const admin = createSupabaseAdminClient();

  // Increment report count using raw SQL via rpc, fallback to manual increment
  const { error: rpcError } = await admin.rpc("increment_report_count", { post_id_arg: postId });

  if (rpcError) {
    // Fallback: fetch current count and increment manually
    const { data: post } = await admin
      .from("discussion_posts")
      .select("report_count")
      .eq("id", postId)
      .maybeSingle();

    const newCount = (post?.report_count ?? 0) + 1;
    await admin
      .from("discussion_posts")
      .update({ report_count: newCount, ...(newCount >= 3 ? { is_hidden: true } : {}) })
      .eq("id", postId);
  }

  return NextResponse.json({ reported: true });
}
