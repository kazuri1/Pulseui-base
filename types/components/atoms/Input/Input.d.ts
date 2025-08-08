import * as React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface InputProps extends WithSxProps {
    /** Input value */
    value?: string;
    /** Input placeholder text */
    placeholder?: string;
    /** Input variant style */
    variant?: "default" | "filled" | "unstyled";
    /** Input size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Input state */
    state?: "enabled" | "focus" | "typing" | "filled" | "disabled" | "error";
    /** Left icon */
    leftIcon?: SvgIconComponent | string;
    /** Right icon */
    rightIcon?: SvgIconComponent | string;
    /** Input type */
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
    /** Disabled state */
    disabled?: boolean;
    /** Readonly state */
    readonly?: boolean;
    /** Required field */
    required?: boolean;
    /** Show password toggle for password type */
    showPasswordToggle?: boolean;
    /** Password visibility state */
    passwordVisible?: boolean;
    /** Password visibility change handler */
    onPasswordVisibilityChange?: (visible: boolean) => void;
    /** Callback fired when input value changes */
    onChange?: (value: string) => void;
    /** Callback fired when input is focused */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Callback fired when input loses focus */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
