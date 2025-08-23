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
    /** Callback fired when key is pressed */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
    /** Label for the input */
    label?: string;
    /** Helper text below the input */
    helperText?: string;
    /** Error message */
    error?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Accessibility label (overrides label for screen readers) */
    ariaLabel?: string;
    /** Describes the input's purpose */
    ariaDescribedBy?: string;
    /** Controls the ID of the element this input controls */
    ariaControls?: string;
    /** Whether the input has a popup */
    ariaHasPopup?: boolean;
    /** Whether the input is expanded/collapsed */
    ariaExpanded?: boolean;
    /** Whether the input is pressed/active */
    ariaPressed?: boolean;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
    /** Auto-complete attribute */
    autoComplete?: string;
    /** Auto-focus attribute */
    autoFocus?: boolean;
    /** Input mode for mobile keyboards */
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
    /** Pattern for validation */
    pattern?: string;
    /** Minimum length */
    minLength?: number;
    /** Maximum length */
    maxLength?: number;
    /** Step value for number inputs */
    step?: number;
    /** Minimum value for number inputs */
    min?: number;
    /** Maximum value for number inputs */
    max?: number;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
