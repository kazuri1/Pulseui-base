# Card Component

A versatile card component that displays content with an optional image, title, badge, description, and button. The Card component is designed to present information in a clean, organized layout with modern styling and interactive capabilities.

## Features

- **Optional Image**: Top image with configurable fit modes and border radius
- **Title and Badge**: Flexible header with title and optional badge
- **Description**: Text content area for additional information
- **Button**: Optional call-to-action button with full customization
- **Interactive**: Optional clickable card with hover effects
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Customizable**: Full styling customization through sx props

## Basic Usage

```tsx
import { Card } from "../Card";

// Basic card
<Card
  title="Card Title"
  description="This is a description of the card content."
  buttonText="Learn More"
/>;
```

## With Image

```tsx
<Card
  title="Mountain Adventure"
  description="Explore the beautiful mountain landscapes."
  buttonText="View Details"
  imageSrc="https://example.com/mountain.jpg"
  imageAlt="Mountain landscape"
/>
```

## With Badge

```tsx
<Card
  title="New Feature"
  badge="NEW"
  badgeVariant="filled"
  description="Check out our latest feature release."
  buttonText="Learn More"
/>
```

## Props

| Prop              | Type                                                                            | Default    | Description                              |
| ----------------- | ------------------------------------------------------------------------------- | ---------- | ---------------------------------------- |
| `title`           | `string`                                                                        | -          | Card title                               |
| `badge`           | `string`                                                                        | -          | Badge text                               |
| `badgeVariant`    | `"dot" \| "filled" \| "subtle" \| "light" \| "outline" \| "white" \| "default"` | `"filled"` | Badge variant style                      |
| `description`     | `string`                                                                        | -          | Card description                         |
| `buttonText`      | `string`                                                                        | -          | Button text                              |
| `buttonVariant`   | `"filled" \| "subtle" \| "light" \| "outline" \| "white" \| "default"`          | `"filled"` | Button variant style                     |
| `buttonSize`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                          | `"md"`     | Button size                              |
| `imageSrc`        | `string`                                                                        | -          | Image source URL                         |
| `imageAlt`        | `string`                                                                        | `""`       | Image alt text                           |
| `imageFit`        | `"fill" \| "contain" \| "cover" \| "none" \| "scale-down"`                      | `"cover"`  | Image fit mode                           |
| `imageRadius`     | `number \| string`                                                              | `0`        | Image border radius                      |
| `showImage`       | `boolean`                                                                       | `true`     | Whether to show the image                |
| `showTitle`       | `boolean`                                                                       | `true`     | Whether to show the title                |
| `showBadge`       | `boolean`                                                                       | `true`     | Whether to show the badge                |
| `showDescription` | `boolean`                                                                       | `true`     | Whether to show the description          |
| `showButton`      | `boolean`                                                                       | `true`     | Whether to show the button               |
| `children`        | `React.ReactNode`                                                               | -          | Custom content to render inside the card |
| `onButtonClick`   | `() => void`                                                                    | -          | Button click handler                     |
| `onClick`         | `() => void`                                                                    | -          | Card click handler                       |
| `clickable`       | `boolean`                                                                       | `false`    | Whether the card is clickable            |
| `disabled`        | `boolean`                                                                       | `false`    | Disabled state                           |
| `className`       | `string`                                                                        | -          | Additional CSS class                     |
| `sx`              | `SxProps`                                                                       | -          | Style props                              |
| `style`           | `React.CSSProperties`                                                           | -          | Inline styles                            |

## Image Options

### Image Fit Modes

```tsx
// Cover (default) - fills the container, may crop
<Card imageFit="cover" />

// Contain - fits entire image, may have empty space
<Card imageFit="contain" />

// Fill - stretches to fill container
<Card imageFit="fill" />

// None - original size
<Card imageFit="none" />

// Scale down - smaller of cover or contain
<Card imageFit="scale-down" />
```

### Image Border Radius

```tsx
// Rounded corners
<Card imageRadius={8} />

// Circular image
<Card imageRadius="50%" />

// Using design tokens
<Card imageRadius="var(--radius-lg)" />
```

## Badge Variants

```tsx
<Card badge="NEW" badgeVariant="dot" />
<Card badge="FEATURED" badgeVariant="filled" />
<Card badge="BETA" badgeVariant="subtle" />
<Card badge="PREVIEW" badgeVariant="outline" />
```

## Button Variants

```tsx
<Card buttonText="Primary" buttonVariant="filled" />
<Card buttonText="Secondary" buttonVariant="subtle" />
<Card buttonText="Outline" buttonVariant="outline" />
<Card buttonText="Light" buttonVariant="light" />
```

## Interactive Cards

### Clickable Card

```tsx
<Card
  title="Clickable Card"
  description="This entire card is clickable."
  clickable={true}
  onClick={() => console.log("Card clicked!")}
/>
```

### Button Only

```tsx
<Card
  title="Card with Button"
  description="Only the button is clickable."
  buttonText="Action"
  onButtonClick={() => console.log("Button clicked!")}
/>
```

## Disabled State

```tsx
<Card
  title="Disabled Card"
  description="This card is disabled."
  buttonText="Disabled Button"
  disabled={true}
/>
```

## Boolean Controls

The Card component provides boolean props to control the visibility of each element:

### Hide Title

```tsx
<Card
  title="Hidden Title"
  description="This card has a title but it's hidden."
  showTitle={false}
/>
```

### Hide Badge

```tsx
<Card
  title="Card Title"
  badge="HIDDEN"
  description="This card has a badge but it's hidden."
  showBadge={false}
/>
```

### Hide Description

```tsx
<Card
  title="Card Title"
  description="This description is hidden."
  showDescription={false}
/>
```

### Hide Button

```tsx
<Card
  title="Card Title"
  description="This card has a button but it's hidden."
  buttonText="Hidden Button"
  showButton={false}
/>
```

### Hide Image

```tsx
<Card
  title="Card Title"
  description="This card has an image but it's hidden."
  imageSrc="https://example.com/image.jpg"
  showImage={false}
/>
```

### Multiple Controls

```tsx
<Card
  title="Minimal Card"
  badge="NEW"
  description="This is a minimal card with only title and badge."
  buttonText="Action"
  imageSrc="https://example.com/image.jpg"
  showDescription={false}
  showButton={false}
  showImage={false}
/>
```

## Without Image

```tsx
<Card
  title="Text Only Card"
  description="This card has no image."
  buttonText="Learn More"
  showImage={false}
/>
```

## Custom Content

The Card component supports custom content through the `children` prop. This allows you to add any custom elements between the description and button:

### Product Card with Price

```tsx
<Card
  title="Premium Widget"
  badge="SALE"
  description="High-quality product with advanced features."
  buttonText="Add to Cart"
  imageSrc="/widget-image.jpg"
  imageAlt="Premium widget"
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        color: "var(--color-blue-6)",
      }}
    >
      $99.99
    </span>
    <span
      style={{ color: "var(--color-gray-6)", textDecoration: "line-through" }}
    >
      $129.99
    </span>
  </div>
  <div style={{ marginTop: "8px" }}>
    <span style={{ color: "var(--color-green-6)", fontSize: "14px" }}>
      ✓ In Stock
    </span>
  </div>
</Card>
```

### User Profile with Stats

```tsx
<Card
  title="John Doe"
  description="Software Developer"
  buttonText="View Profile"
  imageSrc="/avatar.jpg"
  imageAlt="User avatar"
>
  <div style={{ display: "flex", gap: "16px", justifyContent: "space-around" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>1.2k</div>
      <div style={{ fontSize: "12px", color: "var(--color-gray-6)" }}>
        Followers
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>348</div>
      <div style={{ fontSize: "12px", color: "var(--color-gray-6)" }}>
        Following
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>156</div>
      <div style={{ fontSize: "12px", color: "var(--color-gray-6)" }}>
        Posts
      </div>
    </div>
  </div>
</Card>
```

### Task List

```tsx
<Card
  title="Project Tasks"
  description="Current project progress"
  buttonText="View All"
  showImage={false}
>
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Design Review</span>
      <span style={{ color: "var(--color-green-6)" }}>✓ Complete</span>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Frontend Development</span>
      <span style={{ color: "var(--color-blue-6)" }}>In Progress</span>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Backend API</span>
      <span style={{ color: "var(--color-orange-6)" }}>Pending</span>
    </div>
  </div>
</Card>
```

## Examples

### Product Card

```tsx
<Card
  title="Premium Widget"
  badge="BEST SELLER"
  badgeVariant="filled"
  description="High-quality widget with advanced features."
  buttonText="Add to Cart"
  imageSrc="/widget-image.jpg"
  imageAlt="Premium widget"
  onButtonClick={handleAddToCart}
/>
```

### Article Card

```tsx
<Card
  title="Getting Started Guide"
  badge="TUTORIAL"
  badgeVariant="subtle"
  description="Learn the basics of our platform with this comprehensive guide."
  buttonText="Read More"
  imageSrc="/guide-thumbnail.jpg"
  imageAlt="Guide thumbnail"
  clickable={true}
  onClick={handleReadArticle}
/>
```

### Feature Card

```tsx
<Card
  title="Advanced Analytics"
  description="Get detailed insights into your data with our advanced analytics dashboard."
  buttonText="Try Demo"
  buttonVariant="outline"
  imageSrc="/analytics-demo.jpg"
  imageAlt="Analytics dashboard"
  imageRadius={12}
/>
```

## Styling

The Card component uses CSS modules and supports the sx prop system for custom styling:

```tsx
<Card
  title="Custom Styled Card"
  description="This card has custom styling."
  sx={{
    backgroundColor: "var(--color-blue-0)",
    borderColor: "var(--color-blue-6)",
    maxWidth: "500px",
  }}
/>
```

## Accessibility

- Proper ARIA attributes when used as buttons
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators for interactive cards

## Design Tokens

The Card component uses the design system tokens for consistent styling:

- **Colors**: White background with gray borders
- **Spacing**: Consistent padding and gaps
- **Typography**: Large titles, medium descriptions
- **Border radius**: Large radius for modern look
- **Shadows**: Normal and hover shadows for depth
- **Motion**: Smooth transitions for interactions
