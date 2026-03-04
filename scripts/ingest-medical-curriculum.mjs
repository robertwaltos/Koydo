#!/usr/bin/env node
/**
 * ingest-medical-curriculum.mjs
 * ─────────────────────────────
 * Combines 5 open-source medical datasets into Koydo LearningModule .ts files.
 *
 * Sources:
 *   1. MedMCQA  — 193k MCQ (MIT)           → questions
 *   2. MedQuAD  — 47k Q&A (CC-BY-4.0)      → chunks + flashcards
 *   3. MedQA    — 10k USMLE MCQ (MIT)      → questions
 *   4. Medical Meadow — 34k flashcards (CC) → flashcards
 *   5. OpenStax — textbook TOC (CC-BY-4.0)  → lesson structure + chunks
 *
 * Usage:
 *   node scripts/ingest-medical-curriculum.mjs [--apply] [--limit N] [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const DATA_DIR = path.resolve("data/medical-curriculum");
const CATALOG_DIR = path.resolve("src/lib/modules/catalog");
const REPORT_JSON = path.resolve("public/MEDICAL-CURRICULUM-IMPORT-REPORT.json");
const REPORT_MD = path.resolve("public/MEDICAL-CURRICULUM-IMPORT-REPORT.md");

// ──────────────────────────────────────────────
// CLI args
// ──────────────────────────────────────────────
function parseArgs() {
  const args = { apply: false, dryRun: false, limit: 0, verbose: false };
  for (let i = 2; i < process.argv.length; i++) {
    const a = process.argv[i];
    if (a === "--apply") args.apply = true;
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--limit") args.limit = Math.max(0, Number(process.argv[++i] || 0));
    else if (a === "--verbose" || a === "-v") args.verbose = true;
  }
  return args;
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
function slugify(v) {
  return String(v ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function toConstName(moduleId) {
  return `${moduleId.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("")}Module`;
}

function hashText(text) {
  return createHash("sha256").update(text.toLowerCase().trim().replace(/\s+/g, " ")).digest("hex").slice(0, 16);
}

function normalizeQuestion(text) {
  return String(text ?? "").toLowerCase().trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "");
}

function truncate(text, max = 500) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max) + "...";
}

// ──────────────────────────────────────────────
// Medical Subject Taxonomy
// ──────────────────────────────────────────────
const MEDICAL_SUBJECTS = {
  anatomy: { display: "Anatomy & Physiology", slug: "anatomy-physiology" },
  physiology: { display: "Anatomy & Physiology", slug: "anatomy-physiology" },
  biochemistry: { display: "Biochemistry", slug: "biochemistry" },
  pharmacology: { display: "Pharmacology", slug: "pharmacology" },
  pathology: { display: "Pathology", slug: "pathology" },
  microbiology: { display: "Microbiology", slug: "microbiology" },
  immunology: { display: "Immunology", slug: "immunology" },
  "forensic medicine": { display: "Forensic Medicine", slug: "forensic-medicine" },
  "preventive medicine": { display: "Preventive & Community Medicine", slug: "preventive-medicine" },
  "community medicine": { display: "Preventive & Community Medicine", slug: "preventive-medicine" },
  "social & preventive medicine": { display: "Preventive & Community Medicine", slug: "preventive-medicine" },
  ophthalmology: { display: "Ophthalmology", slug: "ophthalmology" },
  ent: { display: "ENT (Otolaryngology)", slug: "ent" },
  otolaryngology: { display: "ENT (Otolaryngology)", slug: "ent" },
  dermatology: { display: "Dermatology", slug: "dermatology" },
  radiology: { display: "Radiology", slug: "radiology" },
  psychiatry: { display: "Psychiatry", slug: "psychiatry" },
  anesthesia: { display: "Anesthesia", slug: "anesthesia" },
  anaesthesia: { display: "Anesthesia", slug: "anesthesia" },
  medicine: { display: "Internal Medicine", slug: "internal-medicine" },
  "internal medicine": { display: "Internal Medicine", slug: "internal-medicine" },
  surgery: { display: "Surgery", slug: "surgery" },
  "general surgery": { display: "Surgery", slug: "surgery" },
  pediatrics: { display: "Pediatrics", slug: "pediatrics" },
  paediatrics: { display: "Pediatrics", slug: "pediatrics" },
  gynecology: { display: "Obstetrics & Gynecology", slug: "ob-gyn" },
  "gynaecology and obstetrics": { display: "Obstetrics & Gynecology", slug: "ob-gyn" },
  obstetrics: { display: "Obstetrics & Gynecology", slug: "ob-gyn" },
  "dental": { display: "Dental Medicine", slug: "dental" },
  skin: { display: "Dermatology", slug: "dermatology" },
  "gynaecology & obstetrics": { display: "Obstetrics & Gynecology", slug: "ob-gyn" },
  genetics: { display: "Medical Genetics", slug: "medical-genetics" },
  neurology: { display: "Neurology", slug: "neurology" },
  cardiology: { display: "Cardiology", slug: "cardiology" },
  oncology: { display: "Oncology", slug: "oncology" },
  "emergency medicine": { display: "Emergency Medicine", slug: "emergency-medicine" },
  orthopedics: { display: "Orthopedics", slug: "orthopedics" },
  orthopaedics: { display: "Orthopedics", slug: "orthopedics" },
  nephrology: { display: "Nephrology", slug: "nephrology" },
  gastroenterology: { display: "Gastroenterology", slug: "gastroenterology" },
  endocrinology: { display: "Endocrinology", slug: "endocrinology" },
  pulmonology: { display: "Pulmonology", slug: "pulmonology" },
  hematology: { display: "Hematology", slug: "hematology" },
  urology: { display: "Urology", slug: "urology" },
  rheumatology: { display: "Rheumatology", slug: "rheumatology" },
  "public health": { display: "Public Health", slug: "public-health" },
  nursing: { display: "Nursing", slug: "nursing" },
  nutrition: { display: "Nutrition Science", slug: "nutrition" },
  psychology: { display: "Medical Psychology", slug: "medical-psychology" },
};

function classifySubject(rawSubject) {
  const key = String(rawSubject ?? "").toLowerCase().trim();
  if (MEDICAL_SUBJECTS[key]) return MEDICAL_SUBJECTS[key];

  // Fuzzy match
  for (const [k, v] of Object.entries(MEDICAL_SUBJECTS)) {
    if (key.includes(k) || k.includes(key)) return v;
  }

  return { display: "General Medical Science", slug: "general-medical" };
}

// ──────────────────────────────────────────────
// 1. Parse MedMCQA
// ──────────────────────────────────────────────
function parseMedMCQA() {
  const trainPath = path.join(DATA_DIR, "medmcqa", "medmcqa-train.json");
  const valPath = path.join(DATA_DIR, "medmcqa", "medmcqa-validation.json");
  const items = [];

  for (const filePath of [trainPath, valPath]) {
    if (!fs.existsSync(filePath)) {
      console.log(`  [medmcqa] Skipping (not found): ${filePath}`);
      continue;
    }
    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    console.log(`  [medmcqa] Loaded ${raw.length} records from ${path.basename(filePath)}`);

    for (const item of raw) {
      const subject = classifySubject(item.subject_name);
      const optionLabels = ["opa", "opb", "opc", "opd"];
      const options = optionLabels
        .map((key, i) => ({
          id: `opt-${i + 1}`,
          text: String(item[key] ?? "").trim(),
        }))
        .filter(o => o.text);

      const correctIndex = typeof item.cop === "number" ? item.cop - 1 : parseInt(item.cop) - 1;
      const correctOptionId = correctIndex >= 0 && correctIndex < options.length
        ? options[correctIndex].id
        : options[0]?.id;

      items.push({
        source: "medmcqa",
        license: "MIT",
        attribution: "MedMCQA (openlifescienceai/medmcqa)",
        subject,
        question: {
          id: `medmcqa-${item.id ?? hashText(item.question)}`,
          text: String(item.question ?? "").trim(),
          options,
          correctOptionId,
          explanation: String(item.exp ?? "").trim() || undefined,
          hint: item.topic_name ? `Topic: ${item.topic_name}` : undefined,
        },
        normalizedText: normalizeQuestion(item.question),
      });
    }
  }

  console.log(`  [medmcqa] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// 2. Parse MedQuAD (XML)
// ──────────────────────────────────────────────
function parseMedQuAD() {
  const baseDir = path.join(DATA_DIR, "medquad", "MedQuAD-master");
  if (!fs.existsSync(baseDir)) {
    console.log("  [medquad] Not found, skipping");
    return [];
  }

  const items = [];
  const subdirs = fs.readdirSync(baseDir).filter(d =>
    fs.statSync(path.join(baseDir, d)).isDirectory()
  );

  // MedQuAD has subdirectories like "1_CancerGov_QA", "2_GARD_QA", etc.
  const subjectMap = {
    cancergov: { display: "Oncology", slug: "oncology" },
    gard: { display: "Rare Diseases", slug: "rare-diseases" },
    ghr: { display: "Medical Genetics", slug: "medical-genetics" },
    mplus: { display: "General Medical Science", slug: "general-medical" },
    mplushealth: { display: "General Medical Science", slug: "general-medical" },
    niddk: { display: "Internal Medicine", slug: "internal-medicine" },
    ninds: { display: "Neurology", slug: "neurology" },
    nhlbi: { display: "Cardiology", slug: "cardiology" },
    niaid: { display: "Immunology", slug: "immunology" },
    nichd: { display: "Pediatrics", slug: "pediatrics" },
    nci: { display: "Oncology", slug: "oncology" },
    nei: { display: "Ophthalmology", slug: "ophthalmology" },
    niam: { display: "Orthopedics", slug: "orthopedics" },
    seniorhealth: { display: "Geriatric Medicine", slug: "geriatric-medicine" },
  };

  for (const subdir of subdirs) {
    const dirPath = path.join(baseDir, subdir);
    const xmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith(".xml"));

    // Infer subject from directory name
    const dirSlug = subdir.toLowerCase();
    let subject = { display: "General Medical Science", slug: "general-medical" };
    for (const [key, val] of Object.entries(subjectMap)) {
      if (dirSlug.includes(key)) { subject = val; break; }
    }

    for (const xmlFile of xmlFiles) {
      try {
        const content = fs.readFileSync(path.join(dirPath, xmlFile), "utf-8");

        // Simple XML parsing (no external deps needed for MedQuAD format)
        const qaPairs = [];
        const questionMatches = content.matchAll(/<Question[^>]*>([\s\S]*?)<\/Question>/g);
        const answerMatches = [...content.matchAll(/<Answer>([\s\S]*?)<\/Answer>/g)];

        let idx = 0;
        for (const qMatch of questionMatches) {
          const questionText = qMatch[1].replace(/<[^>]+>/g, "").trim();
          const answerText = answerMatches[idx]
            ? answerMatches[idx][1].replace(/<[^>]+>/g, "").trim()
            : "";
          idx++;

          if (!questionText || !answerText) continue;

          // Store as flashcard AND chunk
          items.push({
            source: "medquad",
            license: "CC-BY-4.0",
            attribution: `MedQuAD (abachaa/MedQuAD) — ${subdir}`,
            subject,
            flashcard: {
              id: `medquad-${hashText(questionText)}`,
              front: truncate(questionText, 500),
              back: truncate(answerText, 1000),
            },
            chunk: {
              id: `medquad-chunk-${hashText(questionText)}`,
              title: truncate(questionText, 120),
              content: answerText,
              kind: "concept",
            },
            normalizedText: normalizeQuestion(questionText),
          });
        }
      } catch (err) {
        // Skip malformed XML files
      }
    }
  }

  console.log(`  [medquad] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// 3. Parse MedQA (JSONL or JSON)
// ──────────────────────────────────────────────
function parseMedQA() {
  const items = [];

  // Try JSONL format first
  const jsonlPath = path.join(DATA_DIR, "medqa", "medqa-usmle-train.jsonl");
  const jsonPath = path.join(DATA_DIR, "medqa", "medqa-usmle-train.json");

  if (fs.existsSync(jsonlPath)) {
    const lines = fs.readFileSync(jsonlPath, "utf-8").trim().split("\n");
    console.log(`  [medqa] Loaded ${lines.length} JSONL records`);
    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        const options = Object.entries(item.options || {}).map(([key, text], i) => ({
          id: `opt-${key}`,
          text: String(text).trim(),
        }));
        items.push({
          source: "medqa",
          license: "MIT",
          attribution: "MedQA — USMLE (jind11/MedQA)",
          subject: { display: "USMLE Prep", slug: "usmle-prep" },
          question: {
            id: `medqa-${hashText(item.question)}`,
            text: String(item.question ?? "").trim(),
            options,
            correctOptionId: `opt-${item.answer}`,
            explanation: item.meta_info || undefined,
          },
          normalizedText: normalizeQuestion(item.question),
        });
      } catch {}
    }
  } else if (fs.existsSync(jsonPath)) {
    // Parquet-converted JSON (from HuggingFace mirror)
    const raw = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    console.log(`  [medqa] Loaded ${raw.length} JSON records`);
    for (const item of raw) {
      // GBaker mirror format: question, choices (dict), answer (letter)
      const choices = item.choices || item.options || {};
      const options = Object.entries(choices).map(([key, text]) => ({
        id: `opt-${key}`,
        text: String(text).trim(),
      }));
      items.push({
        source: "medqa",
        license: "MIT",
        attribution: "MedQA — USMLE (GBaker/MedQA-USMLE-4-options)",
        subject: { display: "USMLE Prep", slug: "usmle-prep" },
        question: {
          id: `medqa-${hashText(item.question || item.sent1)}`,
          text: String(item.question || item.sent1 || "").trim(),
          options,
          correctOptionId: `opt-${item.answer || item.label}`,
          explanation: item.meta_info || undefined,
        },
        normalizedText: normalizeQuestion(item.question || item.sent1),
      });
    }
  } else {
    console.log("  [medqa] No data files found, skipping");
  }

  console.log(`  [medqa] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// 4. Parse Medical Meadow Flashcards
// ──────────────────────────────────────────────
function parseMedicalMeadow() {
  const filePath = path.join(DATA_DIR, "medical-meadow", "medical-meadow-flashcards.json");
  if (!fs.existsSync(filePath)) {
    console.log("  [medical-meadow] Not found, skipping");
    return [];
  }

  const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(`  [medical-meadow] Loaded ${raw.length} records`);

  const items = [];
  for (const item of raw) {
    const input = String(item.input || item.instruction || "").trim();
    const output = String(item.output || "").trim();
    if (!input || !output) continue;

    // Try to classify based on content keywords (word-boundary matching)
    let subject = { display: "General Medical Science", slug: "general-medical" };
    const combined = (input + " " + output).toLowerCase();
    // Sort by key length desc so longer/more-specific keys match first
    const sortedKeys = Object.entries(MEDICAL_SUBJECTS)
      .sort((a, b) => b[0].length - a[0].length);
    for (const [key, val] of sortedKeys) {
      // Require word boundary to avoid "ent" matching "treatment", etc.
      const re = new RegExp(`\\b${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
      if (re.test(combined)) {
        subject = val;
        break;
      }
    }

    items.push({
      source: "medical-meadow",
      license: "CC",
      attribution: "Medical Meadow Flashcards (medalpaca/medical_meadow_medical_flashcards)",
      subject,
      flashcard: {
        id: `meadow-${hashText(input)}`,
        front: truncate(input, 500),
        back: truncate(output, 1000),
      },
      normalizedText: normalizeQuestion(input),
    });
  }

  console.log(`  [medical-meadow] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// 5. Parse OpenStax (TOC structure)
// ──────────────────────────────────────────────
function parseOpenStax() {
  const filePath = path.join(DATA_DIR, "openstax", "openstax-books.json");
  if (!fs.existsSync(filePath)) {
    console.log("  [openstax] Not found, skipping");
    return [];
  }

  const books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(`  [openstax] Loaded ${books.length} books`);

  const items = [];
  const bookSubjects = {
    "anatomy-and-physiology-2e": { display: "Anatomy & Physiology", slug: "anatomy-physiology" },
    microbiology: { display: "Microbiology", slug: "microbiology" },
    "biology-2e": { display: "Biology", slug: "biology" },
    "concepts-of-biology": { display: "Biology", slug: "biology" },
    "chemistry-2e": { display: "Biochemistry", slug: "biochemistry" },
    "psychology-2e": { display: "Medical Psychology", slug: "medical-psychology" },
  };

  for (const book of books) {
    const subject = bookSubjects[book.slug] || { display: "General Medical Science", slug: "general-medical" };

    function extractLessons(node, depth = 0, chapterNum = [0]) {
      if (node.contents && Array.isArray(node.contents)) {
        for (const child of node.contents) {
          if (depth === 1) chapterNum[0]++;
          extractLessons(child, depth + 1, chapterNum);
        }
      } else {
        const title = String(node.title || "").replace(/<[^>]+>/g, "").trim();
        if (!title || title.toLowerCase().includes("preface") || title.toLowerCase().includes("index")) return;

        items.push({
          source: "openstax",
          license: "CC-BY-4.0",
          attribution: `OpenStax — ${book.title} (openstax.org)`,
          subject,
          lessonSeed: {
            id: `openstax-${book.slug}-${hashText(title)}`,
            title: truncate(title, 200),
            bookSlug: book.slug,
            bookTitle: book.title,
          },
          normalizedText: normalizeQuestion(title),
        });
      }
    }

    if (book.tree) {
      extractLessons(book.tree);
    }
  }

  console.log(`  [openstax] Total items: ${items.length}`);
  return items;
}

// ──────────────────────────────────────────────
// Deduplication
// ──────────────────────────────────────────────
function deduplicateItems(allItems) {
  const seen = new Map(); // normalizedText → first item
  const unique = [];
  let dupeCount = 0;
  const dupesBySource = {};

  for (const item of allItems) {
    const key = item.normalizedText;
    if (!key || key.length < 10) {
      unique.push(item);
      continue;
    }

    if (seen.has(key)) {
      dupeCount++;
      const src = item.source;
      dupesBySource[src] = (dupesBySource[src] || 0) + 1;

      // If duplicate has a different explanation/answer format, keep as alternate
      const existing = seen.get(key);
      if (item.question && existing.question) {
        // Keep better explanation
        if (item.question.explanation && !existing.question.explanation) {
          existing.question.explanation = item.question.explanation;
        }
      }
      continue;
    }

    seen.set(key, item);
    unique.push(item);
  }

  console.log(`\n  [dedup] ${dupeCount} duplicates removed`);
  for (const [src, count] of Object.entries(dupesBySource)) {
    console.log(`    ${src}: ${count} duplicates`);
  }
  console.log(`  [dedup] ${unique.length} unique items retained\n`);

  return { unique, dupeCount, dupesBySource };
}

// ──────────────────────────────────────────────
// Group items by subject → modules
// ──────────────────────────────────────────────
function groupBySubject(items) {
  const groups = {};
  for (const item of items) {
    const slug = item.subject.slug;
    if (!groups[slug]) {
      groups[slug] = {
        slug,
        display: item.subject.display,
        questions: [],
        flashcards: [],
        chunks: [],
        lessonSeeds: [],
        sources: new Set(),
        licenses: new Set(),
        attributions: new Set(),
      };
    }
    const g = groups[slug];
    g.sources.add(item.source);
    g.licenses.add(item.license);
    g.attributions.add(item.attribution);

    if (item.question) g.questions.push(item.question);
    if (item.flashcard) g.flashcards.push(item.flashcard);
    if (item.chunk) g.chunks.push(item.chunk);
    if (item.lessonSeed) g.lessonSeeds.push(item.lessonSeed);
  }
  return groups;
}

// ──────────────────────────────────────────────
// Build LearningModule from grouped items
// ──────────────────────────────────────────────
function buildModule(group) {
  const moduleId = `medicine-${group.slug}-u1-external`;
  const questionsPerLesson = 15;
  const flashcardsPerLesson = 10;
  const chunksPerLesson = 5;
  const lessons = [];

  // Build lessons from questions (quiz lessons)
  const questionBatches = [];
  for (let i = 0; i < group.questions.length; i += questionsPerLesson) {
    questionBatches.push(group.questions.slice(i, i + questionsPerLesson));
  }

  let lessonIdx = 0;
  for (const batch of questionBatches) {
    lessonIdx++;
    const lessonId = `${moduleId}-l${String(lessonIdx).padStart(2, "0")}`;
    lessons.push({
      id: lessonId,
      title: `${group.display} — Quiz ${lessonIdx}`,
      type: "quiz",
      duration: Math.max(5, batch.length * 2),
      questions: batch,
    });
  }

  // Build lessons from chunks (conceptual lessons)
  const chunkBatches = [];
  for (let i = 0; i < group.chunks.length; i += chunksPerLesson) {
    chunkBatches.push(group.chunks.slice(i, i + chunksPerLesson));
  }

  for (const batch of chunkBatches) {
    lessonIdx++;
    const lessonId = `${moduleId}-l${String(lessonIdx).padStart(2, "0")}`;
    // Pair with flashcards
    const startFlash = (lessonIdx - 1) * flashcardsPerLesson;
    const pairedFlashcards = group.flashcards.slice(startFlash, startFlash + flashcardsPerLesson);

    lessons.push({
      id: lessonId,
      title: `${group.display} — Concepts ${lessonIdx}`,
      type: "interactive",
      duration: Math.max(10, batch.length * 3),
      chunks: batch,
      flashcards: pairedFlashcards.length > 0 ? pairedFlashcards : undefined,
    });
  }

  // If we have remaining flashcards, create flashcard-only lessons
  const usedFlashcards = chunkBatches.length * flashcardsPerLesson;
  const remainingFlashcards = group.flashcards.slice(usedFlashcards);
  const flashcardBatches = [];
  for (let i = 0; i < remainingFlashcards.length; i += flashcardsPerLesson * 2) {
    flashcardBatches.push(remainingFlashcards.slice(i, i + flashcardsPerLesson * 2));
  }

  for (const batch of flashcardBatches) {
    lessonIdx++;
    const lessonId = `${moduleId}-l${String(lessonIdx).padStart(2, "0")}`;
    lessons.push({
      id: lessonId,
      title: `${group.display} — Flashcard Review ${lessonIdx}`,
      type: "interactive",
      duration: Math.max(5, batch.length),
      flashcards: batch,
      interactiveActivities: [{
        id: `${lessonId}-flash`,
        type: "flashcards",
        title: `${group.display} Flashcard Drill`,
        estimatedMinutes: Math.ceil(batch.length / 3),
      }],
    });
  }

  // If we have lesson seeds from OpenStax, create structural lessons
  for (const seed of group.lessonSeeds) {
    lessonIdx++;
    const lessonId = `${moduleId}-l${String(lessonIdx).padStart(2, "0")}`;
    lessons.push({
      id: lessonId,
      title: seed.title,
      type: "video",
      duration: 15,
      chunks: [{
        id: `${lessonId}-intro`,
        title: seed.title,
        content: `This lesson covers "${seed.title}" from ${seed.bookTitle}. Content sourced from OpenStax under CC-BY-4.0 license.`,
        kind: "intro",
      }],
      external: {
        source: "openstax",
        bookSlug: seed.bookSlug,
        bookTitle: seed.bookTitle,
      },
    });
  }

  // Cap at 100 lessons per module to keep modules manageable
  const cappedLessons = lessons.slice(0, 100);

  return {
    id: moduleId,
    title: `${group.display} (Medical Curriculum)`,
    description: `Comprehensive ${group.display.toLowerCase()} curriculum combining questions, flashcards, and conceptual content from ${group.sources.size} open-source medical datasets. Sources: ${[...group.attributions].join("; ")}.`,
    subject: "Science",
    lessons: cappedLessons,
    tags: [
      "external-ai",
      "curriculum-import",
      "medical",
      "medicine",
      group.slug,
      ...group.sources,
    ],
    minAge: 17,
    maxAge: 99,
    version: "external-1.0",
    difficultyBand: "advanced",
    gradeBand: "college",
    learningObjectives: [
      `Understand key concepts in ${group.display.toLowerCase()}`,
      `Apply clinical reasoning to ${group.display.toLowerCase()} scenarios`,
      `Recall and review medical terminology and facts`,
    ],
    external: {
      sources: [...group.sources],
      licenses: [...group.licenses],
      attributions: [...group.attributions],
      itemCounts: {
        questions: group.questions.length,
        flashcards: group.flashcards.length,
        chunks: group.chunks.length,
        lessonSeeds: group.lessonSeeds.length,
      },
      importedAt: new Date().toISOString(),
      totalLessons: cappedLessons.length,
      overflow: lessons.length > 100 ? lessons.length - 100 : 0,
    },
    metadata: {
      generatedBy: "ingest-medical-curriculum.mjs",
      importDate: new Date().toISOString(),
    },
  };
}

// ──────────────────────────────────────────────
// Write module as TypeScript catalog file
// ──────────────────────────────────────────────
function writeModuleFile(module) {
  const constName = toConstName(module.id);
  const fileName = `${module.id}.ts`;
  const filePath = path.join(CATALOG_DIR, fileName);

  // Serialize the module as a TypeScript constant
  const moduleJson = JSON.stringify(module, null, 2)
    // Escape backticks in content strings
    .replace(/`/g, "\\`");

  const content = `import type { LearningModule } from "@/lib/modules/types";

export const ${constName}: LearningModule = ${moduleJson};
`;

  fs.writeFileSync(filePath, content, "utf-8");
  return { filePath, constName, fileName, lessonCount: module.lessons.length };
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────
async function main() {
  const args = parseArgs();

  console.log("═".repeat(60));
  console.log(" Medical Curriculum Ingestion Pipeline");
  console.log("═".repeat(60));
  console.log(`  Apply: ${args.apply} | Dry-run: ${args.dryRun} | Limit: ${args.limit || "none"}`);
  console.log();

  // ── Step 1: Parse all datasets ──
  console.log("── Parsing Datasets ──");
  const medmcqa = parseMedMCQA();
  const medquad = parseMedQuAD();
  const medqa = parseMedQA();
  const meadow = parseMedicalMeadow();
  const openstax = parseOpenStax();

  const allItems = [...medmcqa, ...medquad, ...medqa, ...meadow, ...openstax];
  console.log(`\n  Total raw items: ${allItems.length}`);

  // ── Step 2: Deduplicate ──
  console.log("\n── Deduplication ──");
  const { unique, dupeCount, dupesBySource } = deduplicateItems(allItems);

  // ── Step 3: Group by subject ──
  console.log("── Grouping by Subject ──");
  const groups = groupBySubject(unique);
  const subjectNames = Object.keys(groups).sort();
  console.log(`  Found ${subjectNames.length} medical subjects:\n`);

  for (const slug of subjectNames) {
    const g = groups[slug];
    const total = g.questions.length + g.flashcards.length + g.chunks.length + g.lessonSeeds.length;
    console.log(`    ${g.display.padEnd(35)} ${String(total).padStart(6)} items (Q:${g.questions.length} F:${g.flashcards.length} C:${g.chunks.length} L:${g.lessonSeeds.length})`);
  }

  // ── Step 4: Build modules ──
  console.log("\n── Building Modules ──");
  const modules = [];
  let processedSubjects = subjectNames;
  if (args.limit > 0) processedSubjects = subjectNames.slice(0, args.limit);

  for (const slug of processedSubjects) {
    const group = groups[slug];
    const totalItems = group.questions.length + group.flashcards.length + group.chunks.length + group.lessonSeeds.length;

    // Skip subjects with too few items
    if (totalItems < 5) {
      console.log(`  [skip] ${group.display}: only ${totalItems} items`);
      continue;
    }

    const module = buildModule(group);
    modules.push(module);
    console.log(`  [built] ${module.id}: ${module.lessons.length} lessons`);
  }

  // ── Step 5: Write files ──
  if (args.apply && !args.dryRun) {
    console.log("\n── Writing Module Files ──");
    const written = [];
    for (const module of modules) {
      const result = writeModuleFile(module);
      written.push(result);
      console.log(`  [wrote] ${result.fileName} (${result.lessonCount} lessons)`);
    }

    console.log(`\n  Total files written: ${written.length}`);
  } else {
    console.log(`\n  [dry-run] Would write ${modules.length} module files`);
    for (const module of modules) {
      console.log(`    ${module.id}.ts — ${module.lessons.length} lessons`);
    }
  }

  // ── Step 6: Generate report ──
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalRawItems: allItems.length,
      duplicatesRemoved: dupeCount,
      uniqueItems: unique.length,
      subjectsFound: subjectNames.length,
      modulesGenerated: modules.length,
      totalLessons: modules.reduce((s, m) => s + m.lessons.length, 0),
      totalQuestions: modules.reduce((s, m) => s + (m.external?.itemCounts?.questions || 0), 0),
      totalFlashcards: modules.reduce((s, m) => s + (m.external?.itemCounts?.flashcards || 0), 0),
    },
    sources: {
      medmcqa: { count: medmcqa.length, license: "MIT" },
      medquad: { count: medquad.length, license: "CC-BY-4.0" },
      medqa: { count: medqa.length, license: "MIT" },
      medicalMeadow: { count: meadow.length, license: "CC" },
      openstax: { count: openstax.length, license: "CC-BY-4.0" },
    },
    deduplication: {
      totalDuplicates: dupeCount,
      bySource: dupesBySource,
    },
    modules: modules.map(m => ({
      id: m.id,
      title: m.title,
      lessons: m.lessons.length,
      questions: m.external?.itemCounts?.questions || 0,
      flashcards: m.external?.itemCounts?.flashcards || 0,
      chunks: m.external?.itemCounts?.chunks || 0,
      sources: m.external?.sources || [],
    })),
    applied: args.apply && !args.dryRun,
  };

  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2), "utf-8");
  console.log(`\n  Report: ${REPORT_JSON}`);

  // Markdown report
  const md = [
    "# Medical Curriculum Import Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Summary",
    "",
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Raw items ingested | ${report.summary.totalRawItems.toLocaleString()} |`,
    `| Duplicates removed | ${report.summary.duplicatesRemoved.toLocaleString()} |`,
    `| Unique items | ${report.summary.uniqueItems.toLocaleString()} |`,
    `| Medical subjects | ${report.summary.subjectsFound} |`,
    `| Modules generated | ${report.summary.modulesGenerated} |`,
    `| Total lessons | ${report.summary.totalLessons} |`,
    `| Total questions | ${report.summary.totalQuestions.toLocaleString()} |`,
    `| Total flashcards | ${report.summary.totalFlashcards.toLocaleString()} |`,
    "",
    "## Sources",
    "",
    `| Dataset | Items | License |`,
    `|---------|-------|---------|`,
    ...Object.entries(report.sources).map(([k, v]) =>
      `| ${k} | ${v.count.toLocaleString()} | ${v.license} |`
    ),
    "",
    "## Attribution",
    "",
    "This curriculum combines content from the following open-source repositories:",
    "",
    "- **MedMCQA** (MIT License) — openlifescienceai/medmcqa — Medical MCQ dataset",
    "- **MedQuAD** (CC-BY-4.0) — abachaa/MedQuAD — Medical Question Answering Dataset",
    "- **MedQA** (MIT License) — jind11/MedQA — USMLE-style questions",
    "- **Medical Meadow** (CC License) — medalpaca/medical_meadow_medical_flashcards — Medical flashcards",
    "- **OpenStax** (CC-BY-4.0) — openstax.org — Open textbook structure",
    "",
    "## Modules",
    "",
    `| Module | Lessons | Questions | Flashcards | Sources |`,
    `|--------|---------|-----------|------------|---------|`,
    ...report.modules.map(m =>
      `| ${m.title} | ${m.lessons} | ${m.questions.toLocaleString()} | ${m.flashcards.toLocaleString()} | ${m.sources.join(", ")} |`
    ),
    "",
  ].join("\n");

  fs.writeFileSync(REPORT_MD, md, "utf-8");
  console.log(`  Report: ${REPORT_MD}`);

  console.log("\n" + "═".repeat(60));
  console.log(` Done! ${modules.length} modules with ${report.summary.totalLessons} total lessons`);
  console.log("═".repeat(60));

  if (!args.apply) {
    console.log("\n  Run with --apply to write module files to the catalog.");
  }
}

main().catch(console.error);
