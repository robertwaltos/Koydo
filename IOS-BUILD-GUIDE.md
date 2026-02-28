# iOS Build Guide

## Prerequisites
- macOS with latest Xcode installed.
- Apple Developer account with permissions for com.koydo.app.

## Build Instructions
1. Run 
pm run build to generate static web assets.
2. Run 
px cap sync ios to sync assets and plugins to the iOS project.
3. Open ios/App/App.xcworkspace in Xcode.

## Archiving for App Store
1. In Xcode, ensure your target device is set to 'Any iOS Device (arm64)'.
2. Go to **Product > Archive**.
3. Once the archive completes, the Organizer window will open.
4. Click **Distribute App**.
5. Choose **App Store Connect** and follow the prompts to upload.

## Provisioning Setup
- In the 'Signing & Capabilities' tab, ensure 'Automatically manage signing' is enabled.
- Select your team (Koydo). Xcode will handle the provisioning profiles automatically.