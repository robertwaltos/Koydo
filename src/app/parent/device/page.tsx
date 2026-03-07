"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveDeviceScreen() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 8) return;
    
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/device/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceCode: code }),
      });
      
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to approve device.");
      }

      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setErrorMessage(e.message);
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <span className="text-6xl mb-4">✅</span>
        <h1 className="text-3xl font-bold mb-2">Device Approved</h1>
        <p className="text-zinc-600 dark:text-zinc-400">The child's device will now log in automatically.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8">
      <div className="w-full max-w-md rounded-3xl border border-border bg-white p-8 shadow-xl dark:bg-zinc-900">
        <h1 className="mb-2 text-2xl font-bold">Approve Child Device</h1>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Enter the 8-character code shown on your child's screen to log them back in securely.
        </p>

        <form onSubmit={handleApprove} className="flex flex-col gap-4">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              const val = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, "");
              // Auto-format with dash
              if (val.length === 4 && code.length === 3) {
                setCode(val + "-");
              } else {
                setCode(val);
              }
            }}
            placeholder="ABCD-1234"
            maxLength={9}
            className="w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 p-4 text-center font-mono text-3xl font-black tracking-widest transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-black dark:focus:border-indigo-500"
          />

          {status === "error" && (
            <p className="text-center text-sm font-medium text-rose-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={code.length < 8 || status === "submitting"}
            className="mt-4 flex min-h-[3.5rem] w-full items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {status === "submitting" ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              "Approve Device"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
