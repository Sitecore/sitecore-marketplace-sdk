/**
 * Enumeration of all possible error codes that can be thrown by the SDK.
 * These codes help identify the type and source of errors for better error handling.
 */
export enum ErrorCode {
  // Communication Errors
  TIMEOUT = 'TIMEOUT',
  CONNECTION_ERROR = 'CONNECTION_ERROR',
  HANDSHAKE_FAILED = 'HANDSHAKE_FAILED',
  INVALID_ORIGIN = 'INVALID_ORIGIN',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',

  // Request/Response Errors
  INVALID_REQUEST = 'INVALID_REQUEST',
  METHOD_NOT_FOUND = 'METHOD_NOT_FOUND',
  EXECUTION_ERROR = 'EXECUTION_ERROR',

  // State/Event Errors
  SUBSCRIPTION_ERROR = 'SUBSCRIPTION_ERROR',
  INVALID_STATE = 'INVALID_STATE',

  // Runtime Errors
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  ALREADY_INITIALIZED = 'ALREADY_INITIALIZED',
  NOT_CONNECTED = 'NOT_CONNECTED',
  INITIALIZATION_ERROR = 'INITIALIZATION_ERROR',

  // Host Specific
  HOST_NOT_READY = 'HOST_NOT_READY',
  TOKEN_ERROR = 'TOKEN_ERROR',

  // Client Specific
  CLIENT_NOT_READY = 'CLIENT_NOT_READY',
  IFRAME_ERROR = 'IFRAME_ERROR',
}

/**
 * Interface for SDK errors that includes an error code and optional details.
 * All errors thrown by the SDK will implement this interface.
 */
export interface SDKError extends Error {
  code: ErrorCode;
  details?: unknown;
}

/**
 * Core error class that implements the SDKError interface.
 * Provides static factory methods for creating common error types.
 *
 * @example
 * ```typescript
 * // Creating a timeout error
 * throw CoreError.timeout();
 *
 * // Creating a method not found error
 * throw CoreError.methodNotFound('getUserInfo');
 * ```
 */
export class CoreError extends Error implements SDKError {
  constructor(
    public code: ErrorCode,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'CoreError';
  }

  /**
   * Creates a timeout error.
   * @param details - Optional details about the timeout
   */
  static timeout(details?: unknown): CoreError {
    return new CoreError(ErrorCode.TIMEOUT, 'Request timed out', details);
  }

  /**
   * Creates a handshake failed error.
   * @param details - Optional details about the failure
   */
  static handshakeFailed(details?: unknown): CoreError {
    return new CoreError(ErrorCode.HANDSHAKE_FAILED, 'Failed to establish connection', details);
  }

  /**
   * Creates an invalid origin error.
   * @param origin - The invalid origin that was detected
   */
  static invalidOrigin(origin: string): CoreError {
    return new CoreError(ErrorCode.INVALID_ORIGIN, `Invalid message origin: ${origin}`, { origin });
  }

  /**
   * Creates a not initialized error.
   */
  static notInitialized(): CoreError {
    return new CoreError(ErrorCode.NOT_INITIALIZED, 'SDK not properly initialized');
  }

  /**
   * Creates an already initialized error.
   */
  static alreadyInitialized(): CoreError {
    return new CoreError(ErrorCode.ALREADY_INITIALIZED, 'SDK is already initialized');
  }

  /**
   * Creates a method not found error.
   * @param method - The name of the method that wasn't found
   */
  static methodNotFound(method: string): CoreError {
    return new CoreError(ErrorCode.METHOD_NOT_FOUND, `Method not found: ${method}`, { method });
  }

  /**
   * Creates an execution error.
   * @param error - The underlying error that caused the execution failure
   */
  static executionError(error: unknown): CoreError {
    return new CoreError(ErrorCode.EXECUTION_ERROR, 'Method execution failed', error);
  }
}
