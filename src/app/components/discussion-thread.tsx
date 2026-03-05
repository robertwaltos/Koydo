"use client";

import { useCallback, useEffect, useState } from "react";

type Post = {
  id: string;
  user_id: string;
  body: string;
  parent_id: string | null;
  created_at: string;
};

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function DiscussionThread({
  moduleId,
  lessonId,
}: {
  moduleId: string;
  lessonId?: string;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newText, setNewText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      const params = new URLSearchParams({ moduleId });
      if (lessonId) params.set("lessonId", lessonId);
      const res = await fetch(`/api/discussions?${params}`);
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch {}
    setLoading(false);
  }, [moduleId, lessonId]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const submit = async () => {
    if (!newText.trim() || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId, lessonId, text: newText }),
      });
      setNewText("");
      fetchPosts();
    } catch {}
    setSubmitting(false);
  };

  const topLevel = posts.filter((p) => !p.parent_id);

  return (
    <div className="mt-6 border-t border-border/20 pt-4">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between text-sm font-semibold text-foreground/70 hover:text-foreground"
      >
        <span>Discussion ({topLevel.length})</span>
        <span className="text-xs text-foreground/40">{expanded ? "Hide" : "Show"}</span>
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          {/* New post input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question or leave a comment..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
              maxLength={2000}
              className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={submit}
              disabled={!newText.trim() || submitting}
              className="shrink-0 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white disabled:opacity-40"
            >
              Post
            </button>
          </div>

          {/* Posts */}
          {loading ? (
            <p className="text-xs text-foreground/40">Loading...</p>
          ) : topLevel.length === 0 ? (
            <p className="text-xs text-foreground/40">No discussions yet. Be the first to ask a question!</p>
          ) : (
            topLevel.map((post) => {
              const replies = posts.filter((p) => p.parent_id === post.id);
              return (
                <div key={post.id} className="rounded-xl border border-border/30 p-3">
                  <p className="text-sm text-foreground">{post.body}</p>
                  <p className="mt-1 text-[10px] text-foreground/40">
                    Learner-{post.user_id.slice(0, 4)} &middot; {timeAgo(post.created_at)}
                  </p>
                  {replies.length > 0 && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-border/20 pl-3">
                      {replies.map((reply) => (
                        <div key={reply.id}>
                          <p className="text-xs text-foreground/80">{reply.body}</p>
                          <p className="text-[9px] text-foreground/30">
                            Learner-{reply.user_id.slice(0, 4)} &middot; {timeAgo(reply.created_at)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
