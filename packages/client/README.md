# Sitecore Marketplace SDK - `client` package

The `client` package provides secure, bidirectional communication between a Marketplace application (the client) and Sitecore (the host). It loads the Marketplace app in Sitecore inside a sandboxed [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe). The iframe and its parent window securely communicate using the web browser's [PostMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

This package lets you make queries and perform mutations:
- Queries support one-off data requests and subscriptions for live updates.
- Mutations trigger state changes or HTTP requests in Sitecore.
> [!TIP]
> Inspired by React Query, the query/mutation API manages internal state, loading status, and error handling.

The `client` package is required for all Marketplace apps.

## Prerequisites
- Node.js 16 or later. Check your installed version by using the node --version command.
- npm 10 or later. Check your installed version by using the npm --version command.
- Access to the Sitecore Cloud Portal.

## Installation

```bash
npm install @sitecore-marketplace-sdk/client
```

## Initialization

Before you use queries or mutations, you must initialize the Client SDK:

```typescript
import { ClientSDK } from '@sitecore-marketplace-sdk/client';

// Create a configuration object:
const config = {
  origin: 'https://pages.sitecorecloud.io', // Where in Sitecore to display the app
  target: window.parent, // To iframe the app
  modules: [] // Extend Client SDK with other modules, such as `XMC`
};

// Create a Client SDK instance using the configuration. The returned SDK provides a type-safe API based on your resource schema:
const client = await ClientSDK.init(config);
```

## Usage

### Make a query

Use the `query` method to make one-off data requests and live subscriptions. Pass a value to the method depending on the data you want to retrieve.

For example, pass `'host.state'` to retrieve the status of the host application:

```typescript
(async () => {
  // One-off query example: Request host state once.
  const queryResult = await client.query('host.state');

  console.log(queryResult.data); // Displays the host state data
  console.log(queryResult.isLoading); // false once the request is complete
```

For an overview of all the possible values, refer to the `QueryMap` interface in the `sdk-types.ts` file of the package.

### Perform a mutation

Use the `mutate` method to trigger changes in Sitecore (the host). Pass a value to the method depending on the change you want to make. 

For example, pass `'pages.reloadCanvas'` to reload the XM Cloud page builder canvas:

```typescript
(async () => {
  try {
    const mutationResponse = await client.mutate('pages.reloadCanvas');
    console.log('Mutation response:', mutationResponse);
  } catch (error) {
    console.error('Error during mutation:', error);
  }
})();
```

For an overview of all the possible values, refer to the `MutationMap` interface in the `sdk-types.ts` file of the package.

> [!NOTE]
> Behind the scenes, the Host SDK (integrated via the internal `core` package) attaches the required user token and performs the HTTP request on behalf of the Marketplace app (the client).

### Query the application context

The application context provides information about your Marketplace app, such as its ID, URL, name, type, icon URL, installation ID, and associated resources:

```javascript
{
   id: 'my-app-id',
   name: 'My App',
   type: 'portal',
   url: 'https://my-app.com/app',
   iconUrl: 'https://my-app.com/assets/icon.png',
   installationId: 'abc1234567890',
   resources: [
     {
       resourceId: 'resource-1',
       tenantId: 'tenant-1',
       tenantName: 'Example Tenant',
       context: {
         live: '1234567890', 
         preview: '0987654321'
       }
     }
   ]
}
```

To retrieve the application context, use the `query` method and pass `'application.context'` to it:

```typescript
(async () => {
  const queryResult = await client.query('application.context');
  console.log(queryResult.data); // Displays the application context data
})();
```

## Documentation

For more information, refer to the reference documentation in the `/docs` folder.

## License 
This package is part of the Sitecore Marketplace SDK, licensed under the Apache 2.0 License. Refer to the [LICENSE](../../LICENSE.md) file in the repository root.

## Status
The `client` package is actively maintained as part of the Sitecore Marketplace SDK.
