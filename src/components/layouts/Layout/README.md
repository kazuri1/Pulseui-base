# Layout Component

The Layout component provides a global structure with the SimpleTopNav component that stays consistent across all pages. It's designed to be used as a wrapper for your entire application, handling theme initialization, responsive behavior, and consistent spacing.

## Features

- **Global Navigation**: Includes SimpleTopNav component that appears on all pages
- **Theme Management**: Automatically initializes brand and theme settings from localStorage
- **Responsive Design**: Adapts to different screen sizes with mobile-friendly navigation
- **Consistent Spacing**: Provides configurable content padding and layout structure
- **Brand Support**: Works seamlessly with PulseUI's multi-brand theming system

## Basic Usage

```tsx
import { Layout } from "pulseui-base";

function App() {
  const navItems = [
    {
      id: "home",
      label: "Home",
      active: true,
      onClick: () => navigateToHome(),
    },
    {
      id: "about",
      label: "About",
      onClick: () => navigateToAbout(),
    },
  ];

  return (
    <Layout navItems={navItems}>
      <YourPageContent />
    </Layout>
  );
}
```

## Advanced Configuration

```tsx
<Layout
  navItems={navItems}
  showTopNav={true}
  applyContentPadding={true}
  minFullHeight={true}
  topNavConfig={{
    useDynamicBrandLogo: true,
    brandLogoSize: "md",
    showBrandText: false,
    brandName: "Your App",
    brandTitle: "Subtitle",
    versionSelector: {
      version: "1.0.0",
      versions: ["0.9.0", "1.0.0", "1.1.0"],
      onVersionChange: (version) => console.log("Version:", version),
      show: true,
    },
    brandSwitcher: {
      show: true,
      size: "sm",
      showDescription: false,
    },
    showThemeSwitcher: true,
  }}
>
  <YourContent />
</Layout>
```

## Props

| Prop                  | Type                 | Default | Description                                       |
| --------------------- | -------------------- | ------- | ------------------------------------------------- |
| `children`            | `ReactNode`          | -       | Content to render in the main area                |
| `navItems`            | `SimpleTopNavItem[]` | `[]`    | Navigation items for the top nav                  |
| `showTopNav`          | `boolean`            | `true`  | Whether to show the top navigation                |
| `applyContentPadding` | `boolean`            | `true`  | Whether to apply padding to the main content area |
| `contentPadding`      | `string`             | -       | Custom padding for the content area               |
| `minFullHeight`       | `boolean`            | `true`  | Whether to apply minimum full viewport height     |
| `topNavConfig`        | `object`             | `{}`    | Configuration object for SimpleTopNav             |

## Layout Structure

The Layout component creates the following structure:

```
┌─────────────────────────────────────┐
│           SimpleTopNav              │ <- Global navigation
├─────────────────────────────────────┤
│                                     │
│           Main Content              │ <- Your page content
│                                     │
│                                     │
└─────────────────────────────────────┘
```

## Content Padding Options

### Default Responsive Padding

```tsx
<Layout applyContentPadding={true}>
  <YourContent />
</Layout>
```

### Custom Padding

```tsx
<Layout applyContentPadding={false} contentPadding="64px">
  <YourContent />
</Layout>
```

### Full Width (No Padding)

```tsx
<Layout applyContentPadding={false}>
  <YourFullWidthContent />
</Layout>
```

## Theme Integration

The Layout component automatically:

1. **Initializes brand settings** from `localStorage.getItem("pulseui-brand")`
2. **Sets theme mode** from `localStorage.getItem("pulseui-theme")`
3. **Applies data attributes** to the document root for CSS theming
4. **Provides brand switcher** and theme switcher in the navigation

## Responsive Behavior

- **Desktop**: Shows full navigation with all items
- **Tablet**: Compact navigation with mobile menu toggle
- **Mobile**: Hamburger menu with slide-out navigation

## Best Practices

1. **Use Layout as your app wrapper**: Place it at the root level of your application
2. **Configure navigation once**: Set up your nav items in the Layout component
3. **Let Layout handle themes**: Don't manually set theme attributes elsewhere
4. **Use consistent spacing**: Rely on Layout's padding system for consistency

## Examples

See the Layout Storybook stories for comprehensive examples of different configurations and use cases.
