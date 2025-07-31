import React from "react";
import { Input } from "../Input";
import { Icon } from "../Icon";
import { InfoOutlined } from "../Icon/IconSet";
import styles from "./TextInput.module.scss";

export interface TextInputProps {
  /** Input label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Input placeholder text */
  placeholder?: string;
  /** Caption text below the input */
  caption?: string;
  /** Error message to display */
  error?: string;
  /** Input value */
  value?: string;
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Callback fired when input value changes */
  onChange?: (value: string) => void;
  /** Callback fired when input is focused */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Left icon for the input */
  leftIcon?: string;
  /** Right icon for the input */
  rightIcon?: string;
  /** Whether to show password toggle for password inputs */
  showPasswordToggle?: boolean;
  /** Whether password is visible (for controlled password inputs) */
  passwordVisible?: boolean;
  /** Callback when password visibility changes */
  onPasswordVisibilityChange?: (visible: boolean) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  required = false,
  placeholder,
  caption,
  error,
  value,
  type = "text",
  disabled = false,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = "",
  leftIcon,
  rightIcon,
  showPasswordToggle,
  passwordVisible,
  onPasswordVisibilityChange,
}) => {
  const inputId =
    id || name || `text-input-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const inputClasses = [
    styles.root,
    error && styles.error,
    disabled && styles.disabled,
    className,
  ].filter(Boolean);

  return (
    <div className={inputClasses.join(" ")}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <Input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        showPasswordToggle={showPasswordToggle}
        passwordVisible={passwordVisible}
        onPasswordVisibilityChange={onPasswordVisibilityChange}
        className={styles.input}
      />

      {(caption || error) && (
        <div className={styles.footer}>
          {caption && !error && (
            <span className={styles.caption}>{caption}</span>
          )}
          {error && (
            <div className={styles.errorMessage}>
              <Icon
                icon={InfoOutlined}
                size="sm"
                color="error"
                className={styles.errorIcon}
              />
              <span>{error}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
