# Calendar Component

A comprehensive calendar component that supports three view variants (month, year, decade) with fully connected navigation between them.

## Features

- **Three View Variants**: Month, Year, and Decade views
- **Fully Connected Navigation**: Seamless transitions between all views
- **Interactive Selection**: Date, month, and year selection capabilities
- **Range Selection**: Support for date range selection
- **Customizable**: Size, styling, and behavior options
- **Accessible**: ARIA labels and keyboard navigation support

## View Variants

### 1. Month View (`view="month"`)

- Displays a traditional calendar grid with dates
- Shows current month with navigation to previous/next months
- Supports date selection and range selection
- Displays day labels and outside dates (configurable)

### 2. Year View (`view="year"`)

- Shows 12 months in a grid layout
- Click any month to navigate to that month's detailed view
- Navigation arrows move between years
- Header click switches to decade view

### 3. Decade View (`view="decade"`)

- Displays 10 years in a grid layout
- Click any year to navigate to that year's month view
- Navigation arrows move between decades
- Header click returns to month view

## Connected Navigation

The calendar supports fully connected navigation between all three view variants:

### Navigation Flow

```
Month View ←→ Year View ←→ Decade View
    ↑           ↑           ↑
Header Click  Header Click  Header Click
```

### How It Works

1. **Header Click Navigation**: Click the header title to cycle through views
2. **Element Click Navigation**: Click months/years to navigate to specific views
3. **Arrow Navigation**: Use left/right arrows to navigate within the current view
4. **Seamless Transitions**: All navigation maintains context and selection state

## Props

| Prop             | Type                                            | Default   | Description                               |
| ---------------- | ----------------------------------------------- | --------- | ----------------------------------------- |
| `view`           | `"month" \| "year" \| "decade"`                 | `"month"` | Current view variant                      |
| `connected`      | `boolean`                                       | `false`   | Enable connected navigation between views |
| `onViewChange`   | `(view: "month" \| "year" \| "decade") => void` | -         | Callback when view changes                |
| `onDateSelect`   | `(date: Date) => void`                          | -         | Callback when a date is selected          |
| `onYearSelect`   | `(year: number) => void`                        | -         | Callback when a year is selected          |
| `onMonthChange`  | `(date: Date) => void`                          | -         | Callback when month changes               |
| `showNavigation` | `boolean`                                       | `true`    | Show navigation arrows                    |
| `showDayLabels`  | `boolean`                                       | `true`    | Show day labels in month view             |
| `size`           | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`          | `"md"`    | Calendar size                             |

## Usage Examples

### Basic Connected Calendar

```tsx
import { Calendar } from "pulseui-base";

function MyCalendar() {
  const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
    "month"
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Calendar
      view={currentView}
      connected={true}
      selectedDate={selectedDate}
      onViewChange={setCurrentView}
      onDateSelect={setSelectedDate}
    />
  );
}
```

### View-Specific Selection

```tsx
function SmartCalendar() {
  const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
    "month"
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );

  return (
    <Calendar
      view={currentView}
      connected={true}
      selectedDate={currentView === "month" ? selectedDate : undefined}
      selectedYear={
        currentView === "year" || currentView === "decade"
          ? selectedYear
          : undefined
      }
      onViewChange={setCurrentView}
      onDateSelect={setSelectedDate}
      onYearSelect={setSelectedYear}
    />
  );
}
```

## Navigation Patterns

### 1. Header Click Navigation

- **Month → Year**: Click month/year title
- **Year → Decade**: Click year title
- **Decade → Month**: Click decade range title

### 2. Element Click Navigation

- **Month View**: Click dates to select
- **Year View**: Click months to go to month view
- **Decade View**: Click years to go to year view

### 3. Arrow Navigation

- **Month**: Previous/Next month
- **Year**: Previous/Next year
- **Decade**: Previous/Next decade

## State Management

The calendar component manages several pieces of state internally:

- **Current Date**: The currently displayed date
- **Current Year**: The currently displayed year (for year/decade views)
- **View State**: Current view variant
- **Selection State**: Selected dates, years, or months

## Best Practices

1. **Enable Connected Navigation**: Set `connected={true}` for seamless user experience
2. **Handle View Changes**: Implement `onViewChange` to track current view
3. **Context-Aware Selection**: Only pass relevant selection props based on current view
4. **Consistent State**: Maintain calendar state in parent component for persistence
5. **User Feedback**: Provide visual feedback for current view and selections

## Accessibility

- **ARIA Labels**: Navigation buttons have appropriate ARIA labels
- **Keyboard Navigation**: Support for arrow key navigation
- **Screen Reader Support**: Proper semantic structure and labels
- **Focus Management**: Logical tab order and focus indicators

## Examples in Storybook

The component includes comprehensive Storybook stories demonstrating:

- **FullyConnectedNavigation**: Complete connected navigation example
- **ViewSwitching**: Manual view switching with buttons
- **ConnectedCalendarExample**: Real-world implementation with state management
- **RangeSelection**: Date range selection capabilities
- **Customization**: Size, styling, and behavior variations

## Troubleshooting

### Common Issues

1. **Calendar Gets Stuck**: Ensure no variable name conflicts in `useMemo` hooks
2. **View Not Changing**: Check that `connected={true}` and `onViewChange` are set
3. **Selection Not Working**: Verify correct selection props for current view
4. **Navigation Issues**: Ensure `showNavigation={true}` is set

### Performance Considerations

- The component uses `useMemo` for expensive calculations
- Date generation is optimized for the current view
- Re-renders are minimized through proper dependency arrays
- Large date ranges are handled efficiently
