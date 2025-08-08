# Modal

A comprehensive modal component with title, description, content slots, and footer integration.

## Usage

```tsx
import { Modal } from './Modal';

// Basic modal
<Modal
  show={true}
  title="Basic Modal"
  description="This is a basic modal with title and description."
  onClose={() => setShowModal(false)}
>
  <p>Modal content goes here.</p>
</Modal>

// Modal with footer
<Modal
  show={true}
  title="Modal with Footer"
  description="This modal includes a footer with action buttons."
  showFooter={true}
  footerVariant="primary"
  primaryText="Save"
  secondaryText="Cancel"
  onClose={() => setShowModal(false)}
  onPrimaryClick={() => handleSave()}
  onSecondaryClick={() => setShowModal(false)}
>
  <p>Modal content goes here.</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Modal content |
| `title` | `string` | - | Modal title |
| `showTitle` | `boolean` | `true` | Whether to show the title |
| `description` | `string` | - | Modal description |
| `showDescription` | `boolean` | `true` | Whether to show the description |
| `showClose` | `boolean` | `true` | Whether to show the close button |
| `show` | `boolean` | `false` | Whether to show the modal |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal size |
| `showFooter` | `boolean` | `false` | Whether to show the footer |
| `footerVariant` | `'button-only' \| 'primary' \| 'destructive'` | `'primary'` | Footer variant |
| `primaryText` | `string` | `'OK'` | Primary button text |
| `secondaryText` | `string` | `'Cancel'` | Secondary button text |
| `onPrimaryClick` | `() => void` | - | Primary button click handler |
| `onSecondaryClick` | `() => void` | - | Secondary button click handler |
| `primaryDisabled` | `boolean` | `false` | Whether the primary button is disabled |
| `secondaryDisabled` | `boolean` | `false` | Whether the secondary button is disabled |
| `footerContent` | `React.ReactNode` | - | Custom footer content |
| `onClose` | `() => void` | - | Close handler |
| `disabled` | `boolean` | `false` | Whether the modal is disabled |
| `closeOnBackdropClick` | `boolean` | `true` | Whether to close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Whether to close on escape key |
| `id` | `string` | - | Unique identifier |

## Sizes

- **xs**: 320px width
- **sm**: 480px width
- **md**: 640px width (default)
- **lg**: 800px width
- **xl**: 1024px width

## Features

### Content Slots
The modal supports flexible content through the `children` prop. You can include any React components, forms, or content.

### Title and Description
- **Title**: Optional modal title displayed in the header
- **Description**: Optional description displayed below the title

### Footer Integration
The modal integrates with the ModalFooter component, supporting three variants:
- **button-only**: Custom content or single button
- **primary**: Default (Cancel) and filled (OK) buttons
- **destructive**: Default (Cancel) and filled error (Delete) buttons

### Accessibility
- Proper ARIA attributes (`aria-modal`, `aria-labelledby`, `aria-describedby`)
- Keyboard navigation (Escape key to close)
- Focus management
- Screen reader support

### Responsive Design
- Mobile-first approach
- Responsive sizing and spacing
- Touch-friendly interactions

## Examples

### Basic Modal
```tsx
<Modal
  show={showModal}
  title="Basic Modal"
  description="This is a basic modal with title and description."
  onClose={() => setShowModal(false)}
>
  <p>This is the modal content. You can put any content here.</p>
</Modal>
```

### Modal with Footer
```tsx
<Modal
  show={showModal}
  title="Save Changes"
  description="Do you want to save your changes?"
  showFooter={true}
  footerVariant="primary"
  primaryText="Save"
  secondaryText="Cancel"
  onClose={() => setShowModal(false)}
  onPrimaryClick={() => handleSave()}
  onSecondaryClick={() => setShowModal(false)}
>
  <p>Your changes will be saved to the database.</p>
</Modal>
```

### Destructive Modal
```tsx
<Modal
  show={showModal}
  title="Delete Confirmation"
  description="Are you sure you want to delete this item?"
  showFooter={true}
  footerVariant="destructive"
  primaryText="Delete"
  secondaryText="Cancel"
  onClose={() => setShowModal(false)}
  onPrimaryClick={() => handleDelete()}
  onSecondaryClick={() => setShowModal(false)}
>
  <p>This action cannot be undone. Please confirm your decision.</p>
</Modal>
```

### Modal with Custom Content
```tsx
<Modal
  show={showModal}
  title="User Information"
  description="Please fill in your details."
  showFooter={true}
  onClose={() => setShowModal(false)}
  onPrimaryClick={() => handleSubmit()}
  onSecondaryClick={() => setShowModal(false)}
>
  <form>
    <div style={{ marginBottom: "16px" }}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" placeholder="Enter your name" />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" placeholder="Enter your email" />
    </div>
  </form>
</Modal>
```

### Modal Without Title
```tsx
<Modal
  show={showModal}
  showTitle={false}
  description="This modal doesn't have a title."
  showFooter={true}
  onClose={() => setShowModal(false)}
>
  <p>Sometimes you might want a modal without a title.</p>
</Modal>
```

### Modal Without Close Button
```tsx
<Modal
  show={showModal}
  title="Required Action"
  description="This modal requires user interaction to close."
  showClose={false}
  showFooter={true}
  onClose={() => setShowModal(false)}
  onPrimaryClick={() => setShowModal(false)}
>
  <p>You must make a decision before proceeding.</p>
</Modal>
```

## Best Practices

1. **Always provide an `onClose` handler** to allow users to close the modal
2. **Use descriptive titles and descriptions** to clearly communicate the modal's purpose
3. **Choose appropriate footer variants** based on the action type (primary for confirmations, destructive for dangerous actions)
4. **Consider accessibility** by providing proper ARIA labels and keyboard navigation
5. **Test on mobile devices** to ensure responsive behavior
6. **Use appropriate modal sizes** based on content complexity
