#!/usr/bin/env node
/**
 * compile-catalog-json.mjs
 *
 * Consolidates all 692+ individual TypeScript catalog modules into a single
 * JSON file that the Next.js bundler can import efficiently.
 *
 * Why: Each .ts catalog file must be parsed, AST-built, and bundled separately.
 * With 692 files totalling 113 MB, this consumes 5-7 GB of RAM during the
 * Turbopack/Next.js build — exceeding Vercel's 8 GB build machine limit.
 * A single JSON file is parsed natively (C++) and uses ~80% less memory.
 *
 * Usage:
 *   node scripts/compile-catalog-json.mjs           # compile
 *   node scripts/compile-catalog-json.mjs --dry-run  # preview without writing
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const CATALOG_DIR = path.join(ROOT, "src", "lib", "modules", "catalog");
const OUTPUT_FILE = path.join(ROOT, "src", "lib", "modules", "generated", "catalog-data.json");

const DRY_RUN = process.argv.includes("--dry-run");

/**
 * Read a catalog .ts file and evaluate the exported LearningModule object.
 *
 * Each file follows one of two patterns:
 *   import type { LearningModule } from "...";
 *   export const FooModule: LearningModule = { ... };
 *
 * We strip TypeScript-only syntax (import type, type annotations) and
 * evaluate the remainder as plain JavaScript to extract the data object.
 */
function extractModuleData(filePath) {
  let text = fs.readFileSync(filePath, "utf8");

  // Strip `import type ...` lines (no runtime effect)
  text = text.replace(/^import\s+type\s+\{[^}]*\}\s+from\s+["'][^"']*["'];?\s*$/gm, "");

  // Strip the type annotation `: LearningModule` from the export
  text = text.replace(/:\s*LearningModule\s*=/g, " =");

  // Convert `export const Foo =` → `return `
  // Handle potential whitespace variations
  text = text.replace(/export\s+const\s+\w+\s*=\s*/, "return ");

  // Trim trailing whitespace/semicolons
  text = text.trimEnd();
  if (text.endsWith(";")) {
    text = text.slice(0, -1);
  }

  // Evaluate as JavaScript function body to handle JS object literals
  // (unquoted keys, trailing commas, etc.)
  const fn = new Function(text);
  return fn();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("compile-catalog-json: Scanning catalog directory...");

// Collect all .ts files (including subdirectories like epub-generated/)
function collectTsFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(collectTsFiles(fullPath));
    } else if (entry.name.endsWith(".ts") && !entry.name.endsWith(".d.ts")) {
      files.push(fullPath);
    }
  }
  return files;
}

const tsFiles = collectTsFiles(CATALOG_DIR).sort();
console.log(`  Found ${tsFiles.length} catalog .ts files`);

const modules = [];
const errors = [];

for (const filePath of tsFiles) {
  const relativePath = path.relative(ROOT, filePath);
  try {
    const data = extractModuleData(filePath);
    if (data && typeof data === "object" && data.id) {
      modules.push(data);
    } else {
      errors.push({ file: relativePath, error: "No valid module object returned" });
    }
  } catch (err) {
    errors.push({ file: relativePath, error: err.message });
  }
}

console.log(`  Extracted ${modules.length} modules successfully`);
if (errors.length > 0) {
  console.warn(`  ${errors.length} files failed:`);
  for (const { file, error } of errors) {
    console.warn(`    ✗ ${file}: ${error}`);
  }
}

if (DRY_RUN) {
  console.log("\n[DRY RUN] Would write catalog-data.json with:");
  console.log(`  Modules: ${modules.length}`);
  const jsonSize = Buffer.byteLength(JSON.stringify(modules), "utf8");
  console.log(`  JSON size: ${(jsonSize / 1024 / 1024).toFixed(1)} MB`);
  process.exit(errors.length > 0 ? 1 : 0);
}

// Write the consolidated JSON
const json = JSON.stringify(modules, null, 0); // No pretty-print to save space
fs.writeFileSync(OUTPUT_FILE, json, "utf8");

const sizeMB = (Buffer.byteLength(json, "utf8") / 1024 / 1024).toFixed(1);
console.log(`\n✓ Wrote ${OUTPUT_FILE}`);
console.log(`  Modules: ${modules.length}`);
console.log(`  Size: ${sizeMB} MB`);

if (errors.length > 0) {
  console.warn(`\n⚠ ${errors.length} modules failed — they will be missing from the registry.`);
  process.exit(1);
}
