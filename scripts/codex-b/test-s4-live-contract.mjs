import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import typescript from "typescript";

const ROOT = process.cwd();
const require = createRequire(import.meta.url);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath) {
  const source = readRequiredFile(filePath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: filePath,
  }).outputText;

  const cjsModule = { exports: {} };
  const wrapped = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled,
  );

  wrapped(
    cjsModule.exports,
    (specifier) => {
      if (specifier === "zod") return require("zod");
      throw new Error(`Unexpected runtime dependency \"${specifier}\".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function main() {
  const s4Path = path.resolve(ROOT, "src/lib/platform/codex-b/s4-vector-rollout-harness.ts");
  const s4 = loadTranspiledTsModule(s4Path);

  s4.upsertVectorDocument({
    documentId: "live-harness-1",
    text: "algebra geometry calculus",
    metadata: { source: "contract" },
  });
  const top = s4.queryVectorDocuments("algebra", 1);
  assert.equal(top.length, 1);
  console.log("PASS: S4 vector live primitive contract");

  const snapshot = s4.buildRolloutDashboardSnapshot({
    emergencyStopActive: false,
    featureFlags: { a: true, b: false, c: true },
    staleWorkers: 0,
    incidentOpen: false,
  });
  assert.equal(snapshot.featuresEnabled, 2);
  assert.equal(snapshot.featuresDisabled, 1);
  console.log("PASS: S4 rollout snapshot primitive contract");

  const routePaths = [
    "src/app/api/admin/platform/codex-b/vector-index/route.ts",
    "src/app/api/admin/platform/codex-b/rollout-dashboard/route.ts",
    "src/app/api/admin/platform/codex-b/integration-harness/run/route.ts",
  ];
  for (const rel of routePaths) {
    const full = path.resolve(ROOT, rel);
    assert.ok(fs.existsSync(full), `Missing route file: ${rel}`);
  }
  console.log("PASS: S4 live admin route presence contract");

  console.log("PASS: Codex-B S4 live integration contract.");
}

main();
