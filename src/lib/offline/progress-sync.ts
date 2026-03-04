export type OfflineProgressQueueRecord = {
  recordId: string;
  lessonId: string;
  scorePercentage: number;
  completedAt: string;
  totalQuestions: number;
  source: "quiz" | "video" | "interactive" | "explore" | "unknown";
  createdAt: string;
};

export type ResolvedOfflineProgressItem = {
  lessonId: string;
  winner: OfflineProgressQueueRecord;
  mergedRecordIds: string[];
};

export type OfflineProgressConflictResolution = {
  resolved: ResolvedOfflineProgressItem[];
  droppedRecordIds: string[];
};

const MIN_SCORE = 0;
const MAX_SCORE = 1;

function parseIsoToEpoch(value: string) {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(MIN_SCORE, Math.min(MAX_SCORE, value));
}

function compareForWinner(left: OfflineProgressQueueRecord, right: OfflineProgressQueueRecord) {
  const completedAtDiff = parseIsoToEpoch(right.completedAt) - parseIsoToEpoch(left.completedAt);
  if (completedAtDiff !== 0) return completedAtDiff;

  const scoreDiff = clampScore(right.scorePercentage) - clampScore(left.scorePercentage);
  if (scoreDiff !== 0) return scoreDiff > 0 ? 1 : -1;

  const totalQuestionDiff = right.totalQuestions - left.totalQuestions;
  if (totalQuestionDiff !== 0) return totalQuestionDiff;

  return right.recordId.localeCompare(left.recordId);
}

function compareForQueueOrder(left: OfflineProgressQueueRecord, right: OfflineProgressQueueRecord) {
  const completedAtDiff = parseIsoToEpoch(left.completedAt) - parseIsoToEpoch(right.completedAt);
  if (completedAtDiff !== 0) return completedAtDiff;
  return left.recordId.localeCompare(right.recordId);
}

export function normalizeOfflineProgressRecord(
  record: OfflineProgressQueueRecord,
): OfflineProgressQueueRecord {
  return {
    ...record,
    scorePercentage: clampScore(record.scorePercentage),
    totalQuestions: Math.max(1, Math.round(record.totalQuestions)),
    lessonId: record.lessonId.trim(),
    completedAt: record.completedAt || new Date(0).toISOString(),
    createdAt: record.createdAt || record.completedAt || new Date(0).toISOString(),
  };
}

export function resolveOfflineProgressConflicts(
  records: OfflineProgressQueueRecord[],
): OfflineProgressConflictResolution {
  const normalized = records
    .map(normalizeOfflineProgressRecord)
    .filter((record) => record.lessonId.length > 0)
    .sort(compareForQueueOrder);

  const grouped = new Map<string, OfflineProgressQueueRecord[]>();
  for (const record of normalized) {
    const bucket = grouped.get(record.lessonId) ?? [];
    bucket.push(record);
    grouped.set(record.lessonId, bucket);
  }

  const resolved: ResolvedOfflineProgressItem[] = [];
  const droppedRecordIds: string[] = [];

  for (const [lessonId, bucket] of grouped.entries()) {
    const sortedByWinner = [...bucket].sort(compareForWinner);
    const winner = sortedByWinner[0];
    if (!winner) continue;

    const mergedRecordIds = bucket
      .map((entry) => entry.recordId)
      .sort((left, right) => left.localeCompare(right));

    for (const recordId of mergedRecordIds) {
      if (recordId !== winner.recordId) {
        droppedRecordIds.push(recordId);
      }
    }

    resolved.push({
      lessonId,
      winner,
      mergedRecordIds,
    });
  }

  resolved.sort((left, right) => compareForQueueOrder(left.winner, right.winner));
  droppedRecordIds.sort((left, right) => left.localeCompare(right));

  return {
    resolved,
    droppedRecordIds,
  };
}

