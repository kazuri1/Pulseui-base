# PulseUI - Modern React Component Library

⚡ **Ultra-lightweight React component library** with design tokens, multi-brand theming, and TypeScript support. Zero heavy dependencies - perfect for production apps.

[![npm version](https://badge.fury.io/js/pulseui-base.svg)](https://badge.fury.io/js/pulseui-base)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **60+ Modern Components** - Button, Input, Modal, Drawer, and more
- 🎯 **TypeScript First** - Full type safety and IntelliSense support
- 🌓 **Theme System** - Light/dark themes with CSS custom properties
- 📱 **Responsive Design** - Mobile-first approach with breakpoint utilities
- ♿ **Accessibility** - ARIA compliant components following WCAG guidelines
- 🚀 **Performance** - Tree-shakeable, zero runtime overhead
- 🎭 **CSS Modules** - Scoped styling with design token integration
- 🔧 **Customizable** - Extensive prop system for component variants

## 🚀 Quick Start

### Installation

```bash
npm install pulseui-base
# or
yarn add pulseui-base
# or
pnpm add pulseui-base
```

### Basic Usage

```tsx
import React from "react";
import { Button, ThemeProvider, useTheme } from "pulseui-base";
import "pulseui-base/styles";

function App() {
  return (
    <ThemeProvider defaultTheme="default-light">
      <div>
        <Button variant="filled" size="lg">
          Hello PulseUI!
        </Button>
      </div>
    </ThemeProvider>
  );
}
```

## 🎨 Core Components

### Form Components

- **Button** - Multiple variants (filled, outline, subtle, light)
- **Input** - Text, password, textarea, pin input
- **Select** - Dropdown with search and multi-select
- **Checkbox** - Custom styled checkboxes
- **Radio** - Radio button groups
- **Switch** - Toggle switches
- **Autocomplete** - Searchable input with suggestions

### Layout Components

- **Grid** - Responsive grid system
- **Container** - Content wrapper with max-width
- **Stack** - Vertical/horizontal stacking
- **Group** - Component grouping utilities

### Display Components

- **Card** - Content cards with headers and actions
- **Modal** - Overlay dialogs with backdrop
- **Drawer** - Side panels (left, right, top, bottom)
- **Tabs** - Tabbed content navigation
- **Accordion** - Collapsible content sections
- **Alert** - Status messages (success, warning, error, info)

### Navigation

- **SimpleTopNav** - Top navigation bar
- **LeftDrawer** - Side navigation drawer
- **Pagination** - Page navigation controls
- **Breadcrumbs** - Navigation breadcrumbs

### Data Display

- **Table** - Data tables with sorting
- **Badge** - Status indicators and notifications
- **Avatar** - User profile images
- **Tag** - Categorization labels
- **Progress** - Progress bars and spinners

## 🎭 Theming System

PulseUI includes a powerful theming system with CSS custom properties:

```tsx
import { ThemeProvider, useTheme } from "pulseui-base";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current: {themeName}</button>;
}
```

### Available Themes

- `default-light` - Clean light theme
- `default-dark` - Dark theme with proper contrast

### Custom Themes

Create custom themes by extending the base theme:

```tsx
import { ThemeProvider } from "pulseui-base";

const customTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    // ... more colors
  },
  // ... other theme properties
};

<ThemeProvider theme={customTheme}>{/* Your app */}</ThemeProvider>;
```

## 📱 Responsive Utilities

Built-in responsive utilities for mobile-first development:

```tsx
import { useBreakpoint } from "pulseui-base";

function ResponsiveComponent() {
  const breakpoint = useBreakpoint();

  return (
    <div>
      {breakpoint === "mobile" && <MobileView />}
      {breakpoint === "desktop" && <DesktopView />}
    </div>
  );
}
```

## 🎯 Component Variants

Most components support multiple variants for flexibility:

```tsx
// Button variants
<Button variant="filled">Filled</Button>
<Button variant="outline">Outline</Button>
<Button variant="subtle">Subtle</Button>
<Button variant="light">Light</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## 🔧 Advanced Usage

### Custom Styling with SX Props

```tsx
import { Box } from "pulseui-base";

<Box
  sx={{
    m: 2, // margin: 8px
    p: 3, // padding: 12px
    color: "primary", // theme color
    borderRadius: "md",
    boxShadow: "lg",
  }}
>
  Custom styled content
</Box>;
```

### Component Composition

```tsx
import { VariantSelector } from "pulseui-base";

<VariantSelector
  title="Button Variants"
  variants={["filled", "outline", "subtle"]}
  defaultVariant="filled"
>
  <Button>Sample Button</Button>
</VariantSelector>;
```

## 📦 Package Structure

```
pulseui-base/
├── dist/           # Compiled JavaScript and CSS
├── types/          # TypeScript definitions
├── src/styles/     # SCSS source files
└── README.md       # This file
```

### Entry Points

```tsx
// Main library
import { Button, Input, Modal } from "pulseui-base";

// Styles only
import "pulseui-base/styles";

// SCSS source (for customization)
import "pulseui-base/scss";

// Compiled CSS
import "pulseui-base/scss-compiled";
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
git clone https://github.com/kazuri1/Pulseui.git
cd Pulseui
npm install
```

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run type-check   # TypeScript type checking
npm run storybook    # Start Storybook
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://github.com/kazuri1/Pulseui)
- 🐛 [Issue Tracker](https://github.com/kazuri1/Pulseui/issues)
- 💬 [Discussions](https://github.com/kazuri1/Pulseui/discussions)

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with CSS Modules and SCSS
- Icons from Material-UI Icons
- Design tokens inspired by modern design systems

---

Made with ❤️ by the PulseUI team
