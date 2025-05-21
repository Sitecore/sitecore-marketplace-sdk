[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / PageResponse

# Type Alias: PageResponse

> **PageResponse** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:650](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L650)

## Properties

### children?

> `optional` **children**: `PageResponse`[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:662](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L662)

Children of the page.

***

### displayName?

> `optional` **displayName**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:677](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L677)

The page's display name.
Example value: Site Home

***

### hasChildren?

> `optional` **hasChildren**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:707](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L707)

Whether the page has any child pages.
Example value: True

***

### hasPresentation?

> `optional` **hasPresentation**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:702](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L702)

If set to true, this page can be rendered in the XM Cloud Pages application. This endpoint is set to false for the root item of the site, as well as for the folders if there are any.
Example value: True

***

### hasVersions?

> `optional` **hasVersions**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:658](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L658)

Indicates whether the page has versions in the queried language.

***

### id?

> `optional` **id**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:667](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L667)

The identifier of the page.
Example value: 68900348a3b84eb8ac7df4d179c25727

***

### insertOptions?

> `optional` **insertOptions**: [`PageInsertOption`](PageInsertOption.md)[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:654](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L654)

Insert options for the page.

***

### language?

> `optional` **language**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:682](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L682)

The page language.
Example value: en-US

***

### locking?

> `optional` **locking**: [`PageLocking`](PageLocking.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:709](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L709)

***

### name?

> `optional` **name**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:672](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L672)

The page's system name.
Example value: Home

***

### parentId?

> `optional` **parentId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:697](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L697)

The identifier of the page's parent.
Example value: 4bc0c81a280b4b13890b7b074b9d68f4

***

### path?

> `optional` **path**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:714](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L714)

The path for the page.
Example value: Sitecore/Content/Home/Categories/Products/MyProduct

***

### permissions?

> `optional` **permissions**: [`Permissions`](Permissions.md)

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:708](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L708)

***

### templateId?

> `optional` **templateId**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:692](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L692)

The identifier of the template this page is based on.
Example value: 6fe7d6551e3d4c2780105777f06c6c4f

***

### version?

> `optional` **version**: `number`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:687](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L687)

The current version of the page.
Example value: 1
