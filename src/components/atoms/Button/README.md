# Button Component

A versatile button component with 6 variants, 5 sizes, and 3 states. Built with design tokens for consistent styling across the application. Supports Material-UI icons for enhanced visual appeal.

## Features

- **6 Variants**: filled, subtle, light, outline, white, default
- **5 Sizes**: xs, sm, md, lg, xl
- **3 States**: default, hover, disabled
- **Material-UI Icons**: Support for any MUI icon component
- **Icon Support**: Left, right, or both icons with custom icon components
- **Accessibility**: Proper focus states and ARIA attributes
- **Design Tokens**: Built with CSS variables from primitive tokens

## Usage

```tsx
import { Button } from './Button';
import { Add, Download, Upload } from '@mui/icons-material';

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="filled">Primary Action</Button>

// With size
<Button size="lg">Large Button</Button>

// With default icons
<Button leftIcon>With Left Icon</Button>
<Button rightIcon>With Right Icon</Button>
<Button leftIcon rightIcon>With Both Icons</Button>

// With custom Material-UI icons
<Button leftIcon leftIconComponent={Add}>Add Item</Button>
<Button rightIcon rightIconComponent={Download}>Download</Button>
<Button leftIcon rightIcon leftIconComponent={Upload} rightIconComponent={Download}>
  Upload & Download
</Button>

// With state
<Button state="disabled">Disabled Button</Button>

// Compact mode
<Button compact>Compact Button</Button>
```

## Props

| Prop                 | Type                                                                   | Default       | Description                 |
| -------------------- | ---------------------------------------------------------------------- | ------------- | --------------------------- |
| `children`           | `React.ReactNode`                                                      | -             | Button text content         |
| `variant`            | `'filled' \| 'subtle' \| 'light' \| 'outline' \| 'white' \| 'default'` | `'default'`   | Button variant style        |
| `size`               | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                 | `'md'`        | Button size                 |
| `state`              | `'default' \| 'hover' \| 'disabled'`                                   | `'default'`   | Button state                |
| `leftIcon`           | `boolean`                                                              | `false`       | Show icon on the left side  |
| `rightIcon`          | `boolean`                                                              | `false`       | Show icon on the right side |
| `leftIconComponent`  | `SvgIconComponent`                                                     | `ArrowUpward` | Custom left icon component  |
| `rightIconComponent` | `SvgIconComponent`                                                     | `ArrowUpward` | Custom right icon component |
| `justify`            | `'center' \| 'space-between'`                                          | `'center'`    | Content justification       |
| `compact`            | `boolean`                                                              | `false`       | Compact mode                |
| `disabled`           | `boolean`                                                              | `false`       | Disabled state              |
| `type`               | `'button' \| 'submit' \| 'reset'`                                      | `'button'`    | Button type                 |
| `onClick`            | `() => void`                                                           | -             | Click handler               |
| `className`          | `string`                                                               | `''`          | Additional CSS classes      |

## Variants

### Filled

Solid background with high contrast text. Best for primary actions.

### Subtle

Light background with colored text. Good for secondary actions.

### Light

Transparent background with colored text. Minimal visual impact.

### Outline

Bordered button with transparent background. Good for secondary actions.

### White

White background with colored text. Good for cards or dark backgrounds.

### Default

Standard button styling. Fallback variant.

## Sizes

- **xs**: Extra small (24px height)
- **sm**: Small (32px height)
- **md**: Medium (40px height) - Default
- **lg**: Large (48px height)
- **xl**: Extra large (56px height)

## States

- **default**: Normal interactive state
- **hover**: Hover state with visual feedback
- **disabled**: Disabled state with reduced opacity

## Icons

The Button component supports Material-UI icons through the `leftIconComponent` and `rightIconComponent` props. If no custom icon is provided, it defaults to `ArrowUpward`.

### Available Icons

You can use any Material-UI icon component:

```tsx
import {
  Add,
  Remove,
  Edit,
  Delete,
  Download,
  Upload,
  Search,
  FilterList,
  Refresh,
  Settings,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";
```

### Icon Examples

```tsx
// Upload/Download actions
<Button leftIcon leftIconComponent={Upload}>Upload</Button>
<Button rightIcon rightIconComponent={Download}>Download</Button>

// Add/Remove actions
<Button leftIcon leftIconComponent={Add}>Add Item</Button>
<Button rightIcon rightIconComponent={Remove}>Remove Item</Button>

// Edit/Delete actions
<Button leftIcon leftIconComponent={Edit}>Edit</Button>
<Button rightIcon rightIconComponent={Delete}>Delete</Button>

// Search & Filter actions
<Button leftIcon leftIconComponent={Search}>Search</Button>
<Button rightIcon rightIconComponent={FilterList}>Filter</Button>

// Utility actions
<Button leftIcon leftIconComponent={Refresh}>Refresh</Button>
<Button rightIcon rightIconComponent={Settings}>Settings</Button>
```

## Design Tokens

The component uses CSS variables from the design system:

- Colors: `--color-blue-*`, `--color-gray-*`, etc.
- Spacing: `--spacing-*`
- Border radius: `--radius-*`
- Font sizes: `--font-size-*`
- Font weights: `--font-weight-*`

## Accessibility

- Proper focus states with outline
- Disabled state handling
- ARIA attributes support
- Keyboard navigation support

## Examples

### All Variants

```tsx
<div>
  <Button variant="filled">Filled</Button>
  <Button variant="subtle">Subtle</Button>
  <Button variant="light">Light</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="white">White</Button>
  <Button variant="default">Default</Button>
</div>
```

### All Sizes

```tsx
<div>
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
</div>
```

### With Material-UI Icons

```tsx
import { Add, Download, Upload, Edit, Delete } from "@mui/icons-material";

<div>
  <Button leftIcon leftIconComponent={Add}>
    Add Item
  </Button>
  <Button rightIcon rightIconComponent={Download}>
    Download
  </Button>
  <Button
    leftIcon
    rightIcon
    leftIconComponent={Upload}
    rightIconComponent={Download}
  >
    Upload & Download
  </Button>
  <Button leftIcon leftIconComponent={Edit}>
    Edit
  </Button>
  <Button rightIcon rightIconComponent={Delete}>
    Delete
  </Button>
</div>;
```

### States

```tsx
<div>
  <Button>Default</Button>
  <Button state="hover">Hover</Button>
  <Button state="disabled">Disabled</Button>
</div>
```
