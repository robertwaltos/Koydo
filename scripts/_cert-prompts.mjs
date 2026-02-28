/**
 * _cert-prompts.mjs — certify LESSON-MEDIA-PROMPT-PACK.json has no duplicates
 * and all prompts are reviewed.
 * Usage: node scripts/_cert-prompts.mjs
 */
import fs from "node:fs";
import path from "node:path";

const pack = JSON.parse(fs.readFileSync(path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json"), "utf8"));

// Flatten all lessons across all modules
const allLessons = [];
for (const mod of pack.modules ?? []) {
  for (const lesson of mod.lessons ?? []) {
    allLessons.push({ ...lesson, moduleId: mod.moduleId });
  }
}

const ids = allLessons.map(l => l.lessonId);
const idSet = new Set(ids);
// O(n) duplicate detection via Set instead of O(n²) indexOf scan
const seenIds = new Set();
const dupeIds = ids.filter(id => {
  if (seenIds.has(id)) return true;
  seenIds.add(id);
  return false;
});

console.log("=== PROMPT PACK CERTIFICATION ===");
console.log(`Pack version:       ${pack.schemaVersion ?? "unknown"}`);
console.log(`Generated:          ${pack.generatedAt ?? "unknown"}`);
console.log(`Modules:            ${pack.modules?.length ?? 0}`);
console.log(`Total lessons:      ${allLessons.length}`);
console.log(`Unique lesson IDs:  ${idSet.size}`);
console.log(`Duplicate IDs:      ${dupeIds.length}`);
if (dupeIds.length > 0) {
  console.log("Duplicated IDs (up to 20):", [...new Set(dupeIds)].slice(0, 20));
}

// qaStatus per prompt key (skip researchAgent — not a media job key)
const MEDIA_KEYS = ["lessonImage", "seedanceVideo", "seedanceAnimation"];
let allReviewed = 0, partial = 0, none = 0, missingMeta = 0, emptyPrompt = 0;
const needsReviewList = [];

for (const l of allLessons) {
  const pm = l.promptMeta;
  if (!pm) { missingMeta++; continue; }

  const statuses = MEDIA_KEYS.map(k => pm[k]?.qaStatus);
  const reviewedCount = statuses.filter(s => s === "reviewed").length;
  if (reviewedCount === MEDIA_KEYS.length) allReviewed++;
  else if (reviewedCount > 0) partial++;
  else none++;

  for (const k of MEDIA_KEYS) {
    // Prompt text lives in l.prompts[k], not in promptMeta
    const promptText = l.prompts?.[k];
    if (!promptText || !String(promptText).trim()) emptyPrompt++;
    if (pm[k]?.qaStatus !== "reviewed" && needsReviewList.length < 10) {
      needsReviewList.push(`${l.lessonId}[${k}] = ${pm[k]?.qaStatus ?? "missing"}`);
    }
  }
}

console.log("");
console.log("=== QA STATUS COVERAGE (media keys only) ===");
console.log(`All 3 media prompts reviewed:  ${allReviewed} / ${allLessons.length}`);
console.log(`Partial (some reviewed):       ${partial}`);
console.log(`None reviewed:                 ${none}`);
console.log(`Missing promptMeta entirely:   ${missingMeta}`);
console.log(`Empty prompt texts:            ${emptyPrompt}`);
if (needsReviewList.length > 0) {
  console.log("Sample unreviewed:", needsReviewList);
}

console.log("\nPack totals (built-in):", JSON.stringify(pack.totals, null, 2));

console.log("");
// Empty prompts are a data quality warning, not a blocker (some lessons may not
// have generated prompts yet — they'll fall back to lesson title in the runner).
const pass = dupeIds.length === 0 && partial === 0 && none === 0 && missingMeta === 0;
if (pass) {
  if (emptyPrompt > 0) {
    console.log(`⚠  CERTIFICATION PASSED with WARNING — ${emptyPrompt} lessons have no generated prompt text (will fall back to lesson title at runtime).`);
  } else {
    console.log("✔ CERTIFICATION PASSED — unique IDs, all 3 media prompts reviewed, no empty prompts.");
  }
} else {
  if (dupeIds.length > 0) console.log(`✗ ${dupeIds.length} duplicate lesson IDs`);
  if (partial > 0 || none > 0) console.log(`✗ ${partial + none} lessons with incomplete QA status`);
  if (missingMeta > 0) console.log(`✗ ${missingMeta} lessons missing promptMeta entirely`);
  process.exit(1);
}


