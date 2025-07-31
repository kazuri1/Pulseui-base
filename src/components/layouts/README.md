# Layout Components

This folder contains layout components that provide structural organization for the application.

## Purpose

Layout components are responsible for:

- Page structure and organization
- Grid systems and flexbox layouts
- Container components
- Spacing and positioning utilities
- Responsive layout patterns

## Structure

```
layouts/
├── index.ts          # Main exports
├── README.md         # This file
└── [ComponentName]/  # Individual layout components
    ├── ComponentName.tsx
    ├── ComponentName.module.scss
    ├── ComponentName.stories.tsx
    ├── ComponentName.test.tsx
    ├── index.ts
    └── README.md
```

## Usage

Layout components should be used to:

- Create consistent page structures
- Implement responsive designs
- Provide reusable layout patterns
- Organize content in a systematic way

## Examples

Common layout components include:

- `Container` - Wrapper with max-width and centering
- `Grid` - CSS Grid system
- `Flex` - Flexbox layout utilities
- `Stack` - Vertical spacing component
- `Cluster` - Horizontal spacing component
