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

function modulePath(fileName) {
  return path.resolve(ROOT, "src/lib/platform/codex-b", fileName);
}

function main() {
  const s3 = loadTranspiledTsModule(modulePath("s3-grade-compliance-telemetry.ts"));
  const s3Score = s3.normalizeGradePassbackScore({
    provider: "lti_1p3",
    assignmentId: "a1",
    learnerExternalId: "student-1",
    rawScore: 42,
    maxScore: 50,
    passedAt: new Date().toISOString(),
  });
  assert.equal(s3Score.normalizedPercent, 84);
  assert.equal(s3.evaluateFerpaCoppaGate({
    learnerAgeYears: 11,
    hasParentConsent: false,
    actorRole: "teacher",
    purpose: "classroom_learning",
    hasDistrictDpa: true,
  }).allowed, false);
  console.log("PASS: S3 contracts");

  const s4 = loadTranspiledTsModule(modulePath("s4-vector-rollout-harness.ts"));
  s4.upsertVectorDocument({ documentId: "doc-1", text: "algebra fractions ratios", metadata: {} });
  s4.upsertVectorDocument({ documentId: "doc-2", text: "history civics constitution", metadata: {} });
  const query = s4.queryVectorDocuments("fractions practice", 1);
  assert.equal(query.length, 1);
  assert.equal(typeof s4.buildRolloutDashboardSnapshot({
    emergencyStopActive: false,
    featureFlags: { a: true, b: false },
    staleWorkers: 0,
    incidentOpen: false,
  }).generatedAt, "string");
  console.log("PASS: S4 contracts");

  const s5 = loadTranspiledTsModule(modulePath("s5-messaging-translation-notifications.ts"));
  const filtered = s5.applyMessagingSafetyFilters("Call me at 555-111-2222");
  assert.equal(filtered.allowed, false);
  const fanout = s5.planNotificationFanout({
    eventType: "message_created",
    targets: [{ userId: "u1", channels: ["in_app", "email"] }],
  });
  assert.equal(fanout.totalJobs, 2);
  console.log("PASS: S5 contracts");

  const s6 = loadTranspiledTsModule(modulePath("s6-standards-report-retention.ts"));
  const agg = s6.aggregateStandardsTelemetry([
    {
      eventId: "00000000-0000-4000-8000-000000000001",
      standardCode: "CCSS.MATH.5.NF",
      classId: "00000000-0000-4000-8000-000000000010",
      learnerUserId: "00000000-0000-4000-8000-000000000011",
      proficiencyDelta: 0.2,
      occurredAt: new Date().toISOString(),
    },
  ]);
  assert.equal(agg.length, 1);
  console.log("PASS: S6 contracts");

  const s7 = loadTranspiledTsModule(modulePath("s7-parent-copilot-printables-eval.ts"));
  const policy = s7.applyParentCopilotPromptPolicy({
    parentUserId: "00000000-0000-4000-8000-000000000001",
    learnerUserId: "00000000-0000-4000-8000-000000000002",
    objective: "progress_summary",
    prompt: "Summarize this week progress",
    locale: "en-US",
  });
  assert.equal(policy.allowed, true);
  console.log("PASS: S7 contracts");

  const s8 = loadTranspiledTsModule(modulePath("s8-security-slo-pilot.ts"));
  const alerts = s8.evaluateSloAlerts([
    {
      service: "sync-worker",
      availability: 0.999,
      p95LatencyMs: 700,
      errorRate: 0.001,
      targetAvailability: 0.995,
      targetP95LatencyMs: 800,
      maxErrorRate: 0.01,
    },
  ]);
  assert.equal(alerts[0].healthy, true);
  console.log("PASS: S8 contracts");

  const s9 = loadTranspiledTsModule(modulePath("s9-ocr-solver-safety.ts"));
  assert.equal(
    s9.validateOcrUploadSecurity({
      filename: "scan.pdf",
      mimeType: "application/pdf",
      byteLength: 1024,
      sha256: "a".repeat(64),
    }).allowed,
    true,
  );
  console.log("PASS: S9 contracts");

  const s10 = loadTranspiledTsModule(modulePath("s10-tutor-memory-speech-eval.ts"));
  const mem = s10.compactTutorMemory([
    {
      key: "goal",
      value: "practice fractions",
      weight: 0.8,
      createdAt: new Date().toISOString(),
    },
  ]);
  assert.equal(mem.length, 1);
  console.log("PASS: S10 contracts");

  const s11 = loadTranspiledTsModule(modulePath("s11-literacy-ingestion-ranking-offline.ts"));
  const approved = s11.filterRightsApprovedCatalog([
    {
      itemId: "book-1",
      title: "Book",
      rightsStatus: "approved",
      rightsEvidenceRef: "evidence://1",
      readingLevel: 4,
      tags: [],
    },
  ]);
  assert.equal(approved.length, 1);
  console.log("PASS: S11 contracts");

  const s12 = loadTranspiledTsModule(modulePath("s12-ga-load-compliance.ts"));
  const ga = s12.summarizeGaReadiness([
    { checkId: "1", category: "security", passed: true, severity: "major" },
  ]);
  assert.equal(ga.readyForGa, true);
  console.log("PASS: S12 contracts");

  console.log("PASS: Codex-B S3-S12 platform contract.");
}

main();
