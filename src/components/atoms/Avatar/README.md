# Avatar Component

A versatile avatar component that supports three types: initials, icons, and images. The component is fully theme-aware and responsive to light/dark mode changes.

## Features

- **Three Types**: Initial, Icon, and Image
- **Five Sizes**: xs, sm, md, lg, xl
- **Six Variants**: primary, secondary, success, warning, error, muted
- **Interactive Mode**: Optional click handling with hover effects
- **Image Fallback**: Automatic fallback to initials if image fails to load
- **Theme Aware**: Properly responds to light/dark theme changes
- **Accessible**: Proper ARIA attributes and keyboard navigation

## Usage

### Basic Initial Avatar

```tsx
import { Avatar } from "./Avatar";

<Avatar type="initial" initials="JD" variant="primary" />;
```

### Icon Avatar

```tsx
import { Avatar } from "./Avatar";
import { Person } from "../Icon/IconSet";

<Avatar type="icon" icon={Person} variant="secondary" />;
```

### Image Avatar

```tsx
import { Avatar } from "./Avatar";

<Avatar
  type="image"
  src="https://example.com/avatar.jpg"
  alt="John Doe"
  initials="JD"
  variant="primary"
/>;
```

### Interactive Avatar

```tsx
import { Avatar } from "./Avatar";

<Avatar
  type="initial"
  initials="JD"
  variant="primary"
  interactive
  onClick={() => console.log("Avatar clicked!")}
/>;
```

## Props

| Prop          | Type                                                                       | Default     | Description                                   |
| ------------- | -------------------------------------------------------------------------- | ----------- | --------------------------------------------- |
| `type`        | `"initial" \| "icon" \| "image"`                                           | `"initial"` | The type of avatar to display                 |
| `size`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                     | `"md"`      | The size of the avatar                        |
| `initials`    | `string`                                                                   | `"AV"`      | The initials to display (for initial type)    |
| `icon`        | `React.ComponentType<any>`                                                 | `Person`    | The icon component to display (for icon type) |
| `src`         | `string`                                                                   | -           | The image source URL (for image type)         |
| `alt`         | `string`                                                                   | -           | Alt text for the image (for image type)       |
| `variant`     | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "muted"` | `"primary"` | The color variant                             |
| `className`   | `string`                                                                   | `""`        | Additional CSS classes                        |
| `onClick`     | `() => void`                                                               | -           | Click handler (when interactive)              |
| `interactive` | `boolean`                                                                  | `false`     | Whether the avatar is clickable               |

## Sizes

- **xs**: 24px × 24px
- **sm**: 32px × 32px
- **md**: 40px × 40px
- **lg**: 48px × 48px
- **xl**: 64px × 64px

## Variants

- **primary**: Blue background with white text
- **secondary**: Light background with dark text
- **success**: Green background with white text
- **warning**: Yellow background with white text
- **error**: Red background with white text
- **muted**: Gray background with muted text

## Theme Support

The Avatar component automatically adapts to theme changes:

- **Light Theme**: Uses light backgrounds and dark text
- **Dark Theme**: Uses dark backgrounds and light text
- **All variants** respond appropriately to theme changes

## Accessibility

- Proper ARIA attributes when interactive
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios maintained

## Image Fallback

When using the image type, if the image fails to load, the component automatically falls back to displaying the initials. This ensures a consistent user experience even when images are unavailable.
