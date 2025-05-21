[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / MutationMap

# Interface: MutationMap

Defined in: packages/client/dist/sdk-types.d.ts:186

## Properties

### pages.reloadCanvas

> **reloadCanvas**: `object`

Defined in: packages/client/dist/sdk-types.d.ts:187

#### params

> **params**: `void`

#### response

> **response**: `void`

#### subscribe

> **subscribe**: `false`

***

### xmc.authoring.authoringGraphql

> **authoringGraphql**: `object`

Defined in: [packages/xmc/src/client-authoring/augmentation.gen.ts:13](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-authoring/augmentation.gen.ts#L13)

Send a GraphQL query or mutation request to the Sitecore Authoring API. Both queries and mutations are supported.

#### params

> **params**: `Options`\<[`AuthoringGraphqlData`](../type-aliases/AuthoringGraphqlData.md), `boolean`\>

#### response

> **response**: \{ `data`: \{ `data?`: \{[`key`: `string`]: `unknown`; \}; `errors?`: `object`[]; \}; `request`: `Request`; `response`: `Response`; \} \| (\{ data: \{ data?: \{ \[key: string\]: unknown; \} \| undefined; errors?: \{ message?: string \| undefined; locations?: \{ line?: number \| undefined; column?: number \| undefined; \}\[\] \| undefined; path?: string\[\] \| undefined; \}\[\] \| undefined; \}; error: undefined; \} \| \{ ...; \}) & \{ ...; \}

***

### xmc.contentTransfer.completeChunkSetTransfer

> **completeChunkSetTransfer**: `object`

Defined in: [packages/xmc/src/client-content-transfer/augmentation.gen.ts:54](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content-transfer/augmentation.gen.ts#L54)

Marks the specified chunk set as complete for the given transfer.

#### params

> **params**: `Options`\<[`CompleteChunkSetTransferData`](../type-aliases/CompleteChunkSetTransferData.md), `boolean`\>

#### response

> **response**: \{ `data`: \{ `ContentTransferFileName`: `string`; \}; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: \{ ContentTransferFileName: string; \}; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.contentTransfer.createContentTransfer

> **createContentTransfer**: `object`

Defined in: [packages/xmc/src/client-content-transfer/augmentation.gen.ts:42](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content-transfer/augmentation.gen.ts#L42)

Creates a new transfer in the Source environment.

#### params

> **params**: `Options`\<[`CreateContentTransferData`](../type-aliases/CreateContentTransferData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: unknown; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.contentTransfer.deleteContentTransfer

> **deleteContentTransfer**: `object`

Defined in: [packages/xmc/src/client-content-transfer/augmentation.gen.ts:60](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content-transfer/augmentation.gen.ts#L60)

Deletes the content transfer by transfer ID. Starts a clean-up of all resources related to content transfer in Source or Target environments.

#### params

> **params**: `Options`\<[`DeleteContentTransferData`](../type-aliases/DeleteContentTransferData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: unknown; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.contentTransfer.saveChunk

> **saveChunk**: `object`

Defined in: [packages/xmc/src/client-content-transfer/augmentation.gen.ts:48](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content-transfer/augmentation.gen.ts#L48)

Saves the specified chunk from the specified chunk set in the Target environment.

#### params

> **params**: `Options`\<[`SaveChunkData`](../type-aliases/SaveChunkData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: unknown; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.live.contentGraphql

> **contentGraphql**: `object`

Defined in: [packages/xmc/src/client-content/augmentation.gen.ts:19](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content/augmentation.gen.ts#L19)

Send a GraphQL query request to the Sitecore GraphQL API. Mutations are not supported by the Preview API and Delivery API.

#### params

> **params**: `Options`\<[`ContentGraphqlData`](../type-aliases/ContentGraphqlData.md), `boolean`\>

#### response

> **response**: \{ `data`: \{ `data?`: \{[`key`: `string`]: `unknown`; \}; `errors?`: `object`[]; \}; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: \{ data?: \{ \[key: string\]: unknown; \} \| undefined; errors?: \{ message?: string \| undefined; locations?: \{ line?: number \| undefined; column?: number \| undefined; \}\[\] \| undefined; path?: string\[\] \| undefined; \}\[\] \| undefined; \}; error: undefined; \}) & \{ ...; \}

***

### xmc.preview.contentGraphql

> **contentGraphql**: `object`

Defined in: [packages/xmc/src/client-content/augmentation.gen.ts:13](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-content/augmentation.gen.ts#L13)

Send a GraphQL query request to the Sitecore GraphQL API. Mutations are not supported by the Preview API and Delivery API.

#### params

> **params**: `Options`\<[`ContentGraphqlData`](../type-aliases/ContentGraphqlData.md), `boolean`\>

#### response

> **response**: \{ `data`: \{ `data?`: \{[`key`: `string`]: `unknown`; \}; `errors?`: `object`[]; \}; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: unknown; \} \| \{ data: \{ data?: \{ \[key: string\]: unknown; \} \| undefined; errors?: \{ message?: string \| undefined; locations?: \{ line?: number \| undefined; column?: number \| undefined; \}\[\] \| undefined; path?: string\[\] \| undefined; \}\[\] \| undefined; \}; error: undefined; \}) & \{ ...; \}

***

### xmc.xmapp.addFavoriteSite

> **addFavoriteSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:208](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L208)

Adds a site to your list of favorites

#### params

> **params**: `Options`\<[`AddFavoriteSiteData`](../type-aliases/AddFavoriteSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.aggregateLivePageVariants

> **aggregateLivePageVariants**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:214](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L214)

Returns currently active personalization variants for the requested pages.

#### params

> **params**: `undefined` \| `Options`\<[`AggregateLivePageVariantsData`](../type-aliases/AggregateLivePageVariantsData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`PageVariantsAggregationResponse`](../type-aliases/PageVariantsAggregationResponse.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: PageVariantsAggregationResponse; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.aggregatePageData

> **aggregatePageData**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:220](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L220)

Aggregates data about multiple pages and their components.

#### params

> **params**: `undefined` \| `Options`\<[`AggregatePageDataData`](../type-aliases/AggregatePageDataData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`PagesAggregationResponse`](../type-aliases/PagesAggregationResponse.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: PagesAggregationResponse; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.copySite

> **copySite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:293](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L293)

You can create a site by duplicating an existing one. When you duplicate a site, its content items (such as pages and images, folder structure, and links) are copied. Most of the settings are also copied, but you can change those later. The new site's path parameters and response body schema will be the same as the original site.

#### params

> **params**: `Options`\<[`CopySiteData`](../type-aliases/CopySiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.createCollection

> **createCollection**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:190](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L190)

Creates a collection by specifying a name and, optionally, a display name and description.

#### params

> **params**: `undefined` \| `Options`\<[`CreateCollectionData`](../type-aliases/CreateCollectionData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.createHost

> **createHost**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:329](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L329)

Creates a host for a site.

#### params

> **params**: `Options`\<[`CreateHostData`](../type-aliases/CreateHostData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`Host`](../type-aliases/Host.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: Host; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.createLanguage

> **createLanguage**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:184](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L184)

Adds a language to your environment, so you can create content and build websites in that language. You can choose from the language supported by Sitecore XM Cloud. If you do not know the language code of the language, first retrieve the list of languages supported in Sitecore XM Cloud.
           To add a language to the system, you must provide the language code. You can optionally input additional parameters, such as region code and spell checker.
           If you want to add a custom language not in the default cultures, register it as a custom culture (as described in .NET CultureInfo class) and update the LanguageDefinitions.config file.

#### params

> **params**: `Options`\<[`CreateLanguageData`](../type-aliases/CreateLanguageData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`Language`](../type-aliases/Language.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: Language; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.createSite

> **createSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:272](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L272)

[Creates a site](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site.html) for the environment.
           Sites are created using  [site templates](https://doc.sitecore.com/xmc/en/developers/xm-cloud/create-a-site-template-for-the-xm-cloud-dashboard.html). Every site belongs to a [site collection](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site-collection.html). You can either create a site inside an existing collection or create a new one.
           It is also possible to create a site by duplicating a site.

#### params

> **params**: `Options`\<[`CreateSiteData`](../type-aliases/CreateSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.deleteCollection

> **deleteCollection**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:196](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L196)

Deletes a site collection, including sites in that collection.

#### params

> **params**: `Options`\<[`DeleteCollectionData`](../type-aliases/DeleteCollectionData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.deleteHost

> **deleteHost**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:335](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L335)

Deletes a site using a hostID. Deletes a site, including its pages, settings, media files, data sources, presentation elements, dictionaries, components, variants, and page designs. Everyone in the environment will lose access to the deleted site.

#### params

> **params**: `Options`\<[`DeleteHostData`](../type-aliases/DeleteHostData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: unknown; error: undefined; \} \| \{ data: undefined; error: ProblemDetails; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.deleteLanguage

> **deleteLanguage**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:251](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L251)

Deletes a language from the XM Cloud environment.
           To delete a language from the system, you must provide the regional ISO code of the language. If you do not know the ISO code of the language, first retrieve the list of languages added to the environment.

#### params

> **params**: `Options`\<[`DeleteLanguageData`](../type-aliases/DeleteLanguageData.md), `boolean`\>

#### response

> **response**: \{ `data`: `boolean`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: boolean; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.deleteSite

> **deleteSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:281](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L281)

Deletes a site, including its pages, settings, media files, data sources, presentation elements, dictionaries, components, variants, and page designs. Everyone in the environment will lose access to the deleted site.
          Deleting a site affects related websites in the collection:
          • If the site [shares](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-site.html#share-a-site) items with other sites, this might result in broken links.
          • Items that are cloned to other sites are turned into regular items, and the links removed.

#### params

> **params**: `Options`\<[`DeleteSiteData`](../type-aliases/DeleteSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.detachAnalyticsIdentifier

> **detachAnalyticsIdentifier**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:323](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L323)

Removes the analytics identifiers from one or more sites.

#### params

> **params**: `Options`\<[`DetachAnalyticsIdentifierData`](../type-aliases/DetachAnalyticsIdentifierData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: unknown; error: undefined; \} \| \{ data: undefined; error: ProblemDetails; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.removeFavoriteSite

> **removeFavoriteSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:264](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L264)

Removes a site from your list of favorites

#### params

> **params**: `Options`\<[`RemoveFavoriteSiteData`](../type-aliases/RemoveFavoriteSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `unknown`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: unknown; error: undefined; \} \| \{ data: undefined; error: ProblemDetails; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.renameCollection

> **renameCollection**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:226](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L226)

Changes the system name of a site collection.

#### params

> **params**: `Options`\<[`RenameCollectionData`](../type-aliases/RenameCollectionData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.renameSite

> **renameSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:299](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L299)

Changes the system name of a site.

#### params

> **params**: `Options`\<[`RenameSiteData`](../type-aliases/RenameSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: `string`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: string; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.sortCollections

> **sortCollections**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:232](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L232)

By assigning a sort value to site collection IDs, you can use this endpoint to apply an order by which collections are sorted in the Sites user interface and in Content Editor. The lower the sort value, the higher the site appears in the interface.

#### params

> **params**: `Options`\<[`SortCollectionsData`](../type-aliases/SortCollectionsData.md), `boolean`\>

#### response

> **response**: \{ `data`: `void`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: void; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.sortSites

> **sortSites**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:305](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L305)

By assigning a sort value to site IDs, you can use this endpoint to apply an order by which sites are sorted in the Sites user interface and in Content Editor. The lower the sort value, the higher the site appears in the interface.

#### params

> **params**: `Options`\<[`SortSitesData`](../type-aliases/SortSitesData.md), `boolean`\>

#### response

> **response**: \{ `data`: `void`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: void; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.updateCollection

> **updateCollection**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:202](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L202)

Updates the display name and the description of the site collection. To change the system name of a collection, see [rename a site collection](#tag/Collections/operation/Rename).

#### params

> **params**: `Options`\<[`UpdateCollectionData`](../type-aliases/UpdateCollectionData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`SiteCollection`](../type-aliases/SiteCollection.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: SiteCollection; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.updateHost

> **updateHost**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:341](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L341)

Modifies the properties of a host.

#### params

> **params**: `Options`\<[`UpdateHostData`](../type-aliases/UpdateHostData.md), `boolean`\>

#### response

> **response**: \{ `data`: `void`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: void; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.updateLanguage

> **updateLanguage**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:258](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L258)

Updates a [language supported](https://doc.sitecore.com/xmc/en/users/xm-cloud/add-a-language-to-your-xm-cloud-environment.html#add-a-custom-language) by Sitecore XM Cloud.
           To update a language, you must provide the regional ISO code of the language. If you do not know the ISO code of the language, first retrieve the list of languages supported in Sitecore XM Cloud.

#### params

> **params**: `Options`\<[`UpdateLanguageData`](../type-aliases/UpdateLanguageData.md), `boolean`\>

#### response

> **response**: \{ `data`: `void`; `request`: `Request`; `response`: `Response`; \} \| (\{ data: void; error: undefined; \} \| \{ data: undefined; error: UpdateLanguageError; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.updateSite

> **updateSite**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:287](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L287)

Updates various parameters of a site. To change the name of a site, see [rename a site](#tag/Sites/operation/Rename).

#### params

> **params**: `Options`\<[`UpdateSiteData`](../type-aliases/UpdateSiteData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`Site`](../type-aliases/Site.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: Site; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.updateSitemapConfiguration

> **updateSitemapConfiguration**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:353](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L353)

Updates a [sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) configuration.

#### params

> **params**: `Options`\<[`UpdateSitemapConfigurationData`](../type-aliases/UpdateSitemapConfigurationData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`SitemapConfiguration`](../type-aliases/SitemapConfiguration.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: SitemapConfiguration; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.uploadSiteThumbnail

> **uploadSiteThumbnail**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:347](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L347)

Uploads an image to be used as [thumbnail](https://doc.sitecore.com/xmc/en/users/ea-xm-cloud/manage-sites.html#manage-general-site-settings) for a site when it is displayed in the [XM Cloud Sites application](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html).

#### params

> **params**: `Options`\<[`UploadSiteThumbnailData`](../type-aliases/UploadSiteThumbnailData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`UploadMediaOutput`](../type-aliases/UploadMediaOutput.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: UploadMediaOutput; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.validateCollectionName

> **validateCollectionName**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:244](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L244)

Validates a site collection name to ensure it meets the required criteria. The validations applied to the collection name:
- Is a string and can't be null.
- Is unique.
- The length of the name is a maximum of 50 characters.
- Can't start or end with a space.
- Can't start with a dash.
- Can include Latin alphanumeric characters, spaces and dashes.

#### params

> **params**: `Options`\<[`ValidateCollectionNameData`](../type-aliases/ValidateCollectionNameData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`NameValidationResult`](../type-aliases/NameValidationResult.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: NameValidationResult; error: undefined; \}) & \{ request: Request; response: Response; \}

***

### xmc.xmapp.validateSiteName

> **validateSiteName**: `object`

Defined in: [packages/xmc/src/client-xmapp/augmentation.gen.ts:317](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/augmentation.gen.ts#L317)

Validates a site name to ensure it meets the required criteria. The validations applied to the site name:
- Is a string and can't be null.
- Is unique.
- The length of the name is a maximum of 50 characters.
- Can't start or end with a space.
- Can't start with a dash.
- Can include Latin alphanumeric characters, spaces and dashes.

#### params

> **params**: `Options`\<[`ValidateSiteNameData`](../type-aliases/ValidateSiteNameData.md), `boolean`\>

#### response

> **response**: \{ `data`: [`NameValidationResult`](../type-aliases/NameValidationResult.md); `request`: `Request`; `response`: `Response`; \} \| (\{ data: undefined; error: ProblemDetails; \} \| \{ data: NameValidationResult; error: undefined; \}) & \{ request: Request; response: Response; \}
