import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const outJson = path.resolve("public/TELEMETRY-LEARNING-EVENTS-REPORT.json");
const outMd = path.resolve("public/TELEMETRY-LEARNING-EVENTS-REPORT.md");

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const values = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex < 0) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    values[key] = value;
  }
  return values;
}

function readEnvValue(fileValues, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (fileValues[key]) return fileValues[key];
  if (fallbackKey && fileValues[fallbackKey]) return fileValues[fallbackKey];
  return "";
}

function ensureOutput(report) {
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Telemetry Learning Events Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Status: ${report.status}`);
  lines.push(`Window: last ${report.windowDays} day(s)`);
  lines.push("");

  if (report.status !== "ok") {
    lines.push(`Reason: ${report.reason ?? "n/a"}`);
    lines.push("");
    return lines.join("\n");
  }

  lines.push(`Total events: ${report.totals.totalEvents}`);
  lines.push(`Unique learners: ${report.totals.uniqueUsers}`);
  lines.push(`Unique modules: ${report.totals.uniqueModules}`);
  lines.push(`Unique lessons: ${report.totals.uniqueLessons}`);
  lines.push(`Lesson views: ${report.totals.lessonViews}`);
  lines.push(`Lesson completions: ${report.totals.lessonCompletions}`);
  lines.push(`Completion/View ratio: ${report.totals.completionToViewRatio}`);
  lines.push(`Interaction depth: ${report.totals.interactionDepth}`);
  lines.push("");

  lines.push("## Event Types");
  lines.push("");
  lines.push("| Event Type | Count |");
  lines.push("| --- | ---: |");
  for (const [eventType, count] of Object.entries(report.eventTypeCounts)) {
    lines.push(`| ${eventType} | ${count} |`);
  }
  lines.push("");

  lines.push("## Daily Trend");
  lines.push("");
  lines.push("| Day | Events | Unique Users |");
  lines.push("| --- | ---: | ---: |");
  for (const row of report.daily.slice(0, 30)) {
    lines.push(`| ${row.day} | ${row.eventCount} | ${row.uniqueUsers} |`);
  }
  lines.push("");

  lines.push("## Top Modules");
  lines.push("");
  lines.push("| Module ID | Events |");
  lines.push("| --- | ---: |");
  for (const row of report.topModules.slice(0, 15)) {
    lines.push(`| ${row.moduleId} | ${row.eventCount} |`);
  }
  lines.push("");

  return lines.join("\n");
}

function buildReportFromRows(rows, windowDays) {
  const uniqueUsers = new Set();
  const uniqueModules = new Set();
  const uniqueLessons = new Set();
  const eventTypeCounts = {};
  const dailyMap = new Map();
  const moduleMap = new Map();

  for (const row of rows) {
    if (row.user_id) uniqueUsers.add(row.user_id);
    if (row.module_id) uniqueModules.add(row.module_id);
    if (row.lesson_id) uniqueLessons.add(row.lesson_id);
    const eventType = String(row.event_type || "unknown");
    eventTypeCounts[eventType] = (eventTypeCounts[eventType] ?? 0) + 1;

    const eventAt = new Date(row.event_at);
    if (!Number.isNaN(eventAt.getTime())) {
      const day = eventAt.toISOString().slice(0, 10);
      if (!dailyMap.has(day)) {
        dailyMap.set(day, { eventCount: 0, users: new Set() });
      }
      const bucket = dailyMap.get(day);
      bucket.eventCount += 1;
      if (row.user_id) bucket.users.add(row.user_id);
    }

    const moduleId = row.module_id ? String(row.module_id) : "unknown";
    moduleMap.set(moduleId, (moduleMap.get(moduleId) ?? 0) + 1);
  }

  const lessonViews = Number(eventTypeCounts.lesson_viewed ?? 0);
  const lessonCompletions = Number(eventTypeCounts.lesson_completed ?? 0);
  const quizAnswers = Number(eventTypeCounts.quiz_answered ?? 0);
  const chunkViews = Number(eventTypeCounts.chunk_viewed ?? 0);
  const flashcardFlips = Number(eventTypeCounts.flashcard_flipped ?? 0);
  const activityInteractions = Number(eventTypeCounts.activity_interacted ?? 0);
  const interactionDepthBase = quizAnswers + chunkViews + flashcardFlips + activityInteractions;

  const daily = Array.from(dailyMap.entries())
    .map(([day, value]) => ({
      day,
      eventCount: value.eventCount,
      uniqueUsers: value.users.size,
    }))
    .sort((left, right) => (left.day < right.day ? 1 : -1));

  const topModules = Array.from(moduleMap.entries())
    .map(([moduleId, eventCount]) => ({ moduleId, eventCount }))
    .sort((left, right) => right.eventCount - left.eventCount);

  return {
    generatedAt: new Date().toISOString(),
    status: "ok",
    windowDays,
    totals: {
      totalEvents: rows.length,
      uniqueUsers: uniqueUsers.size,
      uniqueModules: uniqueModules.size,
      uniqueLessons: uniqueLessons.size,
      lessonViews,
      lessonCompletions,
      completionToViewRatio: lessonViews > 0 ? Number((lessonCompletions / lessonViews).toFixed(4)) : 0,
      interactionDepth: lessonViews > 0 ? Number((interactionDepthBase / lessonViews).toFixed(4)) : 0,
    },
    eventTypeCounts,
    daily,
    topModules,
  };
}

async function main() {
  const envValues = parseEnvFile(envPath);
  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");
  const windowDays = 30;

  if (!supabaseUrl || !serviceRoleKey) {
    ensureOutput({
      generatedAt: new Date().toISOString(),
      status: "skipped",
      windowDays,
      reason: "missing_supabase_env",
    });
    console.log(`Wrote ${outJson}`);
    console.log(`Wrote ${outMd}`);
    console.log("Skipped telemetry report generation (missing Supabase env).");
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const cutoffIso = new Date(Date.now() - windowDays * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("learning_events")
    .select("user_id, module_id, lesson_id, event_type, event_at")
    .gte("event_at", cutoffIso)
    .order("event_at", { ascending: false })
    .limit(250000);

  if (error) {
    ensureOutput({
      generatedAt: new Date().toISOString(),
      status: "error",
      windowDays,
      reason: error.message,
    });
    console.log(`Wrote ${outJson}`);
    console.log(`Wrote ${outMd}`);
    console.warn(`Unable to generate telemetry report: ${error.message}`);
    return;
  }

  const report = buildReportFromRows(data ?? [], windowDays);
  report.cutoffIso = cutoffIso;
  ensureOutput(report);
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
