/**
 * Converts a JavaScript object into a JSON ArrayBuffer.
 * @param data The object to serialize and convert.
 * @returns {ArrayBuffer} The serialized JSON as an ArrayBuffer.
 */
export function objectToJsonArrayBuffer(data: object): ArrayBuffer {
  const jsonString = JSON.stringify(data); // Serialize the object to JSON
  return new Uint8Array(new TextEncoder().encode(jsonString)).buffer as ArrayBuffer;
}
