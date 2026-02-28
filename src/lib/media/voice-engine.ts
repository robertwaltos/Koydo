
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export type VoiceProfile = "male_adult" | "male_young" | "female_adult" | "female_young";

export const VOICE_PROFILES: { id: VoiceProfile; label: string }[] = [
  { id: "male_adult", label: "Male Adult" },
  { id: "male_young", label: "Male Young" },
  { id: "female_adult", label: "Female Adult" },
  { id: "female_young", label: "Female Young" },
];

export async function getVoiceUrl(lessonId: string, voiceId: VoiceProfile): Promise<string | null> {
  const supabase = createSupabaseBrowserClient();
  
  // Try to find pre-generated audio
  // Note: audio jobs are stored as asset_type='animation' with metadata.is_audio=true
  // due to a DB constraint workaround.
  const { data, error } = await supabase
    .from("media_generation_jobs")
    .select("output_url")
    .eq("lesson_id", lessonId)
    .eq("asset_type", "animation")
    .contains("metadata", { voice_id: voiceId, is_audio: true })
    .eq("status", "completed")
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") {
    console.warn("[voice-engine] failed to fetch voice asset", {
      lessonId,
      voiceId,
      message: error.message,
    });
  }

  if (data?.output_url) {
    return data.output_url;
  }

  return null;
}

export async function requestDynamicVoice(text: string, voiceId: VoiceProfile): Promise<string> {
  // This would call an API route that triggers the ComfyUI job or an external TTS.
  console.warn("Dynamic voice generation requested", {
    voiceId,
    preview: text.slice(0, 120),
  });
  return "";
}
