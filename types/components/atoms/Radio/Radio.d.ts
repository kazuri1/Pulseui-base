import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface RadioProps extends WithSxProps {
    /** Radio button label text */
    label?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Radio button size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether the radio button is checked */
    checked?: boolean;
    /** Position of the label relative to the radio button */
    labelPosition?: "right" | "left";
    /** Radio button variant style */
    variant?: "default" | "filled" | "outline" | "light";
    /** Radio button state */
    state?: "default" | "disabled" | "error";
    /** Whether the radio button is disabled */
    disabled?: boolean;
    /** Whether the radio button has an error state */
    error?: boolean;
    /** Change handler */
    onChange?: (checked: boolean) => void;
    /** Unique identifier for the radio button */
    id?: string;
    /** Name attribute for radio group */
    name?: string;
    /** Value attribute for the radio button */
    value?: string;
}
export declare const Radio: React.FC<RadioProps>;
