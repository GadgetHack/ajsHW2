import { calcHealth } from '../app';

describe('calcHealth', () => {
  test('should return healthy for health >= 50', () => {
    expect(calcHealth({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(calcHealth({ name: 'Маг', health: 50 })).toBe('healthy');
  });

  test('should return wounded for health between 50 and 15', () => {
    expect(calcHealth({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(calcHealth({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return critical for health < 15', () => {
    expect(calcHealth({ name: 'Маг', health: 10 })).toBe('critical');
    expect(calcHealth({ name: 'Маг', health: 0 })).toBe('critical');
  });
});
