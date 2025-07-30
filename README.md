# বঙ্গাব্দ (Bongabdo) - Modern Bengali Calendar Library

A modern TypeScript library for converting Gregorian dates to Bengali calendar (বঙ্গাব্দ) format. This is a complete rewrite of the original jQuery plugin in modern TypeScript, making it compatible with any JavaScript/TypeScript project including React, Vue, Angular, and Node.js applications.

## Features

- 🚀 **Modern TypeScript**: Built with TypeScript for better type safety and developer experience
- 📦 **Framework Agnostic**: Works with any JavaScript/TypeScript project
- ⚛️ **React Support**: Includes React hooks for easy integration
- 🎯 **Flexible Formatting**: Customizable date formats with Bengali digits
- 🌍 **Bengali Localization**: Full support for Bengali language and digits
- 📚 **Comprehensive API**: Multiple ways to use the library
- 🧪 **Well Tested**: Comprehensive test coverage
- 📖 **Full Documentation**: Complete API documentation and examples

## Installation

```bash
npm install bongabdo
```

or

```bash
yarn add bongabdo
```

## Quick Start

### Basic Usage

```typescript
import { bongabdo } from 'bongabdo';

// Get today's date in Bengali
const today = bongabdo();
console.log(today); // "১৫ শ্রাবণ, ১৪৩২"

// Convert a specific date
const specificDate = bongabdo('2024-01-15');
console.log(specificDate); // "১ মাঘ, ১৪৩০"
```

### With Custom Format

```typescript
import { bongabdo } from 'bongabdo';

// Custom format with season
const withSeason = bongabdo('2024-01-15', {
  format: 'DD MM, YY (SS)',
  showSeason: true
});
console.log(withSeason); // "১ মাঘ, ১৪৩০ (শীত)"

// Custom format with weekday
const withWeekday = bongabdo('2024-01-15', {
  format: 'DD MM, YY (WW)',
  showWeekDays: true
});
console.log(withWeekday); // "১ মাঘ, ১৪৩০ (সোমবার)"
```

### React Integration

```tsx
import React from 'react';
import { useBongabdo, useBongabdoLive } from 'bongabdo/react';

function BengaliDateComponent() {
  // Static date
  const { formatted, raw, isLoading, error } = useBongabdo('2024-01-15', {
    format: 'DD MM, YY (SS)',
    showSeason: true
  });

  // Live updating date
  const { formatted: liveDate } = useBongabdoLive({
    format: 'DD MM, YY (WW)',
    showWeekDays: true
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Static Date: {formatted}</h2>
      <h2>Live Date: {liveDate}</h2>
      <p>Raw data: {JSON.stringify(raw)}</p>
    </div>
  );
}
```

## API Reference

### Main Functions

#### `bongabdo(dateInput?, options?)`

The main function to convert a Gregorian date to Bengali format.

**Parameters:**
- `dateInput` (optional): `Date | string` - The date to convert. Defaults to current date.
- `options` (optional): `BongabdoOptions` - Formatting options.

**Returns:** `string` - Formatted Bengali date.

#### `getBanglaDate(dateInput?)`

Get the raw Bengali date object without formatting.

**Parameters:**
- `dateInput` (optional): `Date | string` - The date to convert. Defaults to current date.

**Returns:** `BanglaDate` - Raw Bengali date object.

### Format Options

```typescript
interface BongabdoOptions {
  date?: Date | string;           // Date to convert
  format?: string;                // Format string (default: "DD MM, YY")
  showSeason?: boolean;           // Show season (default: false)
  showWeekDays?: boolean;         // Show weekday (default: false)
  convertToBanglaDigits?: boolean; // Convert numbers to Bengali digits (default: true)
}
```

### Format Tokens

- `DD` - Date (দিন)
- `MM` - Month (মাস)
- `YY` - Year (বছর)
- `WW` - Weekday (সপ্তাহের দিন) - requires `showWeekDays: true`
- `SS` - Season (ঋতু) - requires `showSeason: true`

### Format Examples

```typescript
// Default format
bongabdo('2024-01-15'); // "১ মাঘ, ১৪৩০"

// Custom formats
bongabdo('2024-01-15', { format: 'DD-MM-YY' }); // "১-মাঘ-১৪৩০"
bongabdo('2024-01-15', { format: 'MM DD, YY' }); // "মাঘ ১, ১৪৩০"
bongabdo('2024-01-15', { format: 'YY/MM/DD' }); // "১৪৩০/মাঘ/১"

// With season
bongabdo('2024-01-15', { 
  format: 'DD MM, YY (SS)', 
  showSeason: true 
}); // "১ মাঘ, ১৪৩০ (শীত)"

// With weekday
bongabdo('2024-01-15', { 
  format: 'DD MM, YY (WW)', 
  showWeekDays: true 
}); // "১ মাঘ, ১৪৩০ (সোমবার)"

// Only specific parts
bongabdo('2024-01-15', { format: 'MM' }); // "মাঘ"
bongabdo('2024-01-15', { format: 'YY' }); // "১৪৩০"
bongabdo('2024-01-15', { format: 'SS', showSeason: true }); // "শীত"
```

### React Hooks

#### `useBongabdo(dateInput?, options?)`

React hook for Bengali date conversion.

**Returns:**
```typescript
{
  formatted: string;    // Formatted date string
  raw: BanglaDate;      // Raw date object
  isLoading: boolean;   // Loading state
  error: Error | null;  // Error state
}
```

#### `useBongabdoLive(options?)`

React hook for real-time Bengali date updates (updates every second).

**Returns:** Same as `useBongabdo`.

### Types

```typescript
interface BanglaDate {
  year: number;    // Bengali year
  date: number;    // Bengali date
  month: string;   // Bengali month name
  day: string;     // Bengali weekday name
  season: string;  // Bengali season name
}
```

## Bengali Calendar Information

The Bengali calendar (বঙ্গাব্দ) is a solar calendar used in Bangladesh and parts of India. Key points:

- **New Year**: Starts on 14th April (পহেলা বৈশাখ)
- **Year Offset**: Bengali year = Gregorian year - 593
- **Leap Year**: Falgun month has 31 days in leap years
- **Seasons**: 6 seasons (গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত)

## Migration from jQuery Plugin

If you're migrating from the original jQuery plugin, here's how to update your code:

### Old jQuery Usage:
```javascript
$('.bongabdo').bongabdo({
  date: '2018-04-14',
  format: 'DD MM, YY',
  showSeason: true
});
```

### New Modern Usage:
```typescript
import { bongabdo } from 'bongabdo';

const formattedDate = bongabdo('2018-04-14', {
  format: 'DD MM, YY',
  showSeason: true
});

// For DOM manipulation
document.querySelector('.bongabdo').textContent = formattedDate;
```

## Development

### Setup

```bash
git clone <repository-url>
cd bongabdo
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
npm run test:watch
```

### Development Mode

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Acknowledgments

This library is based on the original jQuery plugin by the Bengali developer community. The algorithm follows the official Bengali calendar calculations as documented on Wikipedia and other authoritative sources.
