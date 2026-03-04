import fs from "node:fs";
import path from "node:path";

const defaultSourceFile = path.resolve(".env");
const defaultOutJson = path.resolve("public/API-CONNECTION-READINESS-REPORT.json");
const defaultOutMd = path.resolve("public/API-CONNECTION-READINESS-REPORT.md");

function parseArgs(argv) {
  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  const readOption = (flag) => {
    const exactIndex = argv.indexOf(flag);
    if (exactIndex >= 0 && argv[exactIndex + 1]) {
      return argv[exactIndex + 1];
    }

    const prefix = `${flag}=`;
    const inline = argv.find((entry) => entry.startsWith(prefix));
    if (inline) {
      return inline.slice(prefix.length);
    }
    return "";
  };

  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    writeReport: !hasFlag("--no-write-report"),
    sourceFile: readOption("--source-file") || defaultSourceFile,
    outJson: readOption("--out-json") || defaultOutJson,
    outMd: readOption("--out-md") || defaultOutMd,
    runtime: normalizeValue(readOption("--runtime")).toLowerCase(),
  };
}
function normalizeValue(value) {
  if (typeof value !== "string") return "";
  let normalized = value.trim();
  if (
    (normalized.startsWith("\"") && normalized.endsWith("\""))
    || (normalized.startsWith("'") && normalized.endsWith("'"))
  ) {
    normalized = normalized.slice(1, -1).trim();
  }
  return normalized;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = normalizeValue(trimmed.slice(equalsIndex + 1));
    values[key] = value;
  }
  return values;
}

function readValue(envValues, key) {
  const processValue = normalizeValue(process.env[key] ?? "");
  if (processValue) return processValue;
  return normalizeValue(envValues[key] ?? "");
}

function readFirstValue(envValues, keys) {
  for (const key of keys) {
    const value = readValue(envValues, key);
    if (value) {
      return { key, value };
    }
  }
  return { key: "", value: "" };
}


function resolveRuntime(envValues, runtimeOverride = "") {
  const override = normalizeValue(runtimeOverride).toLowerCase();
  const runtime =
    override
    || normalizeValue(readValue(envValues, "APP_ENV")).toLowerCase()
    || normalizeValue(readValue(envValues, "VERCEL_ENV")).toLowerCase()
    || normalizeValue(readValue(envValues, "NODE_ENV")).toLowerCase()
    || "development";

  return {
    runtime,
    isProduction: runtime === "production",
    overrideApplied: Boolean(override),
  };
}
function isPlaceholder(value) {
  const lower = value.toLowerCase();
  return (
    lower.includes("your_")
    || lower.includes("replace")
    || lower.includes("placeholder")
    || lower.includes("changeme")
    || lower === "test"
    || lower === "example"
  );
}

function uniq(items) {
  return [...new Set(items)];
}

function evaluateRequirement(envValues, requirement) {
  if (Array.isArray(requirement)) {
    const placeholderKeys = [];
    for (const key of requirement) {
      const value = readValue(envValues, key);
      if (!value) continue;
      if (isPlaceholder(value)) {
        placeholderKeys.push(key);
        continue;
      }
      return {
        ok: true,
        presentKeys: [key],
        missingLabels: [],
        placeholderKeys,
      };
    }

    return {
      ok: false,
      presentKeys: [],
      missingLabels: [requirement.join(" | ")],
      placeholderKeys,
    };
  }

  const value = readValue(envValues, requirement);
  if (!value) {
    return {
      ok: false,
      presentKeys: [],
      missingLabels: [requirement],
      placeholderKeys: [],
    };
  }
  if (isPlaceholder(value)) {
    return {
      ok: false,
      presentKeys: [],
      missingLabels: [requirement],
      placeholderKeys: [requirement],
    };
  }
  return {
    ok: true,
    presentKeys: [requirement],
    missingLabels: [],
    placeholderKeys: [],
  };
}

function evaluateRequirements(envValues, requirements) {
  const presentKeys = [];
  const missingLabels = [];
  const placeholderKeys = [];
  for (const requirement of requirements) {
    const outcome = evaluateRequirement(envValues, requirement);
    presentKeys.push(...outcome.presentKeys);
    missingLabels.push(...outcome.missingLabels);
    placeholderKeys.push(...outcome.placeholderKeys);
  }

  return {
    ok: missingLabels.length === 0,
    presentKeys: uniq(presentKeys),
    missingLabels: uniq(missingLabels),
    placeholderKeys: uniq(placeholderKeys),
  };
}

function buildConnectionChecks(envValues, runtimeOverride = "") {
  const runtime = resolveRuntime(envValues, runtimeOverride);
  const isProduction = runtime.isProduction;

  const billingMode =
    readFirstValue(envValues, ["BILLING_PROVIDER_MODE", "NEXT_PUBLIC_BILLING_PROVIDER_MODE"]).value
    || "stripe_external";
  const translationProvider = readValue(envValues, "LANGUAGE_TRANSLATION_PROVIDER") || "auto";
  const ttsProvider = readValue(envValues, "TTS_PRIMARY_PROVIDER") || "openai";
  const rateLimitBackend = (readValue(envValues, "RATE_LIMIT_BACKEND") || "").toLowerCase();
  const parentConsentEmailMode = (readValue(envValues, "PARENT_CONSENT_EMAIL_MODE") || "").toLowerCase();
  const signupEmailMode = (readValue(envValues, "SIGNUP_EMAIL_MODE") || "").toLowerCase();

  const isInMemoryRateLimitMode =
    rateLimitBackend === "memory" || rateLimitBackend === "in_memory" || rateLimitBackend === "local";
  const isParentConsentDisabledMode = ["disabled", "off", "false"].includes(parentConsentEmailMode);
  const isParentConsentSimulationMode = ["local", "simulate", "simulation"].includes(parentConsentEmailMode);
  const isSignupDisabledMode = ["disabled", "off", "false"].includes(signupEmailMode);
  const isSignupSimulationMode = ["local", "simulate", "simulation"].includes(signupEmailMode);

  const checks = [
    {
      id: "supabase_core",
      label: "Supabase Core",
      requiredForLaunch: true,
      required: [
        ["NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL"],
        ["NEXT_PUBLIC_SUPABASE_ANON_KEY", "EXPO_PUBLIC_SUPABASE_KEY"],
        "SUPABASE_SERVICE_ROLE_KEY",
      ],
      detailContext: "Auth, database, and server-side admin operations.",
    },
    {
      id: "stripe_billing",
      label: "Stripe Billing",
      requiredForLaunch: billingMode === "stripe_external",
      notRequired: billingMode !== "stripe_external",
      required: ["STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET"],
      optional: ["NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"],
      detailContext: `Billing provider mode: ${billingMode}.`,
    },
    {
      id: "revenuecat_native",
      label: "RevenueCat Native Billing",
      requiredForLaunch: billingMode === "app_store_iap",
      notRequired: billingMode !== "app_store_iap",
      required: [[
        "NEXT_PUBLIC_REVENUECAT_API_KEY",
        "NEXT_PUBLIC_REVENUECAT_APPLE_KEY",
        "NEXT_PUBLIC_REVENUECAT_GOOGLE_KEY",
      ]],
      optional: ["REVENUECAT_WEBHOOK_SECRET", "REVENUECAT_API_SECRET_KEY"],
      detailContext: `Billing provider mode: ${billingMode}.`,
    },
    {
      id: "upstash_rate_limit",
      label: "Upstash Redis Rate Limiting",
      requiredForLaunch: isProduction || !isInMemoryRateLimitMode,
      notRequired: !isProduction && isInMemoryRateLimitMode,
      blockedInCurrentRuntime: isProduction && isInMemoryRateLimitMode,
      blockedDetail:
        "Production runtime does not allow RATE_LIMIT_BACKEND=memory. Configure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN, then remove in-memory override.",
      required: ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"],
      detailContext: isInMemoryRateLimitMode
        ? "RATE_LIMIT_BACKEND=memory configured."
        : "Distributed rate limiting and shared abuse throttling.",
    },
    {
      id: "ai_model_provider",
      label: "AI Model Provider Access",
      requiredForLaunch: false,
      required: [["OPENAI_API_KEY", "GROK_API_KEY", "ANTHROPIC_API_KEY", "GEMINI_API_KEY"]],
      optional: ["OPENAI_MEDIA_API_KEY"],
      detailContext: "AI tutor/remediation/media generation providers.",
    },
    {
      id: "tts_primary_provider",
      label: "TTS Primary Provider",
      requiredForLaunch: false,
      notRequired: ttsProvider === "browser",
      required:
        ttsProvider === "elevenlabs"
          ? ["ELEVENLABS_API_KEY"]
          : [["OPENAI_API_KEY", "OPENAI_MEDIA_API_KEY"]],
      detailContext: `Primary TTS provider: ${ttsProvider}.`,
    },
    {
      id: "translation_provider",
      label: "Translation Provider",
      requiredForLaunch: false,
      notRequired: translationProvider === "mock",
      required:
        translationProvider === "deepl"
          ? ["DEEPL_API_KEY"]
          : translationProvider === "google"
            ? ["GOOGLE_TRANSLATE_API_KEY"]
            : [["DEEPL_API_KEY", "GOOGLE_TRANSLATE_API_KEY"]],
      detailContext: `Translation provider: ${translationProvider}.`,
    },
    {
      id: "parent_consent_email",
      label: "Parent Consent Email Delivery",
      requiredForLaunch: isProduction || !(isParentConsentDisabledMode || isParentConsentSimulationMode),
      notRequired: !isProduction && (isParentConsentDisabledMode || isParentConsentSimulationMode),
      blockedInCurrentRuntime: isProduction && (isParentConsentDisabledMode || isParentConsentSimulationMode),
      blockedDetail:
        "Production runtime requires live parent consent email delivery. Remove local/simulated/disabled mode and configure RESEND_API_KEY + PARENT_CONSENT_FROM_EMAIL.",
      required: ["RESEND_API_KEY", "PARENT_CONSENT_FROM_EMAIL"],
      detailContext:
        isParentConsentDisabledMode
          ? "PARENT_CONSENT_EMAIL_MODE disables parent consent email delivery."
          : isParentConsentSimulationMode
            ? "Parent consent email simulation mode is configured."
            : "Compliance consent links and parent communication flow.",
    },
    {
      id: "signup_email",
      label: "Signup Welcome Email Delivery",
      requiredForLaunch: isProduction || !(isSignupDisabledMode || isSignupSimulationMode),
      notRequired: !isProduction && (isSignupDisabledMode || isSignupSimulationMode),
      blockedInCurrentRuntime: isProduction && (isSignupDisabledMode || isSignupSimulationMode),
      blockedDetail:
        "Production runtime requires live signup email delivery. Remove local/simulated/disabled mode and configure RESEND_API_KEY + SIGNUP_FROM_EMAIL.",
      required: ["RESEND_API_KEY", "SIGNUP_FROM_EMAIL"],
      detailContext:
        isSignupDisabledMode
          ? "SIGNUP_EMAIL_MODE disables signup email delivery."
          : isSignupSimulationMode
            ? "Signup email simulation mode is configured."
            : "Post-signup welcome email with legal attachments.",
    },
  ];

  const evaluated = checks.map((check) => {
    if (check.notRequired) {
      return {
        ...check,
        status: "not_required",
        detail: `Not required in current mode. ${check.detailContext}`,
        presentKeys: [],
        missingKeys: [],
        placeholderKeys: [],
      };
    }

    const requiredEval = evaluateRequirements(envValues, check.required ?? []);
    const optionalEval = evaluateRequirements(envValues, check.optional ?? []);

    const missingRequired = requiredEval.missingLabels;
    const missingOptional = optionalEval.missingLabels;

    let status = "ready";
    if (check.blockedInCurrentRuntime) {
      status = "needs_keys";
    } else if (check.requiredForLaunch && missingRequired.length > 0) {
      status = "needs_keys";
    } else if (!check.requiredForLaunch && missingRequired.length > 0) {
      status = "optional_pending";
    }

    const detailParts = [check.detailContext];
    if (requiredEval.placeholderKeys.length > 0 || optionalEval.placeholderKeys.length > 0) {
      detailParts.push(
        `Placeholder values detected: ${uniq([
          ...requiredEval.placeholderKeys,
          ...optionalEval.placeholderKeys,
        ]).join(", ")}.`,
      );
    }

    if (check.blockedInCurrentRuntime && check.blockedDetail) {
      detailParts.push(check.blockedDetail);
    }

    if ((status === "needs_keys" || status === "optional_pending") && missingRequired.length > 0) {
      detailParts.push(`Ready for user-supplied keys: ${missingRequired.join(", ")}.`);
    } else if (status === "needs_keys" && check.blockedInCurrentRuntime) {
      detailParts.push("Configuration must be switched to live production mode.");
    } else if (missingOptional.length > 0) {
      detailParts.push(`Optional keys not set: ${missingOptional.join(", ")}.`);
    } else if (!check.blockedInCurrentRuntime) {
      detailParts.push("Configured.");
    }

    return {
      ...check,
      status,
      detail: detailParts.join(" "),
      presentKeys: uniq([...requiredEval.presentKeys, ...optionalEval.presentKeys]),
      missingKeys: uniq([...missingRequired, ...missingOptional]),
      placeholderKeys: uniq([...requiredEval.placeholderKeys, ...optionalEval.placeholderKeys]),
    };
  });

  return {
    runtime,
    billingMode,
    translationProvider,
    ttsProvider,
    checks: evaluated,
  };
}
function toMarkdown(report) {
  const lines = [];
  lines.push("# API Connection Readiness Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Source file: ${report.sourceFile}`);
  lines.push(`Runtime: ${report.modes.runtime}`);
  lines.push(`Billing mode: ${report.modes.billingMode}`);
  lines.push(`Translation provider: ${report.modes.translationProvider}`);
  lines.push(`TTS provider: ${report.modes.ttsProvider}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Ready: ${report.totals.ready}`);
  lines.push(`- Needs keys: ${report.totals.needs_keys}`);
  lines.push(`- Optional pending: ${report.totals.optional_pending}`);
  lines.push(`- Not required: ${report.totals.not_required}`);
  lines.push(`- Total checks: ${report.totals.total}`);
  lines.push("");
  lines.push("## Connections");
  lines.push("");
  lines.push("| Connection | Status | Detail |");
  lines.push("| --- | --- | --- |");
  for (const check of report.checks) {
    lines.push(`| ${check.label} | ${check.status.toUpperCase()} | ${check.detail} |`);
  }
  lines.push("");

  const blockers = report.checks.filter((check) => check.status === "needs_keys");
  if (blockers.length > 0) {
    lines.push("## Launch Blockers");
    lines.push("");
    for (const blocker of blockers) {
      lines.push(`- ${blocker.label}: ${blocker.detail}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function printCheck(check) {
  const label =
    check.status === "ready"
      ? "PASS"
      : check.status === "not_required"
        ? "INFO"
        : check.status === "optional_pending"
          ? "WARN"
          : "FAIL";
  console.log(`[${label}] ${check.label} - ${check.detail}`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(args.sourceFile);

  const evaluated = buildConnectionChecks(envValues, args.runtime);
  const totals = {
    ready: evaluated.checks.filter((check) => check.status === "ready").length,
    needs_keys: evaluated.checks.filter((check) => check.status === "needs_keys").length,
    optional_pending: evaluated.checks.filter((check) => check.status === "optional_pending").length,
    not_required: evaluated.checks.filter((check) => check.status === "not_required").length,
    total: evaluated.checks.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    sourceFile: path.resolve(args.sourceFile),
    modes: {
      runtime: evaluated.runtime.runtime,
      billingMode: evaluated.billingMode,
      translationProvider: evaluated.translationProvider,
      ttsProvider: evaluated.ttsProvider,
    },
    totals,
    checks: evaluated.checks,
  };

  for (const check of report.checks) {
    printCheck(check);
  }

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(args.outJson), { recursive: true });
    fs.writeFileSync(args.outJson, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(args.outMd, toMarkdown(report), "utf8");
    console.log(`Wrote ${path.relative(process.cwd(), args.outJson)}`);
    console.log(`Wrote ${path.relative(process.cwd(), args.outMd)}`);
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  }

  if (!args.noFail && totals.needs_keys > 0) {
    process.exitCode = 1;
  }
}

main();
