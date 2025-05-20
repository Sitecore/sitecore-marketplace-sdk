[**@sitecore-marketplace-sdk/client**](../README.md)

***

[@sitecore-marketplace-sdk/client](../README.md) / HostState

# Type Alias: HostState\<T\>

> **HostState**\<`T`\> = `T` *extends* `"portal"` ? `null` : `T` *extends* `"xmc:xmapps"` ? [`XmcXmAppsHostState`](../interfaces/XmcXmAppsHostState.md) : `T` *extends* `"xmc:pages-contextview"` ? [`XmcPagesContextViewHostState`](../interfaces/XmcPagesContextViewHostState.md) : `never`

Defined in: [client/src/sdk-types.ts:11](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/client/src/sdk-types.ts#L11)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`AppType`](AppType.md) | [`AppType`](AppType.md) |
