import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/bookmarks — list user's bookmarks */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("user_bookmarks")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookmarks: data });
}

/** POST /api/bookmarks — toggle a bookmark (add or remove) */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { itemType, itemId, itemTitle } = body;

  if (!itemType || !itemId) {
    return NextResponse.json({ error: "itemType and itemId required" }, { status: 400 });
  }

  // Check if already bookmarked
  const { data: existing } = await supabase
    .from("user_bookmarks")
    .select("id")
    .eq("user_id", user.id)
    .eq("item_type", itemType)
    .eq("item_id", itemId)
    .maybeSingle();

  if (existing) {
    // Remove bookmark
    await supabase.from("user_bookmarks").delete().eq("id", existing.id);
    return NextResponse.json({ bookmarked: false });
  }

  // Add bookmark
  const { error } = await supabase.from("user_bookmarks").insert({
    user_id: user.id,
    item_type: itemType,
    item_id: itemId,
    item_title: itemTitle ?? null,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookmarked: true }, { status: 201 });
}
