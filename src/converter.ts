import { BanglaDate } from './types';
import {
    BANGLA_MONTHS,
    WEEK_DAYS,
    BANGLA_SEASONS,
    TOTAL_MONTH_DAYS,
    BANGLA_YEAR_OFFSET,
    BANGLA_NEW_YEAR_MONTH,
    BANGLA_NEW_YEAR_DATE,
    EPOCH_DATE
} from './constants';
import { isLeapYear, dateDiffInDays, adjustDateForBangla } from './utils';

/**
 * Convert a Gregorian date to Bengali calendar date
 */
export function convertToBanglaDate(givenDate: Date): BanglaDate {
    const adjustedDate = adjustDateForBangla(givenDate);

    // Extract Gregorian date components
    const gregDate = adjustedDate.getDate();
    const gregMonth = adjustedDate.getMonth();
    const gregYear = adjustedDate.getFullYear();
    const gregDay = adjustedDate.getDay();

    // Create a copy of month days array to handle leap year adjustments
    const monthDays = [...TOTAL_MONTH_DAYS];

    // If the given Gregorian Year is a Leap Year, then the Falgun month will be 31 days
    if (isLeapYear(gregYear)) {
        monthDays[10] = 31; // Falgun (index 10)
    }

    // If the given date is before 14th April of current Gregorian Year
    let banglaYearStart = gregYear;
    if (gregMonth < BANGLA_NEW_YEAR_MONTH ||
        (gregMonth === BANGLA_NEW_YEAR_MONTH && gregDate < BANGLA_NEW_YEAR_DATE)) {
        banglaYearStart = gregYear - 1;
    }

    // Calculate Bengali year
    const banglaYear = banglaYearStart - BANGLA_YEAR_OFFSET;

    // Create epoch date (13th April of the Bengali year start)
    const epoch = new Date(banglaYearStart, BANGLA_NEW_YEAR_MONTH, EPOCH_DATE);

    // Calculate days remaining from epoch
    let dayRemaining = dateDiffInDays(epoch, adjustedDate);

    // Find Bengali month and date
    let banglaMonthIndex = 0;

    for (let i = 0; i < BANGLA_MONTHS.length; i++) {
        if (dayRemaining <= monthDays[i]) {
            banglaMonthIndex = i;
            break;
        }
        dayRemaining -= monthDays[i];
    }

    const banglaDate = dayRemaining;
    const banglaMonth = BANGLA_MONTHS[banglaMonthIndex];
    const banglaDay = WEEK_DAYS[gregDay];

    // Calculate season (every two consecutive months indicate one season)
    const banglaSeason = BANGLA_SEASONS[Math.floor(banglaMonthIndex / 2)];

    return {
        year: banglaYear,
        date: banglaDate,
        month: banglaMonth,
        day: banglaDay,
        season: banglaSeason
    };
} 