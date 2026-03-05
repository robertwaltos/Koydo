"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PortalType = "parent" | "admin" | "investor" | "partner" | "teacher" | "school" | "support";

type PinGateProps = {
  portalType: PortalType;
  onVerified: () => void;
  onCancel: () => void;
};

const PIN_TTL_MS = 30 * 60 * 1000; // 30 minutes

function getSessionKey(portalType: PortalType) {
  return `portal_pin_verified_${portalType}`;
}

export function isPinVerified(portalType: PortalType): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(getSessionKey(portalType));
    if (!raw) return false;
    const expiry = Number(raw);
    if (Number.isNaN(expiry)) return false;
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

function storePinVerified(portalType: PortalType) {
  try {
    sessionStorage.setItem(getSessionKey(portalType), String(Date.now() + PIN_TTL_MS));
  } catch {
    // sessionStorage unavailable
  }
}

export default function PinGate({ portalType, onVerified, onCancel }: PinGateProps) {
  const [pin, setPin] = useState("");
  const [mode, setMode] = useState<"loading" | "set" | "verify">("loading");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const checkExisting = async () => {
      try {
        const response = await fetch("/api/account/pin/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ portalType, pin: "000000" }),
        });
        if (response.status === 404) {
          setMode("set");
        } else {
          setMode("verify");
        }
      } catch {
        setMode("set");
      }
    };
    void checkExisting();
  }, [portalType]);

  useEffect(() => {
    if (mode !== "loading") {
      inputRef.current?.focus();
    }
  }, [mode]);

  const handleSubmit = useCallback(async () => {
    if (pin.length < 6 || pin.length > 8) {
      setError("PIN must be 6-8 digits");
      return;
    }

    setBusy(true);
    setError(null);

    try {
      if (mode === "set") {
        const response = await fetch("/api/account/pin/set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ portalType, pin }),
        });
        if (!response.ok) {
          setError("Failed to set PIN. Try again.");
          setBusy(false);
          return;
        }
        storePinVerified(portalType);
        onVerified();
      } else {
        const response = await fetch("/api/account/pin/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ portalType, pin }),
        });
        const data = (await response.json()) as { verified?: boolean };
        if (data.verified) {
          storePinVerified(portalType);
          onVerified();
        } else {
          setError("Incorrect PIN. Try again.");
          setPin("");
          setBusy(false);
        }
      }
    } catch {
      setError("Network error. Try again.");
      setBusy(false);
    }
  }, [mode, pin, portalType, onVerified]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      void handleSubmit();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  if (mode === "loading") {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/55 backdrop-blur-sm">
        <div className="rounded-2xl border border-border/60 bg-white p-8 shadow-2xl dark:bg-slate-900">
          <p className="text-sm text-zinc-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-white p-6 shadow-2xl dark:bg-slate-900">
        <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-foreground">
          {mode === "set" ? "Set Portal PIN" : "Enter Portal PIN"}
        </h2>
        <p className="mb-4 text-sm text-zinc-500 dark:text-foreground/60">
          {mode === "set"
            ? `Create a 6-8 digit PIN to secure ${portalType} portal access.`
            : `Enter your PIN to access the ${portalType} portal.`}
        </p>

        <input
          ref={inputRef}
          type="password"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={8}
          value={pin}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
            setPin(digits);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder="6-8 digit PIN"
          className="ui-focus-ring mb-3 w-full rounded-xl border border-border bg-surface px-4 py-3 text-center text-2xl tracking-[0.3em] font-mono"
          disabled={busy}
          autoComplete="off"
        />

        {error ? <p className="mb-3 text-sm font-medium text-rose-600">{error}</p> : null}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-surface-muted dark:text-foreground"
            disabled={busy}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => void handleSubmit()}
            className="ui-focus-ring flex-1 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-foreground dark:text-background"
            disabled={busy || pin.length < 6}
          >
            {busy ? "..." : mode === "set" ? "Set PIN" : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
}
