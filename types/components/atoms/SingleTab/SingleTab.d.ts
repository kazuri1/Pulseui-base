import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface SingleTabProps extends WithSxProps {
    /** Tab text content */
    children?: React.ReactNode;
    /** Tab variant style */
    variant?: "default" | "pill";
    /** Tab position */
    position?: "top" | "bottom" | "left" | "right";
    /** Tab state */
    state?: "default" | "selected" | "hover" | "disabled";
    /** Left icon */
    leftIcon?: SvgIconComponent | string | boolean;
    /** Right icon */
    rightIcon?: SvgIconComponent | string | boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const SingleTab: React.FC<SingleTabProps>;
