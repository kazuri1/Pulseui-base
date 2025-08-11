# LoginForm Component

A comprehensive login form component built with PulseUI design system components. This component provides a complete authentication interface with email/password inputs, remember me toggle, forgot password link, and social login options.

## Features

- **Email & Password Inputs**: Built-in validation and accessibility
- **Remember Me Toggle**: Switch component for persistent login
- **Forgot Password Link**: Clickable link for password recovery
- **Social Login Options**: Google, Twitter, and GitHub integration
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, and focus management
- **Customizable**: Configurable features and styling options

## Usage

```tsx
import { LoginForm } from 'pulseui-base';

function App() {
  const handleLogin = (data) => {
    console.log('Login data:', data);
    // Handle login logic
  };

  const handleSignUp = () => {
    // Navigate to sign up page
  };

  const handleForgotPassword = () => {
    // Navigate to password recovery
  };

  const handleSocialLogin = (provider) => {
    console.log('Social login:', provider);
    // Handle social authentication
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      onSignUpClick={handleSignUp}
      onForgotPasswordClick={handleForgotPassword}
      onSocialLogin={handleSocialLogin}
      defaultEmail="user@example.com"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(data: LoginFormData) => void` | - | Callback when form is submitted |
| `onSignUpClick` | `() => void` | - | Callback when sign up link is clicked |
| `onForgotPasswordClick` | `() => void` | - | Callback when forgot password link is clicked |
| `onSocialLogin` | `(provider: 'google' \| 'twitter' \| 'github') => void` | - | Callback when social login button is clicked |
| `className` | `string` | - | Additional CSS classes |
| `title` | `string` | "Login to your account" | Main heading text |
| `subtitle` | `string` | "Don't have an account?" | Subtitle text above sign up link |
| `showSocialLogin` | `boolean` | `true` | Show/hide social login section |
| `showRememberMe` | `boolean` | `true` | Show/hide remember me toggle |
| `showForgotPassword` | `boolean` | `true` | Show/hide forgot password link |
| `defaultEmail` | `string` | `""` | Pre-filled email value |

## Data Structure

```tsx
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
```

## Design System Integration

The LoginForm component is built using PulseUI design system components:

- **Card**: Container with consistent styling and shadows
- **TextInput**: Email input with validation
- **PasswordInput**: Secure password input with toggle visibility
- **Switch**: Remember me toggle
- **Button**: Primary login button and social login buttons
- **Text**: Typography components for labels and headings
- **Icon**: Visual indicators for inputs and social providers

## Styling

The component uses CSS modules with design tokens for consistent theming:

- **Colors**: Uses semantic color variables (`--color-primary-*`, `--color-surface-*`)
- **Spacing**: Consistent spacing using token variables (`--spacing-*`)
- **Typography**: Font sizes and weights from design tokens
- **Borders**: Border radius and widths from tokens
- **Shadows**: Box shadows for depth and elevation
- **Transitions**: Smooth animations using motion tokens

## Responsive Behavior

- **Desktop**: Full-width form with horizontal social buttons
- **Tablet**: Adjusted padding and spacing
- **Mobile**: Stacked layout, full-width social buttons, reduced padding

## Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Tab order and focus management
- **Focus Indicators**: Visible focus rings for keyboard users
- **Semantic HTML**: Proper form structure and landmarks

## Examples

### Minimal Login Form

```tsx
<LoginForm
  onSubmit={handleLogin}
  showSocialLogin={false}
  showRememberMe={false}
  showForgotPassword={false}
/>
```

### Custom Branding

```tsx
<LoginForm
  onSubmit={handleLogin}
  title="Welcome Back"
  subtitle="First time visiting?"
  onSignUpClick={handleSignUp}
/>
```

### With Pre-filled Email

```tsx
<LoginForm
  onSubmit={handleLogin}
  defaultEmail="user@company.com"
  onSignUpClick={handleSignUp}
/>
```

## Testing

The component includes comprehensive tests covering:

- Rendering with different prop combinations
- User interactions (form submission, button clicks)
- State management (remember me toggle)
- Conditional rendering (show/hide features)
- Accessibility features

Run tests with:

```bash
npm test LoginForm
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ with polyfills
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- React 16.8+
- PulseUI design system components
- SCSS modules for styling
