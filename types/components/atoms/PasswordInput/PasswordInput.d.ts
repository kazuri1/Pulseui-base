import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
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
export declare const PasswordInput: React.FC<PasswordInputProps>;
