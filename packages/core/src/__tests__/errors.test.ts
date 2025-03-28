import { CoreError, ErrorCode } from '../errors';
import { describe, expect, it } from 'vitest';

describe('CoreError', () => {
  it('creates a timeout error', () => {
    const error = CoreError.timeout();
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.TIMEOUT);
    expect(error.message).toBe('Request timed out');
  });

  it('creates a handshake failed error', () => {
    const error = CoreError.handshakeFailed();
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.HANDSHAKE_FAILED);
    expect(error.message).toBe('Failed to establish connection');
  });

  it('creates an invalid origin error', () => {
    const origin = 'http://invalid.origin';
    const error = CoreError.invalidOrigin(origin);
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.INVALID_ORIGIN);
    expect(error.message).toBe(`Invalid message origin: ${origin}`);
    expect(error.details).toEqual({ origin });
  });

  it('creates a not initialized error', () => {
    const error = CoreError.notInitialized();
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.NOT_INITIALIZED);
    expect(error.message).toBe('SDK not properly initialized');
  });

  it('creates an already initialized error', () => {
    const error = CoreError.alreadyInitialized();
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.ALREADY_INITIALIZED);
    expect(error.message).toBe('SDK is already initialized');
  });

  it('creates a method not found error', () => {
    const method = 'getUserInfo';
    const error = CoreError.methodNotFound(method);
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.METHOD_NOT_FOUND);
    expect(error.message).toBe(`Method not found: ${method}`);
    expect(error.details).toEqual({ method });
  });

  it('creates an execution error', () => {
    const underlyingError = new Error('Underlying error');
    const error = CoreError.executionError(underlyingError);
    expect(error).toBeInstanceOf(CoreError);
    expect(error.code).toBe(ErrorCode.EXECUTION_ERROR);
    expect(error.message).toBe('Method execution failed');
    expect(error.details).toBe(underlyingError);
  });
});