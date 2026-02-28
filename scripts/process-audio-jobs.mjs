import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const COMFY_JOB_TIMEOUT_MS = 10 * 60 * 1000;

// Workflow template for XTTS
const AUDIO_WORKFLOW_TEMPLATE = {
  "1": {
    "inputs": {
      "audio": "reference_audio.wav" // To be replaced dynamically
    },
    "class_type": "LoadAudioPath",
    "_meta": {
      "title": "Load Audio"
    }
  },
  "2": {
    "inputs": {
      "text": "Hello world", // To be replaced
      "language": "en",
      "temperature": 0.65,
      "length_penalty": 1,
      "repetition_penalty": 2,
      "top_k": 50,
      "top_p": 0.8,
      "speed": 1,
      "audio": [
        "1",
        0
      ]
    },
    "class_type": "XTTS_INFER",
    "_meta": {
      "title": "XTTS Inference"
    }
  },
  "3": {
    "inputs": {
      "audio": [
        "2",
        0
      ]
    },
    "class_type": "PreViewAudio",
    "_meta": {
      "title": "PreView Audio"
    }
  }
};

function parseArgs(argv) {
  const options = {
    limit: 5,
    strictProvider: false,
    verbose: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--limit" && argv[i + 1]) {
      options.limit = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === "--verbose") {
      options.verbose = true;
    }
  }

  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    values[key] = value;
  }

  return values;
}

function getErrorMessage(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function getJobMetadata(job) {
  if (job?.metadata && typeof job.metadata === "object") {
    return job.metadata;
  }
  return {};
}

function cloneWorkflow(workflow) {
  return JSON.parse(JSON.stringify(workflow));
}

function buildComfyViewUrl(baseUrl, filename, subfolder, type) {
  const params = new URLSearchParams({
    filename,
    subfolder: subfolder || "",
    type: type || "output",
  });
  return `${baseUrl}/view?${params.toString()}`;
}

async function waitForComfyUIHistory(baseUrl, promptId) {
  const start = Date.now();

  while (Date.now() - start < COMFY_JOB_TIMEOUT_MS) {
    try {
      const res = await fetch(`${baseUrl}/history/${promptId}`);
      if (res.ok) {
        const data = await res.json();
        // data is { "prompt_id": { ... } }
        if (data?.[promptId]) {
          return data[promptId];
        }
      }
    } catch {
      // Retry
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  throw new Error("ComfyUI generation timed out");
}

async function queueWorkflow(baseUrl, workflow) {
  const queueRes = await fetch(`${baseUrl}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: workflow }),
  });

  if (!queueRes.ok) {
    const errorText = await queueRes.text();
    throw new Error(`ComfyUI queue failed: ${queueRes.status} ${queueRes.statusText} - ${errorText}`);
  }

  return queueRes.json();
}

async function updateJob(supabase, jobId, payload) {
  const { error } = await supabase.from("media_generation_jobs").update(payload).eq("id", jobId);
  if (error) {
    throw error;
  }
}

async function processAudioJob(supabase, job, config) {
  console.log(`Processing audio job ${job.id}...`);
  
  const workflow = cloneWorkflow(AUDIO_WORKFLOW_TEMPLATE);
  const metadata = getJobMetadata(job);
  
  // Set text prompt
  workflow["2"].inputs.text = job.prompt;

  // Select voice based on metadata or default
  // metadata.voice_id could be 'male_adult', 'female_adult', 'male_young', 'female_young'
  // We map these to actual filenames existing in ComfyUI/input/
  
  // Use metadata.reference_wav if provided (set by queue script), else default.
  workflow["1"].inputs.audio = metadata.reference_wav || 'female_adult.mp3';

  // Add a tiny random variation to temperature to bust ComfyUI's node cache.
  // Without this, a previously-failed execution with the same text+voice would
  // return cached empty outputs instead of re-running.
  workflow["2"].inputs.temperature = 0.65 + (Math.random() * 0.001);

  const queueData = await queueWorkflow(config.comfyUiBaseUrl, workflow);
  console.log(`[job ${job.id}] queued XTTS prompt_id=${queueData.prompt_id}`);

  const history = await waitForComfyUIHistory(config.comfyUiBaseUrl, queueData.prompt_id);

  // ComfyUI history stores OUTPUT_NODE results as:
  // outputs["node_id"]["key"] where key matches what was returned in the "ui" dict.
  // PreViewAudio returns {"ui": {"audio": [filename, "output"]}}
  // so history["outputs"]["3"]["audio"] = ["filename.wav", "output"]
  const audioOutput = history.outputs?.["3"]?.audio;
  if (!audioOutput || !audioOutput[0]) {
    const status = history.status?.status_str;
    const errMsg = history.status?.messages?.find(m => m[0] === "execution_error")?.[1]?.exception_message;
    throw new Error(`No audio output from XTTS node. Status: ${status}. ${errMsg || ""}`);
  }

  const filename = audioOutput[0];
  // audioOutput[1] is "output" (folder type, not subfolder) — file is in output root
  const comfyViewUrl = buildComfyViewUrl(config.comfyUiBaseUrl, filename, "", "output");

  // Download the WAV from ComfyUI and upload to Supabase Storage so web clients can access it
  const voiceId = metadata.voice_id || "default";
  const storagePath = `audio/${voiceId}/${filename}`;

  const wavRes = await fetch(comfyViewUrl);
  if (!wavRes.ok) {
    throw new Error(`Failed to download generated audio: ${wavRes.status}`);
  }
  const wavBuffer = await wavRes.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from("media")
    .upload(storagePath, wavBuffer, { contentType: "audio/wav", upsert: true });

  if (uploadError) {
    throw new Error(`Supabase Storage upload failed: ${uploadError.message}`);
  }

  const { data: { publicUrl } } = supabase.storage.from("media").getPublicUrl(storagePath);

  await updateJob(supabase, job.id, {
    status: "completed",
    output_url: publicUrl,
  });
  console.log(`[job ${job.id}] audio complete: ${publicUrl}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(envPath);
  
  const config = {
    supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: env.SUPABASE_SERVICE_ROLE_KEY,
    comfyUiBaseUrl: env.COMFYUI_API_URL || "http://127.0.0.1:8188",
  };

  if (!config.supabaseUrl || !config.supabaseKey) {
    console.error("Missing Supabase credentials in .env");
    process.exit(1);
  }

  const supabase = createClient(config.supabaseUrl, config.supabaseKey);

  console.log("Starting audio job processor...");
  console.log(`ComfyUI URL: ${config.comfyUiBaseUrl}`);

  // Reset any previously failed audio jobs back to queued so they can be retried
  const { data: stale } = await supabase
    .from("media_generation_jobs")
    .select("id, metadata")
    .eq("status", "failed")
    .eq("asset_type", "animation");

  if (stale && stale.length > 0) {
    const audioStale = stale.filter(j => j.metadata?.is_audio === true);
    if (audioStale.length > 0) {
      console.log(`Resetting ${audioStale.length} failed audio jobs back to queued...`);
      for (const j of audioStale) {
        await supabase.from("media_generation_jobs").update({ status: "queued" }).eq("id", j.id);
      }
    }
  }

  // Wait for ComfyUI to be ready before starting
  console.log("Waiting for ComfyUI to be available...");
  while (true) {
    try {
      const res = await fetch(`${config.comfyUiBaseUrl}/system_stats`);
      if (res.ok) break;
    } catch { /* not ready yet */ }
    await new Promise(r => setTimeout(r, 3000));
    process.stdout.write(".");
  }
  console.log("\nComfyUI is ready.");

  while (true) {
    try {
      // Fetch pending audio jobs
      // Audio jobs are marked with metadata->is_audio: true
      // or we can use a specific tag? 
      // The queue-audio-jobs.mjs uses: asset_type: 'animation', metadata: { is_audio: true }
      
      const { data: jobs, error } = await supabase
        .from("media_generation_jobs")
        .select("*")
        .eq("status", "queued")
        .eq("asset_type", "animation") // Use indexed column first to avoid timeout
        .limit(args.limit);

      if (error) throw error;

      // Filter in memory to avoid complex JSONB queries timing out
      const audioJobs = jobs.filter(j => j.metadata && j.metadata.is_audio === true);

      if (audioJobs.length === 0) {
        if (args.verbose) process.stdout.write(".");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        continue;
      }

      console.log(`\nFound ${audioJobs.length} audio jobs`);

      for (const job of audioJobs) {
        // We cannot set status to 'processing' because the database constraint 'media_generation_jobs_status_check'
        // only allows 'queued', 'completed', 'failed' for asset_type 'animation'.
        // We will just process it and then set it to 'completed' or 'failed'.
        try {
          await processAudioJob(supabase, job, config);
        } catch (err) {
          console.error(`[job ${job.id}] failed:`, err);
          await updateJob(supabase, job.id, { 
            status: "failed", 
            metadata: { ...job.metadata, error_message: getErrorMessage(err) }
          });
        }
      }

    } catch (err) {
      console.error("Polling error:", err);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

main().catch(console.error);
