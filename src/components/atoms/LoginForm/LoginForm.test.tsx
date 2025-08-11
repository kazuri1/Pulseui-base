import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  const defaultProps = {
    onSubmit: jest.fn(),
    onSignUpClick: jest.fn(),
    onForgotPasswordClick: jest.fn(),
    onSocialLogin: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<LoginForm {...defaultProps} />);
    
    expect(screen.getByText('Login to your account')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('OR CONTINUE WITH')).toBeInTheDocument();
  });

  it('renders email and password inputs', () => {
    render(<LoginForm {...defaultProps} />);
    
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
  });

  it('renders remember me toggle and forgot password link by default', () => {
    render(<LoginForm {...defaultProps} />);
    
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('renders social login buttons by default', () => {
    render(<LoginForm {...defaultProps} />);
    
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    render(<LoginForm {...defaultProps} />);
    
    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);
    const submitButton = screen.getByText('Login');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    expect(defaultProps.onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: false,
    });
  });

  it('calls onSignUpClick when sign up link is clicked', () => {
    render(<LoginForm {...defaultProps} />);
    
    const signUpLink = screen.getByText('Sign up');
    fireEvent.click(signUpLink);
    
    expect(defaultProps.onSignUpClick).toHaveBeenCalled();
  });

  it('calls onForgotPasswordClick when forgot password link is clicked', () => {
    render(<LoginForm {...defaultProps} />);
    
    const forgotPasswordLink = screen.getByText('Forgot Password?');
    fireEvent.click(forgotPasswordLink);
    
    expect(defaultProps.onForgotPasswordClick).toHaveBeenCalled();
  });

  it('calls onSocialLogin when social buttons are clicked', () => {
    render(<LoginForm {...defaultProps} />);
    
    const googleButton = screen.getByText('Google');
    const twitterButton = screen.getByText('Twitter');
    const githubButton = screen.getByText('GitHub');
    
    fireEvent.click(googleButton);
    fireEvent.click(twitterButton);
    fireEvent.click(githubButton);
    
    expect(defaultProps.onSocialLogin).toHaveBeenCalledWith('google');
    expect(defaultProps.onSocialLogin).toHaveBeenCalledWith('twitter');
    expect(defaultProps.onSocialLogin).toHaveBeenCalledWith('github');
  });

  it('updates remember me state when toggle is clicked', () => {
    render(<LoginForm {...defaultProps} />);
    
    const rememberMeToggle = screen.getByLabelText('Remember me');
    fireEvent.click(rememberMeToggle);
    
    const submitButton = screen.getByText('Login');
    fireEvent.click(submitButton);
    
    expect(defaultProps.onSubmit).toHaveBeenCalledWith({
      email: '',
      password: '',
      rememberMe: true,
    });
  });

  it('hides social login section when showSocialLogin is false', () => {
    render(<LoginForm {...defaultProps} showSocialLogin={false} />);
    
    expect(screen.queryByText('OR CONTINUE WITH')).not.toBeInTheDocument();
    expect(screen.queryByText('Google')).not.toBeInTheDocument();
    expect(screen.queryByText('Twitter')).not.toBeInTheDocument();
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument();
  });

  it('hides remember me toggle when showRememberMe is false', () => {
    render(<LoginForm {...defaultProps} showRememberMe={false} />);
    
    expect(screen.queryByLabelText('Remember me')).not.toBeInTheDocument();
  });

  it('hides forgot password link when showForgotPassword is false', () => {
    render(<LoginForm {...defaultProps} showForgotPassword={false} />);
    
    expect(screen.queryByText('Forgot Password?')).not.toBeInTheDocument();
  });

  it('renders with custom title and subtitle', () => {
    render(
      <LoginForm
        {...defaultProps}
        title="Custom Title"
        subtitle="Custom Subtitle"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
  });

  it('pre-fills email when defaultEmail is provided', () => {
    render(<LoginForm {...defaultProps} defaultEmail="test@example.com" />);
    
    const emailInput = screen.getByLabelText(/Email/) as HTMLInputElement;
    expect(emailInput.value).toBe('test@example.com');
  });

  it('applies custom className', () => {
    const { container } = render(
      <LoginForm {...defaultProps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
