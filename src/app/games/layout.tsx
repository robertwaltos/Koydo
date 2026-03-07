import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Learning Games — 46+ Educational Games for All Ages | Koydo",
  description: "Play 46+ educational games spanning math, science, language arts, and more. Adaptive difficulty, real-time scoring, and progress tracking for ages 3 to adult.",
  openGraph: {
    title: "Learning Games — 46+ Educational Games | Koydo",
    description: "Play 46+ educational games spanning math, science, language arts, and more.",
  },
};

export default function GamesLayout({ children }: { children: ReactNode }) {
  return children;
}
