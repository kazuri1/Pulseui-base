import React, { useState } from "react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { PasswordInput } from "../PasswordInput";
import { Checkbox } from "../Checkbox";
import { Text } from "../Text";
import { Card } from "../Card";
import { Icon } from "../Icon";
import { GitHub, Twitter, OpenInBrowser } from "../Icon/IconSet";
import styles from "./LoginForm.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";


export interface LoginFormProps extends WithSxProps {
  onSubmit?: (data: LoginFormData) => void;
  onSignUpClick?: () => void;
  onForgotPasswordClick?: () => void;
  onSocialLogin?: (provider: "google" | "twitter" | "github") => void;
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  passwordLabel?: string;
  rememberMeLabel?: string;
  forgotPasswordLabel?: string;
  loginButtonLabel?: string;
  signUpLabel?: string;
  showSocialLogin?: boolean;
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
  defaultEmail?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onSignUpClick,
  onForgotPasswordClick,
  onSocialLogin,
  className = "",
  title = "Login to your account",
  subtitle = "Don't have an account?",
  emailLabel = "Email",
  passwordLabel = "Password",
  rememberMeLabel = "Remember me",
  signUpLabel = "Sign up",
  showSocialLogin = true,
  showRememberMe = true,
  showForgotPassword = true,
  defaultEmail = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  
  const [formData, setFormData] = useState<LoginFormData>({
    email: defaultEmail,
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleSocialLogin = (provider: "google" | "twitter" | "github") => {
    onSocialLogin?.(provider);
  };

  const loginFormClasses = combineClassNames(
    styles.loginForm,
    sxClassName
  );

  return (
    <Card className={loginFormClasses} sx={sx} style={sxStyle}>
      <div className={styles.header}>
        <Text variant="xxl" className={styles.title}>
          {title}
        </Text>
        <div className={styles.subtitle}>
          <Text variant="md" color="secondary">
            {subtitle}
          </Text>
          <button
            type="button"
            className={styles.signUpLink}
            onClick={onSignUpClick}
          >
            {signUpLabel}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
            placeholder="Enter your email"
            required
            label={emailLabel}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <PasswordInput
            label={passwordLabel}
            id="password"
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
            placeholder="Enter password"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.options}>
          {showRememberMe && (
            <div className={styles.rememberMe}>
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(checked) => handleInputChange("rememberMe", checked)}
                label={rememberMeLabel}
                size="sm"
              />
            </div>
          )}

          {showForgotPassword && (
            <button
              type="button"
              className={styles.forgotPassword}
              onClick={onForgotPasswordClick}
            >
              <Text variant="sm" color="primary">
                Forgot Password?
              </Text>
            </button>
          )}
        </div>

        <Button
          type="submit"
          variant="filled"
          size="sm"
          className={styles.loginButton}
        >
          Login
        </Button>
      </form>

      {showSocialLogin && (
        <div className={styles.socialSection}>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <Text variant="sm" color="secondary" className={styles.dividerText}>
              OR CONTINUE WITH
            </Text>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialButtons}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialLogin("google")}
              className={styles.socialButton}
            >
              <Icon icon={OpenInBrowser} size="md" />
              <Text variant="sm">Google</Text>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialLogin("twitter")}
              className={styles.socialButton}
            >
              <Icon icon={Twitter} size="md" />
              <Text variant="sm">Twitter</Text>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSocialLogin("github")}
              className={styles.socialButton}
            >
              <Icon icon={GitHub} size="md" />
              <Text variant="sm">GitHub</Text>
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
