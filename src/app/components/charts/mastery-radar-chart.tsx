"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export type SkillDataPoint = {
  skill: string;
  score: number;
  fullMark?: number;
};

type MasteryRadarChartProps = {
  data: SkillDataPoint[];
  /** Optional second data series for comparison (e.g. peer average) */
  compareData?: SkillDataPoint[];
  compareLabel?: string;
};

export default function MasteryRadarChart({
  data,
  compareData,
  compareLabel = "Average",
}: MasteryRadarChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-[280px] items-center justify-center text-[13px] text-[#697386]">
        No skill data yet
      </div>
    );
  }

  // Merge data with comparison if available
  const merged = data.map((d, i) => ({
    skill: d.skill,
    score: d.score,
    fullMark: d.fullMark ?? 100,
    compare: compareData?.[i]?.score ?? 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart cx="50%" cy="50%" outerRadius="72%" data={merged}>
        <PolarGrid stroke="#e3e8ee" />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fontSize: 11, fill: "#697386" }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: "#697386" }}
          tickCount={5}
        />
        <Radar
          name="Mastery"
          dataKey="score"
          stroke="#635bff"
          fill="#635bff"
          fillOpacity={0.25}
          strokeWidth={2}
        />
        {compareData && (
          <Radar
            name={compareLabel}
            dataKey="compare"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            fillOpacity={0.1}
            strokeWidth={1.5}
            strokeDasharray="4 4"
          />
        )}
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #e3e8ee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter={((value: number) => [`${value}%`, "Score"]) as any}
        />
        {compareData && (
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11 }}
          />
        )}
      </RadarChart>
    </ResponsiveContainer>
  );
}
