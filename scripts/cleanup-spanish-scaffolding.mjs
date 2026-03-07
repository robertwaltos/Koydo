#!/usr/bin/env node
/**
 * scripts/cleanup-spanish-scaffolding.mjs
 * 
 * Removes English fallback strings from Spanish translation files that were 
 * modified by the repair script. This ensures the Spanish locale only 
 * contains real translated content.
 */

import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const LOCALE = "es";

function parseModuleFromTs(filePath, sourceText) {
  const match = sourceText.match(/export const\s+([A-Za-z0-9_]+)\s*(?::\s*LearningModule)?\s*=/m);
  if (!match) return null;
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
  try {
    new vm.Script(transformed, { filename: path.basename(filePath) }).runInContext(ctx, { timeout: 5000 });
    return ctx.module.exports;
  } catch (e) {
    return null;
  }
}

function* extractModuleStrings(mod) {
  if (mod.title) yield { fieldPath: "_:title", text: mod.title };
  if (mod.description) yield { fieldPath: "_:description", text: mod.description };
  if (Array.isArray(mod.learningObjectives)) {
    for (let i = 0; i < mod.learningObjectives.length; i++) {
      yield { fieldPath: `_:learningObjectives.${i}`, text: mod.learningObjectives[i] };
    }
  }
  if (Array.isArray(mod.tags)) {
    for (let i = 0; i < mod.tags.length; i++) {
      yield { fieldPath: `_:tags.${i}`, text: mod.tags[i] };
    }
  }
  if (!Array.isArray(mod.lessons)) return;
  for (let li = 0; li < mod.lessons.length; li++) {
    const lesson = mod.lessons[li];
    const lid = lesson.id || `l${li}`;
    if (lesson.title) yield { fieldPath: `${lid}:title`, text: lesson.title };
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
        if (q.explanation) yield { fieldPath: `${lid}:questions.${qi}.explanation`, text: q.explanation };
        if (Array.isArray(q.options)) {
          for (let oi = 0; oi < q.options.length; oi++) {
            if (q.options[oi]?.text) yield { fieldPath: `${lid}:questions.${qi}.options.${oi}.text`, text: q.options[oi].text };
          }
        }
      }
    }
    if (Array.isArray(lesson.flashcards)) {
      for (let fi = 0; fi < lesson.flashcards.length; fi++) {
        const card = lesson.flashcards[fi];
        if (card.front) yield { fieldPath: `${lid}:flashcards.${fi}.front`, text: card.front };
        if (card.back) yield { fieldPath: `${lid}:flashcards.${fi}.back`, text: card.back };
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

async function main() {
  const localeDir = path.join(ROOT, "public", "translations", LOCALE);
  const files = await fs.readdir(localeDir);
  const targetFiles = files.filter(f => f.endsWith(".json") && !f.startsWith("_") && !f.includes(".codex-audit"));

  console.log(`🧹 Cleaning up Spanish scaffolding in ${targetFiles.length} files...`);

  let filesCleaned = 0;
  let fieldsPurged = 0;

  for (const file of targetFiles) {
    const filePath = path.join(localeDir, file);
    const translation = JSON.parse(await fs.readFile(filePath, "utf8"));

    if (!translation.engineUsed?.includes("+field-map-repair")) continue;

    const moduleId = translation.moduleId || file.replace(".json", "");
    const sourcePath = path.join(ROOT, "src", "lib", "modules", "catalog", `${moduleId}.ts`);
    
    if (!existsSync(sourcePath)) continue;

    const sourceText = readFileSync(sourcePath, "utf8");
    const mod = parseModuleFromTs(sourcePath, sourceText);
    if (!mod) continue;

    const englishStrings = {};
    for (const item of extractModuleStrings(mod)) {
      englishStrings[item.fieldPath] = item.text;
    }

    let changed = false;
    for (const fieldPath in translation.fields) {
      if (translation.fields[fieldPath] === englishStrings[fieldPath]) {
        delete translation.fields[fieldPath];
        fieldsPurged++;
        changed = true;
      }
    }

    if (changed) {
      translation.engineUsed = translation.engineUsed.replace("+field-map-repair", "");
      translation.fieldCount = Object.keys(translation.fields).length;
      translation.translatedAt = new Date().toISOString();
      await fs.writeFile(filePath, JSON.stringify(translation, null, 2));
      filesCleaned++;
    }
  }

  console.log(`✨ Cleanup complete. Files cleaned: ${filesCleaned}, English fields purged: ${fieldsPurged}`);
}

main().catch(console.error);
