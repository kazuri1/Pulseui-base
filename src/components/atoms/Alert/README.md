# Alert Component

A flexible alert component for displaying important messages to users with various visual styles and sizes.

## Features

- **Multiple Variants**: Info, Success, Warning, and Error styles
- **Size Options**: xs, sm, md, lg, xl
- **Closeable**: Optional close button with callback
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Customizable**: Support for custom styling via sx props
- **Responsive**: Adapts to different screen sizes

## Usage

```tsx
import { Alert } from "@/components/atoms/Alert";

// Basic usage
<Alert variant="info" title="Information">
  This is an informational message.
</Alert>

// With close button
<Alert
  variant="success"
  title="Success"
  closeable
  onClose={() => console.log('Alert closed')}
>
  Your action was completed successfully!
</Alert>

// Different sizes
<Alert size="lg" variant="warning" title="Warning">
  Please review your input.
</Alert>
```

## Props

| Prop        | Type                                          | Default  | Description                               |
| ----------- | --------------------------------------------- | -------- | ----------------------------------------- |
| `children`  | `React.ReactNode`                             | -        | The content to display in the alert       |
| `title`     | `string`                                      | -        | The title of the alert                    |
| `variant`   | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Visual variant of the alert               |
| `styleVariant`     | `"default" \| "filled" \| "light" \| "outline" \| "transparent" \| "white"` | `"default"` | Style variant of the alert                |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`        | `"md"`   | Size of the alert                         |
| `closeable` | `boolean`                                     | `false`  | Whether to show the close button          |
| `visible`   | `boolean`                                     | `true`   | Whether the alert is visible              |
| `onClose`   | `() => void`                                  | -        | Callback when the close button is clicked |
| `disabled`  | `boolean`                                     | `false`  | Whether the alert is disabled             |
| `id`        | `string`                                      | -        | Unique identifier                         |

## Variants

### Info

- Blue color scheme
- Information icon
- Used for general information

### Success

- Green color scheme
- Checkmark icon
- Used for successful actions

### Warning

- Yellow/Orange color scheme
- Warning triangle icon
- Used for warnings and cautions

### Error

- Red color scheme
- Error icon
- Used for errors and critical messages

## Styles

### Default

- Standard alert appearance
- Light background with colored border
- Used for most alert scenarios

### Filled

- Solid colored background
- White text for contrast
- Used for prominent alerts

### Light

- Very light background
- Subtle appearance
- Used for gentle notifications

### Outline

- Transparent background
- Colored border and text
- Used for subtle alerts

### Transparent

- No background or border
- Colored text only
- Used for minimal alerts

### White

- White background
- Colored text and border
- Used for alerts on dark backgrounds

## Sizes

- **xs**: Extra small (12px icons, compact padding)
- **sm**: Small (14px icons, small padding)
- **md**: Medium (16px icons, default padding)
- **lg**: Large (18px icons, large padding)
- **xl**: Extra large (20px icons, extra large padding)

## Accessibility

- Uses `role="alert"` for screen readers
- Close button has proper `aria-label`
- Keyboard navigation support
- Focus management for close button

## Examples

### Basic Alert

```tsx
<Alert variant="info" title="Information">
  This is a basic informational alert.
</Alert>
```

### Closeable Alert

```tsx
const [visible, setVisible] = useState(true);

<Alert
  variant="success"
  title="Success"
  closeable
  onClose={() => setVisible(false)}
>
  Your changes have been saved!
</Alert>;
```

### All Variants

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Alert variant="info" title="Information">
    This is an informational message.
  </Alert>

  <Alert variant="success" title="Success">
    Your action was completed successfully!
  </Alert>

  <Alert variant="warning" title="Warning">
    Please review your input before proceeding.
  </Alert>

  <Alert variant="error" title="Error">
    Something went wrong. Please try again.
  </Alert>
</div>
```

### All Styles

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Alert variant="info" styleVariant="default" title="Default">
    Default style alert
  </Alert>

  <Alert variant="info" styleVariant="filled" title="Filled">
    Filled style alert with solid background
  </Alert>

  <Alert variant="info" styleVariant="light" title="Light">
    Light style alert with subtle background
  </Alert>

  <Alert variant="info" styleVariant="outline" title="Outline">
    Outline style alert with border only
  </Alert>

  <Alert variant="info" styleVariant="transparent" title="Transparent">
    Transparent style alert with no background
  </Alert>

  <Alert variant="info" styleVariant="white" title="White">
    White style alert with white background
  </Alert>
</div>
```

### Custom Styling

```tsx
<Alert
  variant="info"
  title="Custom Alert"
  sx={{
    backgroundColor: "var(--color-purple-1)",
    color: "var(--color-purple-9)",
    borderColor: "var(--color-purple-3)",
  }}
>
  This alert has custom styling applied.
</Alert>
```

## Design Tokens

The Alert component uses the following design tokens:

- Colors: `--color-blue-*`, `--color-green-*`, `--color-yellow-*`, `--color-red-*`
- Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- Typography: `--font-size-*`, `--font-weight-*`, `--line-height-*`
- Border: `--border-width-thin`, `--radius-md`
- Shadow: `--shadow-sm`
- Motion: `--motion-transition-fast`
- Opacity: `--opacity-50`, `--opacity-70`
