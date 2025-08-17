import React from "react";
export interface ThemeSwitcherProps {
    /** Button size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Button variant */
    variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
}
export declare const ThemeSwitcher: React.FC<ThemeSwitcherProps>;
export default ThemeSwitcher;
