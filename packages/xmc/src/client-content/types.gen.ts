// This file is auto-generated by @hey-api/openapi-ts

export type GraphqlData = {
  body: {
    /**
     * The GraphQL query string
     */
    query?: string;
    /**
     * Optional variables for the GraphQL query
     */
    variables?: {};
    /**
     * Name of the operation if multiple operations are provided
     */
    operationName?: string | null;
  };
  path?: never;
  query?: {
    /**
     * The Sitecore context ID.
     */
    sitecoreContextId?: string;
  };
  url: '/graphql/v1';
};

export type GraphqlErrors = {
  /**
   * Bad request (e.g., syntax error in query)
   */
  400: unknown;
  /**
   * Unauthorized request (missing or invalid authentication)
   */
  401: unknown;
  /**
   * Internal server error
   */
  500: unknown;
};

export type GraphqlResponses = {
  /**
   * Successful GraphQL response
   */
  200: {
    /**
     * GraphQL response data
     */
    data?: {
      [key: string]: unknown;
    };
    errors?: Array<{
      message?: string;
      locations?: Array<{
        line?: number;
        column?: number;
      }>;
      path?: Array<string>;
    }>;
  };
};

export type GraphqlResponse = GraphqlResponses[keyof GraphqlResponses];

export type ClientOptions = {
  baseUrl: 'https://example.com/content/api' | (string & {});
};
