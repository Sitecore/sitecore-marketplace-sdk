import { describe, test, beforeEach, expect } from 'vitest';
import { GenericResponseData } from '../shared-types';

describe('GenericResponseData', () => {
  const status = 200;
  const statusText = 'OK';
  const headers = { 'Content-Type': 'application/json' };
  const body = new TextEncoder().encode(JSON.stringify({ key: 'value' })).buffer as ArrayBuffer;

  let response: GenericResponseData;

  beforeEach(() => {
    response = new GenericResponseData(status, statusText, headers, body);
  });

  test('should create an instance with correct properties', () => {
    expect(response.status).toBe(status);
    expect(response.statusText).toBe(statusText);
    expect(response.headers).toEqual(headers);
    expect(response.body).toEqual(body);
  });

  test('json() should parse body as JSON', async () => {
    const json = await response.json();
    expect(json).toEqual({ key: 'value' });
  });

  test('text() should parse body as string', async () => {
    const text = await response.text();
    expect(text).toBe(JSON.stringify({ key: 'value' }));
  });
});
