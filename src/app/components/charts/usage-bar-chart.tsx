"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type UsageBarDataPoint = {
  day: string;
  conversations: number;
  messages?: number;
};

type UsageBarChartProps = {
  data: UsageBarDataPoint[];
  showMessages?: boolean;
};

export default function UsageBarChart({
  data,
  showMessages = false,
}: UsageBarChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-[240px] items-center justify-center text-[13px] text-[#697386]">
        No AI tutor usage data yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 11, fill: "#697386" }}
          tickLine={false}
          axisLine={{ stroke: "#f0f0f5" }}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#697386" }}
          tickLine={false}
          axisLine={false}
          width={35}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #e3e8ee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
        />
        <Bar
          dataKey="conversations"
          fill="#8b5cf6"
          radius={[4, 4, 0, 0]}
          name="Conversations"
          maxBarSize={40}
        />
        {showMessages && (
          <Bar
            dataKey="messages"
            fill="#c4b5fd"
            radius={[4, 4, 0, 0]}
            name="Messages"
            maxBarSize={40}
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
