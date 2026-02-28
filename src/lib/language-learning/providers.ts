import { serverEnv } from "@/lib/config/env";
import type { PronunciationProvider, TranslationProvider } from "./contracts";
import { buildRuleBasedPronunciationGrade } from "./rule-based";
import type {
  PronunciationGradingRequest,
  PronunciationGradingResult,
  PronunciationProviderPreference,
  ProviderCapability,
  ProviderStatus,
  TranslationProviderPreference,
  TranslationRequest,
  TranslationResult,
} from "./types";

type TranslationProviderMap = Record<
  Exclude<TranslationProviderPreference, "auto">,
  TranslationProvider
>;
type PronunciationProviderMap = Record<
  Exclude<PronunciationProviderPreference, "auto">,
  PronunciationProvider
>;

function toErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function normalizeLanguageCode(value: string | undefined, fallback: string) {
  const normalized = String(value ?? "").trim().toLowerCase().replace(/_/g, "-");
  return normalized.length > 0 ? normalized : fallback;
}

function toDeepLLanguageCode(value: string) {
  return value.trim().toUpperCase().replace(/_/g, "-");
}

function createStatus(input: {
  id: ProviderStatus["id"];
  displayName: string;
  readiness: ProviderStatus["readiness"];
  licenseMode: ProviderStatus["licenseMode"];
  capabilities: ProviderCapability[];
  notes?: string;
}): ProviderStatus {
  return {
    id: input.id,
    displayName: input.displayName,
    readiness: input.readiness,
    licenseMode: input.licenseMode,
    capabilities: input.capabilities,
    notes: input.notes,
  };
}

class MockTranslationProvider implements TranslationProvider {
  readonly status = createStatus({
    id: "mock",
    displayName: "Rule-based fallback",
    readiness: "ready",
    licenseMode: "ai_only",
    capabilities: ["translation"],
    notes: "Deterministic fallback. Returns original text for safety when no translation engine is active.",
  });

  async translate(request: TranslationRequest): Promise<TranslationResult> {
    const sourceLanguage = normalizeLanguageCode(request.sourceLanguage, "auto");
    const targetLanguage = normalizeLanguageCode(request.targetLanguage, "en");

    return {
      translatedText: request.text,
      sourceLanguage,
      targetLanguage,
      providerId: "mock",
      confidence: sourceLanguage === targetLanguage ? 1 : 0.2,
      wasFallback: sourceLanguage !== targetLanguage,
      metadata: {
        fallbackReason: "translation_provider_unavailable",
      },
    };
  }
}

type DeepLTranslationPayload = {
  translations?: Array<{
    text?: string;
    detected_source_language?: string;
  }>;
};

class DeepLTranslationProvider implements TranslationProvider {
  private readonly apiKey = serverEnv.DEEPL_API_KEY?.trim() ?? "";

  readonly status = createStatus({
    id: "deepl",
    displayName: "DeepL",
    readiness: this.apiKey.length > 0 ? "ready" : "missing_config",
    licenseMode: "licensed",
    capabilities: ["translation"],
    notes:
      this.apiKey.length > 0
        ? "DeepL API enabled."
        : "Set DEEPL_API_KEY to enable DeepL translation.",
  });

  async translate(request: TranslationRequest): Promise<TranslationResult> {
    if (this.status.readiness !== "ready") {
      throw new Error("DeepL provider is not configured.");
    }

    const params = new URLSearchParams();
    params.set("auth_key", this.apiKey);
    params.set("text", request.text);
    params.set("target_lang", toDeepLLanguageCode(request.targetLanguage));

    if (request.sourceLanguage && request.sourceLanguage.toLowerCase() !== "auto") {
      params.set("source_lang", toDeepLLanguageCode(request.sourceLanguage));
    }

    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`DeepL translation failed with status ${response.status}.`);
    }

    const payload = (await response.json()) as DeepLTranslationPayload;
    const row = payload.translations?.[0];

    if (!row?.text) {
      throw new Error("DeepL translation returned an empty response.");
    }

    return {
      translatedText: row.text,
      sourceLanguage: normalizeLanguageCode(row.detected_source_language, request.sourceLanguage ?? "auto"),
      targetLanguage: normalizeLanguageCode(request.targetLanguage, "en"),
      providerId: "deepl",
      confidence: 0.95,
      wasFallback: false,
      metadata: {
        engine: "deepl",
      },
    };
  }
}

type GoogleTranslationPayload = {
  data?: {
    translations?: Array<{
      translatedText?: string;
      detectedSourceLanguage?: string;
    }>;
  };
};

class GoogleTranslationProvider implements TranslationProvider {
  private readonly apiKey = serverEnv.GOOGLE_TRANSLATE_API_KEY?.trim() ?? "";

  readonly status = createStatus({
    id: "google",
    displayName: "Google Translation",
    readiness: this.apiKey.length > 0 ? "ready" : "missing_config",
    licenseMode: "licensed",
    capabilities: ["translation"],
    notes:
      this.apiKey.length > 0
        ? "Google Translation API enabled."
        : "Set GOOGLE_TRANSLATE_API_KEY to enable Google translation.",
  });

  async translate(request: TranslationRequest): Promise<TranslationResult> {
    if (this.status.readiness !== "ready") {
      throw new Error("Google translation provider is not configured.");
    }

    const endpoint = new URL("https://translation.googleapis.com/language/translate/v2");
    endpoint.searchParams.set("key", this.apiKey);

    const body: Record<string, unknown> = {
      q: request.text,
      target: normalizeLanguageCode(request.targetLanguage, "en"),
      format: request.preserveFormatting ? "html" : "text",
    };

    if (request.sourceLanguage && request.sourceLanguage.toLowerCase() !== "auto") {
      body.source = normalizeLanguageCode(request.sourceLanguage, "en");
    }

    const response = await fetch(endpoint.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Google translation failed with status ${response.status}.`);
    }

    const payload = (await response.json()) as GoogleTranslationPayload;
    const row = payload.data?.translations?.[0];

    if (!row?.translatedText) {
      throw new Error("Google translation returned an empty response.");
    }

    return {
      translatedText: row.translatedText,
      sourceLanguage: normalizeLanguageCode(row.detectedSourceLanguage, request.sourceLanguage ?? "auto"),
      targetLanguage: normalizeLanguageCode(request.targetLanguage, "en"),
      providerId: "google",
      confidence: 0.92,
      wasFallback: false,
      metadata: {
        engine: "google",
      },
    };
  }
}

class RuleBasedPronunciationProvider implements PronunciationProvider {
  readonly status = createStatus({
    id: "mock",
    displayName: "Rule-based grader",
    readiness: "ready",
    licenseMode: "ai_only",
    capabilities: ["pronunciation_grading"],
    notes: "Local fallback grader for pronunciation scoring and feedback.",
  });

  async gradePronunciation(
    request: PronunciationGradingRequest,
  ): Promise<PronunciationGradingResult> {
    return buildRuleBasedPronunciationGrade(request, {
      providerId: "mock",
      wasFallback: false,
    });
  }
}

type LicensedPronunciationPayload = {
  overallScore?: number;
  score?: number;
  confidence?: number;
  dimensions?: Partial<PronunciationGradingResult["dimensions"]>;
  feedback?: string[];
  metadata?: Record<string, unknown>;
};

function clampScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function toGradeBand(score: number): PronunciationGradingResult["gradeBand"] {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 55) return "D";
  return "E";
}

class LicensedPronunciationProvider implements PronunciationProvider {
  private readonly endpoint = serverEnv.LANGUAGE_LICENSED_PRONUNCIATION_ENDPOINT?.trim() ?? "";
  private readonly apiKey = serverEnv.LANGUAGE_LICENSED_PRONUNCIATION_API_KEY?.trim() ?? "";

  readonly status = createStatus({
    id: "licensed",
    displayName: "Licensed pronunciation engine",
    readiness: this.endpoint.length > 0 ? "ready" : "missing_config",
    licenseMode: "licensed",
    capabilities: ["pronunciation_grading", "speech_to_text"],
    notes:
      this.endpoint.length > 0
        ? "External licensed pronunciation endpoint configured."
        : "Set LANGUAGE_LICENSED_PRONUNCIATION_ENDPOINT to enable external grading.",
  });

  async gradePronunciation(
    request: PronunciationGradingRequest,
  ): Promise<PronunciationGradingResult> {
    if (this.status.readiness !== "ready") {
      throw new Error("Licensed pronunciation provider is not configured.");
    }

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: JSON.stringify({
        target_text: request.targetText,
        transcript_text: request.transcriptText,
        language: request.language,
        audio_duration_ms: request.audioDurationMs,
        asr_confidence: request.asrConfidence,
      }),
    });

    if (!response.ok) {
      throw new Error(`Licensed pronunciation request failed with status ${response.status}.`);
    }

    const payload = (await response.json()) as LicensedPronunciationPayload;
    const dimensions = payload.dimensions ?? {};

    const confidence = clampScore(
      typeof payload.confidence === "number"
        ? payload.confidence > 1
          ? payload.confidence
          : payload.confidence * 100
        : dimensions.confidence ?? 80,
    );
    const accuracy = clampScore(dimensions.accuracy ?? payload.overallScore ?? payload.score ?? 80);
    const fluency = clampScore(dimensions.fluency ?? payload.overallScore ?? payload.score ?? 80);
    const completeness = clampScore(
      dimensions.completeness ?? payload.overallScore ?? payload.score ?? 80,
    );
    const overallScore = clampScore(
      typeof payload.overallScore === "number" || typeof payload.score === "number"
        ? payload.overallScore ?? payload.score ?? 0
        : accuracy * 0.45 + completeness * 0.25 + fluency * 0.2 + confidence * 0.1,
    );

    return {
      providerId: "licensed",
      wasFallback: false,
      overallScore,
      gradeBand: toGradeBand(overallScore),
      dimensions: {
        accuracy,
        fluency,
        completeness,
        confidence,
      },
      feedback:
        payload.feedback?.length && Array.isArray(payload.feedback)
          ? payload.feedback
          : ["Practice one more attempt while keeping rhythm and clear articulation."],
      metadata: {
        ...(payload.metadata ?? {}),
        engine: "licensed",
      },
    };
  }
}

const translationProviders: TranslationProviderMap = {
  mock: new MockTranslationProvider(),
  deepl: new DeepLTranslationProvider(),
  google: new GoogleTranslationProvider(),
};

const pronunciationProviders: PronunciationProviderMap = {
  mock: new RuleBasedPronunciationProvider(),
  licensed: new LicensedPronunciationProvider(),
};

function resolveTranslationProvider(
  preferred: TranslationProviderPreference | undefined,
): TranslationProvider {
  const configuredPreference = preferred ?? serverEnv.LANGUAGE_TRANSLATION_PROVIDER;
  if (configuredPreference !== "auto") {
    return translationProviders[configuredPreference];
  }

  if (translationProviders.deepl.status.readiness === "ready") {
    return translationProviders.deepl;
  }
  if (translationProviders.google.status.readiness === "ready") {
    return translationProviders.google;
  }
  return translationProviders.mock;
}

function resolvePronunciationProvider(
  preferred: PronunciationProviderPreference | undefined,
): PronunciationProvider {
  const configuredPreference = preferred ?? serverEnv.LANGUAGE_PRONUNCIATION_PROVIDER;
  if (configuredPreference !== "auto") {
    return pronunciationProviders[configuredPreference];
  }

  if (pronunciationProviders.licensed.status.readiness === "ready") {
    return pronunciationProviders.licensed;
  }
  return pronunciationProviders.mock;
}

export function getLanguageProviderStatuses() {
  return {
    translation: Object.values(translationProviders).map((provider) => provider.status),
    pronunciation: Object.values(pronunciationProviders).map((provider) => provider.status),
  };
}

export async function translateText(request: TranslationRequest): Promise<TranslationResult> {
  const selectedProvider = resolveTranslationProvider(request.preferredProviderId);

  try {
    return await selectedProvider.translate(request);
  } catch (error) {
    if (selectedProvider.status.id === "mock") {
      throw error;
    }

    const fallback = await translationProviders.mock.translate(request);
    return {
      ...fallback,
      wasFallback: true,
      metadata: {
        ...(fallback.metadata ?? {}),
        fallbackFrom: selectedProvider.status.id,
        fallbackReason: toErrorMessage(error),
      },
    };
  }
}

export async function gradePronunciation(
  request: PronunciationGradingRequest,
): Promise<PronunciationGradingResult> {
  const selectedProvider = resolvePronunciationProvider(request.preferredProviderId);

  try {
    return await selectedProvider.gradePronunciation(request);
  } catch (error) {
    if (selectedProvider.status.id === "mock") {
      throw error;
    }

    const fallback = await pronunciationProviders.mock.gradePronunciation(request);
    return {
      ...fallback,
      wasFallback: true,
      metadata: {
        ...(fallback.metadata ?? {}),
        fallbackFrom: selectedProvider.status.id,
        fallbackReason: toErrorMessage(error),
      },
    };
  }
}
