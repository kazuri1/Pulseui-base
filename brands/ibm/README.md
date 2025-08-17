# IBM Brand for PulseUI

## Overview

This is the IBM brand implementation for PulseUI, featuring IBM Design Language and Carbon Design System inspired tokens that map 1:1 with the PulseUI token schema.

## Features

- **Complete IBM Design Language**: Based on IBM's official Carbon Design System
- **Dual Theme Support**: Light and dark themes with IBM-specific color palettes
- **1:1 Token Mapping**: Every token maps directly to PulseUI's schema
- **Component Overrides**: IBM-specific styling for all PulseUI components
- **Responsive Utilities**: IBM breakpoint system with utility classes
- **Motion & Effects**: IBM-specific animations, transitions, and effects

## Brand Identity

- **Primary Color**: IBM Blue (#0f62fe) - The signature IBM brand color
- **Typography**: IBM Plex Sans font family
- **Spacing**: IBM's 2px, 4px, 8px, 16px, 24px, 32px, 48px scale
- **Border Radius**: IBM's 2px, 4px, 6px, 8px, 12px scale
- **Shadows**: IBM-specific shadow system for depth and hierarchy

## File Structure

```
brands/ibm/
├── brand.config.ts      # TypeScript configuration with IBM brand data
├── _tokens.scss         # SCSS tokens that override PulseUI base tokens
├── tokens.json          # JSON tokens for sync scripts and APIs
└── README.md            # This documentation file
```

## Usage

### 1. Basic Brand Application

To apply the IBM brand to your application, add the `data-brand="ibm"` attribute to your root element:

```html
<html data-brand="ibm">
  <head>
    <!-- Include IBM brand tokens -->
    <link rel="stylesheet" href="brands/ibm/_tokens.scss" />
  </head>
  <body>
    <!-- Your PulseUI components will automatically use IBM styling -->
  </body>
</html>
```

### 2. Theme Switching

The IBM brand supports both light and dark themes:

```html
<!-- Light theme (default) -->
<html data-brand="ibm">
  <!-- Dark theme -->
  <html data-brand="ibm" data-theme="dark"></html>
</html>
```

### 3. JavaScript Theme Switching

```typescript
// Switch to IBM brand
document.documentElement.setAttribute("data-brand", "ibm");

// Switch to dark theme
document.documentElement.setAttribute("data-theme", "dark");

// Switch to light theme
document.documentElement.setAttribute("data-theme", "light");
```

### 4. React/Next.js Integration

```tsx
import { useEffect } from "react";

function IBMBrandProvider({ children, theme = "light" }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-brand", "ibm");
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}

// Usage
<IBMBrandProvider theme="dark">
  <YourApp />
</IBMBrandProvider>;
```

## Token Categories

### Colors

#### Primary Colors

- `--color-primary`: #0f62fe (IBM Blue 60)
- `--color-primary-hover`: #0050e6 (IBM Blue 70)
- `--color-primary-light`: #78a9ff (IBM Blue 40)
- `--color-primary-dark`: #002d9c (IBM Blue 80)

#### Semantic Colors

- `--color-success`: #24a148 (IBM Green 60)
- `--color-warning`: #f1c21b (IBM Yellow 60)
- `--color-error`: #da1e28 (IBM Red 60)
- `--color-info`: #0f62fe (IBM Blue 60)

#### Color Scales

- **Blue Scale**: 10 levels from #edf5ff to #001d6c
- **Gray Scale**: 10 levels from #ffffff to #161616
- **Red Scale**: 10 levels from #fff1f1 to #2d0709
- **Green Scale**: 10 levels from #defbe6 to #044317
- **Yellow Scale**: 10 levels from #fef7e0 to #291400

### Typography

#### Font Sizes

- `--font-size-xs`: 11px
- `--font-size-sm`: 13px
- `--font-size-md`: 14px
- `--font-size-lg`: 16px
- `--font-size-xl`: 18px
- `--font-size-xxl`: 20px

#### Font Family

- `--font-family`: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif

### Spacing

- `--spacing-xs`: 2px
- `--spacing-sm`: 4px
- `--spacing-md`: 8px
- `--spacing-lg`: 16px
- `--spacing-xl`: 24px
- `--spacing-xxl`: 32px
- `--spacing-2xl`: 48px

### Effects

#### Border Radius

- `--radius-xs`: 2px
- `--radius-sm`: 4px
- `--radius-md`: 6px
- `--radius-lg`: 8px
- `--radius-xl`: 12px

#### Shadows

- `--shadow-hover`: 0 4px 12px rgba(0, 0, 0, 0.15)
- `--shadow-normal`: 0 2px 4px rgba(0, 0, 0, 0.1)
- `--shadow-md`: 0 4px 8px rgba(0, 0, 0, 0.12)
- `--shadow-lg`: 0 8px 16px rgba(0, 0, 0, 0.15)

#### Motion

- `--motion-duration-fast`: 50ms
- `--motion-duration-normal`: 100ms
- `--motion-duration-slow`: 200ms
- `--motion-transition-normal`: all 100ms ease-out

## Component Overrides

The IBM brand automatically overrides PulseUI component styles:

### Buttons

- Primary buttons use IBM Blue with hover states
- Secondary buttons use IBM Gray with subtle backgrounds
- Outline buttons with IBM Blue borders

### Inputs

- IBM-specific border colors and focus states
- IBM Blue focus outlines with proper contrast

### Cards

- IBM shadows and border radius
- Hover effects with IBM motion timing

### Icons

- IBM color system for different icon states
- Consistent with IBM brand guidelines

## Responsive Design

### Breakpoints

- `--breakpoint-xs`: 0px
- `--breakpoint-sm`: 576px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 992px
- `--breakpoint-xl`: 1200px
- `--breakpoint-xxl`: 1400px

### Utility Classes

#### Spacing Utilities

```css
.pulseui-spacing--xs  /* 2px */
/* 2px */
/* 2px */
/* 2px */
.pulseui-spacing--sm  /* 4px */
.pulseui-spacing--md  /* 8px */
.pulseui-spacing--lg  /* 16px */
.pulseui-spacing--xl  /* 24px */
.pulseui-spacing--xxl /* 32px */
.pulseui-spacing--2xl; /* 48px */
```

#### Typography Utilities

```css
.pulseui-text--xs  /* 11px */
/* 11px */
/* 11px */
/* 11px */
.pulseui-text--sm  /* 13px */
.pulseui-text--md  /* 14px */
.pulseui-text--lg  /* 16px */
.pulseui-text--xl  /* 18px */
.pulseui-text--xxl; /* 20px */
```

#### Size Utilities

```css
.pulseui-size--xs  /* 24px */
/* 24px */
/* 24px */
/* 24px */
.pulseui-size--sm  /* 32px */
.pulseui-size--md  /* 40px */
.pulseui-size--lg  /* 48px */
.pulseui-size--xl  /* 56px */
.pulseui-size--xxl; /* 64px */
```

## Dark Theme

The IBM dark theme provides:

- **Inverted Color Palette**: Dark surfaces with light text
- **Enhanced Contrast**: Optimized for accessibility
- **IBM Blue Adaptation**: Lighter blues for better visibility on dark backgrounds
- **Consistent Spacing**: Same spacing and typography as light theme
- **Enhanced Shadows**: Darker shadows for better depth perception

## Integration with PulseUI

### 1. Token Override System

IBM tokens automatically override PulseUI base tokens through CSS specificity:

```scss
// Base PulseUI tokens (lower specificity)
:root {
  --color-primary: #339af0;
}

// IBM brand tokens (higher specificity)
[data-brand="ibm"] {
  --color-primary: #0f62fe; // Overrides base token
}
```

### 2. Component Compatibility

All PulseUI components work seamlessly with IBM branding:

- **Buttons**: Automatically styled with IBM colors
- **Inputs**: IBM borders and focus states
- **Cards**: IBM shadows and spacing
- **Typography**: IBM font family and sizes
- **Layouts**: IBM spacing and breakpoints

### 3. Theme Switching

IBM brand works with PulseUI's existing theme system:

```typescript
// Your existing theme context
const { theme, setTheme } = useTheme();

// IBM brand automatically adapts
setTheme("dark"); // Applies IBM dark theme
setTheme("light"); // Applies IBM light theme
```

## Customization

### 1. Token Overrides

You can override specific IBM tokens:

```scss
[data-brand="ibm"] {
  --color-primary: #your-custom-blue;
  --spacing-md: 12px; // Custom spacing
}
```

### 2. Component-Specific Overrides

```scss
[data-brand="ibm"] {
  .your-custom-component {
    background-color: var(--color-surface-secondary);
    border-radius: var(--radius-lg);
  }
}
```

### 3. Brand Variants

Create IBM brand variants:

```scss
[data-brand="ibm"][data-variant="enterprise"] {
  --color-primary: #002d9c; // Darker IBM Blue
  --spacing-md: 20px; // Larger spacing for enterprise
}
```

## Development Workflow

### 1. Figma Integration

1. **Export Tokens**: Use Figma's token export feature
2. **Validate Schema**: Ensure tokens match PulseUI schema
3. **Sync Changes**: Use the sync script to update tokens
4. **Test Components**: Verify all components render correctly

### 2. Token Updates

1. **Modify JSON**: Update `tokens.json` with new values
2. **Regenerate SCSS**: Run the token generation script
3. **Test Changes**: Verify in development environment
4. **Deploy**: Push changes to production

### 3. Version Control

- **Semantic Versioning**: Follow semver for brand updates
- **Changelog**: Document all token changes
- **Breaking Changes**: Mark breaking changes clearly
- **Migration Guide**: Provide upgrade instructions

## Best Practices

### 1. Token Naming

- Use consistent naming conventions
- Follow PulseUI's token structure
- Maintain semantic meaning
- Document token purposes

### 2. Color Usage

- Use semantic colors for their intended purpose
- Maintain proper contrast ratios
- Test in both light and dark themes
- Consider accessibility guidelines

### 3. Spacing Consistency

- Stick to IBM's spacing scale
- Use relative units when possible
- Maintain visual hierarchy
- Test across different screen sizes

### 4. Performance

- Minimize CSS custom properties
- Use efficient selectors
- Optimize for critical rendering path
- Consider CSS-in-JS alternatives

## Troubleshooting

### Common Issues

1. **Tokens Not Applying**

   - Check `data-brand="ibm"` attribute
   - Verify CSS file inclusion
   - Check for CSS specificity conflicts

2. **Theme Switching Issues**

   - Ensure `data-theme` attribute is set
   - Check for JavaScript errors
   - Verify theme context setup

3. **Component Styling Problems**
   - Check component class names
   - Verify token values
   - Test in isolation

### Debug Tools

1. **CSS Inspector**: Check computed styles
2. **Token Inspector**: Verify CSS custom properties
3. **Theme Switcher**: Test theme switching
4. **Responsive Testing**: Test breakpoints

## Support

### Resources

- **IBM Design Language**: [https://www.ibm.com/design/language/](https://www.ibm.com/design/language/)
- **Carbon Design System**: [https://carbondesignsystem.com/](https://carbondesignsystem.com/)
- **PulseUI Documentation**: [Your PulseUI docs URL]
- **Brand Guidelines**: [Your brand guidelines URL]

### Community

- **GitHub Issues**: Report bugs and request features
- **Discord/Slack**: Join the community discussion
- **Design System Team**: Contact for brand-specific questions

## License

This IBM brand implementation follows IBM's design language and is provided under the same license as PulseUI.

## Changelog

### v1.0.0 (Current)

- Initial IBM brand implementation
- Complete token system with light/dark themes
- Component overrides for all PulseUI components
- Responsive utilities and breakpoint system
- IBM Design Language compliance
- Carbon Design System inspiration

---

**Note**: This IBM brand is designed to work seamlessly with PulseUI while maintaining IBM's design identity. All tokens map 1:1 with PulseUI's schema, ensuring full compatibility and easy maintenance.
