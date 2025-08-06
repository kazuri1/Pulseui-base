# Pulse UI with Next.js Setup Guide

## Installation

```bash
npm install pulseui-base
# or
yarn add pulseui-base
```

## Basic Setup

### 1. Import Styles

In your `app/layout.tsx` or `pages/_app.tsx`:

```tsx
import 'pulseui-base/styles';
import 'pulseui-base/tokens';
```

### 2. Configure Next.js

Update your `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['pulseui-base'],
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;
```

### 3. TypeScript Configuration

Update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Usage Examples

### App Router (Next.js 13+)

```tsx
// app/page.tsx
import { Button, Card, Text } from 'pulseui-base';

export default function HomePage() {
  return (
    <div>
      <Text variant="h1">Welcome to Pulse UI</Text>
      <Card>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

### Pages Router

```tsx
// pages/index.tsx
import { Button, Card, Text } from 'pulseui-base';

export default function HomePage() {
  return (
    <div>
      <Text variant="h1">Welcome to Pulse UI</Text>
      <Card>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

### With Theme Provider

```tsx
// app/providers.tsx
'use client';

import { ThemeProvider } from 'pulseui-base';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

```tsx
// app/layout.tsx
import { Providers } from './providers';
import 'pulseui-base/styles';
import 'pulseui-base/tokens';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

## CSS Modules Support

Pulse UI uses CSS modules which are fully compatible with Next.js. The styles are automatically scoped and optimized.

## Server-Side Rendering (SSR)

All Pulse UI components are SSR-compatible and will render correctly on both client and server.

## Performance Optimization

- Components are tree-shakeable
- CSS is optimized and minified
- No runtime overhead
- Supports Next.js automatic code splitting

## Troubleshooting

### CSS Not Loading

Make sure you've imported the styles:

```tsx
import 'pulseui-base/styles';
```

### TypeScript Errors

Ensure your `tsconfig.json` includes the proper module resolution:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "esModuleInterop": true
  }
}
```

### Build Errors

If you encounter build errors, try:

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `npm install`
3. Restart the development server

## Advanced Configuration

### Custom Theme

```tsx
import { ThemeProvider } from 'pulseui-base';

const customTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  }
};

<ThemeProvider theme={customTheme}>
  {children}
</ThemeProvider>
```

### CSS Custom Properties

You can override CSS custom properties in your global CSS:

```css
:root {
  --color-primary: #your-color;
  --spacing-lg: 2rem;
}
``` 