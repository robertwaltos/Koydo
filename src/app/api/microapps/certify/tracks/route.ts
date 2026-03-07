import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs"; // Using nodejs runtime to read from filesystem

/**
 * Certify Tracks API
 * Scans the catalog for certification-relevant modules.
 */
export async function GET(req: Request) {
  try {
    const catalogDir = path.join(process.cwd(), "src/lib/modules/catalog");
    const files = await fs.readdir(catalogDir);
    
    // Filter for common certification prefixes
    const certificationPrefixes = ["hvac", "plumbing", "electrician", "nursing", "accounting", "cybersecurity"];
    
    const relevantFiles = files.filter(f => 
      certificationPrefixes.some(prefix => f.startsWith(prefix)) && f.endsWith(".ts")
    );

    const tracks = await Promise.all(relevantFiles.slice(0, 20).map(async (file) => {
      const filePath = path.join(catalogDir, file);
      const content = await fs.readFile(filePath, "utf8");
      
      // Basic regex to extract title and version
      const titleMatch = content.match(/"title":\s*"(.*?)"/);
      const id = file.replace(".ts", "");
      
      return {
        id,
        title: titleMatch ? titleMatch[1] : id,
        category: id.split("-")[0].toUpperCase(),
        status: "Available"
      };
    }));

    return NextResponse.json(tracks);

  } catch (err) {
    console.error("[Certify API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
