import { useState, useEffect } from 'react';
import { BanglaDate, BongabdoOptions } from './types';
import { bongabdo, getBanglaDate } from './index';

/**
 * React hook for Bengali date conversion
 */
export function useBongabdo(
  dateInput?: Date | string,
  options: BongabdoOptions = {}
): {
  formatted: string;
  raw: BanglaDate;
  isLoading: boolean;
  error: Error | null;
} {
  const [formatted, setFormatted] = useState<string>('');
  const [raw, setRaw] = useState<BanglaDate>({
    year: 0,
    date: 0,
    month: '',
    day: '',
    season: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      const formattedDate = bongabdo(dateInput, options);
      const rawDate = getBanglaDate(dateInput);
      
      setFormatted(formattedDate);
      setRaw(rawDate);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [dateInput, JSON.stringify(options)]);

  return { formatted, raw, isLoading, error };
}

/**
 * React hook for real-time Bengali date updates
 */
export function useBongabdoLive(
  options: BongabdoOptions = {}
): {
  formatted: string;
  raw: BanglaDate;
  isLoading: boolean;
  error: Error | null;
} {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);

  return useBongabdo(currentDate, options);
} 