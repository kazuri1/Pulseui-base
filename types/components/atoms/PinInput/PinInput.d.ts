import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface PinInputProps extends WithSxProps {
    /** Input label */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
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
    /** Number of PIN digits (default: 4) */
    length?: number;
    /** Whether to mask the PIN input (default: true) */
    mask?: boolean;
    /** Input size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Whether the input is readonly */
    readonly?: boolean;
    /** Placeholder character to show in empty inputs */
    placeholder?: string;
    /** Accessibility label for the PIN input */
    ariaLabel?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Helper text below the input */
    helperText?: string;
    /** Describes the input's purpose */
    ariaDescribedBy?: string;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
}
export declare const PinInput: React.FC<PinInputProps>;
