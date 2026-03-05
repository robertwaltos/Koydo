import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/certificates — list user's earned certificates */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("user_certificates")
    .select("*")
    .eq("user_id", user.id)
    .order("issued_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ certificates: data ?? [] });
}

/** POST /api/certificates — issue a certificate (called after module completion / exam pass) */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { certificateType, title, description, moduleId, examId, score } = body;

  if (!certificateType || !title) {
    return NextResponse.json({ error: "certificateType and title required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("user_certificates")
    .upsert(
      {
        user_id: user.id,
        certificate_type: certificateType,
        title,
        description: description ?? null,
        module_id: moduleId ?? null,
        exam_id: examId ?? null,
        score: score ?? null,
      },
      { onConflict: "user_id,certificate_type,COALESCE(module_id,''),COALESCE(exam_id,'')" }
    )
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ certificate: data }, { status: 201 });
}
