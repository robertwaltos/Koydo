#!/usr/bin/env node
/**
 * repair-translation-field-map.mjs
 *
 * Backfills missing translation fields in public/translations/{locale}/{moduleId}.json.
 * Sources values from state-{locale}.json by hash; optionally falls back to English source text.
 *
 * Usage:
 *   node scripts/repair-translation-field-map.mjs --locale es --module accounting-finance-301
 *   node scripts/repair-translation-field-map.mjs --locale es --from-sweep
 *   node scripts/repair-translation-field-map.mjs --locale es --from-sweep
 *   node scripts/repair-translation-field-map.mjs --locale es --from-sweep --allow-source-fallback
 */

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const ROOT = process.cwd();

function parseArgs(argv) {
  const opts = {
    locale: "",
    modules: [],
    fromSweep: false,
    sourceFallback: false,
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
    if (arg === "--allow-source-fallback") {
      opts.sourceFallback = true;
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
  console.error("Usage: node scripts/repair-translation-field-map.mjs --locale <locale> [--module id] [--from-sweep]");
  process.exit(1);
}

function sha256(text) {
  return crypto.createHash("sha256").update(String(text ?? ""), "utf8").digest("hex");
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

function* extractModuleStrings(moduleId, mod) {
  if (mod.title) yield { fieldPath: "_:title", text: mod.title };
  if (mod.description) yield { fieldPath: "_:description", text: mod.description };
  if (mod.gradeBand) yield { fieldPath: "_:gradeBand", text: mod.gradeBand };
  if (Array.isArray(mod.learningObjectives)) {
    for (let i = 0; i < mod.learningObjectives.length; i++) {
      if (mod.learningObjectives[i]) yield { fieldPath: `_:learningObjectives.${i}`, text: mod.learningObjectives[i] };
    }
  }
  if (Array.isArray(mod.tags)) {
    for (let i = 0; i < mod.tags.length; i++) {
      if (mod.tags[i]) yield { fieldPath: `_:tags.${i}`, text: mod.tags[i] };
    }
  }

  if (!Array.isArray(mod.lessons)) return;
  for (let li = 0; li < mod.lessons.length; li++) {
    const lesson = mod.lessons[li];
    const lid = lesson.id || `l${li}`;
    if (lesson.title) yield { fieldPath: `${lid}:title`, text: lesson.title };
    if (Array.isArray(lesson.objectives)) {
      for (let oi = 0; oi < lesson.objectives.length; oi++) {
        if (lesson.objectives[oi]) yield { fieldPath: `${lid}:objectives.${oi}`, text: lesson.objectives[oi] };
      }
    }
    if (Array.isArray(lesson.chunks)) {
      for (let ci = 0; ci < lesson.chunks.length; ci++) {
        const chunk = lesson.chunks[ci];
        if (chunk.title) yield { fieldPath: `${lid}:chunks.${ci}.title`, text: chunk.title };
        if (chunk.content) yield { fieldPath: `${lid}:chunks.${ci}.content`, text: chunk.content };
      }
    }
    if (Array.isArray(lesson.questions)) {
      for (let qi = 0; qi < lesson.questions.length; qi++) {
        const q = lesson.questions[qi];
        if (q.text) yield { fieldPath: `${lid}:questions.${qi}.text`, text: q.text };
        if (q.hint) yield { fieldPath: `${lid}:questions.${qi}.hint`, text: q.hint };
        if (q.explanation) yield { fieldPath: `${lid}:questions.${qi}.explanation`, text: q.explanation };
        if (q.imageAlt) yield { fieldPath: `${lid}:questions.${qi}.imageAlt`, text: q.imageAlt };
        if (Array.isArray(q.options)) {
          for (let oi = 0; oi < q.options.length; oi++) {
            if (q.options[oi]?.text) yield { fieldPath: `${lid}:questions.${qi}.options.${oi}.text`, text: q.options[oi].text };
            if (q.options[oi]?.imageAlt) {
              yield { fieldPath: `${lid}:questions.${qi}.options.${oi}.imageAlt`, text: q.options[oi].imageAlt };
            }
          }
        }
      }
    }
    if (Array.isArray(lesson.flashcards)) {
      for (let fi = 0; fi < lesson.flashcards.length; fi++) {
        const card = lesson.flashcards[fi];
        if (card.front) yield { fieldPath: `${lid}:flashcards.${fi}.front`, text: card.front };
        if (card.back) yield { fieldPath: `${lid}:flashcards.${fi}.back`, text: card.back };
        if (card.hint) yield { fieldPath: `${lid}:flashcards.${fi}.hint`, text: card.hint };
        if (card.imageAlt) yield { fieldPath: `${lid}:flashcards.${fi}.imageAlt`, text: card.imageAlt };
      }
    }
    if (Array.isArray(lesson.interactiveActivities)) {
      for (let ai = 0; ai < lesson.interactiveActivities.length; ai++) {
        const act = lesson.interactiveActivities[ai];
        if (act.title) yield { fieldPath: `${lid}:interactiveActivities.${ai}.title`, text: act.title };
        if (act.description) yield { fieldPath: `${lid}:interactiveActivities.${ai}.description`, text: act.description };
        if (act.prompt) yield { fieldPath: `${lid}:interactiveActivities.${ai}.prompt`, text: act.prompt };
        if (Array.isArray(act.instructions)) {
          for (let ii = 0; ii < act.instructions.length; ii++) {
            if (act.instructions[ii]) yield { fieldPath: `${lid}:interactiveActivities.${ai}.instructions.${ii}`, text: act.instructions[ii] };
          }
        }
        if (Array.isArray(act.udlEngagement)) {
          for (let ui = 0; ui < act.udlEngagement.length; ui++) {
            if (act.udlEngagement[ui]) yield { fieldPath: `${lid}:interactiveActivities.${ai}.udlEngagement.${ui}`, text: act.udlEngagement[ui] };
          }
        }
        if (Array.isArray(act.buckets)) {
          for (let bi = 0; bi < act.buckets.length; bi++) {
            if (act.buckets[bi]) yield { fieldPath: `${lid}:interactiveActivities.${ai}.buckets.${bi}`, text: act.buckets[bi] };
          }
        }
        if (Array.isArray(act.zones)) {
          for (let zi = 0; zi < act.zones.length; zi++) {
            if (act.zones[zi]) yield { fieldPath: `${lid}:interactiveActivities.${ai}.zones.${zi}`, text: act.zones[zi] };
          }
        }
        if (Array.isArray(act.items)) {
          for (let ii = 0; ii < act.items.length; ii++) {
            const item = act.items[ii];
            const txt = typeof item === "string" ? item : item?.text;
            if (txt) yield { fieldPath: `${lid}:interactiveActivities.${ai}.items.${ii}`, text: txt };
          }
        }
        if (Array.isArray(act.pairs)) {
          for (let pi = 0; pi < act.pairs.length; pi++) {
            if (act.pairs[pi]?.left) yield { fieldPath: `${lid}:interactiveActivities.${ai}.pairs.${pi}.left`, text: act.pairs[pi].left };
            if (act.pairs[pi]?.right) yield { fieldPath: `${lid}:interactiveActivities.${ai}.pairs.${pi}.right`, text: act.pairs[pi].right };
          }
        }
      }
    }
    if (Array.isArray(lesson.learningAids)) {
      for (let lai = 0; lai < lesson.learningAids.length; lai++) {
        const aid = lesson.learningAids[lai];
        if (aid.title) yield { fieldPath: `${lid}:learningAids.${lai}.title`, text: aid.title };
        if (aid.content) yield { fieldPath: `${lid}:learningAids.${lai}.content`, text: aid.content };
      }
    }
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function main() {
  const statePath = path.join(ROOT, "data", "translations", `state-${opts.locale}.json`);
  if (!existsSync(statePath)) {
    console.error(`Missing state file: ${statePath}`);
    process.exit(1);
  }
  const state = await readJson(statePath);
  const completedHashes = state?.completedHashes && typeof state.completedHashes === "object" ? state.completedHashes : {};

  const modules = new Set(opts.modules.filter(Boolean));
  if (opts.fromSweep) {
    const sweepPath = path.join(ROOT, "public", "translations", opts.locale, "_codex-audit-sweep.json");
    if (!existsSync(sweepPath)) {
      console.error(`Missing sweep file: ${sweepPath}`);
      process.exit(1);
    }
    const sweep = await readJson(sweepPath);
    for (const row of sweep.modules || []) {
      if (row.station1 && row.station2 && !row.station3) {
        modules.add(row.moduleId);
      }
    }
  }

  if (modules.size === 0) {
    console.log("No modules selected.");
    process.exit(0);
  }

  let modulesUpdated = 0;
  let totalMissing = 0;
  let filledFromState = 0;
  let filledFromSource = 0;
  let unresolved = 0;

  for (const moduleId of [...modules].sort()) {
    const sourcePath = path.join(ROOT, "src", "lib", "modules", "catalog", `${moduleId}.ts`);
    const outPath = path.join(ROOT, "public", "translations", opts.locale, `${moduleId}.json`);
    if (!existsSync(sourcePath) || !existsSync(outPath)) {
      continue;
    }

    const sourceText = await fs.readFile(sourcePath, "utf8");
    const moduleObj = parseModuleFromTs(sourcePath, sourceText);
    const expected = [...extractModuleStrings(moduleId, moduleObj)];

    const translation = await readJson(outPath);
    if (!translation.fields || typeof translation.fields !== "object") {
      translation.fields = {};
    }
    const fields = { ...translation.fields };

    let moduleChanged = false;
    let moduleMissing = 0;
    let moduleState = 0;
    let moduleSource = 0;
    let moduleUnresolved = 0;

    for (const row of expected) {
      if (Object.prototype.hasOwnProperty.call(fields, row.fieldPath)) continue;
      moduleMissing += 1;
      const hash = sha256(row.text);
      const byState = completedHashes[hash];
      if (typeof byState === "string" && byState.trim().length > 0) {
        fields[row.fieldPath] = byState;
        moduleState += 1;
        moduleChanged = true;
        continue;
      }
      if (opts.sourceFallback) {
        fields[row.fieldPath] = row.text;
        moduleSource += 1;
        moduleChanged = true;
      } else {
        moduleUnresolved += 1;
      }
    }

    totalMissing += moduleMissing;
    filledFromState += moduleState;
    filledFromSource += moduleSource;
    unresolved += moduleUnresolved;

    if (moduleChanged) {
      translation.fields = fields;
      translation.fieldCount = Object.keys(fields).length;
      translation.translatedAt = new Date().toISOString();
      translation.engineUsed = `${translation.engineUsed || "simple-v2"}+field-map-repair`;
      modulesUpdated += 1;
      if (!opts.dryRun) {
        await fs.writeFile(outPath, JSON.stringify(translation));
      }
    }

    console.log(
      `[repair-field-map] ${moduleId}: missing=${moduleMissing} filled_state=${moduleState} filled_source=${moduleSource} unresolved=${moduleUnresolved}`,
    );
  }

  console.log(
    `[repair-field-map] done locale=${opts.locale} modulesUpdated=${modulesUpdated} missing=${totalMissing} state=${filledFromState} source=${filledFromSource} unresolved=${unresolved} dryRun=${opts.dryRun}`,
  );
}

main().catch((error) => {
  console.error("FATAL:", error.message);
  process.exit(1);
});
