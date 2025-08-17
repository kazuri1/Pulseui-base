# PulseUI Brand System Demo

## Overview

The PulseUI brand system allows you to switch between different brand designs in real-time, with each brand having its own color palette, typography, and component styling while maintaining the same component structure.

## What's Been Implemented

### 1. Brand Context & Provider

- **BrandContext**: Manages brand state and switching
- **PulseUIProvider**: Combined provider for both theme and brand management
- **Brand switching**: Switch between PulseUI (default), IBM, and Google brands

### 2. Brand Switcher Components

- **BrandSwitcher**: Individual brand selection component
- **ThemeAndBrandSwitcher**: Combined theme and brand switcher
- **Real-time switching**: See components change immediately when switching brands

### 3. Brand-Specific Styling

- **IBM Brand**: Carbon Design System inspired colors and styling
- **Google Brand**: Material Design 3 inspired colors and styling
- **CSS Custom Properties**: Brand tokens override base tokens using CSS specificity

### 4. Integration with App.tsx

- Added brand switchers to the main app
- Real-time component updates when switching brands
- Current brand information display

## How to Use

### 1. Basic Brand Switching

```tsx
import { PulseUIProvider, BrandSwitcher } from "pulseui-base";

function App() {
  return (
    <PulseUIProvider
      defaultTheme="default-light"
      defaultBrand={null} // null = PulseUI (default)
      availableBrands={
        [
          /* your brand configs */
        ]
      }
    >
      <BrandSwitcher showVersion={true} showDescription={true} size="md" />
      {/* Your app content */}
    </PulseUIProvider>
  );
}
```

### 2. Individual Brand Management

```tsx
import { useBrand } from "pulseui-base";

function MyComponent() {
  const { currentBrand, setBrand, isDefaultBrand } = useBrand();

  return (
    <div>
      <p>Current Brand: {isDefaultBrand ? "PulseUI" : currentBrand?.name}</p>
      <button onClick={() => setBrand("ibm")}>Switch to IBM</button>
      <button onClick={() => setBrand(null)}>Switch to PulseUI</button>
    </div>
  );
}
```

### 3. Combined Theme & Brand Switching

```tsx
import { ThemeAndBrandSwitcher } from "pulseui-base";

function MyComponent() {
  return (
    <ThemeAndBrandSwitcher
      showThemeToggle={true}
      showBrandSwitcher={true}
      showBrandVersion={true}
      size="lg"
      direction="horizontal"
    />
  );
}
```

## Brand Configuration

### Brand Structure

```typescript
interface Brand {
  id: string;
  name: string;
  version: string;
  description: string;
  figmaFileKey?: string;
  tokens: {
    light: Record<string, any>;
    dark: Record<string, any>;
  };
}
```

### Example Brand Config

```typescript
const ibmBrand = {
  id: "ibm",
  name: "IBM",
  version: "1.0.0",
  description: "IBM Design Language - Carbon Design System inspired tokens",
  figmaFileKey: "ibm-design-system",
  tokens: {
    light: {
      primary: "#0f62fe",
      secondary: "#525252",
      success: "#24a148",
      warning: "#f1c21b",
      error: "#da1e28",
    },
    dark: {
      primary: "#78a9ff",
      secondary: "#a8a8a8",
      success: "#42be65",
      warning: "#f1c21b",
      error: "#ff8389",
    },
  },
};
```

## CSS Implementation

### Brand Token Overrides

Brand-specific styles are implemented using CSS custom properties and CSS specificity:

```scss
// IBM Brand - Light Theme
[data-brand="ibm"] {
  --color-primary: #0f62fe;
  --color-secondary: #525252;
  // ... more tokens
}

// IBM Brand - Dark Theme
[data-brand="ibm"][data-theme="dark"] {
  --color-primary: #78a9ff;
  --color-secondary: #a8a8a8;
  // ... more tokens
}
```

### Component-Specific Overrides

```scss
[data-brand="ibm"] {
  .pulseui-button--primary {
    background-color: var(--color-primary);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }
}
```

## Available Brands

### 1. PulseUI (Default)

- Clean, modern design system
- Neutral color palette
- Standard component styling

### 2. IBM

- Carbon Design System inspired
- Blue primary colors (#0f62fe)
- Professional, enterprise feel
- Both light and dark themes

### 3. Google

- Material Design 3 inspired
- Purple primary colors (#6750a4)
- Modern, playful feel
- Both light and dark themes

## Features

### ✅ Implemented

- Brand switching with real-time updates
- Theme switching (light/dark)
- Brand-specific color tokens
- Component-specific styling overrides
- Local storage persistence
- TypeScript support
- Responsive design

### 🔄 In Progress

- Dynamic brand loading from external sources
- Brand validation and error handling
- Advanced brand management tools

### 📋 Planned

- Brand import/export functionality
- Figma integration for token sync
- Brand preview and comparison tools
- Custom brand creation wizard

## Usage in Your App

The brand system is now fully integrated into your `App.tsx`. You can:

1. **Switch Themes**: Use the theme switcher to toggle between light and dark modes
2. **Switch Brands**: Use the brand switcher to switch between PulseUI, IBM, and Google
3. **Combined Control**: Use the combined switcher for both theme and brand control
4. **Real-time Updates**: See all components update immediately when switching

## Testing

To test the brand system:

1. Run your app: `npm run dev`
2. Use the brand switcher to switch between brands
3. Observe how components change colors and styling
4. Switch themes to see how brands adapt to light/dark modes
5. Check the current brand info display for status

## Troubleshooting

### Common Issues

1. **Brand not switching**: Ensure you're using `PulseUIProvider` instead of `ThemeProvider`
2. **Styles not updating**: Check that brand SCSS files are properly imported
3. **Type errors**: Ensure all brand-related components are properly exported

### Debug Tips

1. Check browser console for any errors
2. Verify `data-brand` attribute is set on document root
3. Check CSS custom properties in browser dev tools
4. Ensure brand configuration is valid

## Next Steps

1. **Test the current implementation** with your app
2. **Customize brand configurations** to match your needs
3. **Add more brands** following the same pattern
4. **Integrate with your design system** workflow

The brand system is now ready to use! Switch between brands and see your components transform in real-time. 🎨✨
