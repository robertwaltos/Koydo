import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";
import { requirePaidTier } from "@/lib/forge/tier-gate";

/**
 * GET /api/question-bank — search/filter question bank (premium)
 *
 * Query params: subject, difficulty, type, q (search), limit, offset
 */
export async function GET(request: Request) {
  const gate = await requireFeature("question_bank_browser", request);
  if (gate) return gate;

  const tierGate = await requirePaidTier(request);
  if (tierGate) return tierGate;

  const supabase = await createSupabaseServerClient();
  const { searchParams } = new URL(request.url);

  const subject = searchParams.get("subject");
  const difficulty = searchParams.get("difficulty");
  const type = searchParams.get("type");
  const q = searchParams.get("q");
  const limit = Math.min(parseInt(searchParams.get("limit") ?? "20", 10), 50);
  const offset = parseInt(searchParams.get("offset") ?? "0", 10);

  let query = supabase
    .from("question_bank")
    .select("id, question_text, question_type, subject, difficulty, tags", { count: "exact" });

  if (subject) query = query.eq("subject", subject);
  if (difficulty) query = query.eq("difficulty", difficulty);
  if (type) query = query.eq("question_type", type);
  if (q) query = query.ilike("question_text", `%${q}%`);

  const { data: questions, count, error } = await query
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ questions: questions ?? [], total: count ?? 0 });
}
