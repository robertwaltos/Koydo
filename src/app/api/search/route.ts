import { NextRequest, NextResponse } from "next/server";
import { getAllModulesUnfiltered } from "@/lib/modules";

type SearchResult = {
  type: "module" | "game" | "exam";
  id: string;
  title: string;
  description?: string;
  href: string;
};

/** GET /api/search?q=... — global content search */
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim().toLowerCase();
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: SearchResult[] = [];
  const modules = getAllModulesUnfiltered();

  // Search modules
  for (const mod of modules) {
    if (results.length >= 20) break;
    const title = (mod.title ?? "").toLowerCase();
    const subject = (mod.subject ?? "").toLowerCase();
    const desc = (mod.description ?? "").toLowerCase();
    if (title.includes(q) || subject.includes(q) || desc.includes(q)) {
      results.push({
        type: "module",
        id: mod.id,
        title: mod.title,
        description: mod.description,
        href: `/modules/${mod.id}`,
      });
    }
  }

  // Return top results
  return NextResponse.json({ results: results.slice(0, 20) });
}
