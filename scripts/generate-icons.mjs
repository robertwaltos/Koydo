/**
 * Generate PWA icon PNGs from the SVG source icon.
 * Usage: node scripts/generate-icons.mjs
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const svgBuffer = readFileSync(join(publicDir, "icon.svg"));

const sizes = [
  { name: "favicon-32.png", size: 32 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(join(publicDir, name));
  console.log(`  ✓ ${name} (${size}×${size})`);
}

// Also generate favicon.ico from the 32px version
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, "favicon-32.png"));

console.log("\nAll icons generated in public/");
