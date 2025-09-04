import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface BrandLogoProps extends WithSxProps {
  /** Size of the logo */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether to show text alongside the logo */
  showText?: boolean;
  /** Custom brand override (useful for testing) */
  brand?: "default" | "medash" | "fitcore" | "labsync" | "github" | "uber";
  /** Custom theme override (useful for testing) */
  theme?: "light" | "dark";
  /** Click handler for the logo */
  onClick?: () => void;
}
export declare const BrandLogo: React.FC<BrandLogoProps>;
export default BrandLogo;
