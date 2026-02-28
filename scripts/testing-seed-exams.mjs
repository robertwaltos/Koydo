import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

const EXAM_SEEDS = [
  {
    tranche: "tranche1",
    exam_code: "pmp",
    name: "PMP Practice",
    name_pl: "PMP Ćwiczenia",
    blueprint: {
      domains: [
        { name: "People", weight: 42 },
        { name: "Process", weight: 50 },
        { name: "Business Environment", weight: 8 },
      ],
    },
    question_count: 180,
    timing_minutes: 230,
    passing_score: 70,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/images/heroes/hero-city-01.webp",
  },
  {
    tranche: "tranche1",
    exam_code: "cissp",
    name: "CISSP Practice",
    name_pl: "CISSP Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Security and Risk Management", weight: 15 },
        { name: "Asset Security", weight: 10 },
        { name: "Security Architecture and Engineering", weight: 13 },
        { name: "Communication and Network Security", weight: 13 },
        { name: "Identity and Access Management", weight: 13 },
        { name: "Security Assessment and Testing", weight: 12 },
        { name: "Security Operations", weight: 13 },
        { name: "Software Development Security", weight: 11 },
      ],
    },
    question_count: 125,
    timing_minutes: 180,
    passing_score: 70,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/images/heroes/hero-space-01.webp",
  },
  {
    tranche: "tranche1",
    exam_code: "aws-saa",
    name: "AWS Solutions Architect Associate Practice",
    name_pl: "AWS Solutions Architect Associate Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Design Secure Architectures", weight: 30 },
        { name: "Design Resilient Architectures", weight: 26 },
        { name: "Design High-Performing Architectures", weight: 24 },
        { name: "Design Cost-Optimized Architectures", weight: 20 },
      ],
    },
    question_count: 65,
    timing_minutes: 130,
    passing_score: 72,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/images/heroes/hero-ocean-01.webp",
  },
  {
    tranche: "tranche1",
    exam_code: "nclex-rn",
    name: "NCLEX-RN Practice",
    name_pl: "NCLEX-RN Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Safe and Effective Care Environment", weight: 26 },
        { name: "Health Promotion and Maintenance", weight: 12 },
        { name: "Psychosocial Integrity", weight: 12 },
        { name: "Physiological Integrity", weight: 50 },
      ],
    },
    question_count: 85,
    timing_minutes: 120,
    passing_score: 70,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/images/heroes/hero-sunrise-01.webp",
  },
  {
    tranche: "tranche1",
    exam_code: "usmle-step-1",
    name: "USMLE Step 1 Practice",
    name_pl: "USMLE Step 1 Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Anatomy", weight: 12 },
        { name: "Biochemistry", weight: 14 },
        { name: "Microbiology and Immunology", weight: 17 },
        { name: "Pathology", weight: 44 },
        { name: "Pharmacology", weight: 13 },
      ],
    },
    question_count: 280,
    timing_minutes: 480,
    passing_score: 60,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/images/heroes/hero-forest-01.webp",
  },
  {
    tranche: "tranche2",
    exam_code: "security-plus",
    name: "CompTIA Security+ Practice",
    name_pl: "CompTIA Security+ Ćwiczenia",
    blueprint: {
      domains: [
        { name: "General Security Concepts", weight: 12 },
        { name: "Threats, Vulnerabilities, and Mitigations", weight: 22 },
        { name: "Security Architecture", weight: 18 },
        { name: "Security Operations", weight: 28 },
        { name: "Security Program Management and Oversight", weight: 20 },
      ],
    },
    question_count: 90,
    timing_minutes: 90,
    passing_score: 75,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-131d40a0-7cca-4191-abd3-74cc501e0b36.png",
  },
  {
    tranche: "tranche2",
    exam_code: "ccna",
    name: "CCNA Practice",
    name_pl: "CCNA Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Network Fundamentals", weight: 20 },
        { name: "Network Access", weight: 20 },
        { name: "IP Connectivity", weight: 25 },
        { name: "IP Services", weight: 10 },
        { name: "Security Fundamentals", weight: 15 },
        { name: "Automation and Programmability", weight: 10 },
      ],
    },
    question_count: 100,
    timing_minutes: 120,
    passing_score: 70,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-199be27f-a57c-448d-b693-36e8b7236746.png",
  },
  {
    tranche: "tranche2",
    exam_code: "cpa",
    name: "CPA Practice",
    name_pl: "CPA Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Accounting and Data Analytics", weight: 30 },
        { name: "Audit and Attestation", weight: 25 },
        { name: "Regulation and Tax", weight: 25 },
        { name: "Business Analysis and Reporting", weight: 20 },
      ],
    },
    question_count: 100,
    timing_minutes: 240,
    passing_score: 75,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-19ff2934-f286-4d78-8bc2-9de02af18a6b.png",
  },
  {
    tranche: "tranche2",
    exam_code: "usmle-step-2-ck",
    name: "USMLE Step 2 CK Practice",
    name_pl: "USMLE Step 2 CK Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Internal Medicine", weight: 50 },
        { name: "Surgery", weight: 25 },
        { name: "Pediatrics", weight: 15 },
        { name: "Obstetrics and Gynecology", weight: 10 },
      ],
    },
    question_count: 318,
    timing_minutes: 540,
    passing_score: 62,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-1bae76f5-b00d-45cf-a9f8-9c8dfc078d14.png",
  },
  {
    tranche: "tranche2",
    exam_code: "bar-exam",
    name: "Bar Exam Practice",
    name_pl: "Egzamin Adwokacki Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Constitutional Law", weight: 15 },
        { name: "Contracts", weight: 15 },
        { name: "Criminal Law and Procedure", weight: 15 },
        { name: "Evidence", weight: 15 },
        { name: "Real Property", weight: 15 },
        { name: "Torts", weight: 15 },
        { name: "Civil Procedure", weight: 10 },
      ],
    },
    question_count: 200,
    timing_minutes: 360,
    passing_score: 68,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-1cc58ade-8b2b-427c-b3ac-214ba494b21c.png",
  },
  {
    tranche: "tranche2",
    exam_code: "frm",
    name: "FRM Practice",
    name_pl: "FRM Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Foundations of Risk Management", weight: 20 },
        { name: "Quantitative Analysis", weight: 20 },
        { name: "Financial Markets and Products", weight: 30 },
        { name: "Valuation and Risk Models", weight: 30 },
      ],
    },
    question_count: 100,
    timing_minutes: 240,
    passing_score: 70,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-2389e232-afaf-42ea-b5d2-2918e5b87d17.png",
  },
  {
    tranche: "tranche2",
    exam_code: "series-7",
    name: "FINRA Series 7 Practice",
    name_pl: "FINRA Series 7 Ćwiczenia",
    blueprint: {
      domains: [
        { name: "Seeks Business for the Broker-Dealer", weight: 9 },
        { name: "Evaluates Customers Financial Profile and Objectives", weight: 11 },
        { name: "Opens Accounts and Transfers Assets", weight: 11 },
        { name: "Provides Customers with Information and Recommendations", weight: 73 },
        { name: "Obtains and Verifies Customers Purchase and Sales Instructions", weight: 6 },
      ],
    },
    question_count: 135,
    timing_minutes: 225,
    passing_score: 72,
    version: 1,
    language: "en",
    is_active: true,
    cover_image_url: "/media/generated/job-2433a17a-6e27-49d3-bf4b-e2db2cb89c19.png",
  },
];

function parseArgs(argv) {
  const getValue = (flag, fallback) => {
    const plain = flag.replace(/^--/, "");
    const directIndex = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    const eqEntry = argv.find((entry) => entry.startsWith(`${flag}=`) || entry.startsWith(`${plain}=`));
    if (eqEntry) return eqEntry.split("=").slice(1).join("=") || fallback;
    if (directIndex >= 0) return argv[directIndex + 1] ?? fallback;
    if (plainIndex >= 0) return argv[plainIndex + 1] ?? fallback;
    return fallback;
  };

  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  return {
    tranche: String(getValue("--tranche", "all")).toLowerCase(),
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

function matchesTranche(row, tranche) {
  if (tranche === "all") return true;
  if (tranche === "1" || tranche === "tranche1") return row.tranche === "tranche1";
  if (tranche === "2" || tranche === "tranche2") return row.tranche === "tranche2";
  return row.tranche === tranche;
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

  const selected = EXAM_SEEDS.filter((row) => {
    if (!matchesTranche(row, args.tranche)) return false;
    if (args.examCodes.length === 0) return true;
    return args.examCodes.includes(row.exam_code);
  });

  if (selected.length === 0) {
    console.log("No exam seed rows match the requested filters.");
    return;
  }

  if (args.dryRun) {
    console.log("Testing exam seed (dry-run)");
    console.log(`Rows selected: ${selected.length}`);
    for (const row of selected) {
      console.log(`- ${row.exam_code} (${row.tranche})`);
    }
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const rows = selected.map((row) => ({
    exam_code: row.exam_code,
    name: row.name,
    name_pl: row.name_pl,
    blueprint: row.blueprint,
    question_count: row.question_count,
    timing_minutes: row.timing_minutes,
    passing_score: row.passing_score,
    version: row.version,
    language: row.language,
    is_active: row.is_active,
    cover_image_url: row.cover_image_url,
  }));

  const { data, error } = await supabase
    .from("testing_exams")
    .upsert(rows, { onConflict: "exam_code,version,language" })
    .select("exam_code,name");

  if (error) {
    throw new Error(`Failed to upsert testing exams: ${error.message}`);
  }

  console.log("Testing exam seed");
  console.log(`Rows upserted: ${data?.length ?? rows.length}`);
  for (const row of rows) {
    console.log(`- ${row.exam_code}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
