# Release checklist

- [x] Owner confirmed the MIT license and `com.osblack.promptarchitect` application/bundle ID.
- [x] Clean install, tests, type check, hosted build, and mobile bundle pass.
- [ ] Browser accessibility and responsive visual QA pass with genuine screenshots.
- [ ] Secret/history scan and dependency/license review pass; SBOM generated. (Scans and audit pass; formal SBOM remains.)
- [ ] Documentation commands and public links are verified.
- [ ] Android release APK is owner-signed, signature-verified, device-tested, checksummed, and attached to a versioned GitHub Release.
- [ ] AAB is labeled for Play distribution and never presented as a directly installable APK.
- [ ] iOS project compiles in Xcode; physical-device and TestFlight status is recorded accurately.
- [ ] Privacy disclosures, support route, known limitations, changelog, and rollback notes are current.
- [ ] Repository protections prevent untrusted pull requests from accessing release secrets.

Unresolved critical/high security findings, missing signing evidence, false links, or data-loss failures block the affected release.
