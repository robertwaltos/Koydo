import { spawnSync } from "node:child_process";

const commands = [
  ["node", ["scripts/knowledgebase-rights-report.mjs", "--write-report", "--fail-on-missing", "--fail-on-blocked"]],
  ["node", ["scripts/knowledgebase-harvest-links.mjs", "--write-report", "--limit", "25", "--timeout-ms", "30000"]],
  ["node", ["scripts/knowledgebase-build-ingestion-queue.mjs", "--write-report", "--rights-mode", "approved-or-conditional"]],
  ["node", ["scripts/knowledgebase-fetch-queue.mjs", "--write-report", "--limit", "40"]],
  ["node", ["scripts/knowledgebase-extract-pdf-text.mjs", "--write-report", "--no-fail"]],
];

for (const [command, args] of commands) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: true,
  });
  if ((result.status ?? 1) !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("Knowledgebase pipeline complete.");
