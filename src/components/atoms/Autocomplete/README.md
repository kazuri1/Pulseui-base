# Autocomplete Component

A sophisticated autocomplete component that uses the Input component as a base and provides dropdown suggestions with search functionality. Perfect for selecting from predefined options with filtering capabilities.

## Features

- **Input Wrapper**: Uses the existing Input component as a base
- **Dropdown Suggestions**: Shows filtered options in a dropdown
- **Search & Filter**: Automatically filters options based on input
- **Keyboard Navigation**: Full keyboard support (arrow keys, enter, escape)
- **Icon Support**: Optional icons for each option
- **Size Variants**: Different sizes for input and dropdown
- **State Management**: Supports all Input states (enabled, disabled, error, etc.)
- **Customizable**: Configurable filtering, max suggestions, arrow visibility

## Usage

```tsx
import { Autocomplete } from "@/components/atoms/Autocomplete";

// Basic usage
<Autocomplete
  options={[
    { value: "apple", label: "Apple", icon: "🍎" },
    { value: "banana", label: "Banana", icon: "🍌" }
  ]}
  placeholder="Select a fruit..."
/>

// With callbacks
<Autocomplete
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  onSelect={(option) => console.log("Selected:", option)}
/>

// With custom configuration
<Autocomplete
  options={options}
  maxSuggestions={5}
  filterOptions={false}
  showArrow={false}
/>
```

## Props

| Prop             | Type                                                                    | Default                 | Description                              |
| ---------------- | ----------------------------------------------------------------------- | ----------------------- | ---------------------------------------- |
| `options`        | `AutocompleteOption[]`                                                  | `[]`                    | Array of options to display              |
| `value`          | `string`                                                                | `""`                    | Current input value                      |
| `placeholder`    | `string`                                                                | `"Select an option..."` | Placeholder text                         |
| `variant`        | `"default" \| "filled" \| "unstyled"`                                   | `"default"`             | Input variant style                      |
| `size`           | `"sm" \| "md" \| "lg" \| "xl"`                                          | `"md"`                  | Input size                               |
| `state`          | `"enabled" \| "focus" \| "typing" \| "filled" \| "disabled" \| "error"` | `"enabled"`             | Input state                              |
| `disabled`       | `boolean`                                                               | `false`                 | Whether the input is disabled            |
| `readonly`       | `boolean`                                                               | `false`                 | Whether the input is readonly            |
| `required`       | `boolean`                                                               | `false`                 | Whether the field is required            |
| `showArrow`      | `boolean`                                                               | `true`                  | Whether to show the dropdown arrow       |
| `maxSuggestions` | `number`                                                                | `10`                    | Maximum number of suggestions to show    |
| `filterOptions`  | `boolean`                                                               | `true`                  | Whether to filter options based on input |
| `onChange`       | `(value: string) => void`                                               | -                       | Callback when input value changes        |
| `onSelect`       | `(option: AutocompleteOption) => void`                                  | -                       | Callback when an option is selected      |
| `className`      | `string`                                                                | `""`                    | Additional CSS classes                   |
| `name`           | `string`                                                                | -                       | Input name                               |
| `id`             | `string`                                                                | -                       | Input id                                 |

## AutocompleteOption Interface

```tsx
interface AutocompleteOption {
  value: string; // Unique identifier
  label: string; // Display text
  icon?: string; // Optional icon (emoji or text)
}
```

## Keyboard Interactions

- **Arrow Down**: Open dropdown and navigate down
- **Arrow Up**: Navigate up through options
- **Enter**: Select highlighted option
- **Escape**: Close dropdown
- **Click**: Select option directly
- **Type**: Filter options automatically

## Examples

### Basic Food Selection

```tsx
const foodOptions = [
  { value: "apple", label: "Apple", icon: "🍎" },
  { value: "banana", label: "Banana", icon: "🍌" },
  { value: "cherry", label: "Cherry", icon: "🍒" },
];

<Autocomplete options={foodOptions} placeholder="Choose a fruit..." />;
```

### Country Selection (No Icons)

```tsx
const countryOptions = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

<Autocomplete options={countryOptions} placeholder="Select a country..." />;
```

### Limited Suggestions

```tsx
<Autocomplete
  options={manyOptions}
  maxSuggestions={5}
  placeholder="Select from top 5..."
/>
```

### Without Filtering

```tsx
<Autocomplete
  options={options}
  filterOptions={false}
  placeholder="All options shown..."
/>
```

### Different Sizes

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Autocomplete options={options} size="sm" placeholder="Small" />
  <Autocomplete options={options} size="md" placeholder="Medium" />
  <Autocomplete options={options} size="lg" placeholder="Large" />
</div>
```

## Styling

The component uses CSS modules and follows the design system tokens for:

- Colors
- Spacing
- Typography
- Border radius
- Motion (fast transitions)
- Dropdown animations

## Accessibility

- Proper ARIA labels for dropdown toggle
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Disabled state handling
- Escape key to close dropdown
