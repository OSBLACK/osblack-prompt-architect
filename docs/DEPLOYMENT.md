# Deployment

## Hosted Site

Build and deploy through the supported Sites workflow so `.openai/hosting.json`, D1 bindings, identity, and server routes remain intact. Keep the existing audience private unless the owner explicitly changes it. Apply schema migrations before code that depends on them, then verify the deployed version and rollback path.

## Static/mobile bundle

`pnpm mobile:build` writes offline assets to `dist-mobile/`. Those assets contain no API key or private hosted URL. GitHub Pages can serve a static demo, but it cannot safely host provider secrets, D1, or the private identity-backed API.

## Environment

`OPENAI_API_KEY` and `OPENAI_MODEL` are optional server-only values. AI refinement must remain visibly disabled when either is absent. A ChatGPT subscription is not API billing.
