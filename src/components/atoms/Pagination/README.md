# Pagination Component

A flexible pagination component that provides navigation through multiple pages of content. The component supports various configurations including different sizes, edge controls, and states.

## Features

- **Multiple Sizes**: xs, sm, md, lg, xl
- **Edge Controls**: Configurable first/last and previous/next buttons
- **States**: Default and disabled states
- **Smart Page Display**: Automatically shows ellipsis for large page counts
- **Accessibility**: Full ARIA support and keyboard navigation
- **Customizable**: Configurable sibling and boundary counts
- **Design System Compliant**: Uses design tokens for consistent styling

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | - | Current page number (1-based) |
| `totalPages` | `number` | - | Total number of pages |
| `siblingCount` | `number` | `1` | Number of pages to show around current page |
| `boundaryCount` | `number` | `1` | Number of pages to show at the beginning and end |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size of the pagination component |
| `showFirstLast` | `boolean` | `true` | Whether to show first/last page buttons |
| `showPrevNext` | `boolean` | `true` | Whether to show previous/next buttons |
| `disabled` | `boolean` | `false` | Whether the pagination is disabled |
| `onPageChange` | `(page: number) => void` | - | Callback when page changes |
| `onFirstPage` | `() => void` | - | Callback when first page is clicked |
| `onLastPage` | `() => void` | - | Callback when last page is clicked |
| `onPreviousPage` | `() => void` | - | Callback when previous page is clicked |
| `onNextPage` | `() => void` | - | Callback when next page is clicked |
| `id` | `string` | - | Unique identifier |

## Sizes

### Extra Small (xs)
- Compact design for space-constrained layouts
- Smaller buttons and text

### Small (sm)
- Standard small size
- Good for secondary content areas

### Medium (md)
- Default size
- Balanced for most use cases

### Large (lg)
- Prominent size
- Good for primary content areas

### Extra Large (xl)
- Maximum size
- High visibility for important navigation

## Edge Controls

### First/Last Buttons
- **showFirstLast**: Controls visibility of first and last page buttons
- Double chevron icons for quick navigation to boundaries
- Automatically disabled when on first/last page

### Previous/Next Buttons
- **showPrevNext**: Controls visibility of previous and next buttons
- Single chevron icons for step-by-step navigation
- Automatically disabled when at boundaries

## States

### Default
- Interactive buttons with hover and focus states
- Active page highlighted with primary color
- Smooth transitions and animations

### Disabled
- Reduced opacity and disabled cursor
- No interactions allowed
- Visual indication of disabled state

## Page Display Logic

The component intelligently displays page numbers based on:

1. **Boundary Pages**: Always shows first and last pages (configurable count)
2. **Sibling Pages**: Shows pages around the current page
3. **Ellipsis**: Displays "..." when there are gaps in the sequence

### Configuration Examples

```tsx
// Show 2 pages on each boundary, 1 sibling on each side
<Pagination 
  currentPage={10} 
  totalPages={20} 
  boundaryCount={2} 
  siblingCount={1} 
/>

// Show only current page and boundaries
<Pagination 
  currentPage={10} 
  totalPages={20} 
  boundaryCount={1} 
  siblingCount={0} 
/>
```

## Examples

### Basic Usage
```tsx
import { Pagination } from "../Pagination";

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={20}
      onPageChange={setCurrentPage}
    />
  );
}
```

### Custom Configuration
```tsx
<Pagination
  currentPage={5}
  totalPages={100}
  size="lg"
  showFirstLast={false}
  siblingCount={2}
  boundaryCount={2}
  onPageChange={(page) => console.log(`Page changed to ${page}`)}
/>
```

### Disabled State
```tsx
<Pagination
  currentPage={3}
  totalPages={10}
  disabled={true}
/>
```

### Minimal Pagination
```tsx
<Pagination
  currentPage={5}
  totalPages={10}
  showFirstLast={false}
  showPrevNext={false}
/>
```

## Accessibility

- **ARIA Labels**: All buttons have descriptive aria-labels
- **Current Page**: Uses `aria-current="page"` for the active page
- **Navigation Role**: Uses `role="navigation"` for the container
- **Keyboard Navigation**: All buttons are keyboard accessible
- **Focus Management**: Proper focus indicators and outline

## Design System Integration

The component uses design tokens for:
- **Colors**: Primary, secondary, and state colors
- **Spacing**: Consistent spacing scale
- **Typography**: Font sizes and weights
- **Motion**: Transition durations and easing
- **Borders**: Border widths and radii
- **Shadows**: Hover and focus shadows

## Responsive Behavior

- Automatically adapts to smaller screens
- Maintains usability on mobile devices
- Responsive spacing and sizing 