import React, { useState } from "react";
import { TextInput } from "../TextInput";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import type { WithSxProps } from "../../../utils/sxUtils";
import classNames from "classnames";

export interface PasswordInputProps extends WithSxProps {
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
  /** Whether to show password toggle (default: true) */
  showPasswordToggle?: boolean;
  /** Whether password is visible (for controlled password inputs) */
  passwordVisible?: boolean;
  /** Callback when password visibility changes */
  onPasswordVisibilityChange?: (visible: boolean) => void;
  /** Whether to show password strength meter */
  showStrengthMeter?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  required = false,
  placeholder,
  caption,
  error,
  value,
  disabled = false,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = "",
  showPasswordToggle = true,
  passwordVisible: externalPasswordVisible,
  onPasswordVisibilityChange,
  showStrengthMeter = false,
  sx,
  style,
}) => {
  // Internal state for password visibility
  const [internalPasswordVisible, setInternalPasswordVisible] = useState(false);

  // Use external state if provided, otherwise use internal state
  const passwordVisible =
    onPasswordVisibilityChange !== undefined
      ? externalPasswordVisible ?? false
      : internalPasswordVisible;

  const handlePasswordToggle = () => {
    if (onPasswordVisibilityChange) {
      // External controlled mode
      onPasswordVisibilityChange(!passwordVisible);
    } else {
      // Internal controlled mode
      setInternalPasswordVisible(!passwordVisible);
    }
  };

  return (
    <div className={className}>
      <TextInput
        label={label}
        required={required}
        placeholder={placeholder}
        caption={caption}
        error={error}
        value={value}
        type="password"
        disabled={disabled}
        name={name}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        showPasswordToggle={showPasswordToggle}
        passwordVisible={passwordVisible}
        onPasswordVisibilityChange={handlePasswordToggle}
        sx={sx}
        style={style}
      />
      {showStrengthMeter && value && <PasswordStrengthMeter password={value} />}
    </div>
  );
};

PasswordInput.displayName = "PasswordInput";
