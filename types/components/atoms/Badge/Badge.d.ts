import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface BadgeProps extends WithSxProps {
    /** Badge text content */
    children: React.ReactNode;
    /** Left icon */
    leftIcon?: SvgIconComponent | string;
    /** Right icon */
    rightIcon?: SvgIconComponent | string;
    /** Badge variant style */
    variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default" | "dot";
    /** Badge size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Badge state */
    state?: "default" | "hover" | "disabled";
    /** Disabled state */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
}
export declare const Badge: React.FC<BadgeProps>;
