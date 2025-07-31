# @pulseui/icons

A comprehensive icon package for the Pulse UI design system, featuring Material-UI icons with design token integration.

## Features

- ✅ **200+ MUI Icons** - Complete Material-UI icon set
- ✅ **Design Token Integration** - Uses your design system tokens
- ✅ **Consistent Sizing** - 5 size variants (xs, sm, md, lg, xl)
- ✅ **Semantic Colors** - Primary, secondary, success, warning, error, muted
- ✅ **Interactive States** - Clickable icons with hover/active states
- ✅ **TypeScript Support** - Full type safety
- ✅ **Brand Support** - Works with multi-brand theming

## Installation

```bash
npm install @pulseui/icons
```

## Quick Start

```typescript
import { Icon, Add, Edit, Delete } from '@pulseui/icons';

// Basic usage
<Icon icon={Add} size="md" />

// With colors
<Icon icon={Edit} color="primary" size="lg" />

// Clickable icon
<Icon
  icon={Delete}
  color="error"
  clickable
  onClick={() => console.log('Deleted!')}
/>
```

## Icon Categories

### Navigation & Actions

```typescript
import {
  ArrowUpward,
  ArrowDownward,
  ArrowBack,
  ArrowForward,
  Menu,
  Close,
  ExpandMore,
  ExpandLess,
} from "@pulseui/icons";
```

### File & Data Actions

```typescript
import { Upload, Download, Save, Print, Share } from "@pulseui/icons";
```

### CRUD Operations

```typescript
import { Add, Remove, Edit, Delete, Refresh, Sync } from "@pulseui/icons";
```

### Search & Filter

```typescript
import { Search, FilterList, Sort, Clear } from "@pulseui/icons";
```

### Communication

```typescript
import { Email, Phone, Message, Chat, Notifications } from "@pulseui/icons";
```

### User & Account

```typescript
import {
  Person,
  AccountCircle,
  Settings,
  Security,
  Lock,
} from "@pulseui/icons";
```

### Status & Feedback

```typescript
import { CheckCircle, Error, Warning, Info, Help } from "@pulseui/icons";
```

## Usage Examples

### 1. Basic Icon Usage

```typescript
import { Icon, Add, Edit, Delete, Settings } from '@pulseui/icons';

// Different sizes
<Icon icon={Add} size="sm" />
<Icon icon={Edit} size="md" />
<Icon icon={Delete} size="lg" />
<Icon icon={Settings} size="xl" />
```

### 2. Icon with Colors

```typescript
import { Icon, CheckCircle, Error, Warning, Info } from '@pulseui/icons';

// Semantic colors
<Icon icon={CheckCircle} color="success" />
<Icon icon={Error} color="error" />
<Icon icon={Warning} color="warning" />
<Icon icon={Info} color="primary" />
```

### 3. Clickable Icons

```typescript
import { Icon, Settings, Refresh, Favorite } from '@pulseui/icons';

<Icon
  icon={Settings}
  clickable
  onClick={() => alert("Settings clicked!")}
/>

<Icon
  icon={Refresh}
  clickable
  color="primary"
  onClick={() => console.log("Refresh clicked!")}
/>

<Icon
  icon={Favorite}
  clickable
  color="error"
  onClick={() => alert("Liked!")}
/>
```

### 4. Icon in Button Components

```typescript
import { Icon, Add, Download, Upload } from '@pulseui/icons';

// Left icon
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
  <Icon icon={Add} size="sm" color="inherit" />
  Add Item
</button>

// Right icon
<button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded">
  Download
  <Icon icon={Download} size="sm" color="inherit" />
</button>

// Both icons
<button className="flex items-center justify-between gap-2 px-4 py-2 bg-purple-500 text-white rounded">
  <Icon icon={Upload} size="sm" color="inherit" />
  Upload & Download
  <Icon icon={Download} size="sm" color="inherit" />
</button>
```

## Icon Props

```typescript
interface IconProps {
  /** The MUI icon component to render */
  icon: SvgIconComponent;

  /** Icon size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /** Additional CSS classes */
  className?: string;

  /** Icon color (uses design tokens) */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "muted"
    | "inherit";

  /** Whether the icon should be clickable */
  clickable?: boolean;

  /** Click handler */
  onClick?: () => void;

  /** Disabled state */
  disabled?: boolean;
}
```

## Design Token Integration

The icon package uses your design system tokens:

```scss
// Size tokens
&.size-xs {
  width: 12px;
  height: 12px;
}
&.size-sm {
  width: 16px;
  height: 16px;
}
&.size-md {
  width: 20px;
  height: 20px;
}
&.size-lg {
  width: 24px;
  height: 24px;
}
&.size-xl {
  width: 32px;
  height: 32px;
}

// Color tokens
&.color-primary {
  color: var(--color-blue-8);
}
&.color-secondary {
  color: var(--color-indigo-6);
}
&.color-success {
  color: var(--color-green-6);
}
&.color-warning {
  color: var(--color-yellow-6);
}
&.color-error {
  color: var(--color-red-6);
}
&.color-muted {
  color: var(--color-gray-6);
}
```

## Multi-Brand Support

Icons automatically adapt to your brand themes:

```typescript
import { ThemeProvider } from '@pulseui/core';

// Icons will use brand-specific colors
<ThemeProvider brand="medash">
  <Icon icon={Add} color="primary" /> {/* MedDash blue */}
</ThemeProvider>

<ThemeProvider brand="fitcore">
  <Icon icon={Add} color="primary" /> {/* FitCore orange */}
</ThemeProvider>
```

## Best Practices

### ✅ DO:

- Use consistent sizing within the same context
- Use semantic colors (success, error, warning, etc.)
- Provide click handlers for interactive icons
- Use appropriate icons for the action/meaning
- Maintain consistent spacing around icons

### ❌ DON'T:

- Mix different icon sizes randomly
- Use icons without proper meaning/context
- Forget to handle disabled states
- Use too many icons in one component
- Ignore accessibility (provide alt text when needed)

## Available Icons

The package includes 200+ Material-UI icons organized by category:

- **Navigation & Actions**: ArrowUpward, Menu, Close, etc.
- **File & Data**: Upload, Download, Save, Print, etc.
- **CRUD Operations**: Add, Edit, Delete, Refresh, etc.
- **Search & Filter**: Search, FilterList, Sort, etc.
- **Communication**: Email, Phone, Message, Chat, etc.
- **User & Account**: Person, Settings, Security, etc.
- **Status & Feedback**: CheckCircle, Error, Warning, etc.
- **Layout & UI**: Home, Dashboard, ViewList, etc.
- **Business & Finance**: Business, Work, ShoppingCart, etc.
- **Technology**: Computer, Laptop, Wifi, etc.
- **Social & Sharing**: Facebook, Twitter, Instagram, etc.
- **Utility**: Copy, Cut, Paste, Link, etc.
- **Time & Date**: CalendarToday, Schedule, Timer, etc.
- **Location & Maps**: LocationOn, Map, Directions, etc.
- **Weather & Environment**: WbSunny, Cloud, Thunderstorm, etc.
- **Health & Fitness**: Favorite, HealthAndSafety, FitnessCenter, etc.
- **Transportation**: DirectionsCar, Flight, LocalTaxi, etc.
- **Food & Dining**: Restaurant, LocalDining, LocalCafe, etc.
- **Entertainment**: Movie, MusicNote, Games, etc.
- **Education & Learning**: School, LibraryBooks, Book, etc.
- **Office & Productivity**: Work, MeetingRoom, Computer, etc.
- **Security & Privacy**: Security, Lock, VpnKey, etc.
- **Analytics & Data**: Analytics, BarChart, PieChart, etc.

## License

MIT
