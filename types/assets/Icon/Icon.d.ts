import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../utils/sxUtils";

export interface IconProps extends WithSxProps {
    icon: SvgIconComponent;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "muted" | "inherit";
    clickable?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export declare const Icon: React.FC<IconProps>;