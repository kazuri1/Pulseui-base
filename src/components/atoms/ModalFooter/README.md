# ModalFooter

A footer component for modals with three variants: button-only, primary, and destructive.

## Usage

```tsx
import { ModalFooter } from './ModalFooter';

// Primary variant (default)
<ModalFooter
  variant="primary"
  primaryText="Save"
  secondaryText="Cancel"
  onPrimaryClick={() => console.log('Saved')}
  onSecondaryClick={() => console.log('Cancelled')}
/>

// Destructive variant
<ModalFooter
  variant="destructive"
  primaryText="Delete"
  secondaryText="Cancel"
  onPrimaryClick={() => console.log('Deleted')}
  onSecondaryClick={() => console.log('Cancelled')}
/>

// Button-only variant
<ModalFooter variant="button-only">
  <Button variant="filled">Custom Action</Button>
</ModalFooter>
```

## Props

| Prop                   | Type                                          | Default     | Description                              |
| ---------------------- | --------------------------------------------- | ----------- | ---------------------------------------- |
| `variant`              | `'button-only' \| 'primary' \| 'destructive'` | `'primary'` | Footer variant style                     |
| `primaryText`          | `string`                                      | `'OK'`      | Primary button text                      |
| `secondaryText`        | `string`                                      | `'Cancel'`  | Secondary button text                    |
| `onPrimaryClick`       | `() => void`                                  | -           | Primary button click handler             |
| `onSecondaryClick`     | `() => void`                                  | -           | Secondary button click handler           |
| `primaryDisabled`      | `boolean`                                     | `false`     | Whether the primary button is disabled   |
| `secondaryDisabled`    | `boolean`                                     | `false`     | Whether the secondary button is disabled |
| `primaryLoading`       | `boolean`                                     | `false`     | Whether the primary button is loading    |
| `secondaryLoading`     | `boolean`                                     | `false`     | Whether the secondary button is loading  |
| `primaryButtonProps`   | `ButtonProps`                                 | `{}`        | Custom primary button props              |
| `secondaryButtonProps` | `ButtonProps`                                 | `{}`        | Custom secondary button props            |
| `children`             | `React.ReactNode`                             | -           | Footer content (for button-only variant) |

## Variants

### Button-only

Use this variant when you want to display custom content or a single button. The footer will align content to the left.

### Primary

Shows a default (Cancel) button and a filled (OK) button. Buttons are aligned to the right.

### Destructive

Shows a default (Cancel) button and a filled error (Delete) button. The primary button uses error colors.

## Examples

### Basic Usage

```tsx
<ModalFooter
  onPrimaryClick={() => handleSave()}
  onSecondaryClick={() => handleCancel()}
/>
```

### Custom Text

```tsx
<ModalFooter
  variant="primary"
  primaryText="Confirm"
  secondaryText="Back"
  onPrimaryClick={() => handleConfirm()}
  onSecondaryClick={() => handleBack()}
/>
```

### Disabled State

```tsx
<ModalFooter
  primaryDisabled={true}
  onPrimaryClick={() => handleSave()}
  onSecondaryClick={() => handleCancel()}
/>
```

### Custom Button Props

```tsx
<ModalFooter
  primaryButtonProps={{
    size: "lg",
    leftIcon: "add",
  }}
  secondaryButtonProps={{
    size: "lg",
    variant: "outline",
  }}
  onPrimaryClick={() => handleSave()}
  onSecondaryClick={() => handleCancel()}
/>
```

### Button-only with Custom Content

```tsx
<ModalFooter variant="button-only">
  <Button variant="filled" size="md">
    Save Changes
  </Button>
  <Button variant="outline" size="md">
    Preview
  </Button>
</ModalFooter>
```
