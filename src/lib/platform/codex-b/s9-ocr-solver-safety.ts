// S9 tickets: B-C01, B-C02, B-C03

export type OcrUploadInput = {
  filename: string;
  mimeType: string;
  byteLength: number;
  sha256: string;
};

export function validateOcrUploadSecurity(input: OcrUploadInput) {
  const allowedMime = new Set(["image/png", "image/jpeg", "application/pdf"]);
  const maxBytes = 15 * 1024 * 1024;
  const safeFilename = input.filename.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);

  const violations: string[] = [];
  if (!allowedMime.has(input.mimeType)) violations.push("mime_not_allowed");
  if (input.byteLength <= 0 || input.byteLength > maxBytes) violations.push("invalid_size");
  if (!/^[0-9a-f]{64}$/i.test(input.sha256)) violations.push("invalid_sha256");

  return {
    allowed: violations.length === 0,
    violations,
    safeFilename,
    quarantineRequired: violations.length > 0,
  };
}

export type SolverStep = {
  stepIndex: number;
  statement: string;
  derivedFromStepIndex: number | null;
};

export function verifySolverStepsScaffold(steps: readonly SolverStep[]) {
  const issues: string[] = [];
  const seen = new Set<number>();

  for (const step of steps) {
    if (seen.has(step.stepIndex)) {
      issues.push(`duplicate_step_${step.stepIndex}`);
    }
    seen.add(step.stepIndex);

    if (step.derivedFromStepIndex !== null && !seen.has(step.derivedFromStepIndex)) {
      issues.push(`invalid_dependency_${step.stepIndex}`);
    }

    if (!step.statement.trim()) {
      issues.push(`empty_statement_${step.stepIndex}`);
    }
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}

export type HighRiskSafetySignal = {
  signalId: string;
  category: "self_harm" | "violence" | "sexual_minors" | "hate" | "jailbreak";
  score: number;
};

export function evaluateHighRiskSafetySignals(signals: readonly HighRiskSafetySignal[]) {
  const thresholds: Record<HighRiskSafetySignal["category"], number> = {
    self_harm: 0.6,
    violence: 0.7,
    sexual_minors: 0.5,
    hate: 0.75,
    jailbreak: 0.65,
  };

  const triggered = signals.filter((signal) => signal.score >= thresholds[signal.category]);

  return {
    block: triggered.length > 0,
    triggered,
    maxScore: signals.reduce((max, signal) => Math.max(max, signal.score), 0),
  };
}
