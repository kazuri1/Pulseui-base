import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface SwitchProps extends WithSxProps {
    id?: string;
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    onChange?: (checked: boolean) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
