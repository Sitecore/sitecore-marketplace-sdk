[**@sitecore-marketplace-sdk/core**](../README.md)

***

[@sitecore-marketplace-sdk/core](../README.md) / MessageHandler

# Interface: MessageHandler

Defined in: [packages/core/src/types.ts:129](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/core/src/types.ts#L129)

## Properties

### onEvent()

> **onEvent**: (`message`) => `void`

Defined in: [packages/core/src/types.ts:131](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/core/src/types.ts#L131)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`EventMessage`](EventMessage.md) |

#### Returns

`void`

***

### onRequest()

> **onRequest**: (`message`) => `Promise`\<`unknown`\>

Defined in: [packages/core/src/types.ts:130](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/core/src/types.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`RequestMessage`](RequestMessage.md) |

#### Returns

`Promise`\<`unknown`\>
