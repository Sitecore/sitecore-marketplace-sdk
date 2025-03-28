import {
  RequestMessage,
  ResponseMessage,
  EventMessage,
  HandshakeMessage,
  CoreSDKConfig,
  IframeMetadata,
  BaseHostSchema,
  SecurityConfig,
  PortalSchema,
  AdditionalData,
} from '../types';
import { ErrorCode } from '../errors';
import { describe, test, beforeEach, afterEach, expect, vi, Mock } from 'vitest';
import { UserInfo } from '../shared-types';

describe('Types', () => {
  test('RequestMessage should have correct properties', () => {
    const requestMessage: RequestMessage = {
      id: '123',
      type: 'request',
      timestamp: Date.now(),
      action: 'getData',
    };
    expect(requestMessage.id).toBe('123');
    expect(requestMessage.type).toBe('request');
    expect(requestMessage.action).toBe('getData');
  });

  test('ResponseMessage should have correct properties', () => {
    const responseMessage: ResponseMessage = {
      id: '123',
      type: 'response',
      timestamp: Date.now(),
      success: true,
      data: { key: 'value' },
      error: {
        code: ErrorCode.UNKNOWN_ERROR,
        message: 'An error occurred',
      },
    };
    expect(responseMessage.id).toBe('123');
    expect(responseMessage.type).toBe('response');
    expect(responseMessage.success).toBe(true);
    expect(responseMessage.data).toEqual({ key: 'value' });
    expect(responseMessage.error?.code).toBe(ErrorCode.UNKNOWN_ERROR);
    expect(responseMessage.error?.message).toBe('An error occurred');
  });

  test('EventMessage should have correct properties', () => {
    const eventMessage: EventMessage = {
      id: '123',
      type: 'event',
      timestamp: Date.now(),
      event: 'testEvent',
      payload: { key: 'value' },
    };
    expect(eventMessage.id).toBe('123');
    expect(eventMessage.type).toBe('event');
    expect(eventMessage.event).toBe('testEvent');
    expect(eventMessage.payload).toEqual({ key: 'value' });
  });

  test('HandshakeMessage should have correct properties', () => {
    const handshakeMessage: HandshakeMessage = {
      id: '123',
      type: 'handshake',
      timestamp: Date.now(),
      handshakeType: 'request',
      sdkType: 'host',
      version: '1.0.0',
    };
    expect(handshakeMessage.id).toBe('123');
    expect(handshakeMessage.type).toBe('handshake');
    expect(handshakeMessage.handshakeType).toBe('request');
    expect(handshakeMessage.sdkType).toBe('host');
    expect(handshakeMessage.version).toBe('1.0.0');
  });

  test('CoreSDKConfig should have correct properties', () => {
    const coreSDKConfig: CoreSDKConfig = {
      target: window,
      targetOrigin: 'https://example.com',
      selfOrigin: 'https://self.com',
      timeout: 5000,
    };
    expect(coreSDKConfig.target).toBe(window);
    expect(coreSDKConfig.targetOrigin).toBe('https://example.com');
    expect(coreSDKConfig.selfOrigin).toBe('https://self.com');
    expect(coreSDKConfig.timeout).toBe(5000);
  });

  test('IframeMetadata should have correct properties', () => {
    const iframeMetadata: IframeMetadata = {
      width: '100%',
      height: '600px',
      sandbox: 'allow-scripts',
    };
    expect(iframeMetadata.width).toBe('100%');
    expect(iframeMetadata.height).toBe('600px');
    expect(iframeMetadata.sandbox).toBe('allow-scripts');
  });

  test('BaseHostSchema should have correct properties and methods', async () => {
    const baseHostSchema: BaseHostSchema = {
      version: '1.0',
      iframeMetadata: {
        width: '100%',
        height: '600px',
        sandbox: 'allow-scripts',
      },
      methods: {
        getUserInfo: async () => ({ id: '1', name: 'John Doe', email: 'john.doe@example.com' }),
      },
    };
    expect(baseHostSchema.version).toBe('1.0');
    expect(baseHostSchema.iframeMetadata.width).toBe('100%');
    const userInfo = await baseHostSchema.methods.getUserInfo();
    expect(userInfo.name).toBe('John Doe');
  });

  test('UserInfo should have correct properties', () => {
    const userInfo: UserInfo = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    expect(userInfo.id).toBe('1');
    expect(userInfo.name).toBe('John Doe');
    expect(userInfo.email).toBe('john.doe@example.com');
  });

  test('SecurityConfig should have correct properties', () => {
    const securityConfig: SecurityConfig = {
      trustedOrigins: ['https://example.com'],
      encryptionKey: 'secretKey',
    };
    expect(securityConfig.trustedOrigins).toContain('https://example.com');
    expect(securityConfig.encryptionKey).toBe('secretKey');
  });

  test('PortalSchema should extend BaseHostSchema and have additional methods', async () => {
    const portalSchema: PortalSchema = {
      version: '1.0',
      iframeMetadata: {
        width: '100%',
        height: '600px',
        sandbox: 'allow-scripts',
      },
      methods: {
        getUserInfo: async () => ({ id: '1', name: 'John Doe', email: 'john.doe@example.com' }),
        getAdditionalData: async () => ({ featureFlag: true }),
      },
    };
    expect(portalSchema.version).toBe('1.0');
    const additionalData = await portalSchema.methods.getAdditionalData();
    expect(additionalData.featureFlag).toBe(true);
  });

  test('AdditionalData should have correct properties', () => {
    const additionalData: AdditionalData = {
      featureFlag: true,
      extra: 'value',
    };
    expect(additionalData.featureFlag).toBe(true);
    expect(additionalData.extra).toBe('value');
  });
});
