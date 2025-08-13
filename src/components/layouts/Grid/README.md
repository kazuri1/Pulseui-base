# Grid Component

A powerful, responsive CSS Grid system that provides industry-standard grid functionality with advanced features like auto-fit, offsets, ordering, and flexible gutters.

## Key Features

- **12-Column Grid System**: Industry standard 12-column layout
- **Responsive Breakpoints**: Built-in responsive design with 6 breakpoints (xs, sm, md, lg, xl, xxl)
- **Auto-fit Support**: Automatic column fitting with minimum width constraints
- **Column Offsets**: Position columns with precise offset control
- **Column Ordering**: Control the visual order of columns independently of DOM order
- **Flexible Gutters**: Separate horizontal/vertical gutters and negative gutter support
- **Grid Areas**: Support for CSS Grid areas in complex layouts

## Installation

```tsx
import { Grid } from "pulseui-base";
```

## Basic Usage

### Simple 3-Column Layout

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={4}>Column 1</Grid.Col>
  <Grid.Col span={4}>Column 2</Grid.Col>
  <Grid.Col span={4}>Column 3</Grid.Col>
</Grid>
```

### Basic 2-Column Layout

```tsx
<Grid columns={12} gutter="lg">
  <Grid.Col span={8}>Main Content</Grid.Col>
  <Grid.Col span={4}>Sidebar</Grid.Col>
</Grid>
```

## Responsive Design

### Responsive Column Spans

```tsx
<Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>Responsive content</Grid.Col>
```

**Breakpoint Behavior:**

- **Base (0px+)**: 12 columns (full width)
- **SM (576px+)**: 6 columns (2 per row)
- **MD (768px+)**: 4 columns (3 per row)
- **LG (992px+)**: 3 columns (4 per row)

### Responsive Grid Example

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
    <Card>Product 1</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
    <Card>Product 2</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
    <Card>Product 3</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
    <Card>Product 4</Card>
  </Grid.Col>
</Grid>
```

## Advanced Features

### Auto-fit Grid

Automatically fits columns based on available space while maintaining a minimum width constraint.

```tsx
<Grid autoFit minColumnWidth="250px" gutter="md">
  <Grid.Col>Auto-fit content</Grid.Col>
  <Grid.Col>Auto-fit content</Grid.Col>
  <Grid.Col>Auto-fit content</Grid.Col>
</Grid>
```

**How It Works:**

- Uses CSS Grid `repeat(auto-fit, minmax(250px, 1fr))`
- Columns automatically wrap to new rows when space is limited
- Each column maintains minimum 250px width
- Perfect for card layouts, galleries, and responsive content

**Key Benefits:**

- No need to calculate column spans
- Automatically adapts to container width
- Maintains consistent column sizing
- Ideal for dynamic content

**Use Cases:**

- Product grids
- Image galleries
- Card layouts
- Dashboard widgets

### Column Offsets

Position columns with precise offset control.

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={2}>First Column</Grid.Col>
  <Grid.Col span={4} offset={2}>
    Offset Column
  </Grid.Col>
  <Grid.Col span={4}>Last Column</Grid.Col>
</Grid>
```

**Responsive Offsets:**

```tsx
<Grid.Col span={6} offset={{ base: 0, md: 3 }}>
  Responsive offset column
</Grid.Col>
```

### Column Ordering

Control the visual order of columns independently of DOM order.

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={4} order={2}>
    Second in Order
  </Grid.Col>
  <Grid.Col span={4} order={1}>
    First in Order
  </Grid.Col>
  <Grid.Col span={4} order={3}>
    Third in Order
  </Grid.Col>
</Grid>
```

**Responsive Ordering:**

```tsx
<Grid.Col span={6} order={{ base: 2, lg: 1 }}>
  Responsive order column
</Grid.Col>
```

### Separate Gutters

Control spacing between columns and rows independently for precise layout control.

```tsx
<Grid gutterX="lg" gutterY="sm">
  <Grid.Col span={6}>Content</Grid.Col>
  <Grid.Col span={6}>Content</Grid.Col>
</Grid>
```

**Gutter Configuration:**

- **gutterX="lg"**: Large spacing between columns (horizontal)
- **gutterY="sm"**: Small spacing between rows (vertical)

**Available Gutter Sizes:**

- `xs`: Extra small (4px)
- `sm`: Small (8px)
- `md`: Medium (16px) - default
- `lg`: Large (24px)
- `xl`: Extra large (32px)

**Use Cases:**

- Card layouts with tight row spacing
- Product grids with generous column spacing
- Dashboard layouts with different spacing needs
- When you need asymmetric spacing

### Negative Gutters (Edge-to-Edge Layout)

Creates edge-to-edge layouts by using negative margins and compensating padding.

```tsx
<Grid negativeGutter gutter="lg">
  <Grid.Col span={6}>Content</Grid.Col>
  <Grid.Col span={6}>Content</Grid.Col>
</Grid>
```

**How It Works:**

- Applies negative margin equal to gutter size
- Adds compensating padding to child elements
- Creates seamless, edge-to-edge appearance
- Maintains proper spacing internally

**CSS Implementation:**

```css
.negativeGutter {
  margin: calc(-1 * var(--grid-gutter));
}

.negativeGutter > * {
  padding: calc(var(--grid-gutter) / 2);
}
```

**Use Cases:**

- Hero sections
- Full-width content areas
- Card layouts without gaps
- Dashboard panels
- When you want content to touch container edges

### Grid Areas

Support for CSS Grid areas in complex layouts.

```tsx
<Grid
  columns={12}
  gutter="md"
  style={{
    gridTemplateAreas: `
      "header header header"
      "sidebar main main"
      "footer footer footer"
    `,
  }}
>
  <Grid.Col span={12} gridArea="header">
    Header
  </Grid.Col>
  <Grid.Col span={4} gridArea="sidebar">
    Sidebar
  </Grid.Col>
  <Grid.Col span={8} gridArea="main">
    Main Content
  </Grid.Col>
  <Grid.Col span={12} gridArea="footer">
    Footer
  </Grid.Col>
</Grid>
```

## Props Reference

### Grid Props

| Prop             | Type                                                                                            | Default        | Description                                       |
| ---------------- | ----------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------- |
| `children`       | `ReactNode`                                                                                     | -              | Grid content                                      |
| `columns`        | `number`                                                                                        | `12`           | Number of columns in each row                     |
| `gutter`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                          | `"md"`         | Controls spacing between columns                  |
| `gutterX`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                          | -              | Horizontal gutter (between columns)               |
| `gutterY`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                                          | -              | Vertical gutter (between rows)                    |
| `autoFit`        | `boolean`                                                                                       | `false`        | Auto-fit columns with minimum width               |
| `minColumnWidth` | `string`                                                                                        | `"200px"`      | Minimum column width for auto-fit                 |
| `negativeGutter` | `boolean`                                                                                       | `false`        | Negative gutters for edge-to-edge layouts         |
| `align`          | `"stretch" \| "flex-start" \| "flex-end" \| "center" \| "baseline"`                             | `"stretch"`    | Sets the `align-items` CSS property               |
| `justify`        | `"flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around" \| "space-evenly"` | `"flex-start"` | Sets the `justify-content` CSS property           |
| `grow`           | `boolean`                                                                                       | `false`        | If true, columns in last row expand to fill space |
| `overflow`       | `"visible" \| "hidden" \| "scroll" \| "auto"`                                                   | `"visible"`    | Sets the `overflow` CSS property                  |
| `type`           | `"media" \| "container"`                                                                        | `"media"`      | Type of queries for responsive styles             |
| `className`      | `string`                                                                                        | -              | Additional CSS classes                            |

### GridCol Props

| Prop        | Type                         | Default | Description                        |
| ----------- | ---------------------------- | ------- | ---------------------------------- |
| `children`  | `ReactNode`                  | -       | Column content                     |
| `span`      | `number \| ResponsiveObject` | -       | Number of columns to span (1-12)   |
| `offset`    | `number \| ResponsiveObject` | `0`     | Number of columns to offset (0-11) |
| `order`     | `number \| ResponsiveObject` | `0`     | Column order                       |
| `gridArea`  | `string`                     | -       | Grid area name for complex layouts |
| `className` | `string`                     | -       | Additional CSS classes             |

### ResponsiveObject Type

```tsx
type ResponsiveObject = {
  base?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};
```

## Examples

### Dashboard Layout

```tsx
<Grid columns={12} gutter="lg">
  <Grid.Col span={{ base: 12, lg: 8 }}>
    <Card>
      <h2>Main Dashboard</h2>
      <p>Primary content area</p>
    </Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, lg: 4 }}>
    <Card>
      <h3>Sidebar</h3>
      <p>Secondary content</p>
    </Card>
  </Grid.Col>
</Grid>
```

### Product Grid

```tsx
<Grid autoFit minColumnWidth="300px" gutter="md">
  {products.map((product) => (
    <Grid.Col key={product.id}>
      <ProductCard product={product} />
    </Grid.Col>
  ))}
</Grid>
```

### Complex Responsive Layout

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={{ base: 12, md: 8 }} order={{ base: 2, md: 1 }}>
    <MainContent />
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }} order={{ base: 1, md: 2 }}>
    <Sidebar />
  </Grid.Col>
</Grid>
```

### Card Layout with Mixed Gutters

```tsx
<Grid gutterX="lg" gutterY="sm">
  <Grid.Col span={6}>
    <Card>Card 1</Card>
  </Grid.Col>
  <Grid.Col span={6}>
    <Card>Card 2</Card>
  </Grid.Col>
  <Grid.Col span={6}>
    <Card>Card 3</Card>
  </Grid.Col>
  <Grid.Col span={6}>
    <Card>Card 4</Card>
  </Grid.Col>
</Grid>
```

## Best Practices

### 1. Mobile-First Approach

Always start with the base breakpoint and work up to larger screens:

```tsx
// ✅ Good
<Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>

// ❌ Avoid
<Grid.Col span={{ lg: 3, md: 4, sm: 6, base: 12 }}>
```

### 2. Consistent Gutter Usage

Use consistent gutter sizes across related components:

```tsx
// ✅ Good - Consistent spacing
<Grid gutter="md">
  <Grid.Col span={6}>Content</Grid.Col>
</Grid>

// ❌ Avoid - Inconsistent spacing
<Grid gutter="lg">
  <Grid.Col span={6}>Content</Grid.Col>
</Grid>
```

### 3. Meaningful Column Spans

Use spans that make mathematical sense:

```tsx
// ✅ Good - Spans add up to 12
<Grid.Col span={8}>Main (8)</Grid.Col>
<Grid.Col span={4}>Sidebar (4)</Grid.Col>

// ❌ Avoid - Spans don't add up to 12
<Grid.Col span={7}>Main (7)</Grid.Col>
<Grid.Col span={4}>Sidebar (4)</Grid.Col>
```

### 4. Responsive Breakpoints

Use breakpoints that match your design system:

```tsx
// ✅ Good - Standard breakpoints
<Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>

// ❌ Avoid - Too many breakpoints
<Grid.Col span={{ base: 12, xs: 11, sm: 10, md: 9, lg: 8, xl: 7, xxl: 6 }}>
```

## Troubleshooting

### Common Issues

#### 1. Columns Not Aligning

**Problem:** Columns appear misaligned or have unexpected spacing.

**Solution:** Check that your column spans add up to the total columns:

```tsx
// Ensure: 4 + 4 + 4 = 12
<Grid columns={12}>
  <Grid.Col span={4}>Col 1</Grid.Col>
  <Grid.Col span={4}>Col 2</Grid.Col>
  <Grid.Col span={4}>Col 3</Grid.Col>
</Grid>
```

#### 2. Responsive Behavior Not Working

**Problem:** Responsive spans don't change at expected breakpoints.

**Solution:** Verify breakpoint values and ensure CSS media queries are working:

```tsx
// Check that these breakpoints match your CSS
<Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
```

#### 3. Auto-fit Not Working

**Problem:** Auto-fit columns don't wrap properly.

**Solution:** Ensure `minColumnWidth` is appropriate and container has sufficient width:

```tsx
// Make sure minColumnWidth isn't too large
<Grid autoFit minColumnWidth="200px">
  <Grid.Col>Content</Grid.Col>
</Grid>
```

#### 4. Gutter Issues

**Problem:** Unexpected spacing between columns or rows.

**Solution:** Check gutter prop values and ensure no conflicting CSS:

```tsx
// Use consistent gutter values
<Grid gutter="md">
  <Grid.Col span={6}>Content</Grid.Col>
</Grid>
```

## Related Components

- **Container**: Wrapper component for consistent max-widths
- **Stack**: Vertical stacking layout component
- **Group**: Horizontal grouping component
- **Card**: Content container that works well with Grid

## Browser Support

The Grid component uses CSS Grid, which is supported in:

- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

For older browsers, consider using the Stack or Group components as alternatives.
