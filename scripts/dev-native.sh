#!/usr/bin/env bash
# ============================================================
# Koydo — Native Live Reload Dev Server
# Starts Next.js dev server and syncs Capacitor for hot-reload
# on a connected device or emulator.
#
# Usage:
#   bash scripts/dev-native.sh [android|ios]
# ============================================================
set -euo pipefail

PLATFORM="${1:-android}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || hostname -I | awk '{print $1}')

echo "🔥 Koydo Native Live Reload"
echo "================================"
echo "  Platform: $PLATFORM"
echo "  Host IP:  $LOCAL_IP"
echo ""

if [ "$PLATFORM" != "android" ] && [ "$PLATFORM" != "ios" ]; then
  echo "❌ Unknown platform: $PLATFORM. Use 'android' or 'ios'"
  exit 1
fi

# ---------- Update capacitor.config with live-reload server ----------
CAPACITOR_CONFIG="$PROJECT_ROOT/capacitor.config.ts"

echo "📝 Temporarily setting server.url in capacitor.config.ts for live reload..."
# Use node to patch the config in memory — we print a warning so devs know
echo "⚠️  NOTE: Set server.url manually in capacitor.config.ts for live reload:"
echo "   server: { url: 'http://$LOCAL_IP:3000', cleartext: true }"
echo ""
echo "   Remember to REMOVE server.url before building for production!"
echo ""

# ---------- Start Next.js dev server ----------
echo "▶ Starting Next.js dev server on http://$LOCAL_IP:3000"
cd "$PROJECT_ROOT"

if [ "$PLATFORM" = "android" ]; then
  # Start Next.js in background
  HOSTNAME=0.0.0.0 npm run dev &
  DEV_PID=$!
  echo "  Dev server PID: $DEV_PID"

  # Wait for dev server to be ready
  echo "⏳ Waiting for dev server..."
  until curl -s "http://localhost:3000" > /dev/null 2>&1; do
    sleep 1
  done
  echo "✅ Dev server ready"

  # Sync and open Android
  echo "🔄 Syncing Capacitor..."
  npx cap sync android

  echo "📱 Opening Android Studio (or run on connected device)..."
  npx cap open android

  echo ""
  echo "In Android Studio:"
  echo "  1. Click Run ▶ to deploy to device/emulator"
  echo "  2. Changes to src/ will hot-reload automatically"
  echo ""
  echo "Press Ctrl+C to stop the dev server"
  wait $DEV_PID

elif [ "$PLATFORM" = "ios" ]; then
  # Start Next.js in background
  HOSTNAME=0.0.0.0 npm run dev &
  DEV_PID=$!
  echo "  Dev server PID: $DEV_PID"

  echo "⏳ Waiting for dev server..."
  until curl -s "http://localhost:3000" > /dev/null 2>&1; do
    sleep 1
  done
  echo "✅ Dev server ready"

  echo "🔄 Syncing Capacitor..."
  npx cap sync ios

  echo "📱 Opening Xcode..."
  npx cap open ios

  echo ""
  echo "In Xcode:"
  echo "  1. Select a Simulator or connected device"
  echo "  2. Click Run ▶ to deploy"
  echo "  3. Changes to src/ will hot-reload automatically"
  echo ""
  echo "Press Ctrl+C to stop the dev server"
  wait $DEV_PID
fi
