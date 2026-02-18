# EduForge AI Media Prompt Catalog

This file stores reusable prompt templates for generating artwork, avatars, and videos later via OpenAI APIs.

## How to use

1. Copy prompt template.
2. Replace bracket variables such as `[AGE_GROUP]` and `[TOPIC]`.
3. Generate media and save outputs under `public/generated-media/`.
4. Keep the `Prompt ID` in metadata for traceability.

## Artwork Prompts

### Prompt ID: `ART_PREK_COUNTING_ROBOT_01`
Create a warm, child-friendly educational illustration for a Pre-K math lesson on counting 1-10. Scene: a friendly robot and diverse children in a bright classroom counting colorful blocks. Style: clean 2D digital illustration, soft shapes, high readability, low clutter, safe for ages 4-6, no text, no logos, no copyrighted characters. Aspect ratio 3:2.

### Prompt ID: `ART_ELEM_READING_FOREST_01`
Create an elementary reading-comprehension scene with two kids exploring a magical forest and discovering story clues. Style: vivid but balanced colors, clear foreground/background separation, expressive faces, modern educational app art, no text overlays, no brands, no copyrighted characters. Aspect ratio 3:2.

### Prompt ID: `ART_STEM_LAB_01`
Create a middle-school STEM lab illustration with students collaborating on a beginner robotics challenge. Style: semi-flat educational infographic look, clear object hierarchy, culturally inclusive, optimistic mood, no text, no logos, no copyrighted characters. Aspect ratio 16:9.

## Avatar Prompts

### Prompt ID: `AVATAR_CHILD_NEUTRAL_01`
Generate a front-facing child avatar for an educational app. Style: friendly, rounded features, neutral background, high contrast, no accessories with brand markings, no text, no photorealism. Output as transparent PNG, square format, suitable for UI circles.

### Prompt ID: `AVATAR_TEEN_SCIFI_01`
Generate a teen avatar with a curious, confident expression for a gamified learning profile. Style: stylized 2D character, subtle sci-fi learning motif, clean edge lines, neutral safe design, no text, no logos. Output as transparent PNG, square format.

## Video Prompts

### Prompt ID: `VIDEO_PREK_SHAPES_INTRO_01`
Create a 20-second educational intro video for Pre-K shapes. Storyboard: (1) cheerful classroom opens, (2) circle/square/triangle appear with playful motion, (3) friendly mascot waves and invites learner to start. Style: bright 2D animation, simple motion, no text embedded, no brand references, safe for ages 4-6. Resolution 1280x720.

### Prompt ID: `VIDEO_SCIENCE_LOOP_01`
Create a 30-second looping ambient background video for a science lesson dashboard. Scene: subtle animated lab with floating molecules and soft motion. Style: minimal distraction, smooth loop, medium contrast for overlay UI, no text, no logos. Resolution 1920x1080.

## Prompt Variables

- `[AGE_GROUP]`: pre-k | elementary | middle-school | high-school
- `[SUBJECT]`: math | reading | science | history | coding
- `[LANGUAGE]`: en | es | fr | de | ja | ko | zh | ar | hi | pt
- `[VISUAL_STYLE]`: flat-2d | painterly | infographic | low-poly
- `[ASPECT_RATIO]`: 1:1 | 3:2 | 16:9