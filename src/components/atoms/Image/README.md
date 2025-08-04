# Image Component

A flexible and accessible image component that supports fallback images, different object-fit modes, border radius, and error handling. The Image component is designed to provide a consistent and reliable way to display images across your application.

## Features

- **Fallback Support**: Automatic fallback to a secondary image if the primary image fails to load
- **Object Fit Modes**: Multiple object-fit options for different display requirements
- **Border Radius**: Configurable border radius for rounded corners
- **Error Handling**: Custom error callbacks for failed image loads
- **Lazy Loading**: Support for lazy loading to improve performance
- **Accessible**: Proper alt text support and semantic HTML
- **Responsive**: Flexible width and height options

## Props

| Prop          | Type                                                       | Default   | Description                                                         |
| ------------- | ---------------------------------------------------------- | --------- | ------------------------------------------------------------------- |
| `src`         | `string`                                                   | -         | Image url (required)                                                |
| `fallbackSrc` | `string`                                                   | -         | Image url used as a fallback if the image cannot be loaded          |
| `fit`         | `ObjectFit`                                                | `"cover"` | Controls `object-fit` style                                         |
| `onError`     | `(event: SyntheticEvent<HTMLImageElement, Event>) => void` | -         | Called when image fails to load                                     |
| `radius`      | `number \| string`                                         | `0`       | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| `alt`         | `string`                                                   | `""`      | Alt text for accessibility                                          |
| `width`       | `number \| string`                                         | -         | Width of the image                                                  |
| `height`      | `number \| string`                                         | -         | Height of the image                                                 |
| `loading`     | `"lazy" \| "eager"`                                        | `"eager"` | Whether the image should be lazy loaded                             |

## Object Fit Modes

The Image component supports all standard CSS object-fit values:

### Cover (Default)

The image maintains its aspect ratio while filling the entire container, cropping if necessary.

```tsx
<Image src="/image.jpg" alt="Cover image" fit="cover" />
```

### Contain

The image maintains its aspect ratio and fits entirely within the container.

```tsx
<Image src="/image.jpg" alt="Contain image" fit="contain" />
```

### Fill

The image stretches to fill the container, potentially distorting the aspect ratio.

```tsx
<Image src="/image.jpg" alt="Fill image" fit="fill" />
```

### None

The image maintains its original size, potentially overflowing the container.

```tsx
<Image src="/image.jpg" alt="None image" fit="none" />
```

### Scale-down

The image is scaled down if it's larger than the container, but not scaled up if it's smaller.

```tsx
<Image src="/image.jpg" alt="Scale-down image" fit="scale-down" />
```

## Examples

### Basic Usage

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Description of image"
  width={300}
  height={200}
/>
```

### With Fallback

```tsx
<Image
  src="/primary-image.jpg"
  fallbackSrc="/fallback-image.jpg"
  alt="Image with fallback"
  width={300}
  height={200}
/>
```

### With Border Radius

```tsx
<Image
  src="/image.jpg"
  alt="Rounded image"
  width={200}
  height={150}
  radius={8}
/>
```

### Circular Image

```tsx
<Image
  src="/avatar.jpg"
  alt="Circular avatar"
  width={100}
  height={100}
  radius="50%"
  fit="cover"
/>
```

### Lazy Loading

```tsx
<Image
  src="/large-image.jpg"
  alt="Lazy loaded image"
  width={400}
  height={300}
  loading="lazy"
/>
```

### Error Handling

```tsx
<Image
  src="/image.jpg"
  alt="Image with error handling"
  onError={(event) => {
    console.log("Image failed to load:", event);
    // Handle error (e.g., show placeholder, retry, etc.)
  }}
/>
```

### Responsive Image

```tsx
<Image
  src="/responsive-image.jpg"
  alt="Responsive image"
  width="100%"
  height="auto"
  fit="cover"
/>
```

## Error Handling

The Image component provides robust error handling:

1. **Automatic Fallback**: If a `fallbackSrc` is provided, the component will automatically switch to it when the primary image fails to load.

2. **Error Callback**: You can provide an `onError` callback to handle failed image loads programmatically.

3. **Visual Feedback**: The component includes styling for error states to provide visual feedback.

```tsx
<Image
  src="/primary-image.jpg"
  fallbackSrc="/fallback-image.jpg"
  alt="Image with error handling"
  onError={(event) => {
    // Log error for debugging
    console.error("Image load failed:", event);

    // Show user notification
    showNotification("Image failed to load");

    // Track error in analytics
    trackError("image_load_failed", { src: event.target.src });
  }}
/>
```

## Performance Considerations

### Lazy Loading

Use lazy loading for images that are not immediately visible:

```tsx
<Image src="/below-fold-image.jpg" alt="Lazy loaded image" loading="lazy" />
```

### Responsive Images

For responsive designs, consider using CSS or responsive image techniques:

```tsx
<Image
  src="/responsive-image.jpg"
  alt="Responsive image"
  width="100%"
  height="auto"
  fit="cover"
/>
```

## Accessibility

The Image component includes several accessibility features:

- **Alt Text**: Always provide meaningful alt text for screen readers
- **Semantic HTML**: Uses proper `<img>` element with all necessary attributes
- **Loading States**: Proper handling of loading and error states

```tsx
<Image
  src="/decorative-image.jpg"
  alt="" // Empty alt for decorative images
/>

<Image
  src="/content-image.jpg"
  alt="A red car parked in front of a modern building" // Descriptive alt for content images
/>
```

## Styling

The Image component supports custom styling through the sx prop system:

```tsx
<Image
  src="/image.jpg"
  alt="Styled image"
  sx={{
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }}
/>
```

## Design Tokens

The Image component uses the design system tokens for consistent styling:

- **Border Radius**: Uses theme radius values or custom CSS values
- **Transitions**: Uses motion tokens for smooth transitions
- **Colors**: Uses theme colors for error states and backgrounds
