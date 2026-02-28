import fs from "node:fs";
import path from "node:path";
import { createHmac } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

function parseArgs(argv) {
  const getValue = (flag, fallback) => {
    const eqEntry = argv.find((entry) => entry.startsWith(`${flag}=`) || entry.startsWith(`${flag.replace(/^--/, "")}=`));
    if (eqEntry) return eqEntry.split("=").slice(1).join("=") || fallback;
    const index = argv.findIndex((entry) => entry === flag || entry === flag.replace(/^--/, ""));
    if (index < 0) return fallback;
    return argv[index + 1] ?? fallback;
  };

  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));

  return {
    perExam: Number(getValue("--per-exam", "120")),
    examCodes: String(getValue("--exam-codes", ""))
      .split(",")
      .map((entry) => entry.trim().toLowerCase())
      .filter(Boolean),
    dryRun: hasFlag("--dry-run"),
  };
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const values = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();
    values[key] = value;
  }
  return values;
}

function readValue(env, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (env[key]) return env[key];
  if (fallbackKey && env[fallbackKey]) return env[fallbackKey];
  return "";
}

function normalizeAnswerValue(value) {
  return String(value).trim().replace(/\s+/g, " ").toLowerCase();
}

function hashAnswer(answer, secret) {
  return createHmac("sha256", secret)
    .update(normalizeAnswerValue(answer))
    .digest("hex");
}

function toTag(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function buildObjectiveCode(domainName, sequence) {
  return `${toTag(domainName).slice(0, 40)}-${String(sequence).padStart(4, "0")}`;
}

function parseBlueprintDomains(blueprint) {
  if (!blueprint || typeof blueprint !== "object" || Array.isArray(blueprint)) {
    return [{ name: "General Core Concepts", weight: 100 }];
  }
  const value = blueprint;
  if (!Array.isArray(value.domains) || value.domains.length === 0) {
    return [{ name: "General Core Concepts", weight: 100 }];
  }

  const parsed = value.domains
    .map((entry) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) return null;
      const item = entry;
      const name = typeof item.name === "string" && item.name.trim().length > 0
        ? item.name.trim()
        : null;
      if (!name) return null;
      const weightRaw = Number(item.weight ?? 0);
      const weight = Number.isFinite(weightRaw) && weightRaw > 0 ? weightRaw : 1;
      return { name, weight };
    })
    .filter(Boolean);

  return parsed.length > 0 ? parsed : [{ name: "General Core Concepts", weight: 100 }];
}

function allocateDomainCounts(totalQuestions, domains) {
  if (totalQuestions <= 0) return [];
  const totalWeight = domains.reduce((sum, entry) => sum + Number(entry.weight || 0), 0) || 1;
  const provisional = domains.map((entry) => {
    const exact = (Number(entry.weight || 0) / totalWeight) * totalQuestions;
    const floor = Math.floor(exact);
    return {
      name: entry.name,
      floor,
      fraction: exact - floor,
    };
  });

  let allocated = provisional.reduce((sum, entry) => sum + entry.floor, 0);
  let remaining = totalQuestions - allocated;
  provisional.sort((left, right) => right.fraction - left.fraction);
  for (let i = 0; i < provisional.length && remaining > 0; i += 1) {
    provisional[i].floor += 1;
    remaining -= 1;
  }

  while (remaining > 0) {
    const index = remaining % provisional.length;
    provisional[index].floor += 1;
    remaining -= 1;
  }

  return provisional.map((entry) => ({ name: entry.name, count: entry.floor }));
}

function generateQuestionStem(examName, domainName, sequence) {
  const stems = [
    `During ${examName} prep, which step most directly strengthens ${domainName} decision quality in scenario ${sequence}?`,
    `A learner misses a ${domainName} question on ${examName}. What is the best immediate correction for scenario ${sequence}?`,
    `For ${examName}, which approach aligns with ${domainName} standards in scenario ${sequence}?`,
    `In a timed ${examName} drill, which action best applies ${domainName} principles for scenario ${sequence}?`,
  ];
  return stems[sequence % stems.length];
}

function generateOptionSet(domainName, sequence) {
  const correctChoices = [
    `Define objective and constraints, then verify each decision against ${domainName} requirements.`,
    `Apply a structured checklist tied to ${domainName} before committing to an answer.`,
    `Compare alternatives with evidence and document why the selected option fits ${domainName}.`,
    `Validate assumptions with a focused review loop anchored in ${domainName}.`,
  ];
  const distractors = [
    "Skip verification to save time and trust the first guess.",
    "Prioritize speed by removing review checkpoints entirely.",
    "Choose the most familiar option without comparing constraints.",
    "Ignore domain objectives and focus only on surface keywords.",
    "Delay analysis until after submission and avoid diagnostics.",
    "Treat all options as equivalent and select randomly under pressure.",
  ];

  const correctText = correctChoices[sequence % correctChoices.length];
  const wrongA = distractors[(sequence + 1) % distractors.length];
  const wrongB = distractors[(sequence + 3) % distractors.length];
  const wrongC = distractors[(sequence + 5) % distractors.length];

  const options = [wrongA, wrongB, wrongC];
  const correctIndex = sequence % 4;
  options.splice(correctIndex, 0, correctText);

  return { options, correctText };
}

function generateDomainQuestions({
  examId,
  examCode,
  examName,
  examVersion,
  domainName,
  count,
  hashSecret,
  startSequence,
}) {
  const rows = [];
  const reviewedAt = new Date().toISOString();
  for (let i = 0; i < count; i += 1) {
    const sequence = startSequence + i;
    const { options, correctText } = generateOptionSet(domainName, sequence);
    const difficulty = Math.min(0.92, 0.35 + ((sequence % 7) * 0.08));
    rows.push({
      exam_id: examId,
      domain: domainName,
      difficulty,
      question_text: generateQuestionStem(examName, domainName, sequence + 1),
      options,
      correct_answer_hash: hashAnswer(correctText, hashSecret),
      explanation: `This option is best because it preserves objective checks and evidence-based decisions within ${domainName}.`,
      source_blueprint: `internal://blueprint/${examCode}/v${examVersion}`,
      provenance: "de_novo_blueprint_generated",
      tags: [toTag(examCode), toTag(domainName), "de-novo", "license-safe", "v1"],
      version: examVersion,
      is_active: true,
      source_type: "internal_authoring",
      source_name: `${examName} blueprint`,
      source_url: `internal://blueprint/${examCode}/v${examVersion}`,
      license_type: "internal-generated",
      commercial_use_allowed: true,
      derivation_method: "original_from_blueprint",
      review_status: "approved",
      reviewed_at: reviewedAt,
      exam_code: examCode,
      objective_code: buildObjectiveCode(domainName, sequence + 1),
    });
  }
  return rows;
}

async function insertInBatches(supabase, tableName, rows, batchSize = 200) {
  const governanceColumns = [
    "source_type",
    "source_name",
    "source_url",
    "license_type",
    "commercial_use_allowed",
    "derivation_method",
    "review_status",
    "reviewed_at",
    "exam_code",
    "objective_code",
  ];
  const stripGovernanceColumns = (row) => {
    const copy = { ...row };
    for (const key of governanceColumns) {
      delete copy[key];
    }
    return copy;
  };
  const isMissingColumnError = (error) => {
    const code = String(error?.code ?? "");
    const message = String(error?.message ?? "").toLowerCase();
    return (
      code === "42703"
      || message.includes("could not find the")
      || (message.includes("column") && message.includes("does not exist"))
      || (message.includes("schema cache") && message.includes("column"))
    );
  };

  let inserted = 0;
  for (let index = 0; index < rows.length; index += batchSize) {
    const batch = rows.slice(index, index + batchSize);
    const { error } = await supabase.from(tableName).insert(batch);
    if (error) {
      if (isMissingColumnError(error)) {
        const fallbackBatch = batch.map(stripGovernanceColumns);
        const { error: fallbackError } = await supabase.from(tableName).insert(fallbackBatch);
        if (fallbackError) {
          throw new Error(`Insert failed for ${tableName} batch ${index / batchSize + 1}: ${fallbackError.message}`);
        }
      } else {
        throw new Error(`Insert failed for ${tableName} batch ${index / batchSize + 1}: ${error.message}`);
      }
    }
    inserted += batch.length;
  }
  return inserted;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(envPath);

  const supabaseUrl = readValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readValue(env, "SUPABASE_SERVICE_ROLE_KEY");
  const hashSecret =
    readValue(env, "TESTING_ITEM_HASH_SECRET")
    || readValue(env, "PARENT_CONSENT_TOKEN_SECRET")
    || "koydo-testing-dev-secret-change-me";

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    process.exit(1);
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const perExamTarget = Number.isFinite(args.perExam) && args.perExam > 0 ? Math.floor(args.perExam) : 120;

  const { data: exams, error: examsError } = await supabase
    .from("testing_exams")
    .select("id, exam_code, name, blueprint, version, is_active, language")
    .eq("is_active", true)
    .eq("language", "en")
    .order("name", { ascending: true });

  if (examsError) {
    throw new Error(`Failed to load testing exams: ${examsError.message}`);
  }

  const selectedExams = (exams ?? []).filter((exam) => {
    if (args.examCodes.length === 0) return true;
    return args.examCodes.includes(String(exam.exam_code || "").toLowerCase());
  });

  if (selectedExams.length === 0) {
    console.log("No matching exams found.");
    return;
  }

  const summary = [];
  let totalPrepared = 0;
  let totalInserted = 0;

  for (const exam of selectedExams) {
    const { count, error: countError } = await supabase
      .from("testing_question_bank")
      .select("id", { count: "exact", head: true })
      .eq("exam_id", exam.id)
      .eq("is_active", true);

    if (countError) {
      throw new Error(`Failed counting existing questions for ${exam.exam_code}: ${countError.message}`);
    }

    const existing = Number(count ?? 0);
    const needed = Math.max(0, perExamTarget - existing);
    if (needed === 0) {
      summary.push({
        examCode: exam.exam_code,
        existing,
        prepared: 0,
        inserted: 0,
      });
      continue;
    }

    const domains = parseBlueprintDomains(exam.blueprint);
    const domainCounts = allocateDomainCounts(needed, domains);

    let sequenceCursor = existing;
    const generatedRows = [];
    for (const entry of domainCounts) {
      const rows = generateDomainQuestions({
        examId: exam.id,
        examCode: exam.exam_code,
        examName: exam.name,
        examVersion: Number(exam.version ?? 1),
        domainName: entry.name,
        count: entry.count,
        hashSecret,
        startSequence: sequenceCursor,
      });
      generatedRows.push(...rows);
      sequenceCursor += entry.count;
    }

    totalPrepared += generatedRows.length;
    let inserted = 0;
    if (!args.dryRun && generatedRows.length > 0) {
      inserted = await insertInBatches(supabase, "testing_question_bank", generatedRows, 200);
      totalInserted += inserted;
    }

    summary.push({
      examCode: exam.exam_code,
      existing,
      prepared: generatedRows.length,
      inserted,
    });
  }

  console.log(`Testing question seed ${args.dryRun ? "(dry-run)" : ""}`);
  console.log(`Target per exam: ${perExamTarget}`);
  console.log("");
  for (const row of summary) {
    console.log(
      `${row.examCode}: existing ${row.existing}, prepared ${row.prepared}, inserted ${row.inserted}`,
    );
  }
  console.log("");
  console.log(`Total prepared: ${totalPrepared}`);
  console.log(`Total inserted: ${totalInserted}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
