import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import typescript from "typescript";

const ROOT = process.cwd();
const CONFIDENCE_MODULE_PATH = path.resolve(
  ROOT,
  "src/lib/experience/device-gateway-confidence.ts",
);
const PROVIDER_PATH = path.resolve(
  ROOT,
  "src/components/experience/DeviceGatewayProvider.tsx",
);

function readRequiredFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function resolveTsModule(specifier, fromDirectory) {
  const resolveWithExtensions = (basePath) => {
    const candidates = [
      basePath,
      `${basePath}.ts`,
      `${basePath}.tsx`,
      path.join(basePath, "index.ts"),
      path.join(basePath, "index.tsx"),
    ];
    return candidates.find((candidate) => fs.existsSync(candidate)) ?? null;
  };

  if (specifier.startsWith("@/")) {
    const aliasPath = path.resolve(ROOT, "src", specifier.slice(2));
    const resolvedAlias = resolveWithExtensions(aliasPath);
    if (!resolvedAlias) {
      throw new Error(`Unable to resolve aliased import "${specifier}" from "${fromDirectory}".`);
    }
    return resolvedAlias;
  }

  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    const relativePath = path.resolve(fromDirectory, specifier);
    const resolvedRelative = resolveWithExtensions(relativePath);
    if (!resolvedRelative) {
      throw new Error(`Unable to resolve relative import "${specifier}" from "${fromDirectory}".`);
    }
    return resolvedRelative;
  }

  throw new Error(`Unexpected runtime dependency "${specifier}" while loading contract module.`);
}

function loadTranspiledTsModule(filePath, cache = new Map()) {
  const normalizedPath = path.resolve(filePath);
  if (cache.has(normalizedPath)) {
    return cache.get(normalizedPath).exports;
  }

  const source = readRequiredFile(normalizedPath);
  const transpiled = typescript.transpileModule(source, {
    compilerOptions: {
      module: typescript.ModuleKind.CommonJS,
      target: typescript.ScriptTarget.ES2020,
      esModuleInterop: true,
      importsNotUsedAsValues: typescript.ImportsNotUsedAsValues.Remove,
    },
    fileName: normalizedPath,
  }).outputText;

  const cjsModule = { exports: {} };
  cache.set(normalizedPath, cjsModule);

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
      const resolvedPath = resolveTsModule(specifier, path.dirname(normalizedPath));
      return loadTranspiledTsModule(resolvedPath, cache);
    },
    cjsModule,
    normalizedPath,
    path.dirname(normalizedPath),
  );

  return cjsModule.exports;
}

function main() {
  const confidenceModule = loadTranspiledTsModule(CONFIDENCE_MODULE_PATH);
  const scoreDeviceDiscoveryConfidence = confidenceModule.scoreDeviceDiscoveryConfidence;
  const countStreamingTargets = confidenceModule.countStreamingTargets;

  if (typeof scoreDeviceDiscoveryConfidence !== "function") {
    throw new Error("Expected scoreDeviceDiscoveryConfidence export.");
  }
  if (typeof countStreamingTargets !== "function") {
    throw new Error("Expected countStreamingTargets export.");
  }

  assert.equal(
    countStreamingTargets({ chromecast: true, airplay: false, dlna: true }),
    2,
  );
  console.log("PASS: streaming target counting is deterministic.");

  const visionProLike = {
    tier: 3,
    gpuTier: 3,
    hasWebXR: true,
    hasWebGPU: true,
    supportsWebGL2: true,
    maxTextureSize: 16_384,
    maxCombinedTextureImageUnits: 32,
    lowPowerModeLikely: false,
    streamingTargets: { chromecast: false, airplay: true, dlna: true },
  };
  const visionProScore = scoreDeviceDiscoveryConfidence(visionProLike);
  const visionProScoreRepeat = scoreDeviceDiscoveryConfidence(visionProLike);
  assert.deepEqual(visionProScore, visionProScoreRepeat);
  assert.equal(visionProScore.band, "high");
  assert.ok(visionProScore.confidence >= 0.85);
  console.log("PASS: Vision Pro profile confidence stays high and deterministic.");

  const questLike = {
    tier: 3,
    gpuTier: 2,
    hasWebXR: true,
    hasWebGPU: false,
    supportsWebGL2: true,
    maxTextureSize: 8192,
    maxCombinedTextureImageUnits: 24,
    lowPowerModeLikely: false,
    streamingTargets: { chromecast: false, airplay: false, dlna: false },
  };
  const questScore = scoreDeviceDiscoveryConfidence(questLike);
  assert.equal(questScore.band, "high");
  assert.ok(questScore.confidence >= 0.75);
  console.log("PASS: Quest profile meets high-confidence threshold.");

  const baselineLaptop = {
    tier: 1,
    gpuTier: 1,
    hasWebXR: false,
    hasWebGPU: false,
    supportsWebGL2: true,
    maxTextureSize: 8192,
    maxCombinedTextureImageUnits: 16,
    lowPowerModeLikely: false,
    streamingTargets: { chromecast: false, airplay: false, dlna: false },
  };
  const baselineScore = scoreDeviceDiscoveryConfidence(baselineLaptop);
  assert.equal(baselineScore.band, "medium");
  assert.ok(baselineScore.confidence >= 0.5 && baselineScore.confidence < 0.75);
  console.log("PASS: baseline laptop profile remains medium confidence.");

  const mobileLowPower = {
    ...baselineLaptop,
    lowPowerModeLikely: true,
    streamingTargets: { chromecast: false, airplay: false, dlna: true },
  };
  const mobileScore = scoreDeviceDiscoveryConfidence(mobileLowPower);
  assert.equal(mobileScore.band, "low");
  assert.ok(mobileScore.confidence < baselineScore.confidence);
  console.log("PASS: low-power mobile profile confidence degrades below baseline.");

  const minimalFallback = {
    tier: 0,
    gpuTier: 0,
    hasWebXR: false,
    hasWebGPU: false,
    supportsWebGL2: false,
    maxTextureSize: null,
    maxCombinedTextureImageUnits: null,
    lowPowerModeLikely: true,
    streamingTargets: { chromecast: false, airplay: false, dlna: false },
  };
  const minimalScore = scoreDeviceDiscoveryConfidence(minimalFallback);
  assert.equal(minimalScore.band, "low");
  assert.ok(minimalScore.confidence < 0.5);
  console.log("PASS: tier-0 profile remains low confidence.");

  const providerSource = readRequiredFile(PROVIDER_PATH);
  const requiredMarkers = [
    "scoreDeviceDiscoveryConfidence",
    "discoveryConfidence",
    "discoveryConfidenceBand",
    "discoverySignalCount",
    "streamingTargetCount",
  ];
  const missingMarkers = requiredMarkers.filter((marker) => !providerSource.includes(marker));
  assert.deepEqual(
    missingMarkers,
    [],
    `DeviceGatewayProvider is missing confidence wiring markers: ${missingMarkers.join(", ")}`,
  );
  console.log("PASS: DeviceGatewayProvider wires confidence values into telemetry/state.");

  console.log("PASS: device gateway confidence contract.");
}

main();
