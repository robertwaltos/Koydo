#!/usr/bin/env node
/**
 * backfill-refinery-visual-placeholders.mjs
 *
 * Creates missing refinery lesson PNGs by copying a template PNG.
 * This is intentionally disabled unless --allow-placeholder is passed.
 *
 * Usage:
 *   node scripts/backfill-refinery-visual-placeholders.mjs --locale es --from-sweep --allow-placeholder
 *   node scripts/backfill-refinery-visual-placeholders.mjs --locale es --module astronomy-101
 *   node scripts/backfill-refinery-visual-placeholders.mjs --locale es --template public/generated-images/refinery/accounting-finance-301-l01.png
 */

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();

function parseArgs(argv) {
  const opts = {
    locale: "",
    modules: [],
    fromSweep: false,
    templatePath: path.join("public", "generated-images", "refinery", "accounting-finance-301-l01.png"),
    allowPlaceholder: false,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--locale" && argv[i + 1]) {
      opts.locale = String(argv[++i]).trim();
      continue;
    }
    if (arg.startsWith("--locale=")) {
      opts.locale = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg === "--module" && argv[i + 1]) {
      opts.modules.push(String(argv[++i]).trim());
      continue;
    }
    if (arg.startsWith("--module=")) {
      opts.modules.push(String(arg.split("=")[1] || "").trim());
      continue;
    }
    if (arg === "--from-sweep") {
      opts.fromSweep = true;
      continue;
    }
    if (arg === "--allow-placeholder") {
      opts.allowPlaceholder = true;
      continue;
    }
    if (arg === "--template" && argv[i + 1]) {
      opts.templatePath = String(argv[++i]).trim();
      continue;
    }
    if (arg.startsWith("--template=")) {
      opts.templatePath = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg === "--dry-run") {
      opts.dryRun = true;
      continue;
    }
    if (!arg.startsWith("--")) {
      if (!opts.locale) {
        opts.locale = String(arg).trim();
        continue;
      }
      opts.modules.push(String(arg).trim());
    }
  }

  return opts;
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.locale) {
  console.error("Usage: node scripts/backfill-refinery-visual-placeholders.mjs --locale <locale> [--from-sweep] [--module id]");
  process.exit(1);
}

if (!opts.allowPlaceholder) {
  console.error("Placeholder backfill is disabled by default. Re-run with --allow-placeholder if you explicitly want scaffold visuals.");
  process.exit(1);
}

function parseModuleFromTs(filePath, sourceText) {
  const match = sourceText.match(/export const\s+([A-Za-z0-9_]+)\s*(?::\s*LearningModule)?\s*=/m);
  if (!match) {
    throw new Error(`Could not find exported module constant in ${filePath}`);
  }
  const exportName = match[1];
  const transformed = sourceText
    .replace(/^import\s+[^;]+;\s*$/gm, "")
    .replace(/\s+as\s+const\b/g, "")
    .replace(
      new RegExp(`export\\s+const\\s+${exportName}\\s*(?::\\s*LearningModule)?\\s*=`, "m"),
      `const ${exportName} =`,
    )
    .concat(`\nmodule.exports = ${exportName};\n`);
  const ctx = vm.createContext({ module: { exports: {} }, exports: {} });
  new vm.Script(transformed, { filename: path.basename(filePath) }).runInContext(ctx, { timeout: 5000 });
  return ctx.module.exports;
}

async function main() {
  const templateAbs = path.resolve(ROOT, opts.templatePath);
  if (!existsSync(templateAbs)) {
    console.error(`Missing template image: ${templateAbs}`);
    process.exit(1);
  }

  const modules = new Set(opts.modules.filter(Boolean));
  if (opts.fromSweep) {
    const sweepPath = path.join(ROOT, "public", "translations", opts.locale, "_codex-audit-sweep.json");
    if (!existsSync(sweepPath)) {
      console.error(`Missing sweep file: ${sweepPath}`);
      process.exit(1);
    }
    const sweep = JSON.parse(await fs.readFile(sweepPath, "utf8"));
    for (const row of sweep.modules || []) {
      if (row.station1 && !row.station2) {
        modules.add(row.moduleId);
      }
    }
  }

  if (modules.size === 0) {
    console.log("No modules selected.");
    process.exit(0);
  }

  const refineryDir = path.join(ROOT, "public", "generated-images", "refinery");
  await fs.mkdir(refineryDir, { recursive: true });

  let created = 0;
  let skippedExists = 0;
  let skippedNoSource = 0;
  let moduleCount = 0;

  for (const moduleId of [...modules].sort()) {
    const sourcePath = path.join(ROOT, "src", "lib", "modules", "catalog", `${moduleId}.ts`);
    if (!existsSync(sourcePath)) {
      skippedNoSource += 1;
      continue;
    }

    const sourceText = await fs.readFile(sourcePath, "utf8");
    const mod = parseModuleFromTs(sourcePath, sourceText);
    const lessons = Array.isArray(mod?.lessons) ? mod.lessons : [];
    moduleCount += 1;

    for (let i = 0; i < lessons.length; i++) {
      const fallbackId = `${moduleId}-l${String(i + 1).padStart(2, "0")}`;
      const lessonId =
        typeof lessons[i]?.id === "string" && lessons[i].id.trim().length > 0 ? lessons[i].id.trim() : fallbackId;
      const outPath = path.join(refineryDir, `${lessonId}.png`);
      if (existsSync(outPath)) {
        skippedExists += 1;
        continue;
      }
      if (!opts.dryRun) {
        await fs.copyFile(templateAbs, outPath);
      }
      created += 1;
    }
  }

  console.log(
    `[visual-backfill] locale=${opts.locale} modules=${moduleCount} created=${created} skipped_exists=${skippedExists} skipped_no_source=${skippedNoSource} dryRun=${opts.dryRun}`,
  );
}

main().catch((error) => {
  console.error("FATAL:", error.message);
  process.exit(1);
});
