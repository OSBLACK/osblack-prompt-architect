# OSBlack Prompt Architect

**Clear intent. Better prompts. Less waste.**

Created by **Owais Baat**.

OSBlack Prompt Architect is a privacy-conscious workspace for turning an idea into a concise, editable prompt. The local builder works without a model call. Preferences and saved prompts can stay on the device; the private hosted version can also use account-backed storage.

> **Beta status:** the web application, offline mobile bundle, Android project, and iOS project are implemented in source. No owner-signed APK, TestFlight build, or public GitHub Release is available until the release checklist records those artifacts as verified.

## What works

- Economy, Balanced, and Detailed prompt modes; Economy is the default.
- Fifteen target profiles covering chat, coding, research, image, and model-agnostic workflows.
- Optional three-question brief, manual reference excerpts, editable output, copy, and Markdown download.
- Editable memory, saved prompts, search, and validated JSON backup/import.
- Offline mobile interface built from the shared prompt engine.
- English, Urdu, Sindhi, English + Urdu, and English + Sindhi output instructions.
- Optional OpenAI refinement endpoint, disabled unless a server administrator configures and tests it.

## Start here

- New user: [docs/START_HERE.md](docs/START_HERE.md)
- Developer setup: [docs/SETUP.md](docs/SETUP.md)
- Architecture and data boundaries: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Android status and build: [docs/ANDROID_BUILD.md](docs/ANDROID_BUILD.md)
- iOS status and build: [docs/IOS_BUILD.md](docs/IOS_BUILD.md)
- Current evidence and blockers: [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)

## Developer quick start

Requirements: Node.js 22.13 or newer and pnpm 11.25.

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm build
pnpm mobile:build
```

The hosted Site requires its managed runtime and D1 binding. The mobile bundle is independent and stores data locally. Never place provider keys in client-side environment variables, web assets, or native packages.

The canonical Android application ID and iOS bundle identifier are `com.osblack.promptarchitect`. A legacy Expo bundle using `com.owaisbaat.osblack` is not an official release of this source tree and must not be used for updates without an explicit migration decision.

## Trust and limitations

The app structures prompts; it does not guarantee factual accuracy or the quality of another AI's response. Target names describe where a generated prompt can be pasted and do not imply paid access to those providers. Manual reference excerpts are preserved but not independently verified. Token counts are estimates unless a provider returns actual usage.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [SUPPORT.md](SUPPORT.md). Source code is released under the [MIT License](LICENSE); the OSBlack name and product artwork remain identified with their creator, Owais Baat.
