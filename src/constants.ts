export const BANGLA_MONTHS = [
  'বৈশাখ',
  'জ্যৈষ্ঠ',
  'আষাঢ়',
  'শ্রাবণ',
  'ভাদ্র',
  'আশ্বিন',
  'কার্তিক',
  'অগ্রহায়ণ',
  'পৌষ',
  'মাঘ',
  'ফাল্গুন',
  'চৈত্র'
] as const;

export const WEEK_DAYS = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার'
] as const;

export const BANGLA_SEASONS = [
  'গ্রীষ্ম',
  'বর্ষা',
  'শরৎ',
  'হেমন্ত',
  'শীত',
  'বসন্ত'
] as const;

export const TOTAL_MONTH_DAYS = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30] as const;

export const BANGLA_DIGITS: Record<string, string> = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

export const DEFAULT_FORMAT = 'DD MM, YY';
export const BANGLA_YEAR_OFFSET = 593;
export const BANGLA_NEW_YEAR_MONTH = 3; // April (0-indexed)
export const BANGLA_NEW_YEAR_DATE = 14;
export const EPOCH_DATE = 13; // 13th April 