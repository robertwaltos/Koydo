#!/usr/bin/env bash
# ============================================================
# Koydo — Version Bump Script
# Usage: bash scripts/bump-version.sh [major|minor|patch]
# ============================================================
set -euo pipefail

BUMP_TYPE="${1:-patch}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PACKAGE_JSON="$PROJECT_ROOT/package.json"
INFO_PLIST="$PROJECT_ROOT/ios/App/App/Info.plist"
BUILD_GRADLE="$PROJECT_ROOT/android/app/build.gradle"

if [[ "$BUMP_TYPE" != "major" && "$BUMP_TYPE" != "minor" && "$BUMP_TYPE" != "patch" ]]; then
  echo "❌ Invalid bump type: $BUMP_TYPE"
  echo "   Usage: bash scripts/bump-version.sh [major|minor|patch]"
  exit 1
fi

echo "🔖 Koydo Version Bump: $BUMP_TYPE"
echo "======================================"

# ---------- Step 1: Bump package.json version ----------
if ! command -v node &> /dev/null; then
  echo "❌ node not found. Install Node.js first."
  exit 1
fi

CURRENT_VERSION=$(node -p "require('$PACKAGE_JSON').version")
echo "Current version: $CURRENT_VERSION"

IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

case "$BUMP_TYPE" in
  major)
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    MINOR=$((MINOR + 1))
    PATCH=0
    ;;
  patch)
    PATCH=$((PATCH + 1))
    ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
echo "New version:     $NEW_VERSION"

# Update package.json
node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('$PACKAGE_JSON', 'utf8'));
  pkg.version = '$NEW_VERSION';
  fs.writeFileSync('$PACKAGE_JSON', JSON.stringify(pkg, null, 2) + '\n');
"
echo "✅ Updated package.json → $NEW_VERSION"

# ---------- Step 2: iOS — Update Info.plist ----------
if [ -f "$INFO_PLIST" ]; then
  # Check for PlistBuddy
  PLISTBUDDY="/usr/libexec/PlistBuddy"
  if [ -f "$PLISTBUDDY" ]; then
    # Update marketing version (user-visible)
    $PLISTBUDDY -c "Set :CFBundleShortVersionString $NEW_VERSION" "$INFO_PLIST"

    # Increment build number
    CURRENT_BUILD=$($PLISTBUDDY -c "Print :CFBundleVersion" "$INFO_PLIST")
    NEW_BUILD=$((CURRENT_BUILD + 1))
    $PLISTBUDDY -c "Set :CFBundleVersion $NEW_BUILD" "$INFO_PLIST"

    echo "✅ Updated iOS Info.plist → version=$NEW_VERSION build=$NEW_BUILD"
  else
    echo "⚠️  PlistBuddy not found (macOS only). Update Info.plist manually:"
    echo "   CFBundleShortVersionString = $NEW_VERSION"
    echo "   CFBundleVersion = <increment current>"
  fi
else
  echo "⚠️  Info.plist not found at: $INFO_PLIST"
  echo "   Run 'npx cap sync ios' first to generate iOS project."
fi

# ---------- Step 3: Android — Update build.gradle ----------
if [ -f "$BUILD_GRADLE" ]; then
  # Update versionName
  sed -i.bak "s/versionName \"[0-9]*\.[0-9]*\.[0-9]*\"/versionName \"$NEW_VERSION\"/" "$BUILD_GRADLE"

  # Increment versionCode
  CURRENT_CODE=$(grep "versionCode" "$BUILD_GRADLE" | grep -o '[0-9]*')
  NEW_CODE=$((CURRENT_CODE + 1))
  sed -i.bak "s/versionCode $CURRENT_CODE/versionCode $NEW_CODE/" "$BUILD_GRADLE"

  # Clean up backup files from sed
  rm -f "$BUILD_GRADLE.bak"

  echo "✅ Updated Android build.gradle → versionName=$NEW_VERSION versionCode=$NEW_CODE"
else
  echo "⚠️  build.gradle not found at: $BUILD_GRADLE"
  echo "   Run 'npx cap sync android' first to generate Android project."
fi

# ---------- Step 4: Commit and tag ----------
echo ""
echo "📝 Staging version bump files for git commit..."

cd "$PROJECT_ROOT"
git add "$PACKAGE_JSON"
[ -f "$INFO_PLIST" ] && git add "$INFO_PLIST"
[ -f "$BUILD_GRADLE" ] && git add "$BUILD_GRADLE"

echo ""
echo "Ready to commit. Run:"
echo "  git commit -m 'chore: bump version to $NEW_VERSION'"
echo "  git tag v$NEW_VERSION"
echo "  git push && git push --tags"
echo ""
echo "Or run all at once:"
echo "  git commit -m 'chore: bump version to $NEW_VERSION' && git tag v$NEW_VERSION && git push && git push --tags"
echo ""
echo "✅ Version bump complete: $CURRENT_VERSION → $NEW_VERSION"
