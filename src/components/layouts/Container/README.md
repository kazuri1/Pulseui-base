# Container Component

A responsive container component that provides consistent max-width and padding for content.

## Usage

```tsx
import { Container } from "../layouts/Container";

<Container>
  <h1>Your content here</h1>
  <p>This content will be centered with appropriate max-width.</p>
</Container>;
```

## Container selectors

| Selector | Static selector           | Description  |
| -------- | ------------------------- | ------------ |
| `root`   | `.pulseui-Container-root` | Root element |

## Container CSS variables

| Selector | Variable           | Description                  |
| -------- | ------------------ | ---------------------------- |
| `root`   | `--container-size` | Controls container max-width |

## Props

| Prop        | Type                                             | Default   | Description                                                                                                                                                 |
| ----------- | ------------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `React.ReactNode`                                | -         | Content to be wrapped                                                                                                                                       |
| `fluid`     | `boolean`                                        | `false`   | If set, the container takes 100% width of its parent and `size` prop is ignored                                                                             |
| `size`      | `number \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`    | `max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set |
| `strategy`  | `"block" \| "grid"`                              | `"block"` | Centering strategy                                                                                                                                          |
| `className` | `string`                                         | `""`      | Additional CSS classes                                                                                                                                      |

## Sizes

- **xs**: 36rem (576px)
- **sm**: 48rem (768px)
- **md**: 62rem (992px) - Default
- **lg**: 75rem (1200px)
- **xl**: 87.5rem (1400px)

## Strategies

- **block**: Standard block display (default)
- **grid**: Grid display with breakout support

### Grid Strategy Features

The `strategy="grid"` provides advanced layout capabilities:

- **Default behavior**: Content is constrained to the container's max-width
- **Breakout elements**: Children with `data-breakout` attribute span the full viewport width
- **Nested containers**: Elements with `data-container` inside breakout elements maintain the main container's width

#### Breakout Example

```tsx
<Container strategy="grid">
  <div>Main content (constrained width)</div>

  <div data-breakout>
    <div data-container>
      Container inside breakout (same width as main content)
    </div>
  </div>

  <div>More main content</div>
</Container>
```

## Examples

### Default Container

```tsx
<Container>
  <h1>Page Title</h1>
  <p>Content goes here...</p>
</Container>
```

### Fluid Container

```tsx
<Container fluid>
  <h1>Full-width content</h1>
</Container>
```

### Small Container

```tsx
<Container size="sm">
  <h1>Focused content</h1>
  <p>Perfect for forms or focused content areas.</p>
</Container>
```

### Large Container

```tsx
<Container size="lg">
  <h1>Wide content</h1>
  <p>Great for dashboards and wide layouts.</p>
</Container>
```

### Grid Strategy

```tsx
<Container strategy="grid">
  <h1>Centered content</h1>
  <p>Content is centered using CSS Grid.</p>
</Container>
```
