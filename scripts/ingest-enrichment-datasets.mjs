#!/usr/bin/env node
/**
 * ingest-enrichment-datasets.mjs
 * ──────────────────────────────
 * Ingests downloaded open-source datasets into Koydo LearningModule .ts files.
 *
 * Datasets handled:
 *   1. AQUA-RAT  — 98K algebra word problems w/ rationales (Apache 2.0)
 *   2. GSM8K     — 8.8K grade-school math w/ solutions (MIT)
 *   3. PubMedQA  — 212K biomedical yes/no/maybe → MCQ (MIT)
 *   4. CommonsenseQA — 12K general knowledge MCQs (MIT)
 *   5. ARC       — 7.7K grade-school science MCQs (CC-BY-SA-4.0)
 *   6. SciQ      — 13.7K science MCQs w/ support (CC-BY-NC-3.0)
 *
 * Usage:
 *   node scripts/ingest-enrichment-datasets.mjs [--apply] [--dry-run] [--dataset all|math|biomedical|science] [--limit N]
 */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { createHash } from "node:crypto";

const DATA_DIR = path.resolve("data");
const CATALOG_DIR = path.resolve("src/lib/modules/catalog");
const REPORT_JSON = path.resolve("public/ENRICHMENT-DATASET-IMPORT-REPORT.json");
const REPORT_MD = path.resolve("public/ENRICHMENT-DATASET-IMPORT-REPORT.md");

// ──────────────────────────────────────────────
// CLI
// ──────────────────────────────────────────────
function parseArgs() {
  const args = { apply: false, dryRun: false, dataset: "all", limit: 0, verbose: false };
  for (let i = 2; i < process.argv.length; i++) {
    const a = process.argv[i];
    if (a === "--apply") args.apply = true;
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--dataset") args.dataset = process.argv[++i] || "all";
    else if (a === "--limit") args.limit = Math.max(0, Number(process.argv[++i] || 0));
    else if (a === "--verbose" || a === "-v") args.verbose = true;
  }
  return args;
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
function hashText(text) {
  return createHash("sha256").update(text.toLowerCase().trim().replace(/\s+/g, " ")).digest("hex").slice(0, 16);
}
function normalizeQ(text) {
  return String(text ?? "").toLowerCase().trim().replace(/\s+/g, " ").replace(/[^a-z0-9 ]/g, "");
}
function truncate(text, max = 500) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max) + "...";
}
function toConstName(moduleId) {
  return `${moduleId.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("")}Module`;
}

/** Read a JSONL file line-by-line (memory-efficient for large files). */
async function readJsonl(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const rows = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath, { encoding: "utf-8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try { rows.push(JSON.parse(trimmed)); } catch { /* skip malformed lines */ }
  }
  return rows;
}

// ──────────────────────────────────────────────
// Dataset Parsers
// ──────────────────────────────────────────────

/**
 * AQUA-RAT: Algebra word problems with rationales.
 * Format: { question, options: ["A)21", "B)21.5", ...], rationale, correct: "E" }
 */
async function parseAquaRat() {
  const items = [];
  for (const split of ["raw-train", "raw-validation", "raw-test"]) {
    const filePath = path.join(DATA_DIR, "aqua-rat", `${split}.jsonl`);
    const rows = await readJsonl(filePath);
    console.log(`  [aqua-rat] Loaded ${rows.length} from ${split}`);

    for (const row of rows) {
      if (!row.question || !row.options || !row.correct) continue;

      const options = row.options.map((opt, i) => {
        // Options are formatted as "A)21" or "A) 21"
        const cleaned = String(opt).replace(/^[A-E]\)\s*/, "").trim();
        const letter = String.fromCharCode(65 + i);
        return { id: `opt-${letter}`, text: cleaned };
      });

      const correctLetter = String(row.correct).trim().toUpperCase();

      items.push({
        source: "aqua-rat",
        license: "Apache-2.0",
        attribution: "AQUA-RAT (deepmind/aqua_rat)",
        slug: "algebra-word-problems",
        display: "Algebra Word Problems",
        question: {
          id: `aqua-${hashText(row.question)}`,
          text: String(row.question).trim(),
          options,
          correctOptionId: `opt-${correctLetter}`,
          explanation: row.rationale ? truncate(String(row.rationale).trim(), 800) : undefined,
        },
        normalizedText: normalizeQ(row.question),
      });
    }
  }
  console.log(`  [aqua-rat] Total: ${items.length}`);
  return items;
}

/**
 * GSM8K: Grade-school math with step-by-step solutions.
 * Format: { question, answer: "Step1\nStep2\n#### 72" }
 * → Convert to flashcard (question→solution) + chunk (solution steps)
 */
async function parseGsm8k() {
  const items = [];
  for (const split of ["main-train", "main-test"]) {
    const filePath = path.join(DATA_DIR, "gsm8k", `${split}.jsonl`);
    const rows = await readJsonl(filePath);
    console.log(`  [gsm8k] Loaded ${rows.length} from ${split}`);

    for (const row of rows) {
      if (!row.question || !row.answer) continue;

      const answer = String(row.answer).trim();
      // Extract final answer after ####
      const finalMatch = answer.match(/####\s*(.+)/);
      const finalAnswer = finalMatch ? finalMatch[1].trim() : "";
      // Solution steps (everything before ####)
      const solutionSteps = answer.replace(/####.+$/, "").trim();

      // Create as flashcard with solution
      items.push({
        source: "gsm8k",
        license: "MIT",
        attribution: "GSM8K (openai/gsm8k)",
        slug: "grade-school-math-solutions",
        display: "Grade-School Math Solutions",
        flashcard: {
          id: `gsm8k-${hashText(row.question)}`,
          front: String(row.question).trim(),
          back: finalAnswer ? `Answer: ${finalAnswer}\n\nSolution:\n${solutionSteps}` : solutionSteps,
        },
        normalizedText: normalizeQ(row.question),
      });

      // Also create a chunk with the worked solution
      items.push({
        source: "gsm8k",
        license: "MIT",
        attribution: "GSM8K (openai/gsm8k)",
        slug: "grade-school-math-solutions",
        display: "Grade-School Math Solutions",
        chunk: {
          id: `gsm8k-c-${hashText(row.question)}`,
          title: truncate(String(row.question).trim(), 120),
          content: `**Problem:** ${String(row.question).trim()}\n\n**Solution:**\n${solutionSteps}${finalAnswer ? `\n\n**Final Answer:** ${finalAnswer}` : ""}`,
          kind: "example",
        },
        normalizedText: normalizeQ(row.question) + "-chunk",
      });
    }
  }
  console.log(`  [gsm8k] Total items: ${items.length}`);
  return items;
}

/**
 * MATH (Hendrycks): Competition-level math problems with step-by-step solutions.
 * Format: { problem, level: "Level 5", type: "Algebra", solution }
 * → Flashcards (problem→solution) + chunks (worked solutions)
 */
async function parseMATH() {
  const items = [];
  const configs = ["algebra", "counting_and_probability", "geometry", "intermediate_algebra", "number_theory", "prealgebra", "precalculus"];
  for (const cfg of configs) {
    for (const split of ["train", "test"]) {
      const filePath = path.join(DATA_DIR, "math-dataset", `${cfg}-${split}.jsonl`);
      const rows = await readJsonl(filePath);
      if (rows.length > 0) console.log(`  [math] Loaded ${rows.length} from ${cfg}-${split}`);

      for (const row of rows) {
        if (!row.problem || !row.solution) continue;

        const problem = String(row.problem).trim();
        const solution = String(row.solution).trim();
        const level = String(row.level || "").replace("Level ", "");
        const category = String(row.type || cfg).trim();

        // Create flashcard
        items.push({
          source: "math-hendrycks",
          license: "MIT",
          attribution: "MATH (EleutherAI/hendrycks_math)",
          slug: "competition-math",
          display: "Competition Mathematics",
          flashcard: {
            id: `math-${hashText(problem)}`,
            front: problem,
            back: solution,
            hint: `Category: ${category}, Difficulty: ${level}/5`,
          },
          normalizedText: normalizeQ(problem),
        });

        // Create chunk with worked solution
        items.push({
          source: "math-hendrycks",
          license: "MIT",
          attribution: "MATH (EleutherAI/hendrycks_math)",
          slug: "competition-math",
          display: "Competition Mathematics",
          chunk: {
            id: `math-c-${hashText(problem)}`,
            title: truncate(problem, 120),
            content: `**Problem (${category}, Level ${level}):**\n${problem}\n\n**Solution:**\n${solution}`,
            kind: "example",
          },
          normalizedText: normalizeQ(problem) + "-chunk",
        });
      }
    }
  }
  console.log(`  [math] Total items: ${items.length}`);
  return items;
}

/**
 * PubMedQA: Biomedical research questions.
 * Format: { pubid, question, context: { contexts: [...], labels: [...] }, long_answer, final_decision: "yes"|"no"|"maybe" }
 * → Convert to MCQ with yes/no/maybe options, and chunk with context.
 */
async function parsePubMedQA() {
  const items = [];
  for (const file of ["pqa_labeled-train", "pqa_artificial-train"]) {
    const filePath = path.join(DATA_DIR, "pubmedqa", `${file}.jsonl`);
    const rows = await readJsonl(filePath);
    console.log(`  [pubmedqa] Loaded ${rows.length} from ${file}`);

    for (const row of rows) {
      if (!row.question || !row.final_decision) continue;

      const decision = String(row.final_decision).toLowerCase().trim();
      const validDecisions = ["yes", "no", "maybe"];
      if (!validDecisions.includes(decision)) continue;

      const options = [
        { id: "opt-yes", text: "Yes" },
        { id: "opt-no", text: "No" },
        { id: "opt-maybe", text: "Maybe / Insufficient evidence" },
      ];

      const correctId = `opt-${decision}`;

      // Use long_answer as explanation
      const explanation = row.long_answer ? truncate(String(row.long_answer).trim(), 600) : undefined;

      // Build context summary from contexts array
      const contexts = row.context?.contexts || [];
      const contextSummary = contexts.slice(0, 2).map(c => truncate(String(c).trim(), 300)).join("\n\n");

      items.push({
        source: "pubmedqa",
        license: "MIT",
        attribution: "PubMedQA (qiaojin/PubMedQA)",
        slug: "biomedical-research-qa",
        display: "Biomedical Research Q&A",
        question: {
          id: `pubmedqa-${hashText(row.question)}`,
          text: String(row.question).trim(),
          options,
          correctOptionId: correctId,
          explanation,
          hint: contextSummary ? truncate(contextSummary, 300) : undefined,
        },
        normalizedText: normalizeQ(row.question),
      });
    }
  }
  console.log(`  [pubmedqa] Total: ${items.length}`);
  return items;
}

/**
 * CommonsenseQA: General knowledge MCQs.
 * Format: { id, question, question_concept, choices: { label: ["A",...], text: ["...", ...] }, answerKey: "A" }
 */
async function parseCommonsenseQA() {
  const items = [];
  for (const split of ["default-train", "default-validation"]) {
    const filePath = path.join(DATA_DIR, "commonsenseqa", `${split}.jsonl`);
    const rows = await readJsonl(filePath);
    console.log(`  [commonsenseqa] Loaded ${rows.length} from ${split}`);

    for (const row of rows) {
      if (!row.question || !row.choices || !row.answerKey) continue;

      const labels = row.choices.label || [];
      const texts = row.choices.text || [];
      const options = labels.map((label, i) => ({
        id: `opt-${label}`,
        text: String(texts[i] || "").trim(),
      })).filter(o => o.text);

      if (options.length < 2) continue;

      items.push({
        source: "commonsenseqa",
        license: "MIT",
        attribution: "CommonsenseQA (tau/commonsense_qa)",
        slug: "commonsense-reasoning",
        display: "Commonsense Reasoning",
        question: {
          id: `csqa-${hashText(row.question)}`,
          text: String(row.question).trim(),
          options,
          correctOptionId: `opt-${String(row.answerKey).trim().toUpperCase()}`,
        },
        normalizedText: normalizeQ(row.question),
      });
    }
  }
  console.log(`  [commonsenseqa] Total: ${items.length}`);
  return items;
}

/**
 * ARC: AI2 Reasoning Challenge, grade-school science MCQs.
 * Format: { id, question, choices: { text: [...], label: [...] }, answerKey: "B" }
 * Has two subsets: ARC-Easy and ARC-Challenge
 */
async function parseARC() {
  const items = [];
  for (const subset of ["ARC-Easy", "ARC-Challenge"]) {
    for (const split of ["train", "validation", "test"]) {
      const filePath = path.join(DATA_DIR, "arc", `${subset}-${split}.jsonl`);
      const rows = await readJsonl(filePath);
      if (rows.length > 0) console.log(`  [arc] Loaded ${rows.length} from ${subset}-${split}`);

      for (const row of rows) {
        if (!row.question || !row.choices || !row.answerKey) continue;

        const labels = row.choices.label || [];
        const texts = row.choices.text || [];
        const options = labels.map((label, i) => ({
          id: `opt-${label}`,
          text: String(texts[i] || "").trim(),
        })).filter(o => o.text);

        if (options.length < 2) continue;

        const difficulty = subset === "ARC-Challenge" ? "challenge" : "easy";
        items.push({
          source: "arc",
          license: "CC-BY-SA-4.0",
          attribution: `ARC ${subset} (allenai/ai2_arc)`,
          slug: `science-reasoning-${difficulty}`,
          display: `Science Reasoning (${subset === "ARC-Challenge" ? "Challenge" : "Standard"})`,
          question: {
            id: `arc-${hashText(row.question)}`,
            text: String(row.question).trim(),
            options,
            correctOptionId: `opt-${String(row.answerKey).trim().toUpperCase()}`,
          },
          normalizedText: normalizeQ(row.question),
        });
      }
    }
  }
  console.log(`  [arc] Total: ${items.length}`);
  return items;
}

/**
 * SciQ: Science MCQs with support documents.
 * Format: { question, distractor1, distractor2, distractor3, correct_answer, support }
 */
async function parseSciQ() {
  const items = [];
  for (const split of ["default-train", "default-validation", "default-test"]) {
    const filePath = path.join(DATA_DIR, "sciq", `${split}.jsonl`);
    const rows = await readJsonl(filePath);
    console.log(`  [sciq] Loaded ${rows.length} from ${split}`);

    for (const row of rows) {
      if (!row.question || !row.correct_answer) continue;

      // Collect all answer options and shuffle them deterministically
      const answers = [
        row.correct_answer,
        row.distractor1,
        row.distractor2,
        row.distractor3,
      ].filter(Boolean).map(a => String(a).trim());

      if (answers.length < 2) continue;

      // Sort alphabetically for deterministic order, then map to options
      const sorted = answers.slice().sort();
      const options = sorted.map((text, i) => ({
        id: `opt-${String.fromCharCode(65 + i)}`,
        text,
      }));

      // Find the correct option
      const correctIdx = sorted.indexOf(String(row.correct_answer).trim());
      const correctId = `opt-${String.fromCharCode(65 + correctIdx)}`;

      const explanation = row.support ? truncate(String(row.support).trim(), 600) : undefined;

      items.push({
        source: "sciq",
        license: "CC-BY-NC-3.0",
        attribution: "SciQ (allenai/sciq)",
        slug: "science-concepts",
        display: "Science Concepts",
        question: {
          id: `sciq-${hashText(row.question)}`,
          text: String(row.question).trim(),
          options,
          correctOptionId: correctId,
          explanation,
        },
        normalizedText: normalizeQ(row.question),
      });

      // Also create a chunk from the support text (if substantial)
      if (row.support && String(row.support).trim().length > 100) {
        items.push({
          source: "sciq",
          license: "CC-BY-NC-3.0",
          attribution: "SciQ (allenai/sciq)",
          slug: "science-concepts",
          display: "Science Concepts",
          chunk: {
            id: `sciq-c-${hashText(row.question)}`,
            title: truncate(String(row.question).trim(), 120),
            content: String(row.support).trim(),
            kind: "concept",
          },
          normalizedText: normalizeQ(row.question) + "-chunk",
        });
      }
    }
  }
  console.log(`  [sciq] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// Dedup
// ──────────────────────────────────────────────
function dedup(items) {
  const seen = new Map();
  const unique = [];
  let dupes = 0;
  for (const item of items) {
    const key = item.normalizedText;
    if (!key || key.length < 10) { unique.push(item); continue; }
    if (seen.has(key)) {
      dupes++;
      const existing = seen.get(key);
      // Merge explanation if the existing item doesn't have one
      if (item.question?.explanation && !existing.question?.explanation) {
        existing.question.explanation = item.question.explanation;
      }
      continue;
    }
    seen.set(key, item);
    unique.push(item);
  }
  console.log(`  [dedup] ${dupes} duplicates removed, ${unique.length} retained`);
  return { unique, dupes };
}

// ──────────────────────────────────────────────
// Group → Build → Write
// ──────────────────────────────────────────────
function groupBySlug(items) {
  const groups = {};
  for (const item of items) {
    const slug = item.slug;
    if (!groups[slug]) {
      groups[slug] = {
        slug, display: item.display,
        questions: [], flashcards: [], chunks: [],
        sources: new Set(), licenses: new Set(), attributions: new Set(),
      };
    }
    const g = groups[slug];
    g.sources.add(item.source);
    g.licenses.add(item.license);
    g.attributions.add(item.attribution);
    if (item.question) g.questions.push(item.question);
    if (item.flashcard) g.flashcards.push(item.flashcard);
    if (item.chunk) g.chunks.push(item.chunk);
  }
  return groups;
}

/** Map slugs to their appropriate subject, gradeBand, and age range. */
const MODULE_CONFIG = {
  "algebra-word-problems": {
    subject: "Mathematics", gradeBand: "high-school", minAge: 13, maxAge: 99,
    difficultyBand: "intermediate", prefix: "enrichment-math",
    learningObjectives: [
      "Solve multi-step algebra word problems",
      "Apply mathematical reasoning to real-world scenarios",
      "Understand rationales behind algebraic solutions",
    ],
  },
  "grade-school-math-solutions": {
    subject: "Mathematics", gradeBand: "elementary", minAge: 6, maxAge: 14,
    difficultyBand: "beginner", prefix: "enrichment-math",
    learningObjectives: [
      "Solve grade-school math problems step by step",
      "Understand arithmetic reasoning and problem decomposition",
      "Build foundational math fluency through worked examples",
    ],
  },
  "competition-math": {
    subject: "Mathematics", gradeBand: "college", minAge: 15, maxAge: 99,
    difficultyBand: "advanced", prefix: "enrichment-math",
    learningObjectives: [
      "Solve competition-level math problems across algebra, geometry, and number theory",
      "Apply creative problem-solving techniques to challenging mathematical scenarios",
      "Master proof strategies and multi-step mathematical reasoning",
    ],
  },
  "biomedical-research-qa": {
    subject: "Science", gradeBand: "graduate", minAge: 18, maxAge: 99,
    difficultyBand: "advanced", prefix: "enrichment-biomedical",
    learningObjectives: [
      "Evaluate biomedical research claims with evidence-based reasoning",
      "Interpret study findings and draw conclusions",
      "Understand experimental methodology in biomedical sciences",
    ],
  },
  "commonsense-reasoning": {
    subject: "Science", gradeBand: "middle-school", minAge: 10, maxAge: 99,
    difficultyBand: "beginner", prefix: "enrichment-general",
    learningObjectives: [
      "Apply commonsense reasoning to everyday scenarios",
      "Make logical inferences from contextual information",
      "Strengthen general knowledge and critical thinking",
    ],
  },
  "science-reasoning-easy": {
    subject: "Science", gradeBand: "elementary", minAge: 8, maxAge: 14,
    difficultyBand: "beginner", prefix: "enrichment-science",
    learningObjectives: [
      "Answer grade-school science questions",
      "Understand basic scientific concepts and vocabulary",
      "Build foundational science literacy",
    ],
  },
  "science-reasoning-challenge": {
    subject: "Science", gradeBand: "middle-school", minAge: 11, maxAge: 16,
    difficultyBand: "intermediate", prefix: "enrichment-science",
    learningObjectives: [
      "Solve challenging science reasoning questions",
      "Apply scientific principles to complex scenarios",
      "Develop higher-order science thinking skills",
    ],
  },
  "science-concepts": {
    subject: "Science", gradeBand: "high-school", minAge: 12, maxAge: 99,
    difficultyBand: "intermediate", prefix: "enrichment-science",
    learningObjectives: [
      "Master key science concepts across physics, chemistry, and biology",
      "Connect scientific vocabulary to real-world phenomena",
      "Build comprehensive science knowledge",
    ],
  },
};

function buildModule(group) {
  const config = MODULE_CONFIG[group.slug];
  if (!config) throw new Error(`No config for slug: ${group.slug}`);

  const moduleId = `${config.prefix}-${group.slug}-u1-external`;
  const qPerLesson = 15, fPerLesson = 10, cPerLesson = 5;
  const lessons = [];
  let li = 0;

  // Quiz lessons from questions
  for (let i = 0; i < group.questions.length; i += qPerLesson) {
    li++;
    const batch = group.questions.slice(i, i + qPerLesson);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(3, "0")}`,
      title: `${group.display} — Quiz ${li}`,
      type: "quiz",
      duration: Math.max(5, batch.length * 2),
      questions: batch,
    });
  }

  // Chunk+flashcard lessons
  for (let i = 0; i < group.chunks.length; i += cPerLesson) {
    li++;
    const batch = group.chunks.slice(i, i + cPerLesson);
    const flash = group.flashcards.slice(li * fPerLesson, (li + 1) * fPerLesson);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(3, "0")}`,
      title: `${group.display} — Concepts ${Math.ceil(i / cPerLesson) + 1}`,
      type: "interactive",
      duration: Math.max(10, batch.length * 3),
      chunks: batch,
      ...(flash.length > 0 ? { flashcards: flash } : {}),
    });
  }

  // Remaining flashcard-only lessons
  const usedFlash = group.chunks.length > 0 ? Math.ceil(group.chunks.length / cPerLesson) * fPerLesson : 0;
  const remaining = group.flashcards.slice(usedFlash);
  for (let i = 0; i < remaining.length; i += fPerLesson * 2) {
    li++;
    const batch = remaining.slice(i, i + fPerLesson * 2);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(3, "0")}`,
      title: `${group.display} — Review ${Math.ceil(i / (fPerLesson * 2)) + 1}`,
      type: "interactive",
      duration: Math.max(5, batch.length),
      flashcards: batch,
    });
  }

  // Cap at 100 lessons per module (matches existing convention, keeps file sizes manageable)
  const maxLessons = 100;
  const cappedLessons = lessons.slice(0, maxLessons);

  return {
    id: moduleId,
    title: `${group.display} (Enrichment)`,
    description: `${group.display} enrichment content from ${[...group.attributions].join("; ")}. Licensed under ${[...group.licenses].join(", ")}.`,
    subject: config.subject,
    lessons: cappedLessons,
    tags: ["external-ai", "enrichment-import", group.slug, ...group.sources],
    minAge: config.minAge,
    maxAge: config.maxAge,
    version: "enrichment-1.0",
    difficultyBand: config.difficultyBand,
    gradeBand: config.gradeBand,
    learningObjectives: config.learningObjectives,
    external: {
      sources: [...group.sources],
      licenses: [...group.licenses],
      attributions: [...group.attributions],
      itemCounts: {
        questions: group.questions.length,
        flashcards: group.flashcards.length,
        chunks: group.chunks.length,
      },
      importedAt: new Date().toISOString(),
      totalLessons: cappedLessons.length,
      overflow: lessons.length > maxLessons ? lessons.length - maxLessons : 0,
    },
    metadata: { generatedBy: "ingest-enrichment-datasets.mjs", importDate: new Date().toISOString() },
  };
}

function writeModuleFile(mod) {
  const constName = toConstName(mod.id);
  const filePath = path.join(CATALOG_DIR, `${mod.id}.ts`);
  const json = JSON.stringify(mod, null, 2).replace(/`/g, "\\`");
  fs.writeFileSync(filePath, `import type { LearningModule } from "@/lib/modules/types";\n\nexport const ${constName}: LearningModule = ${json};\n`, "utf-8");
  return { filePath, constName, fileName: `${mod.id}.ts`, lessonCount: mod.lessons.length };
}

// ──────────────────────────────────────────────
// Report generation
// ──────────────────────────────────────────────
function generateReport(modules, stats) {
  const report = {
    reportDate: new Date().toISOString().slice(0, 10),
    generatedBy: "ingest-enrichment-datasets.mjs",
    stats,
    modules: modules.map(m => ({
      id: m.id,
      title: m.title,
      lessons: m.lessons.length,
      questions: m.external.itemCounts.questions,
      flashcards: m.external.itemCounts.flashcards,
      chunks: m.external.itemCounts.chunks,
      sources: m.external.sources,
      licenses: m.external.licenses,
      overflow: m.external.overflow,
    })),
  };

  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2), "utf-8");

  const mdLines = [
    `# Enrichment Dataset Import Report`,
    ``,
    `**Generated:** ${report.reportDate}`,
    `**Total parsed:** ${stats.totalParsed.toLocaleString()} items`,
    `**After dedup:** ${stats.afterDedup.toLocaleString()} items`,
    `**Duplicates removed:** ${stats.dupesRemoved.toLocaleString()}`,
    `**Modules created:** ${modules.length}`,
    `**Total lessons:** ${stats.totalLessons.toLocaleString()}`,
    `**Total questions:** ${stats.totalQuestions.toLocaleString()}`,
    `**Total flashcards:** ${stats.totalFlashcards.toLocaleString()}`,
    `**Total chunks:** ${stats.totalChunks.toLocaleString()}`,
    ``,
    `## Modules`,
    ``,
    `| Module ID | Title | Lessons | Questions | Flashcards | Chunks | Sources | Licenses |`,
    `|-----------|-------|---------|-----------|------------|--------|---------|----------|`,
  ];

  for (const m of report.modules) {
    mdLines.push(
      `| ${m.id} | ${m.title} | ${m.lessons} | ${m.questions.toLocaleString()} | ${m.flashcards.toLocaleString()} | ${m.chunks.toLocaleString()} | ${m.sources.join(", ")} | ${m.licenses.join(", ")} |`
    );
  }

  mdLines.push(``, `## Data Sources`, ``);
  const allSources = new Set();
  for (const m of report.modules) for (const s of m.sources) allSources.add(s);
  for (const s of allSources) mdLines.push(`- ${s}`);

  fs.writeFileSync(REPORT_MD, mdLines.join("\n"), "utf-8");
  console.log(`  Report: ${REPORT_JSON}`);
  console.log(`  Report: ${REPORT_MD}`);
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────
async function main() {
  const args = parseArgs();
  console.log("============================================================");
  console.log("Koydo Enrichment Dataset Ingestion");
  console.log(`  Mode: ${args.apply ? "APPLY (write files)" : "DRY RUN (preview only)"}`);
  console.log(`  Dataset: ${args.dataset}`);
  if (args.limit) console.log(`  Limit: ${args.limit} items per dataset`);
  console.log("============================================================\n");

  // Step 1: Parse all datasets
  console.log("Step 1: Parsing datasets...\n");
  let allItems = [];

  const shouldParse = (name) => args.dataset === "all" || args.dataset === name;

  if (shouldParse("math")) {
    console.log("── AQUA-RAT ──");
    const aqua = await parseAquaRat();
    allItems = allItems.concat(args.limit ? aqua.slice(0, args.limit) : aqua);

    console.log("\n── GSM8K ──");
    const gsm = await parseGsm8k();
    allItems = allItems.concat(args.limit ? gsm.slice(0, args.limit) : gsm);

    console.log("\n── MATH (Competition) ──");
    const math = await parseMATH();
    allItems = allItems.concat(args.limit ? math.slice(0, args.limit) : math);
  }

  if (shouldParse("biomedical")) {
    console.log("\n── PubMedQA ──");
    const pubmed = await parsePubMedQA();
    allItems = allItems.concat(args.limit ? pubmed.slice(0, args.limit) : pubmed);
  }

  if (shouldParse("science")) {
    console.log("\n── CommonsenseQA ──");
    const csqa = await parseCommonsenseQA();
    allItems = allItems.concat(args.limit ? csqa.slice(0, args.limit) : csqa);

    console.log("\n── ARC ──");
    const arc = await parseARC();
    allItems = allItems.concat(args.limit ? arc.slice(0, args.limit) : arc);

    console.log("\n── SciQ ──");
    const sciq = await parseSciQ();
    allItems = allItems.concat(args.limit ? sciq.slice(0, args.limit) : sciq);
  }

  console.log(`\nTotal parsed: ${allItems.length.toLocaleString()} items\n`);

  // Step 2: Dedup
  console.log("Step 2: Deduplication...");
  const { unique, dupes } = dedup(allItems);

  // Step 3: Group by slug
  console.log("\nStep 3: Grouping by module slug...");
  const groups = groupBySlug(unique);
  const slugs = Object.keys(groups).sort();
  console.log(`  ${slugs.length} module groups: ${slugs.join(", ")}`);

  // Step 4: Build modules
  console.log("\nStep 4: Building modules...");
  const modules = [];
  for (const slug of slugs) {
    const group = groups[slug];
    console.log(`  ${slug}: ${group.questions.length} questions, ${group.flashcards.length} flashcards, ${group.chunks.length} chunks`);
    const mod = buildModule(group);
    modules.push(mod);
    console.log(`    → ${mod.id} (${mod.lessons.length} lessons${mod.external.overflow ? `, ${mod.external.overflow} overflow` : ""})`);
  }

  // Step 5: Write files
  if (args.apply && !args.dryRun) {
    console.log("\nStep 5: Writing module files...");
    const written = [];
    for (const mod of modules) {
      const result = writeModuleFile(mod);
      written.push(result);
      console.log(`  ✓ ${result.fileName} (${result.lessonCount} lessons)`);
    }

    // Step 6: Generate report
    console.log("\nStep 6: Generating report...");
    const stats = {
      totalParsed: allItems.length,
      afterDedup: unique.length,
      dupesRemoved: dupes,
      totalLessons: modules.reduce((s, m) => s + m.lessons.length, 0),
      totalQuestions: modules.reduce((s, m) => s + m.external.itemCounts.questions, 0),
      totalFlashcards: modules.reduce((s, m) => s + m.external.itemCounts.flashcards, 0),
      totalChunks: modules.reduce((s, m) => s + m.external.itemCounts.chunks, 0),
    };
    generateReport(modules, stats);

    console.log("\n============================================================");
    console.log(`DONE: ${modules.length} modules written, ${stats.totalLessons.toLocaleString()} lessons total`);
    console.log(`  Questions: ${stats.totalQuestions.toLocaleString()}`);
    console.log(`  Flashcards: ${stats.totalFlashcards.toLocaleString()}`);
    console.log(`  Chunks: ${stats.totalChunks.toLocaleString()}`);
    console.log("\nNext steps:");
    console.log("  1. node scripts/sync-modules.mjs  (update registry)");
    console.log("  2. npx next build                 (verify build)");
    console.log("  3. npx vercel --prod --yes --archive=tgz  (deploy)");
    console.log("============================================================");
  } else {
    console.log("\nDRY RUN — no files written. Use --apply to write files.");
    console.log("\nSummary:");
    for (const mod of modules) {
      console.log(`  ${mod.id}: ${mod.lessons.length} lessons (${mod.external.itemCounts.questions} Q, ${mod.external.itemCounts.flashcards} FC, ${mod.external.itemCounts.chunks} chunks)`);
    }
  }
}

main().catch((error) => {
  console.error("FATAL:", error);
  process.exitCode = 1;
});
