import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ThemeAndBrandSwitcherProps extends WithSxProps {
    /** Whether to show labels for the switchers */
    showLabels?: boolean;
    /** Whether to show brand descriptions */
    showBrandDescription?: boolean;
    /** Whether to show version info */
    showVersion?: boolean;
    /** Size of the switchers */
    size?: "sm" | "md" | "lg";
    /** Layout direction */
    direction?: "horizontal" | "vertical";
    /** Gap between switchers */
    gap?: "sm" | "md" | "lg";
}
export declare const ThemeAndBrandSwitcher: React.FC<ThemeAndBrandSwitcherProps>;
export default ThemeAndBrandSwitcher;
