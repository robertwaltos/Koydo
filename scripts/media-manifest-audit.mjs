import fs from "node:fs";
import path from "node:path";

const DEFAULT_TEST_LIMIT = 200;

function parseArgs(argv) {
  const getValue = (flag, fallback) => {
    const plain = flag.replace(/^--/, "");
    const eqEntry = argv.find((entry) => entry.startsWith(`${flag}=`) || entry.startsWith(`${plain}=`));
    if (eqEntry) return eqEntry.split("=").slice(1).join("=") || fallback;
    const directIndex = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (directIndex >= 0) return argv[directIndex + 1] ?? fallback;
    if (plainIndex >= 0) return argv[plainIndex + 1] ?? fallback;
    return fallback;
  };

  return {
    inFile: path.resolve(getValue("--in", "public/GROK-IMAGE-MANIFEST.json")),
    outNormalized: path.resolve(getValue("--out-normalized", "public/GROK-IMAGE-MANIFEST-NORMALIZED.json")),
    outTest: path.resolve(getValue("--out-test", "public/GROK-IMAGE-MANIFEST-TEST-200.json")),
    outReportJson: path.resolve(getValue("--out-report-json", "public/GROK-IMAGE-MANIFEST-AUDIT.json")),
    outReportMd: path.resolve(getValue("--out-report-md", "public/GROK-IMAGE-MANIFEST-AUDIT.md")),
    testLimit: Math.max(
      1,
      Math.floor(Number(getValue("--test-limit", String(DEFAULT_TEST_LIMIT))) || DEFAULT_TEST_LIMIT),
    ),
  };
}

function normalizePrompt(prompt) {
  return String(prompt ?? "")
    .replace(/\ba ocean\b/gi, "an ocean")
    .replace(/\bin a ocean world\b/gi, "in an ocean world")
    .replace(/\bin a ([aeiou])/gi, "in an $1")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeUsagePath(usagePath) {
  const raw = String(usagePath ?? "").trim();
  if (!raw) return raw;
  const noPublicPrefix = raw.replace(/^\/public\b/i, "");
  return noPublicPrefix.startsWith("/") ? noPublicPrefix : `/${noPublicPrefix}`;
}

function promptTemplateKey(prompt) {
  return String(prompt ?? "")
    .toLowerCase()
    .replace(/\bunique composition variant\s+\d+\b/g, "unique composition variant X")
    .replace(/\s+/g, " ")
    .trim();
}

function validateAsset(asset, index) {
  const errors = [];
  const warnings = [];

  if (!asset || typeof asset !== "object") {
    errors.push(`Asset index ${index} is not an object.`);
    return { errors, warnings };
  }

  const requiredStringFields = ["id", "group", "file_name", "usage_path", "prompt", "negative_prompt"];
  for (const field of requiredStringFields) {
    if (typeof asset[field] !== "string" || asset[field].trim().length === 0) {
      errors.push(`Asset ${asset.id ?? index}: missing/invalid "${field}".`);
    }
  }

  if (!Number.isFinite(Number(asset.width)) || Number(asset.width) <= 0) {
    errors.push(`Asset ${asset.id ?? index}: invalid width.`);
  }
  if (!Number.isFinite(Number(asset.height)) || Number(asset.height) <= 0) {
    errors.push(`Asset ${asset.id ?? index}: invalid height.`);
  }

  const usagePath = String(asset.usage_path ?? "");
  if (/^\/public\//i.test(usagePath)) {
    warnings.push(`Asset ${asset.id ?? index}: usage_path includes "/public" prefix.`);
  }

  const prompt = String(asset.prompt ?? "");
  if (/\ba ocean\b/i.test(prompt)) {
    warnings.push(`Asset ${asset.id ?? index}: grammar issue "a ocean".`);
  }

  return { errors, warnings };
}

function computeGroupQuotaByProportion(grouped, totalLimit) {
  const groups = [...grouped.keys()].sort();
  const totalAssets = groups.reduce((sum, group) => sum + grouped.get(group).length, 0) || 1;

  const provisional = groups.map((group) => {
    const exact = (grouped.get(group).length / totalAssets) * totalLimit;
    const base = Math.floor(exact);
    return {
      group,
      base,
      fraction: exact - base,
    };
  });

  let assigned = provisional.reduce((sum, item) => sum + item.base, 0);
  let remaining = totalLimit - assigned;
  provisional.sort((a, b) => b.fraction - a.fraction);

  for (const item of provisional) {
    if (remaining <= 0) break;
    item.base += 1;
    remaining -= 1;
  }

  while (remaining > 0 && provisional.length > 0) {
    for (const item of provisional) {
      if (remaining <= 0) break;
      item.base += 1;
      remaining -= 1;
    }
  }

  const quotaMap = new Map(provisional.map((item) => [item.group, item.base]));
  return quotaMap;
}

function buildStratifiedSubset(assets, limit) {
  const grouped = new Map();
  for (const asset of assets) {
    const group = String(asset.group ?? "unknown");
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(asset);
  }

  const quotaByGroup = computeGroupQuotaByProportion(grouped, Math.min(limit, assets.length));
  const selected = [];

  for (const [group, groupAssets] of [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const quota = quotaByGroup.get(group) ?? 0;
    selected.push(...groupAssets.slice(0, Math.min(quota, groupAssets.length)));
  }

  if (selected.length < limit) {
    const selectedIds = new Set(selected.map((asset) => asset.id));
    for (const asset of assets) {
      if (selected.length >= limit) break;
      if (selectedIds.has(asset.id)) continue;
      selected.push(asset);
    }
  }

  return selected.slice(0, limit);
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Media Manifest Audit");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Input file: ${report.inputFile}`);
  lines.push(`Assets: ${report.totals.assets}`);
  lines.push(`Errors: ${report.totals.errors}`);
  lines.push(`Warnings: ${report.totals.warnings}`);
  lines.push("");
  lines.push("## Top Findings");
  lines.push("");
  lines.push(`- Duplicate file_name entries: ${report.totals.duplicateFileNames}`);
  lines.push(`- Duplicate prompt templates: ${report.totals.duplicatePromptTemplates}`);
  lines.push(`- usage_path with /public prefix: ${report.totals.publicPrefixPaths}`);
  lines.push(`- Potential grammar issues ("a ocean"): ${report.totals.grammarAOcean}`);
  lines.push("");
  lines.push("## Group Distribution");
  lines.push("");
  lines.push("| Group | Count |");
  lines.push("| --- | ---: |");
  for (const row of report.groupCounts) {
    lines.push(`| ${row.group} | ${row.count} |`);
  }
  lines.push("");
  lines.push("## Test Subset");
  lines.push("");
  lines.push(`- Requested limit: ${report.testSubset.requestedLimit}`);
  lines.push(`- Generated subset size: ${report.testSubset.generated}`);
  lines.push("");
  if (report.sampleWarnings.length > 0) {
    lines.push("## Sample Warnings");
    lines.push("");
    for (const warning of report.sampleWarnings.slice(0, 20)) {
      lines.push(`- ${warning}`);
    }
    lines.push("");
  }
  if (report.sampleErrors.length > 0) {
    lines.push("## Sample Errors");
    lines.push("");
    for (const error of report.sampleErrors.slice(0, 20)) {
      lines.push(`- ${error}`);
    }
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(args.inFile)) {
    console.error(`Input manifest not found: ${args.inFile}`);
    console.error("Save your Grok JSON to that path (or pass --in <path>) and rerun.");
    process.exit(1);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(args.inFile, "utf8"));
  const assets = Array.isArray(raw?.assets) ? raw.assets : [];

  const errors = [];
  const warnings = [];
  const fileNameCounts = new Map();
  const promptTemplateCounts = new Map();
  let publicPrefixPaths = 0;
  let grammarAOcean = 0;

  const normalizedAssets = assets.map((asset, index) => {
    const result = validateAsset(asset, index);
    errors.push(...result.errors);
    warnings.push(...result.warnings);

    const fileName = String(asset?.file_name ?? "");
    if (fileName) fileNameCounts.set(fileName, Number(fileNameCounts.get(fileName) ?? 0) + 1);

    const templateKey = promptTemplateKey(asset?.prompt);
    if (templateKey) promptTemplateCounts.set(templateKey, Number(promptTemplateCounts.get(templateKey) ?? 0) + 1);

    if (/^\/public\//i.test(String(asset?.usage_path ?? ""))) publicPrefixPaths += 1;
    if (/\ba ocean\b/i.test(String(asset?.prompt ?? ""))) grammarAOcean += 1;

    return {
      ...asset,
      usage_path: normalizeUsagePath(asset?.usage_path),
      prompt: normalizePrompt(asset?.prompt),
      width: Number(asset?.width),
      height: Number(asset?.height),
    };
  });

  const duplicateFileNames = [...fileNameCounts.values()].filter((count) => count > 1).length;
  const duplicatePromptTemplates = [...promptTemplateCounts.values()].filter((count) => count > 1).length;

  const subsetAssets = buildStratifiedSubset(normalizedAssets, args.testLimit);
  const subsetManifest = {
    ...(raw && typeof raw === "object" ? raw : {}),
    project: `${raw?.project ?? "image-pack"}-test-${args.testLimit}`,
    total: subsetAssets.length,
    assets: subsetAssets,
  };

  const normalizedManifest = {
    ...(raw && typeof raw === "object" ? raw : {}),
    total: normalizedAssets.length,
    assets: normalizedAssets,
  };

  const groupCountMap = new Map();
  for (const asset of normalizedAssets) {
    const group = String(asset?.group ?? "unknown");
    groupCountMap.set(group, Number(groupCountMap.get(group) ?? 0) + 1);
  }
  const groupCounts = [...groupCountMap.entries()]
    .map(([group, count]) => ({ group, count }))
    .sort((a, b) => a.group.localeCompare(b.group));

  const report = {
    generatedAt: new Date().toISOString(),
    inputFile: args.inFile,
    totals: {
      assets: normalizedAssets.length,
      errors: errors.length,
      warnings: warnings.length,
      duplicateFileNames,
      duplicatePromptTemplates,
      publicPrefixPaths,
      grammarAOcean,
    },
    groupCounts,
    testSubset: {
      requestedLimit: args.testLimit,
      generated: subsetAssets.length,
      outFile: args.outTest,
    },
    sampleErrors: errors,
    sampleWarnings: warnings,
  };

  fs.mkdirSync(path.dirname(args.outNormalized), { recursive: true });
  fs.writeFileSync(args.outNormalized, JSON.stringify(normalizedManifest, null, 2), "utf8");
  fs.writeFileSync(args.outTest, JSON.stringify(subsetManifest, null, 2), "utf8");
  fs.writeFileSync(args.outReportJson, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(args.outReportMd, toMarkdown(report), "utf8");

  console.log("Media manifest audit complete");
  console.log(`Normalized manifest: ${args.outNormalized}`);
  console.log(`Test subset (${args.testLimit}): ${args.outTest}`);
  console.log(`Audit JSON: ${args.outReportJson}`);
  console.log(`Audit Markdown: ${args.outReportMd}`);
  console.log(
    `Summary: ${report.totals.assets} assets | ${report.totals.errors} error(s) | ${report.totals.warnings} warning(s)`,
  );
}

main();
