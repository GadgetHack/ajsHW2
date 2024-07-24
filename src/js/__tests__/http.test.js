import { httpGet, httpPost } from '../http';

describe('http', () => {
  test('httpGet should throw error', () => {
    expect(() => httpGet('http://example.com')).toThrow('http://example.com');
  });

  test('httpPost should throw error', () => {
    expect(() => httpPost('http://example.com')).toThrow('http://example.com');
  });
});
