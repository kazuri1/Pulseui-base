import React from "react";
import type { ReactElement } from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface VariantSelectorProps extends WithSxProps {
    /** Title for the variant selector */
    title?: string;
    /** Array of variant options */
    variants: string[];
    /** Default selected variant */
    defaultVariant?: string;
    /** Component to render with variants */
    children: ReactElement;
    /** Callback when variant changes */
    onVariantChange?: (variant: string) => void;
    /** Label for the variant selector */
    label?: string;
    /** Whether to show the current variant info */
    showVariantInfo?: boolean;
    /** Custom class name */
    className?: string;
}
export declare const VariantSelector: React.FC<VariantSelectorProps>;
export default VariantSelector;
