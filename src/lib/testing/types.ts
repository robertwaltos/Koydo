export type SupportedTestingLanguage = "en" | "pl";

export type TestingExamCatalogEntry = {
  id: string;
  examCode: string;
  name: string;
  localizedName: string | null;
  timingMinutes: number;
  questionCount: number;
  passingScore: number | null;
  coverImageUrl: string | null;
  blueprint: Record<string, unknown>;
  entitlementType: "sample" | "full";
  hasFullAccess: boolean;
};

export type TestingQuestionPayload = {
  id: string;
  domain: string;
  text: string;
  options: string[];
};

export type TestingAttemptStartResponse = {
  attemptId: string;
  attemptType: "sample" | "full";
  timingMinutes: number;
  questions: TestingQuestionPayload[];
  questionSupply?: {
    requested: number;
    delivered: number;
    onDemandGenerated: number;
    generationMode: "openai" | "rule_based" | "none";
  };
};

export type TestingAttemptSubmission = {
  questionId: string;
  selected: string;
};

export type TestingAttemptResultResponse = {
  attemptId: string;
  examId: string;
  examCode: string;
  score: number;
  pass: boolean;
  attemptType: "sample" | "full";
  domainBreakdown: Record<string, { correct: number; total: number; score: number }>;
  diagnosis: {
    weakDomains: string[];
    remediationModules: string[];
  };
  completedAt: string | null;
};
