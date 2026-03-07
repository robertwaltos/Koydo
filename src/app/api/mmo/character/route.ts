import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * MMO Character API
 * Manages character creation and retrieval for the separate MMO repository.
 */
export async function GET(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: character, error } = await supabase
      .from("mmo_characters")
      .select(`
        *,
        mmo_inventory (*)
      `)
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) throw error;

    return NextResponse.json(character || { message: "No character found", status: "none" });
  } catch (error) {
    console.error("[MMO API] GET Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, characterClass } = body;

    if (!name) {
      return NextResponse.json({ error: "Character name is required" }, { status: 400 });
    }

    const { data: character, error } = await supabase
      .from("mmo_characters")
      .insert({
        user_id: user.id,
        name,
        class: characterClass,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(character);
  } catch (error) {
    console.error("[MMO API] POST Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
