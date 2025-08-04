# Calendar Component

A comprehensive calendar component built using design tokens and modular architecture. The Calendar component supports three different views (Month, Year, Decade) and is composed of smaller parts (`CalendarDate` and `CalendarTitle`) for maximum flexibility and reusability.

## Features

- ✅ **Multiple Views**: Month, Year, and Decade views
- ✅ **Connected Navigation**: Seamless navigation between views
- ✅ **Multiple Sizes**: xs, sm, md, lg, xl
- ✅ **Date Selection**: Single date and range selection
- ✅ **Year Selection**: Individual year selection
- ✅ **Decade Selection**: Decade range selection
- ✅ **Navigation**: Previous/next month/decade/century navigation
- ✅ **Customizable**: Day labels, navigation visibility, etc.
- ✅ **Accessibility**: Full keyboard navigation and ARIA support
- ✅ **Design Tokens**: Consistent styling using design system tokens
- ✅ **Responsive**: Mobile-friendly design
- ✅ **Today Indicator**: Visual indicator for current date
- ✅ **Range Selection**: Support for date range selection
- ✅ **Disabled State**: Full disabled state support
- ✅ **Custom Indicators**: Configurable date indicators with custom logic
- ✅ **Weekend Styling**: Saturday and Sunday dates displayed in red

## Usage

### Basic Calendar

```tsx
import { Calendar } from "./components/atoms/Calendar";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Calendar
      date={new Date(2022, 0, 1)}
      view="month"
      selectedDate={selectedDate}
      onDateSelect={setSelectedDate}
    />
  );
}
```

### Year View

```tsx
function App() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const handleMonthChange = (date: Date) => {
    setSelectedMonth(date.getMonth());
  };

  return (
    <Calendar
      date={new Date(2022, 0, 1)}
      view="year"
      onMonthChange={handleMonthChange}
    />
  );
}
```

### Decade View (Year Selection)

```tsx
function App() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <Calendar
      date={new Date(2022, 0, 1)}
      view="decade"
      selectedYear={selectedYear}
      onYearSelect={handleYearSelect}
    />
  );
}
```

### Connected Navigation

```tsx
function App() {
  const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
    "month"
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Calendar
      date={new Date(2022, 0, 1)}
      view={currentView}
      connected={true}
      selectedDate={selectedDate}
      onDateSelect={setSelectedDate}
      onViewChange={setCurrentView}
    />
  );
}
```

### Range Selection

```tsx
function App() {
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(date);
      setRangeEnd(null);
    } else {
      if (date >= rangeStart) {
        setRangeEnd(date);
      } else {
        setRangeStart(date);
        setRangeEnd(rangeStart);
      }
    }
  };

  return (
    <Calendar
      date={new Date(2022, 0, 1)}
      rangeStart={rangeStart}
      rangeEnd={rangeEnd}
      onDateSelect={handleDateSelect}
    />
  );
}
```

### Custom Configuration

```tsx
<Calendar
  date={new Date()}
  size="lg"
  showNavigation={false}
  showDayLabels={false}
  dayLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
  disabled={false}
/>
```

### Custom Indicators

```tsx
function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Custom indicator function - show indicators for weekends and today
  const getDateIndicator = (date: Date) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday or Saturday

    return isToday || isWeekend;
  };

  return (
    <Calendar
      date={new Date(2024, 0, 15)}
      selectedDate={selectedDate}
      onDateSelect={setSelectedDate}
      showIndicators={true}
      getDateIndicator={getDateIndicator}
    />
  );
}
```

### Weekend Styling

The Calendar component automatically displays Saturday and Sunday dates in red color. This is built into the `CalendarDate` component and works across all calendar views.

```tsx
<Calendar
  date={new Date()}
  // Weekend dates (Saturday/Sunday) will automatically appear in red
/>
```

## API Reference

### Calendar Props

| Prop                  | Type                                               | Default                                      | Description                                              |
| --------------------- | -------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------- |
| `date`                | `Date`                                             | `new Date()`                                 | The date to display                                      |
| `view`                | `"month" \| "year" \| "decade"`                    | `"month"`                                    | Calendar view type                                       |
| `onDateSelect`        | `(date: Date) => void`                             | -                                            | Callback when a date is selected                         |
| `onYearSelect`        | `(year: number) => void`                           | -                                            | Callback when a year is selected                         |
| `onDecadeSelect`      | `(decadeStart: number, decadeEnd: number) => void` | -                                            | Callback when a decade is selected                       |
| `onMonthChange`       | `(date: Date) => void`                             | -                                            | Callback when month/year changes                         |
| `onDecadeChange`      | `(year: number) => void`                           | -                                            | Callback when decade changes                             |
| `onCenturyChange`     | `(year: number) => void`                           | -                                            | Callback when century changes                            |
| `onViewChange`        | `(view: "month" \| "year" \| "decade") => void`    | -                                            | Callback when view changes                               |
| `selectedDate`        | `Date \| Date[]`                                   | -                                            | Selected date(s)                                         |
| `selectedYear`        | `number`                                           | -                                            | Selected year                                            |
| `selectedDecadeStart` | `number`                                           | -                                            | Selected decade start year                               |
| `rangeStart`          | `Date`                                             | -                                            | Range selection start date                               |
| `rangeEnd`            | `Date`                                             | -                                            | Range selection end date                                 |
| `size`                | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`             | `"md"`                                       | Size of the calendar                                     |
| `showNavigation`      | `boolean`                                          | `true`                                       | Whether to show navigation arrows                        |
| `showDayLabels`       | `boolean`                                          | `true`                                       | Whether to show day labels                               |
| `disabled`            | `boolean`                                          | `false`                                      | Whether the calendar is disabled                         |
| `dayLabels`           | `string[]`                                         | `["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]` | Custom day labels                                        |
| `showOutsideDates`    | `boolean`                                          | `true`                                       | Whether to show dates from previous/next months          |
| `connected`           | `boolean`                                          | `false`                                      | Whether to enable connected navigation between views     |
| `showIndicators`      | `boolean`                                          | `true`                                       | Whether to show indicators on dates                      |
| `getDateIndicator`    | `(date: Date) => boolean`                          | `(date) => date === today`                   | Function to determine if a date should show an indicator |
| `id`                  | `string`                                           | -                                            | Unique identifier                                        |

### CalendarDate Props

| Prop        | Type                                                     | Default     | Description                       |
| ----------- | -------------------------------------------------------- | ----------- | --------------------------------- |
| `date`      | `Date`                                                   | -           | The date to display               |
| `variant`   | `"default" \| "holiday" \| "disabled" \| "text"`         | `"default"` | Visual variant                    |
| `state`     | `"default" \| "hover"`                                   | `"default"` | Interactive state                 |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                   | `"md"`      | Size of the date                  |
| `active`    | `"off" \| "initial" \| "end" \| "passive" \| "selected"` | `"off"`     | Active state                      |
| `indicator` | `boolean`                                                | `false`     | Whether to show the indicator dot |
| `disabled`  | `boolean`                                                | `false`     | Whether the date is disabled      |
| `onClick`   | `(date: Date) => void`                                   | -           | Click handler                     |

### CalendarTitle Props

| Prop       | Type                                   | Default     | Description                         |
| ---------- | -------------------------------------- | ----------- | ----------------------------------- |
| `children` | `React.ReactNode`                      | -           | The text content to display         |
| `type`     | `"titles" \| "day"`                    | `"titles"`  | Type of title                       |
| `state`    | `"default" \| "hover"`                 | `"default"` | Interactive state                   |
| `size`     | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`      | Size of the title                   |
| `disabled` | `boolean`                              | `false`     | Whether the title is disabled       |
| `onClick`  | `() => void`                           | -           | Click handler                       |
| `onChange` | `(value: string) => void`              | -           | Change handler for editable content |
| `editable` | `boolean`                              | `false`     | Whether the title is editable       |

## Component Architecture

The Calendar component is built using a modular architecture:

```
Calendar/
├── Calendar.tsx              # Main calendar component
├── Calendar.module.scss      # Main calendar styles
├── Calendar.stories.tsx      # Storybook stories
├── Calendar.test.tsx         # Unit tests
├── CalendarParts/            # Sub-components
│   ├── CalendarDate.tsx      # Individual date component
│   ├── CalendarDate.module.scss
│   ├── CalendarDate.test.tsx
│   ├── CalendarTitle.tsx     # Title/header component
│   ├── CalendarTitle.module.scss
│   ├── CalendarTitle.test.tsx
│   └── index.ts              # Parts exports
├── index.ts                  # Main exports
└── README.md                 # This file
```

## Design Tokens

The Calendar component uses the following design tokens:

- **Colors**: `--color-white`, `--color-gray-*`, `--color-button-primary`, etc.
- **Spacing**: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, etc.
- **Typography**: `--font-family`, `--font-size-*`, `--font-weight-*`
- **Border Radius**: `--radius-sm`, `--radius-md`, `--radius-lg`
- **Shadows**: `--shadow-normal`
- **Motion**: `--motion-transition-fast`

## Accessibility

- ✅ **Keyboard Navigation**: Full keyboard support for date selection
- ✅ **ARIA Labels**: Proper ARIA labels for navigation buttons
- ✅ **Focus Management**: Clear focus indicators
- ✅ **Screen Reader Support**: Semantic HTML structure
- ✅ **High Contrast**: Design token-based colors for accessibility

## Browser Support

- ✅ **Modern Browsers**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile**: iOS Safari, Chrome Mobile
- ✅ **Accessibility**: Screen readers, keyboard navigation

## Examples

### Basic Calendar

```tsx
<Calendar date={new Date(2022, 0, 1)} view="month" />
```

### Interactive Calendar

```tsx
const [selectedDate, setSelectedDate] = useState<Date | null>(null);

<Calendar
  date={new Date()}
  view="month"
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
/>;
```

### Year View (Month Selection)

```tsx
const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

const handleMonthChange = (date: Date) => {
  setSelectedMonth(date.getMonth());
};

<Calendar date={new Date()} view="year" onMonthChange={handleMonthChange} />;
```

### Decade Selection

```tsx
const [selectedDecadeStart, setSelectedDecadeStart] = useState<number | null>(
  null
);

<Calendar
  date={new Date()}
  view="decade"
  selectedDecadeStart={selectedDecadeStart}
  onDecadeSelect={(start, end) => setSelectedDecadeStart(start)}
/>;
```

### Range Selection

```tsx
const [rangeStart, setRangeStart] = useState<Date | null>(null);
const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

<Calendar
  date={new Date()}
  view="month"
  rangeStart={rangeStart}
  rangeEnd={rangeEnd}
  onDateSelect={handleDateSelect}
/>;
```

### Custom Styling

```tsx
<Calendar
  date={new Date()}
  view="month"
  size="lg"
  showNavigation={false}
  className="custom-calendar"
  sx={{ backgroundColor: "var(--color-gray-0)" }}
/>
```

### Connected Navigation Example

```tsx
<Calendar
  date={new Date()}
  view="month"
  connected={true}
  onViewChange={(view) => console.log("View changed to:", view)}
/>
```
