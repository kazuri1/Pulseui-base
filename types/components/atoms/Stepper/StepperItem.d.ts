import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface StepperItemProps extends WithSxProps {
    /** Size of the stepper item (affects both icon and label) */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show the label */
    showLabel?: boolean;
    /** Whether to show an asterisk (*) after the label */
    showAsterisk?: boolean;
    /** The label text */
    label?: string;
    /** Status of the step icon */
    status?: "default" | "active" | "complete";
    /** Border radius of the icon */
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    /** Content inside the icon (number or icon) */
    children?: React.ReactNode;
    /** Unique identifier */
    id?: string;
}
export declare const StepperItem: React.FC<StepperItemProps>;
export default StepperItem;
