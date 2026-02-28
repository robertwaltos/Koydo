"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";

type ClassRow = {
  id: string;
  name: string;
  maxSize: number;
  enrolledCount: number;
  consentedCount: number;
  createdAt: string;
  updatedAt: string;
};

type ClassesResponse = {
  classes: ClassRow[];
};

export default function TestingClassesClient() {
  const [classes, setClasses] = useState<ClassRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createName, setCreateName] = useState("");
  const [createMaxSize, setCreateMaxSize] = useState(35);
  const [isCreating, setIsCreating] = useState(false);

  const loadClasses = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/testing/classes", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as
        | ClassesResponse
        | { error?: string }
        | null;

      if (!response.ok) {
        setError(payload && "error" in payload && payload.error ? payload.error : "Failed to load classes.");
        setIsLoading(false);
        return;
      }

      setClasses(Array.isArray((payload as ClassesResponse)?.classes) ? (payload as ClassesResponse).classes : []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load classes.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadClasses();
  }, [loadClasses]);

  async function createClass(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!createName.trim()) return;
    setIsCreating(true);
    setError(null);

    try {
      const response = await fetch("/api/testing/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: createName.trim(),
          maxSize: createMaxSize,
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.error ?? "Failed to create class.");
        return;
      }
      setCreateName("");
      setCreateMaxSize(35);
      await loadClasses();
    } catch (createError) {
      setError(createError instanceof Error ? createError.message : "Failed to create class.");
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="space-y-4">
      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-bold text-zinc-900">Create Class</h2>
        <form className="mt-3 grid gap-3 sm:grid-cols-3" onSubmit={createClass}>
          <input
            type="text"
            value={createName}
            onChange={(event) => setCreateName(event.target.value)}
            placeholder="Class name"
            className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
          />
          <input
            type="number"
            min={1}
            max={35}
            value={createMaxSize}
            onChange={(event) => setCreateMaxSize(Number(event.target.value))}
            className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
          />
          <button
            type="submit"
            disabled={isCreating}
            className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isCreating ? "Creating..." : "Create"}
          </button>
        </form>
      </SoftCard>

      {error ? (
        <SoftCard className="border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-800">{error}</p>
        </SoftCard>
      ) : null}

      {isLoading ? (
        <SoftCard className="p-5">
          <p className="text-sm font-semibold text-zinc-700">Loading classes...</p>
        </SoftCard>
      ) : classes.length === 0 ? (
        <SoftCard className="p-5">
          <p className="text-sm font-semibold text-zinc-700">No classes yet.</p>
        </SoftCard>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {classes.map((entry) => (
            <SoftCard key={entry.id} as="article" interactive className="p-4">
              <h3 className="text-lg font-bold text-zinc-900">{entry.name}</h3>
              <p className="mt-1 text-sm font-medium text-zinc-700">
                Enrolled {entry.enrolledCount}/{entry.maxSize} | Consent {entry.consentedCount}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-500">
                Updated {new Date(entry.updatedAt).toLocaleString()}
              </p>
              <div className="mt-3">
                <Link
                  href={`/testing/classes/${encodeURIComponent(entry.id)}`}
                  className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
                >
                  Open Class
                </Link>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </div>
  );
}

