export type ComplianceItem = {
  id: string;
  title: string;
  rationale: string;
  status: "implemented" | "partial" | "pending";
};

export const appStoreComplianceChecklist: ComplianceItem[] = [
  {
    id: "privacy-policy",
    title: "Privacy policy and data use disclosure",
    rationale: "Required for app review and user trust across major app stores.",
    status: "implemented",
  },
  {
    id: "account-deletion",
    title: "In-app account deletion path",
    rationale: "Required by major stores when account creation is supported.",
    status: "implemented",
  },
  {
    id: "subscription-terms",
    title: "Subscription terms and renewal disclosure",
    rationale: "Required to avoid billing policy violations.",
    status: "implemented",
  },
  {
    id: "parental-controls",
    title: "Child safety and parental consent controls",
    rationale: "Required for child-focused experiences and COPPA-style compliance.",
    status: "implemented",
  },
  {
    id: "support-contact",
    title: "Clear support contact and resolution workflow",
    rationale: "Required for user issue escalation and refund support.",
    status: "implemented",
  },
  {
    id: "refund-policy",
    title: "Published refund handling policy",
    rationale: "Needed for billing disputes and app store reviewer checks.",
    status: "implemented",
  },
  {
    id: "policy-version-ack",
    title: "Policy version acknowledgment tracking",
    rationale: "Supports evidence of user acknowledgment for policy revisions.",
    status: "implemented",
  },
];
