"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import SoftCard from "@/app/components/ui/soft-card";

type DrawEvent = {
  type: "draw" | "clear";
  x?: number;
  y?: number;
  prevX?: number;
  prevY?: number;
  color: string;
  width: number;
  userId: string;
};

type Presence = {
  userId: string;
  displayName: string;
  cursorX: number;
  cursorY: number;
  color: string;
};

const COLORS = ["#1a1a1a", "#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];
const WIDTHS = [2, 4, 8];

const PRESENCE_COLORS = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

export default function CollaborativeWhiteboard({
  sessionId,
  userId,
  displayName,
}: {
  sessionId: string;
  userId: string;
  displayName: string;
}) {
  const { allowed } = useFeature("collaborative_whiteboard");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const [color, setColor] = useState(COLORS[0]);
  const [width, setWidth] = useState(WIDTHS[0]);
  const [remoteCursors, setRemoteCursors] = useState<Presence[]>([]);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const myColor = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) hash = (hash * 31 + userId.charCodeAt(i)) | 0;
    return PRESENCE_COLORS[Math.abs(hash) % PRESENCE_COLORS.length];
  }, [userId]);

  const drawLine = useCallback((ctx: CanvasRenderingContext2D, event: DrawEvent) => {
    if (event.type === "clear") {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      return;
    }
    if (event.prevX == null || event.prevY == null || event.x == null || event.y == null) return;
    ctx.beginPath();
    ctx.strokeStyle = event.color;
    ctx.lineWidth = event.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(event.prevX, event.prevY);
    ctx.lineTo(event.x, event.y);
    ctx.stroke();
  }, []);

  // Realtime channel
  useEffect(() => {
    if (!allowed) return;

    const channel = supabase
      .channel(`whiteboard-${sessionId}`)
      .on("broadcast", { event: "draw" }, ({ payload }) => {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && payload.userId !== userId) {
          drawLine(ctx, payload as DrawEvent);
        }
      })
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const cursors: Presence[] = [];
        for (const [, presences] of Object.entries(state)) {
          for (const p of presences as unknown as Presence[]) {
            if (p.userId !== userId) cursors.push(p);
          }
        }
        setRemoteCursors(cursors);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({ userId, displayName, cursorX: 0, cursorY: 0, color: myColor });
        }
      });

    return () => { supabase.removeChannel(channel); };
  }, [sessionId, userId, displayName, allowed, supabase, drawLine, myColor]);

  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    lastPos.current = getCanvasPos(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const pos = getCanvasPos(e);
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const event: DrawEvent = {
      type: "draw",
      x: pos.x,
      y: pos.y,
      prevX: lastPos.current.x,
      prevY: lastPos.current.y,
      color,
      width,
      userId,
    };

    drawLine(ctx, event);
    supabase.channel(`whiteboard-${sessionId}`).send({
      type: "broadcast",
      event: "draw",
      payload: event,
    });

    lastPos.current = pos;
  };

  const handleMouseUp = () => { isDrawing.current = false; };

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    supabase.channel(`whiteboard-${sessionId}`).send({
      type: "broadcast",
      event: "draw",
      payload: { type: "clear", color, width, userId } as DrawEvent,
    });
  };

  if (!allowed) return null;

  return (
    <SoftCard className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Collaborative Whiteboard</h3>
        <div className="flex items-center gap-2">
          {/* Presence indicators */}
          {remoteCursors.map((c) => (
            <div
              key={c.userId}
              className="h-6 w-6 rounded-full border-2 border-white text-[8px] font-bold text-white flex items-center justify-center"
              style={{ backgroundColor: c.color }}
              title={c.displayName}
            >
              {c.displayName.charAt(0)}
            </div>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`h-6 w-6 rounded-full border-2 ${color === c ? "border-zinc-900 dark:border-white" : "border-transparent"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {WIDTHS.map((w) => (
            <button
              key={w}
              onClick={() => setWidth(w)}
              className={`rounded-lg border px-2 py-1 text-xs ${width === w ? "border-accent bg-accent/10" : "border-border"}`}
            >
              {w}px
            </button>
          ))}
        </div>
        <button onClick={clearCanvas} className="text-xs text-rose-500 hover:text-rose-700">Clear</button>
      </div>

      {/* Canvas */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-white">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full cursor-crosshair"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        {/* Remote cursors */}
        {remoteCursors.map((c) => (
          <div
            key={c.userId}
            className="pointer-events-none absolute"
            style={{ left: c.cursorX, top: c.cursorY }}
          >
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: c.color }} />
            <span className="ml-2 rounded bg-zinc-900 px-1 text-[9px] text-white">{c.displayName}</span>
          </div>
        ))}
      </div>
    </SoftCard>
  );
}
