# Koydo AI Media Prompt Catalog

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

## Seedance 2.0 Prompts

### Prompt ID: `SEEDANCE_LESSON_VIDEO_TEMPLATE_01`

Create a child-safe educational lesson video for subject `[SUBJECT]` and lesson `[LESSON_TITLE]`.
Target audience: pre-K through grade 12 (adaptable complexity).
Visual style: bright pastel palette (red, yellow, blue, green, white), high readability, soft rounded shapes.
Structure: 3 acts (hook, explained concept, recap) with simple visual storytelling and no on-screen logos.
Camera: gentle motion, medium framing, occasional close-ups on key concept visuals.
Duration: 35-55 seconds. Aspect: 16:9. FPS: 24.
Safety constraints: no violence, no fear-based scenes, no stereotypes, no copyrighted characters.
Accessibility constraints: high contrast objects, slower transitions, clean backgrounds, low visual clutter.
End frame: calm celebratory transition inviting learner to continue to quiz/activity.

### Prompt ID: `SEEDANCE_LESSON_ANIMATION_TEMPLATE_01`

Generate a short concept animation for `[SUBJECT]` lesson `[LESSON_TITLE]`.
Length: 8-12 seconds, seamless loop.
Palette: happy pastels only, no dark backgrounds.
Motion design: one concept transforms step-by-step using arrows/highlights and soft easing.
No text overlays required; visual metaphor must be understandable for young learners.
Include one mascot-neutral guiding shape to direct attention.
Output: classroom-safe, no logos, no copyrighted references, no sensitive content.

## Hero Image Prompts — Flux Dev 4K (home page hero-family.jpg)

Generated via ComfyUI + flux1-dev-fp8, 1920×1080, 28 steps, euler/simple, cfg=1.0.
Reference: `public/Grok Assets/hero panel image.jpg` — cosmic path scene, family of four.
Target: full-bleed hero behind dark left+bottom gradient overlay. Subjects right-of-center.
Negative for all: "text, watermark, logo, blurry, cartoon, anime, illustration, painting, low quality, deformed face, extra limbs, distorted, briefcase"

### Prompt ID: `HERO_FAMILY_V1_COSMIC_PATH_FAITHFUL`

Cinematic photorealistic wide shot: a diverse family of four — mother and father in their 30s, teenage girl age 14, young boy age 6 — walking confidently together along a luminous glowing amber-golden cobblestone path through a magical night landscape. Deep cosmic starfield sky above with soft teal-blue nebula clouds and the Milky Way visible. Lush green meadow with purple wildflowers in the foreground. Cherry blossom tree on the right edge. Warm amber light from the path glows upward onto their faces. Casual modern clothing — hoodies, jeans, sneakers. Natural warm walking poses, genuine smiles and expressions of wonder. Subjects positioned right-of-center. Ultra-detailed realistic skin texture, natural hair. 4K cinematic, no text, no logos, no briefcases.

### Prompt ID: `HERO_FAMILY_V2_COSMIC_PATH_EPIC`

Epic ultra-wide photorealistic shot from a low camera angle: a multiracial family of four walking toward the viewer along a luminous golden-amber glowing path under a breathtaking Milky Way galaxy sky. Misty mountains and ancient trees in the distant background. Purple and lavender wildflowers in the foreground in soft focus bokeh. Father early 40s, mother mid-30s, daughter age 12, son age 7. All wearing casual warm modern clothing. Natural relaxed walking poses, faces lit softly from below by path glow. Genuine expressions of joy and curiosity. Cinematic depth of field. 4K photorealistic, highly detailed faces, no text, no logos.

### Prompt ID: `HERO_FAMILY_V3_COSMIC_PATH_INTIMATE`

Photorealistic cinematic medium shot: a loving diverse family — Black mother 30s and multiracial father 30s holding hands with their two children ages 5 and 11 — walking along a glowing amber luminous path at night. Deep space sky above with teal nebula wisps and scattered stars. Soft pink cherry blossom petals drifting across the scene. Foreground wildflowers blurred in bokeh. Path light glowing upward creates warm cinematic rim lighting on each person. Casual jeans, hoodies, sneakers. Faces clearly visible with natural smiles and wonder. Hyper-realistic skin, hair, and fabric detail. 4K, no text, no watermarks.

### Prompt ID: `HERO_FAMILY_V4_COSMIC_PATH_ASPIRATIONAL`

Dreamlike photorealistic panoramic scene: a diverse family of four walking single-file along a winding luminous golden-cobblestone path that curves through a vast cosmic meadow under a vivid purple-blue nebula night sky. Stars and distant galaxies visible above. Lush green grass, purple allium flowers, and a flowering cherry blossom tree frame the foreground. Each family member — grandmother 60s, mother 35, son 10, daughter 7 — wears casual everyday clothing. Faces are lifelike with natural expressions of hope and wonder. Warm amber path glow. Cinematic 4K, ultra-detailed, no text, no logos, no briefcases.

## Prompt Variables

- `[AGE_GROUP]`: pre-k | elementary | middle-school | high-school
- `[SUBJECT]`: math | reading | science | history | coding
- `[LANGUAGE]`: en | es | fr | de | ja | ko | zh | ar | hi | pt
- `[VISUAL_STYLE]`: flat-2d | painterly | infographic | low-poly
- `[ASPECT_RATIO]`: 1:1 | 3:2 | 16:9
