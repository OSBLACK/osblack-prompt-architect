# Architecture

## Components

- `lib/architect.ts`: deterministic prompt composition, target profiles, questions, checks, and token estimates.
- `app/`: hosted React interface with private Site identity and D1-backed optional workspace storage.
- `app/api/`: authenticated workspace, saved-prompt, and optional provider refinement routes.
- `mobile/`: offline Vite interface sharing the prompt engine; output is bundled into Capacitor apps.
- `db/`: D1 schema for workspaces, prompts, and duplicate/usage control.

## Data boundaries

Local mode writes to browser/WebView storage. Hosted cloud mode authorizes each record using identity supplied by the trusted Site gateway. The native bundle does not reuse those headers and has no cloud sync. AI refinement is a separate authenticated server action and is unavailable without server secrets.

Reference text is treated as untrusted data and wrapped as reference material. The app does not fetch links or claim verification. A future connector must have explicit authentication, scoped permissions, provenance, input limits, and tests before being labeled connected.

## Mobile decision

Capacitor preserves the TypeScript prompt engine and allows platform projects without duplicating product logic. The mobile UI is bundled locally for offline use. It does not point at the private hosted URL. Platform signing and store distribution remain separate release gates.
