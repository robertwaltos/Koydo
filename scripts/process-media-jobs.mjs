import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

function parseArgs(argv) {
  const options = {
    moduleId: "",
    lessonId: "",
    assetType: "",
    limit: 50,
    strictProvider: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--module") options.moduleId = String(argv[index + 1] ?? "");
    else if (arg === "--lesson") options.lessonId = String(argv[index + 1] ?? "");
    else if (arg === "--asset") options.assetType = String(argv[index + 1] ?? "");
    else if (arg === "--limit") options.limit = Number(argv[index + 1] ?? 50);
    else if (arg === "--strict-provider") options.strictProvider = true;
  }

  options.moduleId = options.moduleId.trim();
  options.lessonId = options.lessonId.trim();
  options.assetType = options.assetType.trim();
  options.limit = Number.isFinite(options.limit) ? Math.min(500, Math.max(1, options.limit)) : 50;

  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const values = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();
    values[key] = value;
  }

  return values;
}

function readEnvValue(fileValues, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (fileValues[key]) return fileValues[key];
  if (fallbackKey && fileValues[fallbackKey]) return fileValues[fallbackKey];
  return "";
}

function readBooleanEnv(fileValues, key, fallback = false) {
  const value = readEnvValue(fileValues, key);
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
}

function normalizeAssetType(value) {
  if (!value) return "";
  if (["video", "animation", "image"].includes(value)) return value;
  throw new Error(`Invalid asset type "${value}". Use video|animation|image.`);
}

function buildSimulatedOutputUrl(assetType, moduleId, lessonId) {
  if (assetType === "video") {
    const token = [moduleId, lessonId].filter(Boolean).join("-").replace(/[^a-zA-Z0-9_-]/g, "");
    return token ? `/placeholders/video-placeholder.svg?token=${token}` : "/placeholders/video-placeholder.svg";
  }

  if (assetType === "animation") {
    const token = [moduleId, lessonId].filter(Boolean).join("-").replace(/[^a-zA-Z0-9_-]/g, "");
    return token
      ? `/placeholders/animation-placeholder.svg?token=${token}`
      : "/placeholders/animation-placeholder.svg";
  }

  const token = [moduleId, lessonId].filter(Boolean).join("-").replace(/[^a-zA-Z0-9_-]/g, "");
  return token ? `/placeholders/lesson-robot.svg?token=${token}` : "/placeholders/lesson-robot.svg";
}

function normalizeMimeType(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "image/jpeg" || normalized === "image/jpg") return "image/jpeg";
  if (normalized === "image/webp") return "image/webp";
  return "image/png";
}

function extensionForMimeType(mimeType) {
  if (mimeType === "image/jpeg") return "jpg";
  if (mimeType === "image/webp") return "webp";
  return "png";
}

async function requestOpenAIImage({
  apiKey,
  model,
  size,
  quality,
  prompt,
}) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      size,
      quality,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      payload?.error?.message ||
      payload?.message ||
      `OpenAI image generation failed with status ${response.status}`;
    throw new Error(message);
  }

  const first = Array.isArray(payload?.data) ? payload.data[0] : null;
  if (!first || typeof first !== "object") {
    throw new Error("OpenAI response did not include image data.");
  }

  const imageUrl = typeof first.url === "string" && first.url.length > 0 ? first.url : null;
  const b64 = typeof first.b64_json === "string" && first.b64_json.length > 0 ? first.b64_json : null;
  const mimeType = normalizeMimeType(first.mime_type);

  if (!imageUrl && !b64) {
    throw new Error("OpenAI response missing image URL and base64 payload.");
  }

  return { imageUrl, b64, mimeType };
}

async function uploadImageToSupabaseStorage({
  supabase,
  bucket,
  jobId,
  moduleId,
  lessonId,
  mimeType,
  base64Data,
}) {
  const extension = extensionForMimeType(mimeType);
  const safeModule = (moduleId || "module").replace(/[^a-zA-Z0-9_-]/g, "_");
  const safeLesson = (lessonId || "lesson").replace(/[^a-zA-Z0-9_-]/g, "_");
  const objectPath = `generated/${safeModule}/${safeLesson}/${jobId}.${extension}`;
  const buffer = Buffer.from(base64Data, "base64");

  const { error: uploadError } = await supabase.storage.from(bucket).upload(objectPath, buffer, {
    contentType: mimeType,
    upsert: true,
  });

  if (uploadError) {
    throw new Error(`Supabase storage upload failed: ${uploadError.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(objectPath);
  if (!data?.publicUrl) {
    throw new Error("Supabase storage did not return a public URL.");
  }

  return data.publicUrl;
}

async function resolveImageOutput({
  supabase,
  job,
  prompt,
  openAiApiKey,
  openAiModel,
  openAiSize,
  openAiQuality,
  mediaOutputBucket,
  strictProvider,
}) {
  const fallbackUrl = buildSimulatedOutputUrl("image", job.module_id, job.lesson_id);

  if (!openAiApiKey) {
    return {
      outputUrl: fallbackUrl,
      generationMode: "placeholder",
      warning: "OPENAI_API_KEY is not configured.",
    };
  }

  try {
    const generated = await requestOpenAIImage({
      apiKey: openAiApiKey,
      model: openAiModel,
      size: openAiSize,
      quality: openAiQuality,
      prompt,
    });

    if (generated.imageUrl) {
      return {
        outputUrl: generated.imageUrl,
        generationMode: "openai_url",
      };
    }

    if (generated.b64 && mediaOutputBucket) {
      const uploadedUrl = await uploadImageToSupabaseStorage({
        supabase,
        bucket: mediaOutputBucket,
        jobId: job.id,
        moduleId: job.module_id,
        lessonId: job.lesson_id,
        mimeType: generated.mimeType,
        base64Data: generated.b64,
      });

      return {
        outputUrl: uploadedUrl,
        generationMode: "openai_supabase_storage",
      };
    }

    if (strictProvider) {
      throw new Error(
        "OpenAI returned base64 image data, but MEDIA_OUTPUT_BUCKET is not configured for durable upload.",
      );
    }

    return {
      outputUrl: fallbackUrl,
      generationMode: "placeholder",
      warning: "OpenAI returned base64 image data but MEDIA_OUTPUT_BUCKET is not configured.",
    };
  } catch (error) {
    if (strictProvider) {
      throw error;
    }

    return {
      outputUrl: fallbackUrl,
      generationMode: "placeholder",
      warning: error instanceof Error ? error.message : "OpenAI image generation failed.",
    };
  }
}

async function resolveOutput({
  supabase,
  job,
  openAiApiKey,
  openAiModel,
  openAiSize,
  openAiQuality,
  mediaOutputBucket,
  strictProvider,
}) {
  if (job.asset_type === "image") {
    return resolveImageOutput({
      supabase,
      job,
      prompt: job.prompt,
      openAiApiKey,
      openAiModel,
      openAiSize,
      openAiQuality,
      mediaOutputBucket,
      strictProvider,
    });
  }

  return {
    outputUrl: buildSimulatedOutputUrl(job.asset_type, job.module_id, job.lesson_id),
    generationMode: "placeholder",
    warning: null,
  };
}

async function processJob(
  supabase,
  job,
  {
    openAiApiKey,
    openAiModel,
    openAiSize,
    openAiQuality,
    mediaOutputBucket,
    strictProvider,
  },
) {
  const runningAt = new Date().toISOString();
  const runningMetadata = {
    ...(job.metadata ?? {}),
    runner: "media-process-script",
    started_at: runningAt,
  };

  const { data: claimedRow, error: runningError } = await supabase
    .from("media_generation_jobs")
    .update({
      status: "running",
      error: null,
      completed_at: null,
      metadata: runningMetadata,
    })
    .eq("id", job.id)
    .eq("status", "queued")
    .select("id")
    .maybeSingle();

  if (runningError) {
    return { id: job.id, status: "failed", error: runningError.message };
  }
  if (!claimedRow?.id) {
    return { id: job.id, status: "skipped", error: "Already claimed by another worker." };
  }

  const completedAt = new Date().toISOString();

  try {
    const output = await resolveOutput({
      supabase,
      job,
      openAiApiKey,
      openAiModel,
      openAiSize,
      openAiQuality,
      mediaOutputBucket,
      strictProvider,
    });

    const completedPayload = {
      status: "completed",
      output_url: output.outputUrl,
      error: null,
      completed_at: completedAt,
      metadata: {
        ...runningMetadata,
        completed_at: completedAt,
        processed_provider: job.provider || "seedance",
        generation_mode: output.generationMode,
        generation_warning: output.warning ?? null,
      },
    };

    const { error: completedError } = await supabase
      .from("media_generation_jobs")
      .update(completedPayload)
      .eq("id", job.id)
      .eq("status", "running");

    if (completedError) {
      throw completedError;
    }

    return {
      id: job.id,
      status: "completed",
      outputUrl: output.outputUrl,
      generationMode: output.generationMode,
      warning: output.warning ?? null,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Media generation failed.";
    await supabase
      .from("media_generation_jobs")
      .update({
        status: "failed",
        error: message,
        completed_at: completedAt,
        metadata: {
          ...runningMetadata,
          failed_at: completedAt,
          generation_mode: "failed",
        },
      })
      .eq("id", job.id)
      .eq("status", "running");

    return { id: job.id, status: "failed", error: message };
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);

  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");
  const openAiApiKey = readEnvValue(envValues, "OPENAI_API_KEY");
  const openAiModel = readEnvValue(envValues, "OPENAI_IMAGE_MODEL") || "gpt-image-1";
  const openAiSize = readEnvValue(envValues, "OPENAI_IMAGE_SIZE") || "1024x1024";
  const openAiQuality = readEnvValue(envValues, "OPENAI_IMAGE_QUALITY") || "auto";
  const mediaOutputBucket = readEnvValue(envValues, "MEDIA_OUTPUT_BUCKET");
  const strictProvider = options.strictProvider || readBooleanEnv(envValues, "STRICT_MEDIA_PROVIDER", false);

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const assetType = normalizeAssetType(options.assetType);

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let query = supabase
    .from("media_generation_jobs")
    .select("id, asset_type, module_id, lesson_id, provider, prompt, metadata")
    .eq("status", "queued");

  if (options.moduleId) query = query.eq("module_id", options.moduleId);
  if (options.lessonId) query = query.eq("lesson_id", options.lessonId);
  if (assetType) query = query.eq("asset_type", assetType);

  const { data: queuedJobs, error: fetchError } = await query.order("created_at", { ascending: true }).limit(options.limit);
  if (fetchError) {
    throw new Error(`Unable to fetch queued media jobs: ${fetchError.message}`);
  }

  if (!queuedJobs || queuedJobs.length === 0) {
    console.log("No queued media jobs matched the provided filters.");
    return;
  }

  const processingConfig = {
    openAiApiKey,
    openAiModel,
    openAiSize,
    openAiQuality,
    mediaOutputBucket,
    strictProvider,
  };

  const results = [];
  for (const job of queuedJobs) {
    const result = await processJob(supabase, job, processingConfig);
    results.push(result);
  }

  const completedCount = results.filter((item) => item.status === "completed").length;
  const failedCount = results.filter((item) => item.status === "failed").length;
  const skippedCount = results.filter((item) => item.status === "skipped").length;
  const placeholderWarnings = results.filter(
    (item) => item.status === "completed" && "generationMode" in item && item.generationMode === "placeholder",
  ).length;

  console.log(`Processed: ${results.length}`);
  console.log(`Completed: ${completedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Placeholder completions: ${placeholderWarnings}`);

  if (failedCount > 0) {
    console.log("");
    console.log("Failed jobs:");
    for (const failure of results.filter((item) => item.status === "failed")) {
      console.log(`- ${failure.id}: ${failure.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
