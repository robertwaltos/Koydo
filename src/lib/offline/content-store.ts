/**
 * Offline Content Store — IndexedDB-backed storage for Airplane Mode packs.
 *
 * Stores downloaded lesson packs and tracks airplane mode state.
 * Uses the `idb` library (already installed) for typed IndexedDB access.
 *
 * DB: "koydo-offline" v1
 * Stores:
 *   - contentPacks: full OfflinePack blobs keyed by packId
 *   - airplaneState: singleton config for airplane mode status
 *   - lessonProgress: offline progress records pending sync
 */

import { openDB, type IDBPDatabase, type DBSchema } from "idb";
import type {
  OfflinePack,
  OfflineModuleData,
  OfflineLessonData,
} from "@/lib/offline/offline-packs";

// ── Schema ─────────────────────────────────────────────────────────

export interface AirplaneState {
  /** Singleton key — always "current" */
  id: "current";
  /** Whether airplane mode is currently active */
  enabled: boolean;
  /** ISO timestamp of last download */
  lastDownloadAt: string | null;
  /** Pack ID of the currently stored pack */
  activePackId: string | null;
  /** Content hash for freshness check */
  contentHash: string | null;
  /** When the pack expires */
  expiresAt: string | null;
  /** Total lessons available offline */
  totalLessons: number;
  /** Estimated content duration in minutes */
  estimatedMinutes: number;
  /** Human-readable size */
  sizeLabel: string;
  /** Size in bytes */
  sizeBytes: number;
}

export interface OfflineProgressRecord {
  lessonId: string;
  moduleId: string;
  questionId: string;
  selectedOptionId: string;
  correct: boolean;
  answeredAt: string;
  clientEventId: string;
  synced: boolean;
}

interface OfflineDB extends DBSchema {
  contentPacks: {
    key: string;
    value: OfflinePack;
  };
  airplaneState: {
    key: "current";
    value: AirplaneState;
  };
  offlineProgress: {
    key: string; // clientEventId
    value: OfflineProgressRecord;
    indexes: { "by-synced": "synced" };
  };
}

// ── DB Init ────────────────────────────────────────────────────────

let dbPromise: Promise<IDBPDatabase<OfflineDB>> | undefined;

function getDB(): Promise<IDBPDatabase<OfflineDB>> {
  if (!dbPromise) {
    dbPromise = openDB<OfflineDB>("koydo-offline", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("contentPacks")) {
          db.createObjectStore("contentPacks");
        }
        if (!db.objectStoreNames.contains("airplaneState")) {
          db.createObjectStore("airplaneState");
        }
        if (!db.objectStoreNames.contains("offlineProgress")) {
          const store = db.createObjectStore("offlineProgress", {
            keyPath: "clientEventId",
          });
          store.createIndex("by-synced", "synced");
        }
      },
    });
  }
  return dbPromise;
}

// ── Airplane State ─────────────────────────────────────────────────

const DEFAULT_STATE: AirplaneState = {
  id: "current",
  enabled: false,
  lastDownloadAt: null,
  activePackId: null,
  contentHash: null,
  expiresAt: null,
  totalLessons: 0,
  estimatedMinutes: 0,
  sizeLabel: "0 B",
  sizeBytes: 0,
};

export async function getAirplaneState(): Promise<AirplaneState> {
  const db = await getDB();
  const state = await db.get("airplaneState", "current");
  return state ?? { ...DEFAULT_STATE };
}

export async function setAirplaneState(
  patch: Partial<Omit<AirplaneState, "id">>,
): Promise<AirplaneState> {
  const db = await getDB();
  const current = await getAirplaneState();
  const next: AirplaneState = { ...current, ...patch, id: "current" };
  await db.put("airplaneState", next, "current");
  return next;
}

// ── Content Pack Storage ───────────────────────────────────────────

export async function storeContentPack(pack: OfflinePack): Promise<void> {
  const db = await getDB();

  // Clear old packs first — we only keep one at a time
  const allKeys = await db.getAllKeys("contentPacks");
  for (const key of allKeys) {
    await db.delete("contentPacks", key);
  }

  await db.put("contentPacks", pack, pack.manifest.packId);

  // Update airplane state
  const totalLessons = pack.modules.reduce((sum, m) => sum + m.lessonCount, 0);
  const estimatedMinutes = pack.modules.reduce(
    (sum, m) =>
      sum +
      m.lessons.reduce((ls, l) => ls + (l.duration || 12), 0),
    0,
  );

  await setAirplaneState({
    enabled: true,
    lastDownloadAt: new Date().toISOString(),
    activePackId: pack.manifest.packId,
    contentHash: pack.manifest.contentHash,
    expiresAt: pack.manifest.expiresAt,
    totalLessons,
    estimatedMinutes,
    sizeBytes: pack.manifest.estimatedSizeBytes,
    sizeLabel: formatBytesLocal(pack.manifest.estimatedSizeBytes),
  });
}

export async function getStoredPack(): Promise<OfflinePack | null> {
  const db = await getDB();
  const state = await getAirplaneState();
  if (!state.activePackId) return null;

  const pack = await db.get("contentPacks", state.activePackId);
  return pack ?? null;
}

export async function getOfflineModule(
  moduleId: string,
): Promise<OfflineModuleData | null> {
  const pack = await getStoredPack();
  if (!pack) return null;
  return pack.modules.find((m) => m.id === moduleId) ?? null;
}

export async function getOfflineLesson(
  lessonId: string,
): Promise<{ lesson: OfflineLessonData; module: OfflineModuleData } | null> {
  const pack = await getStoredPack();
  if (!pack) return null;

  for (const mod of pack.modules) {
    const lesson = mod.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, module: mod };
  }
  return null;
}

/** Delete all stored content and disable airplane mode. */
export async function clearOfflineContent(): Promise<void> {
  const db = await getDB();

  const allKeys = await db.getAllKeys("contentPacks");
  for (const key of allKeys) {
    await db.delete("contentPacks", key);
  }

  await setAirplaneState({
    enabled: false,
    activePackId: null,
    contentHash: null,
    expiresAt: null,
    totalLessons: 0,
    estimatedMinutes: 0,
    sizeLabel: "0 B",
    sizeBytes: 0,
  });
}

/** Check if the stored pack is still fresh (not expired). */
export async function isPackFresh(): Promise<boolean> {
  const state = await getAirplaneState();
  if (!state.expiresAt) return false;
  return new Date(state.expiresAt) > new Date();
}

// ── Offline Progress ───────────────────────────────────────────────

export async function saveOfflineProgress(
  record: Omit<OfflineProgressRecord, "synced">,
): Promise<void> {
  const db = await getDB();
  await db.put("offlineProgress", { ...record, synced: false });
}

export async function getUnsyncedProgress(): Promise<OfflineProgressRecord[]> {
  const db = await getDB();
  return db.getAllFromIndex("offlineProgress", "by-synced", false);
}

export async function markProgressSynced(
  clientEventIds: string[],
): Promise<void> {
  const db = await getDB();
  for (const id of clientEventIds) {
    const record = await db.get("offlineProgress", id);
    if (record) {
      await db.put("offlineProgress", { ...record, synced: true });
    }
  }
}

export async function clearSyncedProgress(): Promise<void> {
  const db = await getDB();
  const all = await db.getAll("offlineProgress");
  for (const record of all) {
    if (record.synced) {
      await db.delete("offlineProgress", record.clientEventId);
    }
  }
}

// ── Utility ────────────────────────────────────────────────────────

function formatBytesLocal(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}
