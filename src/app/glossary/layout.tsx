import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Glossary — Key Terms & Definitions | Koydo",
  description: "Browse the Koydo glossary for definitions of key terms across 60+ subjects including math, science, finance, AI, and more.",
};

export default function GlossaryLayout({ children }: { children: ReactNode }) {
  return children;
}
