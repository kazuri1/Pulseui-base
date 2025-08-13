# PulseUI Dev Environment

A clean, simple development environment for testing PulseUI components.

## Features

- **SimpleTopNav**: Top navigation bar with brand name, navigation items, and version selector
- **Theme Switcher**: Toggle between light and dark themes
- **Button Variant Selector**: Dropdown to change button variants in real-time
- **Centered Button**: Live preview of the selected button variant
- **Clean Layout**: Minimal, focused interface for component testing

## Components Used

- `SimpleTopNav`: Navigation component with version selector
- `Button`: Button component with multiple variants
- `ThemeProvider`: Theme context provider
- `Input`: Input component (imported but not currently used)

## Button Variants Available

- `filled` - Filled button style
- `subtle` - Subtle button style
- `light` - Light button style
- `outline` - Outline button style
- `white` - White button style
- `default` - Default button style

## Getting Started

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:5173`

3. Use the dropdown to change button variants and see them update in real-time

4. Toggle between light and dark themes using the theme switcher

## Navigation

The SimpleTopNav includes:

- Brand name: "PulseUI"
- Brand title: "Component Library"
- Navigation items: Home, About, Contact
- Version selector: Shows current version and allows switching

## Development

This environment is designed to be:

- **Simple**: Focused on component testing without clutter
- **Clean**: Minimal styling and layout
- **Interactive**: Real-time component updates
- **Responsive**: Works on different screen sizes

## Customization

To add more components or features:

1. Import the component in `src/App.tsx`
2. Add it to the main content area
3. Style it using the existing design tokens and CSS variables

## Design Tokens

The environment uses PulseUI design tokens for consistent styling:

- Colors: `--color-primary`, `--color-surface`, `--color-text-primary`, etc.
- Spacing: `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- Border radius: `--radius-sm`, `--radius-md`
- Border width: `--border-width-thin`, `--border-width-thick`
