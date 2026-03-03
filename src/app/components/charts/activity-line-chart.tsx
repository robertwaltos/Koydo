"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export type ActivityDataPoint = {
  date: string;
  sessions: number;
  minutes: number;
};

type ActivityLineChartProps = {
  data: ActivityDataPoint[];
  showMinutes?: boolean;
};

const COLORS = {
  sessions: "#635bff",
  minutes: "#0ea5e9",
  grid: "#f0f0f5",
  axis: "#697386",
};

export default function ActivityLineChart({
  data,
  showMinutes = true,
}: ActivityLineChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-[240px] items-center justify-center text-[13px] text-[#697386]">
        No activity data yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: COLORS.axis }}
          tickLine={false}
          axisLine={{ stroke: COLORS.grid }}
        />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 11, fill: COLORS.axis }}
          tickLine={false}
          axisLine={false}
          width={35}
        />
        {showMinutes && (
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 11, fill: COLORS.axis }}
            tickLine={false}
            axisLine={false}
            width={35}
          />
        )}
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #e3e8ee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="sessions"
          stroke={COLORS.sessions}
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          name="Sessions"
        />
        {showMinutes && (
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="minutes"
            stroke={COLORS.minutes}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
            name="Minutes"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
