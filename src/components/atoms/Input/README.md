# Input Component

A versatile input component with 3 variants, 5 states, and comprehensive error handling. Built with design tokens for consistent styling across the application. Supports Material-UI icons for enhanced visual feedback.

## Features

- **3 Variants**: default, filled, unstyled
- **5 States**: enabled, focus, typing, filled, disabled
- **Error Handling**: Comprehensive error states for all variants
- **Material-UI Icons**: Support for info and dropdown icons
- **Multiple Sizes**: sm, md, lg
- **Accessibility**: Proper focus states and ARIA attributes
- **Design Tokens**: Built with CSS variables from primitive tokens

## Usage

```tsx
import { Input } from './Input';
import { Search, FilterList } from '@mui/icons-material';

// Basic usage
<Input placeholder="Enter text..." />

// With variant
<Input variant="filled" placeholder="Filled input" />

// With state
<Input state="focus" placeholder="Focused input" />

// With error state
<Input error placeholder="Error input" />

// With icons
<Input
  infoIconComponent={Search}
  showDropdownArrow={false}
  placeholder="Search..."
/>

// With custom icons
<Input
  infoIconComponent={FilterList}
  dropdownArrowComponent={KeyboardArrowDown}
  placeholder="Filter options..."
/>
```

## Props

| Prop                     | Type                                                            | Default             | Description                     |
| ------------------------ | --------------------------------------------------------------- | ------------------- | ------------------------------- |
| `placeholder`            | `string`                                                        | `"Placeholder"`     | Input placeholder text          |
| `value`                  | `string`                                                        | `""`                | Input value                     |
| `variant`                | `'default' \| 'filled' \| 'unstyled'`                           | `'default'`         | Input variant style             |
| `state`                  | `'enabled' \| 'focus' \| 'typing' \| 'filled' \| 'disabled'`    | `'enabled'`         | Input state                     |
| `error`                  | `boolean`                                                       | `false`             | Error state                     |
| `showInfoIcon`           | `boolean`                                                       | `true`              | Show info icon                  |
| `showDropdownArrow`      | `boolean`                                                       | `true`              | Show dropdown arrow             |
| `infoIconComponent`      | `SvgIconComponent`                                              | `Info`              | Custom info icon component      |
| `dropdownArrowComponent` | `SvgIconComponent`                                              | `KeyboardArrowDown` | Custom dropdown arrow component |
| `type`                   | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'`            | Input type                      |
| `size`                   | `'sm' \| 'md' \| 'lg'`                                          | `'md'`              | Input size                      |
| `disabled`               | `boolean`                                                       | `false`             | Disabled state                  |
| `readonly`               | `boolean`                                                       | `false`             | Readonly state                  |
| `required`               | `boolean`                                                       | `false`             | Required field                  |
| `name`                   | `string`                                                        | -                   | Input name                      |
| `id`                     | `string`                                                        | -                   | Input id                        |
| `onChange`               | `(value: string) => void`                                       | -                   | Change handler                  |
| `onFocus`                | `() => void`                                                    | -                   | Focus handler                   |
| `onBlur`                 | `() => void`                                                    | -                   | Blur handler                    |
| `className`              | `string`                                                        | `''`                | Additional CSS classes          |

## Variants

### Default

Standard input with white background and gray border. Best for most use cases.

### Filled

Input with light gray background. Good for secondary or less prominent inputs.

### Unstyled

Input without border or background. Minimal visual impact, good for inline inputs.

## States

- **enabled**: Normal interactive state
- **focus**: Focused state with blue border and icons
- **typing**: Active typing state with blue border and icons
- **filled**: Input with content, subtle background change
- **disabled**: Disabled state with reduced opacity

## Error States

Each variant and state has a corresponding error state that uses red colors instead of blue/gray:

- **Error Enabled**: Red border and icons
- **Error Focus**: Red border with focus ring
- **Error Typing**: Red border and icons while typing
- **Error Filled**: Red border with subtle red background
- **Error Disabled**: Red elements with reduced opacity

## Sizes

- **sm**: Small (32px height)
- **md**: Medium (40px height) - Default
- **lg**: Large (48px height)

## Icons

The Input component supports Material-UI icons through the `infoIconComponent` and `dropdownArrowComponent` props.

### Available Icons

You can use any Material-UI icon component:

```tsx
import {
  Info,
  KeyboardArrowDown,
  Search,
  FilterList,
  Help,
  Warning,
} from "@mui/icons-material";
```

### Icon Examples

```tsx
// Search input
<Input
  infoIconComponent={Search}
  showDropdownArrow={false}
  placeholder="Search..."
/>

// Filter input
<Input
  infoIconComponent={FilterList}
  placeholder="Filter options..."
/>

// Help input
<Input
  infoIconComponent={Help}
  placeholder="Get help..."
/>

// Warning input
<Input
  infoIconComponent={Warning}
  error
  placeholder="Warning input..."
/>
```

## Design Tokens

The component uses CSS variables from the design system:

- Colors: `--color-blue-*`, `--color-gray-*`, `--color-red-*`, etc.
- Spacing: `--spacing-*`
- Border radius: `--radius-*`
- Font sizes: `--font-size-*`
- Font weights: `--font-weight-*`

## Accessibility

- Proper focus states with outline
- Disabled state handling
- ARIA attributes support
- Keyboard navigation support
- Screen reader friendly

## Examples

### All Variants

```tsx
<div>
  <Input variant="default" placeholder="Default input" />
  <Input variant="filled" placeholder="Filled input" />
  <Input variant="unstyled" placeholder="Unstyled input" />
</div>
```

### All States

```tsx
<div>
  <Input state="enabled" placeholder="Enabled" />
  <Input state="focus" placeholder="Focus" />
  <Input state="typing" value="Typing" placeholder="Typing" />
  <Input state="filled" value="Filled" placeholder="Filled" />
  <Input state="disabled" placeholder="Disabled" />
</div>
```

### All Sizes

```tsx
<div>
  <Input size="sm" placeholder="Small input" />
  <Input size="md" placeholder="Medium input" />
  <Input size="lg" placeholder="Large input" />
</div>
```

### Error States

```tsx
<div>
  <Input error placeholder="Error input" />
  <Input variant="filled" error placeholder="Filled error input" />
  <Input variant="unstyled" error placeholder="Unstyled error input" />
</div>
```

### With Material-UI Icons

```tsx
import { Search, FilterList, Info } from "@mui/icons-material";

<div>
  <Input
    infoIconComponent={Search}
    showDropdownArrow={false}
    placeholder="Search..."
  />
  <Input infoIconComponent={FilterList} placeholder="Filter..." />
  <Input infoIconComponent={Info} placeholder="Info input..." />
</div>;
```

### Different Input Types

```tsx
<div>
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="number" placeholder="Number input" />
  <Input type="tel" placeholder="Phone input" />
  <Input type="url" placeholder="URL input" />
</div>
```
