[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / UpdateHostInput

# Type Alias: UpdateHostInput

> **UpdateHostInput** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1262](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1262)

A host update request.

## Properties

### analyticsIdentifiers?

> `optional` **analyticsIdentifiers**: [`AnalyticsIdentifier`](AnalyticsIdentifier.md)[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1298](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1298)

The list of analytics tracker identifiers mapped to the host, per language.

***

### homePageId?

> `optional` **homePageId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1290](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1290)

The identifier of the home page.
Example value: 110d559fdea542ea9c1c8a5df7e70ef9

***

### hostnames?

> `optional` **hostnames**: `string`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1275](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1275)

One or more hostnames.
Example value: [
"dev.skate-park.com",
"uat.skate-park.com"
]

***

### languageSettings?

> `optional` **languageSettings**: [`SiteLanguageSettings`](SiteLanguageSettings.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1305](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1305)

***

### name?

> `optional` **name**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1267](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1267)

Name of the host
Example value: skate-park

***

### renderingHost?

> `optional` **renderingHost**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1285](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1285)

The rendering host.
Example value: Default

***

### settings?

> `optional` **settings**: \{[`key`: `string`]: `string`; \} \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1302](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1302)

The host settings collection.

***

### targetHostname?

> `optional` **targetHostname**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1280](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1280)

The target hostname.
Example value: www.skate-park.com

***

### thumbnail?

> `optional` **thumbnail**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1294](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1294)

The thumbnail information.
