import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");
const outputDir = path.join(projectRoot, "src", "lib", "modules", "generated");
const outputFile = path.join(outputDir, "registry.ts");

function toImportPath(fileName) {
  return `@/lib/modules/catalog/${fileName.replace(/\.ts$/, "")}`;
}

async function readCatalogEntries() {
  const entries = await fs.readdir(catalogDir, { withFileTypes: true });
  const moduleFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith(".ts"))
    .filter((name) => !name.includes(".example."))
    .sort();

  const parsed = [];

  for (const fileName of moduleFiles) {
    const filePath = path.join(catalogDir, fileName);
    const source = await fs.readFile(filePath, "utf8");
    const match = source.match(/export const\s+([A-Za-z0-9_]+)\s*:\s*LearningModule\s*=/);
    if (!match) {
      throw new Error(`Could not find "export const ...: LearningModule =" in ${fileName}`);
    }
    parsed.push({
      fileName,
      exportName: match[1],
      importPath: toImportPath(fileName),
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
