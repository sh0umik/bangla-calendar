import { bongabdo, getBanglaDate, convertToBanglaDate } from '../index';

describe('bongabdo', () => {
  describe('Basic functionality', () => {
    test('should convert current date to Bengali format', () => {
      const result = bongabdo();
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    test('should convert specific date to Bengali format', () => {
      const result = bongabdo('2024-01-15');
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    test('should handle Date object input', () => {
      const date = new Date('2024-01-15');
      const result = bongabdo(date);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });

  describe('Format options', () => {
    test('should use custom format', () => {
      const result = bongabdo('2024-01-15', { format: 'DD-MM-YY' });
      expect(result).toContain('-');
      expect(result).toContain('মাঘ');
    });

    test('should show season when requested', () => {
      const result = bongabdo('2024-01-15', { 
        showSeason: true, 
        format: 'DD MM, YY (SS)' 
      });
      expect(result).toContain('(');
      expect(result).toContain(')');
    });

    test('should show week day when requested', () => {
      const result = bongabdo('2024-01-15', { 
        showWeekDays: true, 
        format: 'DD MM, YY (WW)' 
      });
      expect(result).toContain('(');
      expect(result).toContain(')');
    });

    test('should not convert to Bengali digits when disabled', () => {
      const result = bongabdo('2024-01-15', { convertToBanglaDigits: false });
      expect(result).toMatch(/[0-9]/);
    });
  });

  describe('getBanglaDate', () => {
    test('should return raw Bengali date object', () => {
      const result = getBanglaDate('2024-01-15');
      expect(result).toHaveProperty('year');
      expect(result).toHaveProperty('date');
      expect(result).toHaveProperty('month');
      expect(result).toHaveProperty('day');
      expect(result).toHaveProperty('season');
      expect(typeof result.year).toBe('number');
      expect(typeof result.date).toBe('number');
      expect(typeof result.month).toBe('string');
      expect(typeof result.day).toBe('string');
      expect(typeof result.season).toBe('string');
    });
  });

  describe('convertToBanglaDate', () => {
    test('should handle leap year correctly', () => {
      const leapYearDate = new Date('2024-02-29');
      const result = convertToBanglaDate(leapYearDate);
      expect(result).toBeTruthy();
      expect(result.year).toBeGreaterThan(0);
    });

    test('should handle date before Bengali new year', () => {
      const beforeNewYear = new Date('2024-04-10');
      const result = convertToBanglaDate(beforeNewYear);
      expect(result).toBeTruthy();
    });

    test('should handle date after Bengali new year', () => {
      const afterNewYear = new Date('2024-04-15');
      const result = convertToBanglaDate(afterNewYear);
      expect(result).toBeTruthy();
    });
  });

  describe('Edge cases', () => {
    test('should handle invalid date string', () => {
      expect(() => bongabdo('invalid-date')).toThrow();
    });

    test('should handle empty string input', () => {
      expect(() => bongabdo('')).toThrow();
    });

    test('should handle null/undefined input gracefully', () => {
      const result = bongabdo();
      expect(result).toBeTruthy();
    });
  });

  describe('Known date conversions', () => {
    test('should convert Pahela Boishakh correctly', () => {
      // 14th April 2024 should be 1st Boishakh 1431
      const result = getBanglaDate('2024-04-14');
      expect(result.month).toBe('বৈশাখ');
      expect(result.date).toBe(1);
    });

    test('should convert last day of year correctly', () => {
      // 13th April 2024 should be last day of previous Bengali year
      const result = getBanglaDate('2024-04-13');
      expect(result.month).toBe('চৈত্র');
    });
  });
}); 