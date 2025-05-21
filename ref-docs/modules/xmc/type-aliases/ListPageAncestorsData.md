[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / ListPageAncestorsData

# Type Alias: ListPageAncestorsData

> **ListPageAncestorsData** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2821](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2821)

## Properties

### body?

> `optional` **body**: `never`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2822](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2822)

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2823](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2823)

#### pageId

> **pageId**: `string`

Page identifier.

#### siteId

> **siteId**: `string`

The identifier of the site.

***

### query?

> `optional` **query**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2833](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2833)

#### language?

> `optional` **language**: `string`

The ISO country-region language code for which to retrieve the ancestors, for example: en-US, ar-AE.

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/api/v1/sites/{siteId}/hierarchy/{pageId}/ancestors"`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2843](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L2843)
