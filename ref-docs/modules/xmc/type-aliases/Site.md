[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / Site

# Type Alias: Site

> **Site** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:887](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L887)

A site response entity.

## Properties

### brandKitId?

> `optional` **brandKitId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:933](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L933)

The identifier of the brand kit associated with this site.
Example value: e3f1c5a2-4b6d-4a3e-9f1b-2d3c4b5a6e7f

***

### collectionId?

> `optional` **collectionId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:913](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L913)

The identifier of the collection to which the site belongs.
Example value: 5aae1eeaea2440bf96f11f43da82c77b

***

### created?

> `optional` **created**: `string`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:918](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L918)

The date when the site was created.
Example value: 2019-08-24T14:15:22Z

***

### createdBy?

> `optional` **createdBy**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:923](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L923)

The ID of the user who created the site.
Example value: L6kfw52ZVf

***

### description?

> `optional` **description**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:902](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L902)

The description of the site.
Example value: New site for Brand A in English-speaking countries

***

### displayName?

> `optional` **displayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:907](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L907)

The display name of the site.
Example value: Skate Park Website

***

### errorPagesConfiguration?

> `optional` **errorPagesConfiguration**: [`ErrorPagesConfiguration`](ErrorPagesConfiguration.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:955](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L955)

***

### hosts?

> `optional` **hosts**: [`Host`](Host.md)[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:946](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L946)

The list of hosts that the site resolves to.

***

### id?

> `optional` **id**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:892](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L892)

The identifier of the site.
Example value: 497f6eca-6276-4993-bfeb-53cbbbba6f08

***

### languages?

> `optional` **languages**: `string`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:942](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L942)

The list of languages in use by the site.
Example value: [
"en-US",
"en-CA"
]

***

### name?

> `optional` **name**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:897](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L897)

The name of the site.
Example value: skate-park

***

### permissions?

> `optional` **permissions**: [`Permissions`](Permissions.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:934](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L934)

***

### properties?

> `optional` **properties**: \{[`key`: `string`]: `string`; \} \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:965](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L965)

The read-only properties of the site.

***

### settings?

> `optional` **settings**: \{[`key`: `string`]: `string`; \} \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:959](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L959)

The settings for the site.

***

### sortOrder?

> `optional` **sortOrder**: `number` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:928](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L928)

Sort order of the site.
Example value: 100

***

### supportedLanguages?

> `optional` **supportedLanguages**: `string`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:954](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L954)

The list of languages supported by Sitecore.
Example value: [
"en-US",
"en-CA"
]

***

### thumbnail?

> `optional` **thumbnail**: [`Thumbnail`](Thumbnail.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:908](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L908)
