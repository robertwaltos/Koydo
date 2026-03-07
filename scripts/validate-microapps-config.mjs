#!/usr/bin/env node
/**
 * Validates canonical micro-app metadata and optional deploy env maps.
 */

import {
  MICROAPP_TARGETS,
  getDomainEnvKey,
  getProjectIdEnvKey,
} from "./microapps-config.mjs";

const APP_ID_REGEX = /^[a-z0-9_]+$/i;
const DOMAIN_REGEX =
  /^(?=.{1,253}$)(?!-)(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/;
const CURRENCY_REGEX = /^[A-Z]{3}$/;
const LOCALE_REGEX = /^[a-z]{2}(?:-[A-Z]{2})?$/;
const REGION_REGEX = /^[a-z0-9_-]{2,32}$/i;
const PROJECT_ID_REGEX = /^[A-Za-z0-9_-]{6,128}$/;
const VALID_VARIANTS = new Set(["kids", "teen", "adult", "school", "full"]);

function parseJsonMap(envName) {
  const raw = process.env[envName];
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error(`${envName} must be a JSON object map.`);
    }
    return parsed;
  } catch (error) {
    throw new Error(`Invalid JSON in ${envName}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function fail(messages) {
  for (const message of messages) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

function main() {
  const errors = [];
  const seenIds = new Set();
  const seenDomains = new Set();

  for (const target of MICROAPP_TARGETS) {
    if (!APP_ID_REGEX.test(target.appId)) {
      errors.push(`Invalid appId "${target.appId}"`);
    }
    if (seenIds.has(target.appId)) {
      errors.push(`Duplicate appId "${target.appId}"`);
    }
    seenIds.add(target.appId);

    if (!target.displayName || typeof target.displayName !== "string") {
      errors.push(`Missing displayName for ${target.appId}`);
    }
    if (!VALID_VARIANTS.has(target.variant)) {
      errors.push(`Invalid variant "${target.variant}" for ${target.appId}`);
    }
    if (!Array.isArray(target.enabledSubjects) || target.enabledSubjects.length === 0) {
      errors.push(`enabledSubjects must be a non-empty array for ${target.appId}`);
    }
    if (!Number.isInteger(target.minAge) || !Number.isInteger(target.maxAge)) {
      errors.push(`minAge/maxAge must be integers for ${target.appId}`);
    } else if (target.minAge < 0 || target.maxAge > 99 || target.minAge > target.maxAge) {
      errors.push(`Invalid age range ${target.minAge}-${target.maxAge} for ${target.appId}`);
    }
    if (!LOCALE_REGEX.test(target.defaultLocale)) {
      errors.push(`Invalid defaultLocale "${target.defaultLocale}" for ${target.appId}`);
    }
    if (!REGION_REGEX.test(target.region)) {
      errors.push(`Invalid region "${target.region}" for ${target.appId}`);
    }
    if (!CURRENCY_REGEX.test(target.defaultCurrency)) {
      errors.push(`Invalid defaultCurrency "${target.defaultCurrency}" for ${target.appId}`);
    }
    if (!target.suggestedDomain || !DOMAIN_REGEX.test(target.suggestedDomain)) {
      errors.push(`Invalid suggestedDomain "${target.suggestedDomain}" for ${target.appId}`);
    } else if (seenDomains.has(target.suggestedDomain)) {
      errors.push(`Duplicate suggestedDomain "${target.suggestedDomain}"`);
    } else {
      seenDomains.add(target.suggestedDomain);
    }
  }

  let projectMap = {};
  let domainMap = {};
  try {
    projectMap = parseJsonMap("MICROAPP_VERCEL_PROJECTS_JSON");
    domainMap = parseJsonMap("MICROAPP_DOMAINS_JSON");
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  const projectToApps = new Map();
  for (const target of MICROAPP_TARGETS) {
    const projectId = String(projectMap[target.appId] || process.env[getProjectIdEnvKey(target.appId)] || "").trim();
    if (projectId) {
      if (!PROJECT_ID_REGEX.test(projectId)) {
        errors.push(`Invalid Vercel project ID for ${target.appId}: ${projectId}`);
      }
      const existing = projectToApps.get(projectId) || [];
      existing.push(target.appId);
      projectToApps.set(projectId, existing);
    }

    const domain = String(domainMap[target.appId] || process.env[getDomainEnvKey(target.appId)] || "").trim();
    if (domain && !DOMAIN_REGEX.test(domain)) {
      errors.push(`Invalid custom domain for ${target.appId}: ${domain}`);
    }
  }

  for (const [projectId, appIds] of projectToApps.entries()) {
    if (appIds.length > 1) {
      errors.push(`Project ID collision ${projectId}: ${appIds.join(", ")}`);
    }
  }

  if (errors.length > 0) {
    console.error("Micro-app config validation failed:");
    fail(errors);
  }

  console.log(`Micro-app config validated (${MICROAPP_TARGETS.length} targets).`);
}

main();
