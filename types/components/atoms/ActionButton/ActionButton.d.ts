import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
export interface ActionButtonProps {
    /** Icon to display */
    icon: SvgIconComponent;
    /** Icon size */
    iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Icon color (optional - will be auto-determined by variant if not provided) */
    iconColor?: "primary" | "secondary" | "success" | "warning" | "error" | "muted" | "inherit";
    /** Button variant */
    variant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Button size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Button state */
    state?: "default" | "hover" | "disabled";
    /** Disabled state */
    disabled?: boolean;
    /** Button type */
    type?: "button" | "submit" | "reset";
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const ActionButton: React.FC<ActionButtonProps>;
