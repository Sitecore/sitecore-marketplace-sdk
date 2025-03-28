# SITECORE MARKETPLACE XMC MODULE

The XMC module is a lightweight, type-safe communication layer that extends
the Marketplace Client SDK. It provides access to XMCloud APIs.

## Installation

```bash
npm install @sitecore-marketplace-sdk/xmc
```

## Initialization
Before you use queries or mutations, you must initialize the XMC module.

Example initialization code:

```typescript
import { XMC } from '@sitecore-marketplace-sdk/xmc';
import { ClientSDK } from '@sitecore-marketplace-sdk/client';

// Create a configuration object.
const config = {
  origin: 'https://xmapps.sitecorecloud.io',
  target: window.parent,
  modules: [XMC]
};

// Create a Client SDK instance using the configuration.
const client = await ClientSDK.init(config);

const sites = await client.query('xmc.xmapps.listSites')
console.log(sites.data); // Displays the list of sites
```

```typescript
  // Mutation example: Trigger a state change on the host.
  const mutationResult = await client.mutate('xmc.xmapps.updateSite', {
    params: { id: '123', name: "new site name" },
  });
  
  console.log(mutationResult.data); // Displays the updated host state data
```


