import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ThemeSwitcherProps extends WithSxProps {
    /** Size of the theme switcher */
    size?: "sm" | "md" | "lg";
    /** Variant style */
    variant?: "light" | "dark" | "default";
    /** Custom label for accessibility */
    label?: string;
}
export declare const ThemeSwitcher: React.FC<ThemeSwitcherProps>;
export default ThemeSwitcher;
