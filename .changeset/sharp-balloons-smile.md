---
"@sitecore-marketplace-sdk/client": patch
---

Introduces multiple new features:
- Pages canvas reload support: Adds ability to reload the hosting application's canvas through the ClientSDK.reloadCanvas() method
- Emit route event support: Enables applications to raise route change events to the host application via ClientSDK.emitRouteEvent(route) method.
  Example: `await clientSDK.emitRouteEvent('/products/123')`