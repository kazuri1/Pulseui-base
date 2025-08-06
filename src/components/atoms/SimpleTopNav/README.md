# SimpleTopNav

A clean and modern top navigation component designed for portfolio and professional websites.

## Features

- **Clean Design**: Minimalist design with focus on typography and spacing
- **Brand Section**: Displays brand name, title, and optional logo
- **Navigation Items**: Configurable navigation links with active states
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible props for branding and navigation

## Usage

```tsx
import { SimpleTopNav } from "pulseui-base";

const navItems = [
  {
    id: "work",
    label: "WORK",
    active: false,
  },
  {
    id: "about",
    label: "ABOUT",
    active: true,
  },
  {
    id: "resume",
    label: "RESUME",
    active: false,
  },
];

function App() {
  return (
    <SimpleTopNav
      brandName="VIGNESH VISHNUMOORTHY"
      brandTitle="PRODUCT DESIGNER + ENGINEER"
      items={navItems}
    />
  );
}
```

## Props

| Prop Name        | Type                  | Default                         | Description                            |
| ---------------- | --------------------- | ------------------------------- | -------------------------------------- |
| `brandName`      | `string`              | `"VIGNESH VISHNUMOORTHY"`       | Brand name to display                  |
| `brandTitle`     | `string`              | `"PRODUCT DESIGNER + ENGINEER"` | Brand title/role to display            |
| `brandLogo`      | `React.ReactNode`     | -                               | Brand logo/icon (optional)             |
| `items`          | `SimpleTopNavItem[]`  | `[]`                            | Navigation items                       |
| `showBrand`      | `boolean`             | `true`                          | Whether to show the brand section      |
| `showNavigation` | `boolean`             | `true`                          | Whether to show the navigation section |
| `className`      | `string`              | `""`                            | Custom class name                      |
| `sx`             | `SxProps`             | -                               | Custom styles                          |
| `style`          | `React.CSSProperties` | -                               | Inline styles                          |

## SimpleTopNavItem Interface

```tsx
interface SimpleTopNavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display text for the nav item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Click handler for the nav item */
  onClick?: () => void;
  /** URL for navigation (optional) */
  href?: string;
}
```

## Examples

### Basic Usage

```tsx
<SimpleTopNav
  items={[
    { id: "work", label: "WORK", active: false },
    { id: "about", label: "ABOUT", active: true },
    { id: "resume", label: "RESUME", active: false },
  ]}
/>
```

### With Custom Brand

```tsx
<SimpleTopNav
  brandName="JOHN DOE"
  brandTitle="FULL-STACK DEVELOPER"
  items={navItems}
/>
```

### With Custom Logo

```tsx
<SimpleTopNav
  brandLogo={
    <div
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: "blue",
        borderRadius: "50%",
      }}
    >
      JD
    </div>
  }
  items={navItems}
/>
```

### With Click Handlers

```tsx
<SimpleTopNav
  items={[
    {
      id: "work",
      label: "WORK",
      active: false,
      onClick: () => console.log("Work clicked"),
    },
    {
      id: "about",
      label: "ABOUT",
      active: true,
      onClick: () => console.log("About clicked"),
    },
  ]}
/>
```

### With Links

```tsx
<SimpleTopNav
  items={[
    {
      id: "work",
      label: "WORK",
      active: false,
      href: "/work",
    },
    {
      id: "about",
      label: "ABOUT",
      active: true,
      href: "/about",
    },
  ]}
/>
```

### Without Brand Section

```tsx
<SimpleTopNav showBrand={false} items={navItems} />
```

### Without Navigation Section

```tsx
<SimpleTopNav showNavigation={false} />
```

## Styling

The SimpleTopNav component uses CSS modules and follows the design system tokens. Key styling features:

- **Typography**: Uses system fonts with proper letter spacing
- **Colors**: Follows the design system color palette
- **Spacing**: Uses consistent spacing tokens
- **Responsive**: Adapts to mobile and tablet screens
- **Accessibility**: Proper focus states and keyboard navigation

## Accessibility

- **Semantic HTML**: Uses proper `nav` element
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA attributes
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets WCAG guidelines

## Browser Support

- Modern browsers with ES6+ support
- IE11+ with polyfills
- Mobile browsers
- Screen readers
