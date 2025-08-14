import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends WithSxProps {
    id?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    size?: "sm" | "md" | "lg";
    label?: string;
    onChange?: (value: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>>;
export default Select;
