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
    /** Radio button state */
    state?: "default" | "disabled" | "error";
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
