import { z } from "zod";

// S10 tickets: B-C04, B-C05, B-C06

const memoryEntrySchema = z.object({
  key: z.string().trim().min(1).max(120),
  value: z.string().trim().min(1).max(4000),
  weight: z.number().min(0).max(1).default(0.5),
  createdAt: z.string().datetime(),
});

export type TutorMemoryEntry = z.infer<typeof memoryEntrySchema>;

export function compactTutorMemory(entries: readonly TutorMemoryEntry[], maxEntries = 20) {
  const parsed = entries.map((entry) => memoryEntrySchema.parse(entry));
  return [...parsed]
    .sort((left, right) => {
      if (left.weight !== right.weight) return right.weight - left.weight;
      return Date.parse(right.createdAt) - Date.parse(left.createdAt);
    })
    .slice(0, Math.max(1, Math.min(100, Math.trunc(maxEntries))));
}

export type SpeechOrchestrationJob = {
  jobId: string;
  sessionId: string;
  text: string;
  locale: string;
  voiceId: string;
  priority: "normal" | "high";
};

export function buildSpeechOrchestrationPlan(jobs: readonly SpeechOrchestrationJob[]) {
  const lanes = [[], [], []] as SpeechOrchestrationJob[][];
  for (const job of jobs) {
    const laneIndex = job.priority === "high" ? 0 : (Math.abs(hash(job.jobId)) % lanes.length);
    lanes[laneIndex]?.push(job);
  }

  return {
    laneCount: lanes.length,
    totalJobs: jobs.length,
    lanes,
  };
}

function hash(value: string) {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) {
    h = ((h << 5) - h) + value.charCodeAt(i);
    h |= 0;
  }
  return h;
}

export type TutorEvalSample = {
  sampleId: string;
  groundingScore: number;
  hallucinationRisk: number;
  safetyScore: number;
};

export function evaluateTutorGuardrails(samples: readonly TutorEvalSample[]) {
  const failures = samples.filter(
    (sample) => sample.groundingScore < 0.7 || sample.hallucinationRisk > 0.25 || sample.safetyScore < 0.75,
  );

  return {
    total: samples.length,
    failed: failures.length,
    passRate: samples.length === 0 ? 0 : (samples.length - failures.length) / samples.length,
    failures,
  };
}
