import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface StepperStep {
    /** Unique identifier for the step */
    id: string;
    /** Content to display in the step icon (number or icon) */
    content: React.ReactNode;
    /** Label text for the step */
    label: string;
    /** Status of the step */
    status: "default" | "active" | "complete";
    /** Whether to show an asterisk for required fields */
    showAsterisk?: boolean;
}
export interface StepperProps extends WithSxProps {
    /** Array of steps to display */
    steps: StepperStep[];
    /** Size of the stepper (affects all steps) */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Border radius for step icons */
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    /** Whether to show labels for all steps */
    showLabels?: boolean;
    /** Whether to show connecting lines between steps */
    showConnectors?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const Stepper: React.FC<StepperProps>;
export default Stepper;
