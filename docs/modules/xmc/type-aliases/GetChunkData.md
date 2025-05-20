[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / GetChunkData

# Type Alias: GetChunkData

> **GetChunkData** = `object`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:123](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L123)

## Properties

### body?

> `optional` **body**: `never`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:124](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L124)

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:125](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L125)

#### chunkId

> **chunkId**: `number`

Id of the chunk.

#### chunksetId

> **chunksetId**: `string`

ID of the chunk set.

#### transferId

> **transferId**: `string`

ID of the transfer.

***

### query?

> `optional` **query**: `object`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:139](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L139)

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/content/v1/transfers/{transferId}/chunksets/{chunksetId}/chunks/{chunkId}"`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:145](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L145)
