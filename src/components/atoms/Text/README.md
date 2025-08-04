# Text Component

A versatile text component that uses **Roboto** as the default font and follows the design system's typography tokens. The Text component provides consistent typography across the application with various size, weight, and color options.

## Features

- **Roboto Font**: Uses Roboto as the primary font with system fallbacks
- **Design System Tokens**: All typography uses design system tokens for consistency
- **Flexible Elements**: Can render as any HTML element (p, span, div, h1-h6)
- **Size Variants**: 6 size variants (xs, sm, md, lg, xl, xxl)
- **Color Variants**: 6 color variants (primary, secondary, muted, success, warning, error)
- **Weight Variants**: 4 weight variants (normal, medium, semibold, bold)
- **Truncation**: Single-line and multi-line text truncation
- **Custom Styling**: Support for sx props and custom styles

## Typography Scale

The Text component uses the design system's typography tokens:

| Variant | Font Size | Line Height | Use Case                |
| ------- | --------- | ----------- | ----------------------- |
| `xs`    | 12px      | 15px        | Captions, labels        |
| `sm`    | 14px      | 20.3px      | Small text, metadata    |
| `md`    | 16px      | 24px        | Body text (default)     |
| `lg`    | 18px      | 27px        | Large text, subheadings |
| `xl`    | 20px      | 30px        | Headings, emphasis      |
| `xxl`   | 24px      | 36px        | Large headings, titles  |

## Basic Usage

```tsx
import { Text } from '../Text';

// Default text (md size, primary color, normal weight)
<Text>This is default text using Roboto font</Text>

// Different sizes
<Text variant="sm">Small text</Text>
<Text variant="lg">Large text</Text>
<Text variant="xxl">Extra large text</Text>
```

## Props

| Prop        | Type                                                                       | Default     | Description                       |
| ----------- | -------------------------------------------------------------------------- | ----------- | --------------------------------- |
| `children`  | `React.ReactNode`                                                          | -           | Text content                      |
| `variant`   | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "xxl"`                            | `"md"`      | Text size variant                 |
| `color`     | `"primary" \| "secondary" \| "muted" \| "success" \| "warning" \| "error"` | `"primary"` | Text color variant                |
| `weight`    | `"normal" \| "medium" \| "semibold" \| "bold"`                             | `"normal"`  | Font weight                       |
| `truncate`  | `boolean`                                                                  | `false`     | Single-line truncation            |
| `lines`     | `number`                                                                   | -           | Multi-line truncation (1-4 lines) |
| `as`        | `"p" \| "span" \| "div" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"`   | `"p"`       | HTML element to render            |
| `className` | `string`                                                                   | -           | Additional CSS class              |
| `sx`        | `SxProps`                                                                  | -           | Style props                       |
| `style`     | `React.CSSProperties`                                                      | -           | Inline styles                     |

## Size Variants

```tsx
// All available size variants
<Text variant="xs">Extra Small (12px)</Text>
<Text variant="sm">Small (14px)</Text>
<Text variant="md">Medium (16px) - Default</Text>
<Text variant="lg">Large (18px)</Text>
<Text variant="xl">Extra Large (20px)</Text>
<Text variant="xxl">Extra Extra Large (24px)</Text>
```

## Color Variants

```tsx
// All available color variants
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="muted">Muted text</Text>
<Text color="success">Success text</Text>
<Text color="warning">Warning text</Text>
<Text color="error">Error text</Text>
```

## Weight Variants

```tsx
// All available weight variants
<Text weight="normal">Normal weight (400)</Text>
<Text weight="medium">Medium weight (500)</Text>
<Text weight="semibold">Semibold weight (600)</Text>
<Text weight="bold">Bold weight (700)</Text>
```

## HTML Elements

```tsx
// Render as different HTML elements
<Text as="h1" variant="xxl" weight="bold">Heading 1</Text>
<Text as="h2" variant="xl" weight="bold">Heading 2</Text>
<Text as="h3" variant="lg" weight="semibold">Heading 3</Text>
<Text as="p">Paragraph text</Text>
<Text as="span">Inline text</Text>
<Text as="div">Block text</Text>
```

## Truncation

### Single-line truncation

```tsx
<Text truncate>
  This is a very long text that will be truncated with ellipsis
</Text>
```

### Multi-line truncation

```tsx
<Text lines={2}>
  This is a very long text that will be truncated to 2 lines with ellipsis
</Text>

<Text lines={3}>
  This is a very long text that will be truncated to 3 lines with ellipsis
</Text>
```

## Combinations

```tsx
// Combine multiple props
<Text
  variant="lg"
  weight="bold"
  color="primary"
  as="h2"
>
  Large Bold Primary Heading
</Text>

<Text
  variant="sm"
  color="secondary"
  truncate
>
  Small secondary text with truncation
</Text>
```

## Custom Styling

```tsx
// Using sx prop for custom styles
<Text
  variant="lg"
  weight="bold"
  sx={{
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  }}
>
  Gradient Text
</Text>

// Using style prop
<Text
  variant="md"
  style={{
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    color: "#4a90e2"
  }}
>
  Text with Shadow
</Text>
```

## Design System Integration

The Text component is fully integrated with the design system:

### Font Family

- **Primary**: Roboto
- **Fallbacks**: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif

### Typography Tokens

- Uses `--font-size-*` tokens for sizes
- Uses `--line-height-*` tokens for line heights
- Uses `--font-weight-*` tokens for weights
- Uses `--color-*` tokens for colors

### Mixins

- Uses `@include text-style()` mixin for typography
- Uses `@include text-truncate()` mixin for truncation
- Uses `@include text-multiline-truncate()` mixin for multi-line truncation

## Accessibility

- Proper semantic HTML elements when using `as` prop
- Maintains color contrast ratios
- Screen reader friendly
- Keyboard navigation support

## Examples

### Card Title

```tsx
<Text variant="lg" weight="semibold" color="primary" as="h3">
  Card Title
</Text>
```

### Card Description

```tsx
<Text variant="sm" color="secondary">
  This is a description of the card content.
</Text>
```

### Error Message

```tsx
<Text variant="sm" color="error" weight="medium">
  Please enter a valid email address.
</Text>
```

### Success Message

```tsx
<Text variant="md" color="success" weight="medium">
  Your changes have been saved successfully!
</Text>
```

### Truncated Description

```tsx
<Text variant="sm" color="secondary" lines={2}>
  This is a very long description that will be truncated to 2 lines...
</Text>
```
