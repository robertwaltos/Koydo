#!/usr/bin/env node
/**
 * ingest-universal-curriculum.mjs
 * ──────────────────────────────────
 * Universal ingestion pipeline that converts open-source datasets
 * (MMLU, MMLU-Pro, FinQA, CaseHOLD, CUAD, DataTonic, etc.)
 * into Koydo LearningModule .ts files.
 *
 * Generates:
 *   - Law School modules (bar exam, contracts, case law, legal reasoning)
 *   - MBA/Business modules (business ethics, marketing, management, finance)
 *   - Electrical Engineering modules (circuits, signals, power, digital)
 *   - All Master's-level modules from MMLU-Pro subjects
 *
 * Usage:
 *   node scripts/ingest-universal-curriculum.mjs [--apply] [--domain law|business|ee|masters|all] [--dry-run]
 */

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const DATA_DIR = path.resolve("data");
const CATALOG_DIR = path.resolve("src/lib/modules/catalog");
const REPORT_JSON = path.resolve("public/UNIVERSAL-CURRICULUM-IMPORT-REPORT.json");
const REPORT_MD = path.resolve("public/UNIVERSAL-CURRICULUM-IMPORT-REPORT.md");

// ──────────────────────────────────────────────
// CLI
// ──────────────────────────────────────────────
function parseArgs() {
  const args = { apply: false, dryRun: false, domain: "all", limit: 0, verbose: false };
  for (let i = 2; i < process.argv.length; i++) {
    const a = process.argv[i];
    if (a === "--apply") args.apply = true;
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "--domain") args.domain = process.argv[++i] || "all";
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
function normalizeQ(text) {
  return String(text ?? "").toLowerCase().trim().replace(/\s+/g, " ").replace(/[^a-z0-9 ]/g, "");
}
function truncate(text, max = 500) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max) + "...";
}
function readJsonSafe(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// ──────────────────────────────────────────────
// MMLU Subject → Koydo Domain Mapping
// ──────────────────────────────────────────────
const MMLU_DOMAIN_MAP = {
  // LAW
  professional_law: { domain: "law", display: "Professional Law", slug: "professional-law", level: "graduate" },
  international_law: { domain: "law", display: "International Law", slug: "international-law", level: "graduate" },
  jurisprudence: { domain: "law", display: "Jurisprudence", slug: "jurisprudence", level: "graduate" },

  // BUSINESS / MBA
  business_ethics: { domain: "business", display: "Business Ethics", slug: "business-ethics", level: "graduate" },
  management: { domain: "business", display: "Management", slug: "management", level: "graduate" },
  marketing: { domain: "business", display: "Marketing", slug: "marketing", level: "graduate" },
  professional_accounting: { domain: "business", display: "Professional Accounting", slug: "professional-accounting", level: "graduate" },
  public_relations: { domain: "business", display: "Public Relations", slug: "public-relations", level: "graduate" },
  high_school_macroeconomics: { domain: "business", display: "Macroeconomics", slug: "macroeconomics", level: "undergrad" },
  high_school_microeconomics: { domain: "business", display: "Microeconomics", slug: "microeconomics", level: "undergrad" },

  // ELECTRICAL ENGINEERING
  electrical_engineering: { domain: "ee", display: "Electrical Engineering", slug: "electrical-engineering", level: "graduate" },

  // MASTERS-LEVEL (Sciences, Humanities, Professional)
  abstract_algebra: { domain: "masters", display: "Abstract Algebra", slug: "abstract-algebra", level: "graduate" },
  anatomy: { domain: "masters", display: "Anatomy", slug: "anatomy", level: "graduate" },
  astronomy: { domain: "masters", display: "Astronomy", slug: "astronomy", level: "graduate" },
  clinical_knowledge: { domain: "masters", display: "Clinical Knowledge", slug: "clinical-knowledge", level: "graduate" },
  college_biology: { domain: "masters", display: "College Biology", slug: "college-biology", level: "graduate" },
  college_chemistry: { domain: "masters", display: "College Chemistry", slug: "college-chemistry", level: "graduate" },
  college_computer_science: { domain: "masters", display: "College Computer Science", slug: "college-computer-science", level: "graduate" },
  college_mathematics: { domain: "masters", display: "College Mathematics", slug: "college-mathematics", level: "graduate" },
  college_medicine: { domain: "masters", display: "College Medicine", slug: "college-medicine", level: "graduate" },
  college_physics: { domain: "masters", display: "College Physics", slug: "college-physics", level: "graduate" },
  computer_security: { domain: "masters", display: "Computer Security", slug: "computer-security", level: "graduate" },
  conceptual_physics: { domain: "masters", display: "Conceptual Physics", slug: "conceptual-physics", level: "undergrad" },
  econometrics: { domain: "masters", display: "Econometrics", slug: "econometrics", level: "graduate" },
  formal_logic: { domain: "masters", display: "Formal Logic", slug: "formal-logic", level: "graduate" },
  global_facts: { domain: "masters", display: "Global Facts", slug: "global-facts", level: "graduate" },
  human_aging: { domain: "masters", display: "Human Aging", slug: "human-aging", level: "graduate" },
  human_sexuality: { domain: "masters", display: "Human Sexuality", slug: "human-sexuality", level: "graduate" },
  machine_learning: { domain: "masters", display: "Machine Learning", slug: "machine-learning", level: "graduate" },
  medical_genetics: { domain: "masters", display: "Medical Genetics", slug: "medical-genetics-mmlu", level: "graduate" },
  miscellaneous: { domain: "masters", display: "General Knowledge", slug: "general-knowledge", level: "graduate" },
  moral_disputes: { domain: "masters", display: "Moral Disputes", slug: "moral-disputes", level: "graduate" },
  moral_scenarios: { domain: "masters", display: "Moral Scenarios", slug: "moral-scenarios", level: "graduate" },
  nutrition: { domain: "masters", display: "Nutrition", slug: "nutrition-mmlu", level: "graduate" },
  philosophy: { domain: "masters", display: "Philosophy", slug: "philosophy-mmlu", level: "graduate" },
  prehistory: { domain: "masters", display: "Prehistory", slug: "prehistory", level: "graduate" },
  professional_medicine: { domain: "masters", display: "Professional Medicine", slug: "professional-medicine", level: "graduate" },
  professional_psychology: { domain: "masters", display: "Professional Psychology", slug: "professional-psychology", level: "graduate" },
  public_relations: { domain: "masters", display: "Public Relations", slug: "public-relations", level: "graduate" },
  security_studies: { domain: "masters", display: "Security Studies", slug: "security-studies", level: "graduate" },
  sociology: { domain: "masters", display: "Sociology", slug: "sociology", level: "graduate" },
  us_foreign_policy: { domain: "masters", display: "US Foreign Policy", slug: "us-foreign-policy", level: "graduate" },
  virology: { domain: "masters", display: "Virology", slug: "virology", level: "graduate" },
  world_religions: { domain: "masters", display: "World Religions", slug: "world-religions", level: "graduate" },
  high_school_biology: { domain: "masters", display: "Biology", slug: "biology-mmlu", level: "undergrad" },
  high_school_chemistry: { domain: "masters", display: "Chemistry", slug: "chemistry-mmlu", level: "undergrad" },
  high_school_computer_science: { domain: "masters", display: "Computer Science", slug: "cs-intro", level: "undergrad" },
  high_school_european_history: { domain: "masters", display: "European History", slug: "european-history", level: "undergrad" },
  high_school_geography: { domain: "masters", display: "Geography", slug: "geography-mmlu", level: "undergrad" },
  high_school_government_and_politics: { domain: "masters", display: "Government & Politics", slug: "government-politics", level: "undergrad" },
  high_school_mathematics: { domain: "masters", display: "Mathematics", slug: "mathematics-mmlu", level: "undergrad" },
  high_school_physics: { domain: "masters", display: "Physics", slug: "physics-mmlu", level: "undergrad" },
  high_school_psychology: { domain: "masters", display: "Psychology", slug: "psychology-mmlu", level: "undergrad" },
  high_school_statistics: { domain: "masters", display: "Statistics", slug: "statistics-mmlu", level: "undergrad" },
  high_school_us_history: { domain: "masters", display: "US History", slug: "us-history", level: "undergrad" },
  high_school_world_history: { domain: "masters", display: "World History", slug: "world-history-mmlu", level: "undergrad" },
  logical_fallacies: { domain: "masters", display: "Logical Fallacies", slug: "logical-fallacies", level: "undergrad" },
};

// MMLU-Pro category map (lowercase keys to match actual data)
const MMLU_PRO_DOMAIN_MAP = {
  business: { domain: "business", display: "Business (Advanced)", slug: "business-advanced", level: "graduate" },
  law: { domain: "law", display: "Law (Advanced)", slug: "law-advanced", level: "graduate" },
  economics: { domain: "business", display: "Economics (Advanced)", slug: "economics-advanced", level: "graduate" },
  engineering: { domain: "ee", display: "Engineering (Advanced)", slug: "engineering-advanced", level: "graduate" },
  math: { domain: "masters", display: "Mathematics (Advanced)", slug: "math-advanced", level: "graduate" },
  physics: { domain: "masters", display: "Physics (Advanced)", slug: "physics-advanced", level: "graduate" },
  chemistry: { domain: "masters", display: "Chemistry (Advanced)", slug: "chemistry-advanced", level: "graduate" },
  biology: { domain: "masters", display: "Biology (Advanced)", slug: "biology-advanced", level: "graduate" },
  psychology: { domain: "masters", display: "Psychology (Advanced)", slug: "psychology-advanced", level: "graduate" },
  philosophy: { domain: "masters", display: "Philosophy (Advanced)", slug: "philosophy-advanced", level: "graduate" },
  history: { domain: "masters", display: "History (Advanced)", slug: "history-advanced", level: "graduate" },
  "computer science": { domain: "masters", display: "Computer Science (Advanced)", slug: "cs-advanced", level: "graduate" },
  health: { domain: "masters", display: "Health Sciences (Advanced)", slug: "health-advanced", level: "graduate" },
  other: { domain: "masters", display: "Interdisciplinary (Advanced)", slug: "interdisciplinary-advanced", level: "graduate" },
};

// ──────────────────────────────────────────────
// Parsers
// ──────────────────────────────────────────────

function parseMMLU(targetDomains) {
  const items = [];
  for (const file of ["mmlu/mmlu-test.json", "mmlu/mmlu-validation.json"]) {
    const data = readJsonSafe(path.join(DATA_DIR, file));
    if (!data) continue;
    console.log(`  [mmlu] Loaded ${data.length} from ${file}`);

    for (const item of data) {
      const subject = item.subject || "miscellaneous";
      const mapping = MMLU_DOMAIN_MAP[subject];
      if (!mapping) continue;
      if (!targetDomains.has(mapping.domain)) continue;

      const choices = item.choices || [];
      const options = choices.map((text, i) => ({
        id: `opt-${String.fromCharCode(65 + i)}`,
        text: String(text).trim(),
      }));

      const answerIdx = typeof item.answer === "number" ? item.answer : 0;
      items.push({
        source: "mmlu",
        license: "MIT",
        attribution: "MMLU (cais/mmlu)",
        domain: mapping.domain,
        subject: mapping,
        question: {
          id: `mmlu-${hashText(item.question)}`,
          text: String(item.question || "").trim(),
          options,
          correctOptionId: `opt-${String.fromCharCode(65 + answerIdx)}`,
        },
        normalizedText: normalizeQ(item.question),
      });
    }
  }
  console.log(`  [mmlu] Total matched: ${items.length}`);
  return items;
}

function parseMMLUPro(targetDomains) {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "mmlu-pro", "mmlu-pro-test.json"));
  if (!data) return items;
  console.log(`  [mmlu-pro] Loaded ${data.length} records`);

  for (const item of data) {
    const category = item.category || "Other";
    const mapping = MMLU_PRO_DOMAIN_MAP[category];
    if (!mapping) continue;
    if (!targetDomains.has(mapping.domain)) continue;

    const opts = item.options || [];
    const options = opts.map((text, i) => ({
      id: `opt-${String.fromCharCode(65 + i)}`,
      text: String(text).trim(),
    }));

    const answerLetter = String(item.answer || "A");
    items.push({
      source: "mmlu-pro",
      license: "MIT",
      attribution: "MMLU-Pro (TIGER-Lab/MMLU-Pro)",
      domain: mapping.domain,
      subject: mapping,
      question: {
        id: `mmlupro-${hashText(item.question)}`,
        text: String(item.question || "").trim(),
        options,
        correctOptionId: `opt-${answerLetter}`,
        explanation: item.cot_content || undefined,
      },
      normalizedText: normalizeQ(item.question),
    });
  }
  console.log(`  [mmlu-pro] Total matched: ${items.length}`);
  return items;
}

function parseCaseHOLD() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "casehold", "casehold-train.json"));
  if (!data) return items;
  console.log(`  [casehold] Loaded ${data.length} records`);

  for (const item of data) {
    // CaseHOLD CSV columns: 0=citing_prompt, 1-5=holdings, 6-10=scores, 11=label
    const prompt = item["0"] || item.citing_prompt || "";
    const holdings = [item["1"], item["2"], item["3"], item["4"], item["5"]].filter(Boolean);
    if (!prompt || holdings.length === 0) continue;

    const options = holdings.map((text, i) => ({
      id: `opt-${i}`,
      text: truncate(String(text).trim(), 300),
    }));

    const label = parseInt(item["11"] ?? item.label ?? "0", 10);
    items.push({
      source: "casehold",
      license: "Apache-2.0",
      attribution: "CaseHOLD (casehold/casehold)",
      domain: "law",
      subject: { display: "Case Law & Holdings", slug: "case-law-holdings", level: "graduate" },
      question: {
        id: `casehold-${hashText(prompt)}`,
        text: truncate(String(prompt).trim(), 500),
        options,
        correctOptionId: `opt-${label}`,
      },
      normalizedText: normalizeQ(prompt),
    });
  }
  console.log(`  [casehold] Total: ${items.length}`);
  return items;
}

function parseCUAD() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "cuad", "cuad-train.json"));
  if (!data) return items;
  console.log(`  [cuad] Loaded ${data.length} records`);

  for (const item of data) {
    const question = item.question || "";
    const context = item.context || "";
    const answers = item.answers || {};
    const answerTexts = answers.text || [];
    if (!question || answerTexts.length === 0) continue;

    items.push({
      source: "cuad",
      license: "CC-BY-4.0",
      attribution: "CUAD (theatticusproject/cuad-qa)",
      domain: "law",
      subject: { display: "Contract Law", slug: "contract-law", level: "graduate" },
      flashcard: {
        id: `cuad-${hashText(question + context.slice(0, 100))}`,
        front: truncate(question, 300),
        back: truncate(answerTexts.join("; "), 500),
      },
      normalizedText: normalizeQ(question),
    });
  }
  console.log(`  [cuad] Total: ${items.length}`);
  return items;
}

function parseFinQA() {
  const items = [];
  for (const split of ["train", "validation", "test"]) {
    const data = readJsonSafe(path.join(DATA_DIR, "finqa", `finqa-${split}.json`));
    if (!data) continue;
    for (const item of data) {
      const question = item.question || item.qa?.question || "";
      const answer = item.answer || item.qa?.answer || "";
      if (!question) continue;

      items.push({
        source: "finqa",
        license: "CC-BY-4.0",
        attribution: "FinQA (ibm/finqa)",
        domain: "business",
        subject: { display: "Financial Reasoning", slug: "financial-reasoning", level: "graduate" },
        flashcard: {
          id: `finqa-${hashText(question)}`,
          front: truncate(question, 400),
          back: truncate(String(answer), 300),
        },
        normalizedText: normalizeQ(question),
      });
    }
  }
  console.log(`  [finqa] Total: ${items.length}`);
  return items;
}

function parseDataTonicCases() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "datatonic-cases", "cases-train.json"));
  if (!data) return items;
  console.log(`  [datatonic] Loaded ${data.length} records`);

  for (const item of data) {
    // Only use benign English cases
    if (item.category && item.category !== "benign") continue;

    const query = item.query || "";
    const response = item.response || "";
    const think = item.think || "";
    if (!query || !response) continue;
    // Skip non-English
    if (/[\u4e00-\u9fff]/.test(query.slice(0, 50))) continue;

    items.push({
      source: "datatonic",
      license: "MIT",
      attribution: "DataTonic Case Studies (DataTonic/dark_thoughts_case_study_reason)",
      domain: "business",
      subject: { display: "Business Case Studies", slug: "business-case-studies", level: "graduate" },
      chunk: {
        id: `dtcase-${hashText(query)}`,
        title: truncate(query, 120),
        content: truncate(response, 2000),
        kind: "concept",
      },
      normalizedText: normalizeQ(query),
    });
  }
  console.log(`  [datatonic] Total (benign EN): ${items.length}`);
  return items;
}

function parseCoTLegal() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "cot-legal", "cot-legal.json"));
  if (!data) return items;
  console.log(`  [cot-legal] Loaded ${data.length} records`);

  for (const item of data) {
    const instr = item.instruction || "";
    const output = item.output || item.response || "";
    if (!instr) continue;

    items.push({
      source: "cot-legal",
      license: "MIT",
      attribution: "CoT Legal Issues & Laws (mattwesney/CoT_Legal_Issues_And_Laws)",
      domain: "law",
      subject: { display: "Legal Reasoning (IRAC)", slug: "legal-reasoning-irac", level: "graduate" },
      flashcard: {
        id: `cotlaw-${hashText(instr)}`,
        front: truncate(instr, 500),
        back: truncate(output, 1000),
      },
      normalizedText: normalizeQ(instr),
    });
  }
  console.log(`  [cot-legal] Total: ${items.length}`);
  return items;
}

function parseLawStackExchange() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "law-stackexchange", "law-se-train.json"));
  if (!data) return items;
  console.log(`  [law-se] Loaded ${data.length} records`);

  for (const item of data) {
    const text = item.text || item.question || "";
    const label = item.label ?? item.category ?? "";
    if (!text) continue;

    items.push({
      source: "law-se",
      license: "CC-BY-SA-4.0",
      attribution: "Law Stack Exchange (jonathanli/law-stack-exchange)",
      domain: "law",
      subject: { display: "Practical Legal Q&A", slug: "practical-legal-qa", level: "graduate" },
      chunk: {
        id: `lawse-${hashText(text)}`,
        title: truncate(text, 120),
        content: text,
        kind: "concept",
      },
      normalizedText: normalizeQ(text),
    });
  }
  console.log(`  [law-se] Total: ${items.length}`);
  return items;
}

function parseEETask695() {
  const items = [];
  const data = readJsonSafe(path.join(DATA_DIR, "ee-mmlu", "ee-task695-train.json"));
  if (!data) return items;
  console.log(`  [ee-task695] Loaded ${data.length} records`);

  for (const item of data) {
    const input = item.input || "";
    const output = item.output || "";
    if (!input) continue;

    // Parse the structured input to extract question and options
    const parts = input.split("\n").map(s => s.trim()).filter(Boolean);
    const questionText = parts[0] || input;

    items.push({
      source: "ee-task695",
      license: "Apache-2.0",
      attribution: "MMMLU EE (Lots-of-LoRAs/task695)",
      domain: "ee",
      subject: { display: "Electrical Engineering Fundamentals", slug: "ee-fundamentals", level: "graduate" },
      flashcard: {
        id: `ee695-${hashText(input)}`,
        front: truncate(questionText, 400),
        back: truncate(output, 300),
      },
      normalizedText: normalizeQ(questionText),
    });
  }
  console.log(`  [ee-task695] Total: ${items.length}`);
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
    const slug = item.subject.slug;
    if (!groups[slug]) {
      groups[slug] = {
        slug, display: item.subject.display, level: item.subject.level,
        domain: item.domain, questions: [], flashcards: [], chunks: [],
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

function buildModule(group, domainPrefix) {
  const moduleId = `${domainPrefix}-${group.slug}-u1-external`;
  const qPerLesson = 15, fPerLesson = 10, cPerLesson = 5;
  const lessons = [];
  let li = 0;

  // Quiz lessons from questions
  for (let i = 0; i < group.questions.length; i += qPerLesson) {
    li++;
    const batch = group.questions.slice(i, i + qPerLesson);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(2, "0")}`,
      title: `${group.display} — Quiz ${li}`,
      type: "quiz", duration: Math.max(5, batch.length * 2),
      questions: batch,
    });
  }

  // Chunk+flashcard lessons
  for (let i = 0; i < group.chunks.length; i += cPerLesson) {
    li++;
    const batch = group.chunks.slice(i, i + cPerLesson);
    const flash = group.flashcards.slice(li * fPerLesson, (li + 1) * fPerLesson);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(2, "0")}`,
      title: `${group.display} — Concepts ${li}`,
      type: "interactive", duration: Math.max(10, batch.length * 3),
      chunks: batch, ...(flash.length > 0 ? { flashcards: flash } : {}),
    });
  }

  // Remaining flashcard-only lessons
  const usedFlash = group.chunks.length > 0 ? Math.ceil(group.chunks.length / cPerLesson) * fPerLesson : 0;
  const remaining = group.flashcards.slice(usedFlash);
  for (let i = 0; i < remaining.length; i += fPerLesson * 2) {
    li++;
    const batch = remaining.slice(i, i + fPerLesson * 2);
    lessons.push({
      id: `${moduleId}-l${String(li).padStart(2, "0")}`,
      title: `${group.display} — Flashcard Review ${li}`,
      type: "interactive", duration: Math.max(5, batch.length),
      flashcards: batch,
    });
  }

  const cappedLessons = lessons.slice(0, 100);
  const subjectMap = {
    law: "Science", business: "Science", ee: "Science", masters: "Science",
  };

  return {
    id: moduleId,
    title: `${group.display} (${group.level === "graduate" ? "Master's" : "Undergraduate"} Level)`,
    description: `${group.display} curriculum from ${group.sources.size} open-source datasets. ${[...group.attributions].join("; ")}.`,
    subject: subjectMap[group.domain] || "Science",
    lessons: cappedLessons,
    tags: ["external-ai", "curriculum-import", group.domain, group.slug, ...group.sources],
    minAge: group.level === "graduate" ? 21 : 17,
    maxAge: 99,
    version: "external-1.0",
    difficultyBand: group.level === "graduate" ? "advanced" : "intermediate",
    gradeBand: group.level === "graduate" ? "graduate" : "college",
    learningObjectives: [
      `Master key concepts in ${group.display.toLowerCase()}`,
      `Apply analytical reasoning to ${group.display.toLowerCase()} problems`,
      `Demonstrate proficiency through assessments and case analysis`,
    ],
    external: {
      sources: [...group.sources], licenses: [...group.licenses],
      attributions: [...group.attributions],
      itemCounts: { questions: group.questions.length, flashcards: group.flashcards.length, chunks: group.chunks.length },
      importedAt: new Date().toISOString(), totalLessons: cappedLessons.length,
      overflow: lessons.length > 100 ? lessons.length - 100 : 0,
    },
    metadata: { generatedBy: "ingest-universal-curriculum.mjs", importDate: new Date().toISOString() },
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
// Main
// ──────────────────────────────────────────────
async function main() {
  const args = parseArgs();
  const domainPrefixes = { law: "law", business: "mba", ee: "ee", masters: "masters" };

  console.log("═".repeat(60));
  console.log(" Universal Curriculum Ingestion Pipeline");
  console.log("═".repeat(60));
  console.log(`  Domain: ${args.domain} | Apply: ${args.apply} | Dry-run: ${args.dryRun}`);

  const targetDomains = args.domain === "all"
    ? new Set(["law", "business", "ee", "masters"])
    : new Set([args.domain]);

  // Parse all sources
  console.log("\n── Parsing Datasets ──");
  const allItems = [];

  // MMLU & MMLU-Pro (universal)
  allItems.push(...parseMMLU(targetDomains));
  allItems.push(...parseMMLUPro(targetDomains));

  // Domain-specific
  if (targetDomains.has("law")) {
    allItems.push(...parseCaseHOLD());
    allItems.push(...parseCUAD());
    allItems.push(...parseCoTLegal());
    allItems.push(...parseLawStackExchange());
  }
  if (targetDomains.has("business")) {
    allItems.push(...parseFinQA());
    allItems.push(...parseDataTonicCases());
  }
  if (targetDomains.has("ee")) {
    allItems.push(...parseEETask695());
  }

  console.log(`\n  Total raw items: ${allItems.length}`);

  // Dedup
  console.log("\n── Deduplication ──");
  const { unique, dupes } = dedup(allItems);

  // Group
  console.log("\n── Grouping ──");
  const groups = groupBySlug(unique);
  const slugs = Object.keys(groups).sort();
  console.log(`  Found ${slugs.length} subjects:\n`);
  for (const s of slugs) {
    const g = groups[s];
    const total = g.questions.length + g.flashcards.length + g.chunks.length;
    console.log(`    [${g.domain.padEnd(8)}] ${g.display.padEnd(40)} ${String(total).padStart(6)} items`);
  }

  // Build
  console.log("\n── Building Modules ──");
  const modules = [];
  for (const s of slugs) {
    const g = groups[s];
    const total = g.questions.length + g.flashcards.length + g.chunks.length;
    if (total < 5) { console.log(`  [skip] ${g.display}: only ${total} items`); continue; }
    const mod = buildModule(g, domainPrefixes[g.domain] || g.domain);
    modules.push(mod);
    console.log(`  [built] ${mod.id}: ${mod.lessons.length} lessons`);
  }

  // Write
  if (args.apply && !args.dryRun) {
    console.log("\n── Writing Module Files ──");
    for (const mod of modules) {
      const r = writeModuleFile(mod);
      console.log(`  [wrote] ${r.fileName} (${r.lessonCount} lessons)`);
    }
  } else {
    console.log(`\n  [dry-run] Would write ${modules.length} files`);
  }

  // Report
  const report = {
    generatedAt: new Date().toISOString(),
    domain: args.domain,
    summary: {
      totalRawItems: allItems.length + dupes,
      duplicatesRemoved: dupes,
      uniqueItems: unique.length,
      subjectsFound: slugs.length,
      modulesGenerated: modules.length,
      totalLessons: modules.reduce((s, m) => s + m.lessons.length, 0),
    },
    modules: modules.map(m => ({
      id: m.id, title: m.title, domain: m.tags.find(t => ["law", "business", "ee", "masters"].includes(t)),
      lessons: m.lessons.length, questions: m.external?.itemCounts?.questions || 0,
      flashcards: m.external?.itemCounts?.flashcards || 0, chunks: m.external?.itemCounts?.chunks || 0,
    })),
    applied: args.apply && !args.dryRun,
  };
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2), "utf-8");

  const md = [
    "# Universal Curriculum Import Report", "",
    `Generated: ${report.generatedAt} | Domain: ${args.domain}`, "",
    "## Summary", "",
    `| Metric | Value |`, `|--------|-------|`,
    `| Raw items | ${report.summary.totalRawItems.toLocaleString()} |`,
    `| Duplicates removed | ${report.summary.duplicatesRemoved.toLocaleString()} |`,
    `| Unique items | ${report.summary.uniqueItems.toLocaleString()} |`,
    `| Modules generated | ${report.summary.modulesGenerated} |`,
    `| Total lessons | ${report.summary.totalLessons} |`, "",
    "## Modules", "",
    `| Module | Domain | Lessons | Questions | Flashcards |`, `|--------|--------|---------|-----------|------------|`,
    ...report.modules.map(m => `| ${m.title} | ${m.domain} | ${m.lessons} | ${m.questions} | ${m.flashcards} |`), "",
  ].join("\n");
  fs.writeFileSync(REPORT_MD, md, "utf-8");

  console.log(`\n  Report: ${REPORT_JSON}`);
  console.log(`  Report: ${REPORT_MD}`);
  console.log("\n" + "═".repeat(60));
  console.log(` Done! ${modules.length} modules with ${report.summary.totalLessons} total lessons`);
  console.log("═".repeat(60));
  if (!args.apply) console.log("\n  Run with --apply to write files.");
}

main().catch(console.error);
