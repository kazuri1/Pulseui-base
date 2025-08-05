# TableOfContents

A flexible and accessible table of contents component with scroll spy functionality, multiple variants, and customizable styling.

## Features

- **Three Variants**: `filled`, `light`, and `subtle` for different visual styles
- **Multiple Sizes**: `sm`, `md`, and `lg` for different use cases
- **Scroll Spy**: Automatic highlighting of current section while scrolling
- **Flat Structure**: All items appear at the same level without nesting
- **Numbered Items**: Optional item numbering for better organization
- **Smooth Scrolling**: Smooth scroll to target sections when clicked
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Customizable**: Extensive styling options with sx props

## Usage

```tsx
import { TableOfContents } from "pulseui-base";
import type { TableOfContentsItem } from "pulseui-base";

const items: TableOfContentsItem[] = [
  {
    id: "introduction",
    label: "Introduction",
  },
  {
    id: "getting-started",
    label: "Getting Started",
  },
  {
    id: "installation",
    label: "Installation",
  },
  {
    id: "configuration",
    label: "Configuration",
  },
];

function MyComponent() {
  return (
    <TableOfContents
      items={items}
      variant="light"
      size="md"
      enableScrollSpy={true}
      onItemClick={(item) => console.log("Clicked:", item)}
    />
  );
}
```

## Props

| Prop Name         | Type                                  | Default   | Description                                  |
| ----------------- | ------------------------------------- | --------- | -------------------------------------------- |
| `items`           | `TableOfContentsItem[]`               | -         | Array of table of contents items             |
| `variant`         | `"filled" \| "light" \| "subtle"`     | `"light"` | Visual style variant                         |
| `size`            | `"sm" \| "md" \| "lg"`                | `"md"`    | Component size                               |
| `showNumbers`     | `boolean`                             | `false`   | Whether to show item numbers                 |
| `maxItems`        | `number`                              | `6`       | Maximum number of items to display           |
| `compact`         | `boolean`                             | `false`   | Whether to use compact spacing between items |
| `activeId`        | `string`                              | -         | Currently active item ID                     |
| `onItemClick`     | `(item: TableOfContentsItem) => void` | -         | Callback when item is clicked                |
| `enableScrollSpy` | `boolean`                             | `false`   | Enable scroll spy functionality              |
| `scrollOffset`    | `number`                              | `100`     | Offset for scroll spy (in pixels)            |
| `className`       | `string`                              | -         | Custom CSS class name                        |
| `sx`              | `SxProps`                             | -         | Custom styles object                         |
| `style`           | `React.CSSProperties`                 | -         | Inline styles                                |

## Variants

### Filled

A solid background with borders and shadows. Best for prominent navigation.

```tsx
<TableOfContents items={items} variant="filled" />
```

### Light

A subtle background with light borders. Good for sidebar navigation.

```tsx
<TableOfContents items={items} variant="light" />
```

### Subtle

Minimal styling with left border indicator for active items. Perfect for clean layouts.

```tsx
<TableOfContents items={items} variant="subtle" />
```

## Sizes

### Small

Compact size for tight spaces.

```tsx
<TableOfContents items={items} size="sm" />
```

### Medium

Default size for most use cases.

```tsx
<TableOfContents items={items} size="md" />
```

### Large

Prominent size for main navigation.

```tsx
<TableOfContents items={items} size="lg" />
```

## Features

### Scroll Spy

Automatically highlights the current section based on scroll position.

```tsx
<TableOfContents items={items} enableScrollSpy={true} scrollOffset={100} />
```

### Numbered Items

Display item numbers for better organization.

```tsx
<TableOfContents items={items} showNumbers={true} />
```

### Limited Items

Limit the number of items displayed.

```tsx
<TableOfContents items={items} maxItems={4} />
```

### Compact Spacing

Reduce the spacing between items for a more compact layout.

```tsx
<TableOfContents items={items} compact={true} />
```

### Custom Styling

Apply custom styles using sx props.

```tsx
<TableOfContents
  items={items}
  sx={{
    backgroundColor: "var(--color-surface-secondary)",
    borderRadius: "var(--radius-lg)",
  }}
/>
```

## TableOfContentsItem Interface

```tsx
interface TableOfContentsItem {
  /** Unique identifier for the item */
  id: string;
  /** Display text for the item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Optional icon for the item */
  icon?: React.ReactNode;
}
```

## Examples

### Basic Usage

```tsx
const items = [
  { id: "intro", label: "Introduction" },
  { id: "setup", label: "Setup" },
  { id: "install", label: "Installation" },
];

<TableOfContents items={items} />;
```

### With Scroll Spy

```tsx
<TableOfContents
  items={items}
  enableScrollSpy={true}
  scrollOffset={80}
  onItemClick={(item) => {
    // Custom click handling
    console.log("Navigating to:", item.label);
  }}
/>
```

### With Icons

```tsx
import { Home, Settings, Info } from "pulseui-base";

const items = [
  { id: "home", label: "Home", depth: 1, icon: <Home /> },
  { id: "settings", label: "Settings", depth: 1, icon: <Settings /> },
  { id: "about", label: "About", depth: 1, icon: <Info /> },
];

<TableOfContents items={items} />;
```

### Responsive Design

The component automatically adapts to different screen sizes and maintains readability on mobile devices.

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- High contrast support
- Reduced motion support

## Performance

- Efficient scroll event handling with throttling
- Minimal re-renders with React.memo optimization
- Lightweight DOM structure
- Optimized for large lists

## Browser Support

- Modern browsers with ES6+ support
- IE11+ with polyfills
- Mobile browsers
- Screen readers
