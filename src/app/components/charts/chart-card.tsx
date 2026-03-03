"use client";

import type { ReactNode } from "react";

type ChartCardProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  loading?: boolean;
  minHeight?: number;
};

export default function ChartCard({
  title,
  subtitle,
  actions,
  children,
  className = "",
  loading = false,
  minHeight = 260,
}: ChartCardProps) {
  return (
    <div
      className={`rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm ${className}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[14px] font-semibold text-[#1a1f36]">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 text-[12px] text-[#697386]">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {loading ? (
        <div
          className="flex items-center justify-center"
          style={{ minHeight }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#e3e8ee] border-t-[#635bff]" />
            <p className="text-[12px] text-[#697386]">Loading data…</p>
          </div>
        </div>
      ) : (
        <div style={{ minHeight }}>{children}</div>
      )}
    </div>
  );
}
