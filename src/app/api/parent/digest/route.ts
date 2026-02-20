import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { skills } from "@/lib/data/curriculum";

const digestSchema = z.object({
  parentId: z.string().uuid(),
});

// This is the same logic as the parent dashboard page.
// In a real app, this would be refactored into a shared helper.
async function getChildDataForDigest(supabase: SupabaseClient, parentId: string) {
  const { data: parentProfile, error: parentError } = await supabase
    .from("user_profiles")
    .select("parent_email")
    .eq("user_id", parentId)
    .single();

  if (parentError || !parentProfile || !parentProfile.parent_email) {
    return { error: "Could not find parent." };
  }

  const { data: childProfile, error: childError } = await supabase
    .from("user_profiles")
    .select("user_id, display_name")
    .eq("parent_email", parentProfile.parent_email)
    .neq("user_id", parentId)
    .limit(1)
    .single();

  if (childError || !childProfile) {
    return { error: "No child found." };
  }

  const { data: childSkills, error: skillsError } = await supabase
    .from("user_skill_mastery")
    .select("skill_id, mastery_level")
    .eq("user_id", childProfile.user_id)
    .order("mastery_level", { ascending: false });

  if (skillsError) {
    return { error: "Could not fetch child's progress." };
  }

  return { parentProfile, childProfile, childSkills };
}

export async function POST(request: Request) {
  // In a real app, this route would be protected by a secret or cron job token
  try {
    const body = await request.json();
    const validation = digestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { parentId } = validation.data;
    const supabase = await createSupabaseServerClient();

    const { parentProfile, childProfile, childSkills, error } =
      await getChildDataForDigest(supabase, parentId);

    if (error || !childSkills) {
      return NextResponse.json({ error: error || "Child skills not found." }, { status: 404 });
    }

    const skillMap = new Map(skills.map((s) => [s.id, s.name]));
    const strengths = childSkills.slice(0, 3);
    const weaknesses = childSkills
      .filter((s) => s.mastery_level < 0.7)
      .slice(-3)
      .reverse();
    
    // --- MOCK EMAIL SENDING ---
    console.log("--- Mock Parent Digest Email ---");
    console.log(`To: ${parentProfile.parent_email}`);
    console.log(`Subject: Your child ${childProfile.display_name}'s weekly progress report!`);
    console.log("\n--- Wins ---");
    strengths.forEach(s => console.log(`- ${skillMap.get(s.skill_id)}`));
    console.log("\n--- Opportunities ---");
    weaknesses.forEach(s => console.log(`- ${skillMap.get(s.skill_id)}`));
    console.log("\n--- What to do tonight (10 mins) ---");
    const advice = weaknesses.length > 0 ? (skillMap.get(weaknesses[0].skill_id) ?? weaknesses[0].skill_id) : "reviewing past lessons";
    console.log(`- Practice ${advice} with them.`);
    console.log("-----------------------------");
    // In a real app, you'd use a service like Resend or SendGrid here.
    // --- END MOCK EMAIL SENDING ---

    return NextResponse.json({ success: true, message: "Digest generated." });
  } catch (err) {
    console.error("Unexpected error in digest route:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
