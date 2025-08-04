# PulseUI Base

A modern React design system with TypeScript support, design tokens, and comprehensive component library.

## 🚀 Features

- **TypeScript First** - Full TypeScript support with comprehensive type definitions
- **Design Tokens** - Consistent styling with CSS custom properties
- **Accessibility** - ARIA attributes and keyboard navigation built-in
- **Responsive** - Mobile-first responsive design
- **Tree Shakeable** - Only import what you use
- **CSS Modules** - Scoped styling with SCSS support
- **Icon Integration** - Material-UI icons included
- **Theme Support** - Customizable theming system

## 📦 Installation

```bash
npm install pulseui-base
```

## 🎯 Quick Start

```tsx
import { Button, Alert, Text } from 'pulseui-base';

function App() {
  return (
    <div>
      <Text variant="h1">Welcome to PulseUI</Text>
      <Button variant="primary" size="md">
        Get Started
      </Button>
      <Alert variant="info" title="Info">
        This is an informational alert.
      </Alert>
    </div>
  );
}
```

## 🎨 Design Tokens

Import design tokens for consistent styling:

```css
@import 'pulseui-base/tokens';
```

Or use the CSS custom properties directly:

```css
.my-component {
  color: var(--color-text-primary);
  background: var(--color-surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

## 🧩 Components

### Core Components

#### Button
```tsx
import { Button } from 'pulseui-base';

<Button variant="primary" size="md" disabled={false}>
  Click me
</Button>
```

#### Input Components
```tsx
import { TextInput, PasswordInput, Textarea } from 'pulseui-base';

<TextInput placeholder="Enter text" size="md" />
<PasswordInput placeholder="Enter password" />
<Textarea placeholder="Enter long text" rows={4} />
```

#### Alert
```tsx
import { Alert } from 'pulseui-base';

<Alert variant="success" title="Success" closeable>
  Operation completed successfully!
</Alert>
```

#### Pagination
```tsx
import { Pagination } from 'pulseui-base';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
  showFirstLast
  showPrevNext
/>
```

#### Stepper
```tsx
import { Stepper } from 'pulseui-base';

const steps = [
  { id: '1', content: '1', label: 'Step 1', status: 'complete' },
  { id: '2', content: '2', label: 'Step 2', status: 'active' },
  { id: '3', content: '3', label: 'Step 3', status: 'default' },
];

<Stepper steps={steps} size="md" showLabels />
```

### Layout Components

#### Grid System
```tsx
import { Grid, GridCol } from 'pulseui-base';

<Grid gap="md">
  <GridCol span={6}>Column 1</GridCol>
  <GridCol span={6}>Column 2</GridCol>
</Grid>
```

#### Stack
```tsx
import { Stack } from 'pulseui-base';

<Stack gap="md" direction="vertical">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### Calendar Components

```tsx
import { Calendar } from 'pulseui-base';

<Calendar
  view="month"
  currentDate={new Date()}
  onDateSelect={(date) => console.log(date)}
/>
```

## 🎨 Theming

### Theme Provider
```tsx
import { ThemeProvider } from 'pulseui-base';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Custom CSS Variables
```css
:root {
  --color-primary: #007bff;
  --color-surface: #ffffff;
  --spacing-md: 16px;
  --radius-md: 8px;
}
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
<Button size="sm">Small on mobile</Button>
<Text variant="h1" size="lg">Large on desktop</Text>
```

## ♿ Accessibility

Components include proper ARIA attributes and keyboard navigation:

- Focus management
- Screen reader support
- Keyboard navigation
- Color contrast compliance

## 🔧 Utilities

### SX Props
```tsx
import { mergeSxWithStyles, combineClassNames } from 'pulseui-base';

const styles = mergeSxWithStyles(sx, style, className);
const classes = combineClassNames('base-class', conditionalClass);
```

### Breakpoint Hook
```tsx
import { useBreakpoint } from 'pulseui-base';

const breakpoint = useBreakpoint();
// Returns: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

## 📚 Component Props

### Common Props
All components support these common props:

- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `disabled`: `boolean`
- `className`: `string`
- `sx`: `SxProps` - Custom styling
- `id`: `string`

### Button Props
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

### Alert Props
```tsx
interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  styleVariant?: 'default' | 'filled' | 'light' | 'outline' | 'transparent' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  closeable?: boolean;
  children: React.ReactNode;
}
```

## 🎯 Examples

### Form Example
```tsx
import { TextInput, PasswordInput, Button, Alert } from 'pulseui-base';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="primary">
        Login
      </Button>
      {error && (
        <Alert variant="error" title="Error">
          {error}
        </Alert>
      )}
    </form>
  );
}
```

### Dashboard Example
```tsx
import { Grid, Card, Text, Button, Alert } from 'pulseui-base';

function Dashboard() {
  return (
    <Grid gap="lg">
      <GridCol span={12}>
        <Alert variant="info" title="Welcome">
          Welcome to your dashboard!
        </Alert>
      </GridCol>
      
      <GridCol span={6}>
        <Card>
          <Text variant="h3">Statistics</Text>
          <Text>Your stats here</Text>
        </Card>
      </GridCol>
      
      <GridCol span={6}>
        <Card>
          <Text variant="h3">Actions</Text>
          <Button variant="primary">Take Action</Button>
        </Card>
      </GridCol>
    </Grid>
  );
}
```

## 🔧 Development

### Local Development
```bash
git clone https://github.com/kazuri1/Pulseui.git
cd pulseui-v1.0
npm install
npm run dev
```

### Storybook
```bash
npm run storybook
```

### Testing
```bash
npm test
```

### Building
```bash
npm run build
```

## 📦 Package Structure

```
pulseui-base/
├── dist/           # Built files
├── types/          # TypeScript declarations
├── src/
│   ├── components/
│   │   ├── atoms/  # Basic components
│   │   └── layouts/ # Layout components
│   ├── styles/     # Design tokens
│   ├── utils/      # Utilities
│   └── hooks/      # Custom hooks
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/kazuri1/Pulseui)
- [Issues](https://github.com/kazuri1/Pulseui/issues)
- [Documentation](https://github.com/kazuri1/Pulseui#readme)

## 🆘 Support

If you need help or have questions:

1. Check the [documentation](https://github.com/kazuri1/Pulseui#readme)
2. Search [existing issues](https://github.com/kazuri1/Pulseui/issues)
3. Create a [new issue](https://github.com/kazuri1/Pulseui/issues/new)

---

Made with ❤️ by [Kazuri](https://github.com/kazuri1)
