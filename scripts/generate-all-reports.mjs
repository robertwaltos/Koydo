import { spawnSync } from "node:child_process";

const commands = [
  ["node", ["scripts/validate-curriculum.mjs", "--write-report", "--no-fail"]],
  ["node", ["scripts/curriculum-coverage-report.mjs"]],
  ["node", ["scripts/curriculum-quality-report.mjs"]],
  ["node", ["scripts/exam-prep-coverage-report.mjs"]],
  ["node", ["scripts/exam-prep-content-quality-report.mjs"]],
  ["node", ["scripts/exam-authoring-backlog-report.mjs"]],
  ["node", ["scripts/curriculum-expansion-plan.mjs"]],
  ["node", ["scripts/curriculum-backlog-report.mjs"]],
  ["node", ["scripts/import-external-curriculum.mjs", "--source-dir", "../External_AI_Agents", "--merge-threshold", "75"]],
  ["node", ["scripts/generate-lesson-media-prompts.mjs"]],
  ["node", ["scripts/export-curriculum-state-for-external-agents.mjs"]],
  ["node", ["scripts/telemetry-learning-events-report.mjs"]],
  ["node", ["scripts/media-readiness-report.mjs"]],
  ["node", ["scripts/knowledgebase-rights-report.mjs", "--write-report"]],
  ["node", ["scripts/knowledgebase-domain-coverage-report.mjs", "--write-report"]],
  ["node", ["scripts/knowledgebase-quality-gate.mjs", "--write-report"]],
  ["node", ["scripts/knowledgebase-backlog-report.mjs", "--write-report", "--min-healthy-docs", "5"]],
  ["node", ["scripts/knowledgebase-generate-targeted-seeds.mjs", "--write-report"]],
  ["node", ["scripts/knowledgebase-export-lesson-pack.mjs", "--write-report", "--max-chunks-per-domain", "80", "--min-score", "2"]],
  ["node", ["scripts/stripe-webhook-health-report.mjs", "--write-report", "--no-fail"]],
  ["node", ["scripts/appstore-compliance-audit.mjs"]],
];

for (const [cmd, args] of commands) {
  const result = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("All reports refreshed.");
