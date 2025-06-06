[**@sitecore-marketplace-sdk/client**](../README.md)

***

[@sitecore-marketplace-sdk/client](../README.md) / MutationOptions

# Interface: MutationOptions\<K\>

Defined in: [client/src/types.ts:65](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/client/src/types.ts#L65)

## Extends

- [`BaseMutationOptions`](BaseMutationOptions.md)\<[`MutationMap`](MutationMap.md)\[`K`\]\[`"response"`\], `Error`, [`MutationMap`](MutationMap.md)\[`K`\]\[`"params"`\]\>

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`MutationKey`](../type-aliases/MutationKey.md) |

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: [client/src/types.ts:58](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/client/src/types.ts#L58)

Called when the mutation encounters an error

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`void`

#### Inherited from

[`BaseMutationOptions`](BaseMutationOptions.md).[`onError`](BaseMutationOptions.md#onerror)

***

### onSuccess()?

> `optional` **onSuccess**: (`data`) => `void`

Defined in: [client/src/types.ts:56](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/client/src/types.ts#L56)

Called when the mutation successfully completes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`MutationMap`](MutationMap.md)\[`K`\]\[`"response"`\] |

#### Returns

`void`

#### Inherited from

[`BaseMutationOptions`](BaseMutationOptions.md).[`onSuccess`](BaseMutationOptions.md#onsuccess)

***

### params?

> `optional` **params**: [`MutationMap`](MutationMap.md)\[`K`\]\[`"params"`\]

Defined in: [client/src/types.ts:60](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/client/src/types.ts#L60)

Additional parameters for the mutation

#### Inherited from

[`BaseMutationOptions`](BaseMutationOptions.md).[`params`](BaseMutationOptions.md#params)

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [client/src/types.ts:62](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/1f70c0e343ae7c5af199be23e7e4eec043951068/packages/client/src/types.ts#L62)

Custom timeout in milliseconds

#### Inherited from

[`BaseMutationOptions`](BaseMutationOptions.md).[`timeoutMs`](BaseMutationOptions.md#timeoutms)
