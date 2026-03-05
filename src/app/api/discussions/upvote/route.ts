import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/discussions/upvote — Toggle upvote on a post
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { postId } = await request.json().catch(() => ({ postId: null }));
  if (!postId) return NextResponse.json({ error: "postId required" }, { status: 400 });

  const admin = createSupabaseAdminClient();

  // Check if already upvoted
  const { data: existing } = await admin
    .from("discussion_upvotes")
    .select("id")
    .eq("post_id", postId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existing) {
    // Remove upvote
    await admin.from("discussion_upvotes").delete().eq("id", existing.id);
    await admin.rpc("decrement_upvote_count", { post_id_arg: postId }).catch(() => {});
    return NextResponse.json({ upvoted: false });
  }

  // Add upvote
  await admin.from("discussion_upvotes").insert({ post_id: postId, user_id: user.id });
  await admin.rpc("increment_upvote_count", { post_id_arg: postId }).catch(() => {});
  return NextResponse.json({ upvoted: true });
}
