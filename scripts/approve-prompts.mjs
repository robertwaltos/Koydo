/**
 * approve-prompts.mjs
 *
 * Bulk-approves generated prompts in LESSON-MEDIA-PROMPT-PACK.json by setting
 * promptMeta.<key>.qaStatus = "reviewed" for all (or filtered) entries that
 * currently have source="generated" and qaStatus="needs_review".
 *
 * Usage:
 *   node scripts/approve-prompts.mjs               # approve ALL generated prompts
 *   node scripts/approve-prompts.mjs --module a-level-prep-101
 *   node scripts/approve-prompts.mjs --key seedanceVideo
 *   node scripts/approve-prompts.mjs --dry-run      # preview only
 *
 * After running, also commit the updated LESSON-MEDIA-PROMPT-PACK.json so that
 * the reviewed status persists across re-generations.
 *
 * NOTE: This does NOT modify the original catalog .ts files — only the generated
 * JSON pack. If you re-run `prompts:lesson-media` without the --preserve-qa flag
 * the qaStatus for generated prompts will be reset.  The regeneration script now
 * respects any existing qaStatus in the JSON via readPromptMetaField, so the
 * approved status survives re-generation as long as the JSON is the source of truth.
 */

import fs from "node:fs";
import path from "node:path";

const packPath = path.resolve("public/LESSON-MEDIA-PROMPT-PACK.json");

const PROMPT_KEYS = ["seedanceVideo", "seedanceAnimation", "lessonImage"];

function parseArgs(argv) {
  const options = {
    dryRun: false,
    moduleId: "",
    lessonId: "",
    key: "", // "" = all keys
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--module" && argv[i + 1]) { options.moduleId = argv[++i]; }
    else if (arg === "--lesson" && argv[i + 1]) { options.lessonId = argv[++i]; }
    else if (arg === "--key" && argv[i + 1]) { options.key = argv[++i]; }
  }

  return options;
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(packPath)) {
    console.error(`Missing ${packPath}. Run "npm run prompts:lesson-media" first.`);
    process.exitCode = 1;
    return;
  }

  const pack = JSON.parse(fs.readFileSync(packPath, "utf8"));
  const keysToProcess = options.key
    ? [options.key]
    : PROMPT_KEYS;

  let approvedCount = 0;
  let alreadyReviewedCount = 0;
  let skippedModuleFilter = 0;
  let skippedLessonFilter = 0;

  for (const moduleEntry of pack.modules ?? []) {
    if (options.moduleId && moduleEntry.moduleId !== options.moduleId) {
      skippedModuleFilter++;
      continue;
    }

    for (const lesson of moduleEntry.lessons ?? []) {
      if (options.lessonId && lesson.lessonId !== options.lessonId) {
        skippedLessonFilter++;
        continue;
      }

      for (const key of keysToProcess) {
        const meta = lesson.promptMeta?.[key];
        if (!meta) continue;

        if (meta.qaStatus === "reviewed") {
          alreadyReviewedCount++;
          continue;
        }

        // Only auto-approve generated prompts (lesson-authored prompts are already reviewed)
        if (meta.source === "lesson") {
          alreadyReviewedCount++;
          continue;
        }

        approvedCount++;

        if (!options.dryRun) {
          meta.qaStatus = "reviewed";
          // Bump version to mark this prompt as enriched + approved
          if (meta.version === "generated.v1") {
            meta.version = "generated.v2.approved";
          }
        }
      }
    }
  }

  if (!options.dryRun && approvedCount > 0) {
    // Update the totals.promptQaStatusCounts
    if (pack.totals?.promptQaStatusCounts) {
      const prev = pack.totals.promptQaStatusCounts.needs_review ?? 0;
      const prevReviewed = pack.totals.promptQaStatusCounts.reviewed ?? 0;
      pack.totals.promptQaStatusCounts.needs_review = Math.max(0, prev - approvedCount);
      pack.totals.promptQaStatusCounts.reviewed = prevReviewed + approvedCount;
    }
    pack.approvedAt = new Date().toISOString();
    fs.writeFileSync(packPath, JSON.stringify(pack, null, 2));
    console.log(`Updated ${packPath}`);
  }

  console.log("");
  console.log("=== approve-prompts summary ===");
  console.log(`Approved (set reviewed): ${approvedCount}`);
  console.log(`Already reviewed:        ${alreadyReviewedCount}`);
  if (skippedModuleFilter > 0) console.log(`Skipped (module filter): ${skippedModuleFilter} modules`);
  if (skippedLessonFilter > 0) console.log(`Skipped (lesson filter): ${skippedLessonFilter} lessons`);
  console.log(`Mode: ${options.dryRun ? "dry-run (no changes written)" : "applied"}`);

  if (options.dryRun && approvedCount > 0) {
    console.log("");
    console.log('Run without "--dry-run" to write changes.');
  }
}

main();
