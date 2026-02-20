import { DBSchema, IDBPDatabase, openDB } from "idb";

type ProgressRecord = {
  lessonId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  synced: boolean;
};

interface EduForgeDb extends DBSchema {
  lessonProgress: {
    key: string;
    value: ProgressRecord;
  };
}

let dbPromise: Promise<IDBPDatabase<EduForgeDb>> | undefined;

function getDb() {
  if (!dbPromise) {
    dbPromise = openDB<EduForgeDb>("eduforge", 1, {
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

