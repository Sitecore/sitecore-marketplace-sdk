import { describe, it, expect } from 'vitest';
import { QueryOptions, QueryResult, StateQueryResult, MutationOptions } from '../types';
import { QueryKey, MutationKey } from '../sdk-types';

describe('Types', () => {
  it('should create a valid QueryOptions object', () => {
    const queryOptions: QueryOptions<QueryKey> = {
      subscribe: true,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error),
      params: undefined,
      timeoutMs: 1000,
    };

    expect(queryOptions.subscribe).toBe(true);
    expect(queryOptions.timeoutMs).toBe(1000);
  });

  it('should create a valid QueryResult object', () => {
    const queryResult: QueryResult<QueryKey> = {
      data: undefined,
      error: undefined,
      status: 'idle',
      isLoading: false,
      isError: false,
      isSuccess: false,
      refetch: async () => queryResult,
    };

    expect(queryResult.status).toBe('idle');
    expect(queryResult.isLoading).toBe(false);
  });

  it('should create a valid StateQueryResult object', () => {
    const stateQueryResult: StateQueryResult = {
      data: undefined,
      error: undefined,
      status: 'idle',
      isLoading: false,
      isError: false,
      isSuccess: false,
      refetch: async () => stateQueryResult,
    };

    expect(stateQueryResult.status).toBe('idle');
    expect(stateQueryResult.isLoading).toBe(false);
  });

  it('should create a valid MutationOptions object', () => {
    const mutationOptions: MutationOptions<MutationKey> = {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.error(error),
      params: { path: '/some-path', requiresAuth: true },
      timeoutMs: 1000,
    };

    expect(mutationOptions.timeoutMs).toBe(1000);
  });
});