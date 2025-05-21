[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / SitemapUrlOptions

# Type Alias: SitemapUrlOptions

> **SitemapUrlOptions** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1148](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1148)

URL property configurations in the sitemap.

## Properties

### includeChangeFreq?

> `optional` **includeChangeFreq**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1153](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1153)

Whether to include a change frequency attribute in the sitemap, that specifies how often the page changes its content.
Example value: True

***

### includeLastMod?

> `optional` **includeLastMod**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1158](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1158)

hether to include the last modification date in the sitemap.
Example value: True

***

### includePriority?

> `optional` **includePriority**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1163](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1163)

Whether to include priority information in the sitemap. The priority is a number between 0 and 1 that represents the importance of a page.
Example value: True
