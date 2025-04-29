import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ClientSDK } from '../client';
import {CoreSDK, GenericRequestData} from '@sitecore-marketplace-sdk/core';
import { StateManager } from '../state';
import { logger } from '../logger';

vi.mock('@sitecore-marketplace-sdk/core');
vi.mock('../state');
vi.mock('../logger');

describe('ClientSDK', () => {
  let client: ClientSDK;
  const key = 'host.state';
  const config = {
    origin: 'https://host.app',
    target: window.parent,
    targetOrigin: 'https://target.app',
    selfOrigin: 'https://self.app'
  };

  const mockData = {
    userId: 'user1',
    userName: 'User One',
  };

  beforeEach(async () => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize ClientSDK instance', async () => {
    let consoleSpyInit: ReturnType<typeof vi.spyOn>;
    consoleSpyInit = vi.spyOn(ClientSDK.prototype, 'initialize').mockImplementation(async () => {});

    client = await ClientSDK.init(config);
    expect(client).toBeInstanceOf(ClientSDK);
    expect(consoleSpyInit).toHaveBeenCalled();
  });

  it('should log error on fail initialization', async () => {
    const mockError = new Error('failed initialization');
    CoreSDK.prototype.connect = vi.fn().mockRejectedValue(mockError);

    await expect(ClientSDK.init(config)).rejects.toThrow('failed initialization');
    expect(logger.error).toHaveBeenCalledWith('Client handshake failed:', mockError);
  });

  it('should log info on successful initialization', async () => {
    client = await ClientSDK.init(config);
    expect(logger.info).toHaveBeenCalledWith('Client handshake successful.');
  });

  it('should register module when have module in config on initialization', async () => {
    const clientConfig = {
      origin: 'https://host.app',
      target: window.parent,
      targetOrigin: 'https://target.app',
      selfOrigin: 'https://self.app',
      modules : [{ namespace: 'testModule', invokeOperation: vi.fn() }]
    };

    client = await ClientSDK.init(clientConfig);
    expect(client['modules'].has('testModule')).toBe(true);
  });

  it('should register a module correctly', () => {
    const mockModule = { namespace: 'testModule', invokeOperation: vi.fn() };
    client['registerModule'](mockModule);

    expect(client['modules'].has('testModule')).toBe(true);
    expect(client['modules'].get('testModule')).toBe(mockModule);
  });

  it('should check if a module is registered', () => {
    const mockModule = { namespace: 'testModule', invokeOperation: vi.fn() };
    client['registerModule'](mockModule);

    expect(client['hasModule']('testModule')).toBe(true);
    expect(client['hasModule']('nonExistentModule')).toBe(false);
  });

  it('should return available modules', async () => {
    client = await ClientSDK.init(config);
    const mockModule1 = { namespace: 'module1', invokeOperation: vi.fn() };
    const mockModule2 = { namespace: 'module2', invokeOperation: vi.fn() };
    client['registerModule'](mockModule1);
    client['registerModule'](mockModule2);

    expect(client['availableModules']()).toEqual(['module1', 'module2']);
  });

  it('should resolve core operation', () => {
    const mockModule = { namespace: 'host', invokeOperation: vi.fn() };
    client['registerModule'](mockModule);
    const result = client['resolveOperation']('host.operation');
    expect(result.operation).toBe('operation');
    expect(result.request).toBeInstanceOf(Function);
  });

  it('should resolve module operation', () => {
    const mockModule = { namespace: 'testModule', invokeOperation: vi.fn() };
    client['registerModule'](mockModule);

    const result = client['resolveOperation']('testModule.operation');
    expect(result.operation).toBe('operation');
  });

  it('should call registerHandlers if config.events is defined', async () => {
    const clientConfig = {
      ...config,
      events: { onPageContextUpdate: vi.fn() }
    };
    const registerHandlersSpy = vi.spyOn(ClientSDK.prototype as any, 'registerHandlers');
    client = await ClientSDK.init(clientConfig);

    expect(registerHandlersSpy).toHaveBeenCalled();
  });

  it('should not call registerHandlers if config.events is not defined', async () => {
    const registerHandlersSpy = vi.spyOn(ClientSDK.prototype as any, 'registerHandlers');
    client = await ClientSDK.init(config);

    expect(registerHandlersSpy).not.toHaveBeenCalled();
  });

  it('should register pages.context event correctly', async () => {
    const payload = { some: 'data' };
    const clientConfig = {
      ...config,
      events: { onPageContextUpdate: vi.fn() }
    };
    (CoreSDK as any).mockImplementation(() => ({
      connect: vi.fn(),
      initialize: vi.fn(),
      on: vi.fn().mockImplementation((event: string, handler: any) => {
        if (event === 'pages.context') {
          handler(payload);
        }
      }),
    }));

    await ClientSDK.init(clientConfig);

    expect(logger.debug).toHaveBeenCalledWith('Received pages.context request:', payload);
    expect(clientConfig.events.onPageContextUpdate).toHaveBeenCalled();
    expect(logger.debug).toHaveBeenCalledWith('Processed pages.context request.');
  });

  it('should throw an error if onPageContextUpdate event listener is not set', async () => {
    const payload = { some: 'data' };
    const clientConfig = {
      ...config,
      events: { onPageContextUpdate: undefined },
    };
    (CoreSDK as any).mockImplementation(() => ({
      connect: vi.fn(),
      initialize: vi.fn(),
      on: vi.fn().mockImplementation((event: string, handler: any) => {
        if (event === 'pages.context') {
          handler(payload);
        }
      }),
    }));

    await ClientSDK.init(clientConfig);

    expect(logger.debug).toHaveBeenCalledWith('Received pages.context request:', payload);
    expect(logger.debug).toHaveBeenCalledWith('onPageContextUpdate event listener is not set.');
  });

  it('should generate unique keys for different query options', async () => {
    const key = 'host.user';
    const options1 = { subscribe: true };
    const options2 = { subscribe: false };

    const hashedKey1 = await client['generateKeyWithHash'](key, options1);
    const hashedKey2 = await client['generateKeyWithHash'](key, options2);

    expect(hashedKey1).not.toEqual(hashedKey2);
  });

  it('should update query state with unique keys', async () => {
    const key = 'host.user';
    const options = { subscribe: true };
    const hashedKey = await client['generateKeyWithHash'](key, options);

    await client.query(key, options);

    expect(StateManager.prototype.updateQueryState).toHaveBeenCalledWith(hashedKey, {
      status: 'loading',
    });
  });

  it('should handle query success with unique keys', async () => {
    client = await ClientSDK.init(config);
    const key = 'host.request';
    const options = { subscribe: true, params: {
        path: '/api/resource',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        query: { id: '123' },
        requiresAuth: true
      }  };
    const hashedKey = await client['generateKeyWithHash'](key, options);
    const responseData = { id: 1, name: 'User' };

    (CoreSDK.prototype.request as vi.Mock).mockResolvedValue(responseData);
    (StateManager.prototype.getQueryState as vi.Mock).mockReturnValue({
      status: 'success',
      data: responseData,
    });

    const result = await client.query(key, options);

    expect(StateManager.prototype.updateQueryState).toHaveBeenCalledWith(hashedKey, {
      status: 'success',
      data: responseData,
    });
    expect(StateManager.prototype.getQueryState).toHaveBeenCalledWith(hashedKey);
    expect(result.data).toEqual(responseData);
  });

  it('should handle query error with correct state update and logging', async () => {
    const key = 'host.request';
    const options = { subscribe: true };
    const mockError = new Error('Query failed');
    CoreSDK.prototype.request = vi.fn().mockRejectedValue(mockError);
    client = await ClientSDK.init(config);

    const result = await client.query(key, options);

    expect(logger.error).toHaveBeenCalledWith(`Query (${key}) error:`, mockError);
    expect(StateManager.prototype.updateQueryState).toHaveBeenCalledWith(expect.any(String), {
      status: 'error',
      error: mockError,
    });
    expect(result).toMatchObject({
      data: undefined,
      error: mockError,
      status: 'error',
      isLoading: false,
      isError: true,
      isSuccess: false,
      refetch: expect.any(Function),
      unsubscribe: expect.any(Function),
    });
  });

  it('should handle query success', async () => {
    StateManager.prototype.getQueryState = vi
        .fn()
        .mockReturnValue({ status: 'idle', subscriptionCount: 0, data: mockData });
    CoreSDK.prototype.request = vi.fn().mockReturnValue(mockData);
    client = await ClientSDK.init(config);

    const result = await client.query(key);

    expect(result.data).toEqual(mockData);
    expect(result.isSuccess).toBe(true);
    expect(logger.info).toHaveBeenCalledWith(`Query (${key}) success:`, mockData);
  });

  it('should handle query error', async () => {
    CoreSDK.prototype.request = vi.fn().mockRejectedValue(new Error('Query failed'));
    client = await ClientSDK.init(config);
    const result = await client.query(key);

    expect(result.data).toEqual(undefined);
    expect(result.isError).toBe(true);
    expect(logger.error).toHaveBeenCalled();
  });

  it('should handle pages.reloadCanvas mutation successfully', async () => {
    // Mock the CoreSDK request method
    CoreSDK.prototype.request = vi.fn().mockResolvedValue(undefined);
    client = await ClientSDK.init(config);

    // Test mutation of pages.reloadCanvas
    const mutationKey = 'pages.reloadCanvas';
    const onSuccessMock = vi.fn();
    const onErrorMock = vi.fn();

    await client.mutate(mutationKey, {
      onSuccess: onSuccessMock,
      onError: onErrorMock
    });

    // Verify the request was made with correct endpoint and parameters
    expect(CoreSDK.prototype.request).toHaveBeenCalledWith('pages.reloadCanvas', undefined);
    expect(logger.info).toHaveBeenCalledWith(`Mutation (${mutationKey}) success:`, undefined);
    expect(onSuccessMock).toHaveBeenCalledWith(undefined);
    expect(onErrorMock).not.toHaveBeenCalled();
  });

  it('should handle pages.reloadCanvas mutation error', async () => {
    // Mock the CoreSDK request method to throw an error
    const mockError = new Error('Mutation failed');
    CoreSDK.prototype.request = vi.fn().mockRejectedValue(mockError);
    client = await ClientSDK.init(config);

    // Test mutation of pages.reloadCanvas with error
    const mutationKey = 'pages.reloadCanvas';
    const onSuccessMock = vi.fn();
    const onErrorMock = vi.fn();

    await expect(client.mutate(mutationKey, {
      onSuccess: onSuccessMock,
      onError: onErrorMock
    })).rejects.toThrow(mockError);

    // Verify error handling
    expect(logger.error).toHaveBeenCalledWith(`Mutation (${mutationKey}) error:`, mockError);
    expect(onSuccessMock).not.toHaveBeenCalled();
    expect(onErrorMock).toHaveBeenCalledWith(mockError);
  });

  it('should clean up all queries on destroy', () => {
    StateManager.prototype.getQueryKeys = vi.fn().mockReturnValue(['query1', 'query2']);
    const clientSDK = new ClientSDK(config);
    const unsubscribeSpy = vi.spyOn(clientSDK as any, 'unsubscribe');

    clientSDK.destroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
    expect(unsubscribeSpy).toHaveBeenCalledWith('query1');
    expect(unsubscribeSpy).toHaveBeenCalledWith('query2');
  });

  it('should call host.navigateTo.externalUrl with correct parameters', async () => {
    // Mock the CoreSDK request method
    CoreSDK.prototype.request = vi.fn().mockResolvedValue(undefined);
    client = await ClientSDK.init(config);

    // Test with provided URL and default newTab value
    const url = 'https://example.com';
    await client.navigateToExternalUrl(url);

    // Verify the request was made with correct endpoint and parameters
    expect(CoreSDK.prototype.request).toHaveBeenCalledWith('host.navigateTo.externalUrl', {
      url,
      newTab: true,
    });
  });

  it('should call host.navigateTo.externalUrl with correct parameters', async () => {
    // Mock the CoreSDK request method
    CoreSDK.prototype.request = vi.fn().mockResolvedValue(undefined);
    client = await ClientSDK.init(config);

    // Test with provided URL and default newTab value
    const url = 'https://example.com';
    await client.navigateToExternalUrl(url);

    // Verify the request was made with correct endpoint and parameters
    expect(CoreSDK.prototype.request).toHaveBeenCalledWith('host.navigateTo.externalUrl', {
      url,
      newTab: true,
    });

    // Test with provided URL and newTab set to false
    await client.navigateToExternalUrl(url, false);

    // Verify the request was made with correct endpoint and parameters
    expect(CoreSDK.prototype.request).toHaveBeenCalledWith('host.navigateTo.externalUrl', {
      url,
      newTab: false,
    });

    // Test with missing URL
    await expect(client.navigateToExternalUrl('')).rejects.toThrow('URL is required for navigateToExternalUrl');
  });

  it('should unsubscribe correctly', async () => {
    const key = 'host.user';
    const options = { subscribe: true };
    const hashedKey = 'host.user_12345';
    StateManager.prototype.getQueryState = vi.fn().mockReturnValue({
      unsubscribe: vi.fn(),
      subscriptionCount: 1,
    });
    StateManager.prototype.getSubscriptionCount = vi.fn().mockReturnValue(0);
    StateManager.prototype.decrementSubscriptionCount = vi.fn();
    StateManager.prototype.removeQuery = vi.fn();

    client = await ClientSDK.init(config);
    client['unsubscribe'](hashedKey);

    expect(StateManager.prototype.decrementSubscriptionCount).toHaveBeenCalledWith(hashedKey);
    expect(StateManager.prototype.removeQuery).toHaveBeenCalledWith(hashedKey);
  });
});