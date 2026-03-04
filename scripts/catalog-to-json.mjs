/**
 * Convert catalog TypeScript files to JSON data files.
 * Run: node scripts/catalog-to-json.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CATALOG_DIR = join(ROOT, "src", "lib", "games", "engine", "catalog");
const OUT_DIR = join(ROOT, "public", "data", "games");

// Default palette used in all catalog files
const P = ["#fbbf24", "#f472b6", "#34d399", "#60a5fa", "#a78bfa"];

function extractGames(tsContent) {
  // Find all object literals in the array
  const games = [];
  // Match each { ... } game definition
  const regex = /\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*icon:\s*"([^"]+)",\s*gradient:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*mechanic:\s*"([^"]+)",\s*ages:\s*\{\s*min:\s*(\d+),\s*max:\s*(\d+)\s*\},\s*eduWeight:\s*(\d+),\s*ageLock:\s*(true|false),\s*safeForChildren:\s*(true|false),\s*levels:\s*(\d+),\s*themeConfig:\s*\{\s*subject:\s*"([^"]+)",\s*palette:\s*P,\s*mascotId:\s*"([^"]+)",\s*contentKey:\s*"([^"]+)"\s*\}\s*\}/g;

  let match;
  while ((match = regex.exec(tsContent)) !== null) {
    games.push({
      id: match[1],
      title: match[2],
      description: match[3],
      icon: match[4],
      gradient: match[5],
      category: match[6],
      mechanic: match[7],
      ages: { min: parseInt(match[8]), max: parseInt(match[9]) },
      eduWeight: parseInt(match[10]),
      ageLock: match[11] === "true",
      safeForChildren: match[12] === "true",
      levels: parseInt(match[13]),
      themeConfig: {
        subject: match[14],
        palette: P,
        mascotId: match[15],
        contentKey: match[16],
      },
    });
  }
  return games;
}

mkdirSync(OUT_DIR, { recursive: true });

const parts = ["catalog-part1", "catalog-part2", "catalog-part3", "catalog-part4"];
const allGames = [];

for (const part of parts) {
  const tsPath = join(CATALOG_DIR, `${part}.ts`);
  const content = readFileSync(tsPath, "utf-8");
  const games = extractGames(content);
  console.log(`${part}: extracted ${games.length} games`);
  allGames.push(...games);
}

// Write single combined JSON
const outPath = join(OUT_DIR, "catalog.json");
writeFileSync(outPath, JSON.stringify(allGames));
console.log(`\nTotal: ${allGames.length} games → ${outPath}`);
console.log(`Size: ${(readFileSync(outPath).length / 1024).toFixed(1)} KB`);
