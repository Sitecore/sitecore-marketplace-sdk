[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / DeleteSiteData

# Type Alias: DeleteSiteData

> **DeleteSiteData** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2322](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2322)

## Properties

### body?

> `optional` **body**: `never`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2323](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2323)

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2324](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2324)

#### siteId

> **siteId**: `string`

The identifier of the site.

***

### query?

> `optional` **query**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2330](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2330)

#### force?

> `optional` **force**: `boolean`

If this is set to true, the site will be deleted even if it is published to Edge.

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/api/v1/sites/{siteId}"`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2340](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2340)
