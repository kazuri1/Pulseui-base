import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
import type { SvgIconComponent } from "@mui/icons-material";
export interface ThemeToggleProps extends WithSxProps {
    /** Button variant */
    variant?: "default" | "outline" | "subtle" | "light" | "filled" | "white";
    /** Button size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Show text label */
    showLabel?: boolean;
    /** Custom light theme label */
    lightLabel?: string;
    /** Custom dark theme label */
    darkLabel?: string;
    /** Custom light theme icon */
    lightIcon?: SvgIconComponent;
    /** Custom dark theme icon */
    darkIcon?: SvgIconComponent;
    /** Whether to show the current theme name */
    showThemeName?: boolean;
}
export declare const ThemeToggle: React.FC<ThemeToggleProps>;
