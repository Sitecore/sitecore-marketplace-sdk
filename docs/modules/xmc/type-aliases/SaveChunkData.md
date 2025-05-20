[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / SaveChunkData

# Type Alias: SaveChunkData

> **SaveChunkData** = `object`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:172](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L172)

## Properties

### body

> **body**: `Blob` \| `File`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:173](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L173)

***

### path

> **path**: `object`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:174](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L174)

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

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:188](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L188)

#### isMedia?

> `optional` **isMedia**: `boolean`

Indicates whether this chunk is media. Default is false.

#### sitecoreContextId?

> `optional` **sitecoreContextId**: `string`

The Sitecore context ID.

***

### url

> **url**: `"/content/v1/transfers/{transferId}/chunksets/{chunksetId}/chunks/{chunkId}"`

Defined in: [packages/xmc/src/client-content-transfer/types.gen.ts:198](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-content-transfer/types.gen.ts#L198)
