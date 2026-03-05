"use client";

import { useCallback, useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";

type Post = {
  id: string;
  user_id: string;
  body: string;
  parent_id: string | null;
  created_at: string;
  upvote_count: number;
  is_pinned: boolean;
  is_hidden: boolean;
  user_upvoted: boolean;
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
  const { allowed } = useFeature("discussion_forum");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [newText, setNewText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
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

  useEffect(() => { if (allowed) fetchPosts(); }, [fetchPosts, allowed]);

  if (!allowed) return null;

  const submit = async (parentId?: string) => {
    if (!newText.trim() || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId, lessonId, text: newText, parentId }),
      });
      setNewText("");
      setReplyTo(null);
      fetchPosts();
    } catch {}
    setSubmitting(false);
  };

  const upvote = async (postId: string) => {
    try {
      await fetch("/api/discussions/upvote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                upvote_count: p.user_upvoted ? p.upvote_count - 1 : p.upvote_count + 1,
                user_upvoted: !p.user_upvoted,
              }
            : p,
        ),
      );
    } catch {}
  };

  const report = async (postId: string) => {
    try {
      await fetch("/api/discussions/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
    } catch {}
  };

  const topLevel = posts
    .filter((p) => !p.parent_id && !p.is_hidden)
    .sort((a, b) => {
      // Pinned first, then by upvotes, then by date
      if (a.is_pinned && !b.is_pinned) return -1;
      if (!a.is_pinned && b.is_pinned) return 1;
      if (b.upvote_count !== a.upvote_count) return b.upvote_count - a.upvote_count;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

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
              placeholder={replyTo ? "Write a reply…" : "Ask a question or leave a comment…"}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") submit(replyTo ?? undefined); }}
              maxLength={2000}
              className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => submit(replyTo ?? undefined)}
              disabled={!newText.trim() || submitting}
              className="shrink-0 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white disabled:opacity-40"
            >
              {replyTo ? "Reply" : "Post"}
            </button>
            {replyTo && (
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-xs text-zinc-500 hover:text-zinc-700"
              >
                Cancel
              </button>
            )}
          </div>

          {/* Posts */}
          {loading ? (
            <p className="text-xs text-foreground/40">Loading...</p>
          ) : topLevel.length === 0 ? (
            <p className="text-xs text-foreground/40">No discussions yet. Be the first to ask a question!</p>
          ) : (
            topLevel.map((post) => {
              const replies = posts.filter((p) => p.parent_id === post.id && !p.is_hidden);
              return (
                <div key={post.id} className="rounded-xl border border-border/30 p-3">
                  {post.is_pinned && (
                    <span className="mb-1 inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
                      Pinned
                    </span>
                  )}
                  <p className="text-sm text-foreground">{post.body}</p>
                  <div className="mt-1 flex items-center gap-3">
                    <p className="text-[10px] text-foreground/40">
                      Learner-{post.user_id.slice(0, 4)} &middot; {timeAgo(post.created_at)}
                    </p>
                    <button
                      onClick={() => upvote(post.id)}
                      className={`text-[10px] font-medium ${post.user_upvoted ? "text-accent" : "text-foreground/40 hover:text-foreground/60"}`}
                    >
                      {post.upvote_count > 0 ? `${post.upvote_count} ` : ""}Upvote
                    </button>
                    <button
                      onClick={() => setReplyTo(post.id)}
                      className="text-[10px] text-foreground/40 hover:text-foreground/60"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => report(post.id)}
                      className="text-[10px] text-foreground/30 hover:text-rose-500"
                    >
                      Report
                    </button>
                  </div>

                  {replies.length > 0 && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-border/20 pl-3">
                      {replies.map((reply) => (
                        <div key={reply.id}>
                          <p className="text-xs text-foreground/80">{reply.body}</p>
                          <div className="mt-0.5 flex items-center gap-2">
                            <p className="text-[9px] text-foreground/30">
                              Learner-{reply.user_id.slice(0, 4)} &middot; {timeAgo(reply.created_at)}
                            </p>
                            <button
                              onClick={() => upvote(reply.id)}
                              className={`text-[9px] ${reply.user_upvoted ? "text-accent" : "text-foreground/30"}`}
                            >
                              {reply.upvote_count > 0 ? `${reply.upvote_count} ` : ""}Upvote
                            </button>
                          </div>
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
