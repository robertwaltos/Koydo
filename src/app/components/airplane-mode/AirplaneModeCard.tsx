/**
 * AirplaneModeCard — Download UI with data-size warning modal.
 *
 * Shows:
 * 1. Current airplane mode status (ready / disabled / expired)
 * 2. "Prepare for Offline" button that triggers size estimation
 * 3. Data-size confirmation dialog (parent warning)
 * 4. Download progress bar
 * 5. Disable / refresh controls
 */

"use client";

import { useState } from "react";
import { useAirplaneMode } from "@/hooks/useAirplaneMode";

// ── Main Component ─────────────────────────────────────────────────

export default function AirplaneModeCard() {
  const airplane = useAirplaneMode();
  const [maxHours, setMaxHours] = useState(6);

  // ── Render States ────────────────────────────────────────────────

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">✈️</span>
        <div>
          <h3 className="text-lg font-semibold text-[#2f2942]">
            Airplane Mode
          </h3>
          <p className="text-sm text-slate-500">
            Download lessons for offline learning
          </p>
        </div>
        {airplane.isReady && (
          <span className="ml-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            Ready
          </span>
        )}
        {airplane.state?.enabled && !airplane.isReady && (
          <span className="ml-auto rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Expired
          </span>
        )}
      </div>

      {/* Network indicator */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <span
          className={`h-2 w-2 rounded-full ${airplane.isOnline ? "bg-emerald-500" : "bg-red-500"}`}
        />
        <span className="text-slate-600">
          {airplane.isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {/* Premium required notice */}
      {airplane.isPremiumRequired && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-800">
            ⭐ Airplane Mode is available on paid plans only.
          </p>
          <p className="mt-1 text-xs text-amber-600">
            Upgrade to Individual ($5.99/mo) or Family ($14.99/mo) to unlock
            offline learning.
          </p>
        </div>
      )}

      {/* Status: Airplane mode active */}
      {airplane.isReady && airplane.state && (
        <div className="mb-4 space-y-3">
          <div className="rounded-xl bg-emerald-50 p-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-500">Lessons available</span>
                <p className="font-semibold text-[#2f2942]">
                  {airplane.state.totalLessons}
                </p>
              </div>
              <div>
                <span className="text-slate-500">Duration</span>
                <p className="font-semibold text-[#2f2942]">
                  ~{Math.round(airplane.state.estimatedMinutes / 60)}h{" "}
                  {airplane.state.estimatedMinutes % 60}m
                </p>
              </div>
              <div>
                <span className="text-slate-500">Storage used</span>
                <p className="font-semibold text-[#2f2942]">
                  {airplane.state.sizeLabel}
                </p>
              </div>
              <div>
                <span className="text-slate-500">Expires</span>
                <p className="font-semibold text-[#2f2942]">
                  {airplane.state.expiresAt
                    ? new Date(airplane.state.expiresAt).toLocaleDateString()
                    : "—"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => airplane.requestEstimate({ maxHours })}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              ↻ Refresh Content
            </button>
            <button
              onClick={() => airplane.disable()}
              className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              Disable
            </button>
          </div>
        </div>
      )}

      {/* Status: Not active — show download option */}
      {!airplane.isReady && airplane.phase === "idle" && !airplane.isPremiumRequired && (
        <div className="space-y-4">
          {/* Duration selector */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Content duration
            </label>
            <select
              value={maxHours}
              onChange={(e) => setMaxHours(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#2f2942] focus:border-[#c2185b] focus:outline-none focus:ring-1 focus:ring-[#c2185b]"
            >
              <option value={2}>~2 hours</option>
              <option value={4}>~4 hours</option>
              <option value={6}>~6 hours (recommended)</option>
              <option value={8}>~8 hours</option>
              <option value={12}>~12 hours</option>
            </select>
          </div>

          <button
            onClick={() => airplane.requestEstimate({ maxHours })}
            disabled={!airplane.isOnline}
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {airplane.isOnline
              ? "✈️ Prepare for Offline"
              : "📡 Go online to download"}
          </button>

          <p className="text-center text-xs text-slate-400">
            Downloads lessons, flashcards, and quizzes for offline use.
            <br />
            Content expires after 30 days and can be refreshed anytime.
          </p>
        </div>
      )}

      {/* Estimating spinner */}
      {airplane.phase === "estimating" && (
        <div className="flex items-center justify-center gap-3 py-8">
          <Spinner />
          <span className="text-sm text-slate-600">
            Calculating download size…
          </span>
        </div>
      )}

      {/* Data-size confirmation dialog (parent warning) */}
      {airplane.phase === "confirming" && airplane.estimate && (
        <DataSizeWarning
          estimate={airplane.estimate}
          maxHours={maxHours}
          onConfirm={() => airplane.confirmDownload({ maxHours })}
          onCancel={() => airplane.cancelDownload()}
        />
      )}

      {/* Download progress */}
      {(airplane.phase === "downloading" || airplane.phase === "storing") && (
        <div className="space-y-3 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">
              {airplane.phase === "downloading"
                ? "Downloading content…"
                : "Saving to device…"}
            </span>
            <span className="font-medium text-[#2f2942]">
              {airplane.progress}%
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${airplane.progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-slate-400">
            Please keep the app open during download.
          </p>
        </div>
      )}

      {/* Download complete */}
      {airplane.phase === "complete" && (
        <div className="py-6 text-center">
          <span className="mb-2 block text-3xl">✅</span>
          <p className="font-semibold text-emerald-700">
            Airplane Mode is ready!
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Your child can now learn offline.
          </p>
        </div>
      )}

      {/* Error state */}
      {airplane.phase === "error" && airplane.errorMessage && !airplane.isPremiumRequired && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            {airplane.errorMessage}
          </p>
          <button
            onClick={() => airplane.requestEstimate({ maxHours })}
            className="mt-2 text-sm font-medium text-red-600 underline"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

// ── Data Size Warning Modal ────────────────────────────────────────

function DataSizeWarning({
  estimate,
  maxHours,
  onConfirm,
  onCancel,
}: {
  estimate: {
    totalModules: number;
    totalLessons: number;
    estimatedDurationMinutes: number;
    estimatedSizeBytes: number;
    estimatedSizeLabel: string;
    subjects: string[];
  };
  maxHours: number;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const hours = Math.floor(estimate.estimatedDurationMinutes / 60);
  const mins = estimate.estimatedDurationMinutes % 60;
  const isMobile =
    typeof navigator !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          <h4 className="font-semibold text-amber-800">
            Data Download Required
          </h4>
        </div>

        <p className="mb-3 text-sm text-amber-700">
          Downloading {maxHours} hours of offline content will use approximately{" "}
          <strong>{estimate.estimatedSizeLabel}</strong> of{" "}
          {isMobile ? "mobile data or Wi-Fi" : "storage"}.
        </p>

        <div className="rounded-lg bg-white/80 p-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-slate-500">Modules</div>
            <div className="font-medium text-[#2f2942]">
              {estimate.totalModules}
            </div>
            <div className="text-slate-500">Lessons</div>
            <div className="font-medium text-[#2f2942]">
              {estimate.totalLessons}
            </div>
            <div className="text-slate-500">Duration</div>
            <div className="font-medium text-[#2f2942]">
              ~{hours}h {mins}m
            </div>
            <div className="text-slate-500">Download size</div>
            <div className="font-medium text-[#2f2942]">
              {estimate.estimatedSizeLabel}
            </div>
            <div className="text-slate-500">Subjects</div>
            <div className="font-medium text-[#2f2942]">
              {estimate.subjects.length > 0
                ? estimate.subjects.join(", ")
                : "All subjects"}
            </div>
          </div>
        </div>

        {isMobile && (
          <p className="mt-3 text-xs text-amber-600">
            💡 We recommend using Wi-Fi for this download to avoid mobile data
            charges.
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
        >
          Download Now
        </button>
      </div>
    </div>
  );
}

// ── Spinner ────────────────────────────────────────────────────────

function Spinner() {
  return (
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-emerald-600" />
  );
}
