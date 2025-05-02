/**
 * Client SDK provides high-level abstractions for interacting with the host application
 * via the Core SDK. It exposes a query/mutation API similar to React Query.
 *
 * - Queries support one-off data requests and (optionally) subscriptions for live updates.
 * - Mutations trigger host-side state changes or HTTP requests.
 *
 * Usage example:
 *   const client = await ClientSDK.init({
 *     origin: 'https://host.app',
 *     target: window.parent,
 *     timeout: 5000
 *   });
 * const { data } = await client.query('host.user');
 */

import {
  CoreSDK,
  ExternalUrlPayload,
  GenericRequestData,
  GenericResponseData,
} from '@sitecore-marketplace-sdk/core';
import { ClientSDKConfig, MutationOptions, QueryOptions, QueryResult } from './types'; // This might be adjusted if you merge config changes
import { StateManager } from './state';
import { logger } from './logger';
import type {
  QueryKey,
  QueryMap,
  MutationKey,
  MutationMap,
  NavbarItemsProps,
  SDKModule,
} from './sdk-types';

export class ClientSDK {
  private stateManager: StateManager;
  private coreSdk: CoreSDK;
  private modules: Map<string, SDKModule> = new Map();

  constructor(private config: ClientSDKConfig) {
    this.stateManager = new StateManager();
    // Instantiate CoreSDK internally with the provided configuration.
    this.coreSdk = new CoreSDK(this.config);
  }

  /**
   * Creates and initializes a ClientSDK instance.
   *
   * This static method encapsulates the logic that was formerly in create-client.ts.
   * It builds the necessary configuration, instantiates the ClientSDK, performs the handshake,
   * and returns an instance that is ready to execute requests.
   *
   * @param config - The configuration for the client SDK.
   *                 Includes the host origin, the target window (typically window.parent),
   *                 and an optional timeout.
   * @returns A Promise that resolves with an initialized and ready-to-use ClientSDK instance.
   *
   * @example
   * ```typescript
   * const client = await ClientSDK.init({
   *   origin: 'https://host.app',
   *   target: window.parent,
   *   timeout: 5000
   * });
   * ```
   */
  static async init(config: {
    origin: string;
    target: Window;
    timeout?: number;
    modules?: SDKModule[];
    events?: ClientSDKConfig['events'];
    navbarItems?: NavbarItemsProps;
  }): Promise<ClientSDK> {
    // Build core configuration based on the provided parameters.
    const coreConfig: ClientSDKConfig = {
      target: config.target,
      targetOrigin: config.origin, // Host's origin
      selfOrigin: window.location.origin, // Automatically derived client SDK origin
      timeout: config.timeout,
      events: config.events,
      navbarItems: config.navbarItems,
    };
    const client = new ClientSDK(coreConfig);
    // Run the handshake. If this throws, the promise is rejected.
    await client.initialize();

    await client.setNavbarItems(config.navbarItems);

    // Register modules if provided
    if (config.modules) {
      for (const module of config.modules) {
        client.registerModule(module);
      }
    }

    if (window) {
      logger.info('window is available. Assigning client to window');
      (window as any).sitecore_marketplace__clientSdk = client;
    } else {
      logger.info('window is not available. Not assigning client to window');
    }
    // Register handlers using the provided client events.
    if (config.events) {
      client.registerHandlers();
    }
    return client;
  }

  /**
   * Initializes the client SDK by performing a handshake with the host application.
   * Must be called after the client script loads (when running inside an iframe).
   * @returns A Promise that resolves once the handshake is successfully completed.
   */
  async initialize(): Promise<void> {
    try {
      // Step 1: Initialize the core SDK with basic configuration
      this.coreSdk.initialize({
        type: 'client',
        targetOrigin: this.config.targetOrigin,
        selfOrigin: this.config.selfOrigin || window.location.origin,
        version: '1', // TODO: update to use the npm package version from package.json
      });

      logger.info('Client SDK initialized, performing handshake...');

      // Step 2: Connect by performing the handshake
      await this.coreSdk.connect();

      logger.info('Client handshake successful.');
    } catch (error) {
      logger.error('Client handshake failed:', error);
      throw error;
    }
  }

  private registerModule(module: SDKModule): void {
    this.modules.set(module.namespace, module);
  }

  private hasModule(namespace: string): boolean {
    return this.modules.has(namespace);
  }

  private availableModules(): string[] {
    return Array.from(this.modules.keys());
  }

  private resolveOperation(keyOrOperationKey: string): { request: Function; operation: string } {
    let request = this.coreSdk.request.bind(this.coreSdk); // Bind to preserve context
    let operation = keyOrOperationKey;

    if (keyOrOperationKey.includes('.')) {
      const firstDotIndex = keyOrOperationKey.indexOf('.');
      const namespace = keyOrOperationKey.substring(0, firstDotIndex); // Everything before the first `.`
      const operationName = keyOrOperationKey.substring(firstDotIndex + 1); // Everything after the first `.`

      const module = this.modules.get(namespace);

      if (module) {
        request = module.invokeOperation.bind(module); // Bind module context if applicable
        operation = operationName;
      }
    }

    return { request, operation };
  }

  private registerHandlers(): void {
    if (!this.coreSdk) return;
    const events = this.config.events || {};

    // Handle "pages.context" requests using the new on subscription.
    this.coreSdk.on('pages.context', async (payload: any) => {
      logger.debug('Received pages.context request:', payload);
      if (!events.onPageContextUpdate) {
        logger.debug('onPageContextUpdate event listener is not set.');
        return;
      }
      events.onPageContextUpdate(payload);
      logger.debug('Processed pages.context request.');
    });

    this.coreSdk.on('host.route', (payload: any) => {
      if (this.config.events?.onRouteUpdate) {
        this.config.events.onRouteUpdate(payload.route);
      }
    });
  }

  /**
   * Executes a query against the host application. Queries can be one-off requests
   * or subscriptions that receive live updates.
   *
   * @param key - The query key identifying the resource (e.g. 'host.state', 'host.user')
   * @param options - Configuration for the query
   * @param options.params - Request parameters (headers, query, body)
   * @param options.subscribe - Whether to subscribe to live updates
   * @param options.timeoutMs - Custom timeout in milliseconds
   * @param options.onSuccess - Callback when query succeeds
   * @param options.onError - Callback when query fails
   *
   * @example
   * ```typescript
   * // One-off query
   * const { data } = await client.query('host.user');
   *
   * // Query with subscription
   * const { data, unsubscribe } = await client.query('host.state', {
   *   subscribe: true,
   *   onSuccess: (newState) => console.log('State updated:', newState)
   * });
   *
   * // Later: cleanup subscription
   * unsubscribe?.();
   * ```
   */

  async query<K extends QueryKey>(key: K, queryOptions?: QueryOptions<K>): Promise<QueryResult<K>> {
    const { request, operation } = this.resolveOperation(key as string);

    const { subscribe, onSuccess, onError, params, timeoutMs } = queryOptions || {};
    const hashedKey = await this.generateKeyWithHash(key, queryOptions);
    logger.debug(`Query (${key}) initiated with params:`, params, `timeoutMs: ${timeoutMs}`);

    this.stateManager.updateQueryState(hashedKey, { status: 'loading' });

    try {
      const data = (await request(operation, params)) as QueryMap[K]['response'];
      logger.info(`Query (${key}) success:`, data);

      this.stateManager.updateQueryState(hashedKey, {
        status: 'success',
        data,
      });

      if (subscribe) {
        this.stateManager.subscribe(key, (state) => {
          if (state.data) {
            onSuccess?.(state.data as QueryMap[K]['response']);
          }
          if (state.error) {
            onError?.(state.error);
          }
        });

        this.stateManager.incrementSubscriptionCount(hashedKey);
        if (this.stateManager.getSubscriptionCount(hashedKey) === 1) {
          const unsubscribe = this.coreSdk.on(key, (updatedData) => {
            this.stateManager.updateQueryState(hashedKey, {
              status: 'success',
              data: updatedData,
            });
          });
          this.stateManager.updateQueryState(hashedKey, { unsubscribe });
        }
      }

      onSuccess?.(data);
      const state = this.stateManager.getQueryState(hashedKey);
      return {
        data: state.data as QueryMap[K]['response'] | undefined,
        error: undefined,
        status: state.status,
        isLoading: state.status === 'loading',
        isError: false,
        isSuccess: true,
        refetch: () => this.query(key, queryOptions),
        unsubscribe: subscribe ? () => this.unsubscribe(hashedKey) : undefined,
      };
    } catch (error) {
      logger.error(`Query (${key}) error:`, error);
      this.stateManager.updateQueryState(hashedKey, {
        status: 'error',
        error: error as Error,
      });

      onError?.(error as Error);

      return {
        data: undefined,
        error: error as Error,
        status: 'error',
        isLoading: false,
        isError: true,
        isSuccess: false,
        refetch: () => this.query(key, queryOptions),
        unsubscribe: subscribe ? () => this.unsubscribe(hashedKey) : undefined,
      };
    }
  }

  private async generateKeyWithHash<K extends QueryKey>(
    key: K,
    options?: QueryOptions<K>,
  ): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(options || {}));
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
    return `${key}_${hashHex}`;
  }

  /**
   * Executes a mutation against the host application. Mutations trigger host-side state changes or HTTP requests.
   *
   * @param key - The mutation key identifying the resource (e.g. 'host.update', 'host.delete')
   * @param options - Configuration for the mutation
   * @param options.params - Request parameters (headers, query, body)
   * @param options.timeoutMs - Custom timeout in milliseconds
   * @param options.onSuccess - Callback when mutation succeeds
   * @param options.onError - Callback when mutation fails
   *
   * @example
   * ```typescript
   * // Mutation with key
   * const response = await client.mutate('host.update', {
   *   params: { id: 1, name: 'New Name' },
   *   onSuccess: (data) => console.log('Update successful:', data),
   *   onError: (error) => console.error('Update failed:', error),
   * });
   * ```
   */
  async mutate<K extends MutationKey>(
    key: K,
    mutationOptions?: MutationOptions<K>,
  ): Promise<MutationMap[K]['response']> {
    const { request, operation } = this.resolveOperation(key as string);
    const { onSuccess, onError, params, timeoutMs } = mutationOptions || {};
    logger.debug(`Mutation (${key}) initiated with params:`, params, `timeoutMs: ${timeoutMs}`);

    try {
      const data = (await request(operation, params)) as MutationMap[K]['response'];
      logger.info(`Mutation (${key}) success:`, data);
      onSuccess?.(data);
      return data;
    } catch (error) {
      logger.error(`Mutation (${key}) error:`, error);
      onError?.(error as Error);
      throw error;
    }
  }

  private async _fetch(input: globalThis.Request): Promise<Response> {
    const url = new URL(input.url);
    const path = url.pathname + url.search + url.hash;

    const method = input.method || 'GET';
    const headers = input?.headers ? Object.fromEntries(new Headers(input.headers)) : undefined;
    const body = await input.arrayBuffer();

    const genericRequest: GenericRequestData = {
      body: body.byteLength > 0 ? body : undefined,
      headers,
      method,
      path,
      requiresAuth: true,
    };

    return this.coreSdk
      .request<GenericRequestData, GenericResponseData>('host.request', genericRequest)
      .then((response) => {
        const init: ResponseInit = {
          headers: response.headers || {},
          status: response.status || 200,
          statusText: response.statusText || '',
        };
        return new Response(response.body, init);
      });
  }

  async logout(): Promise<void> {
    await this.coreSdk.request('host.logout');
  }

  async openProfile(): Promise<void> {
    await this.coreSdk.request('host.openProfile');
  }

  async navigateToExternalUrl(url: string, newTab: boolean = true): Promise<void> {
    if (!url) {
      throw new Error('URL is required for navigateToExternalUrl');
    }

    const payload: ExternalUrlPayload = { url, newTab };
    await this.coreSdk.request('host.navigateTo.externalUrl', payload);
  }

  private async setNavbarItems(navbarItems?: NavbarItemsProps): Promise<void> {
    if (navbarItems) {
      await this.coreSdk.request('host.setNavbarItems', navbarItems);
    }
  }

  private unsubscribe(key: string): void {
    const state = this.stateManager.getQueryState(key);
    this.stateManager.decrementSubscriptionCount(key);
    if (this.stateManager.getSubscriptionCount(key) === 0) {
      state.unsubscribe?.();
      this.stateManager.removeQuery(key);
    }
  }

  /**
   * Cleans up all active subscriptions and resources.
   * Call this when the SDK instance is no longer needed.
   */
  destroy(): void {
    // Clean up all queries
    const keys = this.stateManager.getQueryKeys();
    for (const key of keys) {
      this.unsubscribe(key);
    }
  }
}
