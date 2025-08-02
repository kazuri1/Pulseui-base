# PasswordInput Component

A self-contained password input component with visibility toggle functionality.

## Structure

This component is fully self-contained with:

- **Logic**: `PasswordInput.tsx` - Main component logic
- **Tests**: `PasswordInput.test.tsx` - Unit tests
- **Stories**: `PasswordInput.stories.tsx` - Storybook documentation
- **Tokens**: Uses centralized design tokens from `src/styles/_tokens.scss`
- **Dependencies**: Uses TextInput and Input components for styling and functionality

## Features

- ✅ **Self-contained**: All styles, logic, and tokens are contained within the component
- ✅ **Accessible**: Proper ARIA labels and keyboard navigation
- ✅ **Theme-aware**: Supports light and dark themes
- ✅ **Controlled/Uncontrolled**: Supports both controlled and uncontrolled modes
- ✅ **Customizable**: Extensive prop customization options

## Usage

```tsx
import { PasswordInput } from './components/atoms/PasswordInput';

// Basic usage
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  onChange={(value) => console.log(value)}
/>

// With controlled visibility
<PasswordInput
  label="Password"
  passwordVisible={isVisible}
  onPasswordVisibilityChange={setIsVisible}
  onChange={setPassword}
/>

// With error state
<PasswordInput
  label="Password"
  error="Password is required"
  onChange={setPassword}
/>
```

## Props

| Prop                         | Type                                                  | Default | Description                                   |
| ---------------------------- | ----------------------------------------------------- | ------- | --------------------------------------------- |
| `label`                      | `string`                                              | -       | Input label                                   |
| `required`                   | `boolean`                                             | `false` | Whether the field is required                 |
| `placeholder`                | `string`                                              | -       | Input placeholder text                        |
| `caption`                    | `string`                                              | -       | Caption text below the input                  |
| `error`                      | `string`                                              | -       | Error message to display                      |
| `value`                      | `string`                                              | -       | Input value                                   |
| `disabled`                   | `boolean`                                             | `false` | Whether the input is disabled                 |
| `name`                       | `string`                                              | -       | Input name attribute                          |
| `id`                         | `string`                                              | -       | Input id attribute                            |
| `onChange`                   | `(value: string) => void`                             | -       | Callback fired when input value changes       |
| `onFocus`                    | `(event: React.FocusEvent<HTMLInputElement>) => void` | -       | Callback fired when input is focused          |
| `onBlur`                     | `(event: React.FocusEvent<HTMLInputElement>) => void` | -       | Callback fired when input loses focus         |
| `showPasswordToggle`         | `boolean`                                             | `true`  | Whether to show password toggle               |
| `passwordVisible`            | `boolean`                                             | -       | Whether password is visible (controlled mode) |
| `onPasswordVisibilityChange` | `(visible: boolean) => void`                          | -       | Callback when password visibility changes     |

## Design Tokens Used

The component inherits design tokens from the TextInput and Input components:

- **Colors**: `--color-text-primary`, `--color-icon-secondary`, `--color-error`, etc.
- **Spacing**: `--spacing-sm`, `--spacing-xs`
- **Motion**: `--motion-duration-fast`, `--motion-easing-ease-out`
- **Border Radius**: `--radius-sm`
- **Icon Colors**: Uses the Icon component's color system (`muted`, `error`, etc.)

## Icons Used

The component uses Material-UI icons from the centralized IconSet through the Input component:

- `Visibility` - For the "show password" state
- `VisibilityOff` - For the "hide password" state

## Accessibility

- ✅ Proper ARIA labels for the toggle button
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ High contrast support through theme tokens
