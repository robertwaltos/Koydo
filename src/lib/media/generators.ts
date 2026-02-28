import { serverEnv } from "@/lib/config/env";

export interface MediaGenerationResult {
  assetUrl: string;
  generationId: string;
  metadata?: Record<string, unknown>;
}

export interface MediaGenerator {
  isHealthy(): Promise<boolean>;
  generateImage(prompt: string, options?: Record<string, unknown>): Promise<MediaGenerationResult>;
}


const FLUX_SCHNELL_WORKFLOW_TEMPLATE = {
  "3": {
    "inputs": {
      "seed": 0,
      "steps": 4, 
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
      "text": "", // To be filled
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
      "filename_prefix": "Koydo_Gen",
      "images": ["8", 0]
    },
    "class_type": "SaveImage",
    "_meta": { "title": "Save Image" }
  }
};

export class ComfyUIGenerator implements MediaGenerator {
  private baseUrl: string;

  constructor() {
    this.baseUrl = serverEnv.COMFYUI_LAN_URL || serverEnv.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
  }

  async isHealthy(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/system_stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(5000), // 5s timeout
      });
      return response.ok;
    } catch (error) {
      console.warn("ComfyUI health check failed:", error);
      return false;
    }
  }

  async generateImage(
    prompt: string,
    options?: Record<string, unknown>,
  ): Promise<MediaGenerationResult> {
    const workflow = JSON.parse(JSON.stringify(FLUX_SCHNELL_WORKFLOW_TEMPLATE));
    
    // Inject parameters
    workflow["6"].inputs.text = prompt;
    workflow["3"].inputs.seed = Math.floor(Math.random() * 1000000000);
    if (options && typeof options.seed === "number") {
      workflow["3"].inputs.seed = options.seed;
    }
    
    // Send to ComfyUI
    const response = await fetch(`${this.baseUrl}/prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: workflow }),
    });

    if (!response.ok) {
       throw new Error(`ComfyUI Error: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    return {
       assetUrl: "", // Actual URL requires polling /history or websocket
       generationId: data.prompt_id,
       metadata: { prompt, seed: workflow["3"].inputs.seed }
    };
  }
}

export const neuralCinema = new ComfyUIGenerator();
