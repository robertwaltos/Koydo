import { NextRequest, NextResponse } from "next/server";
import { getAllModulesUnfiltered } from "@/lib/modules";

type GlossaryEntry = {
  term: string;
  definition: string;
  subject: string;
  moduleId: string;
};

// Extract glossary terms from module metadata
function buildGlossary(): GlossaryEntry[] {
  const modules = getAllModulesUnfiltered();
  const entries: GlossaryEntry[] = [];
  const seen = new Set<string>();

  for (const mod of modules) {
    // Use module keywords/tags as terms, module description as context
    const subject = mod.subject ?? "General";

    // Add the module title itself as a term
    const termKey = mod.title.toLowerCase();
    if (!seen.has(termKey)) {
      seen.add(termKey);
      entries.push({
        term: mod.title,
        definition: mod.description || `A learning module covering ${mod.title} in the ${subject} subject area.`,
        subject,
        moduleId: mod.id,
      });
    }

    // Extract terms from keywords if available
    const keywords = (mod as Record<string, unknown>).keywords;
    if (Array.isArray(keywords)) {
      for (const kw of keywords) {
        if (typeof kw === "string" && kw.length > 2 && !seen.has(kw.toLowerCase())) {
          seen.add(kw.toLowerCase());
          entries.push({
            term: kw.charAt(0).toUpperCase() + kw.slice(1),
            definition: `A key concept in ${mod.title} (${subject}).`,
            subject,
            moduleId: mod.id,
          });
        }
      }
    }
  }

  return entries.sort((a, b) => a.term.localeCompare(b.term));
}

let cachedGlossary: GlossaryEntry[] | null = null;

/** GET /api/glossary?q=...&subject=...&letter=... */
export async function GET(req: NextRequest) {
  if (!cachedGlossary) cachedGlossary = buildGlossary();

  const q = req.nextUrl.searchParams.get("q")?.toLowerCase();
  const subject = req.nextUrl.searchParams.get("subject");
  const letter = req.nextUrl.searchParams.get("letter")?.toUpperCase();

  let results = cachedGlossary;

  if (q) results = results.filter((e) => e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q));
  if (subject) results = results.filter((e) => e.subject === subject);
  if (letter) results = results.filter((e) => e.term.charAt(0).toUpperCase() === letter);

  // Get unique subjects for filter
  const subjects = [...new Set(cachedGlossary.map((e) => e.subject))].sort();
  const letters = [...new Set(cachedGlossary.map((e) => e.term.charAt(0).toUpperCase()))].sort();

  return NextResponse.json({
    entries: results.slice(0, 100),
    total: results.length,
    subjects,
    letters,
  });
}
