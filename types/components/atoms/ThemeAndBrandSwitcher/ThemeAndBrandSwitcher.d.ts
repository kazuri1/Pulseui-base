import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ThemeAndBrandSwitcherProps extends WithSxProps {
    /** Whether to show the theme toggle */
    showThemeToggle?: boolean;
    /** Whether to show the brand switcher */
    showBrandSwitcher?: boolean;
    /** Label for the brand switcher */
    brandLabel?: string;
    /** Whether to show brand version */
    showBrandVersion?: boolean;
    /** Whether to show brand description */
    showBrandDescription?: boolean;
    /** Layout direction */
    direction?: "horizontal" | "vertical";
    /** Size of the components */
    size?: "sm" | "md" | "lg";
    /** Whether the switchers are disabled */
    disabled?: boolean;
}
export declare const ThemeAndBrandSwitcher: React.FC<ThemeAndBrandSwitcherProps>;
