import { z } from "zod";

// S6 tickets: B-B04, B-B05, B-B06

export const standardsTelemetryEventSchema = z.object({
  eventId: z.string().uuid(),
  standardCode: z.string().trim().min(1).max(80),
  classId: z.string().uuid(),
  learnerUserId: z.string().uuid(),
  proficiencyDelta: z.number().min(-1).max(1),
  occurredAt: z.string().datetime(),
});

export type StandardsTelemetryEvent = z.infer<typeof standardsTelemetryEventSchema>;

export function aggregateStandardsTelemetry(events: readonly StandardsTelemetryEvent[]) {
  const byStandard = new Map<string, { count: number; netDelta: number }>();
  for (const event of events) {
    const parsed = standardsTelemetryEventSchema.parse(event);
    const current = byStandard.get(parsed.standardCode) ?? { count: 0, netDelta: 0 };
    current.count += 1;
    current.netDelta += parsed.proficiencyDelta;
    byStandard.set(parsed.standardCode, current);
  }

  return Array.from(byStandard.entries())
    .map(([standardCode, value]) => ({
      standardCode,
      eventCount: value.count,
      netDelta: Math.round(value.netDelta * 1000) / 1000,
      averageDelta: value.count > 0 ? Math.round((value.netDelta / value.count) * 1000) / 1000 : 0,
    }))
    .sort((a, b) => a.standardCode.localeCompare(b.standardCode));
}

export type ReportExportJob = {
  jobId: string;
  requestedAt: string;
  priority: "normal" | "high";
  estimatedRows: number;
  attempt: number;
};

export function planReportExportExecution(jobs: readonly ReportExportJob[]) {
  const sorted = [...jobs].sort((left, right) => {
    if (left.priority !== right.priority) {
      return left.priority === "high" ? -1 : 1;
    }
    return Date.parse(left.requestedAt) - Date.parse(right.requestedAt);
  });

  return sorted.map((job, index) => ({
    ...job,
    lane: index % 4,
    recommendedChunkSize: Math.max(500, Math.min(5000, Math.floor(job.estimatedRows / 10) || 500)),
  }));
}

export const retentionPolicySchema = z.object({
  table: z.string().trim().min(1).max(80),
  timestampColumn: z.string().trim().min(1).max(80),
  retentionDays: z.number().int().min(1).max(3650),
});

export type RetentionPolicy = z.infer<typeof retentionPolicySchema>;

export function buildRetentionEnforcementPlan(
  policies: readonly RetentionPolicy[],
  now = new Date(),
) {
  const nowMs = now.getTime();
  return policies.map((policy) => {
    const parsed = retentionPolicySchema.parse(policy);
    const cutoff = new Date(nowMs - parsed.retentionDays * 24 * 60 * 60 * 1000).toISOString();
    return {
      table: parsed.table,
      timestampColumn: parsed.timestampColumn,
      cutoffIso: cutoff,
      statement: `delete from ${parsed.table} where ${parsed.timestampColumn} < '${cutoff}'`,
    };
  });
}
