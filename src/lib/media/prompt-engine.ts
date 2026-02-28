import { MEDIA_PROMPTS } from "./generated-prompts";

export type MediaAssetCategory = "video" | "image" | "audio" | "animation";

export interface CompiledMediaPrompt {
  id: string;
  sourceText: string;
  parameters: Record<string, unknown>;
  negativePrompt?: string;
}

export class MediaPromptEngine {
  
  static compile(
    promptId: string, 
    context: {
      gradeLevel?: string;
      worldStyle?: string;
      concept?: string;
    } = {}
  ): CompiledMediaPrompt {
    
    // Find the prompt definition
    // For now assuming MEDIA_PROMPTS is a map or array of prompt objects
    const promptDef = Object.values(MEDIA_PROMPTS).find((prompt) => prompt.id === promptId);
    
    if (!promptDef) {
       // Fallback for unknown prompt ID? Or try generating generically?
       // For now, return a placeholder
       return {
         id: promptId,
         sourceText: context.concept || promptId,
         parameters: context,
         negativePrompt: "text, watermark, blurry, distorted, low quality",
       };
    }

    // Replace variables in the prompt text
    let text = promptDef.prompt || "";
    for (const [key, value] of Object.entries(context)) {
      text = text.replace(new RegExp(`{${key}}`, "g"), String(value));
    }

    // Apply global constraints
    const cleanRe = /(illegal|nsfw|violent|hateful|child abuse)/gi;
    if (cleanRe.test(text)) {
        throw new Error("Prompt triggered safety filter");
    }

    return {
      id: promptId,
      sourceText: text,
      parameters: context,
      negativePrompt:
        (typeof promptDef.negativePrompt === "string"
          ? promptDef.negativePrompt
          : null) || "text, watermark, blurry, distorted, low quality",
    };
  }
}
