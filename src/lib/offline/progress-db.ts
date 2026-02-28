import { DBSchema, IDBPDatabase, openDB } from "idb";

type ProgressRecord = {
  lessonId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  synced: boolean;
};

interface KoydoDb extends DBSchema {
  lessonProgress: {
    key: string;
    value: ProgressRecord;
  };
}

let dbPromise: Promise<IDBPDatabase<KoydoDb>> | undefined;

function getDb() {
  if (!dbPromise) {
    dbPromise = openDB<KoydoDb>("koydo", 1, {
      upgrade(database) {
        database.createObjectStore("lessonProgress");
      },
    });
  }

  return dbPromise;
}

export async function saveOfflineProgress(record: ProgressRecord) {
  const db = await getDb();
  await db.put("lessonProgress", record, record.lessonId);
}

export async function getUnsyncedProgress() {
  const db = await getDb();
  const all = await db.getAll("lessonProgress");
  return all.filter((item) => !item.synced);
}

export async function deleteSyncedProgress(lessonId: string) {
  const db = await getDb();
  await db.delete("lessonProgress", lessonId);
}

