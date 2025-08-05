# SingleTab

A single tab component that can be used as part of a tab navigation system.

## Features

- Two variants: `default` and `pill`
- Four positions: `top`, `bottom`, `left`, and `right`
- Four states: `default`, `selected`, `hover`, and `disabled`
- Optional left and right icons
- Customizable placeholder text
- Fully accessible with keyboard navigation
- Responsive design

## Usage

```tsx
import { SingleTab } from "@/components/atoms/SingleTab";

// Basic usage
<SingleTab placeholder="Tab title" />

// With icons
<SingleTab
  placeholder="Settings"
  leftIcon={true}
  rightIcon={Settings}
/>

// Selected state
<SingleTab
  placeholder="Home"
  variant="pill"
  state="selected"
  leftIcon={Home}
/>
```

## Props

| Prop          | Type                                               | Default       | Description                           |
| ------------- | -------------------------------------------------- | ------------- | ------------------------------------- |
| `children`    | `React.ReactNode`                                  | -             | Tab content (overrides placeholder)   |
| `variant`     | `"default" \| "pill"`                              | `"default"`   | Visual style variant                  |
| `position`    | `"top" \| "bottom" \| "left" \| "right"`           | `"top"`       | Tab position                          |
| `state`       | `"default" \| "selected" \| "hover" \| "disabled"` | `"default"`   | Tab state                             |
| `leftIcon`    | `SvgIconComponent \| string \| boolean`            | `false`       | Left icon (true = default info icon)  |
| `rightIcon`   | `SvgIconComponent \| string \| boolean`            | `false`       | Right icon (true = default info icon) |
| `placeholder` | `string`                                           | `"Tab title"` | Default text when no children         |
| `onClick`     | `() => void`                                       | -             | Click handler                         |
| `disabled`    | `boolean`                                          | `false`       | Disabled state                        |
| `className`   | `string`                                           | `""`          | Additional CSS classes                |
| `sx`          | `SxProps`                                          | -             | Style API props                       |
| `style`       | `CSSProperties`                                    | -             | Inline styles                         |

## Variants

### Default

- Clean, minimal design
- Selected state shows blue underline/indicator based on position:
  - `top`: underline at bottom
  - `bottom`: underline at top
  - `left`: underline at right
  - `right`: underline at left
- Best for horizontal and vertical tab navigation

### Pill

- Rounded, pill-shaped design
- Selected state has solid blue background
- Modern, button-like appearance

## States

### Default

- Normal, unselected state
- Hover effects available

### Selected

- Active/current tab state
- Visual emphasis based on variant

### Hover

- Interactive hover state
- Enhanced visual feedback

### Disabled

- Non-interactive state
- Reduced opacity and disabled cursor

## Positions

### Top/Bottom

- Horizontal layout
- Icons positioned to left/right of text

### Left/Right

- Vertical layout
- Icons positioned above/below text
- Text alignment adjusted accordingly

## Icons

Icons can be provided as:

- `boolean`: `true` uses default outline info icon, `false` hides icon
- `string`: Icon name (maps to predefined outline icons)
- `SvgIconComponent`: Direct MUI icon component

### Available String Icons

The following icons are available as strings:

- `info` - InfoOutlined
- `home` - Home
- `settings` - Settings
- `person` - Person
- `search` - Search
- `notifications` - NotificationsNone
- `mail` - MailOutline
- `help` - HelpOutline
- `error` - ErrorOutline
- `warning` - Warning
- `check` - CheckCircle
- `favorite` - FavoriteBorder
- `bookmark` - BookmarkBorder
- `flag` - FlagOutlined
- `lock` - LockOutline

### Example Usage

```tsx
// Using string names
<SingleTab leftIcon="home" placeholder="Home" />
<SingleTab leftIcon="settings" placeholder="Settings" />

// Using boolean (defaults to info icon)
<SingleTab leftIcon={true} placeholder="Info" />

// Using direct component
<SingleTab leftIcon={HomeOutlined} placeholder="Home" />
```

## Accessibility

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Examples

### Basic Tab

```tsx
<SingleTab placeholder="Home" />
```

### Selected Tab with Icon

```tsx
<SingleTab
  placeholder="Settings"
  variant="pill"
  state="selected"
  leftIcon={Settings}
/>
```

### Disabled Tab

```tsx
<SingleTab placeholder="Disabled Tab" state="disabled" leftIcon={true} />
```

### Vertical Tab

```tsx
<SingleTab placeholder="Sidebar Tab" position="left" leftIcon={Home} />
```
