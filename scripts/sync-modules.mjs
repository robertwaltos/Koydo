import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");
const outputDir = path.join(projectRoot, "src", "lib", "modules", "generated");
const outputFile = path.join(outputDir, "registry.ts");

function toImportPath(relativePath) {
  // relativePath is relative to catalogDir, e.g. "math-101.ts" or "epub-generated/some-book.ts"
  return `@/lib/modules/catalog/${relativePath.replace(/\.ts$/, "").replace(/\\/g, "/")}`;
}

/** Recursively collect all .ts module files under catalogDir. */
async function collectTsFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await collectTsFiles(fullPath, base);
      results.push(...nested);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      !entry.name.includes(".example.")
    ) {
      results.push(path.relative(base, fullPath));
    }
  }
  return results;
}

async function readCatalogEntries() {
  const relPaths = (await collectTsFiles(catalogDir)).sort();

  const parsed = [];

  for (const relPath of relPaths) {
    const filePath = path.join(catalogDir, relPath);
    const source = await fs.readFile(filePath, "utf8");
    const match = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
    if (!match) {
      throw new Error(`Could not find "export const ...: LearningModule =" in ${relPath}`);
    }
    parsed.push({
      fileName:   relPath,
      exportName: match[1],
      importPath: toImportPath(relPath),
    });
  }

  return parsed;
}

function buildRegistrySource(modules) {
  const importLines = modules.map((mod) => `import { ${mod.exportName} } from "${mod.importPath}";`).join("\n");
  const listItems = modules.map((mod) => `  ${mod.exportName},`).join("\n");

  return `${importLines}
import type { LearningModule } from "@/lib/modules/types";

export const generatedModuleRegistry: LearningModule[] = [
${listItems}
];
`;
}


async function main() {
  const modules = await readCatalogEntries();
  await fs.mkdir(outputDir, { recursive: true });
  const source = buildRegistrySource(modules);
  await fs.writeFile(outputFile, source, "utf8");
  console.log(`Synced ${modules.length} module(s) to ${path.relative(projectRoot, outputFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
