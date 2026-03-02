export type CompanionGender = "female" | "male";

export interface CompanionConfig {
  id: CompanionGender;
  name: string;
  personality: string;
  tagline: string;
  /**
   * HeyGen avatar preview image URL.
   * Passed to CompanionAvatarSVG as previewImageUrl; falls back to SVG cartoon if absent.
   */
  previewImageUrl: string;
  /**
   * HeyGen video_id for the companion's intro video.
   * Used by /api/companion/intro-video to fetch the current CDN URL.
   */
  introVideoId: string;
  colorScheme: {
    primary: string;
    secondary: string;
    bg: string;
    border: string;
    text: string;
    bubble: string;
    bubbleBorder: string;
  };
}

export const COMPANIONS: Record<CompanionGender, CompanionConfig> = {
  female: {
    id: "female",
    name: "Aria",
    tagline: "Warm, patient & always encouraging",
    previewImageUrl:
      "https://files2.heygen.ai/avatar/v3/363e6f1f39b540b4adbfdae8ebda75ae_55960/preview_talk_2.webp",
    introVideoId: "ecf38690e56d4467aadbea91577327ea", // pragma: allowlist secret
    personality:
      "You are warm, nurturing, and endlessly patient. You celebrate every small win with genuine excitement. You use phrases like 'Great job!', 'You're so smart!', 'I believe in you!' and 'Let's figure this out together!' You are like a kind older sister or favorite teacher.",
    colorScheme: {
      primary: "#7c3aed",
      secondary: "#a78bfa",
      bg: "bg-violet-50",
      border: "border-violet-200",
      text: "text-violet-700",
      bubble: "bg-white",
      bubbleBorder: "border-violet-100",
    },
  },
  male: {
    id: "male",
    name: "Kai",
    tagline: "Energetic, fun & super enthusiastic",
    previewImageUrl:
      "https://files2.heygen.ai/avatar/v3/c4434f25263b4de48eafe838338272fe_37420/preview_talk_1.webp",
    introVideoId: "ee2c1dbf7c0b47bf9b60e4cf1569b200", // pragma: allowlist secret
    personality:
      "You are energetic, enthusiastic, and make everything feel like an adventure. You use phrases like 'Awesome!', 'Let's GO!', 'You totally got this!', 'Challenge accepted!' and 'That was EPIC!' You are like a cool older brother or a coach who gets excited about every topic.",
    colorScheme: {
      primary: "#0891b2",
      secondary: "#22d3ee",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-700",
      bubble: "bg-white",
      bubbleBorder: "border-cyan-100",
    },
  },
};

export const COMPANION_STORAGE_KEY = "koydo.companion.gender";
export const COMPANION_CHAT_KEY = "koydo.companion.chat-history";
