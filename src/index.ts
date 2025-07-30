import { BanglaDate, BongabdoOptions } from './types';
import { convertToBanglaDate } from './converter';
import { formatBanglaDate } from './formatter';
import { parseDateInput } from './utils';

/**
 * Main function to convert a Gregorian date to Bengali calendar format
 */
export function bongabdo(dateInput?: Date | string, options: BongabdoOptions = {}): string {
  const date = parseDateInput(dateInput);
  const banglaDate = convertToBanglaDate(date);
  return formatBanglaDate(banglaDate, options);
}

/**
 * Get raw Bengali date object without formatting
 */
export function getBanglaDate(dateInput?: Date | string): BanglaDate {
  const date = parseDateInput(dateInput);
  return convertToBanglaDate(date);
}

/**
 * Format an existing Bengali date object
 */
export function formatBanglaDateOnly(banglaDate: BanglaDate, options: BongabdoOptions = {}): string {
  return formatBanglaDate(banglaDate, options);
}

// Export types
export type { BanglaDate, BongabdoOptions };

// Export individual functions for advanced usage
export { convertToBanglaDate } from './converter';
export { formatBanglaDate } from './formatter';
export { parseDateInput, convertToBanglaDigits, isLeapYear } from './utils';

// Export constants
export {
  BANGLA_MONTHS,
  WEEK_DAYS,
  BANGLA_SEASONS,
  TOTAL_MONTH_DAYS,
  BANGLA_DIGITS,
  DEFAULT_FORMAT
} from './constants'; 