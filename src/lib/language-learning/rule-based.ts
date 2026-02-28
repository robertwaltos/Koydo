import type {
  PronunciationGradeBand,
  PronunciationGradingRequest,
  PronunciationGradingResult,
  ProviderId,
} from "./types";

const TOKEN_PATTERN = /[a-z0-9']+/gi;

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function toGradeBand(score: number): PronunciationGradeBand {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 55) return "D";
  return "E";
}

function tokenize(value: string): string[] {
  return value.toLowerCase().match(TOKEN_PATTERN) ?? [];
}

function normalize(value: string) {
  return tokenize(value).join(" ");
}

function levenshteinDistance(left: string, right: string) {
  if (left === right) return 0;
  if (left.length === 0) return right.length;
  if (right.length === 0) return left.length;

  const previousRow = new Array(right.length + 1).fill(0);
  const currentRow = new Array(right.length + 1).fill(0);

  for (let j = 0; j <= right.length; j += 1) {
    previousRow[j] = j;
  }

  for (let i = 1; i <= left.length; i += 1) {
    currentRow[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const substitutionCost = left[i - 1] === right[j - 1] ? 0 : 1;
      currentRow[j] = Math.min(
        currentRow[j - 1] + 1,
        previousRow[j] + 1,
        previousRow[j - 1] + substitutionCost,
      );
    }
    for (let j = 0; j <= right.length; j += 1) {
      previousRow[j] = currentRow[j];
    }
  }

  return previousRow[right.length];
}

export function buildRuleBasedPronunciationGrade(
  request: PronunciationGradingRequest,
  options?: { providerId?: ProviderId; wasFallback?: boolean },
): PronunciationGradingResult {
  const targetTokens = tokenize(request.targetText);
  const spokenTokens = tokenize(request.transcriptText);

  const targetNormalized = normalize(request.targetText);
  const spokenNormalized = normalize(request.transcriptText);

  const maxCharLength = Math.max(targetNormalized.length, spokenNormalized.length, 1);
  const editDistance = levenshteinDistance(targetNormalized, spokenNormalized);
  const charSimilarity = ((maxCharLength - editDistance) / maxCharLength) * 100;

  const targetSet = new Set(targetTokens);
  const spokenSet = new Set(spokenTokens);
  let sharedTokenCount = 0;
  for (const token of targetSet) {
    if (spokenSet.has(token)) sharedTokenCount += 1;
  }
  const tokenCoverage = targetSet.size === 0 ? 100 : (sharedTokenCount / targetSet.size) * 100;

  const lengthRatio = targetTokens.length > 0 ? spokenTokens.length / targetTokens.length : 1;
  const completenessRaw =
    lengthRatio <= 1
      ? lengthRatio * 100
      : Math.max(0, 100 - Math.min(60, (lengthRatio - 1) * 60));

  let fluencyRaw = 75;
  if (request.audioDurationMs && request.audioDurationMs > 0 && spokenTokens.length > 0) {
    const wordsPerMinute = spokenTokens.length / (request.audioDurationMs / 60_000);
    const paceDelta = Math.abs(130 - wordsPerMinute);
    fluencyRaw = Math.max(0, 100 - Math.min(90, paceDelta * 1.2));
  }

  const confidenceRaw =
    typeof request.asrConfidence === "number"
      ? request.asrConfidence * 100
      : (charSimilarity + tokenCoverage) / 2;

  const accuracy = clampScore(charSimilarity * 0.6 + tokenCoverage * 0.4);
  const completeness = clampScore(completenessRaw);
  const fluency = clampScore(fluencyRaw);
  const confidence = clampScore(confidenceRaw);

  const overallScore = clampScore(
    accuracy * 0.45 + completeness * 0.25 + fluency * 0.2 + confidence * 0.1,
  );
  const gradeBand = toGradeBand(overallScore);

  const feedback: string[] = [];
  if (accuracy < 80) {
    feedback.push("Repeat the sentence slowly and focus on matching each target word.");
  }
  if (completeness < 85) {
    feedback.push("Try to pronounce the full sentence without skipping words.");
  }
  if (fluency < 70) {
    feedback.push("Keep a steady pace and reduce long pauses between words.");
  }
  if (confidence < 65) {
    feedback.push("Record another attempt in a quieter environment for stronger grading confidence.");
  }
  if (feedback.length === 0) {
    feedback.push("Strong pronunciation attempt. Increase pace slightly while keeping clarity.");
  }

  return {
    providerId: options?.providerId ?? "mock",
    wasFallback: options?.wasFallback ?? true,
    overallScore,
    gradeBand,
    dimensions: {
      accuracy,
      fluency,
      completeness,
      confidence,
    },
    feedback,
    metadata: {
      model: "rule-based-v1",
      language: request.language,
      targetWordCount: targetTokens.length,
      spokenWordCount: spokenTokens.length,
      editDistance,
    },
  };
}
