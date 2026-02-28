import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

function parseArgs(argv) {
  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  const getValue = (flag, fallback) => {
    const plain = flag.replace(/^--/, "");
    const eqEntry = argv.find((entry) => entry.startsWith(`${flag}=`) || entry.startsWith(`${plain}=`));
    if (eqEntry) return eqEntry.split("=").slice(1).join("=") || fallback;
    const directIndex = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (directIndex >= 0) return argv[directIndex + 1] ?? fallback;
    if (plainIndex >= 0) return argv[plainIndex + 1] ?? fallback;
    return fallback;
  };

  return {
    dryRun: hasFlag("--dry-run"),
    examCodes: String(getValue("--exam-codes", ""))
      .split(",")
      .map((entry) => entry.trim().toLowerCase())
      .filter(Boolean),
  };
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
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

function toTag(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

function deriveObjectiveCode(domain, id) {
  const suffix = String(id).replace(/-/g, "").slice(0, 8);
  return `${toTag(domain)}-${suffix}`;
}

async function fetchAllQuestions(supabase) {
  const pageSize = 1000;
  const rows = [];
  let offset = 0;

  while (true) {
    const { data, error } = await supabase
      .from("testing_question_bank")
      .select("id, exam_id, domain, provenance, source_blueprint, objective_code, review_status")
      .range(offset, offset + pageSize - 1);

    if (error) {
      throw new Error(`Failed reading testing_question_bank: ${error.message}`);
    }

    const page = data ?? [];
    rows.push(...page);
    if (page.length < pageSize) break;
    offset += pageSize;
  }

  return rows;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(envPath);
  const supabaseUrl = readValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readValue(env, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    process.exit(1);
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: exams, error: examError } = await supabase
    .from("testing_exams")
    .select("id, exam_code");

  if (examError) {
    throw new Error(`Failed reading testing_exams: ${examError.message}`);
  }

  const examCodeById = new Map((exams ?? []).map((row) => [row.id, String(row.exam_code)]));
  const questions = await fetchAllQuestions(supabase);

  const eligible = questions.filter((row) => {
    const examCode = examCodeById.get(row.exam_id) ?? "";
    const examCodeOk = args.examCodes.length === 0 || args.examCodes.includes(examCode.toLowerCase());
    if (!examCodeOk) return false;
    const provenance = String(row.provenance ?? "").toLowerCase();
    const sourceBlueprint = String(row.source_blueprint ?? "").toLowerCase();
    const isGenerated =
      provenance.includes("de_novo")
      || sourceBlueprint.startsWith("internal://blueprint/");
    return isGenerated;
  });

  if (eligible.length === 0) {
    console.log("No generated questions matched filter.");
    return;
  }

  const reviewedAt = new Date().toISOString();
  const updates = eligible.map((row) => {
    const examCode = examCodeById.get(row.exam_id) ?? "unknown";
    return {
      id: row.id,
      source_type: "internal_authoring",
      source_name: `${examCode.toUpperCase()} blueprint`,
      source_url: `internal://blueprint/${examCode}/v1`,
      license_type: "internal-generated",
      commercial_use_allowed: true,
      derivation_method: "original_from_blueprint",
      review_status: "approved",
      reviewed_at: reviewedAt,
      exam_code: examCode,
      objective_code: row.objective_code || deriveObjectiveCode(row.domain, row.id),
    };
  });

  if (args.dryRun) {
    const byExam = new Map();
    for (const row of eligible) {
      const examCode = examCodeById.get(row.exam_id) ?? "unknown";
      byExam.set(examCode, Number(byExam.get(examCode) ?? 0) + 1);
    }
    console.log("Testing governance approve (dry-run)");
    console.log(`Rows to update: ${updates.length}`);
    for (const [examCode, count] of byExam.entries()) {
      console.log(`- ${examCode}: ${count}`);
    }
    return;
  }

  const batchSize = 250;
  let updated = 0;
  for (let i = 0; i < updates.length; i += batchSize) {
    const batch = updates.slice(i, i + batchSize);
    for (const row of batch) {
      const { id, ...payload } = row;
      const { error } = await supabase
        .from("testing_question_bank")
        .update(payload)
        .eq("id", id);
      if (error) {
        throw new Error(`Failed updating batch ${Math.floor(i / batchSize) + 1}: ${error.message}`);
      }
    }
    updated += batch.length;
  }

  console.log("Testing governance approve");
  console.log(`Rows updated: ${updated}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
