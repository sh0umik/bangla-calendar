// Basic usage examples for the bongabdo library

// Import the library
const { bongabdo, getBanglaDate } = require('../dist/index.js');

console.log('=== Basic Usage Examples ===\n');

// 1. Get today's date in Bengali
console.log('1. Today\'s date:');
console.log(bongabdo());
console.log();

// 2. Convert a specific date
console.log('2. Specific date (2024-01-15):');
console.log(bongabdo('2024-01-15'));
console.log();

// 3. Custom format
console.log('3. Custom format (DD-MM-YY):');
console.log(bongabdo('2024-01-15', { format: 'DD-MM-YY' }));
console.log();

// 4. With season
console.log('4. With season:');
console.log(bongabdo('2024-01-15', { 
  format: 'DD MM, YY (SS)', 
  showSeason: true 
}));
console.log();

// 5. With weekday
console.log('5. With weekday:');
console.log(bongabdo('2024-01-15', { 
  format: 'DD MM, YY (WW)', 
  showWeekDays: true 
}));
console.log();

// 6. Only month
console.log('6. Only month:');
console.log(bongabdo('2024-01-15', { format: 'MM' }));
console.log();

// 7. Only year
console.log('7. Only year:');
console.log(bongabdo('2024-01-15', { format: 'YY' }));
console.log();

// 8. Raw date object
console.log('8. Raw date object:');
const rawDate = getBanglaDate('2024-01-15');
console.log(JSON.stringify(rawDate, null, 2));
console.log();

// 9. Pahela Boishakh (Bengali New Year)
console.log('9. Pahela Boishakh (2024-04-14):');
console.log(bongabdo('2024-04-14'));
console.log();

// 10. Without Bengali digits
console.log('10. Without Bengali digits:');
console.log(bongabdo('2024-01-15', { convertToBanglaDigits: false }));
console.log(); 