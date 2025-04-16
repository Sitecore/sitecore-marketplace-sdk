import { StateQueryResult, QueryStatus } from './types';

interface QueryState<TData = unknown, TError extends Error = Error> {
  data?: TData;
  error?: TError;
  status: QueryStatus;
  subscriptionCount: number;
  unsubscribe?: () => void;
}

export class StateManager {
  private queryStates: Map<string, QueryState> = new Map();
  private listeners: Map<string, Set<(result: StateQueryResult) => void>> = new Map();

  /**
   * Get or create a query state
   */
  getQueryState<TData = unknown, TError extends Error = Error>(
    key: string,
  ): QueryState<TData, TError> {
    if (!this.queryStates.has(key)) {
      this.queryStates.set(key, {
        status: 'idle',
        subscriptionCount: 0,
      });
    }
    return this.queryStates.get(key) as QueryState<TData, TError>;
  }

  /**
   * Get all active query keys
   */
  getQueryKeys(): string[] {
    return Array.from(this.queryStates.keys());
  }

  /**
   * Update a query's state and notify listeners
   */
  updateQueryState<TData = unknown, TError extends Error = Error>(
    key: string,
    updates: Partial<QueryState<TData, TError>>,
  ): void {
    const state = this.getQueryState<TData, TError>(key);
    const newState = { ...state, ...updates };
    this.queryStates.set(key, newState);

    // Notify listeners
    const queryResult: StateQueryResult<TData, TError> = {
      data: newState.data,
      error: newState.error,
      status: newState.status,
      isLoading: newState.status === 'loading',
      isError: newState.status === 'error',
      isSuccess: newState.status === 'success',
      refetch: async () => {
        // This will be set by the ClientSDK
        throw new Error('Refetch not implemented');
      },
      unsubscribe: newState.unsubscribe,
    };

    this.listeners.get(key)?.forEach((listener) => listener(queryResult));
  }

  /**
   * Subscribe to state changes for a query
   */
  subscribe(key: string, listener: (result: StateQueryResult) => void): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    this.listeners.get(key)!.add(listener);

    // Return unsubscribe function
    return () => {
      const listeners = this.listeners.get(key);
      if (listeners) {
        listeners.delete(listener);
        if (listeners.size === 0) {
          this.listeners.delete(key);
        }
      }
    };
  }

  /**
   * Remove all state and listeners for a query
   */
  removeQuery(key: string): void {
    this.queryStates.delete(key);
    this.listeners.delete(key);
  }

  /**
   * Get current number of subscribers for a query
   */
  getSubscriptionCount(key: string): number {
    return this.getQueryState(key).subscriptionCount;
  }

  /**
   * Increment subscription count for a query
   */
  incrementSubscriptionCount(key: string): void {
    const state = this.getQueryState(key);
    state.subscriptionCount++;
    this.queryStates.set(key, state);
  }

  /**
   * Decrement subscription count for a query
   */
  decrementSubscriptionCount(key: string): void {
    const state = this.getQueryState(key);
    if (state.subscriptionCount > 0) {
      state.subscriptionCount--;
      this.queryStates.set(key, state);
    }
  }
}
