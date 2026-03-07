import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Career Pathways — Explore Future Careers | Koydo",
  description: "Explore career pathways with salary ranges, in-demand skills, and related learning modules. Plan your educational journey toward your dream career.",
};

export default function CareerPathwaysLayout({ children }: { children: ReactNode }) {
  return children;
}
