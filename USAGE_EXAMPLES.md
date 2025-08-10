# ComponentDisplay Usage Examples

This file demonstrates exactly how to use the `ComponentDisplay` component when importing from the PulseUI package.

## 🚀 Installation

```bash
npm install @pulseui-base
```

## 📦 Import

```typescript
import { ComponentDisplay } from '@pulseui-base';
```

## 🎯 Basic Examples

### 1. Simple ComponentDisplay

```tsx
import React from 'react';
import { ComponentDisplay } from '@pulseui-base';

function MyComponent() {
  return (
    <ComponentDisplay
      title="My Awesome Component"
      description="This is a description of what my component does and how it works."
    />
  );
}
```

**Result**: A clean header with title and description, no additional links.

### 2. With Source Code Link

```tsx
<ComponentDisplay
  title="My Awesome Component"
  description="This is a description of what my component does and how it works."
  sourceUrl="https://github.com/kazuri1/Pulseui"
/>
```

**Result**: Header with title, description, and a "Source" link that opens the GitHub repository.

### 3. With Package Link

```tsx
<ComponentDisplay
  title="My Awesome Component"
  description="This is a description of what my component does and how it works."
  packageName="@pulseui-base"
/>
```

**Result**: Header with title, description, and a package link that opens npmjs.com.

### 4. With All Metadata

```tsx
<ComponentDisplay
  title="My Awesome Component"
  description="This is a description of what my component does and how it works."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  docsUrl="https://github.com/kazuri1/Pulseui/edit/main/docs/components/MyComponent.md"
  packageName="@pulseui-base"
/>
```

**Result**: Header with title, description, and three links: Source, Docs, and Package.

## 🎨 Content Examples

### 5. With Custom Content

```tsx
<ComponentDisplay
  title="Button Component"
  description="A versatile button component with multiple variants and sizes."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
>
  <div style={{ padding: '24px', backgroundColor: 'var(--color-surface-secondary)' }}>
    <h3>Button Variants</h3>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <button style={{ padding: '8px 16px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px' }}>
        Primary
      </button>
      <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', borderRadius: '4px' }}>
        Outline
      </button>
    </div>
  </div>
</ComponentDisplay>
```

**Result**: Header with metadata links, followed by a custom content area showing button examples.

### 6. Props Table

```tsx
<ComponentDisplay
  title="Button Component"
  description="A versatile button component with multiple variants and sizes."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
>
  <div style={{ padding: '24px', backgroundColor: 'var(--color-surface-secondary)' }}>
    <h3>Props Reference</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid var(--color-border-secondary)' }}>
          <th style={{ textAlign: 'left', padding: '12px', color: 'var(--color-text-primary)' }}>Prop</th>
          <th style={{ textAlign: 'left', padding: '12px', color: 'var(--color-text-primary)' }}>Type</th>
          <th style={{ textAlign: 'left', padding: '12px', color: 'var(--color-text-primary)' }}>Required</th>
          <th style={{ textAlign: 'left', padding: '12px', color: 'var(--color-text-primary)' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid var(--color-border-secondary)' }}>
          <td style={{ padding: '12px', color: 'var(--color-text-primary)' }}>variant</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>string</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>No</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>Button style variant</td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--color-border-secondary)' }}>
          <td style={{ padding: '12px', color: 'var(--color-text-primary)' }}>size</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>string</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>No</td>
          <td style={{ padding: '12px', color: 'var(--color-text-secondary)' }}>Button size</td>
        </tr>
      </tbody>
    </table>
  </div>
</ComponentDisplay>
```

**Result**: Header with metadata links, followed by a comprehensive props table.

### 7. Code Examples

```tsx
<ComponentDisplay
  title="Button Component"
  description="A versatile button component with multiple variants and sizes."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
>
  <div style={{ padding: '24px', backgroundColor: 'var(--color-surface-secondary)' }}>
    <h3>Usage Examples</h3>
    
    <div style={{ marginBottom: '24px' }}>
      <h4>Basic Button</h4>
      <pre style={{ 
        padding: '16px', 
        backgroundColor: 'var(--color-surface-tertiary)', 
        borderRadius: '4px',
        overflow: 'auto',
        fontSize: '14px'
      }}>
{`import { Button } from '@pulseui-base';

<Button variant="primary" size="md">
  Click me
</Button>`}
      </pre>
    </div>
    
    <div style={{ marginBottom: '24px' }}>
      <h4>Button with Icon</h4>
      <pre style={{ 
        padding: '16px', 
        backgroundColor: 'var(--color-surface-tertiary)', 
        borderRadius: '4px',
        overflow: 'auto',
        fontSize: '14px'
      }}>
{`<Button variant="outline" size="sm">
  <Icon icon={DownloadIcon} />
  Download
</Button>`}
      </pre>
    </div>
  </div>
</ComponentDisplay>
```

**Result**: Header with metadata links, followed by code examples with syntax highlighting.

## 🎨 Styling Examples

### 8. Custom Styling

```tsx
<ComponentDisplay
  title="Custom Styled Component"
  description="This component has custom styling applied via className."
  sourceUrl="https://github.com/kazuri1/Pulseui"
  packageName="@pulseui-base"
  className="my-custom-style"
>
  <div style={{ padding: '24px', backgroundColor: 'var(--color-blue-0)' }}>
    <h3>Custom Styled Content</h3>
    <p>This content area has custom styling applied.</p>
  </div>
</ComponentDisplay>
```

**CSS for custom styling:**
```css
.my-custom-style {
  border: 3px solid var(--color-primary);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.my-custom-style .component-display-header {
  background: linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100));
}
```

## 🔄 Real-World Usage Patterns

### 9. Component Library Documentation

```tsx
function ComponentLibrary() {
  return (
    <div>
      <ComponentDisplay
        title="Component Library"
        description="A comprehensive collection of reusable UI components built with design system principles."
        sourceUrl="https://github.com/kazuri1/Pulseui"
        packageName="@pulseui-base"
      />
      
      <ComponentDisplay
        title="Button Component"
        description="Versatile button component with multiple variants, sizes, and states."
        sourceUrl="https://github.com/kazuri1/Pulseui"
        packageName="@pulseui-base"
      >
        {/* Button examples and props */}
      </ComponentDisplay>
      
      <ComponentDisplay
        title="Input Component"
        description="Form input component with validation states and accessibility features."
        sourceUrl="https://github.com/kazuri1/Pulseui"
        packageName="@pulseui-base"
      >
        {/* Input examples and props */}
      </ComponentDisplay>
    </div>
  );
}
```

### 10. API Documentation

```tsx
function APIDocumentation() {
  return (
    <div>
      <ComponentDisplay
        title="API Reference"
        description="Complete API documentation for all available endpoints and methods."
        sourceUrl="https://github.com/kazuri1/Pulseui"
        docsUrl="https://github.com/kazuri1/Pulseui/edit/main/docs/api/README.md"
      />
      
      <ComponentDisplay
        title="Authentication Endpoints"
        description="Endpoints for user authentication and authorization."
        sourceUrl="https://github.com/kazuri1/Pulseui"
      >
        <div style={{ padding: '24px', backgroundColor: 'var(--color-surface-secondary)' }}>
          <h3>POST /auth/login</h3>
          <p>Authenticate a user with email and password.</p>
          <pre style={{ padding: '16px', backgroundColor: 'var(--color-surface-tertiary)' }}>
{`{
  "email": "user@example.com",
  "password": "securepassword"
}`}
          </pre>
        </div>
      </ComponentDisplay>
    </div>
  );
}
```

## 🎯 Best Practices

### 1. Always Include Title and Description
```tsx
// ✅ Good
<ComponentDisplay
  title="Clear, Descriptive Title"
  description="Comprehensive description that explains what the component does, when to use it, and any important considerations."
/>

// ❌ Avoid
<ComponentDisplay
  title="Component"
  description="A component."
/>
```

### 2. Use Meaningful Source URLs
```tsx
// ✅ Good
sourceUrl="https://github.com/kazuri1/Pulseui/tree/main/src/components/Button"

// ❌ Avoid
sourceUrl="https://github.com/kazuri1/Pulseui"
```

### 3. Provide Useful Content
```tsx
// ✅ Good - Include examples, props, usage patterns
<ComponentDisplay title="..." description="...">
  <div>
    <h3>Examples</h3>
    <h3>Props Reference</h3>
    <h3>Usage Guidelines</h3>
  </div>
</ComponentDisplay>

// ❌ Avoid - Empty or minimal content
<ComponentDisplay title="..." description="...">
  <div>Content coming soon...</div>
</ComponentDisplay>
```

### 4. Use Design System Tokens
```tsx
// ✅ Good - Use design system tokens
<div style={{ 
  padding: 'var(--spacing-lg)', 
  backgroundColor: 'var(--color-surface-secondary)',
  borderRadius: 'var(--radius-md)'
}}>

// ❌ Avoid - Hard-coded values
<div style={{ 
  padding: '24px', 
  backgroundColor: '#f5f5f5',
  borderRadius: '8px'
}}>
```

## 🚀 Getting Started Checklist

- [ ] Install `@pulseui-base` package
- [ ] Import `ComponentDisplay` component
- [ ] Add required `title` and `description` props
- [ ] Optionally add `sourceUrl`, `docsUrl`, and `packageName`
- [ ] Use `children` prop for custom content
- [ ] Apply `className` for custom styling if needed
- [ ] Test with different content types
- [ ] Verify accessibility and responsive behavior

## 🔗 Additional Resources

- **Live Demo**: [http://localhost:5173](http://localhost:5173) (run `npm run dev`)
- **Storybook**: [http://localhost:6006](http://localhost:6006) (run `npm run storybook`)
- **GitHub**: [https://github.com/kazuri1/Pulseui](https://github.com/kazuri1/Pulseui)
- **NPM**: [https://www.npmjs.com/package/@pulseui-base](https://www.npmjs.com/package/@pulseui-base)
