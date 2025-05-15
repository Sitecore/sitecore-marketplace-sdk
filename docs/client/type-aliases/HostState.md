[**@sitecore-marketplace-sdk/client**](../README.md)

***

[@sitecore-marketplace-sdk/client](../README.md) / HostState

# Type Alias: HostState\<T\>

> **HostState**\<`T`\> = `T` *extends* `"portal"` ? `null` : `T` *extends* `"xmc:xmapps"` ? [`XmcXmAppsHostState`](../interfaces/XmcXmAppsHostState.md) : `T` *extends* `"xmc:pages-contextview"` ? [`XmcPagesContextViewHostState`](../interfaces/XmcPagesContextViewHostState.md) : `never`

Defined in: [client/src/sdk-types.ts:11](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/4fddef1575854206bbf02ee3cfbdeb66bb2ec8a6/packages/client/src/sdk-types.ts#L11)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`AppType`](AppType.md) | [`AppType`](AppType.md) |
