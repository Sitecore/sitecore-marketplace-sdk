import { describe, test, beforeEach, afterEach, expect, vi, Mock } from 'vitest';

declare global {
  var __lastMessageId: string;
  var __eventListeners: Array<{
    event: string;
    handler: EventListenerOrEventListenerObject;
  }>;
}

// Initialize event listeners array
global.__eventListeners = [];

// Mock postMessage and message event listener
const mockPostMessage = vi.fn((message) => {
  if (message && typeof message === 'object') {
    global.__lastMessageId = message.id;
  }
});

// Create a simple event system for tests
const mockAddEventListener = vi.fn((event: string, handler: EventListenerOrEventListenerObject) => {
  global.__eventListeners.push({ event, handler });
});

const mockRemoveEventListener = vi.fn(
  (event: string, handler: EventListenerOrEventListenerObject) => {
    global.__eventListeners = global.__eventListeners.filter(
      (listener) => !(listener.event === event && listener.handler === handler),
    );
  },
);

// Helper to dispatch events in tests
global.dispatchEvent = ((event: Event) => {
  if (event instanceof MessageEvent) {
    const { type } = event;
    const handlers = global.__eventListeners
      .filter((listener) => listener.event === type)
      .map((listener) => listener.handler);

    handlers.forEach((handler) => {
      if (typeof handler === 'function') {
        handler(event);
      } else if (handler.handleEvent) {
        handler.handleEvent(event);
      }
    });
  }
}) as typeof window.dispatchEvent;

// Mock the DEFAULT_TIMEOUT constant for faster tests
vi.mock('../post-message', async () => {
  const actual = await vi.importActual<typeof import('../post-message')>('../post-message');
  return {
    ...actual,
    DEFAULT_TIMEOUT: 50, // Set to 50ms for faster tests
  };
});

// Add global helper for tests
global.__lastMessageId = '';

// Setup window mocks
Object.defineProperty(window, 'postMessage', {
  writable: true,
  value: mockPostMessage,
});

Object.defineProperty(window, 'addEventListener', {
  writable: true,
  value: mockAddEventListener,
});

Object.defineProperty(window, 'removeEventListener', {
  writable: true,
  value: mockRemoveEventListener,
});

// Clear all mocks and remove all event listeners before each test
beforeEach(() => {
  global.__lastMessageId = '';
  global.__eventListeners = [];
  vi.clearAllMocks();
});

// Ensure cleanup after each test
afterEach(() => {
  global.__eventListeners = [];
  vi.clearAllMocks();
  global.__lastMessageId = '';
});
