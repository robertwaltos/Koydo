import fs from "node:fs";
import path from "node:path";

const expansionPath = path.resolve("public/CURRICULUM-EXPANSION-PLAN.json");
const qualityPath = path.resolve("public/CURRICULUM-QUALITY-REPORT.json");
const examPath = path.resolve("public/EXAM-PREP-COVERAGE-REPORT.json");
const outJson = path.resolve("public/CURRICULUM-BACKLOG-REPORT.json");
const outMd = path.resolve("public/CURRICULUM-BACKLOG-REPORT.md");

function loadJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function priorityWeight(priority) {
  if (priority === "high") return 0;
  if (priority === "medium") return 1;
  return 2;
}

function buildBacklog(plan, quality, exam) {
  const items = [];
  const targets = Array.isArray(plan.targets) ? plan.targets : [];
  for (const row of targets) {
    const missingCount = Number(row.missingCount ?? 0);
    if (missingCount <= 0) continue;
    const targetCount = Number(row.targetCount ?? 0);
    items.push({
      workstream: "curriculum",
      itemType: "coverage_gap",
      priority: missingCount >= Math.ceil(targetCount * 0.8) ? "high" : "medium",
      key: `${row.gradeBand}::${row.subject}`,
      gradeBand: String(row.gradeBand ?? ""),
      subject: String(row.subject ?? ""),
      moduleId: "",
      moduleTitle: "",
      track: "",
      region: "",
      missingCount,
      existingCount: Number(row.existingCount ?? 0),
      targetCount,
      score: null,
      details: "Create lessons to close grade/subject coverage gap.",
    });
  }

  const missingTracks = Array.isArray(exam.missingTracks) ? exam.missingTracks : [];
  for (const missingTrack of missingTracks) {
    items.push({
      workstream: "exam-prep",
      itemType: "exam_track_gap",
      priority: "high",
      key: String(missingTrack).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      gradeBand: "",
      subject: "exam-prep",
      moduleId: "",
      moduleTitle: "",
      track: String(missingTrack),
      region: "",
      missingCount: 1,
      existingCount: 0,
      targetCount: 1,
      score: null,
      details: `Create full prep track for ${missingTrack}.`,
    });
  }

  const topPriorityModules = Array.isArray(quality.topPriorityModules) ? quality.topPriorityModules : [];
  for (const row of topPriorityModules) {
    const priorityRaw = String(row.priority ?? "medium").toLowerCase();
    if (priorityRaw !== "high" && priorityRaw !== "medium") continue;
    items.push({
      workstream: "quality",
      itemType: "module_remediation",
      priority: priorityRaw,
      key: String(row.moduleId ?? "unknown"),
      gradeBand: "",
      subject: String(row.subject ?? ""),
      moduleId: String(row.moduleId ?? ""),
      moduleTitle: String(row.title ?? ""),
      track: "",
      region: "",
      missingCount: null,
      existingCount: null,
      targetCount: null,
      score: Number(row.score ?? 0),
      details: Array.isArray(row.issues) ? row.issues.slice(0, 3).join(" | ") : "",
    });
  }

  return items.sort((a, b) => {
    const priorityCmp = priorityWeight(a.priority) - priorityWeight(b.priority);
    if (priorityCmp !== 0) return priorityCmp;
    if (a.missingCount !== null && b.missingCount !== null) {
      const missingCmp = b.missingCount - a.missingCount;
      if (missingCmp !== 0) return missingCmp;
    }
    if (a.score !== null && b.score !== null) {
      const scoreCmp = a.score - b.score;
      if (scoreCmp !== 0) return scoreCmp;
    }
    return a.key.localeCompare(b.key);
  });
}

function summarize(items) {
  const byWorkstream = {
    curriculum: 0,
    "exam-prep": 0,
    quality: 0,
  };
  const byPriority = {
    high: 0,
    medium: 0,
    low: 0,
  };
  for (const item of items) {
    byWorkstream[item.workstream] += 1;
    byPriority[item.priority] += 1;
  }
  return {
    total: items.length,
    byWorkstream,
    byPriority,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Curriculum Backlog Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Total items: ${report.summary.total}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- High priority: ${report.summary.byPriority.high}`);
  lines.push(`- Medium priority: ${report.summary.byPriority.medium}`);
  lines.push(`- Low priority: ${report.summary.byPriority.low}`);
  lines.push(`- Curriculum gaps: ${report.summary.byWorkstream.curriculum}`);
  lines.push(`- Exam-prep gaps: ${report.summary.byWorkstream["exam-prep"]}`);
  lines.push(`- Quality remediations: ${report.summary.byWorkstream.quality}`);
  lines.push("");
  lines.push("## Backlog Items");
  lines.push("");
  lines.push("| Workstream | Type | Priority | Key | Gap/Score | Details |");
  lines.push("|---|---|---|---|---:|---|");
  for (const item of report.items) {
    const gapOrScore =
      item.missingCount !== null
        ? `${item.missingCount}${item.targetCount !== null ? `/${item.targetCount}` : ""}`
        : item.score !== null
          ? String(item.score)
          : "";
    lines.push(
      `| ${item.workstream} | ${item.itemType} | ${String(item.priority).toUpperCase()} | ${item.key} | ${gapOrScore} | ${item.details} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const plan = loadJson(expansionPath, { generatedAt: null, targets: [] });
  const quality = loadJson(qualityPath, { generatedAt: null, topPriorityModules: [] });
  const exam = loadJson(examPath, { generatedAt: null, missingTracks: [] });

  const items = buildBacklog(plan, quality, exam);
  const report = {
    generatedAt: new Date().toISOString(),
    sourceReports: {
      expansionGeneratedAt: plan.generatedAt ?? null,
      qualityGeneratedAt: quality.generatedAt ?? null,
      examGeneratedAt: exam.generatedAt ?? null,
    },
    summary: summarize(items),
    items,
  };

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();
