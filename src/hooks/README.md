# Responsive Design System

A comprehensive responsive design system with React hooks and utilities for mobile-first development.

## 🎯 **Breakpoints**

```typescript
export const breakpoints = {
  xs: 576, // Extra small devices (phones)
  sm: 768, // Small devices (tablets)
  md: 992, // Medium devices (small laptops)
  lg: 1200, // Large devices (desktops)
  xl: 1400, // Extra large devices (large desktops)
};
```

## 🪝 **React Hooks**

### `useBreakpoint()`

Get current breakpoint and device type information.

```typescript
import { useBreakpoint } from "../hooks/useBreakpoint";

const MyComponent = () => {
  const {
    breakpoint, // "xs" | "sm" | "md" | "lg" | "xl"
    width, // Current window width
    isMobile, // true if xs or sm
    isTablet, // true if sm or md
    isDesktop, // true if lg or xl
    isExtraSmall, // true if xs
    isSmall, // true if sm
    isMedium, // true if md
    isLarge, // true if lg
    isExtraLarge, // true if xl
  } = useBreakpoint();

  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      <p>Is mobile: {isMobile ? "Yes" : "No"}</p>
    </div>
  );
};
```

### `useResponsiveValue<T>()`

Get responsive values based on current breakpoint.

```typescript
import { useResponsiveValue } from "../hooks/useBreakpoint";

const MyComponent = () => {
  const buttonSize = useResponsiveValue(
    {
      xs: "lg", // Large on mobile
      sm: "md", // Medium on tablet
      md: "sm", // Small on laptop
      lg: "sm", // Small on desktop
      xl: "xs", // Extra small on large desktop
    },
    "md"
  ); // Default value

  return <Button size={buttonSize}>Responsive Button</Button>;
};
```

### `useResponsiveStyles()`

Get responsive styling utilities.

```typescript
import { useResponsiveStyles } from "../hooks/useBreakpoint";

const MyComponent = () => {
  const { spacing, sizing, layout } = useResponsiveStyles();

  return (
    <div
      style={{
        padding: `${spacing.md}px`,
        height: `${sizing.button.height}px`,
        maxWidth: layout.container.maxWidth,
      }}
    >
      Responsive content
    </div>
  );
};
```

### `useBreakpointUp()` / `useBreakpointDown()`

Check if screen is above/below a specific breakpoint.

```typescript
import { useBreakpointUp, useBreakpointDown } from "../hooks/useBreakpoint";

const MyComponent = () => {
  const isDesktop = useBreakpointUp("md"); // true if >= 992px
  const isMobile = useBreakpointDown("sm"); // true if < 768px

  return (
    <div>
      {isDesktop && <DesktopMenu />}
      {isMobile && <MobileMenu />}
    </div>
  );
};
```

## 🛠️ **Utilities**

### `responsiveStyles`

Generate CSS media queries.

```typescript
import { responsiveStyles } from "../utils/responsiveStyles";

// Media queries
const mobileQuery = responsiveStyles.mobile; // @media (max-width: 767px)
const tabletQuery = responsiveStyles.tablet; // @media (min-width: 768px) and (max-width: 991px)
const desktopQuery = responsiveStyles.desktop; // @media (min-width: 992px)

// Custom queries
const customQuery = responsiveStyles.up("lg"); // @media (min-width: 1200px)
const belowQuery = responsiveStyles.down("md"); // @media (max-width: 991px)
```

### `responsiveTokens`

Pre-defined responsive design tokens.

```typescript
import { responsiveTokens } from "../utils/responsiveStyles";

// Responsive spacing
const spacing = responsiveTokens.spacing.md;
// { xs: 12, sm: 16, md: 24, lg: 32, xl: 40 }

// Responsive font sizes
const fontSize = responsiveTokens.fontSize.lg;
// { xs: 16, sm: 17, md: 18, lg: 19, xl: 20 }

// Component sizing
const buttonSizing = responsiveTokens.component.button;
// { height: { xs: 44, sm: 42, ... }, padding: { ... }, fontSize: { ... } }
```

### `responsive.styles()`

CSS-in-JS responsive styles helper.

```typescript
import { responsive } from "../utils/responsiveStyles";

const MyComponent = () => {
  return (
    <div
      style={responsive.styles({
        xs: { padding: "8px", fontSize: "14px" },
        sm: { padding: "12px", fontSize: "16px" },
        md: { padding: "16px", fontSize: "18px" },
        lg: { padding: "20px", fontSize: "20px" },
        xl: { padding: "24px", fontSize: "22px" },
      })}
    >
      Responsive content
    </div>
  );
};
```

### `responsive.spacing()` / `responsive.fontSize()`

Quick responsive spacing and font size helpers.

```typescript
import { responsive } from "../utils/responsiveStyles";

const MyComponent = () => {
  return (
    <div>
      <div style={responsive.spacing("lg")}>Responsive padding</div>
      <div style={responsive.fontSize("xl")}>Responsive font size</div>
    </div>
  );
};
```

## 📱 **Mobile-First Best Practices**

### 1. Touch-Friendly Sizing

```typescript
// Use responsive sizing for touch targets
const { sizing } = useResponsiveStyles();

<Button
  style={{
    height: `${sizing.button.height}px`, // 44px on mobile
    minWidth: `${sizing.button.height}px`, // Square touch target
    fontSize: `${sizing.button.fontSize}px`, // 16px on mobile (prevents zoom)
  }}
>
  Touch-friendly button
</Button>;
```

### 2. Responsive Layout

```typescript
// Use responsive grid
<Grid>
  <Grid.Col span={isMobile ? 12 : 6}>
    Full width on mobile, half on desktop
  </Grid.Col>
</Grid>
```

### 3. Responsive Typography

```typescript
// Use responsive font sizes
const fontSize = useResponsiveValue(
  {
    xs: 16, // Prevent zoom on iOS
    sm: 14,
    md: 14,
    lg: 13,
    xl: 12,
  },
  14
);

<p style={{ fontSize: `${fontSize}px` }}>Responsive text</p>;
```

### 4. Responsive Spacing

```typescript
// Use responsive spacing
const { spacing } = useResponsiveStyles();

<div style={{ padding: `${spacing.lg}px` }}>Responsive padding</div>;
```

## 🎨 **CSS Module Integration**

### SCSS with Responsive Utilities

```scss
// _responsive.scss
@import "./responsiveStyles";

.myComponent {
  // Base styles (mobile-first)
  padding: 8px;
  font-size: 14px;

  // Responsive overrides
  @media (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }

  @media (min-width: 992px) {
    padding: 24px;
    font-size: 18px;
  }
}
```

### CSS-in-JS with Responsive Hooks

```typescript
const MyComponent = () => {
  const { isMobile } = useBreakpoint();

  return (
    <div
      style={{
        padding: isMobile ? "8px" : "16px",
        fontSize: isMobile ? "14px" : "16px",
      }}
    >
      Responsive content
    </div>
  );
};
```

## 📋 **Usage Examples**

### Responsive Button

```typescript
const ResponsiveButton = () => {
  const { isMobile } = useBreakpoint();
  const { sizing } = useResponsiveStyles();

  return (
    <Button
      size={isMobile ? "lg" : "md"}
      style={{
        height: `${sizing.button.height}px`,
        fontSize: `${sizing.button.fontSize}px`,
      }}
    >
      Responsive Button
    </Button>
  );
};
```

### Responsive Container

```typescript
const ResponsiveContainer = () => {
  const containerSize = useResponsiveValue(
    {
      xs: "fluid",
      sm: "xs",
      md: "sm",
      lg: "md",
      xl: "lg",
    },
    "md"
  );

  return <Container size={containerSize}>Responsive container</Container>;
};
```

### Responsive Grid

```typescript
const ResponsiveGrid = () => {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <Grid>
      <Grid.Col span={isMobile ? 12 : isTablet ? 6 : 4}>Column 1</Grid.Col>
      <Grid.Col span={isMobile ? 12 : isTablet ? 6 : 4}>Column 2</Grid.Col>
      <Grid.Col span={isMobile ? 12 : isTablet ? 12 : 4}>Column 3</Grid.Col>
    </Grid>
  );
};
```

## 🚀 **Performance**

- Hooks use `useEffect` with cleanup
- Window resize events are debounced
- Responsive values are memoized
- CSS-in-JS styles are optimized

## 📱 **Mobile Considerations**

- Touch targets: minimum 44px
- Font size: minimum 16px (prevents iOS zoom)
- Spacing: larger on mobile for better touch
- Layout: single column on mobile
- Navigation: hamburger menu on mobile
