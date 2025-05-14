[**@sitecore-marketplace-sdk/core**](../README.md)

***

[@sitecore-marketplace-sdk/core](../README.md) / HandshakeConfig

# Interface: HandshakeConfig

Defined in: [packages/core/src/types.ts:21](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/688f537c0b6c422cf8b1a4f05e879f688e51e92b/packages/core/src/types.ts#L21)

Configuration for the handshake process.

## Properties

### selfOrigin

> **selfOrigin**: `string`

Defined in: [packages/core/src/types.ts:27](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/688f537c0b6c422cf8b1a4f05e879f688e51e92b/packages/core/src/types.ts#L27)

The origin of the current window (usually window.location.origin)

***

### targetOrigin

> **targetOrigin**: `string`

Defined in: [packages/core/src/types.ts:25](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/688f537c0b6c422cf8b1a4f05e879f688e51e92b/packages/core/src/types.ts#L25)

The origin of the target (e.g., "https://example.com")

***

### type

> **type**: `"host"` \| `"client"`

Defined in: [packages/core/src/types.ts:23](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/688f537c0b6c422cf8b1a4f05e879f688e51e92b/packages/core/src/types.ts#L23)

Indicates whether this is the host or client side

***

### version

> **version**: `string`

Defined in: [packages/core/src/types.ts:29](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/688f537c0b6c422cf8b1a4f05e879f688e51e92b/packages/core/src/types.ts#L29)

Version of the SDK for compatibility checking
