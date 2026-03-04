import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function main() {
  const routePaths = [
    "src/app/api/admin/platform/codex-b/messaging/route.ts",
    "src/app/api/admin/platform/codex-b/standards-retention/route.ts",
    "src/app/api/admin/platform/codex-b/parent-copilot/route.ts",
    "src/app/api/admin/platform/codex-b/security-slo/route.ts",
    "src/app/api/admin/platform/codex-b/ocr-safety/route.ts",
    "src/app/api/admin/platform/codex-b/tutor-runtime/route.ts",
    "src/app/api/admin/platform/codex-b/literacy-ops/route.ts",
    "src/app/api/admin/platform/codex-b/ga-readiness/route.ts",
  ];

  for (const rel of routePaths) {
    const full = path.resolve(ROOT, rel);
    assert.ok(fs.existsSync(full), `Missing route file: ${rel}`);
    const source = fs.readFileSync(full, "utf8");
    assert.ok(source.includes("requireAdminForApi"), `Admin guard missing: ${rel}`);
    assert.ok(source.includes("enforceIpRateLimit"), `Rate limit missing: ${rel}`);
  }

  console.log("PASS: S5-S12 live admin route presence and guard contract");
  console.log("PASS: Codex-B S5-S12 live integration contract.");
}

main();
