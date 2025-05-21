[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / NewSiteInput

# Type Alias: NewSiteInput

> **NewSiteInput** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:484](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L484)

A site creation request.

## Properties

### collectionDescription?

> `optional` **collectionDescription**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:547](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L547)

If you want to create a new site collection while creating a new site, you can provide a collection description.
Example value: Sample description for the site collection containing Sites for Brand A

***

### collectionDisplayName?

> `optional` **collectionDisplayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:542](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L542)

The display name for the collection.
Example value: Skate Park Site

***

### collectionId?

> `optional` **collectionId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:506](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L506)

The ID of the collection you want the new site to belong to. If you don't know the collection ID, first [retrieve collections](#tag/Collections/operation/Get).
Required if Sitecore.XmApps.Sites.Models.REST.NewSiteInput.CollectionName is not provided. If left empty, you must provide collectionName instead and a new collection will be created along with the newly created site.
If both collectionId and collectionName are provided, collectionName will be ignored.
Example value: 5aae1eeaea2440bf96f11f43da82c77b

***

### collectionName?

> `optional` **collectionName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:537](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L537)

The name of the new collection you want the new site to belong to.
Required if Sitecore.XmApps.Sites.Models.REST.NewSiteInput.CollectionId is not provided. If left empty, you must provide collectionId of an existing collection you want the new site to belong to.
If both collectionId and collectionName are provided, collectionName will be ignored.
Example value: Brand A

***

### description?

> `optional` **description**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:530](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L530)

Optional text that provides a meaningful description of the site.
Example value: New site for Brand A in English-speaking countries.

***

### displayName?

> `optional` **displayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:494](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L494)

The display name for the site.
Example value: Skate Park Site

***

### hostName?

> `optional` **hostName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:525](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L525)

Optional hostname for the new site. Default value: *
Example value: dev.skate-park.com

***

### language

> **language**: `string`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:512](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L512)

The language for the site. If you do not know what languages are available in the environment, first [retrieve the list of languages](#tag/Languages/operation/Get).
If the language you want is not available in the environment, [add the language](#tag/Languages/operation/Create) first.
Example value: en

***

### languages?

> `optional` **languages**: `string`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:520](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L520)

The list of supported languages for the site.
Example value: [
"en",
"da"
]

***

### posMappings?

> `optional` **posMappings**: [`AnalyticsIdentifier`](AnalyticsIdentifier.md)[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:552](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L552)

The [site identifier](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html) for the site.
This identifier lets you control analytics and personalization for the site.

***

### siteName

> **siteName**: `string`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:489](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L489)

The name of the site.
Example value: skate-park

***

### templateId

> **templateId**: `string`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:499](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L499)

The ID of the template used to create the site. If you don't know the template ID, first [retrieve site templates](#tag/Sites/operation/GetTemplates).
Example value: 5aae1eeaea2440bf96f11f43da82c77b
