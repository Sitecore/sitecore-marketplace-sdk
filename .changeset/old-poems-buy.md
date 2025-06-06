---
'@sitecore-marketplace-sdk/client': patch
'@sitecore-marketplace-sdk/core': patch
---

- Add dynamic Host origin support.
- Update origin field in client sdk init method as optional. If added by the user, validate against provided url.
- Can refer allow-origins.ts for origin allow
