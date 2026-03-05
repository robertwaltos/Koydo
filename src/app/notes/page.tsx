"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Note = {
  id: string;
  module_id: string | null;
  lesson_id: string | null;
  content: string;
  updated_at: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newContent, setNewContent] = useState("");

  const fetchNotes = useCallback(async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data.notes ?? []);
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => { fetchNotes(); }, [fetchNotes]);

  const createNote = async () => {
    if (!newContent.trim()) return;
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent }),
    });
    setNewContent("");
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    await fetch(`/api/notes?id=${id}`, { method: "DELETE" });
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const formatDate = (iso: string) => {
    try { return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }); }
    catch { return ""; }
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">My Notes</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">My Notes</h1>
      <p className="text-sm text-foreground/60">
        Quick notes from your learning sessions. Jot down key ideas, reminders, and study tips.
      </p>

      {/* New note input */}
      <SoftCard className="p-4">
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Write a new note..."
          rows={3}
          className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted p-3 text-sm resize-none"
        />
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={createNote}
            disabled={!newContent.trim()}
            className="ui-focus-ring rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white disabled:opacity-40 hover:brightness-110"
          >
            Save Note
          </button>
        </div>
      </SoftCard>

      {/* Notes list */}
      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading notes...</p>
      ) : notes.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-foreground/40 text-sm">No notes yet. Start taking notes during your lessons!</p>
        </SoftCard>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <SoftCard key={note.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-wrap text-sm text-foreground">{note.content}</p>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-foreground/40">
                    <span>{formatDate(note.updated_at)}</span>
                    {note.module_id && (
                      <Link href={`/modules/${note.module_id}`} className="text-accent hover:underline">
                        View module
                      </Link>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => deleteNote(note.id)}
                  className="shrink-0 text-xs text-foreground/30 hover:text-red-500"
                  title="Delete note"
                >
                  Delete
                </button>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
