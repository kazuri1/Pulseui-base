# Tabs

A comprehensive tab component system built on top of the SingleTab component, providing full keyboard navigation, accessibility features, and flexible layouts.

## Features

- **Multiple Orientations**: Horizontal and vertical layouts
- **Flexible Placement**: Left and right placement for vertical tabs
- **Keyboard Navigation**: Full keyboard support with arrow keys, Home, End
- **Accessibility**: Complete ARIA attributes and screen reader support
- **Controlled & Uncontrolled**: Both controlled and uncontrolled modes
- **Tab Deactivation**: Optional ability to deactivate tabs
- **Mount Control**: Control whether inactive panels stay mounted
- **Multiple Variants**: Default and pill variants using SingleTab
- **Responsive Design**: Adapts to different screen sizes

## Components

The Tabs system consists of four main components:

- **Tabs**: The main container that manages state
- **TabsList**: Container for tab buttons
- **TabsTab**: Individual tab button (uses SingleTab)
- **TabsPanel**: Content container for each tab

## Usage

```tsx
import { Tabs, TabsList, TabsTab, TabsPanel } from "pulseui-base";

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTab value="tab1" placeholder="First Tab" />
        <TabsTab value="tab2" placeholder="Second Tab" />
        <TabsTab value="tab3" placeholder="Third Tab" />
      </TabsList>
      <TabsPanel value="tab1">
        <h3>First Tab Content</h3>
        <p>This is the content of the first tab.</p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <h3>Second Tab Content</h3>
        <p>This is the content of the second tab.</p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <h3>Third Tab Content</h3>
        <p>This is the content of the third tab.</p>
      </TabsPanel>
    </Tabs>
  );
}
```

## Tabs Props

| Prop Name                 | Type                              | Default        | Description                                                               |
| ------------------------- | --------------------------------- | -------------- | ------------------------------------------------------------------------- |
| `children`                | `React.ReactNode`                 | -              | Tabs content                                                              |
| `value`                   | `string \| null`                  | -              | Controlled component value                                                |
| `defaultValue`            | `string \| null`                  | -              | Uncontrolled component default value                                      |
| `onChange`                | `(value: string \| null) => void` | -              | Called when value changes                                                 |
| `orientation`             | `"horizontal" \| "vertical"`      | `"horizontal"` | Tabs orientation                                                          |
| `placement`               | `"left" \| "right"`               | `"left"`       | TabsList placement (applies to both horizontal and vertical orientations) |
| `borderPosition`          | `"top" \| "bottom"`               | `"bottom"`     | Border position for horizontal tabs (top or bottom)                       |
| `activateTabWithKeyboard` | `boolean`                         | `true`         | If set, tab is activated with arrow key press                             |
| `allowTabDeactivation`    | `boolean`                         | `false`        | If set, tab can be deactivated                                            |
| `loop`                    | `boolean`                         | `true`         | If set, arrow key presses loop through items                              |
| `keepMounted`             | `boolean`                         | `true`         | If false, TabsPanel content unmounts when inactive                        |
| `id`                      | `string`                          | auto-generated | Base id for connecting labels with controls                               |

## TabsList Props

| Prop Name  | Type                                                                                            | Default        | Description                                   |
| ---------- | ----------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------- |
| `children` | `React.ReactNode`                                                                               | -              | Tabs.Tab components                           |
| `grow`     | `boolean`                                                                                       | `false`        | Determines whether tabs should take all space |
| `justify`  | `"flex-start" \| "center" \| "flex-end" \| "space-between" \| "space-around" \| "space-evenly"` | `"flex-start"` | Tabs alignment                                |

## TabsTab Props

| Prop Name     | Type                                     | Default     | Description                                                   |
| ------------- | ---------------------------------------- | ----------- | ------------------------------------------------------------- |
| `value`       | `string`                                 | -           | Value of associated control                                   |
| `keepMounted` | `boolean`                                | -           | Override parent keepMounted setting                           |
| `variant`     | `"default" \| "pill"`                    | `"default"` | Visual variant                                                |
| `position`    | `"top" \| "bottom" \| "left" \| "right"` | `"top"`     | Position of underline/border                                  |
| `leftIcon`    | `SvgIconComponent \| string \| boolean`  | `false`     | Left icon (string names: "home", "settings", "person", etc.)  |
| `rightIcon`   | `SvgIconComponent \| string \| boolean`  | `false`     | Right icon (string names: "home", "settings", "person", etc.) |
| `placeholder` | `string`                                 | `""`        | Tab label text                                                |
| `disabled`    | `boolean`                                | `false`     | Disabled state                                                |
| `children`    | `React.ReactNode`                        | -           | Tab content                                                   |
| `className`   | `string`                                 | `""`        | Custom class name                                             |
| `sx`          | `SxProps`                                | -           | Custom styles                                                 |
| `style`       | `React.CSSProperties`                    | -           | Inline styles                                                 |

**Note:** `TabsTab` extends all props from `SingleTab` except `state` and `onClick` (which are handled internally by the Tabs system). This means you have full control over the appearance and behavior of individual tabs.

## TabsPanel Props

| Prop Name     | Type              | Default | Description                         |
| ------------- | ----------------- | ------- | ----------------------------------- |
| `children`    | `React.ReactNode` | -       | Panel content                       |
| `value`       | `string`          | -       | Value of associated control         |
| `keepMounted` | `boolean`         | -       | Override parent keepMounted setting |

## Orientations and Placements

### Horizontal Left (Default)

```tsx
<Tabs defaultValue="tab1" orientation="horizontal" placement="left">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>
```

### Horizontal Right

```tsx
<Tabs defaultValue="tab1" orientation="horizontal" placement="right">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>
```

### Vertical Left

```tsx
<Tabs defaultValue="tab1" orientation="vertical" placement="left">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>
```

### Vertical Right

```tsx
<Tabs defaultValue="tab1" orientation="vertical" placement="right">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>
```

## Placement Options

The `placement` prop controls where the tabs are positioned relative to the content:

### Horizontal Orientation

- **`placement="left"`** (default): Tabs are positioned at the top of the content
- **`placement="right"`**: Tabs are positioned at the bottom of the content

### Vertical Orientation

- **`placement="left"`** (default): Tabs are positioned to the left of the content
- **`placement="right"`**: Tabs are positioned to the right of the content

## Border Position Options

The `borderPosition` prop controls where the border appears on horizontal tabs:

### Horizontal Tabs

- **`borderPosition="bottom"`** (default): Border appears at the bottom of the tabs list
- **`borderPosition="top"`**: Border appears at the top of the tabs list

```tsx
// Border at the bottom (default)
<Tabs defaultValue="tab1" borderPosition="bottom">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  {/* ... panels */}
</Tabs>

// Border at the top
<Tabs defaultValue="tab1" borderPosition="top">
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  {/* ... panels */}
</Tabs>
```

## Variants

### Default Variant

```tsx
<TabsTab value="tab1" placeholder="Default Tab" variant="default" />
```

### Pill Variant

```tsx
<TabsTab value="tab1" placeholder="Pill Tab" variant="pill" />
```

### All SingleTab Props

Since `TabsTab` uses `SingleTab` internally, you can control all `SingleTab` props:

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTab
      value="tab1"
      variant="default"
      position="top"
      leftIcon="home"
      rightIcon="settings"
      placeholder="Home"
    />
    <TabsTab
      value="tab2"
      variant="pill"
      position="bottom"
      leftIcon="person"
      placeholder="Profile"
    />
    <TabsTab
      value="tab3"
      variant="default"
      position="left"
      rightIcon="notifications"
      placeholder="Notifications"
    />
    <TabsTab
      value="tab4"
      variant="pill"
      position="right"
      leftIcon="mail"
      rightIcon="flag"
      placeholder="Messages"
    />
    <TabsTab
      value="tab5"
      variant="default"
      position="top"
      placeholder="Disabled Tab"
      disabled={true}
    />
  </TabsList>
  {/* TabsPanel components */}
</Tabs>
```

**Available icon string names:** "home", "settings", "person", "search", "notifications", "mail", "help", "error", "warning", "check", "favorite", "bookmark", "flag", "lock"

## Features

### Controlled Component

```tsx
const [value, setValue] = useState("tab1");

<Tabs value={value} onChange={setValue}>
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>;
```

### Tab Deactivation

```tsx
<Tabs defaultValue="tab1" allowTabDeactivation>
  <TabsList>
    <TabsTab value="tab1" placeholder="First Tab" />
    <TabsTab value="tab2" placeholder="Second Tab" />
  </TabsList>
  <TabsPanel value="tab1">Content 1</TabsPanel>
  <TabsPanel value="tab2">Content 2</TabsPanel>
</Tabs>
```

### Growing Tabs

```tsx
<Tabs defaultValue="tab1">
  <TabsList grow>
    <TabsTab value="tab1" placeholder="First" />
    <TabsTab value="tab2" placeholder="Second" />
    <TabsTab value="tab3" placeholder="Third" />
  </TabsList>
  {/* ... panels */}
</Tabs>
```

### Centered Tabs

```tsx
<Tabs defaultValue="tab1">
  <TabsList justify="center">
    <TabsTab value="tab1" placeholder="First" />
    <TabsTab value="tab2" placeholder="Second" />
    <TabsTab value="tab3" placeholder="Third" />
  </TabsList>
  {/* ... panels */}
</Tabs>
```

### With Icons

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTab value="tab1" placeholder="Home" leftIcon={true} />
    <TabsTab value="tab2" placeholder="Settings" leftIcon={true} />
    <TabsTab value="tab3" placeholder="Profile" leftIcon={true} />
  </TabsList>
  {/* ... panels */}
</Tabs>
```

## Keyboard Navigation

The Tabs component supports full keyboard navigation:

- **Arrow Keys**: Navigate between tabs
- **Home/End**: Jump to first/last tab
- **Enter/Space**: Activate tab
- **Tab**: Move focus between tabs and panels

## Accessibility

- Complete ARIA attributes for screen readers
- Proper focus management
- Keyboard navigation support
- High contrast support
- Reduced motion support

## Performance

- Efficient state management
- Minimal re-renders
- Optional panel mounting control
- Lightweight DOM structure

## Browser Support

- Modern browsers with ES6+ support
- IE11+ with polyfills
- Mobile browsers
- Screen readers
