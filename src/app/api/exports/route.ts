import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";
import { requirePaidTier } from "@/lib/forge/tier-gate";

const schema = z.object({
  profileId: z.string().uuid(),
  type: z.enum(["certificate", "notes", "progress"]),
});

/**
 * POST /api/exports — generate a PDF export (premium)
 *
 * Returns a PDF blob for the requested export type.
 * Uses jsPDF for server-side PDF generation.
 */
export async function POST(request: Request) {
  const gate = await requireFeature("offline_exports", request);
  if (gate) return gate;

  const tierGate = await requirePaidTier(request);
  if (tierGate) return tierGate;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Verify profile belongs to user
  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id, display_name, age_years")
    .eq("id", parsed.data.profileId)
    .eq("account_id", user.id)
    .maybeSingle();

  if (!profile) {
    return new Response(JSON.stringify({ error: "Profile not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const name = profile.display_name || "Student";

    switch (parsed.data.type) {
      case "certificate": {
        // Fetch gamification stats for the certificate
        const { data: stats } = await supabase
          .from("gamification_states")
          .select("xp_total, current_level, badges_earned")
          .eq("profile_id", profile.id)
          .maybeSingle();

        doc.setFontSize(28);
        doc.text("Certificate of Achievement", 105, 40, { align: "center" });
        doc.setFontSize(14);
        doc.text("This certifies that", 105, 70, { align: "center" });
        doc.setFontSize(22);
        doc.text(name, 105, 85, { align: "center" });
        doc.setFontSize(14);
        doc.text("has demonstrated outstanding learning on Koydo", 105, 105, { align: "center" });
        if (stats) {
          doc.text(`Level ${stats.current_level ?? 1} | ${stats.xp_total ?? 0} XP | ${stats.badges_earned ?? 0} badges`, 105, 120, { align: "center" });
        }
        doc.text(`Issued: ${new Date().toLocaleDateString()}`, 105, 150, { align: "center" });
        break;
      }

      case "notes": {
        // Export reflection journal entries
        const { data: entries } = await supabase
          .from("reflection_journal")
          .select("prompt, response, created_at")
          .eq("profile_id", profile.id)
          .order("created_at", { ascending: false })
          .limit(50);

        doc.setFontSize(20);
        doc.text(`${name}'s Learning Notes`, 15, 20);
        doc.setFontSize(10);

        let y = 35;
        for (const entry of entries ?? []) {
          if (y > 270) { doc.addPage(); y = 20; }
          doc.setFont("helvetica", "bold");
          doc.text(new Date(entry.created_at).toLocaleDateString(), 15, y);
          y += 5;
          doc.setFont("helvetica", "italic");
          doc.text(doc.splitTextToSize(entry.prompt ?? "", 180), 15, y);
          y += 7;
          doc.setFont("helvetica", "normal");
          const lines = doc.splitTextToSize(entry.response ?? "", 180);
          doc.text(lines, 15, y);
          y += lines.length * 5 + 8;
        }
        break;
      }

      case "progress": {
        const { data: stats } = await supabase
          .from("gamification_states")
          .select("xp_total, current_level, badges_earned, quests_completed, current_streak")
          .eq("profile_id", profile.id)
          .maybeSingle();

        doc.setFontSize(20);
        doc.text(`${name}'s Progress Report`, 15, 20);
        doc.setFontSize(12);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 15, 30);

        doc.setFontSize(14);
        doc.text("Statistics", 15, 50);
        doc.setFontSize(11);
        const s = stats ?? { xp_total: 0, current_level: 1, badges_earned: 0, quests_completed: 0, current_streak: 0 };
        doc.text(`Level: ${s.current_level}`, 20, 60);
        doc.text(`Total XP: ${s.xp_total}`, 20, 68);
        doc.text(`Badges Earned: ${s.badges_earned}`, 20, 76);
        doc.text(`Quests Completed: ${s.quests_completed}`, 20, 84);
        doc.text(`Current Streak: ${s.current_streak} days`, 20, 92);
        break;
      }
    }

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="koydo-${parsed.data.type}.pdf"`,
      },
    });
  } catch (err) {
    console.error("[exports] PDF generation error:", err);
    return new Response(JSON.stringify({ error: "Export failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
