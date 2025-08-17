import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface BrandSwitcherProps extends WithSxProps {
    /** Label for the brand switcher */
    label?: string;
    /** Whether to show the current brand version */
    showVersion?: boolean;
    /** Whether to show the brand description */
    showDescription?: boolean;
    /** Custom placeholder text */
    placeholder?: string;
    /** Whether the switcher is disabled */
    disabled?: boolean;
    /** Size of the switcher */
    size?: "sm" | "md" | "lg";
}
export declare const BrandSwitcher: React.FC<BrandSwitcherProps>;
