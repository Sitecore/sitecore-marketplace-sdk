[**@sitecore-marketplace-sdk/client**](../README.md)

***

[@sitecore-marketplace-sdk/client](../README.md) / HostState

# Type Alias: HostState\<T\>

> **HostState**\<`T`\> = `T` *extends* `"portal"` ? `null` : `T` *extends* `"xmc:xmapps"` ? [`XmcXmAppsHostState`](../interfaces/XmcXmAppsHostState.md) : `T` *extends* `"xmc:pages-contextview"` ? [`XmcPagesContextViewHostState`](../interfaces/XmcPagesContextViewHostState.md) : `never`

Defined in: [client/src/sdk-types.ts:11](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/52ce51a9eb68c659f71f11d434c89a18a730796e/packages/client/src/sdk-types.ts#L11)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`AppType`](AppType.md) | [`AppType`](AppType.md) |
