# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-07-30

### 🎉 Major Release - Complete Rewrite

This is a complete rewrite of the original jQuery plugin into a modern TypeScript package.

### ✨ Added
- **Modern TypeScript Library**: Complete rewrite from jQuery plugin to modern TypeScript
- **Framework Agnostic**: Works with React, Vue, Angular, or vanilla JavaScript
- **React Hooks**: Built-in `useBongabdo` and `useBongabdoLive` hooks
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Flexible Formatting**: Enhanced formatting options with Bengali digits
- **Tree Shaking**: Optimized bundle size with ES modules
- **Comprehensive Testing**: 16 passing tests covering all functionality
- **Modern Build System**: tsup for building ESM/CJS packages
- **Documentation**: Complete API documentation and examples

### 🔧 Changed
- **Package Name**: Published as `bongabdo` on npm
- **API**: Changed from jQuery plugin to function-based API
- **Module System**: UMD → ESM/CJS
- **Build Tool**: Manual → tsup
- **Testing**: No tests → Jest with comprehensive coverage

### 🗑️ Removed
- **jQuery Dependency**: No longer requires jQuery
- **Old Files**: Moved jQuery plugin files to `legacy/` folder
- **Old Examples**: Replaced with modern examples

### 📦 New API

#### Basic Usage
```typescript
import { bongabdo } from 'bongabdo';

// Today's date
const today = bongabdo(); // "১৫ শ্রাবণ, ১৪৩২"

// Custom date with season
const withSeason = bongabdo('2024-01-15', {
  format: 'DD MM, YY (SS)',
  showSeason: true
}); // "২ মাঘ, ১৪৩০ (শীত)"
```

#### React Integration
```tsx
import { useBongabdo } from 'bongabdo/react';

function BengaliDateComponent() {
  const { formatted } = useBongabdo('2024-01-15', {
    format: 'DD MM, YY (SS)',
    showSeason: true
  });

  return <div>{formatted}</div>;
}
```

### 🚀 Migration
- See `MIGRATION_GUIDE.md` for step-by-step migration instructions
- Old jQuery plugin files preserved in `legacy/` folder
- Backward compatibility not maintained due to fundamental architecture changes

### 📚 Documentation
- **README.md**: Comprehensive documentation with examples
- **MIGRATION_GUIDE.md**: Migration guide from jQuery plugin
- **Examples**: Working code examples in `examples/` folder
- **Tests**: Full test coverage demonstrating all features

### 🔗 Links
- **npm**: https://www.npmjs.com/package/bongabdo
- **GitHub**: https://github.com/sh0umik/bongabdo
- **Documentation**: See README.md for full API reference

---

## [Legacy] - Pre-1.0.0

### Original jQuery Plugin
- jQuery-based Bengali calendar conversion
- UMD module format
- Basic formatting options
- No TypeScript support
- No React integration
- Limited testing

**Note**: The original jQuery plugin has been moved to the `legacy/` folder for reference purposes. 