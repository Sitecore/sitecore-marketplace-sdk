# SITECORE MARKETPLACE CLIENT SDK

The Marketplace Client SDK provides a secure, bidirectional communication between a client 
application (running inside an iframe) and the host application. Inspired by React Query, the SDK implements a query/mutation API where:

- **Queries** support one-off data requests as well as subscriptions for live updates.
- **Mutations** trigger state changes or HTTP requests on the host side (with user tokens attached by the Host SDK).

## Installation

```bash
npm install @sitecore-marketplace-sdk/client
```

## Initialization

Before you use queries or mutations, you must initialize the Client SDK.

Example initialization code:

```typescript
import { ClientSDK } from '@sitecore-marketplace-sdk/client';

// Create a configuration object.
const config = {
  origin: 'https://pages.sitecorecloud.io',
  target: window.parent,
  modules: []
};

// Create a Client SDK instance using the configuration.
// The returned SDK provides a type-safe API based on your resource schema.
const client = await ClientSDK.init(config);
```

## Usage

### Query Example

The `query` method supports one-off data requests and live subscriptions. The keys follow a dot-notated format derived from your
static JSON schema (for example, `"application.context"`).

```typescript
(async () => {
  // One-off query example: Request host state once.
  const queryResult = await client.query('host.state');

  console.log(queryResult.data); // Displays the host state data
  console.log(queryResult.isLoading); // false once the request is complete
```

### Mutation Example

Use the `mutate` method to trigger changes on the host side. The Host SDK (integrated via the internal Core SDK) will attach the required
user token and perform the HTTP request on behalf of the client application.

```typescript
(async () => {
  try {
    const mutationResponse = await client.mutate(
      'host.state',
      { params: {
            newState: 'active'
      }}
    );
    console.log('Mutation response:', mutationResponse);
  } catch (error) {
    console.error('Error during mutation:', error);
  }
})();
```

### Application Context

This application context provides information about the application, such as its ID, URL, name, type, icon URL, installation ID, and associated resources.

Here is the ApplicationContext data example:

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

To request the application context, you can use the query method with the key 'application.context'. This will return data of type ApplicationContext.

```typescript
(async () => {
  const queryResult = await client.query('application.context');
  console.log(queryResult.data); // Displays the application context data
})();
```

## Generated Types & Namespace Mapping

The Client SDK heavily relies on a generated static contract (based on a JSON schema such as `resources.schema.json`) that defines
available resource namespaces and methods. For example, with a schema structured like:

```json
{
  "resources": {
    "xmc": {
      "publishing": {
        "status": { "type": "query", ... },
        "publish": { "type": "mutation", ... }
      }
    }
  }
}
```

The generated client types provide a type-safe interface:

- `xmc.publishing.status(params)` returns a `Promise<QueryResult<...>>`
- `xmc.publishing.publish(params)` returns a `Promise<MutationResult<...>>`

The keys passed to `query` and `mutate` are dot-notated (e.g., `"xmc.publishing.status"`), ensuring that they map directly
to the generated methods and resource definitions.

## Additional Information

For more details, please refer to the full documentation in the `/docs` folder or the project documentation.
