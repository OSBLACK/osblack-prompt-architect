# Agent instructions

OSBlack Prompt Architect is a React/TypeScript prompt workspace with a Vinext/Workers hosted app and a separate Vite mobile bundle sharing `lib/architect.ts`.

## Guardrails

- Preserve user drafts, preferences, saved prompts, D1 migrations, and the existing private Site identity.
- Never add provider secrets to client code, native packages, logs, screenshots, commits, or examples.
- Treat target AI names as output profiles, not connected model claims.
- Keep local generation useful without network access. Label estimates and unavailable features honestly.
- Do not publish a release, badge, APK, IPA, TestFlight link, screenshot, or test result that was not verified.
- Do not change `appId` or signing identity after the first signed public mobile release without an explicit migration decision.

## Verification

Run `pnpm test`, `pnpm typecheck`, `pnpm build`, and `pnpm mobile:build`. Update `docs/PROJECT_STATUS.md` and `docs/TESTING.md` with real results and blockers. Mobile signing requires the platform-specific checklist.
