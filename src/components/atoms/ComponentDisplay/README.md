# ComponentDisplay

A comprehensive documentation component that displays React components with interactive previews, code examples, props documentation, and automatic Storybook documentation embedding. The component intelligently handles different types of components, providing an optimal viewing experience for both small and large overlay components.

## Features

- **Smart Component Rendering**: Automatically detects large overlay components (Modal, Drawer) and shows a button to open them instead of rendering directly
- **Dedicated Preview Box**: All components are displayed within a dedicated, styled container for better visual organization
- **Tabbed Interface**: Organized tabs for Preview, Code, Props, Stories, and Interactive Documentation
- **Automatic Storybook Integration**: Automatically infers Storybook URLs and story IDs when stories are provided
- **No Storybook Dependencies**: Core component rendering works without requiring Storybook
- **Responsive Design**: Adapts to different screen sizes and component types
- **Interactive Documentation**: Embeds live Storybook documentation when available

## Basic Usage

```tsx
import { ComponentDisplay } from "pulseui-base";
import { Button } from "pulseui-base";
import buttonStories from "./Button.stories";

function DocumentationPage() {
  return (
    <ComponentDisplay
      title="Button Component"
      description="A versatile button component with multiple variants and sizes."
      component={Button}
      props={{ children: "Click me", variant: "filled", size: "md" }}
      stories={buttonStories}
    />
  );
}
```

## Available Props

| Prop                | Type                            | Required | Default       | Description                                |
| ------------------- | ------------------------------- | -------- | ------------- | ------------------------------------------ |
| `title`             | `string`                        | ✅       | -             | The main title of the component            |
| `description`       | `string`                        | ❌       | -             | Description of the component functionality |
| `component`         | `React.ComponentType<any>`      | ✅       | -             | The React component to display             |
| `props`             | `Record<string, any>`           | ❌       | `{}`          | Props to pass to the component             |
| `stories`           | `React.ComponentType<any>`      | ❌       | -             | Storybook stories for the component        |
| `storybookUrl`      | `string`                        | ❌       | auto-inferred | Custom Storybook URL                       |
| `storyId`           | `string`                        | ❌       | auto-inferred | Custom story ID                            |
| `storybookViewMode` | `'docs' \| 'story' \| 'canvas'` | ❌       | `'docs'`      | Storybook view mode                        |
| `showCode`          | `boolean`                       | ❌       | `true`        | Whether to show the code tab               |
| `showProps`         | `boolean`                       | ❌       | `true`        | Whether to show the props tab              |
| `showStories`       | `boolean`                       | ❌       | `true`        | Whether to show the stories tab            |

## Smart Component Handling

### Regular Components

Small components like Button, Input, Card, etc. are rendered directly within the preview box:

```tsx
<ComponentDisplay
  title="Button Example"
  component={Button}
  props={{ children: "Hello World" }}
/>
```

### Large Overlay Components

Large components like Modal and Drawer are handled intelligently:

- **Modal**: Shows a button labeled "Open Modal" instead of rendering the full overlay
- **Drawer**: Shows a button labeled "Open Drawer" instead of rendering the full overlay

When the button is clicked, the component opens with the `show` prop set to `true`. The component automatically handles the `onClose` callback to close the overlay.

```tsx
<ComponentDisplay
  title="Modal Example"
  component={Modal}
  props={{
    title: "Example Modal",
    children: "This content appears when opened",
    showFooter: true,
  }}
/>
```

## View Modes

The component provides several tabs for different viewing experiences:

1. **Preview**: Shows the component in action (or button for large components)
2. **Code**: Displays the JSX code for the component with current props
3. **Props**: Shows the current props as formatted JSON
4. **Stories**: Renders the provided stories component
5. **Interactive Docs**: Embeds Storybook documentation (when available)

## Complete Example

```tsx
import { ComponentDisplay } from "pulseui-base";
import { Button } from "pulseui-base";
import buttonStories from "./Button.stories";

function CompleteExample() {
  return (
    <ComponentDisplay
      title="Complete Button Documentation"
      description="A comprehensive example showing all features of the Button component."
      component={Button}
      props={{
        variant: "filled",
        size: "lg",
        children: "Documentation Example",
        leftIcon: "add",
      }}
      stories={buttonStories}
      showCode={true}
      showProps={true}
      showStories={true}
      storybookViewMode="docs"
    />
  );
}
```

## Setup for Storybook Embedding

To enable interactive Storybook documentation:

1. **Provide Stories**: Pass the stories component to the `stories` prop
2. **Auto-inference**: The component automatically:

   - Infers `storybookUrl` from `window.location.origin + '/storybook'`
   - Generates `storyId` from the stories component name
   - Defaults to 'docs' view mode

3. **Custom Configuration**: Override auto-inference with custom props:
   ```tsx
   <ComponentDisplay
     component={Button}
     stories={buttonStories}
     storybookUrl="https://custom-storybook.example.com"
     storyId="custom-button-story"
     storybookViewMode="canvas"
   />
   ```

## Benefits

- **No Storybook Dependencies**: Core functionality works without Storybook
- **Intelligent Rendering**: Automatically handles different component types
- **Consistent Layout**: All components are displayed in a uniform, professional manner
- **Interactive Documentation**: Seamlessly integrates with existing Storybook setups
- **Developer Experience**: Provides immediate visual feedback and code examples

## Troubleshooting

### Large Components Not Opening

- Ensure the component accepts `show` and `onClose` props
- Check that the component name matches "Modal" or "Drawer" exactly

### Storybook Not Embedding

- Verify that `stories` prop is provided
- Check that Storybook is accessible at the inferred URL
- Ensure CORS is properly configured for iframe embedding

### Component Not Rendering

- Verify the component is properly imported and exported
- Check that required props are provided
- Ensure the component doesn't have runtime errors

## Best Practices

1. **Component Naming**: Use descriptive `displayName` for better auto-detection
2. **Props Documentation**: Provide comprehensive props for better code examples
3. **Story Integration**: Include stories for interactive documentation
4. **Responsive Testing**: Test with components of various sizes and types
5. **Performance**: Large components are only rendered when opened, improving performance

## Design System Compliance

This component follows the PulseUI design system principles:

- Uses design tokens for consistent spacing, colors, and typography
- Implements responsive design patterns
- Follows accessibility guidelines for interactive elements
- Maintains consistent visual hierarchy and layout
