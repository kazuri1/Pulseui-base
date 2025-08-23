import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface PillProps extends WithSxProps {
    /** Content to display inside the pill */
    children: React.ReactNode;
    /** Pill variant style */
    variant?: "default" | "filled" | "light" | "outline" | "white" | "info" | "success" | "warning" | "error" | "disabled" | "muted";
    /** Pill size */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether the pill has a close button (enabled by default) */
    closable?: boolean;
    /** Close button click handler */
    onClose?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Accessibility label for the pill */
    ariaLabel?: string;
    /** Whether the pill is selected */
    ariaSelected?: boolean;
    /** Whether the pill is pressed/active */
    ariaPressed?: boolean;
    /** Describes the pill's purpose */
    ariaDescribedBy?: string;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
}
export declare const Pill: React.FC<PillProps>;
