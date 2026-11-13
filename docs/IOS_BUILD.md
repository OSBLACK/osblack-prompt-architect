# iOS build and distribution

## Current status

The shared offline mobile bundle and generated Xcode project are implemented and synchronized. Xcode compilation, device signing, and TestFlight remain blocked in the current Linux environment.

## Build on macOS

1. Install the supported Xcode and command-line tools for the current Capacitor version.
2. Run `pnpm install --frozen-lockfile`, `pnpm mobile:build`, and `npx cap sync ios`.
3. Open the generated workspace with `npx cap open ios`.
4. Confirm the permanent bundle identifier, development team, signing capability, deployment target, icons, privacy manifest, and supported devices.
5. Test on the simulator and a physical device. Archive and validate in Xcode.
6. Upload through the owner's Apple Developer/App Store Connect account and distribute a beta through TestFlight.

The permanent bundle identifier is `com.osblack.promptarchitect`. Preserve it for upgrades. An IPA is installable only under its signing/provisioning method; do not advertise it like an Android APK. Store review is never guaranteed.
