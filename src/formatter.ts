import { BanglaDate, BongabdoOptions, FormatTokens } from './types';
import { DEFAULT_FORMAT } from './constants';
import { convertToBanglaDigits } from './utils';

/**
 * Format a Bengali date according to the specified format
 */
export function formatBanglaDate(banglaDate: BanglaDate, options: BongabdoOptions = {}): string {
  const {
    format = DEFAULT_FORMAT,
    showSeason = false,
    showWeekDays = false,
    convertToBanglaDigits: useBanglaDigits = true
  } = options;
  
  // Create format tokens
  const tokens: FormatTokens = {
    DD: banglaDate.date.toString(),
    MM: banglaDate.month,
    YY: banglaDate.year.toString(),
    WW: banglaDate.day,
    SS: banglaDate.season
  };
  
  let formattedString = format;
  
  // Replace format tokens
  formattedString = formattedString.replace(/DD/g, tokens.DD);
  formattedString = formattedString.replace(/MM/g, tokens.MM);
  formattedString = formattedString.replace(/YY/g, tokens.YY);
  
  // Handle optional tokens
  if (showWeekDays) {
    formattedString = formattedString.replace(/WW/g, tokens.WW);
  } else {
    formattedString = formattedString.replace(/WW/g, '');
  }
  
  if (showSeason) {
    formattedString = formattedString.replace(/SS/g, tokens.SS);
  } else {
    formattedString = formattedString.replace(/SS/g, '');
  }
  
  // Clean up any empty brackets or extra spaces
  formattedString = formattedString
    .replace(/\[\s*\]/g, '') // Remove empty brackets
    .replace(/\(\s*\)/g, '') // Remove empty parentheses
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Convert to Bengali digits if requested
  if (useBanglaDigits) {
    formattedString = convertToBanglaDigits(formattedString);
  }
  
  return formattedString;
} 