import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";
import { requirePaidTier } from "@/lib/forge/tier-gate";

/**
 * GET /api/library — digital library items (premium)
 *
 * Query params: subject, type, q (search)
 */
export async function GET(request: Request) {
  const gate = await requireFeature("digital_library", request);
  if (gate) return gate;

  const tierGate = await requirePaidTier(request);
  if (tierGate) return tierGate;

  const supabase = await createSupabaseServerClient();
  const { searchParams } = new URL(request.url);

  const subject = searchParams.get("subject");
  const type = searchParams.get("type");
  const q = searchParams.get("q");

  let query = supabase
    .from("library_items")
    .select("id, title, author, type, cover_url, subject, reading_time_min");

  if (subject) query = query.eq("subject", subject);
  if (type) query = query.eq("type", type);
  if (q) query = query.ilike("title", `%${q}%`);

  const { data: items, error } = await query.order("title").limit(100);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ items: items ?? [] });
}
