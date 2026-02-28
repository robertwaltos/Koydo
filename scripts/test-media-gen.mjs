
const COMFY_URL = "http://127.0.0.1:8188";

// Basic Flux Workflow Template (inferred from "All-in-one" description)
const FLUX_WORKFLOW = {
  "3": {
    "inputs": {
      "seed": 12345,
      "steps": 4, // Schnell is fast
      "cfg": 1.0, 
      "sampler_name": "euler",
      "scheduler": "simple",
      "denoise": 1.0,
      "model": ["4", 0],
      "positive": ["6", 0],
      "negative": ["7", 0],
      "latent_image": ["5", 0]
    },
    "class_type": "KSampler",
    "_meta": { "title": "KSampler" }
  },
  "4": {
    "inputs": {
      "ckpt_name": "flux1-schnell-fp8.safetensors" 
    },
    "class_type": "CheckpointLoaderSimple",
    "_meta": { "title": "Load Checkpoint" }
  },
  "5": {
    "inputs": {
      "width": 1024,
      "height": 1024,
      "batch_size": 1
    },
    "class_type": "EmptyLatentImage",
    "_meta": { "title": "Empty Latent Image" }
  },
  "6": {
    "inputs": {
      "text": "A majestic library floating in space, futuristic, educational, 8k resolution, cinematic lighting",
      "clip": ["4", 1]
    },
    "class_type": "CLIPTextEncode",
    "_meta": { "title": "CLIP Text Encode (Prompt)" }
  },
  "7": {
    "inputs": {
      "text": "text, watermark, blurry",
      "clip": ["4", 1]
    },
    "class_type": "CLIPTextEncode",
    "_meta": { "title": "CLIP Text Encode (Negative)" }
  },
  "8": {
    "inputs": {
      "samples": ["3", 0],
      "vae": ["4", 2]
    },
    "class_type": "VAEDecode",
    "_meta": { "title": "VAE Decode" }
  },
  "9": {
    "inputs": {
      "filename_prefix": "Koydo_Test",
        "images": ["8", 0]
    },
    "class_type": "SaveImage",
    "_meta": { "title": "Save Image" }
  }
};

async function testGeneration() {
  console.log('Connecting to ' + COMFY_URL + '...');
  
  try {
    // 1. Health verify
    const respStats = await fetch(COMFY_URL + '/system_stats');
    if (!respStats.ok) throw new Error("ComfyUI not reachable");
    console.log("ComfyUI System Stats OK");

    // 2. Queue Prompt
    // Randomize seed
    const seed = Math.floor(Math.random() * 1000000000);
    FLUX_WORKFLOW["3"].inputs.seed = seed;
    console.log('Sending prompt with seed ' + seed + '...');
    
    const respPrompt = await fetch(COMFY_URL + '/prompt', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: FLUX_WORKFLOW }),
    });

    if (!respPrompt.ok) {
       console.error("Prompt Failed:", await respPrompt.text());
       return;
    }

    const data = await respPrompt.json();
    console.log("✅ Prompt Queued Successfully!");
    console.log('ID: ' + data.prompt_id);
    console.log("Check ComfyUI output folder or history.");

  } catch (err) {
    console.error("Error:", err.message);
    if (err.cause) console.error(err.cause);
  }
}

testGeneration();
