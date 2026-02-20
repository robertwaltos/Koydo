export type PolicyType = "privacy" | "terms" | "refunds";

type PolicyDescriptor = {
  version: string;
  effectiveDate: string;
};

export const policyRegistry: Record<PolicyType, PolicyDescriptor> = {
  privacy: {
    version: "2026-02-20",
    effectiveDate: "2026-02-20",
  },
  terms: {
    version: "2026-02-20",
    effectiveDate: "2026-02-20",
  },
  refunds: {
    version: "2026-02-20",
    effectiveDate: "2026-02-20",
  },
};
