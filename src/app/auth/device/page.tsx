"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function DeviceLoginScreen() {
  const [deviceCode, setDeviceCode] = useState<string | null>(null);
  const [status, setStatus] = useState<"initializing" | "pending" | "approved" | "expired" | "error">("initializing");
  const router = useRouter();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const initDevice = async () => {
      try {
        const res = await fetch("/api/auth/device/init", { method: "POST" });
        if (!res.ok) throw new Error("Failed to initialize");

        const data = await res.json();
        setDeviceCode(data.deviceCode);
        setStatus("pending");

        // Start polling
        intervalId = setInterval(async () => {
          try {
            const pollRes = await fetch("/api/auth/device/poll", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                requestId: data.requestId,
                deviceCode: data.deviceCode,
              }),
            });
            const pollData = await pollRes.json();

            if (pollData.status === "approved") {
              clearInterval(intervalId);
              setStatus("approved");

              // We received the magic token, let's sign them in
              const supabase = createSupabaseBrowserClient();
              const { error } = await supabase.auth.verifyOtp({
                email: pollData.email,
                token_hash: pollData.token,
                type: "magiclink",
              });

              if (error) {
                setStatus("error");
              } else {
                router.push("/dashboard");
                router.refresh();
              }
            } else if (pollData.status === "expired" || pollData.status === "not_found") {
              clearInterval(intervalId);
              setStatus("expired");
            }
          } catch (e: any) {
            console.error("Polling error", e);
          }
        }, data.intervalMs || 3000);
      } catch {
        setStatus("error");
      }
    };

    initDevice();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [router]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <div className="w-full max-w-md rounded-3xl border border-border bg-white p-10 shadow-2xl dark:bg-zinc-900">
        <h1 className="mb-2 text-3xl font-extrabold text-zinc-900 dark:text-white">Ask an Adult</h1>

        {status === "initializing" && (
          <p className="mt-8 animate-pulse text-zinc-500">Generating secure code...</p>
        )}

        {status === "pending" && (
          <>
            <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
              Text this code to your parent or adult. They can enter it in their Koydo App to log you back in!
            </p>
            <div className="mb-8 flex items-center justify-center rounded-2xl bg-zinc-100 p-6 dark:bg-black">
              <span className="font-mono text-5xl font-black tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                {deviceCode}
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm font-medium text-zinc-500">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
              Waiting for approval...
            </div>
          </>
        )}

        {status === "approved" && (
          <div className="flex flex-col items-center text-emerald-600">
            <span className="mb-4 text-5xl">✨</span>
            <p className="text-xl font-bold">Approved! Logging you in...</p>
          </div>
        )}

        {status === "expired" && (
          <div className="text-rose-600">
            <p className="font-bold">Code Expired</p>
            <button onClick={() => window.location.reload()} className="mt-4 text-sm underline">Get a new code</button>
          </div>
        )}
      </div>
    </div>
  );
}

