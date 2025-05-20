[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / Language

# Type Alias: Language

> **Language** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:368](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L368)

Language

## Properties

### baseIsoCultureCode?

> `optional` **baseIsoCultureCode**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:414](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L414)

Base ISO culture code. If this is a custom language, this ISO culture code will represent the language code used as the base of this language.
For example, if the custom language uses the same writing system, calendar, and date format as American English, the value would be 'en-US'.
Example value: en-US

***

### displayName?

> `optional` **displayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:398](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L398)

The human-readable name of the language as it appears in the user interface, for example, "English" or "Español."
Example value: English (United States) : English (United States)

***

### englishName?

> `optional` **englishName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:408](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L408)

The language name in English, regardless of the language being described. For example, "Deutsch" would be displayed as "German."
Example value: English (United States)

***

### fallbackLanguageIso?

> `optional` **fallbackLanguageIso**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:388](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L388)

The ISO code of the fallback language
Example value: en

***

### fallbackRegionDisplayName?

> `optional` **fallbackRegionDisplayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:419](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L419)

If this is a custom language, the Fallback Region Display Name respresents the region name that should be displayed.
Example value: North America

***

### id?

> `optional` **id**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:373](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L373)

The identifier of the language.
Example value: af58419145c9420187405409f4cf8bdd

***

### iso?

> `optional` **iso**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:378](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L378)

The ISO code of the language.
Example value: en

***

### name?

> `optional` **name**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:393](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L393)

The ISO language code (e.g., "en" for English, "es" for Spanish).
Example value: en-US

***

### nativeName?

> `optional` **nativeName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:403](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L403)

The language name in its original script or characters. For instance, "English" would be displayed as "English" itself, but "日本語" would appear as "日本語."
Example value: English (United States)

***

### regionalIsoCode?

> `optional` **regionalIsoCode**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:383](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/af886e6134b8d1079ef5b8ef70b7eb2f1d9c8aeb/packages/xmc/src/client-xmapp/types.gen.ts#L383)

The regional ISO code of the language, for example, US for the USA, or DK for Denmark.
Example value: en-US
