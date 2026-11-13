# ADR 0001: Share the prompt engine through Capacitor

## Decision

Use a Vite-built offline React interface with Capacitor Android/iOS projects, sharing the deterministic TypeScript prompt engine with the hosted app.

## Reason

This keeps the useful core offline, avoids loading a private website as a production native shell, and reduces duplicated business logic. Platform signing, secure native authentication, and store distribution remain explicit release concerns.

## Consequences

The hosted cloud/API features are not automatically available in native builds. Native cloud sync must be designed and authenticated separately. Android and iOS builds require their official platform toolchains.
