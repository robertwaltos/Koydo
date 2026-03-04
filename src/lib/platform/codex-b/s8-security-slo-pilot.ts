// S8 tickets: B-B10, B-B11, B-B12

export type SecurityFinding = {
  findingId: string;
  severity: "critical" | "high" | "medium" | "low";
  area: string;
  remediationEtaDays: number;
  discoveredAt: string;
};

export function prioritizeSecurityFindings(findings: readonly SecurityFinding[]) {
  const severityWeight = {
    critical: 100,
    high: 60,
    medium: 30,
    low: 10,
  } as const;

  return [...findings]
    .map((finding) => ({
      ...finding,
      score: severityWeight[finding.severity] - Math.min(30, finding.remediationEtaDays),
    }))
    .sort((left, right) => right.score - left.score);
}

export type ServiceSloStatus = {
  service: string;
  availability: number;
  p95LatencyMs: number;
  errorRate: number;
  targetAvailability: number;
  targetP95LatencyMs: number;
  maxErrorRate: number;
};

export function evaluateSloAlerts(status: readonly ServiceSloStatus[]) {
  return status.map((item) => ({
    service: item.service,
    availabilityBreached: item.availability < item.targetAvailability,
    latencyBreached: item.p95LatencyMs > item.targetP95LatencyMs,
    errorRateBreached: item.errorRate > item.maxErrorRate,
    healthy:
      item.availability >= item.targetAvailability
      && item.p95LatencyMs <= item.targetP95LatencyMs
      && item.errorRate <= item.maxErrorRate,
  }));
}

export type DistrictPilotControl = {
  districtId: string;
  ring: "canary" | "pilot" | "broad";
  enabledFeatures: string[];
  emergencyStop: boolean;
};

export function resolveDistrictPilotAccess(control: DistrictPilotControl, featureId: string) {
  if (control.emergencyStop) {
    return { allowed: false, reason: "district_emergency_stop" as const };
  }

  if (!control.enabledFeatures.includes(featureId)) {
    return { allowed: false, reason: "feature_not_enabled_for_district" as const };
  }

  return {
    allowed: true,
    reason: "allowed" as const,
    ring: control.ring,
  };
}
