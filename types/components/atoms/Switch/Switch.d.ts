import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface SwitchProps extends WithSxProps {
    /** Switch label */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Caption text below the switch */
    caption?: string;
    /** Error message to display */
    error?: string;
    /** Switch checked state */
    checked?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Switch size */
    size?: "sm" | "md" | "lg";
    /** Switch name attribute */
    name?: string;
    /** Switch id attribute */
    id?: string;
    /** Callback fired when switch state changes */
    onChange?: (checked: boolean) => void;
}
export declare const Switch: React.FC<SwitchProps>;
