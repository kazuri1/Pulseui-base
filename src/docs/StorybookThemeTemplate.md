# Storybook Theme Integration Template

## How to Add Theme Support to Component Stories

### 1. **Import Required Dependencies**

```tsx
import React from "react";
import { ThemeProvider } from "../../ThemeProvider/ThemeProvider";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../../contexts/ThemeContext";
```

### 2. **Create Theme Wrapper Component**

```tsx
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="default-light">
      <div
        style={{
          padding: "2rem",
          backgroundColor: "var(--color-surface-50)",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            padding: "1rem",
            backgroundColor: "var(--color-surface-100)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-light)",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--color-text-primary)",
                fontSize: "var(--typography-h2-fontSize)",
              }}
            >
              Component Name Stories
            </h2>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
              }}
            >
              Switch themes to see how components adapt automatically
            </p>
          </div>
          <ThemeToggle showLabel={true} size="md" variant="outline" />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};
```

### 3. **Update Meta Configuration**

```tsx
const meta: Meta<typeof Component> = {
  title: "Components/ComponentName",
  component: Component,
  parameters: {
    layout: "fullscreen", // Changed from "centered" to "fullscreen"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
  // ... rest of argTypes
};
```

### 4. **Add Theme Showcase Story (Optional)**

```tsx
export const ThemeShowcase: Story = {
  render: () => {
    const ThemeAwareComponent = () => {
      const { isDark, themeMode } = useTheme();

      return (
        <div
          style={{
            padding: "2rem",
            backgroundColor: "var(--color-surface-50)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <h3
            style={{
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Theme-Aware Component Demo
          </h3>
          <p
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Current theme: <strong>{themeMode}</strong> (
            {isDark ? "Dark" : "Light"})
          </p>

          {/* Your component examples here */}
          <Component
            // ... props
            sx={{
              backgroundColor: "surface",
              border: "2px solid var(--color-primary-3)",
              borderRadius: "lg",
            }}
          />
        </div>
      );
    };

    return <ThemeAwareComponent />;
  },
};
```

### 5. **Update Existing Stories**

- Replace hardcoded colors with CSS variables: `var(--color-text-primary)`
- Use theme-aware spacing: `var(--spacing-4)`
- Use theme-aware border radius: `var(--radius-lg)`
- Use theme-aware shadows: `var(--shadow-md)`

### 6. **Example Color Updates**

```tsx
// Before (hardcoded)
style={{ color: "#475569" }}

// After (theme-aware)
style={{ color: "var(--color-text-secondary)" }}

// Before (hardcoded)
style={{ backgroundColor: "#f8fafc" }}

// After (theme-aware)
style={{ backgroundColor: "var(--color-surface-50)" }}
```

## **Components That Need Theme Updates:**

### **High Priority:**

- ✅ **Card** - Already updated
- 🆕 **Button** - Needs theme integration
- 🆕 **Input** - Needs theme integration
- 🆕 **Grid** - Needs theme integration
- 🆕 **Badge** - Needs theme integration

### **Medium Priority:**

- 🆕 **Alert** - Needs theme integration
- 🆕 **Avatar** - Needs theme integration
- 🆕 **Modal** - Needs theme integration
- 🆕 **Tabs** - Needs theme integration

### **Low Priority:**

- 🆕 **Calendar** - Needs theme integration
- 🆕 **Stepper** - Needs theme integration
- 🆕 **Pagination** - Needs theme integration

## **Benefits of Theme Integration:**

1. **Visual Consistency** - All stories use the same theme system
2. **Theme Testing** - Developers can see how components look in both themes
3. **Better UX** - Stories automatically adapt to user's theme preference
4. **Documentation** - Shows how components work with the theme system
5. **Development** - Easier to spot theme-related issues

## **Quick Update Checklist:**

- [ ] Add React import
- [ ] Import ThemeProvider, ThemeToggle, useTheme
- [ ] Create ThemeWrapper component
- [ ] Update meta decorators
- [ ] Change layout to "fullscreen"
- [ ] Add theme toggle header
- [ ] Update hardcoded colors to CSS variables
- [ ] Add ThemeShowcase story (optional)
- [ ] Test both light and dark themes

