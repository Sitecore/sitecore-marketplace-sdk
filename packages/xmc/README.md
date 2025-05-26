# Sitecore Marketplace SDK - `xmc` package

The `xmc` package extends the Client SDK and provides type-safe interfaces for interacting with the following Sitecore XM Cloud APIs:
-   [Authoring and Management GraphQL API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-authoring-and-management-graphql-api.html) - to manage Sitecore content using GraphQL.
-   [XM Apps REST API](https://api-docs.sitecore.com/xmc/xm-apps-api) - to manage sites, site collections, pages, and languages.
-   [Experience Edge Token API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/experience-edge-for-xm-apis.html) - to manage API keys for the Delivery API.
-   [Experience Edge Admin API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/experience-edge-for-xm-apis.html) - to administer your Edge tenant.

## Prerequisites
- Node.js 16 or later. Check your installed version by using the `node --version` command.
- npm 10 or later. Check your installed version by using the `npm --version` command.
- An XM Cloud subscription.

## Installation

```bash
npm install @sitecore-marketplace-sdk/xmc
```

## Initialization
Before you use queries or mutations, you must initialize the XMC module:

```typescript
import { ClientSDK } from '@sitecore-marketplace-sdk/client';
import { XMC } from '@sitecore-marketplace-sdk/xmc';

// Create a configuration object:
const config = {
  origin: 'https://xmapps.sitecorecloud.io', // Where in Sitecore to display the app
  target: window.parent,  // To iframe the app
  modules: [XMC] // Extend Client SDK with `XMC`
};

// Create a Client SDK instance using the configuration:
const client = await ClientSDK.init(config);
```

## Usage
### Make a query
Use the `query` method to make one-off data requests and live subscriptions. Pass a value to the method depending on the data you want to retrieve. For example, pass `'xmc.xmapp.listSites'` to retrieve a list of sites:

```typescript
const sites = await client.query('xmc.xmapp.listSites')
console.log(sites.data); // Displays the list of sites
```

For an overview of all the possible values, refer to the [`QueryMap` interface](../../docs/modules/xmc/interfaces/QueryMap.md).

### Perform a mutation
Use the `mutate` method to trigger changes in Sitecore (the host). Pass a value to the method depending on the change you want to make.

For example, to update various parameters of a site, pass `'xmc.xmapp.updateSite'` as the first argument, then pass an object as the second argument. Inside the object, pass the data you want to change to `params`:

```typescript
// Trigger a state change in the host, such as XM Cloud Sites:
const mutationResult = await client.mutate('xmc.xmapp.updateSite', {
  params: { id: '123', name: "new site name" },
});

console.log(mutationResult.data); // Displays the updated host state data
```

For an overview of all the possible values, refer to the [`MutationMap` interface](../../docs/modules/xmc/interfaces/MutationMap.md).

> [!NOTE]
> Behind the scenes, the Host SDK (integrated via the internal `core` package) attaches the required user token and performs the HTTP request on behalf of the Marketplace app (the client).

## Documentation

For more information, refer to the reference documentation in the `/docs` folder.

## License 
This package is part of the Sitecore Marketplace SDK, licensed under the Apache 2.0 License. Refer to the [LICENSE](../../LICENSE.MD) file in the repository root.

## Status
The `client` package is actively maintained as part of the Sitecore Marketplace SDK.
