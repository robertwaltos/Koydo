import type { LearningModule, Lesson } from "@/lib/modules/types";

export function buildSeedanceVideoPrompt(module: LearningModule, lesson: Lesson) {
  return [
    "Seedance 2.0 video generation prompt:",
    `Create a child-safe educational lesson video for subject "${module.subject}" and lesson "${lesson.title}".`,
    "Target audience: pre-K through grade 12 adaptable, inclusive global classroom representation.",
    "Visual style: bright pastel palette (red, yellow, blue, green, white), high readability, soft rounded shapes.",
    "Structure: 3 acts (hook, explained concept, recap) with simple visual storytelling and no on-screen brand logos.",
    "Camera: gentle motion, medium framing, occasional close-ups on key concept visuals.",
    "Duration: 35-55 seconds. Aspect: 16:9. FPS: 24.",
    "Safety and policy constraints: no violence, no fear-based scenes, no stereotypes, no copyrighted characters.",
    "Accessibility constraints: high contrast objects, slower transitions, clean backgrounds, low visual clutter.",
    `Core concept focus: ${lesson.title}.`,
    "End frame: celebratory but calm transition inviting learner to continue to quiz/activity.",
  ].join(" ");
}

export function buildSeedanceAnimationPrompt(module: LearningModule, lesson: Lesson) {
  return [
    "Seedance 2.0 animation prompt:",
    `Generate a short concept animation for "${module.subject}" lesson "${lesson.title}".`,
    "Length: 8-12 seconds, seamless loop, transparent educational intent.",
    "Palette: happy pastels only, no dark backgrounds.",
    "Motion design: one concept transforms step-by-step using arrows/highlights and soft easing.",
    "No text overlays required; visual metaphor must be understandable for young learners.",
    "Include one mascot-neutral guiding shape to direct attention.",
    "Output: classroom-safe, no logos, no copyrighted references, no sensitive content.",
  ].join(" ");
}
