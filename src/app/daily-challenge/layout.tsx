import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Daily Challenge — Today's Learning Quest | Koydo",
  description: "Take on today's daily learning challenge. Earn points, streak bonuses, and rewards while mastering new concepts every day.",
};

export default function DailyChallengeLayout({ children }: { children: ReactNode }) {
  return children;
}
