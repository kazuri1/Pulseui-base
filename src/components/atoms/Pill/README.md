# Pill Component

A versatile pill/tag component that displays content in a rounded container with optional close functionality.

## Features

- **Multiple sizes**: xs, sm, md, lg, xl
- **Closable**: Optional X button to remove the pill
- **Disabled state**: Visual and functional disabled state
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Responsive**: Adapts to content and screen size

## Usage

```tsx
import { Pill } from "@/components/atoms/Pill";

// Basic usage
<Pill>Simple Pill</Pill>

// With close functionality
<Pill closable onClose={() => console.log("Pill closed")}>
  Closable Pill
</Pill>

// Different sizes
<Pill size="xs">Small</Pill>
<Pill size="lg">Large</Pill>

// Disabled state
<Pill disabled>Disabled Pill</Pill>
```

## Props

| Prop        | Type                                   | Default | Description                           |
| ----------- | -------------------------------------- | ------- | ------------------------------------- |
| `children`  | `ReactNode`                            | -       | Content to display inside the pill    |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Size variant of the pill              |
| `closable`  | `boolean`                              | `false` | Whether to show a close button        |
| `onClose`   | `() => void`                           | -       | Callback when close button is clicked |
| `className` | `string`                               | `""`    | Additional CSS classes                |
| `disabled`  | `boolean`                              | `false` | Whether the pill is disabled          |

## Size Variants

- **xs**: 20px height, small text
- **sm**: 24px height, small text
- **md**: 28px height, medium text (default)
- **lg**: 32px height, large text
- **xl**: 40px height, extra large text

## Examples

### All Size Variants

```tsx
<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
  <Pill size="xs">XS</Pill>
  <Pill size="sm">SM</Pill>
  <Pill size="md">MD</Pill>
  <Pill size="lg">LG</Pill>
  <Pill size="xl">XL</Pill>
</div>
```

### Closable Pills

```tsx
<Pill closable onClose={() => handleRemove(id)}>
  Tag Item
</Pill>
```

### Disabled State

```tsx
<Pill disabled closable onClose={() => {}}>
  Cannot Remove
</Pill>
```

## Styling

The component uses CSS modules and follows the design system tokens for:

- Colors
- Spacing
- Typography
- Border radius
- Motion (instant transitions)

## Accessibility

- Close button has proper `aria-label`
- Disabled state prevents interactions
- Keyboard navigation support
- Focus indicators for interactive elements
