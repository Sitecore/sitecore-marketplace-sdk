[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / Permissions

# Type Alias: Permissions

> **Permissions** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:752](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L752)

The access rights of the current user to the site.

## Properties

### canAdmin?

> `optional` **canAdmin**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:757](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L757)

If set to true, canAdmin gives you admin rights. Being an admin means that you control access permissions for other users. The Administer access right requires Read and Write access rights.
Example value: False

***

### canCreate?

> `optional` **canCreate**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:767](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L767)

If set to true, canCreate gives you permission to create entities.
Example value: False

***

### canDelete?

> `optional` **canDelete**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:772](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L772)

If set to true, canDelete gives you permission to delete entities.
Example value: False

***

### canDuplicate?

> `optional` **canDuplicate**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:792](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L792)

If set to true, canDuplicate gives you permission to duplicate entities.
Example value: False

***

### canPublish?

> `optional` **canPublish**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:787](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L787)

If set to true, canPublish gives you permission to publish sites in this environment.
Example value: False

***

### canRead?

> `optional` **canRead**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:782](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L782)

If set to true, canRead gives you permission to see entities, including all their parameters.
Example value: False

***

### canRename?

> `optional` **canRename**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:777](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L777)

If set to true, canRename gives you permission to rename entities.
Example value: False

***

### canWrite?

> `optional` **canWrite**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:762](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L762)

If set to true, canWrite gives you permission to edit values. The canWrite access right requires the canRead access right.
Example value: False
