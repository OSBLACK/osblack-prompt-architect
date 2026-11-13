# ADR 0002: Canonical mobile implementation and identifier

**Status:** Accepted  
**Date:** 2026-11-13

## Decision

OSBlack Prompt Architect uses the shared Vite/Capacitor implementation in this repository for Android and iOS. Its permanent application ID and bundle identifier are `com.osblack.promptarchitect`.

## Context

A separately generated Expo 58 Android App Bundle was found with the app name `os-black`, version `1.0.0`, and package `com.owaisbaat.osblack`. No matching source tree, build record, device-test evidence, or signing-ownership record connects that bundle to this repository.

## Consequences

- Do not publish the legacy Expo bundle as a release of this repository.
- Do not change the canonical identifier after the first signed public release without a documented migration decision.
- Any future proposal to adopt the Expo implementation must first supply its source, dependency lockfile, signing provenance, test evidence, and data-migration plan for review.
