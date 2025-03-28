import { describe, it, expect } from 'vitest';
import { objectToJsonArrayBuffer } from '../utils';

describe('objectToJsonArrayBuffer', () => {
    it('should convert an object to a JSON ArrayBuffer', () => {
        const data = { key: 'value' };
        const result = objectToJsonArrayBuffer(data);
        const jsonString = JSON.stringify(data);
        const expectedBuffer = new Uint8Array(new TextEncoder().encode(jsonString)).buffer;

        expect(result).toEqual(expectedBuffer);
    });

    it('should handle empty objects', () => {
        const data = {};
        const result = objectToJsonArrayBuffer(data);
        const jsonString = JSON.stringify(data);
        const expectedBuffer = new Uint8Array(new TextEncoder().encode(jsonString)).buffer;

        expect(result).toEqual(expectedBuffer);
    });
});