export type DomainScoreSnapshot = {
  correct: number;
  total: number;
  score: number;
};

const remediationByDomainKeyword: Array<{ keyword: string; modules: string[] }> = [
  { keyword: "people", modules: ["project-management-101", "language-arts-101"] },
  { keyword: "process", modules: ["project-management-201"] },
  { keyword: "security", modules: ["cybersecurity-101", "network-engineering-101"] },
  { keyword: "network", modules: ["network-engineering-101"] },
  { keyword: "cloud", modules: ["cloud-computing-101"] },
  { keyword: "anatomy", modules: ["biology-101", "medicine-101"] },
  { keyword: "pathology", modules: ["medicine-201"] },
  { keyword: "math", modules: ["basic-math-101", "advanced-math-201"] },
];

export function buildDiagnosis(domainBreakdown: Record<string, DomainScoreSnapshot>) {
  const weakDomains = Object.entries(domainBreakdown)
    .filter(([, entry]) => entry.score < 70)
    .map(([domain]) => domain);

  const remediationModules = new Set<string>();
  for (const domain of weakDomains) {
    const normalized = domain.toLowerCase();
    for (const mapping of remediationByDomainKeyword) {
      if (normalized.includes(mapping.keyword)) {
        for (const moduleId of mapping.modules) remediationModules.add(moduleId);
      }
    }
  }

  return {
    weakDomains,
    remediationModules: [...remediationModules].slice(0, 6),
  };
}
