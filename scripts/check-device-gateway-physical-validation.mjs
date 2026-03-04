#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DEFAULT_REPORT_FILE = path.resolve(
  ROOT,
  "public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json",
);
const DEFAULT_SUMMARY_FILE = path.resolve(
  ROOT,
  "public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.md",
);

const REQUIRED_DEVICES = [
  { deviceId: "apple-vision-pro", deviceName: "Apple Vision Pro" },
  { deviceId: "meta-quest", deviceName: "Meta Quest" },
];

const REQUIRED_CHECKS = [
  { checkId: "webxr_session_launch", label: "WebXR session launch succeeds" },
  { checkId: "tier_classification_parity", label: "Tier classification matches expected hardware tier" },
  { checkId: "telemetry_event_captured", label: "Telemetry event persisted in /api/telemetry/events" },
  { checkId: "discovery_confidence_logged", label: "Discovery confidence fields logged in telemetry payload" },
];

const VALID_STATUSES = new Set(["pending", "pass", "fail"]);
const VALID_BANDS = new Set(["low", "medium", "high"]);

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function parseArgs(argv) {
  const options = {
    reportFile: DEFAULT_REPORT_FILE,
    summaryFile: DEFAULT_SUMMARY_FILE,
    initOnly: false,
    resetTemplate: false,
    noFail: false,
    json: false,
  };

  const readValue = (arg, index) => {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      return { value: arg.slice(equalsIndex + 1).trim(), consumeNext: false };
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      return { value: "", consumeNext: false };
    }
    return { value: next.trim(), consumeNext: true };
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--init-only") {
      options.initOnly = true;
      continue;
    }
    if (arg === "--reset-template") {
      options.resetTemplate = true;
      continue;
    }
    if (arg === "--no-fail") {
      options.noFail = true;
      continue;
    }
    if (arg === "--json") {
      options.json = true;
      continue;
    }
    if (arg === "--report-file" || arg.startsWith("--report-file=")) {
      const parsed = readValue(arg, i);
      if (parsed.value) options.reportFile = path.resolve(ROOT, parsed.value);
      if (parsed.consumeNext) i += 1;
      continue;
    }
    if (arg === "--summary-file" || arg.startsWith("--summary-file=")) {
      const parsed = readValue(arg, i);
      if (parsed.value) options.summaryFile = path.resolve(ROOT, parsed.value);
      if (parsed.consumeNext) i += 1;
    }
  }

  return options;
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function nowIso() {
  return new Date().toISOString();
}

function buildDeviceTemplate({ deviceId, deviceName }) {
  return {
    deviceId,
    deviceName,
    tester: "",
    runtime: {
      browser: "",
      os: "",
      appVersion: "",
      notes: "",
    },
    checks: REQUIRED_CHECKS.map((check) => ({
      checkId: check.checkId,
      label: check.label,
      status: "pending",
      notes: "",
      evidence: [],
    })),
    telemetry: {
      eventTimestamp: "",
      eventSource: "",
      detectionVersion: "",
      tier: null,
      gpuTier: null,
      discoveryConfidence: null,
      discoveryConfidenceBand: "",
      streamingTargetCount: null,
      castTargets: [],
    },
    notes: "",
  };
}

function buildTemplateReport() {
  return {
    schemaVersion: "voyager-zero-device-gateway-physical-v1",
    generatedAt: nowIso(),
    updatedAt: nowIso(),
    devices: REQUIRED_DEVICES.map(buildDeviceTemplate),
    signOff: {
      status: "pending",
      approver: "",
      approvedAt: "",
      notes: "",
    },
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function writeJson(filePath, value) {
  ensureParentDir(filePath);
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function asNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  return null;
}

function formatPath(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function validateReport(report) {
  const failures = [];
  const warnings = [];

  const fail = (scope, detail) => failures.push({ scope, detail });
  const warn = (scope, detail) => warnings.push({ scope, detail });

  const devices = Array.isArray(report.devices) ? report.devices : [];
  for (const required of REQUIRED_DEVICES) {
    const device = devices.find((entry) => normalizeString(entry?.deviceId) === required.deviceId);
    if (!device) {
      fail(required.deviceName, "Missing required device entry.");
      continue;
    }

    if (!normalizeString(device.tester)) {
      fail(required.deviceName, "Missing tester.");
    }
    if (!normalizeString(device.runtime?.browser)) {
      fail(required.deviceName, "Missing runtime.browser.");
    }
    if (!normalizeString(device.runtime?.os)) {
      fail(required.deviceName, "Missing runtime.os.");
    }

    const checks = Array.isArray(device.checks) ? device.checks : [];
    const checkMap = new Map(checks.map((check) => [normalizeString(check?.checkId), check]));
    for (const requiredCheck of REQUIRED_CHECKS) {
      const check = checkMap.get(requiredCheck.checkId);
      const scope = `${required.deviceName} :: ${requiredCheck.checkId}`;
      if (!check) {
        fail(scope, "Missing required check entry.");
        continue;
      }

      const status = normalizeString(check.status).toLowerCase();
      if (!VALID_STATUSES.has(status)) {
        fail(scope, `Invalid status "${check.status}".`);
        continue;
      }

      if (status !== "pass") {
        fail(scope, `Status must be pass for sign-off (current: ${status}).`);
      }

      const evidence = Array.isArray(check.evidence)
        ? check.evidence.map((item) => normalizeString(item)).filter(Boolean)
        : [];
      if (evidence.length === 0) {
        fail(scope, "At least one evidence item is required.");
      }

      if (!normalizeString(check.notes)) {
        warn(scope, "Check notes are empty.");
      }
    }

    const telemetry = device.telemetry ?? {};
    const telemetryScope = `${required.deviceName} :: telemetry`;

    if (!normalizeString(telemetry.eventTimestamp)) {
      fail(telemetryScope, "Missing telemetry.eventTimestamp.");
    }
    if (!normalizeString(telemetry.eventSource)) {
      fail(telemetryScope, "Missing telemetry.eventSource.");
    }
    if (!normalizeString(telemetry.detectionVersion)) {
      fail(telemetryScope, "Missing telemetry.detectionVersion.");
    }

    const tier = asNumber(telemetry.tier);
    if (tier === null || tier < 0 || tier > 3) {
      fail(telemetryScope, "telemetry.tier must be a number between 0 and 3.");
    }

    const gpuTier = asNumber(telemetry.gpuTier);
    if (gpuTier === null || gpuTier < 0 || gpuTier > 3) {
      fail(telemetryScope, "telemetry.gpuTier must be a number between 0 and 3.");
    }

    const confidence = asNumber(telemetry.discoveryConfidence);
    if (confidence === null || confidence < 0 || confidence > 1) {
      fail(telemetryScope, "telemetry.discoveryConfidence must be a number between 0 and 1.");
    }

    const band = normalizeString(telemetry.discoveryConfidenceBand).toLowerCase();
    if (!VALID_BANDS.has(band)) {
      fail(telemetryScope, "telemetry.discoveryConfidenceBand must be low|medium|high.");
    }

    const targetCount = asNumber(telemetry.streamingTargetCount);
    if (targetCount === null || targetCount < 0 || targetCount > 3) {
      fail(telemetryScope, "telemetry.streamingTargetCount must be a number between 0 and 3.");
    }

    const castTargets = Array.isArray(telemetry.castTargets)
      ? telemetry.castTargets.map((item) => normalizeString(item)).filter(Boolean)
      : [];
    if (castTargets.length === 0) {
      warn(telemetryScope, "telemetry.castTargets is empty.");
    }
  }

  const signOff = report.signOff ?? {};
  const signOffStatus = normalizeString(signOff.status).toLowerCase();
  if (signOffStatus !== "approved") {
    fail("signOff", `status must be approved (current: ${signOffStatus || "missing"}).`);
  }
  if (!normalizeString(signOff.approver)) {
    fail("signOff", "Missing approver.");
  }
  if (!normalizeString(signOff.approvedAt)) {
    fail("signOff", "Missing approvedAt timestamp.");
  }

  return {
    pass: failures.length === 0,
    failures,
    warnings,
    totalChecks: REQUIRED_DEVICES.length * REQUIRED_CHECKS.length,
  };
}

function toMarkdown({ reportPath, report, validation, templateSeeded }) {
  const devices = Array.isArray(report.devices) ? report.devices : [];
  const lines = [];

  lines.push("# Device Gateway Physical Validation");
  lines.push("");
  lines.push(`Generated: ${nowIso()}`);
  lines.push(`Report file: \`${formatPath(reportPath)}\``);
  lines.push(`Schema version: \`${normalizeString(report.schemaVersion) || "unknown"}\``);
  lines.push(`Template seeded this run: ${templateSeeded ? "yes" : "no"}`);
  lines.push("");

  lines.push("## Summary");
  lines.push("");
  if (!validation) {
    lines.push("- Validation: not executed (`--init-only`).");
  } else {
    lines.push(`- Validation: ${validation.pass ? "PASS" : "FAIL"}`);
    lines.push(`- Required check rows: ${validation.totalChecks}`);
    lines.push(`- Failures: ${validation.failures.length}`);
    lines.push(`- Warnings: ${validation.warnings.length}`);
  }
  lines.push("");

  lines.push("## Device Checks");
  lines.push("");
  for (const device of devices) {
    lines.push(`### ${normalizeString(device.deviceName) || "Unknown Device"}`);
    lines.push("");
    lines.push(`- Device ID: \`${normalizeString(device.deviceId)}\``);
    lines.push(`- Tester: ${normalizeString(device.tester) || "(missing)"}`);
    lines.push(`- Browser: ${normalizeString(device.runtime?.browser) || "(missing)"}`);
    lines.push(`- OS: ${normalizeString(device.runtime?.os) || "(missing)"}`);
    lines.push("");
    lines.push("| Check | Status | Evidence Count | Notes |");
    lines.push("| --- | --- | --- | --- |");

    const checks = Array.isArray(device.checks) ? device.checks : [];
    for (const check of checks) {
      const evidence = Array.isArray(check.evidence)
        ? check.evidence.map((item) => normalizeString(item)).filter(Boolean)
        : [];
      lines.push(
        `| ${normalizeString(check.label) || normalizeString(check.checkId)} | ${normalizeString(check.status) || "missing"} | ${evidence.length} | ${normalizeString(check.notes) || "(empty)"} |`,
      );
    }

    const telemetry = device.telemetry ?? {};
    lines.push("");
    lines.push(`- Telemetry event timestamp: ${normalizeString(telemetry.eventTimestamp) || "(missing)"}`);
    lines.push(`- Telemetry source: ${normalizeString(telemetry.eventSource) || "(missing)"}`);
    lines.push(`- Detection version: ${normalizeString(telemetry.detectionVersion) || "(missing)"}`);
    lines.push(`- Tier / GPU Tier: ${telemetry.tier ?? "(missing)"} / ${telemetry.gpuTier ?? "(missing)"}`);
    lines.push(`- Discovery confidence: ${telemetry.discoveryConfidence ?? "(missing)"} (${normalizeString(telemetry.discoveryConfidenceBand) || "missing"})`);
    lines.push(`- Streaming target count: ${telemetry.streamingTargetCount ?? "(missing)"}`);
    lines.push("");
  }

  lines.push("## Sign-Off");
  lines.push("");
  lines.push(`- Status: ${normalizeString(report.signOff?.status) || "(missing)"}`);
  lines.push(`- Approver: ${normalizeString(report.signOff?.approver) || "(missing)"}`);
  lines.push(`- Approved at: ${normalizeString(report.signOff?.approvedAt) || "(missing)"}`);
  lines.push(`- Notes: ${normalizeString(report.signOff?.notes) || "(empty)"}`);
  lines.push("");

  if (validation) {
    lines.push("## Failures");
    lines.push("");
    if (validation.failures.length === 0) {
      lines.push("- None.");
    } else {
      for (const failure of validation.failures) {
        lines.push(`- ${failure.scope}: ${failure.detail}`);
      }
    }
    lines.push("");

    lines.push("## Warnings");
    lines.push("");
    if (validation.warnings.length === 0) {
      lines.push("- None.");
    } else {
      for (const warning of validation.warnings) {
        lines.push(`- ${warning.scope}: ${warning.detail}`);
      }
    }
  }

  return `${lines.join("\n")}\n`;
}

function writeSummary(summaryFile, markdown) {
  ensureParentDir(summaryFile);
  fs.writeFileSync(summaryFile, markdown, "utf8");
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  let templateSeeded = false;

  if (!fs.existsSync(options.reportFile) || options.resetTemplate) {
    const template = buildTemplateReport();
    writeJson(options.reportFile, template);
    templateSeeded = true;
  }

  const report = readJson(options.reportFile);
  report.updatedAt = nowIso();
  writeJson(options.reportFile, report);

  if (options.initOnly) {
    const markdown = toMarkdown({
      reportPath: options.reportFile,
      report,
      validation: null,
      templateSeeded,
    });
    writeSummary(options.summaryFile, markdown);
    console.log("Device gateway physical validation template ready.");
    console.log(`Report: ${formatPath(options.reportFile)}`);
    console.log(`Summary: ${formatPath(options.summaryFile)}`);
    return;
  }

  const validation = validateReport(report);
  const markdown = toMarkdown({
    reportPath: options.reportFile,
    report,
    validation,
    templateSeeded,
  });
  writeSummary(options.summaryFile, markdown);

  const result = {
    pass: validation.pass,
    failures: validation.failures.length,
    warnings: validation.warnings.length,
    reportFile: formatPath(options.reportFile),
    summaryFile: formatPath(options.summaryFile),
    templateSeeded,
  };

  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log("Device gateway physical validation gate");
    console.log(`Report: ${result.reportFile}`);
    console.log(`Summary: ${result.summaryFile}`);
    console.log(`Template seeded: ${templateSeeded ? "yes" : "no"}`);
    console.log(`Failures: ${result.failures}`);
    console.log(`Warnings: ${result.warnings}`);
    console.log(validation.pass ? "PASS: Physical device sign-off is complete." : "FAIL: Physical device sign-off is incomplete.");
  }

  if (!validation.pass && !options.noFail) {
    process.exitCode = 1;
  }
}

main();
