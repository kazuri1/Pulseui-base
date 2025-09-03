# Figma Design Tokens Guide for PulseUI

This document outlines the core design tokens used in the PulseUI library and establishes the official naming convention for Figma variables. Adhering to this guide is crucial for ensuring a seamless, 1-to-1 synchronization between Figma and the codebase.

## Core Principle: Naming Convention

The synchronization script (`sync-figma-tokens.js`) works by mapping Figma variable names to CSS custom properties. The convention is simple:

**Figma Variable Grouping and Naming:**
`Group / Sub-Group / Name` -> `--group-sub-group-name`

**Examples:**
- A Figma variable named `xs` inside the `Spacing` group becomes `--spacing-xs`.
- A Figma variable named `Primary` inside the `Color / Text` groups becomes `--color-text-primary`.
- A Figma variable named `H1` inside a `Typography` group with a `Size` property becomes `--typography-size-h1`.

---

## I. Color Tokens (`color`)

Color tokens are the most extensive set. They are organized by their functional purpose (surface, text, border) and then by primitive color scales (blue, red, etc.).

### 1.1. Semantic Colors

These are the most important colors to define. They are theme-aware and are used to style all components.

| Figma Variable Name (`Color / ...`) | SCSS Token                       | Description                                     |
| ----------------------------------- | -------------------------------- | ----------------------------------------------- |
| `Background`                        | `--color-background`             | The main background color of the application.   |
| `Surface`                           | `--color-surface`                | The primary surface color for components.       |
| `Surface / Hover`                   | `--color-surface-hover`          | Hover state for surfaces.                       |
| `Text / Primary`                    | `--color-text-primary`           | For primary text content.                       |
| `Text / Secondary`                  | `--color-text-secondary`         | For secondary, less important text.             |
| `Border / Primary`                  | `--color-border-primary`         | Primary border color for components.            |
| `Border / Focus`                    | `--color-border-focus`           | Border color for focused elements (e.g., inputs). |
| `Primary`                           | `--color-primary`                | The main brand accent color.                    |
| `Primary / Hover`                   | `--color-primary-hover`          | Hover state for the primary brand color.        |

### 1.2. Status Colors

Used for alerts, notifications, and validation states.

| Figma Variable Name (`Color / Status / ...`) | SCSS Token          |
| -------------------------------------------- | ------------------- |
| `Success`                                    | `--color-success`   |
| `Warning`                                    | `--color-warning`   |
| `Error`                                      | `--color-error`     |
| `Info`                                       | `--color-info`      |

### 1.3. Primitive Color Scales

These are the base colors from which semantic colors are derived. Use a numerical scale from `0` (lightest) to `9` (darkest).

| Figma Variable Name (`Color / Blue / ...`) | SCSS Token           |
| ------------------------------------------ | -------------------- |
| `0`                                        | `--color-blue-0`     |
| `1`                                        | `--color-blue-1`     |
| `...`                                      | `...`                |
| `9`                                        | `--color-blue-9`     |

---

## II. Spacing Tokens (`spacing`)

Used for margins, paddings, and gaps.

| Figma Variable Name (`Spacing / ...`) | SCSS Token         | Recommended Value |
| ------------------------------------- | ------------------ | ----------------- |
| `xs`                                  | `--spacing-xs`     | `4px`             |
| `sm`                                  | `--spacing-sm`     | `8px`             |
| `md`                                  | `--spacing-md`     | `16px`            |
| `lg`                                  | `--spacing-lg`     | `24px`            |
| `xl`                                  | `--spacing-xl`     | `32px`            |
| `xxl`                                 | `--spacing-xxl`    | `48px`            |

---

## III. Sizing Tokens (`size`)

Used for component dimensions (width, height).

| Figma Variable Name (`Size / ...`) | SCSS Token      | Recommended Value |
| ---------------------------------- | --------------- | ----------------- |
| `xs`                               | `--size-xs`     | `24px`            |
| `sm`                               | `--size-sm`     | `32px`            |
| `md`                               | `--size-md`     | `40px`            |
| `lg`                               | `--size-lg`     | `48px`            |
| `xl`                               | `--size-xl`     | `56px`            |

---

## IV. Typography Tokens

### 4.1. Font Sizes (`font-size`)

| Figma Variable Name (`Font / Size / ...`) | SCSS Token           |
| ----------------------------------------- | -------------------- |
| `xs`                                      | `--font-size-xs`     |
| `sm`                                      | `--font-size-sm`     |
| `md`                                      | `--font-size-md`     |
| `lg`                                      | `--font-size-lg`     |
| `xl`                                      | `--font-size-xl`     |

### 4.2. Font Weights (`font-weight`)

| Figma Variable Name (`Font / Weight / ...`) | SCSS Token             |
| ------------------------------------------- | ---------------------- |
| `Normal`                                    | `--font-weight-normal` |
| `Medium`                                    | `--font-weight-medium` |
| `Bold`                                      | `--font-weight-bold`   |

### 4.3. Line Heights (`line-height`)

| Figma Variable Name (`Font / Line-Height / ...`) | SCSS Token             |
| ------------------------------------------------ | ---------------------- |
| `xs`                                             | `--line-height-xs`     |
| `sm`                                             | `--line-height-sm`     |
| `md`                                             | `--line-height-md`     |

---

## V. Border Radius Tokens (`radius`)

| Figma Variable Name (`Radius / ...`) | SCSS Token       | Recommended Value |
| ------------------------------------ | ---------------- | ----------------- |
| `xs`                                 | `--radius-xs`    | `2px`             |
| `sm`                                 | `--radius-sm`    | `4px`             |
| `md`                                 | `--radius-md`    | `8px`             |
| `lg`                                 | `--radius-lg`    | `12px`            |
| `xl`                                 | `--radius-xl`    | `16px`            |
| `full`                               | `--radius-full`  | `9999px`          |

---

## VI. Shadow Tokens (`shadow`)

It's recommended to define shadows as a set of properties in Figma. The script will translate them.

| Figma Variable Name (`Effect / Shadow / ...`) | SCSS Token        |
| --------------------------------------------- | ----------------- |
| `Normal`                                      | `--shadow-normal` |
| `Md`                                          | `--shadow-md`     |
| `Lg`                                          | `--shadow-lg`     |

---

By following these naming conventions in your Figma file, you will enable a reliable, automated, and error-free synchronization process, keeping your design system's source of truth perfectly aligned with the code.
