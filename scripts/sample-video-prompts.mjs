/**
 * sample-video-prompts.mjs
 * Prints N random seedanceVideo prompts matching a keyword filter.
 * Usage: node scripts/sample-video-prompts.mjs [keyword] [count]
 * Default: keyword="teacher" count=10
 */
import fs from "node:fs";
import path from "node:path";

const keyword = (process.argv[2] ?? "teacher").toLowerCase();
const count = parseInt(process.argv[3] ?? "10", 10);

const pack = JSON.parse(fs.readFileSync(path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json"), "utf8"));

const hits = [];
for (const mod of pack.modules ?? []) {
  for (const lesson of mod.lessons ?? []) {
    const prompt = lesson.prompts?.seedanceVideo ?? "";
    if (prompt.toLowerCase().includes(keyword)) {
      hits.push({
        lessonId: lesson.lessonId,
        lessonTitle: lesson.lessonTitle,
        module: mod.moduleTitle,
        prompt,
      });
    }
  }
}

// Fisher-Yates shuffle, take count
for (let i = hits.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [hits[i], hits[j]] = [hits[j], hits[i]];
}
const sample = hits.slice(0, count);

console.log(`Found ${hits.length} seedanceVideo prompts containing "${keyword}". Showing ${sample.length} random:\n`);
for (let i = 0; i < sample.length; i++) {
  const h = sample[i];
  console.log(`─── ${i + 1}. ${h.lessonTitle}`);
  console.log(`    Module: ${h.module}`);
  console.log(`    ID: ${h.lessonId}`);
  console.log(`    PROMPT:\n${h.prompt}\n`);
}
