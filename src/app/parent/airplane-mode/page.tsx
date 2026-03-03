/**
 * Parent Portal — Airplane Mode settings page.
 *
 * Allows parents to:
 * - See current airplane mode status
 * - Download content for offline learning (with data warning)
 * - Choose content duration (2–12 hours)
 * - Disable airplane mode and clear cached content
 */

"use client";

import AirplaneModeCard from "@/app/components/airplane-mode/AirplaneModeCard";

export default function AirplaneModePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-[#2f2942]">
          ✈️ Airplane Mode
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Download lessons so your child can learn without an internet connection.
        </p>
      </div>

      {/* Main card */}
      <AirplaneModeCard />

      {/* Info section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="mb-3 font-semibold text-[#2f2942]">
          How it works
        </h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-500">●</span>
            <span>
              <strong>Download before you go.</strong> While connected to Wi-Fi,
              tap &quot;Prepare for Offline&quot; to download lessons, flashcards,
              and quizzes to the device.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-500">●</span>
            <span>
              <strong>Learn anywhere.</strong> Your child can study downloaded
              content on flights, road trips, or anywhere without internet.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-500">●</span>
            <span>
              <strong>Progress syncs automatically.</strong> When the device goes
              back online, any progress made offline is synced to your child&apos;s
              account.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-500">●</span>
            <span>
              <strong>Content stays fresh.</strong> Downloaded content expires
              after 30 days. You can refresh it anytime while online.
            </span>
          </li>
        </ul>
      </div>

      {/* Data usage notice */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <span className="text-lg">💡</span>
          <div>
            <h4 className="text-sm font-semibold text-blue-800">
              Data &amp; Storage Tips
            </h4>
            <ul className="mt-1 space-y-1 text-xs text-blue-700">
              <li>
                • 6 hours of content typically uses less than 50 MB of storage
              </li>
              <li>
                • We recommend downloading over Wi-Fi to avoid mobile data charges
              </li>
              <li>
                • You can disable Airplane Mode anytime to free up device storage
              </li>
              <li>
                • Only one content pack is stored at a time — downloading new
                content replaces the previous pack
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Premium callout */}
      <div className="rounded-2xl border border-[#c2185b]/20 bg-[#c2185b]/5 p-5">
        <div className="flex items-start gap-3">
          <span className="text-lg">⭐</span>
          <div>
            <h4 className="text-sm font-semibold text-[#c2185b]">
              Premium Feature
            </h4>
            <p className="mt-1 text-xs text-[#c2185b]/80">
              Airplane Mode is included with all paid plans. Individual plans
              start at $5.99/month. Family plans (up to 6 learners) start at
              $14.99/month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
