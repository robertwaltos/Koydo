import type {
  PronunciationGradingRequest,
  PronunciationGradingResult,
  ProviderStatus,
  TranslationRequest,
  TranslationResult,
} from "./types";

export interface TranslationProvider {
  readonly status: ProviderStatus;
  translate(request: TranslationRequest): Promise<TranslationResult>;
}

export interface PronunciationProvider {
  readonly status: ProviderStatus;
  gradePronunciation(request: PronunciationGradingRequest): Promise<PronunciationGradingResult>;
}
