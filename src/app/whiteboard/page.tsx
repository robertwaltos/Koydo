"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Whiteboard = { id: string; title: string; module_id: string | null; updated_at: string };
type CanvasElement = { type: "line"; points: number[][]; color: string; width: number };
type CanvasData = { elements: CanvasElement[]; version: number };

export default function WhiteboardPage() {
  const [boards, setBoards] = useState<Whiteboard[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [canvasData, setCanvasData] = useState<CanvasData>({ elements: [], version: 1 });
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(3);
  const [saving, setSaving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentPath = useRef<number[][]>([]);

  useEffect(() => {
    fetch("/api/whiteboard")
      .then((r) => r.json())
      .then((d) => setBoards(d.whiteboards ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const el of canvasData.elements) {
      if (el.type === "line" && el.points.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = el.color;
        ctx.lineWidth = el.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(el.points[0][0], el.points[0][1]);
        for (let i = 1; i < el.points.length; i++) {
          ctx.lineTo(el.points[i][0], el.points[i][1]);
        }
        ctx.stroke();
      }
    }
  }, [canvasData]);

  useEffect(() => { redraw(); }, [redraw]);

  const loadBoard = async (id: string) => {
    const res = await fetch("/api/whiteboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "load", id }),
    });
    const data = await res.json();
    if (data.whiteboard) {
      setActiveId(id);
      try {
        setCanvasData(JSON.parse(data.whiteboard.canvas_data));
      } catch {
        setCanvasData({ elements: [], version: 1 });
      }
    }
  };

  const createBoard = async () => {
    const res = await fetch("/api/whiteboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "create", title: `Whiteboard ${new Date().toLocaleDateString()}` }),
    });
    const data = await res.json();
    if (data.whiteboard) {
      setActiveId(data.whiteboard.id);
      setCanvasData({ elements: [], version: 1 });
    }
  };

  const saveBoard = async () => {
    if (!activeId) return;
    setSaving(true);
    await fetch("/api/whiteboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "save", id: activeId, canvasData }),
    });
    setSaving(false);
  };

  const clearCanvas = () => {
    setCanvasData({ elements: [], version: 1 });
  };

  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setDrawing(true);
    currentPath.current = [getPos(e)];
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const pos = getPos(e);
    currentPath.current.push(pos);

    // Draw live
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx && currentPath.current.length > 1) {
      const pts = currentPath.current;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.moveTo(pts[pts.length - 2][0], pts[pts.length - 2][1]);
      ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
      ctx.stroke();
    }
  };

  const onMouseUp = () => {
    if (!drawing) return;
    setDrawing(false);
    if (currentPath.current.length > 1) {
      setCanvasData((prev) => ({
        ...prev,
        elements: [...prev.elements, { type: "line", points: currentPath.current, color, width: lineWidth }],
      }));
    }
    currentPath.current = [];
  };

  const COLORS = ["#000000", "#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#a855f7", "#ec4899"];

  if (activeId) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">Whiteboard</h2>
          <div className="flex items-center gap-2">
            <button type="button" onClick={saveBoard} disabled={saving} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white disabled:opacity-40">
              {saving ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={clearCanvas} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/60">
              Clear
            </button>
            <button type="button" onClick={() => { saveBoard(); setActiveId(null); }} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/60">
              Back
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-surface p-2">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`h-7 w-7 rounded-full border-2 transition ${color === c ? "ring-2 ring-accent ring-offset-2" : "border-border/40"}`}
              style={{ backgroundColor: c }}
            />
          ))}
          <span className="mx-2 text-border">|</span>
          <select
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            className="rounded border border-border bg-surface-muted px-2 py-1 text-xs"
          >
            <option value={1}>Thin</option>
            <option value={3}>Medium</option>
            <option value={6}>Thick</option>
            <option value={10}>Extra Thick</option>
          </select>
        </div>

        <canvas
          ref={canvasRef}
          width={1000}
          height={600}
          className="w-full rounded-xl border border-border bg-white cursor-crosshair"
          style={{ aspectRatio: "1000/600" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        />
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Whiteboard</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Interactive Whiteboard</h1>
        <button type="button" onClick={createBoard} className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white">
          New Whiteboard
        </button>
      </div>
      <p className="text-sm text-foreground/60">
        Draw, sketch, and solve problems visually. Perfect for math, science diagrams, and brainstorming.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : boards.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">No whiteboards yet. Create one to start drawing!</p>
        </SoftCard>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((b) => (
            <SoftCard
              key={b.id}
              className="cursor-pointer p-5 transition hover:border-accent/30 hover:shadow-md"
              onClick={() => loadBoard(b.id)}
            >
              <h3 className="text-sm font-bold text-foreground">{b.title}</h3>
              <p className="mt-1 text-[11px] text-foreground/40">
                Updated {new Date(b.updated_at).toLocaleDateString()}
              </p>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
