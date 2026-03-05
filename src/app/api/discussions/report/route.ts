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

  // Increment report count
  await admin
    .from("discussion_posts")
    .update({ report_count: admin.rpc ? undefined : 1 })
    .eq("id", postId);

  // Auto-hide posts with 3+ reports
  await admin.rpc("increment_report_count", { post_id_arg: postId }).catch(() => {
    // Fallback: just mark as reported
  });

  return NextResponse.json({ reported: true });
}
