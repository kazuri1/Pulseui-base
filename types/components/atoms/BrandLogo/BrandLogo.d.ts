import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface BrandLogoProps extends WithSxProps {
    /** Size of the logo */
    size?: "sm" | "md" | "lg" | "xl";
    /** Whether to show text alongside the logo */
    showText?: boolean;
    /** Custom brand override (useful for testing) */
    brand?: "default" | "medash" | "fitcore" | "labsync";
    /** Custom theme override (useful for testing) */
    theme?: "light" | "dark";
}
export declare const BrandLogo: React.FC<BrandLogoProps>;
export default BrandLogo;
