[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / DetachAnalyticsIdentifierData

# Type Alias: DetachAnalyticsIdentifierData

> **DetachAnalyticsIdentifierData** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2679](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2679)

## Properties

### body

> **body**: [`DetachFromSitesInput`](DetachFromSitesInput.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2683](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2683)

Input containing an array of site identifiers.

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2684](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2684)

#### analyticsIdentifier

> **analyticsIdentifier**: `string`

Analytics identifier.

***

### query?

> `optional` **query**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2690](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2690)

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/api/v1/sites/analytics-identifiers/{analyticsIdentifier}/detach"`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2696](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2696)
