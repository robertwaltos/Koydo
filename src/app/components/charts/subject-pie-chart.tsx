"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export type SubjectSlice = {
  name: string;
  value: number;
  color?: string;
};

type SubjectPieChartProps = {
  data: SubjectSlice[];
};

const DEFAULT_COLORS = [
  "#635bff", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444",
  "#8b5cf6", "#ec4899", "#14b8a6", "#f97316", "#6366f1",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLabel = (props: any) => {
  const { name, percent } = props as { name: string; percent: number };
  if (percent < 0.05) return null;
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

export default function SubjectPieChart({ data }: SubjectPieChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-[260px] items-center justify-center text-[13px] text-[#697386]">
        No subject data yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
          label={renderLabel}
          labelLine={{ stroke: "#c4cdd8", strokeWidth: 1 }}
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={entry.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              strokeWidth={0}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #e3e8ee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter={((value: number) => [`${value} min`, "Time"]) as any}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: 11 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
