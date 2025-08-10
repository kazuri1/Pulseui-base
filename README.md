# PulseUI ComponentDisplay Demo

This project demonstrates how to use the `ComponentDisplay` component from the PulseUI design system package.

## 🚀 Quick Start

### 1. Install PulseUI Package

```bash
npm install @pulseui-base
```

### 2. Import the Component

```typescript
import { ComponentDisplay } from '@pulseui-base';
```

### 3. Use in Your App

```tsx
<ComponentDisplay
  title="My Component"
  description="Description of what this component does"
  sourceUrl="https://github.com/user/repo"
  packageName="@org/package-name"
>
  {/* Your content here */}
</ComponentDisplay>
```

## 📚 Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | The main title displayed prominently |
| `description` | `string` | ✅ | Detailed description of the component |
| `sourceUrl` | `string` | ❌ | Link to source code repository |
| `docsUrl` | `string` | ❌ | Link to edit documentation |
| `packageName` | `string` | ❌ | NPM package name for linking |
| `children` | `ReactNode` | ❌ | Custom content to display below header |
| `className` | `string` | ❌ | Additional CSS classes for styling |

## 🎨 Usage Examples

### Basic Usage

```tsx
<ComponentDisplay
  title="Basic ComponentDisplay"
  description="Simple usage with just title and description."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
/>
```

### With Custom Content

```tsx
<ComponentDisplay
  title="ComponentDisplay with Content"
  description="Shows how to include custom content using the children prop."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
>
  <div style={{ padding: '24px', backgroundColor: 'var(--color-surface-secondary)' }}>
    <h3>Custom Content Area</h3>
    <p>This is where you can put component examples, props tables, or usage instructions.</p>
    <Button variant="filled">Example Button</Button>
  </div>
</ComponentDisplay>
```

### With All Metadata

```tsx
<ComponentDisplay
  title="Full Metadata Example"
  description="ComponentDisplay with all optional props including source URL, documentation URL, and package name."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  docsUrl="https://github.com/kazuri1/Pulseui/edit/main/docs/components/ComponentDisplay.md"
  packageName="@pulseui-base"
>
  {/* Your content here */}
</ComponentDisplay>
```

### Custom Styling

```tsx
<ComponentDisplay
  title="Custom Styled ComponentDisplay"
  description="Demonstrates how to apply custom styling using the className prop."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
  className="custom-component-display"
>
  {/* Your content here */}
</ComponentDisplay>
```

## 🎯 Features

- **Design System Integration**: Built with PulseUI design tokens for consistent spacing, colors, typography, and interactive states
- **Metadata Links**: Automatic generation of Source, Docs, and Package links
- **Flexible Content**: Use the `children` prop to include any content below the header
- **Custom Styling**: Apply custom CSS classes via the `className` prop
- **Accessibility**: Semantic HTML structure with proper ARIA labels and keyboard navigation
- **Responsive Design**: Mobile-first responsive design with design system breakpoints

## 🔗 Links

- **Source Code**: [GitHub Repository](https://github.com/kazuri1/Pulseui)
- **NPM Package**: [@pulseui-base](https://www.npmjs.com/package/@pulseui-base)
- **Documentation**: [Storybook](http://localhost:6006) (run `npm run storybook`)

## 🛠️ Development

### Run the Demo

```bash
npm run dev
```

### Run Storybook

```bash
npm run storybook
```

### Build Library

```bash
npm run build:lib
```

### Type Check

```bash
npm run type-check
```

## 🎨 Design System

The ComponentDisplay component uses PulseUI design system tokens:

- **Colors**: `--color-surface`, `--color-text-primary`, `--color-primary`
- **Spacing**: `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- **Typography**: `--font-size-lg`, `--font-weight-bold`, `--line-height-lg`
- **Borders**: `--radius-md`, `--border-width-thin`
- **Shadows**: `--shadow-normal`

## 📱 Responsive Design

- **Mobile**: Optimized for small screens with adjusted spacing
- **Tablet**: Medium screen optimizations
- **Desktop**: Full layout with optimal spacing and typography

## ♿ Accessibility

- Semantic HTML structure (`<header>`, `<nav>`, `<main>`)
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management with visible focus rings
- Proper color contrast ratios
