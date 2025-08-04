# Radio Component

A customizable radio button component that provides a clean, accessible interface for single selection from a group of options. The Radio component supports various sizes, states, and label positions to fit different design requirements.

## Features

- **Multiple Sizes**: Extra small to extra large sizing options
- **Label Positioning**: Label can be positioned on the left or right
- **State Management**: Default, disabled, and error states
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Full styling customization through sx props
- **Form Integration**: Proper form attributes and validation support

## Basic Usage

```tsx
import { Radio } from "../Radio";

// Basic radio button
<Radio label="Text here" />

// Checked radio button
<Radio label="Text here" checked={true} />
```

## Props

| Prop            | Type                                   | Default     | Description                         |
| --------------- | -------------------------------------- | ----------- | ----------------------------------- |
| `label`         | `string`                               | -           | Radio button label text             |
| `showLabel`     | `boolean`                              | `true`      | Whether to show the label           |
| `size`          | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`      | Radio button size                   |
| `checked`       | `boolean`                              | `false`     | Whether the radio button is checked |
| `labelPosition` | `"right" \| "left"`                    | `"right"`   | Position of the label               |
| `state`         | `"default" \| "disabled" \| "error"`   | `"default"` | Radio button state                  |
| `onChange`      | `(checked: boolean) => void`           | -           | Change handler                      |
| `id`            | `string`                               | -           | Unique identifier                   |
| `name`          | `string`                               | -           | Name attribute for radio group      |
| `value`         | `string`                               | -           | Value attribute                     |
| `className`     | `string`                               | -           | Additional CSS class                |
| `sx`            | `SxProps`                              | -           | Style props                         |
| `style`         | `React.CSSProperties`                  | -           | Inline styles                       |

## Size Variants

The Radio component supports five different sizes:

```tsx
<Radio label="Extra Small" size="xs" />
<Radio label="Small" size="sm" />
<Radio label="Medium (default)" size="md" />
<Radio label="Large" size="lg" />
<Radio label="Extra Large" size="xl" />
```

## Label Positions

You can position the label on either side of the radio button:

```tsx
<Radio label="Label on the right (default)" labelPosition="right" />
<Radio label="Label on the left" labelPosition="left" />
```

## States

The Radio component supports three different states:

### Default State

```tsx
<Radio label="Default state" state="default" />
```

### Disabled State

```tsx
<Radio label="Disabled state" state="disabled" />
```

### Error State

```tsx
<Radio label="Error state" state="error" />
```

## Interactive Usage

### Basic Radio Group

```tsx
import { useState } from "react";

function RadioGroup() {
  const [selectedValue, setSelectedValue] = useState<string>("option1");

  return (
    <div>
      <Radio
        label="Option 1"
        name="group"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={() => setSelectedValue("option1")}
      />
      <Radio
        label="Option 2"
        name="group"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={() => setSelectedValue("option2")}
      />
      <Radio
        label="Option 3"
        name="group"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={() => setSelectedValue("option3")}
      />
    </div>
  );
}
```

### Without Label

```tsx
<Radio showLabel={false} />
```

### Mixed States

```tsx
<div>
  <Radio label="Normal radio" checked={false} />
  <Radio label="Checked radio" checked={true} />
  <Radio label="Disabled radio" state="disabled" />
  <Radio label="Disabled checked radio" checked={true} state="disabled" />
  <Radio label="Error radio" state="error" />
  <Radio label="Error checked radio" checked={true} state="error" />
</div>
```

## Form Integration

The Radio component integrates seamlessly with HTML forms:

```tsx
<form onSubmit={handleSubmit}>
  <fieldset>
    <legend>Choose your preferred option:</legend>
    <Radio label="Option A" name="preference" value="option-a" id="option-a" />
    <Radio label="Option B" name="preference" value="option-b" id="option-b" />
    <Radio label="Option C" name="preference" value="option-c" id="option-c" />
  </fieldset>
  <button type="submit">Submit</button>
</form>
```

## Accessibility

The Radio component is fully accessible and includes:

- **Keyboard Navigation**: Tab to focus, Space/Enter to select
- **Screen Reader Support**: Proper ARIA attributes and labels
- **Focus Indicators**: Clear visual focus states
- **Form Integration**: Proper form attributes and validation

### Keyboard Usage

- **Tab**: Move focus to the radio button
- **Space/Enter**: Select the radio button
- **Arrow Keys**: Navigate between radio buttons in a group

## Styling

The Radio component uses CSS modules and supports the sx prop system for custom styling:

```tsx
<Radio
  label="Custom Styled Radio"
  sx={{
    color: "var(--color-blue-6)",
    fontSize: "18px",
    fontWeight: "bold",
  }}
/>
```

## Design Tokens

The Radio component uses the design system tokens for consistent styling:

- **Colors**: Blue for selected state, gray for unselected, red for error
- **Spacing**: Consistent gaps between radio button and label
- **Typography**: Inherits font size and line height from size prop
- **Border radius**: Circular radio buttons
- **Motion**: Smooth transitions for state changes
- **Focus**: Blue focus ring for accessibility

## Examples

### Survey Form

```tsx
function SurveyForm() {
  const [age, setAge] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  return (
    <form>
      <div>
        <h3>Age Group</h3>
        <Radio
          label="18-25"
          name="age"
          value="18-25"
          checked={age === "18-25"}
          onChange={() => setAge("18-25")}
        />
        <Radio
          label="26-35"
          name="age"
          value="26-35"
          checked={age === "26-35"}
          onChange={() => setAge("26-35")}
        />
        <Radio
          label="36+"
          name="age"
          value="36+"
          checked={age === "36+"}
          onChange={() => setAge("36+")}
        />
      </div>

      <div>
        <h3>Experience Level</h3>
        <Radio
          label="Beginner"
          name="experience"
          value="beginner"
          checked={experience === "beginner"}
          onChange={() => setExperience("beginner")}
        />
        <Radio
          label="Intermediate"
          name="experience"
          value="intermediate"
          checked={experience === "intermediate"}
          onChange={() => setExperience("intermediate")}
        />
        <Radio
          label="Advanced"
          name="experience"
          value="advanced"
          checked={experience === "advanced"}
          onChange={() => setExperience("advanced")}
        />
      </div>
    </form>
  );
}
```

### Settings Panel

```tsx
function SettingsPanel() {
  const [theme, setTheme] = useState<string>("light");
  const [notifications, setNotifications] = useState<string>("all");

  return (
    <div>
      <h2>Settings</h2>

      <div>
        <h3>Theme</h3>
        <Radio
          label="Light Theme"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <Radio
          label="Dark Theme"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <Radio
          label="Auto"
          name="theme"
          value="auto"
          checked={theme === "auto"}
          onChange={() => setTheme("auto")}
        />
      </div>

      <div>
        <h3>Notifications</h3>
        <Radio
          label="All Notifications"
          name="notifications"
          value="all"
          checked={notifications === "all"}
          onChange={() => setNotifications("all")}
        />
        <Radio
          label="Important Only"
          name="notifications"
          value="important"
          checked={notifications === "important"}
          onChange={() => setNotifications("important")}
        />
        <Radio
          label="None"
          name="notifications"
          value="none"
          checked={notifications === "none"}
          onChange={() => setNotifications("none")}
        />
      </div>
    </div>
  );
}
```
