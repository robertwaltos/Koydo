# Koydo — Version Management

**Version scheme**: Semantic Versioning (SemVer) — `MAJOR.MINOR.PATCH`

---

## Version Architecture

| Platform | Version String | Build Number | File |
|----------|---------------|--------------|------|
| npm / package.json | `1.0.0` | — | `package.json` |
| iOS | `1.0.0` (CFBundleShortVersionString) | `1` (CFBundleVersion) | `ios/App/App/Info.plist` |
| Android | `1.0.0` (versionName) | `1` (versionCode) | `android/app/build.gradle` |

**Key rules**:
- iOS `CFBundleVersion` and Android `versionCode` must **increment** with every upload (even patch releases)
- `versionName` / `CFBundleShortVersionString` matches `package.json` version
- Never decrement build numbers

---

## Version Bump Script

```bash
# Bump patch (1.0.0 → 1.0.1)
bash scripts/bump-version.sh patch

# Bump minor (1.0.0 → 1.1.0)
bash scripts/bump-version.sh minor

# Bump major (1.0.0 → 2.0.0)
bash scripts/bump-version.sh major
```

The script automatically:
1. Updates `package.json` version
2. Updates `CFBundleShortVersionString` in `Info.plist`
3. Increments `CFBundleVersion` (iOS build number)
4. Updates `versionName` in `build.gradle`
5. Increments `versionCode` (Android build number)
6. Creates a git tag `v1.0.1`

---

## Version History

| Version | Build (iOS) | versionCode (Android) | Date | Notes |
|---------|-------------|----------------------|------|-------|
| 1.0.0 | 1 | 1 | TBD | Initial launch |

---

## Release Branch Strategy

```
main              ← Production releases only
  └─ develop      ← Integration branch
       ├─ feature/lesson-ai-v2
       ├─ bugfix/quiz-timer-fix
       └─ release/v1.1.0  ← Release prep branch
```

### Release workflow
1. Create `release/vX.Y.Z` branch from `develop`
2. Run `bash scripts/bump-version.sh minor` (or patch/major)
3. Final QA on release branch
4. Merge release branch → `main`
5. Tag: `git tag v1.1.0 && git push origin v1.1.0`
6. Merge back → `develop`

---

## App Store / Google Play Build Number Rules

### iOS (`CFBundleVersion`)
- Must be a **monotonically increasing integer** per App Store Connect
- Can reset to `1` only when creating a new `CFBundleShortVersionString` that has never been submitted
- Recommended: use `YYYYMMDDNN` format for clarity (e.g., `202412010` = 2024-12-01, build 0)

### Android (`versionCode`)
- Must be a **monotonically increasing integer**
- Never decrements across all tracks (production, beta, alpha, internal)
- Maximum value: 2,100,000,000

---

## Automated Version Tracking (CI/CD)

In GitHub Actions workflow, version is derived from the git tag:

```yaml
- name: Get version
  run: |
    VERSION=$(node -p "require('./package.json').version")
    BUILD=$(git rev-list --count HEAD)
    echo "VERSION=$VERSION" >> $GITHUB_ENV
    echo "BUILD_NUMBER=$BUILD" >> $GITHUB_ENV
```
