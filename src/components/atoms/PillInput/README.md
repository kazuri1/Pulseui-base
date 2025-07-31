# PillInput Component

A specialized input component that uses the Input component as a wrapper and allows adding/removing pills/tags. Perfect for tag management, email recipients, or any scenario where you need to collect multiple values.

## Features

- **Input Wrapper**: Uses the existing Input component as a base
- **Pill Management**: Add pills by typing and pressing Enter or comma
- **Remove Pills**: Click the X button on pills or press Backspace on empty input
- **Size Variants**: Different sizes for both input and pills
- **State Management**: Supports all Input states (enabled, disabled, error, etc.)
- **Max Pills**: Optional limit on the number of pills
- **Duplicate Prevention**: Automatically prevents duplicate pills
- **Keyboard Navigation**: Full keyboard support

## Usage

```tsx
import { PillInput } from "@/components/atoms/PillInput";

// Basic usage
<PillInput placeholder="Add tags..." />

// With initial pills
<PillInput
  pills={["React", "TypeScript", "Storybook"]}
  placeholder="Add more tags..."
/>

// With callbacks
<PillInput
  pills={pills}
  onPillsChange={setPills}
  onPillAdd={(pill) => console.log("Added:", pill)}
  onPillRemove={(pill, index) => console.log("Removed:", pill)}
/>

// With size constraints
<PillInput maxPills={5} placeholder="Add up to 5 tags..." />
```

## Props

| Prop            | Type                                                                    | Default         | Description                       |
| --------------- | ----------------------------------------------------------------------- | --------------- | --------------------------------- |
| `pills`         | `string[]`                                                              | `[]`            | Array of pills/tags to display    |
| `placeholder`   | `string`                                                                | `"Add tags..."` | Placeholder text for the input    |
| `variant`       | `"default" \| "filled" \| "unstyled"`                                   | `"default"`     | Input variant style               |
| `size`          | `"sm" \| "md" \| "lg" \| "xl"`                                          | `"md"`          | Input size                        |
| `pillSize`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                  | `"sm"`          | Pill size                         |
| `state`         | `"enabled" \| "focus" \| "typing" \| "filled" \| "disabled" \| "error"` | `"enabled"`     | Input state                       |
| `disabled`      | `boolean`                                                               | `false`         | Whether the input is disabled     |
| `readonly`      | `boolean`                                                               | `false`         | Whether the input is readonly     |
| `required`      | `boolean`                                                               | `false`         | Whether the field is required     |
| `maxPills`      | `number`                                                                | -               | Maximum number of pills allowed   |
| `onPillsChange` | `(pills: string[]) => void`                                             | -               | Callback when pills array changes |
| `onPillRemove`  | `(pill: string, index: number) => void`                                 | -               | Callback when a pill is removed   |
| `onPillAdd`     | `(pill: string) => void`                                                | -               | Callback when a pill is added     |
| `className`     | `string`                                                                | `""`            | Additional CSS classes            |
| `name`          | `string`                                                                | -               | Input name                        |
| `id`            | `string`                                                                | -               | Input id                          |

## Keyboard Interactions

- **Enter**: Add the current input as a pill
- **Comma (,)** : Add the current input as a pill
- **Backspace**: Remove the last pill when input is empty
- **Tab**: Add pill on blur if input has value

## Examples

### Basic Tag Input

```tsx
<PillInput placeholder="Add skills..." />
```

### Email Recipients

```tsx
<PillInput
  pills={emails}
  onPillsChange={setEmails}
  placeholder="Add email addresses..."
  maxPills={10}
/>
```

### Categories with Validation

```tsx
<PillInput
  pills={categories}
  onPillsChange={setCategories}
  placeholder="Add categories..."
  state={hasError ? "error" : "enabled"}
/>
```

### Different Sizes

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <PillInput size="sm" pillSize="xs" placeholder="Small" />
  <PillInput size="md" pillSize="sm" placeholder="Medium" />
  <PillInput size="lg" pillSize="md" placeholder="Large" />
</div>
```

## Styling

The component uses CSS modules and follows the design system tokens for:

- Colors
- Spacing
- Typography
- Border radius
- Motion (instant transitions)

## Accessibility

- Proper ARIA labels for pill removal
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Disabled state handling
