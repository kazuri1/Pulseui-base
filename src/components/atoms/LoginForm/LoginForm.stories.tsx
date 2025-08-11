import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { Alert } from '../Alert';

const meta: Meta<typeof LoginForm> = {
  title: 'Atoms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive login form component built with PulseUI design system components. Features email/password inputs, remember me toggle, forgot password link, and social login options.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'form submitted' },
    onSignUpClick: { action: 'sign up clicked' },
    onForgotPasswordClick: { action: 'forgot password clicked' },
    onSocialLogin: { action: 'social login clicked' },
    showSocialLogin: {
      control: 'boolean',
      description: 'Show/hide social login section',
    },
    showRememberMe: {
      control: 'boolean',
      description: 'Show/hide remember me toggle',
    },
    showForgotPassword: {
      control: 'boolean',
      description: 'Show/hide forgot password link',
    },
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text above sign up link',
    },
    defaultEmail: {
      control: 'text',
      description: 'Pre-filled email value',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default login form with all features
export const Default: Story = {
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    defaultEmail: "abc@gmail.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};

// Minimal login form without social login
export const Minimal: Story = {
  args: {
    title: "Sign In",
    subtitle: "New here?",
    showSocialLogin: false,
    showRememberMe: false,
    showForgotPassword: false,
  },
};

// Login form with custom branding
export const CustomBranding: Story = {
  args: {
    title: "Welcome Back",
    subtitle: "First time visiting?",
    defaultEmail: "user@company.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};

// Login form without remember me option
export const NoRememberMe: Story = {
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    showSocialLogin: true,
    showRememberMe: false,
    showForgotPassword: true,
  },
};

// Login form without forgot password
export const NoForgotPassword: Story = {
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: false,
  },
};

// Login form with only essential features
export const EssentialOnly: Story = {
  args: {
    title: "Sign In",
    subtitle: "Create an account",
    showSocialLogin: false,
    showRememberMe: false,
    showForgotPassword: false,
  },
};

// Login form with long title and description
export const LongContent: Story = {
  args: {
    title: "Welcome back to our amazing platform! Please sign in to continue your journey.",
    subtitle: "Don't have an account yet? No worries, you can create one in just a few clicks.",
    defaultEmail: "longemail@verylongdomainname.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};

// Login form in a card layout context
export const InCardContext: Story = {
  render: (args) => (
    <div style={{ 
      background: 'var(--color-surface-secondary)', 
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--border-radius-lg)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <LoginForm {...args} />
    </div>
  ),
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    defaultEmail: "abc@gmail.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};

// Login form with success message
export const WithSuccessMessage: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Alert 
        title="Login Successful" 
        variant="success" 
        style={{ marginBottom: 'var(--spacing-lg)' }}
      >
        Welcome back! You have successfully logged in to your account.
      </Alert>
      <LoginForm {...args} />
    </div>
  ),
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    defaultEmail: "abc@gmail.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};

// Login form with error message
export const WithErrorMessage: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Alert 
        title="Login Failed" 
        variant="error" 
        style={{ marginBottom: 'var(--spacing-lg)' }}
      >
        Invalid email or password. Please check your credentials and try again.
      </Alert>
      <LoginForm {...args} />
    </div>
  ),
  args: {
    title: "Login to your account",
    subtitle: "Don't have an account?",
    defaultEmail: "abc@gmail.com",
    showSocialLogin: true,
    showRememberMe: true,
    showForgotPassword: true,
  },
};
