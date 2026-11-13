# Android build and release

## Current status

The offline mobile web bundle and generated Android project are implemented and synchronized. A signed APK, device installation test, and GitHub Release remain blocked until an Android SDK environment and owner-controlled signing setup are available.

The canonical package ID is `com.osblack.promptarchitect`. A separate Expo bundle using `com.owaisbaat.osblack` is not produced by this source tree and is not an official update artifact.

## Build

1. Install the supported Android Studio, SDK, and JDK versions documented by the current Capacitor release.
2. Run `pnpm install --frozen-lockfile`, `pnpm mobile:build`, and `npx cap sync android`.
3. Open with `npx cap open android` and test a debug build on an emulator and a physical phone.
4. Create an owner-controlled release keystore outside the repository. Back it up securely.
5. Build a signed release APK for direct GitHub download. Build an AAB separately for Google Play.
6. Verify the APK with Android signing tools, inspect permissions/package ID, and create a SHA-256 checksum.

The permanent application ID is `com.osblack.promptarchitect`. Preserve it for upgrades. Never commit a keystore, passwords, `key.properties`, or signing environment files.

## Release evidence

Record clean install, first launch, offline generation, copy/save/backup, back navigation, rotation, keyboard behavior, text scaling, and upgrade tests in `docs/TESTING.md`. Label emulator-only results accurately.
