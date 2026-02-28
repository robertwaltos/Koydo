#!/usr/bin/env bash
# scripts/build-android-release.sh
# Builds a release APK + AAB and copies them to dist/
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "═══════════════════════════════════════════"
echo "  Koydo — Android Release Build"
echo "═══════════════════════════════════════════"

# Check that keystore.properties exists
if [ ! -f "android/keystore.properties" ]; then
  echo "❌ ERROR: android/keystore.properties not found."
  echo "   Copy it from your secrets store and try again."
  exit 1
fi

# Step 1: Next.js production build
echo ""
echo "▶ Step 1/3: Building Next.js app..."
npm run build

# Step 2: Sync to native
echo ""
echo "▶ Step 2/3: Syncing to Android via Capacitor..."
npx cap sync android

# Step 3: Assemble and bundle release
echo ""
echo "▶ Step 3/3: Assembling release APK and AAB..."
cd android
./gradlew assembleRelease bundleRelease

# Copy artifacts to dist/
cd "$PROJECT_ROOT"
mkdir -p dist
cp android/app/build/outputs/apk/release/app-release.apk dist/koydo-release.apk
cp android/app/build/outputs/bundle/release/app-release.aab dist/koydo-release.aab

APK_SIZE=$(du -sh dist/koydo-release.apk | cut -f1)
AAB_SIZE=$(du -sh dist/koydo-release.aab | cut -f1)

# Verify signing
echo ""
echo "▶ Verifying APK signature..."
apksigner verify --verbose dist/koydo-release.apk 2>&1 | grep -E "Verified|signer" || true

echo ""
echo "═══════════════════════════════════════════"
echo "  ✅ Release build complete"
echo "  APK: dist/koydo-release.apk ($APK_SIZE)"
echo "  AAB: dist/koydo-release.aab ($AAB_SIZE)"
echo "  Upload the AAB to Google Play Console."
echo "═══════════════════════════════════════════"
