import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * Technical Terminology API
 * Pulls specialized vocabulary from the Koydo Knowledgebase.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query")?.toLowerCase();

    // Mock dataset extracted from existing modules (HVAC, Law, Medicine, etc.)
    const technicalTerms = [
      { term: "Thermodynamics", definition: "The branch of physical science that deals with the relations between heat and other forms of energy.", category: "Physics" },
      { term: "Habeas Corpus", definition: "A writ requiring a person under arrest to be brought before a judge or into court.", category: "Law" },
      { term: "Neuroplasticity", definition: "The ability of the brain to form and reorganize synaptic connections, especially in response to learning.", category: "Medicine" },
      { term: "Solfeggio Frequencies", definition: "A set of 9 frequencies derived from old Gregorian chants, believed to have healing properties.", category: "Music" },
      { term: "Quantum Entanglement", definition: "A physical phenomenon that occurs when pairs or groups of particles are generated, interact, or share spatial proximity.", category: "Quantum Physics" },
    ];

    if (query) {
      const filtered = technicalTerms.filter(t => 
        t.term.toLowerCase().includes(query) || 
        t.category.toLowerCase().includes(query)
      );
      return NextResponse.json(filtered);
    }

    return NextResponse.json(technicalTerms);

  } catch (err) {
    console.error("[Translator API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
