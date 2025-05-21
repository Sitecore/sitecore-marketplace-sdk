[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / UpdateSiteInput

# Type Alias: UpdateSiteInput

> **UpdateSiteInput** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1332](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1332)

A site update request.

## Properties

### brandKitId?

> `optional` **brandKitId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1366](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1366)

The identifier of the brand kit associated with this site.
Example value: e3f1c5a2-4b6d-4a3e-9f1b-2d3c4b5a6e7f

***

### description?

> `optional` **description**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1342](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1342)

The description for the site.
Example value: New site for Brand A in English-speaking countries.

***

### displayName?

> `optional` **displayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1337](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1337)

The display name for the site.
Example value: Skate Park Site

***

### errorPages?

> `optional` **errorPages**: [`ErrorPages`](ErrorPages.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1356](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1356)

***

### shared?

> `optional` **shared**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1355](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1355)

Indicates if the site should be marked as shared or not. True - site will be shared. False - site will not be marked as shared.
Example value: True

***

### sortOrder?

> `optional` **sortOrder**: `number` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1361](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1361)

The sort order of the site.
Example value: 100

***

### supportedLanguages?

> `optional` **supportedLanguages**: `string`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1350](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1350)

The list of languages supported by Sitecore.
Example value: [
"en-US",
"en-CA"
]
