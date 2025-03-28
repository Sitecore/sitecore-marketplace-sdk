import { CoreSDK } from '../index';
import { describe, test, beforeEach, afterEach, expect, vi, Mock } from 'vitest';
import { source } from './shared';

describe('CoreSDK', () => {
  const mockTarget = {
    postMessage: vi.fn(),
  } as unknown as Window;

  const mockOrigin = 'https://trusted-origin.com';
  let sdk: CoreSDK;

  beforeEach(() => {
    sdk = new CoreSDK({
      target: mockTarget,
      targetOrigin: mockOrigin,
      selfOrigin: mockOrigin,
    });
  });

  afterEach(async () => {
    await sdk.destroy();
    vi.clearAllMocks(); // Added cleanup for mocks
  });

  const simulateResponse = async (data: any): Promise<void> => {
    // Get the id from the last message sent via mockTarget
    const calls = (mockTarget.postMessage as Mock).mock.calls;
    // If a message was sent, use its id; otherwise fallback to data.id.
    const sentMessageId = calls.length > 0 ? calls[calls.length - 1][0].id : data.id;
    const event = new MessageEvent('message', {
      data: {
        ...data,
        // Use the id from the last sent message to simulate a matching response
        id: sentMessageId,
        source: source,
      },
      origin: mockOrigin,
    });
    window.dispatchEvent(event);
    // Small delay to allow event processing
    await new Promise((resolve) => setTimeout(resolve, 0));
  };

  test('initializes successfully', async () => {
    sdk.initialize({
      type: 'host',
      version: '1.0.0',
      targetOrigin: mockOrigin,
      selfOrigin: mockOrigin,
    });

    const connectPromise = sdk.connect();

    await simulateResponse({
      type: 'handshake',
      handshakeType: 'response',
      sessionId: 'test-session',
      timestamp: Date.now(),
    });

    await expect(connectPromise).resolves.toBeUndefined();
  });

  test('makes requests', async () => {
    sdk.initialize({
      type: 'host',
      version: '1.0.0',
      targetOrigin: mockOrigin,
      selfOrigin: mockOrigin,
    });

    const connectPromise = sdk.connect();

    await simulateResponse({
      type: 'handshake',
      handshakeType: 'response',
      sessionId: 'test-session',
      timestamp: Date.now(),
    });

    await connectPromise;

    const requestP: Promise<any> = sdk.request('getData', { id: 1 });
    await simulateResponse({
      type: 'response',
      success: true,
      data: { result: 'success' },
      timestamp: Date.now(),
    });
    await expect(requestP).resolves.toEqual({ result: 'success' });
  });
});
