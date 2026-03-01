/**
 * Hero image inpainting — ComfyUI + Flux Dev fp8
 *
 * Three sequential passes on hero-img2img-v2.jpg:
 *   Pass 1 — change adult man (far right) to brown/Black race
 *   Pass 2 — change toddler's briefcase to a colourful backpack
 *   Pass 3 — global hyperrealism boost (img2img denoise=0.40)
 *
 * Output:  public/generated-images/hero-inpaint-final.jpg
 * Preview: public/generated-images/hero-inpaint-p{1,2}.jpg  (intermediate passes)
 *
 * Usage:
 *   node scripts/generate-hero-inpaint.mjs
 *   node scripts/generate-hero-inpaint.mjs --pass 1   # single pass
 *   node scripts/generate-hero-inpaint.mjs --check    # health check only
 */

import fs             from "node:fs/promises";
import path           from "node:path";
import zlib           from "node:zlib";
import { promisify }  from "node:util";

const deflateAsync = promisify(zlib.deflate);

const COMFYUI_URL = process.env.COMFYUI_LAN_URL || process.env.COMFYUI_BASE_URL || "http://127.0.0.1:8188";
const SOURCE_V2   = path.resolve("public/generated-images/hero-img2img-v2.jpg");
const OUT_DIR     = path.resolve("public/generated-images");

const MODEL     = "flux1-dev-fp8.safetensors";
const STEPS     = 30;
const CFG       = 1.0;
const SAMPLER   = "euler";
const SCHEDULER = "simple";

// ── Image dimensions (hero-img2img-v2.jpg) ────────────────────────────────────
const W = 1920;
const H = 1080;

// ── Negative shared across all passes ────────────────────────────────────────
const NEG = "text, watermark, logo, blurry, deformed face, extra limbs, bad anatomy, ugly, out of frame, cartoon, anime, mutation, disfigured";

// ── Pass definitions ──────────────────────────────────────────────────────────
// Each pass describes a targeted inpaint region + what to generate there.
// mask.regions = array of {x, y, w, h} rectangles (white = repaint, black = preserve).
// The mask is feathered by FEATHER_PX pixels on every edge to avoid seams.
const FEATHER_PX = 28;

const PASSES = [
  {
    id:          "P1_MAN_RACE",
    label:       "Change adult man (far right) to Brown/Black race",
    inputFile:   SOURCE_V2,
    outputFile:  path.join(OUT_DIR, "hero-inpaint-p1.jpg"),
    denoise:     0.93,
    positive:    "A photorealistic Black man in his late 30s, warm dark brown skin, well-groomed short beard, natural confident expression, warm smile, path glow from below on his face, wearing a dark business suit, standing on a glowing golden path at night, ultra-detailed realistic skin texture, pores visible, cinematic lighting, 4K",
    mask: {
      // Cover face, neck and both hands (where his skin is visible)
      regions: [
        { x: 1170, y: 125, w: 280, h: 400 },   // face + top of neck
        { x: 1195, y: 490, w: 180, h: 100 },   // lower neck / collar
        { x: 1260, y: 640, w: 200, h: 220 },   // right hand + briefcase handle
        { x: 1100, y: 590, w: 130, h: 180 },   // left arm / wrist
      ],
    },
  },
  {
    id:          "P2_TODDLER_BACKPACK",
    label:       "Replace toddler's briefcase with a colourful backpack",
    inputFile:   path.join(OUT_DIR, "hero-inpaint-p1.jpg"),
    outputFile:  path.join(OUT_DIR, "hero-inpaint-p2.jpg"),
    denoise:     0.92,
    positive:    "A toddler wearing a small bright red and yellow children's backpack with cartoon patches, backpack straps visible on both shoulders, the child's hands are free and swinging naturally while walking, casual toddler clothes, jeans and sneakers, walking on a glowing golden path at night, photorealistic, ultra-detailed, 4K",
    mask: {
      regions: [
        { x: 40,  y: 615, w: 145, h: 200 },   // toddler's upper back / shoulder (backpack area)
        { x: 70,  y: 695, w: 210, h: 295 },   // toddler's arm + briefcase (replace with free hand)
      ],
    },
  },
  {
    id:          "P3_HYPERREALISM",
    label:       "Global hyperrealism boost pass",
    inputFile:   path.join(OUT_DIR, "hero-inpaint-p2.jpg"),
    outputFile:  path.join(OUT_DIR, "hero-inpaint-final.jpg"),
    denoise:     0.38,   // low — keeps composition, boosts skin/texture detail globally
    positive:    "Hyperrealistic photographic family walking on a luminous glowing golden cobblestone path through a magical cosmic night landscape. Starfield sky, Milky Way nebula, purple wildflowers, cherry blossom trees. Diverse family in casual modern clothing — Black man in suit, Asian woman in grey hoodie, teenage girl, young boy, toddler with backpack. Ultra-detailed 4K skin texture, natural hair, photorealistic faces, cinematic path glow, no text, no logos.",
    mask:        null,   // null = full-image img2img, no mask
  },
];

// ── PNG mask builder (no external deps) ──────────────────────────────────────
// Creates a grayscale PNG where white rectangles = regions to repaint.
// Feathering is applied at each rectangle's edge for seamless blending.
async function buildMaskPNG(width, height, regions, featherPx) {
  // Float32 canvas, 0.0 = preserve, 1.0 = repaint
  const canvas = new Float32Array(width * height);

  for (const { x: rx, y: ry, w: rw, h: rh } of regions) {
    for (let py = ry; py < ry + rh && py < height; py++) {
      for (let px = rx; px < rx + rw && px < width; px++) {
        // Feather factor: min distance to any edge of this rectangle, clamped to [0,1]
        const dx = Math.min(px - rx, rx + rw - 1 - px);
        const dy = Math.min(py - ry, ry + rh - 1 - py);
        const factor = Math.min(1, Math.min(dx, dy) / featherPx);
        const idx = py * width + px;
        canvas[idx] = Math.max(canvas[idx], factor);
      }
    }
  }

  // Convert float canvas to uint8 (0-255 grayscale)
  const pixels = Buffer.alloc(width * height);
  for (let i = 0; i < canvas.length; i++) pixels[i] = Math.round(canvas[i] * 255);

  // Build PNG raw data: one filter byte (0x00) per row + pixels
  const rows = Buffer.alloc(height * (width + 1));
  for (let y = 0; y < height; y++) {
    rows[y * (width + 1)] = 0; // filter = None
    pixels.copy(rows, y * (width + 1) + 1, y * width, (y + 1) * width);
  }

  const compressed = await deflateAsync(rows);

  // CRC32 (IEEE 802.3 polynomial)
  const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[i] = c;
    }
    return t;
  })();
  const crc32 = (buf) => {
    let c = 0xffffffff;
    for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };

  const chunk = (type, data) => {
    const t   = Buffer.from(type);
    const len = Buffer.allocUnsafe(4); len.writeUInt32BE(data.length);
    const crc = Buffer.allocUnsafe(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
    return Buffer.concat([len, t, data, crc]);
  };

  const IHDR = Buffer.allocUnsafe(13);
  IHDR.writeUInt32BE(width,  0);
  IHDR.writeUInt32BE(height, 4);
  IHDR[8]  = 8; // bit depth
  IHDR[9]  = 0; // grayscale
  IHDR[10] = 0; // deflate
  IHDR[11] = 0; // adaptive filtering
  IHDR[12] = 0; // no interlace

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    chunk("IHDR", IHDR),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ── ComfyUI workflow builders ─────────────────────────────────────────────────
//
// Inpainting uses VAEEncodeForInpaint (not SetLatentNoiseMask).
// VAEEncodeForInpaint zeroes the masked latent region so the sampler generates
// those pixels from scratch — the only reliable inpaint method for Flux's
// rectified flow architecture.
// After sampling, ImageCompositeMasked blends the result back over the original
// outside the mask, eliminating any seam from the VAE round-trip.
//
// Node map:
//   1  LoadImage (source)
//   2  LoadImage (mask PNG)
//   3  ImageToMask  (mask PNG → MASK tensor, read red channel)
//   4  CheckpointLoaderSimple
//   5  VAEEncodeForInpaint  (zeros masked region, grow_mask_by=8 feathers edge)
//   6  CLIPTextEncode (positive)
//   7  CLIPTextEncode (negative)
//   8  KSampler  (denoise=1.0 — generates masked region from scratch)
//   9  VAEDecode
//  10  ImageCompositeMasked  (paste generated region back onto original)
//  11  SaveImage
function buildInpaintWorkflow(sourceFilename, maskFilename, positive, seed) {
  return {
    "1":  { class_type: "LoadImage",              inputs: { image: sourceFilename, upload: "image" } },
    "2":  { class_type: "LoadImage",              inputs: { image: maskFilename,   upload: "image" } },
    "3":  { class_type: "ImageToMask",            inputs: { image: ["2", 0], channel: "red" } },
    "4":  { class_type: "CheckpointLoaderSimple", inputs: { ckpt_name: MODEL } },
    // VAEEncodeForInpaint: fills masked pixels with mean, sampler regenerates them
    "5":  { class_type: "VAEEncodeForInpaint",    inputs: { pixels: ["1", 0], vae: ["4", 2], mask: ["3", 0], grow_mask_by: 8 } },
    "6":  { class_type: "CLIPTextEncode",         inputs: { text: positive, clip: ["4", 1] } },
    "7":  { class_type: "CLIPTextEncode",         inputs: { text: NEG,      clip: ["4", 1] } },
    // denoise=1.0: generate masked region completely from the positive prompt
    "8":  {
      class_type: "KSampler",
      inputs: {
        seed, steps: STEPS, cfg: CFG, sampler_name: SAMPLER, scheduler: SCHEDULER, denoise: 1.0,
        model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0],
      },
    },
    "9":  { class_type: "VAEDecode",              inputs: { samples: ["8", 0], vae: ["4", 2] } },
    // Composite: paste generated pixels back onto original outside the mask
    "10": { class_type: "ImageCompositeMasked",   inputs: { destination: ["1", 0], source: ["9", 0], mask: ["3", 0], x: 0, y: 0, resize_source: false } },
    "11": { class_type: "SaveImage",              inputs: { filename_prefix: "HeroInpaint", images: ["10", 0] } },
  };
}

function buildImg2ImgWorkflow(sourceFilename, positive, denoise, seed) {
  return {
    // No ImageScale — source is already 1920×1080 after inpaint passes
    "1": { class_type: "LoadImage",              inputs: { image: sourceFilename, upload: "image" } },
    "2": { class_type: "CheckpointLoaderSimple", inputs: { ckpt_name: MODEL } },
    "3": { class_type: "VAEEncode",              inputs: { pixels: ["1", 0], vae: ["2", 2] } },
    "4": { class_type: "CLIPTextEncode",         inputs: { text: positive,   clip: ["2", 1] } },
    "5": { class_type: "CLIPTextEncode",         inputs: { text: NEG,        clip: ["2", 1] } },
    "6": {
      class_type: "KSampler",
      inputs: {
        seed, steps: STEPS, cfg: CFG, sampler_name: SAMPLER, scheduler: SCHEDULER, denoise,
        model: ["2", 0], positive: ["4", 0], negative: ["5", 0], latent_image: ["3", 0],
      },
    },
    "7": { class_type: "VAEDecode",  inputs: { samples: ["6", 0], vae: ["2", 2] } },
    "8": { class_type: "SaveImage",  inputs: { filename_prefix: "HeroFinal", images: ["7", 0] } },
  };
}

// ── ComfyUI API helpers ───────────────────────────────────────────────────────
async function checkHealth() {
  const res   = await fetch(`${COMFYUI_URL}/system_stats`, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`ComfyUI offline: ${res.status}`);
  const stats = await res.json();
  const dev   = stats.devices?.[0];
  const used  = Math.round((dev.vram_total - dev.vram_free) / 1024 ** 3 * 10) / 10;
  const total = Math.round(dev.vram_total / 1024 ** 3);
  console.log(`✓ ComfyUI online — ${COMFYUI_URL}  VRAM: ${used}/${total}GB`);
}

async function uploadBuffer(buffer, filename, mime = "image/png") {
  const boundary = "----FB" + Math.random().toString(36).slice(2);
  const pre      = `--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="${filename}"\r\nContent-Type: ${mime}\r\n\r\n`;
  const suf      = `\r\n--${boundary}--\r\n`;
  const body     = Buffer.concat([Buffer.from(pre), buffer, Buffer.from(suf)]);
  const res      = await fetch(`${COMFYUI_URL}/upload/image`, {
    method:  "POST",
    headers: { "Content-Type": `multipart/form-data; boundary=${boundary}` },
    body,
  });
  if (!res.ok) throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
  return (await res.json()).name;
}

async function queuePrompt(workflow) {
  const res = await fetch(`${COMFYUI_URL}/prompt`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ prompt: workflow }),
  });
  if (!res.ok) throw new Error(`Queue failed: ${res.status} ${await res.text()}`);
  return (await res.json()).prompt_id;
}

async function pollHistory(promptId, outputNode = "11", timeoutMs = 20 * 60 * 1000) {
  const deadline = Date.now() + timeoutMs;
  let   dots     = 0;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 4000));
    process.stdout.write(`\r  Generating${".".repeat(dots++ % 4 + 1)}   `);
    const res  = await fetch(`${COMFYUI_URL}/history/${promptId}`);
    if (!res.ok) continue;
    const hist = await res.json();
    const entry = hist[promptId];
    if (!entry) continue;
    const images = entry.outputs?.[outputNode]?.images;
    if (images?.length) { process.stdout.write("\r                        \r"); return images[0]; }
  }
  throw new Error(`Timed out: ${promptId}`);
}

async function downloadImage(imageInfo) {
  const params = new URLSearchParams({ filename: imageInfo.filename, subfolder: imageInfo.subfolder ?? "", type: imageInfo.type ?? "output" });
  const res    = await fetch(`${COMFYUI_URL}/view?${params}`);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const args      = process.argv.slice(2);
  const checkOnly = args.includes("--check");
  const passArg   = args.indexOf("--pass");
  const singlePass = passArg !== -1 ? parseInt(args[passArg + 1], 10) : null;

  await checkHealth();
  if (checkOnly) return;

  await fs.mkdir(OUT_DIR, { recursive: true });

  const targets = singlePass
    ? PASSES.filter((_, i) => i + 1 === singlePass)
    : PASSES;

  for (const [i, pass] of targets.entries()) {
    const passNum = PASSES.indexOf(pass) + 1;
    console.log(`\n[Pass ${passNum}/${PASSES.length}] ${pass.label}`);
    console.log(`  denoise=${pass.mask ? "1.0 (VAEEncodeForInpaint)" : pass.denoise}  steps=${STEPS}`);

    // Upload source image
    const srcBuffer = await fs.readFile(pass.inputFile);
    const srcName   = await uploadBuffer(srcBuffer, path.basename(pass.inputFile), "image/jpeg");
    console.log(`  Source uploaded: ${srcName}`);

    const seed = Math.floor(Math.random() * 1_000_000_000);
    let workflow, outputNode;

    if (pass.mask) {
      // Build and upload mask PNG
      console.log(`  Building mask for ${pass.mask.regions.length} region(s)…`);
      const maskPng  = await buildMaskPNG(W, H, pass.mask.regions, FEATHER_PX);
      const maskName = await uploadBuffer(maskPng, `mask_pass${passNum}.png`, "image/png");
      console.log(`  Mask uploaded: ${maskName}`);
      workflow   = buildInpaintWorkflow(srcName, maskName, pass.positive, seed);
      outputNode = "11";
    } else {
      // Full-image img2img (Pass 3 hyperrealism)
      workflow   = buildImg2ImgWorkflow(srcName, pass.positive, pass.denoise, seed);
      outputNode = "8";
    }

    const promptId  = await queuePrompt(workflow);
    console.log(`  Queued → ${promptId}  seed=${seed}`);

    const imageInfo = await pollHistory(promptId, outputNode);
    const buffer    = await downloadImage(imageInfo);
    await fs.writeFile(pass.outputFile, buffer);
    console.log(`  ✓ Saved → ${path.relative(process.cwd(), pass.outputFile)}  (${Math.round(buffer.length / 1024)}KB)`);
  }

  console.log(`\n✓ All passes complete.`);
  console.log(`\n  Final result: public/generated-images/hero-inpaint-final.jpg`);
  console.log(`  Promote:  cp public/generated-images/hero-inpaint-final.jpg public/hero-family.jpg`);
}

main().catch(err => {
  console.error("\nFatal:", err.message);
  process.exitCode = 1;
});
