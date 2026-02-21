import { spawnSync } from "node:child_process";

const commands = [
  ["node", ["scripts/validate-curriculum.mjs", "--write-report", "--no-fail"]],
  ["node", ["scripts/curriculum-coverage-report.mjs"]],
  ["node", ["scripts/curriculum-quality-report.mjs"]],
  ["node", ["scripts/exam-prep-coverage-report.mjs"]],
  ["node", ["scripts/curriculum-expansion-plan.mjs"]],
  ["node", ["scripts/curriculum-backlog-report.mjs"]],
  ["node", ["scripts/generate-lesson-media-prompts.mjs"]],
  ["node", ["scripts/media-readiness-report.mjs"]],
  ["node", ["scripts/appstore-compliance-audit.mjs"]],
];

for (const [cmd, args] of commands) {
  const result = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("All reports refreshed.");
