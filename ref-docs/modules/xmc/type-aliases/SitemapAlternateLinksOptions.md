[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / SitemapAlternateLinksOptions

# Type Alias: SitemapAlternateLinksOptions

> **SitemapAlternateLinksOptions** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1096](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1096)

Alternate link sitemap configuration.

## Properties

### enabled?

> `optional` **enabled**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1101](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1101)

Whether alternate link generation is enabled. When enabled, xhtml:link elements are added to the URL elements in the sitemap.
Example value: True

***

### includeXDefault?

> `optional` **includeXDefault**: `boolean` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1106](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1106)

Whether alternate links include an x-default link element. The x-default value signals to the search algorithm that the page does not target any specific language or region.
Example value: True
