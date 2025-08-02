# PinInput

A specialized input component for entering PIN codes, verification codes, and other numeric sequences. Built on top of the base Input component with additional masking and validation features.

## Features

- **Numeric-only input**: Automatically filters non-numeric characters
- **Configurable length**: Set the number of digits (default: 4)
- **Input masking**: Option to mask input with asterisks (default: true)
- **All input sizes**: Supports sm, md, lg, xl sizes
- **Accessibility**: Proper ARIA labels and input modes
- **Mobile-friendly**: Uses `inputMode="numeric"` for better mobile keyboards

## Usage

```tsx
import { PinInput } from "../atoms/PinInput";

// Basic usage
<PinInput
  label="PIN Code"
  value={pin}
  onChange={setPin}
/>

// 6-digit verification code
<PinInput
  label="Verification Code"
  length={6}
  caption="Enter the code sent to your phone"
  value={code}
  onChange={setCode}
/>

// Unmasked PIN for visibility
<PinInput
  label="Visible PIN"
  mask={false}
  value={pin}
  onChange={setPin}
/>
```

## Props

| Prop          | Type                                                  | Default | Description                                         |
| ------------- | ----------------------------------------------------- | ------- | --------------------------------------------------- |
| `label`       | `string`                                              | -       | Input label                                         |
| `required`    | `boolean`                                             | `false` | Whether the field is required                       |
| `placeholder` | `string`                                              | -       | Custom placeholder (auto-generated if not provided) |
| `caption`     | `string`                                              | -       | Caption text below the input                        |
| `error`       | `string`                                              | -       | Error message to display                            |
| `value`       | `string`                                              | `""`    | Input value                                         |
| `disabled`    | `boolean`                                             | `false` | Whether the input is disabled                       |
| `name`        | `string`                                              | -       | Input name attribute                                |
| `id`          | `string`                                              | -       | Input id attribute                                  |
| `onChange`    | `(value: string) => void`                             | -       | Callback fired when input value changes             |
| `onFocus`     | `(event: React.FocusEvent<HTMLInputElement>) => void` | -       | Callback fired when input is focused                |
| `onBlur`      | `(event: React.FocusEvent<HTMLInputElement>) => void` | -       | Callback fired when input loses focus               |
| `length`      | `number`                                              | `4`     | Number of PIN digits                                |
| `mask`        | `boolean`                                             | `true`  | Whether to mask the PIN input                       |
| `size`        | `"sm" \| "md" \| "lg" \| "xl"`                        | `"md"`  | Input size                                          |
| `readonly`    | `boolean`                                             | `false` | Whether the input is readonly                       |

## Examples

### Different Lengths

```tsx
// 3-digit PIN
<PinInput length={3} label="3-Digit PIN" />

// 4-digit PIN (default)
<PinInput length={4} label="4-Digit PIN" />

// 6-digit verification code
<PinInput length={6} label="6-Digit Code" />

// 8-digit security code
<PinInput length={8} label="8-Digit Code" />
```

### All Sizes

```tsx
<PinInput size="sm" label="Small PIN" />
<PinInput size="md" label="Medium PIN" />
<PinInput size="lg" label="Large PIN" />
<PinInput size="xl" label="Extra Large PIN" />
```

### Masked vs Unmasked

```tsx
// Masked (default) - shows asterisks
<PinInput mask={true} label="Masked PIN" />

// Unmasked - shows actual digits
<PinInput mask={false} label="Visible PIN" />
```

### With Validation

```tsx
const [pin, setPin] = useState("");
const [error, setError] = useState("");

const handlePinChange = (value: string) => {
  setPin(value);

  if (value.length === 4 && value !== "1234") {
    setError("Invalid PIN code");
  } else {
    setError("");
  }
};

<PinInput
  label="Security PIN"
  value={pin}
  onChange={handlePinChange}
  error={error}
  required
/>;
```

## Styling

The component uses the design system tokens and inherits styles from the base Input component. Key styling features:

- **Monospace font**: Uses `var(--font-family-mono)` for consistent digit spacing
- **Center alignment**: Text is centered for better visual balance
- **Letter spacing**: Adds spacing between characters for better readability
- **Responsive**: Adapts to different screen sizes

## Accessibility

- Proper `inputMode="numeric"` for mobile keyboards
- `pattern="[0-9]*"` for numeric input validation
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly

## Technical Details

- Built on top of the base Input component
- Uses controlled input pattern
- Automatically filters non-numeric characters
- Limits input to specified length
- Handles masking with asterisks
- Supports all Input component props
