"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type ScoreDataPoint = {
  date: string;
  score: number;
};

type ScoreAreaChartProps = {
  data: ScoreDataPoint[];
  color?: string;
  label?: string;
};

export default function ScoreAreaChart({
  data,
  color = "#10b981",
  label = "Score",
}: ScoreAreaChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-[240px] items-center justify-center text-[13px] text-[#697386]">
        No score data yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
        <defs>
          <linearGradient id={`scoreGrad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: "#697386" }}
          tickLine={false}
          axisLine={{ stroke: "#f0f0f5" }}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: "#697386" }}
          tickLine={false}
          axisLine={false}
          width={35}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #e3e8ee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter={((value: number) => [`${value}%`, label]) as any}
        />
        <Area
          type="monotone"
          dataKey="score"
          stroke={color}
          strokeWidth={2}
          fill={`url(#scoreGrad-${color.replace("#", "")})`}
          dot={{ r: 3, fill: color }}
          activeDot={{ r: 5, strokeWidth: 0, fill: color }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
