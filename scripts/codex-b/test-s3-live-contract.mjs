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

function loadTranspiledTsModule(filePath, mocks = {}) {
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
      if (specifier in mocks) return mocks[specifier];
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
  const adapterPath = path.resolve(ROOT, "src/lib/platform/codex-b/s3-live-adapters.ts");
  const basePath = path.resolve(ROOT, "src/lib/platform/codex-b/s3-grade-compliance-telemetry.ts");
  const base = loadTranspiledTsModule(basePath);
  const adapters = loadTranspiledTsModule(adapterPath, {
    "@/lib/platform/codex-b/s3-grade-compliance-telemetry": base,
  });

  const evalResult = adapters.evaluateGradePassbackPayload({
    outcomes: [
      {
        provider: "google_classroom",
        assignmentId: "a1",
        learnerExternalId: "learner-1",
        rawScore: 8,
        maxScore: 10,
        learnerAgeYears: 12,
        hasParentConsent: true,
        hasDistrictDpa: true,
      },
      {
        provider: "google_classroom",
        assignmentId: "a1",
        learnerExternalId: "learner-2",
        rawScore: 7,
        maxScore: 10,
        learnerAgeYears: 11,
        hasParentConsent: false,
        hasDistrictDpa: true,
      },
    ],
  });

  assert.equal(evalResult.acceptedCount, 1);
  assert.equal(evalResult.deniedCount, 1);
  assert.equal(evalResult.averagePercent, 80);
  console.log("PASS: S3 grade-passback adapter enforcement contract");

  const telemetry = adapters.normalizeClassroomTelemetryPayload({
    classId: "00000000-0000-4000-8000-000000000010",
    payload: {
      events: [
        {
          sessionId: "session-1",
          eventType: "session_started",
          actorType: "teacher",
          payload: {},
        },
      ],
    },
  });

  assert.equal(telemetry.count, 1);
  assert.equal(telemetry.events[0].classId, "00000000-0000-4000-8000-000000000010");
  console.log("PASS: S3 telemetry adapter normalization contract");

  const teacherAccessPath = path.resolve(ROOT, "src/lib/compliance/teacher-access.ts");
  const teacherAccessSource = readRequiredFile(teacherAccessPath);
  assert.ok(teacherAccessSource.includes("testing_class_grade_passback"));
  assert.ok(teacherAccessSource.includes("testing_class_telemetry"));
  console.log("PASS: S3 teacher-access purpose registration contract");

  const routePaths = [
    "src/app/api/testing/classes/[classId]/lms/grade-passback/route.ts",
    "src/app/api/testing/classes/[classId]/telemetry/route.ts",
  ];
  for (const rel of routePaths) {
    const full = path.resolve(ROOT, rel);
    assert.ok(fs.existsSync(full), `Missing route file: ${rel}`);
  }
  console.log("PASS: S3 live API route presence contract");

  console.log("PASS: Codex-B S3 live integration contract.");
}

main();
