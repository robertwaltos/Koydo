import fs from "node:fs";
import path from "node:path";

const qualityPath = path.resolve("public/CURRICULUM-QUALITY-REPORT.json");
const outJson = path.resolve("public/EXAM-PREP-COVERAGE-REPORT.json");
const outMd = path.resolve("public/EXAM-PREP-COVERAGE-REPORT.md");

const targetTracks = [
  { key: "sat", label: "SAT", region: "US" },
  { key: "act", label: "ACT", region: "US" },
  { key: "ap", label: "AP", region: "US" },
  { key: "gcse", label: "GCSE", region: "UK" },
  { key: "a-level", label: "A-Level", region: "UK" },
  { key: "jee-neet", label: "JEE/NEET", region: "India" },
  { key: "gaokao", label: "Gaokao", region: "China" },
];

function slugify(input) {
  return String(input ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveTrackKey(moduleId, title) {
  const haystack = `${moduleId} ${title}`.toLowerCase();
  if (haystack.includes("jee-neet")) return "jee-neet";
  if (haystack.includes("a-level") || haystack.includes("alevel")) return "a-level";
  if (haystack.includes("gaokao")) return "gaokao";
  if (haystack.includes("gcse")) return "gcse";
  if (haystack.includes("sat")) return "sat";
  if (haystack.includes("act")) return "act";
  if (haystack.includes("ap")) return "ap";
  return null;
}

function loadQualityModules() {
  if (!fs.existsSync(qualityPath)) {
    throw new Error(
      "Missing public/CURRICULUM-QUALITY-REPORT.json. Run `npm run curriculum:quality` first.",
    );
  }

  const report = JSON.parse(fs.readFileSync(qualityPath, "utf8"));
  const modules = Array.isArray(report.modules) ? report.modules : [];
  return {
    generatedAt: report.generatedAt ?? null,
    modules,
  };
}

function buildReport(quality) {
  const examPrepModules = quality.modules
    .filter((moduleEntry) => {
      const subjectSlug = slugify(moduleEntry.subject);
      return subjectSlug === "exam-prep" || String(moduleEntry.moduleId ?? "").includes("-prep-");
    })
    .map((moduleEntry) => {
      const trackKey = resolveTrackKey(moduleEntry.moduleId, moduleEntry.title);
      const trackTarget = targetTracks.find((entry) => entry.key === trackKey);
      return {
        track: trackTarget?.label ?? "Other",
        trackKey: trackTarget?.key ?? null,
        region: trackTarget?.region ?? "Global",
        moduleId: String(moduleEntry.moduleId ?? "unknown"),
        title: String(moduleEntry.title ?? "Untitled module"),
        lessonCount: Number(moduleEntry.lessonCount ?? 0),
        score: Number(moduleEntry.score ?? 0),
        priority: String(moduleEntry.priority ?? "unknown"),
      };
    })
    .sort((a, b) => a.track.localeCompare(b.track) || a.moduleId.localeCompare(b.moduleId));

  const availableTrackKeys = new Set(
    examPrepModules
      .map((row) => row.trackKey)
      .filter((key) => typeof key === "string" && key.length > 0),
  );
  const missingTracks = targetTracks
    .filter((track) => !availableTrackKeys.has(track.key))
    .map((track) => track.label);

  const targetTrackCount = targetTracks.length;
  const availableTrackCount = targetTrackCount - missingTracks.length;
  const completionPercent =
    targetTrackCount > 0 ? Number(((availableTrackCount / targetTrackCount) * 100).toFixed(2)) : 0;
  const totalLessons = examPrepModules.reduce((acc, row) => acc + row.lessonCount, 0);
  const averageScore =
    examPrepModules.length > 0
      ? Number(
          (
            examPrepModules.reduce((acc, row) => acc + row.score, 0) /
            examPrepModules.length
          ).toFixed(2),
        )
      : 0;

  return {
    generatedAt: new Date().toISOString(),
    sourceReportGeneratedAt: quality.generatedAt,
    totals: {
      targetTrackCount,
      availableTrackCount,
      completionPercent,
      totalModules: examPrepModules.length,
      totalLessons,
      averageScore,
    },
    missingTracks,
    tracks: examPrepModules,
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Exam Prep Coverage Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  if (report.sourceReportGeneratedAt) {
    lines.push(`Quality report source generated: ${report.sourceReportGeneratedAt}`);
  }
  lines.push("");
  lines.push(`Target tracks: ${report.totals.targetTrackCount}`);
  lines.push(`Available tracks: ${report.totals.availableTrackCount}`);
  lines.push(`Coverage completion: ${report.totals.completionPercent}%`);
  lines.push(`Exam prep modules: ${report.totals.totalModules}`);
  lines.push(`Exam prep lessons: ${report.totals.totalLessons}`);
  lines.push(`Average exam module score: ${report.totals.averageScore}`);
  lines.push("");
  lines.push(
    `Missing tracks: ${
      report.missingTracks.length > 0 ? report.missingTracks.join(", ") : "None"
    }`,
  );
  lines.push("");
  lines.push("## Exam Prep Modules");
  lines.push("");
  lines.push("| Track | Region | Module | Lessons | Score | Priority |");
  lines.push("|---|---|---|---:|---:|---|");
  for (const row of report.tracks) {
    lines.push(
      `| ${row.track} | ${row.region} | ${row.title} | ${row.lessonCount} | ${row.score} | ${String(row.priority).toUpperCase()} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const quality = loadQualityModules();
  const report = buildReport(quality);
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  fs.writeFileSync(outMd, toMarkdown(report));
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outMd}`);
}

main();
