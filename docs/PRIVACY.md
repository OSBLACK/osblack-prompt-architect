# Privacy

## Local mode

Drafts, preferences, and saved prompts are stored on the device. Clearing app/browser data or uninstalling can remove them; export a backup first. The local builder does not contact an AI provider.

## Hosted account mode

The private hosted version may store preferences, drafts, and saved prompts in account-scoped D1 records. It uses the trusted Site identity gateway and authorizes records by user ID. Users can export data and delete saved prompts or preferences in the interface.

## Optional AI refinement

After a user explicitly selects refinement, the current brief and applicable preferences are sent through the server to the configured provider. The endpoint asks the provider not to retain the response (`store: false`), but provider account terms and operational logs may still apply. Prompts must not be copied into analytics or crash reports.

The project currently has no advertising, tracking SDK, automatic document retrieval, or live Google Drive/web-search connector.
