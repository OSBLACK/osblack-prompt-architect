# Security policy

## Supported versions

Only the latest GitHub Release will receive security fixes after public release. Until then, this repository is beta software.

## Reporting

Do not disclose a suspected vulnerability in a public issue. Use GitHub's private vulnerability reporting if enabled. If it is unavailable, open a public issue containing no exploit details and ask the owner for a private reporting channel.

Include the affected version, reproducible steps, impact, and any suggested mitigation. Never include real user prompts, account tokens, API keys, signing files, or personal data.

## Boundaries

The local builder processes text in the browser. Optional AI refinement sends the current brief to the configured provider only after the user clicks the action. Hosted identity headers are trusted only behind the supported Site gateway. Native/public deployments require their own validated authentication before cloud sync or paid AI access is enabled.
