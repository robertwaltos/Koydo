export type LanguageCode = string;

export type TranslationProviderPreference = "auto" | "mock" | "deepl" | "google";
export type PronunciationProviderPreference = "auto" | "mock" | "licensed";

export type ProviderId = "mock" | "deepl" | "google" | "openai" | "licensed";
export type ProviderReadiness = "ready" | "missing_config" | "disabled";
export type ProviderLicenseMode = "ai_only" | "licensed" | "hybrid";

export type ProviderCapability =
  | "translation"
  | "pronunciation_grading"
  | "speech_to_text"
  | "text_to_speech";

export interface ProviderStatus {
  id: ProviderId;
  displayName: string;
  readiness: ProviderReadiness;
  licenseMode: ProviderLicenseMode;
  capabilities: ProviderCapability[];
  notes?: string;
}

export interface TranslationRequest {
  text: string;
  targetLanguage: LanguageCode;
  sourceLanguage?: LanguageCode;
  preserveFormatting?: boolean;
  domain?: "general" | "education" | "exam_prep" | (string & {});
  preferredProviderId?: TranslationProviderPreference;
}

export interface TranslationResult {
  translatedText: string;
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  providerId: ProviderId;
  confidence: number;
  wasFallback: boolean;
  glossaryHits?: string[];
  metadata?: Record<string, unknown>;
}

export interface PronunciationGradingRequest {
  targetText: string;
  transcriptText: string;
  language: LanguageCode;
  audioDurationMs?: number;
  asrConfidence?: number;
  preferredProviderId?: PronunciationProviderPreference;
}

export interface PronunciationDimensionScores {
  accuracy: number;
  fluency: number;
  completeness: number;
  confidence: number;
}

export type PronunciationGradeBand = "A" | "B" | "C" | "D" | "E";

export interface PronunciationGradingResult {
  providerId: ProviderId;
  wasFallback: boolean;
  overallScore: number;
  gradeBand: PronunciationGradeBand;
  dimensions: PronunciationDimensionScores;
  feedback: string[];
  metadata?: Record<string, unknown>;
}
