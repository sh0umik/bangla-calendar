export interface BanglaDate {
  year: number;
  date: number;
  month: string;
  day: string;
  season: string;
}

export interface BongabdoOptions {
  date?: Date | string;
  format?: string;
  showSeason?: boolean;
  showWeekDays?: boolean;
  convertToBanglaDigits?: boolean;
}

export interface FormatTokens {
  DD: string;
  MM: string;
  YY: string;
  WW: string;
  SS: string;
} 