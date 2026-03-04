import { z } from "zod";

// S4 tickets: B-A10, B-A11, B-A12

type VectorRecord = {
  documentId: string;
  embedding: number[];
  metadata: Record<string, unknown>;
};

const vectorStore = new Map<string, VectorRecord>();

export const vectorDocumentSchema = z.object({
  documentId: z.string().trim().min(1).max(120),
  text: z.string().trim().min(1).max(200_000),
  metadata: z.record(z.string(), z.unknown()).default({}),
});

function tokenize(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length >= 2)
    .slice(0, 5000);
}

function toEmbedding(tokens: string[]) {
  const dims = new Array<number>(64).fill(0);
  for (const token of tokens) {
    let hash = 2166136261;
    for (let i = 0; i < token.length; i += 1) {
      hash ^= token.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    const index = (hash >>> 0) % dims.length;
    dims[index] += 1;
  }

  const norm = Math.sqrt(dims.reduce((sum, value) => sum + value * value, 0)) || 1;
  return dims.map((value) => value / norm);
}

function cosine(left: number[], right: number[]) {
  const len = Math.min(left.length, right.length);
  let score = 0;
  for (let i = 0; i < len; i += 1) {
    score += (left[i] ?? 0) * (right[i] ?? 0);
  }
  return score;
}

export function upsertVectorDocument(input: z.infer<typeof vectorDocumentSchema>) {
  const parsed = vectorDocumentSchema.parse(input);
  const embedding = toEmbedding(tokenize(parsed.text));
  vectorStore.set(parsed.documentId, {
    documentId: parsed.documentId,
    embedding,
    metadata: parsed.metadata,
  });
  return { documentId: parsed.documentId, dimensions: embedding.length };
}

export function queryVectorDocuments(queryText: string, limit = 5) {
  const embedding = toEmbedding(tokenize(queryText));
  const results = Array.from(vectorStore.values())
    .map((record) => ({
      documentId: record.documentId,
      score: cosine(embedding, record.embedding),
      metadata: record.metadata,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(1, Math.min(50, Math.trunc(limit))));

  return results;
}

export type RolloutDashboardSnapshot = {
  emergencyStopActive: boolean;
  featuresEnabled: number;
  featuresDisabled: number;
  staleWorkers: number;
  incidentOpen: boolean;
  generatedAt: string;
};

export function buildRolloutDashboardSnapshot(input: {
  emergencyStopActive: boolean;
  featureFlags: Record<string, boolean>;
  staleWorkers: number;
  incidentOpen: boolean;
}) {
  const entries = Object.values(input.featureFlags);
  const featuresEnabled = entries.filter(Boolean).length;
  return {
    emergencyStopActive: input.emergencyStopActive,
    featuresEnabled,
    featuresDisabled: entries.length - featuresEnabled,
    staleWorkers: Math.max(0, Math.trunc(input.staleWorkers)),
    incidentOpen: input.incidentOpen,
    generatedAt: new Date().toISOString(),
  } satisfies RolloutDashboardSnapshot;
}

export type IntegrationHarnessCase = {
  id: string;
  description: string;
  run: () => Promise<boolean> | boolean;
};

export async function runPhaseAIntegrationHarness(cases: readonly IntegrationHarnessCase[]) {
  const results: Array<{ id: string; passed: boolean }> = [];
  for (const testCase of cases) {
    let passed = false;
    try {
      passed = Boolean(await testCase.run());
    } catch {
      passed = false;
    }
    results.push({ id: testCase.id, passed });
  }

  const passedCount = results.filter((result) => result.passed).length;
  return {
    total: results.length,
    passed: passedCount,
    failed: results.length - passedCount,
    results,
  };
}
