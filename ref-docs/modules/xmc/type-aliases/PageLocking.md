[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / PageLocking

# Type Alias: PageLocking

> **PageLocking** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:614](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L614)

## Properties

### canUnlock?

> `optional` **canUnlock**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:619](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L619)

If set to true, canUnlock gives you permission to unlock a Page entity.
Example value: False

***

### isLocked?

> `optional` **isLocked**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:624](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L624)

If set to true, isLocked denotes that the Page entity has been locked.
Example value: False

***

### lockedBy?

> `optional` **lockedBy**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:629](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L629)

If the Page entity is locked, lockedBy provides information about which user locked the entity.
Example value: john.smith@skate-park.com

***

### lockedByCurrentUser?

> `optional` **lockedByCurrentUser**: `boolean`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:634](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L634)

If set to true, lockedByCurrentUser denotes whether the Page entity was locked by the currently authenticated user.
Example value: False
