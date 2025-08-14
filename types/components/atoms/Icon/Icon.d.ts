import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface IconProps extends WithSxProps {
    /** The MUI icon component to render */
    icon: SvgIconComponent;
    /** Icon size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Icon color (uses design tokens) */
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "muted" | "inherit";
    /** Whether the icon should be clickable */
    clickable?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
}
export declare const Icon: React.FC<IconProps>;
