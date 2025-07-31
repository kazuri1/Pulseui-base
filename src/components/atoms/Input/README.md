# Input Component

A versatile input component with three variants (default, filled, unstyled), multiple sizes, states, and comprehensive error handling. Built with design tokens for consistent styling across the application.

## Features

- **3 Variants**: Default, Filled, Unstyled
- **3 Sizes**: Small (sm), Medium (md), Large (lg)
- **5 States**: Enabled, Focus, Typing, Filled, Disabled
- **Error Handling**: Comprehensive error states for all variants
- **Icon Support**: Info icons and dropdown arrows
- **Accessibility**: Full keyboard navigation and screen reader support
- **Design Tokens**: Consistent styling using CSS variables
- **TypeScript**: Fully typed with comprehensive props interface

## Usage

```tsx
import { Input } from './Input';
import { Search, KeyboardArrowDown } from '@mui/icons-material';

// Basic usage
<Input placeholder="Enter text..." />

// With variant and size
<Input variant="filled" size="lg" placeholder="Large filled input" />

// With icons
<Input
  placeholder="Search..."
  infoIconComponent={Search}
  showInfoIcon={true}
/>

// With error state
<Input error placeholder="Error input" />
```

## Props

| Prop                     | Type                                                            | Default     | Description                     |
| ------------------------ | --------------------------------------------------------------- | ----------- | ------------------------------- |
| `value`                  | `string`                                                        | `""`        | Input value                     |
| `placeholder`            | `string`                                                        | `""`        | Input placeholder text          |
| `variant`                | `"default" \| "filled" \| "unstyled"`                           | `"default"` | Input variant style             |
| `size`                   | `"sm" \| "md" \| "lg"`                                          | `"md"`      | Input size                      |
| `state`                  | `"enabled" \| "focus" \| "typing" \| "filled" \| "disabled"`    | `"enabled"` | Input state                     |
| `error`                  | `boolean`                                                       | `false`     | Error state                     |
| `showInfoIcon`           | `boolean`                                                       | `false`     | Show info icon                  |
| `showDropdownArrow`      | `boolean`                                                       | `false`     | Show dropdown arrow             |
| `infoIconComponent`      | `SvgIconComponent`                                              | -           | Custom info icon component      |
| `dropdownArrowComponent` | `SvgIconComponent`                                              | -           | Custom dropdown arrow component |
| `type`                   | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url"` | `"text"`    | Input type                      |
| `disabled`               | `boolean`                                                       | `false`     | Disabled state                  |
| `readonly`               | `boolean`                                                       | `false`     | Readonly state                  |
| `required`               | `boolean`                                                       | `false`     | Required field                  |
| `onChange`               | `(event: ChangeEvent<HTMLInputElement>) => void`                | -           | Change handler                  |
| `onFocus`                | `(event: FocusEvent<HTMLInputElement>) => void`                 | -           | Focus handler                   |
| `onBlur`                 | `(event: FocusEvent<HTMLInputElement>) => void`                 | -           | Blur handler                    |
| `className`              | `string`                                                        | `""`        | Additional CSS classes          |
| `name`                   | `string`                                                        | -           | Input name                      |
| `id`                     | `string`                                                        | -           | Input id                        |

## Variants

### Default

Standard input with border and white background.

```tsx
<Input variant="default" placeholder="Default input" />
```

### Filled

Input with filled background and subtle styling.

```tsx
<Input variant="filled" placeholder="Filled input" />
```

### Unstyled

Minimal input with no border or background.

```tsx
<Input variant="unstyled" placeholder="Unstyled input" />
```

## Sizes

### Small (sm)

Compact input for dense layouts.

```tsx
<Input size="sm" placeholder="Small input" />
```

### Medium (md)

Standard input size for most use cases.

```tsx
<Input size="md" placeholder="Medium input" />
```

### Large (lg)

Prominent input for important forms.

```tsx
<Input size="lg" placeholder="Large input" />
```

## States

### Enabled

Default state when input is ready for interaction.

```tsx
<Input state="enabled" placeholder="Enabled input" />
```

### Focus

State when input has focus (handled automatically).

```tsx
<Input state="focus" placeholder="Focused input" />
```

### Typing

State when user is actively typing.

```tsx
<Input state="typing" value="Typing text" placeholder="Typing input" />
```

### Filled

State when input has content.

```tsx
<Input state="filled" value="Filled text" placeholder="Filled input" />
```

### Disabled

State when input cannot be interacted with.

```tsx
<Input state="disabled" placeholder="Disabled input" />
```

## Error States

All variants support error states with appropriate visual feedback.

```tsx
<Input error placeholder="Error input" />
<Input variant="filled" error placeholder="Filled error input" />
<Input variant="unstyled" error placeholder="Unstyled error input" />
```

## Icons

### Info Icons

Add informational icons to inputs.

```tsx
import { Search, Info } from '@mui/icons-material';

<Input
  placeholder="Search..."
  infoIconComponent={Search}
  showInfoIcon={true}
/>

<Input
  placeholder="With info..."
  infoIconComponent={Info}
  showInfoIcon={true}
/>
```

### Dropdown Arrows

Add dropdown arrows for select-like inputs.

```tsx
import { KeyboardArrowDown } from "@mui/icons-material";

<Input
  placeholder="Select option..."
  dropdownArrowComponent={KeyboardArrowDown}
  showDropdownArrow={true}
/>;
```

### Both Icons

Combine info icons and dropdown arrows.

```tsx
<Input
  placeholder="Search and select..."
  infoIconComponent={Search}
  dropdownArrowComponent={KeyboardArrowDown}
  showInfoIcon={true}
  showDropdownArrow={true}
/>
```

## Input Types

The component supports all standard HTML input types.

```tsx
<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="tel" placeholder="Phone input" />
<Input type="url" placeholder="URL input" />
```

## Event Handlers

### onChange

Handle input value changes.

```tsx
<Input
  onChange={(e) => console.log("Value changed:", e.target.value)}
  placeholder="Type here..."
/>
```

### onFocus

Handle focus events.

```tsx
<Input onFocus={() => console.log("Input focused")} placeholder="Focus me..." />
```

### onBlur

Handle blur events.

```tsx
<Input onBlur={() => console.log("Input blurred")} placeholder="Blur me..." />
```

## Accessibility

The Input component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with Tab navigation
- **Focus Indicators**: Clear visual feedback for focus states
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Error Announcements**: Error states are announced to screen readers
- **Required Field Indication**: Required fields are properly marked

## Design Tokens

The component uses design tokens for consistent styling:

### Colors

- `--color-gray-1` to `--color-gray-9`: Neutral colors
- `--color-blue-1` to `--color-blue-9`: Primary colors
- `--color-red-1` to `--color-red-9`: Error colors
- `--color-white`: Background colors

### Spacing

- `--spacing-xs`: Extra small spacing (4px)
- `--spacing-sm`: Small spacing (8px)
- `--spacing-md`: Medium spacing (12px)
- `--spacing-lg`: Large spacing (16px)

### Typography

- `--font-family`: Font family
- `--font-size-sm` to `--font-size-lg`: Font sizes
- `--line-height-sm` to `--line-height-lg`: Line heights

### Other

- `--radius-md`: Border radius
- `--opacity-50`: Disabled state opacity

## Best Practices

### ✅ Do

- Use appropriate variants for your use case
- Provide clear placeholder text
- Handle error states properly
- Use icons to enhance usability
- Test with keyboard navigation

### ❌ Don't

- Use too many variants on one page
- Override design tokens unnecessarily
- Forget to handle error states
- Use inputs for navigation (use links instead)
- Make inputs too small for touch interaction

## Examples

### Search Input

```tsx
<Input
  placeholder="Search..."
  infoIconComponent={Search}
  showInfoIcon={true}
  size="lg"
/>
```

### Form Input

```tsx
<Input placeholder="Enter your email" type="email" required variant="filled" />
```

### Error Input

```tsx
<Input placeholder="Enter password" type="password" error variant="default" />
```

### Select-like Input

```tsx
<Input
  placeholder="Choose an option"
  dropdownArrowComponent={KeyboardArrowDown}
  showDropdownArrow={true}
  variant="filled"
/>
```

## Testing

The component includes comprehensive tests covering:

- All variants and sizes
- State changes and interactions
- Error and disabled states
- Icon rendering
- Event handlers
- Accessibility features

Run tests with:

```bash
npm test Input.test.tsx
```

## Related Components

- **Button**: Often used alongside inputs in forms
- **Icon**: Used for input icons
- **Form**: Inputs are essential for form building
- **Label**: Should be used with inputs for accessibility
