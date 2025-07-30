# Legacy jQuery Plugin

This folder contains the original jQuery plugin files for reference purposes.

## Files

- `example/` - Original HTML example demonstrating the jQuery plugin
- `research/bongabdo.js` - Original research implementation

## Migration

The modern TypeScript package has replaced this jQuery plugin. See the main README.md and MIGRATION_GUIDE.md for details on how to migrate to the new package.

## Installation

```bash
npm install bongabdo
```

## Usage

```typescript
import { bongabdo } from "bongabdo";

const formattedDate = bongabdo("2024-01-15", {
  format: "DD MM, YY (SS)",
  showSeason: true,
});
```

For more information, see the main documentation.
