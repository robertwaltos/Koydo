import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const projectRoot = process.cwd();
const outJson = path.join(projectRoot, "public", "STORE-COMPLIANCE-AUDIT.json");
const outMd = path.join(projectRoot, "public", "STORE-COMPLIANCE-AUDIT.md");

function tryRead(relPath) {
  const fullPath = path.join(projectRoot, relPath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, "utf8");
}

function countMatches(text, regex) {
  if (!text) return 0;
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function textLength(relPath) {
  const raw = tryRead(relPath);
  return raw ? raw.trim().length : 0;
}

function addFileExistsCheck(checks, relPath, category = "required-file") {
  const exists = fs.existsSync(path.join(projectRoot, relPath));
  checks.push({
    id: `file:${relPath}`,
    category,
    status: exists ? "pass" : "fail",
    detail: exists ? "Exists" : "Missing",
    path: relPath,
  });
}

function addMetadataCheck(checks, relPath) {
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: `metadata:${relPath}`,
      category: "metadata",
      status: "fail",
      detail: "File missing; cannot validate metadata tag.",
      path: relPath,
    });
    return;
  }
  const hasTag = /Last\s+(verified|updated|reviewed)/i.test(content);
  checks.push({
    id: `metadata:${relPath}`,
    category: "metadata",
    status: hasTag ? "pass" : "warn",
    detail: hasTag ? "Contains last-verified style metadata." : "Missing explicit last-verified/updated/reviewed metadata tag.",
    path: relPath,
  });
}

function addDomainLinkCheck(checks, relPath, domainPattern, minimumCount, label) {
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: `links:${label}`,
      category: "policy-links",
      status: "fail",
      detail: `${relPath} missing; cannot validate policy links.`,
      path: relPath,
    });
    return;
  }
  const count = countMatches(content, domainPattern);
  const ok = count >= minimumCount;
  checks.push({
    id: `links:${label}`,
    category: "policy-links",
    status: ok ? "pass" : "warn",
    detail: ok
      ? `Found ${count} required-source link(s).`
      : `Found ${count} required-source link(s); expected at least ${minimumCount}.`,
    path: relPath,
  });
}

function addCharLimitCheck(checks, relPath, maxLength, label) {
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: `limit:${label}`,
      category: "listing-length",
      status: "fail",
      detail: `${relPath} missing.`,
      path: relPath,
      expected: `<= ${maxLength} characters`,
    });
    return;
  }
  const size = textLength(relPath);
  checks.push({
    id: `limit:${label}`,
    category: "listing-length",
    status: size <= maxLength ? "pass" : "fail",
    detail: `${size} characters`,
    expected: `<= ${maxLength} characters`,
    path: relPath,
  });
}

function addNoPlaceholderCheck(checks, relPath) {
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: `placeholder:${relPath}`,
      category: "listing-content",
      status: "fail",
      detail: "File missing; cannot validate placeholders.",
      path: relPath,
    });
    return;
  }
  const hasPlaceholder = /<[^>\r\n]+>/.test(content);
  checks.push({
    id: `placeholder:${relPath}`,
    category: "listing-content",
    status: hasPlaceholder ? "fail" : "pass",
    detail: hasPlaceholder
      ? "Contains placeholder token; replace before submission."
      : "No placeholder tokens detected.",
    path: relPath,
  });
}

function addUrlPresenceCheck(checks, relPath, requiredUrls, label) {
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: `urls:${label}`,
      category: "policy-url",
      status: "fail",
      detail: `${relPath} missing; cannot validate required URLs.`,
      path: relPath,
    });
    return;
  }

  const missing = requiredUrls.filter((url) => !content.includes(url));
  checks.push({
    id: `urls:${label}`,
    category: "policy-url",
    status: missing.length === 0 ? "pass" : "fail",
    detail: missing.length === 0 ? "All required URLs present." : `Missing URL(s): ${missing.join(", ")}`,
    path: relPath,
  });
}

function addLocaleParityCheck(checks, basePath, locales, requiredFiles, label) {
  const missing = [];
  for (const locale of locales) {
    for (const fileName of requiredFiles) {
      const relPath = path.join(basePath, locale, fileName).replace(/\\/g, "/");
      if (!fs.existsSync(path.join(projectRoot, relPath))) {
        missing.push(relPath);
      }
    }
  }
  checks.push({
    id: `locale:${label}`,
    category: "localization",
    status: missing.length === 0 ? "pass" : "fail",
    detail: missing.length === 0
      ? "Required locale files present."
      : `Missing locale file(s): ${missing.join(", ")}`,
    path: `${basePath}/{locale}`,
  });
}

function addIosTargetChecks(checks) {
  const pbxRel = "ios/App/App.xcodeproj/project.pbxproj";
  const appStoreGuideRel = "APP-STORE-SUBMISSION-STEPS.md";
  const checklistRel = "STORE-COMPLIANCE-CHECKLIST.md";
  const content = tryRead(pbxRel);

  if (!content) {
    checks.push({
      id: "ios:deployment-target",
      category: "platform-config",
      status: "fail",
      detail: `${pbxRel} missing.`,
      path: pbxRel,
    });
    return;
  }

  const matches = [...content.matchAll(/IPHONEOS_DEPLOYMENT_TARGET\s*=\s*([0-9.]+)\s*;/g)].map((m) => m[1]);
  const unique = [...new Set(matches)];
  const has15 = unique.includes("15.0");
  checks.push({
    id: "ios:deployment-target",
    category: "platform-config",
    status: has15 ? "pass" : "warn",
    detail: unique.length > 0 ? `Found targets: ${unique.join(", ")}` : "No IPHONEOS_DEPLOYMENT_TARGET entries detected.",
    path: pbxRel,
  });

  const appGuide = tryRead(appStoreGuideRel) || "";
  const checklist = tryRead(checklistRel) || "";
  const mentionedInDocs = appGuide.includes("15.0") && checklist.includes("15.0");
  checks.push({
    id: "ios:deployment-target-docs",
    category: "doc-consistency",
    status: mentionedInDocs ? "pass" : "warn",
    detail: mentionedInDocs
      ? "iOS deployment target appears in both submission guide and checklist."
      : "iOS target is not consistently documented in both guide + checklist.",
    path: `${appStoreGuideRel}, ${checklistRel}`,
  });
}

function addAndroidSdkChecks(checks) {
  const gradleRel = "android/variables.gradle";
  const playGuideRel = "GOOGLE-PLAY-SUBMISSION-STEPS.md";
  const checklistRel = "STORE-COMPLIANCE-CHECKLIST.md";
  const content = tryRead(gradleRel);

  if (!content) {
    checks.push({
      id: "android:sdk-values",
      category: "platform-config",
      status: "fail",
      detail: `${gradleRel} missing.`,
      path: gradleRel,
    });
    return;
  }

  const min = content.match(/minSdkVersion\s*=\s*(\d+)/)?.[1] ?? null;
  const target = content.match(/targetSdkVersion\s*=\s*(\d+)/)?.[1] ?? null;
  const compile = content.match(/compileSdkVersion\s*=\s*(\d+)/)?.[1] ?? null;
  const minInt = min ? Number(min) : NaN;
  const targetInt = target ? Number(target) : NaN;
  const compileInt = compile ? Number(compile) : NaN;

  const configOk = Number.isInteger(minInt) && Number.isInteger(targetInt) && Number.isInteger(compileInt);
  checks.push({
    id: "android:sdk-values",
    category: "platform-config",
    status: configOk ? "pass" : "fail",
    detail: configOk
      ? `min=${minInt}, target=${targetInt}, compile=${compileInt}`
      : "Unable to parse one or more SDK values.",
    path: gradleRel,
  });

  if (!configOk) return;

  const sdkPolicyOk = targetInt >= 35;
  checks.push({
    id: "android:target-sdk-policy-floor",
    category: "platform-config",
    status: sdkPolicyOk ? "pass" : "warn",
    detail: sdkPolicyOk
      ? `targetSdkVersion ${targetInt} meets current policy floor assumption.`
      : `targetSdkVersion ${targetInt} may be below current Play policy floor.`,
    path: gradleRel,
    expected: "targetSdkVersion >= 35",
  });

  const guide = tryRead(playGuideRel) || "";
  const checklist = tryRead(checklistRel) || "";
  const docsConsistent = guide.includes(`minSdkVersion = ${minInt}`) &&
    guide.includes(`targetSdkVersion = ${targetInt}`) &&
    checklist.includes(`targetSdkVersion = ${targetInt}`);
  checks.push({
    id: "android:sdk-doc-consistency",
    category: "doc-consistency",
    status: docsConsistent ? "pass" : "warn",
    detail: docsConsistent
      ? "Android SDK values are aligned between source config and docs."
      : "Android SDK values in docs may be stale versus variables.gradle.",
    path: `${playGuideRel}, ${checklistRel}`,
  });
}

function addReviewerNotesChecks(checks) {
  const relPath = "store-assets/app-store/en-US/review_notes.txt";
  const content = tryRead(relPath);
  if (!content) {
    checks.push({
      id: "review-notes:presence",
      category: "reviewer-access",
      status: "fail",
      detail: "Review notes file missing.",
      path: relPath,
    });
    return;
  }

  const placeholders = [
    "<APP_REVIEW_EMAIL_FREE_FROM_SECRET_MANAGER>",
    "<APP_REVIEW_PASSWORD_FREE_FROM_SECRET_MANAGER>",
    "<APP_REVIEW_EMAIL_PREMIUM_FROM_SECRET_MANAGER>",
    "<APP_REVIEW_PASSWORD_PREMIUM_FROM_SECRET_MANAGER>",
  ];
  const missingPlaceholders = placeholders.filter((token) => !content.includes(token));
  checks.push({
    id: "review-notes:placeholder-guard",
    category: "reviewer-access",
    status: missingPlaceholders.length === 0 ? "pass" : "fail",
    detail: missingPlaceholders.length === 0
      ? "Expected credential placeholders are present."
      : `Missing placeholder(s): ${missingPlaceholders.join(", ")}`,
    path: relPath,
  });

  const hasRealEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(content);
  checks.push({
    id: "review-notes:no-real-email",
    category: "reviewer-access",
    status: hasRealEmail ? "fail" : "pass",
    detail: hasRealEmail
      ? "Potential real email detected in review notes; keep secrets out of repo."
      : "No real email addresses detected.",
    path: relPath,
  });
}

function addLegalRouteChecks(checks) {
  const requiredRoutes = [
    "src/app/privacy/page.tsx",
    "src/app/terms/page.tsx",
    "src/app/refunds/page.tsx",
    "src/app/account-deletion/page.tsx",
    "src/app/data-deletion/page.tsx",
  ];
  for (const route of requiredRoutes) {
    addFileExistsCheck(checks, route, "public-route");
  }
}

function getGitCommit() {
  try {
    return execSync("git rev-parse --short HEAD", { cwd: projectRoot, stdio: ["ignore", "pipe", "ignore"] })
      .toString("utf8")
      .trim();
  } catch {
    return null;
  }
}

function buildAudit() {
  const checks = [];

  const requiredDocs = [
    "APP-STORE-SUBMISSION-STEPS.md",
    "GOOGLE-PLAY-SUBMISSION-STEPS.md",
    "STORE-COMPLIANCE-CHECKLIST.md",
    "STORE-POLICY-VERIFICATION-2026-03-04.md",
    "store-assets/DATA-SAFETY.md",
    "store-assets/google-play/DATA-SAFETY-DECLARATIONS.md",
    "store-assets/CONTENT-RATING-ANSWERS.md",
    "store-assets/SCREENSHOT-SPEC.md",
    "docs/google-play-data-safety.md",
    "public/GOOGLE-PLAY-LISTING.md",
  ];
  for (const file of requiredDocs) {
    addFileExistsCheck(checks, file, "required-doc");
  }

  const metadataDocs = [
    "APP-STORE-SUBMISSION-STEPS.md",
    "GOOGLE-PLAY-SUBMISSION-STEPS.md",
    "STORE-COMPLIANCE-CHECKLIST.md",
    "STORE-POLICY-VERIFICATION-2026-03-04.md",
    "store-assets/DATA-SAFETY.md",
    "store-assets/google-play/DATA-SAFETY-DECLARATIONS.md",
    "docs/google-play-data-safety.md",
    "public/GOOGLE-PLAY-LISTING.md",
  ];
  for (const file of metadataDocs) {
    addMetadataCheck(checks, file);
  }

  addDomainLinkCheck(
    checks,
    "APP-STORE-SUBMISSION-STEPS.md",
    /https:\/\/developer\.apple\.com\//g,
    3,
    "apple-doc-links",
  );
  addDomainLinkCheck(
    checks,
    "GOOGLE-PLAY-SUBMISSION-STEPS.md",
    /https:\/\/support\.google\.com\/googleplay|https:\/\/developer\.android\.com\//g,
    4,
    "google-doc-links",
  );
  addDomainLinkCheck(
    checks,
    "STORE-POLICY-VERIFICATION-2026-03-04.md",
    /https:\/\/developer\.apple\.com\/|https:\/\/support\.google\.com\/googleplay|https:\/\/developer\.android\.com\//g,
    6,
    "verification-log-links",
  );

  addIosTargetChecks(checks);
  addAndroidSdkChecks(checks);
  addLegalRouteChecks(checks);
  addReviewerNotesChecks(checks);

  addLocaleParityCheck(
    checks,
    "store-assets/app-store",
    ["en-US", "es-ES"],
    ["name.txt", "subtitle.txt", "description.txt", "keywords.txt", "promotional_text.txt", "whats_new.txt"],
    "app-store-locales",
  );
  addLocaleParityCheck(
    checks,
    "store-assets/google-play",
    ["en-US", "es-ES"],
    ["title.txt", "short_description.txt", "full_description.txt", "changelogs/1.txt"],
    "google-play-locales",
  );

  addCharLimitCheck(checks, "store-assets/app-store/en-US/name.txt", 30, "app-store-name-en-US");
  addCharLimitCheck(checks, "store-assets/app-store/en-US/subtitle.txt", 30, "app-store-subtitle-en-US");
  addCharLimitCheck(checks, "store-assets/app-store/en-US/keywords.txt", 100, "app-store-keywords-en-US");
  addCharLimitCheck(checks, "store-assets/app-store/en-US/promotional_text.txt", 170, "app-store-promo-en-US");
  addCharLimitCheck(checks, "store-assets/app-store/en-US/description.txt", 4000, "app-store-description-en-US");
  addCharLimitCheck(checks, "store-assets/google-play/en-US/title.txt", 30, "google-play-title-en-US");
  addCharLimitCheck(checks, "store-assets/google-play/en-US/short_description.txt", 80, "google-play-short-description-en-US");
  addCharLimitCheck(checks, "store-assets/google-play/en-US/full_description.txt", 4000, "google-play-full-description-en-US");

  addNoPlaceholderCheck(checks, "store-assets/app-store/en-US/name.txt");
  addNoPlaceholderCheck(checks, "store-assets/app-store/en-US/subtitle.txt");
  addNoPlaceholderCheck(checks, "store-assets/app-store/en-US/description.txt");
  addNoPlaceholderCheck(checks, "store-assets/google-play/en-US/title.txt");
  addNoPlaceholderCheck(checks, "store-assets/google-play/en-US/short_description.txt");
  addNoPlaceholderCheck(checks, "store-assets/google-play/en-US/full_description.txt");
  addNoPlaceholderCheck(checks, "public/GOOGLE-PLAY-LISTING.md");

  addUrlPresenceCheck(
    checks,
    "public/GOOGLE-PLAY-LISTING.md",
    ["https://koydo.app/privacy", "https://koydo.app/terms"],
    "play-listing-policy-links",
  );
  addUrlPresenceCheck(
    checks,
    "store-assets/DATA-SAFETY.md",
    ["https://koydo.app/account-deletion", "https://koydo.app/data-deletion"],
    "data-safety-deletion-links",
  );
  addUrlPresenceCheck(
    checks,
    "store-assets/google-play/DATA-SAFETY-DECLARATIONS.md",
    ["https://koydo.app/account-deletion"],
    "play-data-safety-deletion-link",
  );

  const totals = {
    pass: checks.filter((c) => c.status === "pass").length,
    warn: checks.filter((c) => c.status === "warn").length,
    fail: checks.filter((c) => c.status === "fail").length,
    total: checks.length,
  };

  return {
    generatedAt: new Date().toISOString(),
    gitCommit: getGitCommit(),
    totals,
    overallStatus: totals.fail > 0 ? "fail" : totals.warn > 0 ? "warn" : "pass",
    checks,
  };
}

function esc(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function toMarkdown(audit) {
  const lines = [];
  lines.push("# Store Compliance Audit");
  lines.push("");
  lines.push(`Generated: ${audit.generatedAt}`);
  if (audit.gitCommit) {
    lines.push(`Git commit: ${audit.gitCommit}`);
  }
  lines.push(`Overall status: ${String(audit.overallStatus).toUpperCase()}`);
  lines.push("");
  lines.push(`Checks: ${audit.totals.total} | Pass: ${audit.totals.pass} | Warn: ${audit.totals.warn} | Fail: ${audit.totals.fail}`);
  lines.push("");
  lines.push("| Category | ID | Status | Detail |");
  lines.push("| --- | --- | --- | --- |");
  for (const check of audit.checks) {
    lines.push(`| ${esc(check.category)} | ${esc(check.id)} | ${esc(String(check.status).toUpperCase())} | ${esc(check.detail)} |`);
  }
  lines.push("");

  const failures = audit.checks.filter((c) => c.status === "fail");
  const warnings = audit.checks.filter((c) => c.status === "warn");

  lines.push("## Blocking Findings");
  lines.push("");
  if (failures.length === 0) {
    lines.push("- None.");
  } else {
    for (const item of failures) {
      lines.push(`- ${item.id}: ${item.detail}`);
    }
  }
  lines.push("");
  lines.push("## Warnings");
  lines.push("");
  if (warnings.length === 0) {
    lines.push("- None.");
  } else {
    for (const item of warnings) {
      lines.push(`- ${item.id}: ${item.detail}`);
    }
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  lines.push("- This audit validates repository-level readiness and static compliance artifacts.");
  lines.push("- It does not replace legal review, real-console declarations, or runtime production verification.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const audit = buildAudit();
  fs.writeFileSync(outJson, JSON.stringify(audit, null, 2), "utf8");
  fs.writeFileSync(outMd, toMarkdown(audit), "utf8");
  console.log(`Wrote ${path.relative(projectRoot, outJson)}`);
  console.log(`Wrote ${path.relative(projectRoot, outMd)}`);
  if (audit.overallStatus === "fail") {
    process.exitCode = 1;
  }
}

main();
