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
    // Decrement count; ignore errors if rpc doesn't exist yet
    const { error: decErr } = await admin.rpc("decrement_upvote_count", { post_id_arg: postId });
    if (decErr) {
      await admin
        .from("discussion_posts")
        .update({ upvote_count: Math.max(0, ((await admin.from("discussion_posts").select("upvote_count").eq("id", postId).maybeSingle()).data?.upvote_count ?? 1) - 1) })
        .eq("id", postId);
    }
    return NextResponse.json({ upvoted: false });
  }

  // Add upvote
  await admin.from("discussion_upvotes").insert({ post_id: postId, user_id: user.id });
  const { error: incErr } = await admin.rpc("increment_upvote_count", { post_id_arg: postId });
  if (incErr) {
    const { data: post } = await admin.from("discussion_posts").select("upvote_count").eq("id", postId).maybeSingle();
    await admin
      .from("discussion_posts")
      .update({ upvote_count: (post?.upvote_count ?? 0) + 1 })
      .eq("id", postId);
  }
  return NextResponse.json({ upvoted: true });
}
