# Changelog

## 0.2.0-beta.1 verification refresh — 2026-11-13

- Re-ran dependency installation, lint, 6 prompt-engine tests, TypeScript checks, hosted production build, offline mobile build, Capacitor synchronization, and the production dependency audit successfully.
- Confirmed `com.osblack.promptarchitect` as the canonical Android and iOS identifier for this source tree.
- Documented that the separate Expo bundle using `com.owaisbaat.osblack` is not a release artifact of this repository.
- Updated Android, iOS, testing, project-status, and CI documentation to match verified evidence.

## 0.2.0-beta.1 security checkpoint — 2026-10-29

- Adopted the MIT License and permanent mobile identifier `com.osblack.promptarchitect`.
- Added professional repository metadata for the planned `OSBLACK/osblack-prompt-architect` publication.
- Upgraded Next.js to 16.4.1 and Zod to the patched 4.6 line.
- Pinned patched transitive build dependencies; the production dependency audit now reports zero known vulnerabilities.
- Re-ran lint, tests, type checks, hosted build, and mobile web build successfully.

## 0.2.0-beta.1 — Unreleased

- Renamed the product to OSBlack Prompt Architect and added creator attribution.
- Preserved legacy browser storage keys through automatic migration.
- Added a Vite/Capacitor-ready offline mobile bundle using the shared prompt engine.
- Added release, security, privacy, testing, and contributor documentation.

## 0.1.0 — 2026-10-27

- Initial private Prompt Architect Site with local generation, saved preferences, prompt collection, and optional account storage.
