"use client";

import { useState } from "react";
import { Share2, Copy, Check, Sparkles } from "lucide-react";

export function ShareBragSheetButton({ studentId, studentName }: { studentId: string, studentName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "generating" | "success" | "error">("idle");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const generateLink = async () => {
    setStatus("generating");
    try {
      const res = await fetch("/api/parent/brag-sheet/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentProfileId: studentId, validDays: 7 })
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setLink(data.url);
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-[#f6f9fc] px-3 py-1.5 text-[12px] font-semibold text-indigo-600 hover:bg-indigo-50 dark:border-zinc-800 dark:bg-zinc-900 flex items-center gap-1.5"
      >
        <Share2 className="h-3 w-3" />
        Brag Sheet
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 dark:border dark:border-border text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <Sparkles className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            
            <h2 className="mb-2 text-2xl font-bold">Share the Magic</h2>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              Generate a secure, read-only link to share {studentName}'s recent learning milestones with grandparents or family. The link expires in 7 days.
            </p>

            {status === "idle" || status === "error" ? (
              <>
                <button
                  onClick={generateLink}
                  className="w-full rounded-xl bg-indigo-600 p-3.5 font-bold text-white shadow-md hover:bg-indigo-700 transition"
                >
                  Create Brag Sheet
                </button>
                {status === "error" && <p className="mt-3 text-sm text-red-500">Failed to generate link. Try again.</p>}
              </>
            ) : status === "generating" ? (
              <div className="flex h-12 items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-700">
                  <input 
                    type="text" 
                    readOnly 
                    value={link} 
                    className="w-full bg-zinc-50 p-3 text-sm text-zinc-600 outline-none dark:bg-black dark:text-zinc-300"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="flex h-full items-center justify-center bg-zinc-100 px-4 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                  >
                    {copied ? <Check className="h-5 w-5 text-emerald-600" /> : <Copy className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />}
                  </button>
                </div>
                <p className="text-xs text-emerald-600 font-medium">Link generated successfully!</p>
              </div>
            )}

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 text-sm font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
