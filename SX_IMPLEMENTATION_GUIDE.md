# SX/Style Props Implementation Guide

## Overview
This guide shows how to implement sx/style props support in PulseUI components. All components now follow a consistent pattern for styling flexibility.

## Implementation Pattern

### 1. Update Interface
Extend the component's props interface with `WithSxProps`:

```typescript
// Before
export interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  // ... other props
}

// After
export interface ComponentProps extends WithSxProps {
  children: React.ReactNode;
  // ... other props (className is included in WithSxProps)
}
```

### 2. Import Utilities
Add the necessary imports at the top of the file:

```typescript
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
```

### 3. Update Component Parameters
Add `sx` and `style` to the component's destructured parameters:

```typescript
export const Component: React.FC<ComponentProps> = ({
  children,
  className = "",
  sx,
  style,
  // ... other props
}) => {
```

### 4. Process SX Styles
Use `mergeSxWithStyles` to process the sx and style props:

```typescript
const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
  sx,
  style,
  className
);
```

### 5. Combine Class Names
Use `combineClassNames` to merge CSS classes:

```typescript
const componentClasses = combineClassNames(
  styles.component,
  styles[`variant-${variant}`],
  styles[`size-${size}`],
  sxClassName
);
```

### 6. Apply Styles
Apply the processed styles to the root element:

```typescript
return (
  <div className={componentClasses} style={sxStyle}>
    {children}
  </div>
);
```

## Complete Example

Here's a complete example of a component with sx/style support:

```typescript
import React from "react";
import styles from "./Component.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface ComponentProps extends WithSxProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Component: React.FC<ComponentProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const componentClasses = combineClassNames(
    styles.component,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    sxClassName
  );

  return (
    <div className={componentClasses} style={sxStyle}>
      {children}
    </div>
  );
};
```

## SX Props Available

The `SxProps` interface provides many styling shortcuts:

### Spacing
```typescript
sx={{
  m: 2,        // margin: 8px
  mt: 3,       // margin-top: 12px
  p: 4,        // padding: 16px
  px: 2,       // padding-left/right: 8px
  py: 1,       // padding-top/bottom: 4px
}}
```

### Colors
```typescript
sx={{
  color: "primary",           // Uses design token
  backgroundColor: "surface",  // Uses design token
  borderColor: "error",       // Uses design token
}}
```

### Typography
```typescript
sx={{
  typography: "h1",          // Predefined typography styles
  fontSize: "lg",             // Size from design tokens
  fontWeight: "bold",         // Font weight
  textAlign: "center",        // Text alignment
}}
```

### Layout
```typescript
sx={{
  display: "flex",
  width: "full",              // 100%
  height: "auto",
  position: "relative",
  zIndex: 10,
}}
```

### Flexbox
```typescript
sx={{
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}}
```

### Grid
```typescript
sx={{
  gridArea: "header",
  gridColumn: "1 / -1",
  gridRow: "1",
}}
```

### Effects
```typescript
sx={{
  borderRadius: "lg",         // Uses design token
  boxShadow: "md",            // Uses design token
  opacity: 0.8,
  transform: "scale(1.1)",
}}
```

## Usage Examples

### Basic Styling
```tsx
<Button 
  sx={{ 
    m: 2, 
    p: 3, 
    backgroundColor: "primary",
    borderRadius: "lg"
  }}
>
  Styled Button
</Button>
```

### Responsive Styling
```tsx
<Card 
  sx={{ 
    width: { base: "100%", md: "50%", lg: "33%" },
    m: { base: 1, md: 2, lg: 3 }
  }}
>
  Responsive Card
</Card>
```

### Mixed SX + Style Props
```tsx
<Input 
  sx={{ 
    backgroundColor: "surface",
    border: "2px solid var(--color-primary-4)"
  }}
  style={{ 
    transform: "rotate(1deg)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }}
/>
```

### Conditional Styling
```tsx
<Badge 
  sx={{ 
    backgroundColor: isActive ? "success" : "muted",
    color: "white",
    p: isActive ? 3 : 2
  }}
>
  {isActive ? "Active" : "Inactive"}
</Badge>
```

## Best Practices

### 1. Use Design Tokens
Prefer design token values over hardcoded values:

```typescript
// Good
sx={{ backgroundColor: "primary", borderRadius: "lg" }}

// Avoid
sx={{ backgroundColor: "#007bff", borderRadius: "8px" }}
```

### 2. Combine SX and Style Appropriately
- Use `sx` for design system related styles
- Use `style` for one-off custom styles
- Use both together when needed

### 3. Keep Components Flexible
Don't override essential component styles unless necessary:

```typescript
// Good - adds to existing styles
sx={{ m: 2, p: 3 }}

// Avoid - might break component functionality
sx={{ display: "none" }}
```

### 4. Use Consistent Spacing
Follow the design system's spacing scale:

```typescript
// Good - uses design tokens
sx={{ m: 2, p: 3, gap: 4 }}

// Avoid - arbitrary values
sx={{ margin: "7px", padding: "13px" }}
```

## Testing SX Props

To test that sx props are working correctly:

1. **Visual Test**: Apply obvious styles and verify they appear
2. **Console Test**: Check that styles are properly merged
3. **Override Test**: Verify sx props override default styles
4. **Combination Test**: Test sx + style props together

## Troubleshooting

### Styles Not Applying
- Check that `mergeSxWithStyles` is called
- Verify `sxStyle` is applied to the root element
- Ensure `sxClassName` is included in class names

### Type Errors
- Verify `WithSxProps` is imported and extended
- Check that `sx` and `style` are in component parameters
- Ensure proper TypeScript setup

### Performance Issues
- Avoid complex sx objects in render loops
- Use `useMemo` for expensive sx calculations
- Consider extracting static sx objects

## Conclusion

Following this pattern ensures all components have consistent styling APIs while maintaining the flexibility to customize appearance as needed. The sx props system integrates seamlessly with the design system's tokens and provides a familiar developer experience.
