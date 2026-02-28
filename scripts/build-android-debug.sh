#!/usr/bin/env bash
# scripts/build-android-debug.sh
# Builds a debug APK and copies it to dist/koydo-debug.apk
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "═══════════════════════════════════════════"
echo "  Koydo — Android Debug Build"
echo "═══════════════════════════════════════════"

# Step 1: Next.js production build
echo ""
echo "▶ Step 1/3: Building Next.js app..."
npm run build

# Step 2: Sync to native
echo ""
echo "▶ Step 2/3: Syncing to Android via Capacitor..."
npx cap sync android

# Step 3: Assemble the debug APK
echo ""
echo "▶ Step 3/3: Assembling debug APK..."
cd android
./gradlew assembleDebug

# Copy to dist/
cd "$PROJECT_ROOT"
mkdir -p dist
cp android/app/build/outputs/apk/debug/app-debug.apk dist/koydo-debug.apk

APK_SIZE=$(du -sh dist/koydo-debug.apk | cut -f1)
echo ""
echo "═══════════════════════════════════════════"
echo "  ✅ Debug APK built successfully"
echo "  Path: dist/koydo-debug.apk"
echo "  Size: $APK_SIZE"
echo "═══════════════════════════════════════════"
