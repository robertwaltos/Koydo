#!/usr/bin/env node
/**
 * scripts/test-deep-links.mjs
 *
 * Verifies the deep link configuration files are present, valid JSON,
 * and consistent with the path handling in the deep link handler.
 *
 * Usage: node scripts/test-deep-links.mjs
 * Or:    npm run test:deep-links
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

let passed = 0;
let failed = 0;

function pass(msg) {
  console.log(`  ✔  ${msg}`);
  passed++;
}

function fail(msg) {
  console.error(`  ✖  ${msg}`);
  failed++;
}

function checkFile(relPath) {
  const abs = resolve(projectRoot, relPath);
  if (!existsSync(abs)) {
    fail(`Missing file: ${relPath}`);
    return null;
  }
  const raw = readFileSync(abs, 'utf-8');
  try {
    const parsed = JSON.parse(raw);
    pass(`${relPath} — exists and is valid JSON`);
    return parsed;
  } catch (e) {
    fail(`${relPath} — invalid JSON: ${e.message}`);
    return null;
  }
}

console.log('\n── Deep Link Configuration Audit ───────────────────────────\n');

// ── 1. Apple AASA File ────────────────────────────────────────────────────────
console.log('Apple AASA (apple-app-site-association):');
const aasa = checkFile('public/.well-known/apple-app-site-association');

let aasaPaths = [];
if (aasa) {
  const details = aasa?.applinks?.details ?? [];
  if (details.length === 0) {
    fail('AASA has no applinks.details entries');
  } else {
    const appId = details[0]?.appID ?? '';
    if (appId.startsWith('TEAMID.')) {
      fail(`AASA appID still contains placeholder "TEAMID" — replace with your real Apple Team ID`);
    } else {
      pass(`AASA appID looks real: ${appId}`);
    }
    aasaPaths = details[0]?.paths ?? [];
    pass(`AASA declares ${aasaPaths.length} path(s): ${aasaPaths.join(', ')}`);
  }
}

// ── 2. Android assetlinks.json ────────────────────────────────────────────────
console.log('\nAndroid assetlinks.json:');
const assetlinks = checkFile('public/.well-known/assetlinks.json');

if (assetlinks && Array.isArray(assetlinks)) {
  const target = assetlinks[0]?.target ?? {};
  if (target.package_name !== 'com.koydo.app') {
    fail(`package_name mismatch: expected "com.koydo.app", got "${target.package_name}"`);
  } else {
    pass(`package_name: ${target.package_name}`);
  }
  const fingerprints = target.sha256_cert_fingerprints ?? [];
  if (fingerprints.length === 0) {
    fail('No SHA-256 fingerprints in assetlinks.json');
  } else if (fingerprints.some(f => f.includes('REPLACE_WITH'))) {
    fail('assetlinks.json still contains placeholder fingerprint — replace with real keystore SHA-256');
  } else {
    pass(`SHA-256 fingerprint present: ${fingerprints[0]}`);
  }
}

// ── 3. Deep Link Handler Coverage ────────────────────────────────────────────
console.log('\nDeep Link Handler (src/lib/deep-linking/handler.ts):');
const handlerPath = resolve(projectRoot, 'src/lib/deep-linking/handler.ts');
if (!existsSync(handlerPath)) {
  fail('handler.ts does not exist');
} else {
  const handlerCode = readFileSync(handlerPath, 'utf-8');
  // These are the paths declared in the AASA file
  const expectedPaths = ['/explore', '/lessons', '/auth/callback', '/modules'];
  for (const path of expectedPaths) {
    if (handlerCode.includes(`'${path}`) || handlerCode.includes(`"${path}`)) {
      pass(`Handler covers path: ${path}`);
    } else {
      fail(`Handler does NOT cover AASA path: ${path}`);
    }
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n─────────────────────────────────────────────────────────────');
console.log(`Results: ${passed} passed, ${failed} failed`);
if (failed > 0) {
  console.error('\n⚠  Deep link configuration has issues. Fix before submitting to stores.\n');
  process.exit(1);
} else {
  console.log('\n✅  All deep link checks passed.\n');
}
