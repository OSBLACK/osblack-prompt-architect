# Development setup

## Requirements

- Git
- Node.js 22.13 or newer
- pnpm 11.25, enabled through Corepack if needed
- Android Studio and the supported JDK/SDK for Android work
- macOS and Xcode for iOS signing/device builds

## Windows-first setup

```powershell
git clone https://github.com/OSBLACK/osblack-prompt-architect.git
cd osblack-prompt-architect
corepack enable
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm mobile:build
```

Run the hosted app only inside its supported Sites/Workers environment. The offline mobile bundle is written to `dist-mobile/`.

Never put an API key in `.env.example`, a `NEXT_PUBLIC_` variable, `capacitor.config.ts`, or a native resource. Provider configuration belongs in protected server environment variables.
