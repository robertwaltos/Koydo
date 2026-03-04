import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import typescript from "typescript";

const ROOT = process.cwd();
const MODULE_PATH = path.resolve(ROOT, "src/lib/organizations/classroom-access.ts");
const require = createRequire(import.meta.url);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function loadTranspiledTsModule(filePath, mocks) {
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
      throw new Error(`Unexpected runtime dependency "${specifier}".`);
    },
    cjsModule,
    filePath,
    path.dirname(filePath),
  );

  return cjsModule.exports;
}

function createMockAdmin(resolver) {
  return {
    from(table) {
      const state = { table, filters: {}, inFilters: {} };
      const builder = {
        select() {
          return builder;
        },
        eq(column, value) {
          state.filters[column] = value;
          return builder;
        },
        in(column, value) {
          state.inFilters[column] = value;
          return builder;
        },
        async limit() {
          const result = await resolver(state);
          return {
            data: result?.data ?? null,
            error: result?.error ?? null,
          };
        },
      };
      return builder;
    },
  };
}

function buildModule() {
  return loadTranspiledTsModule(MODULE_PATH, {
    "@/lib/supabase/admin": { createSupabaseAdminClient: () => createMockAdmin(async () => ({ data: [], error: null })) },
    "@/lib/logging/safe-error": { toSafeErrorRecord: (error) => error },
    "@/lib/organizations/errors": { isMissingOrganizationTableError: () => false },
    "@/lib/organizations/roles": {
      getHigherOrganizationRole: (left) => left,
    },
  });
}

async function runResolve(moduleExports, resolver, input) {
  const admin = createMockAdmin(resolver);
  return moduleExports.resolveClassroomAccessForUser({
    ...input,
    admin,
  });
}

async function main() {
  const contract = buildModule();
  assert.equal(typeof contract.parseClassroomAccessPolicyFromMetadata, "function");
  assert.equal(typeof contract.writeClassroomAccessPolicyToMetadata, "function");
  assert.equal(typeof contract.resolveClassroomAccessForUser, "function");

  const parsedPolicy = contract.parseClassroomAccessPolicyFromMetadata({
    classroomAccess: {
      enabled: true,
      accountClass: "school",
      timeZone: "america/chicago",
      startHourLocal: 7,
      endHourLocal: 15,
      requireCountryMatch: true,
      requireTimeZoneMatch: true,
      allowedCountryCodes: ["us", "ca"],
      allowedTimeZones: ["America/Chicago", "America/Chicago"],
    },
  });
  assert.ok(parsedPolicy, "Expected classroom policy to parse.");
  assert.equal(parsedPolicy?.timeZone, "America/Chicago");
  assert.deepEqual(parsedPolicy?.allowedCountryCodes, ["US", "CA"]);
  assert.deepEqual(parsedPolicy?.allowedTimeZones, ["America/Chicago"]);
  console.log("PASS: policy parser canonicalizes timezone + allowlists");

  const writtenMetadata = contract.writeClassroomAccessPolicyToMetadata({}, {
    enabled: true,
    accountClass: "SCHOOL",
    timeZone: "america/chicago",
    startHourLocal: 7,
    endHourLocal: 15,
    requireCountryMatch: true,
    requireTimeZoneMatch: true,
    allowedCountryCodes: ["us", "ca", "US"],
    allowedTimeZones: ["America/Chicago", "America/Chicago"],
    note: null,
  });
  assert.ok(writtenMetadata.classroomAccess);
  assert.deepEqual(writtenMetadata.classroomAccess.allowedCountryCodes, ["US", "CA"]);
  assert.deepEqual(writtenMetadata.classroomAccess.allowedTimeZones, ["America/Chicago"]);
  console.log("PASS: metadata writer normalizes policy values");

  const eligible = await runResolve(
    contract,
    async ({ table }) => {
      if (table === "organization_memberships") {
        return {
          data: [{ organization_id: "org-1", role: "teacher", status: "active" }],
          error: null,
        };
      }
      if (table === "organization_learners") {
        return { data: [], error: null };
      }
      if (table === "organizations") {
        return {
          data: [
            {
              id: "org-1",
              name: "North Academy",
              organization_type: "school",
              metadata: {
                classroomAccess: {
                  enabled: true,
                  accountClass: "SCHOOL",
                  timeZone: "America/Chicago",
                  startHourLocal: 7,
                  endHourLocal: 15,
                  requireCountryMatch: true,
                  requireTimeZoneMatch: true,
                  allowedCountryCodes: ["US"],
                  allowedTimeZones: ["America/Chicago"],
                },
              },
            },
          ],
          error: null,
        };
      }
      return { data: [], error: null };
    },
    {
      userId: "user-1",
      now: new Date("2026-03-04T14:30:00.000Z"),
      requestHeaders: new Headers({
        "x-vercel-ip-country": "US",
        "x-vercel-ip-timezone": "America/Chicago",
      }),
    },
  );
  assert.equal(eligible.granted, true);
  assert.equal(eligible.reason, "eligible");
  assert.equal(eligible.organizationId, "org-1");
  assert.equal(eligible.accountClass, "TEACHER");
  console.log("PASS: eligible classroom access during local school window");

  const outsideWindow = await runResolve(
    contract,
    async ({ table }) => {
      if (table === "organization_memberships") {
        return {
          data: [{ organization_id: "org-1", role: "teacher", status: "active" }],
          error: null,
        };
      }
      if (table === "organization_learners") {
        return { data: [], error: null };
      }
      if (table === "organizations") {
        return {
          data: [
            {
              id: "org-1",
              name: "North Academy",
              organization_type: "school",
              metadata: {
                classroomAccess: {
                  enabled: true,
                  accountClass: "SCHOOL",
                  timeZone: "America/Chicago",
                  startHourLocal: 7,
                  endHourLocal: 15,
                  requireCountryMatch: true,
                  requireTimeZoneMatch: true,
                  allowedCountryCodes: ["US"],
                  allowedTimeZones: ["America/Chicago"],
                },
              },
            },
          ],
          error: null,
        };
      }
      return { data: [], error: null };
    },
    {
      userId: "user-1",
      now: new Date("2026-03-04T23:30:00.000Z"),
      requestHeaders: new Headers({
        "x-vercel-ip-country": "US",
        "x-vercel-ip-timezone": "America/Chicago",
      }),
    },
  );
  assert.equal(outsideWindow.granted, false);
  assert.equal(outsideWindow.reason, "outside_classroom_hours");
  console.log("PASS: outside classroom window blocked");

  const timezoneMismatch = await runResolve(
    contract,
    async ({ table }) => {
      if (table === "organization_memberships") {
        return {
          data: [{ organization_id: "org-1", role: "teacher", status: "active" }],
          error: null,
        };
      }
      if (table === "organization_learners") {
        return { data: [], error: null };
      }
      if (table === "organizations") {
        return {
          data: [
            {
              id: "org-1",
              name: "North Academy",
              organization_type: "school",
              metadata: {
                classroomAccess: {
                  enabled: true,
                  accountClass: "SCHOOL",
                  timeZone: "America/Chicago",
                  startHourLocal: 7,
                  endHourLocal: 15,
                  requireCountryMatch: true,
                  requireTimeZoneMatch: true,
                  allowedCountryCodes: ["US"],
                  allowedTimeZones: ["America/Chicago"],
                },
              },
            },
          ],
          error: null,
        };
      }
      return { data: [], error: null };
    },
    {
      userId: "user-1",
      now: new Date("2026-03-04T14:30:00.000Z"),
      requestHeaders: new Headers({
        "x-vercel-ip-country": "US",
        "x-vercel-ip-timezone": "America/Los_Angeles",
      }),
    },
  );
  assert.equal(timezoneMismatch.granted, false);
  assert.equal(timezoneMismatch.reason, "timezone_not_allowed");
  console.log("PASS: timezone mismatch blocked");

  const noAffiliation = await runResolve(
    contract,
    async ({ table }) => {
      if (table === "organization_memberships" || table === "organization_learners") {
        return { data: [], error: null };
      }
      return { data: [], error: null };
    },
    {
      userId: "user-2",
      now: new Date("2026-03-04T14:30:00.000Z"),
      requestHeaders: new Headers({
        "x-vercel-ip-country": "US",
        "x-vercel-ip-timezone": "America/Chicago",
      }),
    },
  );
  assert.equal(noAffiliation.granted, false);
  assert.equal(noAffiliation.reason, "no_organization_affiliation");
  console.log("PASS: no-organization affiliation denied");

  console.log("PASS: classroom access contract.");
}

main();
