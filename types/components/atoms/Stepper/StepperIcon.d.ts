import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface StepperIconProps extends WithSxProps {
    /** Status of the step icon */
    status?: "default" | "active" | "complete";
    /** Size of the icon */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Border radius of the icon */
    radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    /** Content inside the icon (number or icon) */
    children?: React.ReactNode;
    /** Unique identifier */
    id?: string;
}
export declare const StepperIcon: React.FC<StepperIconProps>;
export default StepperIcon;
