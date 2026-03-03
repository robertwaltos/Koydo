"use client";

import { useMemo } from "react";

export type HeatmapDay = {
  date: string; // YYYY-MM-DD
  count: number;
};

type ActivityHeatmapProps = {
  data: HeatmapDay[];
  /** Number of weeks to display (default: 13 = ~3 months) */
  weeks?: number;
};

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function getIntensity(count: number, max: number): string {
  if (count === 0) return "bg-[#ebedf0]";
  const ratio = count / Math.max(max, 1);
  if (ratio <= 0.25) return "bg-[#9be9a8]";
  if (ratio <= 0.5) return "bg-[#40c463]";
  if (ratio <= 0.75) return "bg-[#30a14e]";
  return "bg-[#216e39]";
}

export default function ActivityHeatmap({
  data,
  weeks = 13,
}: ActivityHeatmapProps) {
  const { grid, monthLabels, maxCount } = useMemo(() => {
    const lookup = new Map(data.map((d) => [d.date, d.count]));
    const today = new Date();
    const totalDays = weeks * 7;

    // Start from the beginning of the week (Sunday) N weeks ago
    const start = new Date(today);
    start.setDate(start.getDate() - totalDays + 1);
    // Align to Sunday
    start.setDate(start.getDate() - start.getDay());

    const cells: { date: string; count: number; dayOfWeek: number; weekIndex: number }[] = [];
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;
    let maxVal = 0;

    const cursor = new Date(start);
    let weekIdx = 0;

    while (cursor <= today) {
      const dayOfWeek = cursor.getDay();
      if (dayOfWeek === 0 && cells.length > 0) weekIdx++;

      const key = cursor.toISOString().split("T")[0];
      const count = lookup.get(key) ?? 0;
      if (count > maxVal) maxVal = count;

      cells.push({ date: key, count, dayOfWeek, weekIndex: weekIdx });

      const month = cursor.getMonth();
      if (month !== lastMonth) {
        const monthName = cursor.toLocaleString("en", { month: "short" });
        months.push({ label: monthName, weekIndex: weekIdx });
        lastMonth = month;
      }

      cursor.setDate(cursor.getDate() + 1);
    }

    // Organize into weeks
    const weekCount = weekIdx + 1;
    const gridArr: (typeof cells[0] | null)[][] = Array.from({ length: weekCount }, () =>
      Array.from({ length: 7 }, () => null),
    );

    for (const cell of cells) {
      gridArr[cell.weekIndex][cell.dayOfWeek] = cell;
    }

    return { grid: gridArr, monthLabels: months, maxCount: maxVal };
  }, [data, weeks]);

  return (
    <div className="overflow-x-auto">
      {/* Month labels */}
      <div className="mb-1 flex" style={{ paddingLeft: 32 }}>
        {monthLabels.map((m, i) => (
          <div
            key={`${m.label}-${i}`}
            className="text-[10px] text-[#697386]"
            style={{
              position: "relative",
              left: m.weekIndex * 14,
              marginRight: i < monthLabels.length - 1 ? 0 : "auto",
            }}
          >
            {/* Only show if there's enough space */}
            {i === 0 ||
            (monthLabels[i - 1] && m.weekIndex - monthLabels[i - 1].weekIndex >= 2)
              ? m.label
              : ""}
          </div>
        ))}
      </div>

      <div className="flex gap-0.5">
        {/* Day-of-week labels */}
        <div className="mr-1 flex flex-col gap-0.5">
          {DAY_LABELS.map((label, i) => (
            <div
              key={i}
              className="flex h-[12px] w-[24px] items-center text-[9px] text-[#697386]"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Grid */}
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((cell, di) => (
              <div
                key={di}
                className={`h-[12px] w-[12px] rounded-[2px] ${
                  cell ? getIntensity(cell.count, maxCount) : "bg-transparent"
                }`}
                title={
                  cell
                    ? `${cell.date}: ${cell.count} session${cell.count !== 1 ? "s" : ""}`
                    : undefined
                }
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-1 text-[10px] text-[#697386]">
        <span>Less</span>
        <div className="h-[10px] w-[10px] rounded-[2px] bg-[#ebedf0]" />
        <div className="h-[10px] w-[10px] rounded-[2px] bg-[#9be9a8]" />
        <div className="h-[10px] w-[10px] rounded-[2px] bg-[#40c463]" />
        <div className="h-[10px] w-[10px] rounded-[2px] bg-[#30a14e]" />
        <div className="h-[10px] w-[10px] rounded-[2px] bg-[#216e39]" />
        <span>More</span>
      </div>
    </div>
  );
}
