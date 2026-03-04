// S12 tickets: B-C10, B-C11, B-C12

export type GaReadinessCheck = {
  checkId: string;
  category: "reliability" | "security" | "compliance" | "product";
  passed: boolean;
  severity: "blocker" | "critical" | "major" | "minor";
};

export function summarizeGaReadiness(checks: readonly GaReadinessCheck[]) {
  const blockers = checks.filter((check) => !check.passed && (check.severity === "blocker" || check.severity === "critical"));
  const passed = checks.filter((check) => check.passed).length;

  return {
    total: checks.length,
    passed,
    failed: checks.length - passed,
    blockers: blockers.length,
    readyForGa: blockers.length === 0,
  };
}

export type LoadTestResult = {
  scenario: string;
  rps: number;
  p95Ms: number;
  errorRate: number;
  cpuUtilization: number;
  memoryUtilization: number;
};

export function buildScalabilityOptimizationHints(results: readonly LoadTestResult[]) {
  return results.map((result) => {
    const hints: string[] = [];
    if (result.p95Ms > 800) hints.push("optimize_hot_paths_or_add_caching");
    if (result.errorRate > 0.01) hints.push("investigate_error_spikes_and_retries");
    if (result.cpuUtilization > 0.8) hints.push("scale_out_or_rightsize_cpu");
    if (result.memoryUtilization > 0.85) hints.push("memory_profile_and_reduce_heap_pressure");

    return {
      scenario: result.scenario,
      hints,
      healthy: hints.length === 0,
    };
  });
}

export type ComplianceEvidenceArtifact = {
  artifactId: string;
  domain: "ferpa" | "coppa" | "security" | "availability";
  storagePath: string;
  capturedAt: string;
};

export function buildFinalComplianceEvidencePack(artifacts: readonly ComplianceEvidenceArtifact[]) {
  const byDomain = new Map<string, number>();
  for (const artifact of artifacts) {
    byDomain.set(artifact.domain, (byDomain.get(artifact.domain) ?? 0) + 1);
  }

  return {
    totalArtifacts: artifacts.length,
    byDomain: Object.fromEntries(byDomain.entries()),
    generatedAt: new Date().toISOString(),
    complete: ["ferpa", "coppa", "security", "availability"].every((domain) => (byDomain.get(domain) ?? 0) > 0),
  };
}
