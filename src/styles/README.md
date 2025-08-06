# Design System Styles

This directory contains the core styling infrastructure for the Pulse UI design system.

## Files

- `_tokens.scss` - Design tokens and CSS custom properties
- `_mixins.scss` - Reusable SCSS mixins and functions
- `pulseui-base.scss` - **Master entry point** - bundles ALL styles in correct order
- `README.md` - This documentation file

## 🎯 Master Entry Point (`pulseui-base.scss`)

**This is the recommended way to import Pulse UI styles!**

The `pulseui-base.scss` file is a master entry point that **bundles ALL Pulse UI styles** in the correct order:

1. **Design tokens** (CSS custom properties)
2. **SCSS mixins and functions**
3. **ALL Component SCSS modules** (bundled for customer use)
4. **Global styles and utilities**
5. **Theme overrides** (optional)

### 🎨 **Complete Component Bundling**

When customers import **ANY component** from Pulse UI, they automatically get:

- ✅ **All design tokens** - Colors, spacing, typography, effects
- ✅ **All SCSS mixins** - Layout, interactive, focus, accessibility
- ✅ **ALL component styles** - Button, Input, Text, Card, Alert, Badge, Avatar, etc.
- ✅ **Global styles** - Animations, utilities, theme support
- ✅ **Theme-aware CSS** - Light/dark mode support
- ✅ **Multi-brand support** - Default, MedDash, FitCore, LabSync

### Usage

#### SCSS Import

```scss
// Import the complete Pulse UI styling system
@use "pulseui-base/scss" as *;
```

#### CSS Import

```css
/* Import compiled CSS */
@import "pulseui-base/styles";
```

#### JavaScript/TypeScript Import

```typescript
// Import in your main file
import "pulseui-base/styles";
```

#### Next.js Usage

```typescript
// In your app/layout.tsx or pages/_app.tsx
import "pulseui-base/styles";
```

### What's Included

✅ **Design tokens** - Colors, spacing, typography, effects  
✅ **SCSS mixins** - Layout, interactive, focus, accessibility  
✅ **Utility functions** - spacing(), color(), radius(), font-size()  
✅ **ALL Component styles** - Button, Input, Text, Card, Alert, Badge, Avatar, Icon, Switch, Radio, Textarea, Pill, PillInput, PasswordInput, PinInput, Image, ActionButton, Autocomplete, SingleTab, Tabs, Stepper, Pagination, Calendar, TableOfContents, SimpleTopNav, TextInput, Container, Grid, Group, Stack  
✅ **Theme-aware CSS** - Light/dark mode support  
✅ **Multi-brand support** - Default, MedDash, FitCore, LabSync

### Usage Examples

#### Using React Components (Recommended)

```tsx
import { Button, Input, Text, Card, Alert } from "pulseui-base";

// All styles are automatically included!
<Button variant="filled" size="md">Click me</Button>
<Input placeholder="Enter text" size="md" />
<Text variant="lg" weight="bold">Hello World</Text>
<Card>Content</Card>
<Alert variant="info">Information</Alert>
```

#### Using Global CSS Classes

```html
<!-- After importing pulseui-base/styles -->
<button class="button variant-filled size-md">Click me</button>

<input class="input size-md" placeholder="Enter text" />

<p class="text variant-lg weight-bold">Hello World</p>
```

#### Using SCSS Mixins

```scss
@use "pulseui-base/scss" as *;

.my-custom-button {
  @include button-base;
  background-color: var(--color-primary);
}

.my-custom-input {
  @include input-base;
  border-radius: var(--radius-lg);
}
```

### Customization

You can override any CSS custom properties after importing:

```scss
// Import Pulse UI first
@import "pulseui-base/scss";

// Then override tokens
:root {
  --color-primary: #your-custom-color;
  --spacing-md: 20px;
  --font-family: "Your Font", sans-serif;
}
```

## Design Tokens (`_tokens.scss`)

All design values are centralized as CSS custom properties in `_tokens.scss`. This ensures:

- ✅ **Consistency**: All components use the same design values
- ✅ **Theme Support**: Easy switching between light and dark themes
- ✅ **Maintainability**: Change values in one place
- ✅ **Type Safety**: CSS custom properties provide runtime validation

### Token Categories

- **Colors**: Primary, secondary, semantic, and theme-aware colors
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Typography**: Font sizes, weights, families, and line heights
- **Layout**: Border radius, shadows, z-index values
- **Motion**: Duration, easing, and transition values
- **Component-specific**: Tokens for buttons, inputs, icons, etc.

## SCSS Mixins (`_mixins.scss`)

Reusable SCSS patterns to reduce repetition and improve maintainability.

### Layout Mixins

```scss
@include flex-center; // display: flex; align-items: center; justify-content: center;
@include flex-between; // display: flex; align-items: center; justify-content: space-between;
@include flex-column; // display: flex; flex-direction: column;
@include flex-column-center; // display: flex; flex-direction: column; align-items: center; justify-content: center;
```

### Interactive Mixins

```scss
@include interactive; // Basic interactive styles (cursor, user-select, transition)
@include interactive-hover; // Interactive with hover transform and shadow
@include interactive-scale; // Interactive with scale hover/active effects
```

### Focus and Accessibility

```scss
@include focus-ring; // Standard focus ring
@include focus-visible; // Focus styles for keyboard navigation
@include focus-ring-inset; // Inset focus ring
```

### State Mixins

```scss
@include disabled; // Disabled state styles
@include error-state; // Error state with red border and focus
@include success-state; // Success state with green border and focus
```

### Transition Mixins

```scss
@include transition; // Normal transition
@include transition-fast; // Fast transition
@include transition-slow; // Slow transition
@include transition-bounce; // Bounce easing transition
```

### Typography Mixins

```scss
@include text-style(md, bold); // Font size, weight, and line height
@include text-truncate; // Single line text truncation
@include text-multiline-truncate(3); // Multi-line text truncation
```

### Component-Specific Mixins

```scss
@include button-base; // Base button styles
@include input-base; // Base input styles
@include avatar-base; // Base avatar styles
```

### Utility Functions

```scss
spacing(2);                 // Returns calc(var(--spacing-md) * 2)
color(blue, 8);            // Returns var(--color-blue-8)
radius(md);                // Returns var(--radius-md)
font-size(lg);             // Returns var(--font-size-lg)
icon-size(sm);             // Returns var(--icon-size-sm)
```

## Usage Examples

### In Component SCSS Files

```scss
@import "../../../styles/_tokens.scss";
@import "../../../styles/_mixins.scss";

.myComponent {
  @include flex-center;
  @include transition;
  @include focus-visible;

  &.disabled {
    @include disabled;
  }

  &.error {
    @include error-state;
  }
}
```

### Benefits

- ✅ **DRY Principle**: No repeated code across components
- ✅ **Consistency**: All components use the same patterns
- ✅ **Maintainability**: Change patterns in one place
- ✅ **Performance**: Optimized CSS output
- ✅ **Developer Experience**: Clear, semantic mixin names

## Best Practices

1. **Always import mixins**: Include `@import "../../../styles/_mixins.scss";` in component SCSS files
2. **Use semantic mixins**: Prefer `@include flex-center` over raw CSS
3. **Combine mixins**: Mixins can be combined for complex patterns
4. **Extend when needed**: Create new mixins for repeated patterns
5. **Document new mixins**: Add documentation for any new mixins created

## Adding New Mixins

When creating new mixins:

1. **Follow naming conventions**: Use kebab-case for mixin names
2. **Group logically**: Place in appropriate sections
3. **Add documentation**: Include usage examples
4. **Test thoroughly**: Ensure they work across different scenarios
5. **Update this README**: Document new mixins here
