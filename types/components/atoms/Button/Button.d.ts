import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface ButtonProps extends WithSxProps {
    /** Button text content */
    children: React.ReactNode;
    /** Left icon */
    leftIcon?: SvgIconComponent | string;
    /** Right icon */
    rightIcon?: SvgIconComponent | string;
    /** Button variant style */
    variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Button size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Button state */
    state?: "default" | "hover" | "disabled";
    /** Content justification */
    justify?: "center" | "space-between";
    /** Compact mode */
    compact?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Button type */
    type?: "button" | "submit" | "reset";
}
export declare const Button: React.FC<ButtonProps>;
