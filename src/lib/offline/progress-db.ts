import { DBSchema, IDBPDatabase, openDB } from "idb";
import type { OfflineProgressQueueRecord } from "@/lib/offline/progress-sync";
import { normalizeOfflineProgressRecord } from "@/lib/offline/progress-sync";

type LegacyProgressRecord = {
  lessonId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  synced: boolean;
};

type SaveOfflineProgressInput = {
  lessonId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  synced?: boolean;
  scorePercentage?: number;
  source?: OfflineProgressQueueRecord["source"];
};

interface KoydoDb extends DBSchema {
  lessonProgress: {
    key: string;
    value: LegacyProgressRecord;
  };
  progressQueue: {
    key: string;
    value: OfflineProgressQueueRecord;
    indexes: {
      byLessonId: string;
      byCompletedAt: string;
      byCreatedAt: string;
    };
  };
}

const DATABASE_NAME = "koydo";
const DATABASE_VERSION = 2;

let dbPromise: Promise<IDBPDatabase<KoydoDb>> | undefined;

function toIso(value: string | undefined) {
  if (!value) return new Date().toISOString();
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString();
  return parsed.toISOString();
}

function clampScorePercentage(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function computeScorePercentage(input: SaveOfflineProgressInput) {
  if (typeof input.scorePercentage === "number" && Number.isFinite(input.scorePercentage)) {
    return clampScorePercentage(input.scorePercentage);
  }
  if (input.totalQuestions <= 0) {
    return 0;
  }
  return clampScorePercentage(input.score / input.totalQuestions);
}

function buildRecordId(params: {
  lessonId: string;
  completedAtIso: string;
  scorePercentage: number;
}) {
  const randomTail = Math.random().toString(36).slice(2, 8);
  const scoreToken = Math.round(params.scorePercentage * 10_000)
    .toString()
    .padStart(4, "0");
  return `${params.lessonId}::${params.completedAtIso}::${scoreToken}::${randomTail}`;
}

function getDb() {
  if (!dbPromise) {
    dbPromise = openDB<KoydoDb>(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(database, oldVersion) {
        if (!database.objectStoreNames.contains("lessonProgress")) {
          database.createObjectStore("lessonProgress");
        }

        if (oldVersion < 2 && !database.objectStoreNames.contains("progressQueue")) {
          const queueStore = database.createObjectStore("progressQueue", {
            keyPath: "recordId",
          });
          queueStore.createIndex("byLessonId", "lessonId");
          queueStore.createIndex("byCompletedAt", "completedAt");
          queueStore.createIndex("byCreatedAt", "createdAt");
        }
      },
    });
  }

  return dbPromise;
}

function toQueueRecord(input: SaveOfflineProgressInput): OfflineProgressQueueRecord {
  const completedAt = toIso(input.completedAt);
  const scorePercentage = computeScorePercentage(input);
  const source = input.source ?? "unknown";
  const recordId = buildRecordId({
    lessonId: input.lessonId,
    completedAtIso: completedAt,
    scorePercentage,
  });

  return normalizeOfflineProgressRecord({
    recordId,
    lessonId: input.lessonId,
    scorePercentage,
    completedAt,
    totalQuestions: Math.max(1, Math.round(input.totalQuestions || 1)),
    source,
    createdAt: new Date().toISOString(),
  });
}

function normalizeLegacyRecord(record: LegacyProgressRecord): OfflineProgressQueueRecord {
  const totalQuestions = Math.max(1, Math.round(record.totalQuestions || 1));
  const scorePercentage = clampScorePercentage((record.score || 0) / totalQuestions);
  return normalizeOfflineProgressRecord({
    recordId: `legacy::${record.lessonId}`,
    lessonId: record.lessonId,
    scorePercentage,
    completedAt: toIso(record.completedAt),
    totalQuestions,
    source: "unknown",
    createdAt: toIso(record.completedAt),
  });
}

function sortQueue(left: OfflineProgressQueueRecord, right: OfflineProgressQueueRecord) {
  const leftTime = Date.parse(left.completedAt);
  const rightTime = Date.parse(right.completedAt);
  if (Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime !== rightTime) {
    return leftTime - rightTime;
  }
  return left.recordId.localeCompare(right.recordId);
}

export async function saveOfflineProgress(input: SaveOfflineProgressInput) {
  const db = await getDb();
  const queueRecord = toQueueRecord(input);

  await db.put("progressQueue", queueRecord);
  // Keep legacy store in sync for safe fallback with older builds.
  await db.put(
    "lessonProgress",
    {
      lessonId: input.lessonId,
      score: input.score,
      totalQuestions: Math.max(1, Math.round(input.totalQuestions || 1)),
      completedAt: toIso(input.completedAt),
      synced: false,
    },
    input.lessonId,
  );

  return queueRecord;
}

export async function getUnsyncedProgress() {
  const db = await getDb();
  const [queueRecords, legacyRecords] = await Promise.all([
    db.getAll("progressQueue"),
    db.getAll("lessonProgress"),
  ]);

  const normalized = [
    ...(queueRecords ?? []).map((entry) => normalizeOfflineProgressRecord(entry)),
    ...(legacyRecords ?? []).map((entry) => normalizeLegacyRecord(entry)),
  ];

  // Deduplicate by recordId while preserving deterministic ordering.
  const byRecordId = new Map<string, OfflineProgressQueueRecord>();
  for (const record of normalized) {
    if (!byRecordId.has(record.recordId)) {
      byRecordId.set(record.recordId, record);
    }
  }

  return [...byRecordId.values()].sort(sortQueue);
}

export async function deleteQueuedProgressByIds(recordIds: string[]) {
  if (recordIds.length === 0) return;

  const db = await getDb();
  const tx = db.transaction(["progressQueue", "lessonProgress"], "readwrite");
  const queueStore = tx.objectStore("progressQueue");
  const legacyStore = tx.objectStore("lessonProgress");

  for (const recordId of recordIds) {
    if (recordId.startsWith("legacy::")) {
      const lessonId = recordId.slice("legacy::".length);
      if (lessonId) {
        void legacyStore.delete(lessonId);
      }
      continue;
    }
    void queueStore.delete(recordId);
  }

  await tx.done;
}

export async function deleteSyncedProgress(lessonId: string) {
  const db = await getDb();
  const tx = db.transaction(["progressQueue", "lessonProgress"], "readwrite");
  const queueStore = tx.objectStore("progressQueue");
  const lessonIndex = queueStore.index("byLessonId");
  const queueKeys = await lessonIndex.getAllKeys(lessonId);

  for (const key of queueKeys) {
    void queueStore.delete(key);
  }
  void tx.objectStore("lessonProgress").delete(lessonId);

  await tx.done;
}

