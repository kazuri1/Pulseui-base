# Badge Component

A versatile badge component that supports multiple variants, sizes, and icon options. The Badge component is designed to display short pieces of information, status indicators, or labels in a compact and visually appealing way.

## Features

- **Multiple Variants**: Including a unique "dot" variant with a left-aligned dot
- **All Sizes**: From xs to xl for different use cases
- **Icon Support**: Left and right icon props for enhanced visual communication
- **Interactive**: Optional click handler for interactive badges
- **Accessible**: Proper ARIA attributes and keyboard navigation support
- **Customizable**: Full styling customization through sx props

## Variants

### Dot (Default)

The default variant with a small dot on the left side, center-aligned with the text.

```tsx
<Badge>BADGE</Badge>
<Badge variant="dot">BADGE</Badge>
```

### Filled

Solid background with high contrast text.

```tsx
<Badge variant="filled">FILLED</Badge>
```

### Subtle

Light background with colored text.

```tsx
<Badge variant="subtle">SUBTLE</Badge>
```

### Light

Transparent background with colored text.

```tsx
<Badge variant="light">LIGHT</Badge>
```

### Outline

Bordered style with transparent background.

```tsx
<Badge variant="outline">OUTLINE</Badge>
```

### White

White background with colored text.

```tsx
<Badge variant="white">WHITE</Badge>
```

### Default

Standard gray styling.

```tsx
<Badge variant="default">DEFAULT</Badge>
```

## Sizes

The Badge component supports five different sizes:

```tsx
<Badge size="xs">XS</Badge>
<Badge size="sm">SM</Badge>
<Badge size="md">MD</Badge>
<Badge size="lg">LG</Badge>
<Badge size="xl">XL</Badge>
```

## Icons

### Left Icon

Add an icon to the left side of the badge:

```tsx
import { Add } from '../Icon/IconSet';

<Badge leftIcon={Add}>BADGE</Badge>

// Or using string
<Badge leftIcon="add">BADGE</Badge>
```

### Right Icon

Add an icon to the right side of the badge:

```tsx
import { Close } from '../Icon/IconSet';

<Badge rightIcon={Close}>BADGE</Badge>

// Or using string
<Badge rightIcon="close">BADGE</Badge>
```

### Both Icons

Combine left and right icons:

```tsx
import { Search, Settings } from '../Icon/IconSet';

<Badge leftIcon={Search} rightIcon={Settings}>BADGE</Badge>

// Or using strings
<Badge leftIcon="search" rightIcon="settings">BADGE</Badge>
```

### Available Icon Strings

You can use these string values for icons:

- `"add"` - Add icon
- `"remove"` - Remove icon
- `"edit"` - Edit icon
- `"delete"` - Delete icon
- `"search"` - Search icon
- `"filter"` - Filter icon
- `"refresh"` - Refresh icon
- `"settings"` - Settings icon
- `"close"` - Close icon
- `"check"` - Check icon
- `"warning"` - Warning icon
- `"info"` - Info icon
- `"star"` - Star icon
- `"heart"` - Heart icon
- `"share"` - Share icon
- `"download"` - Download icon
- `"upload"` - Upload icon
- `"none"` - No icon

## Interactive Badges

Make badges clickable by providing an onClick handler:

```tsx
<Badge onClick={() => console.log("Badge clicked!")}>CLICKABLE</Badge>
```

## States

### Disabled

Disable the badge interaction:

```tsx
<Badge disabled>DISABLED</Badge>
```

### Hover State

Apply hover styling programmatically:

```tsx
<Badge state="hover">HOVER</Badge>
```

## Props

| Prop        | Type                                                                            | Default     | Description                                                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `React.ReactNode`                                                               | -           | Badge content                                                                                                                                                                                                             |
| `variant`   | `"dot" \| "filled" \| "subtle" \| "light" \| "outline" \| "white" \| "default"` | `"dot"`     | Badge variant style                                                                                                                                                                                                       |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                          | `"md"`      | Badge size                                                                                                                                                                                                                |
| `leftIcon`  | `SvgIconComponent \| string`                                                    | -           | Left icon component or string. String options: "none", "add", "remove", "edit", "delete", "search", "filter", "refresh", "settings", "close", "check", "warning", "info", "star", "heart", "share", "download", "upload"  |
| `rightIcon` | `SvgIconComponent \| string`                                                    | -           | Right icon component or string. String options: "none", "add", "remove", "edit", "delete", "search", "filter", "refresh", "settings", "close", "check", "warning", "info", "star", "heart", "share", "download", "upload" |
| `state`     | `"default" \| "hover" \| "disabled"`                                            | `"default"` | Badge state                                                                                                                                                                                                               |
| `disabled`  | `boolean`                                                                       | `false`     | Disabled state                                                                                                                                                                                                            |
| `onClick`   | `() => void`                                                                    | -           | Click handler                                                                                                                                                                                                             |
| `className` | `string`                                                                        | -           | Additional CSS class                                                                                                                                                                                                      |
| `sx`        | `SxProps`                                                                       | -           | Style props                                                                                                                                                                                                               |
| `style`     | `React.CSSProperties`                                                           | -           | Inline styles                                                                                                                                                                                                             |

## Examples

### Status Indicators

```tsx
<Badge variant="dot">ONLINE</Badge>
<Badge variant="filled">NEW</Badge>
<Badge variant="subtle">BETA</Badge>
```

### With Icons

```tsx
<Badge leftIcon={Add} variant="filled">ADD ITEM</Badge>
<Badge rightIcon={Close} variant="outline">REMOVE</Badge>
```

### Different Sizes

```tsx
<Badge size="xs">XS</Badge>
<Badge size="sm">SM</Badge>
<Badge size="md">MD</Badge>
<Badge size="lg">LG</Badge>
<Badge size="xl">XL</Badge>
```

### Interactive

```tsx
<Badge onClick={handleRemove} rightIcon={Close}>
  REMOVE
</Badge>
```

## Styling

The Badge component uses CSS modules and supports the sx prop system for custom styling:

```tsx
<Badge
  sx={{
    backgroundColor: "red",
    color: "white",
    borderRadius: "4px",
  }}
>
  CUSTOM
</Badge>
```

## Accessibility

- Proper ARIA attributes when used as buttons
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios for all variants
- Focus indicators for interactive badges

## Design Tokens

The Badge component uses the design system tokens for consistent spacing, colors, and typography:

- Colors: Blue scale for primary variants
- Spacing: Consistent padding and gaps
- Typography: Medium font weight for emphasis
- Border radius: Full radius for pill shape
- Motion: Fast transitions for interactions
