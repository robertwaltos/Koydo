import { createHash } from "crypto";
import {
  normalizeJurisdictionCode,
  type JurisdictionCode,
} from "@/lib/legal/jurisdictions";

export const TERMS_VERSION = "2026-03-07";
export const TERMS_EFFECTIVE_DATE = "2026-03-07";

type TermsSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

type JurisdictionAddendum = {
  jurisdictionCode: string;
  title: string;
  paragraphs: readonly string[];
};

export type ResolvedTermsDocument = {
  version: string;
  effectiveDate: string;
  stateCode: string; // Kept as 'stateCode' for database backward compatibility
  documentKey: string;
  documentHash: string;
  sections: readonly TermsSection[];
  stateAddendum: JurisdictionAddendum;
};

const BASE_TERMS_SECTIONS: readonly TermsSection[] = [
  {
    id: "eligibility-and-minors",
    title: "1. Eligibility, Minors, and Family Accounts",
    paragraphs: [
      "You may only create an account if you are legally permitted to enter a binding agreement in your jurisdiction, or if your parent or legal guardian completes signup and accepts these Terms for you.",
      "For users under 13 in the United States, Koydo requires verifiable parental consent before enabling child-directed features, consistent with COPPA compliance controls and our Parent Consent flow.",
      "Parents and legal guardians are responsible for supervising minors, billing activity, and account-level decisions made through family-managed access.",
    ],
  },
  {
    id: "account-security",
    title: "2. Account Security and Accurate Information",
    paragraphs: [
      "You must provide accurate, current, and complete registration and billing information, including your billing region when requested for legal and tax compliance.",
      "You are responsible for maintaining credential confidentiality and for activity performed through your account, unless caused by our material security failure.",
      "You must promptly notify us at support@koydo.app if you suspect unauthorized use.",
    ],
  },
  {
    id: "subscriptions-and-renewals",
    title: "3. Subscription Terms, Renewals, and Cancellations",
    paragraphs: [
      "Paid plans renew automatically at the disclosed interval unless canceled before the next renewal date. Price, cycle, and cancellation terms are presented at checkout and in your account billing view.",
      "For direct web billing, you authorize recurring charges until canceled. Cancellation stops future renewal charges and does not retroactively refund prior periods unless required by applicable law or an express written policy.",
      "For Apple App Store and Google Play purchases, payment, cancellation, and refund workflows are controlled by the applicable store terms and platform billing policies. When store terms conflict with direct-web language in these Terms, store terms control for that purchase channel.",
      "We provide clear renewal disclosures and consent capture intended to align with federal negative option requirements (including ROSCA for covered transactions) and applicable regional auto-renewal statutes.",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use and Prohibited Conduct",
    paragraphs: [
      "You may not misuse the Service, including by reverse engineering, scraping at scale, bypassing access controls, uploading unlawful content, abusing trial mechanisms, committing payment fraud, or interfering with service integrity.",
      "You may not use the Service to violate child safety, privacy, intellectual property, consumer protection, sanctions, export, or anti-fraud laws.",
      "We may suspend, throttle, or terminate abusive activity, including automated or scripted behavior that creates security or cost risk.",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property and License Scope",
    paragraphs: [
      "Koydo and its licensors retain all rights in software, content, curriculum, designs, logos, marks, and related materials, except for rights expressly granted to you.",
      "You receive a limited, revocable, non-exclusive, non-transferable license to access and use the Service for personal, household, classroom, or permitted organizational educational use.",
      "You may not resell, repackage, redistribute, scrape for AI training, or create derivative commercial products from Service content without prior written authorization.",
    ],
  },
  {
    id: "user-content",
    title: "6. User Content, Feedback, and AI Features",
    paragraphs: [
      "You retain ownership of content you submit, but grant Koydo a worldwide, royalty-free license to host, process, and display that content as needed to operate, secure, and improve the Service.",
      "If you submit feedback, feature ideas, or suggestions, we may use them without restriction or compensation.",
      "Educational outputs and AI-assisted content are provided for learning support and may contain errors; you remain responsible for decisions made based on generated content.",
      "Koydo does not use your personal data, learning progress, submitted content, or any user-generated material to train, fine-tune, or improve artificial intelligence or machine learning models. Lesson text may be sent to third-party AI providers (OpenAI, Google Gemini, Anthropic Claude, xAI Grok) solely to generate educational content in real time; no personal data is included in these requests and no data is retained by these providers for model training. AI features are restricted for users under 13 in accordance with COPPA.",
    ],
  },
  {
    id: "data-processing-lawful-basis",
    title: "6A. Data Processing and Lawful Basis (GDPR)",
    paragraphs: [
      "For users in the European Economic Area (EEA), United Kingdom, and Switzerland, we process personal data under the following lawful bases as defined by GDPR Article 6(1):",
      "(a) Contract performance (Art. 6(1)(b)): processing necessary to provide the Service, including account creation, authentication, learning progress tracking, subscription management, and customer support.",
      "(b) Consent (Art. 6(1)(a)): analytics and usage tracking via Mixpanel (adults only, consent-gated via our cookie consent mechanism). You may withdraw consent at any time via the 'Manage Cookies' control in the site footer, without affecting the lawfulness of processing prior to withdrawal.",
      "(c) Legitimate interest (Art. 6(1)(f)): security monitoring, fraud prevention, abuse detection, and service integrity protection. We have balanced these interests against your rights and determined they do not override your fundamental rights and freedoms.",
      "(d) Legal obligation (Art. 6(1)(c)): retention of billing records as required by tax and financial regulations, and compliance with lawful data requests from authorities.",
      "You have the right to access, rectify, erase, restrict processing, port your data, and object to processing. To exercise these rights, contact dpo@koydo.app.",
    ],
  },
  {
    id: "termination",
    title: "7. Suspension and Termination",
    paragraphs: [
      "You may stop using the Service at any time and may request account deletion through available account controls or support channels.",
      "We may suspend or terminate access for fraud, policy violations, abuse, unlawful behavior, nonpayment, legal requests, or security risk.",
      "Sections that by nature should survive termination, including payment obligations, limitation of liability, dispute resolution, and indemnity, survive termination.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "8. Dispute Resolution, Arbitration, and Class Action Waiver",
    paragraphs: [
      "Please contact support@koydo.app first so we can attempt informal resolution.",
      "Except where prohibited by applicable law (such as in the EU/UK), disputes arising from these Terms or the Service are resolved by binding individual arbitration and not by jury trial or class/representative proceeding.",
      "You may opt out of arbitration within 30 days of initial acceptance by sending your account email and a clear opt-out request to legal@koydo.app.",
      "If your regional law limits arbitration or class waiver enforcement for your claim type, that limitation applies only to the extent required by law.",
      "The binding arbitration and class action waiver provisions in this section do not apply to users under 18 years of age. Disputes involving minors shall be resolved in accordance with applicable law and the courts of competent jurisdiction.",
    ],
  },
  {
    id: "liability-and-indemnity",
    title: "9. Warranty Disclaimer, Limitation of Liability, and Indemnity",
    paragraphs: [
      "The Service is provided on an as-is and as-available basis to the maximum extent permitted by law, without implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "To the maximum extent permitted by law, Koydo is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenue, goodwill, or data.",
      "To the maximum extent permitted by law, Koydo's aggregate liability for claims arising out of or related to the Service will not exceed the greater of (a) amounts paid by you to Koydo during the 12 months before the claim, or (b) USD 100.",
      "You agree to indemnify and hold Koydo harmless from claims, losses, and expenses arising from your misuse of the Service, violation of these Terms, or violation of law, except to the extent caused by Koydo's gross negligence or willful misconduct.",
    ],
  },
  {
    id: "changes-law",
    title: "10. Changes to Terms, Governing Law, and Contact",
    paragraphs: [
      "We may update these Terms for legal, security, operational, or product reasons. Material changes are communicated through in-app notice, account notice, or email, and become effective on the posted effective date unless law requires a different process.",
      "By continuing to use the Service after changes become effective, you accept the revised Terms.",
      "Unless a non-waivable consumer law requires otherwise (see Regional Addendums), these Terms are governed by the laws of the State of Delaware, excluding conflict-of-law principles.",
      "Contact: support@koydo.app for support and legal@koydo.app for legal notices.",
    ],
  },
] as const;

const DEFAULT_GLOBAL_ADDENDUM: JurisdictionAddendum = {
  jurisdictionCode: "GLOBAL",
  title: "Global Addendum",
  paragraphs: [
    "Your rights may vary by jurisdiction. If a local consumer protection law cannot be waived, these Terms are interpreted to preserve that non-waivable right.",
    "If a term in these Terms is unenforceable in your billing region, that term is modified only as needed to be enforceable, and all remaining terms stay in effect.",
  ],
};

const JURISDICTION_ADDENDA: Partial<Record<JurisdictionCode, JurisdictionAddendum>> = {
  EU: {
    jurisdictionCode: "EU",
    title: "European Union Addendum",
    paragraphs: [
      "For consumers residing in the European Union, nothing in these Terms deprives you of the protection afforded by mandatory provisions of your country of residence.",
      "The binding arbitration and class action waiver provisions in Section 8 do not apply to EU consumers. You have the right to bring legal proceedings in the competent courts of your country of residence.",
      "If you reside in the EU, you have a statutory right to withdraw from a paid subscription within 14 days without giving any reason, unless you expressly consented to immediate performance and acknowledged the loss of the withdrawal right. Contact support to exercise this right.",
      "To the extent required by EU law, the governing law of Delaware is superseded by the laws of your member state of residence for consumer protection matters.",
      "The European Commission provides an Online Dispute Resolution (ODR) platform, accessible at http://ec.europa.eu/consumers/odr."
    ],
  },
  UK: {
    jurisdictionCode: "UK",
    title: "United Kingdom Addendum",
    paragraphs: [
      "For consumers residing in the United Kingdom, nothing in these Terms limits your statutory rights under the Consumer Rights Act 2015.",
      "The binding arbitration provision in Section 8 is not mandatory for UK consumers. You may bring proceedings in the courts of England, Wales, Scotland, or Northern Ireland depending on your residence.",
      "You have a statutory right to cancel a paid subscription within 14 days, subject to your consent to begin digital service delivery immediately.",
    ],
  },
  CA: {
    jurisdictionCode: "CA",
    title: "California Addendum",
    paragraphs: [
      "For California subscribers, automatic renewal disclosures, affirmative consent, and cancellation access are intended to align with California Business and Professions Code sections 17600-17606.",
      "For California consumers, non-waivable rights under applicable California consumer protection law remain available and are not limited by this agreement.",
      "California users may contact support@koydo.app for cancellation support if they cannot reasonably access self-serve cancellation tools.",
    ],
  },
  NY: {
    jurisdictionCode: "NY",
    title: "New York Addendum",
    paragraphs: [
      "For New York subscribers, automatic renewal terms are presented clearly before purchase and in post-purchase confirmation communications.",
      "Where required by New York law for covered plans, cancellation methods are provided online and without unreasonable friction.",
      "Nothing in these Terms waives non-waivable rights available under New York consumer law.",
    ],
  },
  WA: {
    jurisdictionCode: "WA",
    title: "Washington Addendum",
    paragraphs: [
      "For Washington subscribers, recurring charge disclosures are shown before purchase and account cancellation methods are maintained in account settings or support channels.",
      "Non-waivable rights under applicable Washington consumer protection law remain available.",
    ],
  },
  VA: {
    jurisdictionCode: "VA",
    title: "Virginia Addendum",
    paragraphs: [
      "For Virginia subscribers, recurring plan disclosures and cancellation controls are provided in purchase and account workflows.",
      "Nothing in these Terms limits non-waivable protections available under Virginia law.",
    ],
  },
  CO: {
    jurisdictionCode: "CO",
    title: "Colorado Addendum",
    paragraphs: [
      "For Colorado subscribers, recurring billing authorization and cancellation pathways are provided as part of checkout and account workflows.",
      "Nothing in these Terms limits non-waivable rights available under Colorado law.",
    ],
  },
  CT: {
    jurisdictionCode: "CT",
    title: "Connecticut Addendum",
    paragraphs: [
      "For Connecticut subscribers, recurring subscription disclosures are presented before purchase and cancellation access is provided through account controls or support.",
      "Nothing in these Terms waives non-waivable Connecticut consumer protections.",
    ],
  },
  VT: {
    jurisdictionCode: "VT",
    title: "Vermont Addendum",
    paragraphs: [
      "For Vermont subscribers, recurring charge disclosures and cancellation methods are provided with the objective of plain-language consumer notice.",
      "Nothing in these Terms limits non-waivable rights under Vermont law.",
    ],
  },
};

function resolveJurisdictionAddendum(jurisdictionCode: JurisdictionCode | null): JurisdictionAddendum {
  if (!jurisdictionCode) {
    return DEFAULT_GLOBAL_ADDENDUM;
  }

  const specific = JURISDICTION_ADDENDA[jurisdictionCode];
  if (specific) {
    return specific;
  }

  return {
    ...DEFAULT_GLOBAL_ADDENDUM,
    jurisdictionCode,
    title: `${jurisdictionCode} Addendum`,
  };
}

export function buildTermsPlainText(document: {
  version: string;
  effectiveDate: string;
  stateCode: string;
  sections: readonly TermsSection[];
  stateAddendum: JurisdictionAddendum;
}): string {
  const blocks: string[] = [
    "Koydo Terms of Service",
    `Version: ${document.version}`,
    `Effective Date: ${document.effectiveDate}`,
    `Billing Region: ${document.stateCode}`,
    "",
  ];

  for (const section of document.sections) {
    blocks.push(section.title);
    for (const paragraph of section.paragraphs) {
      blocks.push(paragraph);
    }
    blocks.push("");
  }

  blocks.push(document.stateAddendum.title);
  for (const paragraph of document.stateAddendum.paragraphs) {
    blocks.push(paragraph);
  }

  return blocks.join("\n");
}

export function resolveTermsDocumentForState(
  billingState: string | null | undefined,
): ResolvedTermsDocument {
  const normalizedJurisdiction = normalizeJurisdictionCode(billingState);
  const stateCode = normalizedJurisdiction ?? "GLOBAL";
  const stateAddendum = resolveJurisdictionAddendum(normalizedJurisdiction);

  const payload = {
    version: TERMS_VERSION,
    effectiveDate: TERMS_EFFECTIVE_DATE,
    stateCode,
    sections: BASE_TERMS_SECTIONS,
    stateAddendum,
  };

  const documentText = buildTermsPlainText(payload);
  const documentHash = createHash("sha256")
    .update(documentText, "utf8")
    .digest("hex");

  return {
    ...payload,
    documentKey: `terms:${TERMS_VERSION}:${stateCode}`,
    documentHash,
  };
}
