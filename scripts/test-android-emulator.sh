#!/usr/bin/env bash
# ============================================================
# Koydo — Android Emulator Test Script
# Usage: bash scripts/test-android-emulator.sh [AVD_NAME]
# ============================================================
set -euo pipefail

# ---------- Configuration ----------
DEFAULT_AVD="Pixel_8_API_35"
AVD_NAME="${1:-$DEFAULT_AVD}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ANDROID_DIR="$PROJECT_ROOT/android"
WEB_BUILD_DIR="$PROJECT_ROOT/out"

echo "🤖 Koydo Android Emulator Launcher"
echo "======================================"
echo "  AVD       : $AVD_NAME"
echo "  Project   : $PROJECT_ROOT"
echo ""

# ---------- Pre-flight Checks ----------
check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo "❌ Required tool '$1' not found. Please install it and try again."
    exit 1
  fi
}

check_command node
check_command npx
check_command adb

if [ -z "${ANDROID_SDK_ROOT:-}" ] && [ -z "${ANDROID_HOME:-}" ]; then
  echo "❌ ANDROID_SDK_ROOT or ANDROID_HOME is not set."
  echo "   Add to your shell profile: export ANDROID_SDK_ROOT=\$HOME/Library/Android/sdk"
  exit 1
fi

SDK_ROOT="${ANDROID_SDK_ROOT:-$ANDROID_HOME}"
EMULATOR_BIN="$SDK_ROOT/emulator/emulator"
AVD_MANAGER_BIN="$SDK_ROOT/cmdline-tools/latest/bin/avdmanager"

# ---------- Check for existing emulator ----------
RUNNING_AVDS=$(adb devices -l | grep "emulator" || true)
if echo "$RUNNING_AVDS" | grep -q "emulator"; then
  echo "✅ Emulator already running — skipping AVD launch"
else
  echo "▶ Starting AVD: $AVD_NAME"

  # Check AVD exists
  if ! "$AVD_MANAGER_BIN" list avd 2>/dev/null | grep -q "$AVD_NAME"; then
    echo "⚠️  AVD '$AVD_NAME' not found. Available AVDs:"
    "$AVD_MANAGER_BIN" list avd 2>/dev/null | grep "Name:" || echo "  (none)"
    echo ""
    echo "Create one with:"
    echo "  \$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/avdmanager create avd \\"
    echo "    -n Pixel_8_API_35 -k 'system-images;android-35;google_apis_playstore;x86_64'"
    exit 1
  fi

  # Launch emulator in background
  "$EMULATOR_BIN" -avd "$AVD_NAME" -no-snapshot-save &
  EMULATOR_PID=$!
  echo "  Emulator PID: $EMULATOR_PID"

  echo "⏳ Waiting for emulator to boot..."
  adb wait-for-device
  # Wait until boot_complete
  until adb shell getprop sys.boot_completed 2>/dev/null | grep -q "1"; do
    sleep 2
  done
  echo "✅ Emulator booted"
fi

# ---------- Build Next.js web app ----------
echo ""
echo "🔨 Building Next.js (next build)..."
cd "$PROJECT_ROOT"
if [ ! -f "$WEB_BUILD_DIR/.next/BUILD_ID" ] && [ ! -d "$WEB_BUILD_DIR" ]; then
  npm run build
else
  echo "  Skipping build — $WEB_BUILD_DIR already exists (use 'npm run build' to rebuild)"
fi

# ---------- Sync Capacitor ----------
echo ""
echo "🔄 Syncing Capacitor (npx cap sync android)..."
npx cap sync android

# ---------- Assemble & Install Debug APK ----------
echo ""
echo "📦 Building debug APK..."
cd "$ANDROID_DIR"
./gradlew assembleDebug --quiet

APK_PATH="$ANDROID_DIR/app/build/outputs/apk/debug/app-debug.apk"
if [ ! -f "$APK_PATH" ]; then
  echo "❌ APK not found at: $APK_PATH"
  exit 1
fi

echo "📲 Installing APK onto emulator..."
adb install -r "$APK_PATH"

# ---------- Launch App ----------
echo ""
echo "🚀 Launching Koydo on emulator..."
adb shell am start -n "com.koydo.app/com.koydo.app.MainActivity" \
  -a android.intent.action.MAIN \
  -c android.intent.category.LAUNCHER

echo ""
echo "✅ Koydo launched on Android emulator!"
echo ""
echo "Useful commands:"
echo "  View logs:   adb logcat -s Koydo:V Capacitor:V WebCore:V"
echo "  Screenshot:  adb exec-out screencap -p > /tmp/koydo_screen.png"
echo "  Stop app:    adb shell am force-stop com.koydo.app"
echo "  Uninstall:   adb uninstall com.koydo.app"
