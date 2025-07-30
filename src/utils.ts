import { BANGLA_DIGITS } from './constants';

/**
 * Check if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

/**
 * Calculate the difference in days between two dates
 */
export function dateDiffInDays(a: Date, b: Date): number {
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
  return Math.floor((utc2 - utc1) / MILLISECONDS_PER_DAY);
}

/**
 * Convert English digits to Bengali digits
 */
export function convertToBanglaDigits(text: string): string {
  return text.replace(/\d/g, (match) => BANGLA_DIGITS[match] || match);
}

/**
 * Parse date input to Date object
 */
export function parseDateInput(dateInput?: Date | string): Date {
  if (dateInput instanceof Date) {
    return new Date(dateInput);
  }
  
  if (typeof dateInput === 'string') {
    const parsed = new Date(dateInput);
    if (isNaN(parsed.getTime())) {
      throw new Error(`Invalid date string: ${dateInput}`);
    }
    return parsed;
  }
  
  return new Date();
}

/**
 * Adjust date for Bengali calendar (subtract 6 hours for sunrise)
 */
export function adjustDateForBangla(date: Date): Date {
  const adjusted = new Date(date);
  adjusted.setHours(adjusted.getHours() - 6);
  return adjusted;
} 