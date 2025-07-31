# ActionButton Component

A specialized button component that uses the Button component as a base but only accepts an icon prop instead of text content. Perfect for icon-only action buttons like add, edit, delete, search, etc.

## Features

- **Button Wrapper**: Uses the existing Button component as a base
- **Icon Only**: Designed specifically for icon-only buttons
- **Icon Customization**: Configurable icon size and color
- **Automatic Icon Colors**: Icon color automatically changes based on button variant
- **Button Variants**: Supports all Button variants (filled, outline, subtle, etc.)
- **Size Variants**: Different sizes for both button and icon
- **State Management**: Supports all Button states (default, hover, disabled)
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Usage

```tsx
import { ActionButton } from "@/components/atoms/ActionButton";
import { Add, Edit, Delete } from "@/components/atoms/Icon/IconSet";

// Basic usage
<ActionButton icon={Add} />

// With custom styling
<ActionButton
  icon={Edit}
  variant="outline"
  size="lg"
/>

// With click handler
<ActionButton
  icon={Delete}
  variant="filled"
  onClick={() => handleDelete()}
/>
```

## Props

| Prop        | Type                                                                                    | Default     | Description                    |
| ----------- | --------------------------------------------------------------------------------------- | ----------- | ------------------------------ |
| `icon`      | `SvgIconComponent`                                                                      | -           | **Required** Icon to display   |
| `iconSize`  | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                  | `"md"`      | Size of the icon               |
| `iconColor` | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "muted" \| "inherit"` | `undefined` | Color of the icon (optional)   |
| `variant`   | `"filled" \| "subtle" \| "light" \| "outline" \| "white" \| "default"`                  | `"default"` | Button variant style           |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                  | `"md"`      | Button size                    |
| `state`     | `"default" \| "hover" \| "disabled"`                                                    | `"default"` | Button state                   |
| `disabled`  | `boolean`                                                                               | `false`     | Whether the button is disabled |
| `type`      | `"button" \| "submit" \| "reset"`                                                       | `"button"`  | Button type                    |
| `onClick`   | `() => void`                                                                            | -           | Click handler                  |
| `className` | `string`                                                                                | `""`        | Additional CSS classes         |

## Icon Size Mapping

The component automatically maps button sizes to appropriate icon sizes:

- **xs/sm button** → **sm icon**
- **md button** → **md icon**
- **lg/xl button** → **lg icon**

You can override this by explicitly setting `iconSize`.

## Icon Color Mapping

The component automatically maps button variants to appropriate icon colors:

- **filled variant** → **inherit color** (adapts to button's text color, usually white)
- **white variant** → **primary color**
- **outline variant** → **primary color**
- **subtle variant** → **primary color**
- **light variant** → **primary color**
- **default variant** → **muted color**

You can override this by explicitly setting `iconColor`.

## Examples

### Basic Action Buttons

```tsx
import { Add, Edit, Delete, Search } from "@/components/atoms/Icon/IconSet";

<div style={{ display: "flex", gap: "8px" }}>
  <ActionButton icon={Add} />
  <ActionButton icon={Edit} />
  <ActionButton icon={Delete} />
  <ActionButton icon={Search} />
</div>;
```

### Different Variants (with automatic icon colors)

```tsx
<div style={{ display: "flex", gap: "8px" }}>
  <ActionButton icon={Add} variant="filled" />
  <ActionButton icon={Edit} variant="outline" />
  <ActionButton icon={Delete} variant="subtle" />
  <ActionButton icon={Search} variant="light" />
  <ActionButton icon={Settings} variant="white" />
  <ActionButton icon={Refresh} variant="default" />
</div>
```

### Different Sizes

```tsx
<div style={{ display: "flex", gap: "8px, alignItems: "center" }}>
  <ActionButton icon={Add} size="xs" />
  <ActionButton icon={Edit} size="sm" />
  <ActionButton icon={Delete} size="md" />
  <ActionButton icon={Search} size="lg" />
  <ActionButton icon={Settings} size="xl" />
</div>
```

### Override Icon Color

```tsx
<div style={{ display: "flex", gap: "8px" }}>
  <ActionButton icon={Add} variant="filled" iconColor="primary" />
  <ActionButton icon={Edit} variant="outline" iconColor="error" />
  <ActionButton icon={Delete} variant="subtle" iconColor="warning" />
  <ActionButton icon={Search} variant="light" iconColor="success" />
</div>
```

### With Click Handlers

```tsx
<ActionButton
  icon={Add}
  onClick={() => handleAdd()}
  variant="filled"
/>

<ActionButton
  icon={Delete}
  onClick={() => handleDelete()}
  variant="outline"
/>
```

### Disabled State

```tsx
<ActionButton icon={Edit} disabled onClick={() => handleEdit()} />
```

## Styling

The component uses CSS modules and follows the design system tokens for:

- Colors
- Spacing
- Typography
- Border radius
- Motion (instant transitions)

## Accessibility

- Proper button semantics
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Disabled state handling
- Icon-only button best practices
