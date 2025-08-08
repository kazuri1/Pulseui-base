# Drawer Component

A versatile drawer component that slides in from different directions with customizable content and scroll behavior.

## Features

- **Multiple Directions**: Slide in from right, left, bottom, or top
- **Customizable Scroll**: Enable or disable scrolling for content
- **Optional Title**: Show or hide the drawer title
- **Close Functionality**: Close button, backdrop click, and escape key support
- **Accessibility**: Full ARIA support and keyboard navigation
- **Responsive Design**: Adapts to different screen sizes
- **Design System Compliant**: Uses design tokens and follows established patterns

## Usage

```tsx
import { Drawer } from "@/components/atoms/Drawer";

function MyComponent() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <button onClick={() => setShowDrawer(true)}>
        Open Drawer
      </button>
      
      <Drawer
        show={showDrawer}
        title="My Drawer"
        direction="right"
        onClose={() => setShowDrawer(false)}
      >
        <div>Drawer content goes here</div>
      </Drawer>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Drawer content |
| `title` | `string` | - | Drawer title |
| `showTitle` | `boolean` | `true` | Whether to show the title |
| `show` | `boolean` | `false` | Whether to show the drawer |
| `direction` | `"right" \| "left" \| "bottom" \| "top"` | `"right"` | Drawer direction |
| `showScroll` | `boolean` | `true` | Whether to show scroll |
| `showClose` | `boolean` | `true` | Whether to show the close button |
| `onClose` | `() => void` | - | Close handler |
| `disabled` | `boolean` | `false` | Whether the drawer is disabled |
| `closeOnBackdropClick` | `boolean` | `true` | Whether to close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Whether to close on escape key |
| `id` | `string` | - | Unique identifier |

## Examples

### Basic Drawer

```tsx
<Drawer
  show={true}
  title="Basic Drawer"
  direction="right"
  onClose={() => setShowDrawer(false)}
>
  <div>
    <p>This is a basic drawer with title and content.</p>
    <p>You can put any content here.</p>
  </div>
</Drawer>
```

### Drawer with Different Directions

```tsx
// Right drawer (default)
<Drawer direction="right" show={true} title="Right Drawer">
  <div>Content slides in from the right</div>
</Drawer>

// Left drawer
<Drawer direction="left" show={true} title="Left Drawer">
  <div>Content slides in from the left</div>
</Drawer>

// Bottom drawer
<Drawer direction="bottom" show={true} title="Bottom Drawer">
  <div>Content slides in from the bottom</div>
</Drawer>

// Top drawer
<Drawer direction="top" show={true} title="Top Drawer">
  <div>Content slides in from the top</div>
</Drawer>
```

### Drawer with Scroll

```tsx
<Drawer
  show={true}
  title="Scrollable Drawer"
  direction="right"
  showScroll={true}
  onClose={() => setShowDrawer(false)}
>
  <div>
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} style={{ marginBottom: "16px" }}>
        <h4>Section {i + 1}</h4>
        <p>This is section {i + 1} of the drawer content.</p>
      </div>
    ))}
  </div>
</Drawer>
```

### Drawer without Title

```tsx
<Drawer
  show={true}
  showTitle={false}
  direction="right"
  onClose={() => setShowDrawer(false)}
>
  <div>
    <p>This drawer doesn't have a title.</p>
    <p>Sometimes you might want a drawer without a title for a cleaner look.</p>
  </div>
</Drawer>
```

### Drawer without Close Button

```tsx
<Drawer
  show={true}
  title="Drawer Without Close Button"
  direction="right"
  showClose={false}
  onClose={() => setShowDrawer(false)}
>
  <div>
    <p>This drawer doesn't have a close button.</p>
    <p>Use this when you want to force users to interact with the content to close the drawer.</p>
  </div>
</Drawer>
```

### Drawer without Scroll

```tsx
<Drawer
  show={true}
  title="Drawer Without Scroll"
  direction="right"
  showScroll={false}
  onClose={() => setShowDrawer(false)}
>
  <div>
    <p>This drawer has scroll disabled.</p>
    <p>Content that exceeds the drawer height will be clipped.</p>
  </div>
</Drawer>
```

## Accessibility

The Drawer component includes full accessibility support:

- **ARIA Attributes**: Proper `role="dialog"`, `aria-modal`, and `aria-labelledby` attributes
- **Keyboard Navigation**: Escape key to close the drawer
- **Focus Management**: Focus is trapped within the drawer when open
- **Screen Reader Support**: Proper labeling and announcements

## Design System Integration

The Drawer component follows the design system patterns:

- **Design Tokens**: Uses CSS custom properties for colors, spacing, typography, and motion
- **Typography**: Follows the established font family, sizes, and weights
- **Spacing**: Uses consistent spacing tokens throughout
- **Motion**: Smooth animations using design system motion tokens
- **Colors**: Adapts to light/dark themes automatically

## Responsive Behavior

- **Mobile**: Drawers take full width/height on mobile devices
- **Tablet**: Maintains reasonable max-width/height constraints
- **Desktop**: Uses fixed dimensions with max-width/height constraints

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- IE11+ with appropriate polyfills
- Mobile browsers with touch support
