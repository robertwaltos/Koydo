"use client";

import { useId, type HTMLAttributes, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type AnalyticsDataPoint = {
  label: string;
  value: number;
};

type TrendDirection = "up" | "down" | "flat";

export type AnalyticsCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  metric: string;
  subtitle?: string;
  trend?: TrendDirection;
  trendLabel?: string;
  tone?: "slate" | "navy" | "forest" | "bronze";
  chartData?: AnalyticsDataPoint[];
  chartLabel?: string;
  chart?: ReactNode;
  footer?: ReactNode;
};

const TONE_STYLES: Record<NonNullable<AnalyticsCardProps["tone"]>, string> = {
  slate: "border-[#d8e0ea] bg-[#ffffff]",
  navy: "border-[#c8d6ea] bg-[#f9fbff]",
  forest: "border-[#ccdfd7] bg-[#f9fdfb]",
  bronze: "border-[#e6dacb] bg-[#fffaf5]",
};

const TREND_STYLES: Record<TrendDirection, string> = {
  up: "text-[#236c4f]",
  down: "text-[#b42318]",
  flat: "text-[#556579]",
};

export default function AnalyticsCard({
  title,
  metric,
  subtitle,
  trend = "flat",
  trendLabel,
  tone = "slate",
  chartData,
  chartLabel = "Score",
  chart,
  footer,
  className = "",
  ...props
}: AnalyticsCardProps) {
  const chartId = useId().replaceAll(":", "");
  const shouldRenderDefaultChart = !chart && Array.isArray(chartData) && chartData.length > 1;

  return (
    <section
      className={[
        "rounded-xl border p-4 shadow-[0_1px_2px_rgba(2,6,23,0.08),0_4px_14px_rgba(2,6,23,0.06)]",
        "font-[family-name:var(--font-display-sans)]",
        TONE_STYLES[tone],
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.08em] text-[#556579]">{title}</p>
          <p className="mt-1 text-[24px] font-semibold leading-none text-[#0f172a]">{metric}</p>
          {subtitle ? <p className="mt-1 text-[12px] text-[#556579]">{subtitle}</p> : null}
        </div>
        {trendLabel ? (
          <p className={["text-[12px] font-semibold", TREND_STYLES[trend]].join(" ")}>{trendLabel}</p>
        ) : null}
      </div>

      {chart ? <div className="mt-4 h-[120px]">{chart}</div> : null}

      {shouldRenderDefaultChart ? (
        <div className="mt-4 h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 6, right: 8, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id={`koydo-analytics-${chartId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2f6f56" stopOpacity={0.24} />
                  <stop offset="95%" stopColor="#2f6f56" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5ebf3" />
              <XAxis
                dataKey="label"
                tick={{ fill: "#66778b", fontSize: 10 }}
                tickLine={false}
                axisLine={{ stroke: "#d8e0ea" }}
              />
              <YAxis
                tick={{ fill: "#66778b", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <Tooltip
                contentStyle={{
                  border: "1px solid #d8e0ea",
                  borderRadius: 8,
                  boxShadow: "0 8px 22px rgba(2,6,23,0.15)",
                  fontSize: 12,
                }}
                formatter={(value: number | string) => [value, chartLabel]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2f6f56"
                strokeWidth={2}
                fill={`url(#koydo-analytics-${chartId})`}
                dot={{ r: 2, fill: "#2f6f56" }}
                activeDot={{ r: 4, fill: "#2f6f56" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : null}

      {footer ? <div className="mt-3 border-t border-[#e4eaf2] pt-3 text-[12px] text-[#425469]">{footer}</div> : null}
    </section>
  );
}
