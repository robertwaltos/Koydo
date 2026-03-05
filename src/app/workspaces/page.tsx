"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Workspace = {
  id: string;
  name: string;
  description: string | null;
  module_id: string | null;
  content: string;
  owner_id: string;
  updated_at: string;
};

export default function WorkspacesPage() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchWorkspaces = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/workspaces");
      const data = await res.json();
      setWorkspaces(data.workspaces ?? []);
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => { fetchWorkspaces(); }, [fetchWorkspaces]);

  const createWorkspace = async () => {
    if (!name.trim()) return;
    setCreating(true);
    try {
      await fetch("/api/workspaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", name, description: desc }),
      });
      setShowCreate(false);
      setName("");
      setDesc("");
      fetchWorkspaces();
    } catch {}
    setCreating(false);
  };

  const saveContent = async () => {
    if (!editingId) return;
    setSaving(true);
    try {
      await fetch("/api/workspaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update-content", workspaceId: editingId, content: editContent }),
      });
    } catch {}
    setSaving(false);
  };

  if (editingId) {
    const ws = workspaces.find((w) => w.id === editingId);
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">{ws?.name ?? "Workspace"}</h2>
            <p className="text-xs text-foreground/40">{ws?.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={saveContent}
              disabled={saving}
              className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => { setEditingId(null); fetchWorkspaces(); }}
              className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground/60"
            >
              Back
            </button>
          </div>
        </div>
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="ui-focus-ring min-h-[60vh] w-full rounded-xl border border-border bg-surface-muted p-4 text-sm font-mono resize-none"
          placeholder="Start collaborating here... Write notes, code, essays, or brainstorm ideas."
        />
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Workspaces</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Collaborative Workspaces</h1>
        <button
          type="button"
          onClick={() => setShowCreate(!showCreate)}
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
        >
          {showCreate ? "Cancel" : "New Workspace"}
        </button>
      </div>
      <p className="text-sm text-foreground/60">
        Create shared workspaces to collaborate on projects, study together, and build knowledge.
      </p>

      {showCreate && (
        <SoftCard className="p-5 space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Workspace name"
            maxLength={100}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description (optional)"
            maxLength={500}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <button
            type="button"
            onClick={createWorkspace}
            disabled={creating || !name.trim()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            Create
          </button>
        </SoftCard>
      )}

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : workspaces.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">No workspaces yet. Create one to start collaborating!</p>
        </SoftCard>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {workspaces.map((ws) => (
            <SoftCard
              key={ws.id}
              className="cursor-pointer p-5 transition hover:border-accent/30 hover:shadow-md"
              onClick={() => { setEditingId(ws.id); setEditContent(ws.content); }}
            >
              <h3 className="text-base font-bold text-foreground">{ws.name}</h3>
              {ws.description && <p className="mt-1 text-xs text-foreground/50">{ws.description}</p>}
              <p className="mt-2 text-[11px] text-foreground/30">
                Updated {new Date(ws.updated_at).toLocaleDateString()}
              </p>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
