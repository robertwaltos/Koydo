import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/organizations/lms-event-schemas.ts");
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
  const zod = require("zod");
  const contract = loadTranspiledTsModule(MODULE_PATH, {
    "@/lib/organizations/lms-auth": {
      lmsProviderSchema: zod.z.enum([
        "google_classroom",
        "canvas",
        "schoology",
        "moodle",
        "clever",
        "lti_1p3",
      ]),
    },
  });

  assert.equal(contract.LMS_EVENT_SCHEMA_VERSION, "lms.events.v1");
  assert.ok(Array.isArray(contract.LMS_EVENT_TYPES));
  assert.ok(contract.LMS_EVENT_TYPES.includes("lms_sync_started"));
  assert.equal(typeof contract.createLmsEvent, "function");
  assert.equal(typeof contract.parseLmsEventBatch, "function");
  console.log("PASS: LMS event schema contract exports");

  const event = contract.createLmsEvent({
    organizationId: "org-12345",
    provider: "google_classroom",
    source: "system_worker",
    actorUserId: null,
    requestId: "req-1",
    eventType: "lms_sync_started",
    payload: {
      syncId: "sync-12345678",
      syncTarget: "roster",
      trigger: "manual",
      expectedRecordCount: 120,
    },
  });

  assert.equal(event.eventType, "lms_sync_started");
  assert.equal(event.payload.syncTarget, "roster");
  console.log("PASS: event creation + validation contract");

  const parsed = contract.parseLmsEvent(event);
  assert.equal(parsed.success, true);

  const batch = contract.parseLmsEventBatch([
    event,
    {
      schemaVersion: "lms.events.v1",
      eventId: "not-a-uuid",
      organizationId: "org-12345",
      provider: "google_classroom",
      source: "api",
      occurredAt: new Date().toISOString(),
      eventType: "lms_sync_started",
      payload: {
        syncId: "sync-invalid",
        syncTarget: "roster",
        trigger: "manual",
      },
    },
  ]);

  assert.equal(batch.valid.length, 1);
  assert.equal(batch.invalidCount, 1);
  console.log("PASS: batch parse contract");

  const completed = contract.createLmsEvent({
    organizationId: "org-12345",
    provider: "google_classroom",
    eventType: "lms_grade_passback_completed",
    payload: {
      assignmentId: "assignment-1",
      classroomId: "classroom-1",
      submittedCount: 25,
      failedCount: 2,
      durationMs: 1500,
    },
  });

  const auditEvent = contract.toOrganizationAuditEventInput(completed);
  assert.equal(auditEvent.organizationId, "org-12345");
  assert.equal(auditEvent.eventType, "lms_grade_passback_completed");
  assert.equal(auditEvent.subjectType, "lms_event");
  assert.equal(auditEvent.subjectId, "assignment-1");
  console.log("PASS: audit mapping contract");

  console.log("PASS: lms event schema contract.");
}

main();
