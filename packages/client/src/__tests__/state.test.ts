import { describe, it, expect, vi } from 'vitest';
import { StateManager } from '../state';

describe('state', () => {
  it('should create a new StateManager instance', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
  });

  it('should get a query state', () => {
    const stateManager = new StateManager();
    const queryState = stateManager.getQueryState('test');

    expect(queryState.status).toBe('idle');
    expect(queryState.subscriptionCount).toBe(0);
  });

  it('should update a query state and notify listeners', () => {
    const stateManager = new StateManager();
    const listener = vi.fn();

    stateManager.subscribe('test', listener);
    stateManager.updateQueryState('test', { status: 'loading' });

    expect(listener).toHaveBeenCalledWith(expect.objectContaining({
      status: 'loading'
    }));
  });

  it('should manage subscription count correctly', () => {
    const stateManager = new StateManager();

    stateManager.incrementSubscriptionCount('test');
    expect(stateManager.getSubscriptionCount('test')).toBe(1);

    stateManager.decrementSubscriptionCount('test');
    expect(stateManager.getSubscriptionCount('test')).toBe(0);
  });

  it('should remove query state and listeners', () => {
    const stateManager = new StateManager();
    const listener = vi.fn();
    stateManager.subscribe('test', listener);

    stateManager.removeQuery('test');

    expect(stateManager.getQueryKeys()).not.toContain('test');
  });
});