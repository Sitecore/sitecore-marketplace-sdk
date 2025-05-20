[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / DeleteHostData

# Type Alias: DeleteHostData

> **DeleteHostData** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2985](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2985)

## Properties

### body?

> `optional` **body**: `never`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2986](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2986)

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2987](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2987)

#### hostId

> **hostId**: `string`

The identifier of the host.

#### siteId

> **siteId**: `string`

The identifier of the site.

***

### query?

> `optional` **query**: `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:2997](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L2997)

#### force?

> `optional` **force**: `boolean`

If this is set to true, the host will be deleted even if it is published to Edge.

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/api/v1/sites/{siteId}/hosts/{hostId}"`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:3007](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L3007)
