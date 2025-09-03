import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import type { SvgIconComponent } from "@mui/icons-material";
export interface SimpleTopNavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display text for the nav item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Click handler for the nav item */
  onClick?: () => void;
  /** URL for navigation (optional) */
  href?: string;
  /** Icon for the nav item (optional) */
  icon?: SvgIconComponent;
}
export interface SimpleTopNavProps extends WithSxProps {
  /** Brand name to display (deprecated - use BrandLogo component) */
  brandName?: string;
  /** Brand title/role to display (deprecated - use BrandLogo component) */
  brandTitle?: string;
  /** Brand logo/icon (optional - deprecated, use BrandLogo component) */
  brandLogo?: React.ReactNode;
  /** Whether to use the new dynamic brand logo */
  useDynamicBrandLogo?: boolean;
  /** Size of the brand logo */
  brandLogoSize?: "sm" | "md" | "lg" | "xl";
  /** Whether to show text with the brand logo */
  showBrandText?: boolean;
  /** Click handler for the brand logo */
  onLogoClick?: () => void;
  /** Navigation items */
  items?: SimpleTopNavItem[];
  /** Whether to show the brand section */
  showBrand?: boolean;
  /** Whether to show the navigation section */
  showNavigation?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: SxProps;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Whether to show mobile menu by default */
  defaultMobileMenuOpen?: boolean;
  /** Version selector configuration */
  versionSelector?: {
    /** Current version to display */
    version?: string;
    /** Available versions to select from */
    versions?: string[];
    /** Callback when version changes */
    onVersionChange?: (version: string) => void;
    /** Whether to show the version selector */
    show?: boolean;
  };
  /** Brand switcher configuration */
  brandSwitcher?: {
    /** Whether to show the brand switcher */
    show?: boolean;
    /** Size of the brand switcher */
    size?: "sm" | "md" | "lg";
    /** Whether to show brand descriptions */
    showDescription?: boolean;
  };
  /** Whether to show the theme switcher */
  showThemeSwitcher?: boolean;
  /** Children to render inside the navigation */
  children?: React.ReactNode;
  /** Custom content to render before the brand section */
  beforeBrand?: React.ReactNode;
  /** Custom content to render after the brand section but before navigation */
  afterBrand?: React.ReactNode;
  /** Custom content to render before the navigation items */
  beforeNavigation?: React.ReactNode;
  /** Custom content to render after the navigation items */
  afterNavigation?: React.ReactNode;
  /** Custom content to render in the center area (between brand and navigation) */
  centerContent?: React.ReactNode;
  /** Custom content to render in the mobile navigation header */
  mobileHeaderContent?: React.ReactNode;
  /** Custom content to render at the bottom of mobile navigation */
  mobileFooterContent?: React.ReactNode;
  /** Whether to show the center content area */
  showCenterContent?: boolean;
  /** Whether to show the mobile header content */
  showMobileHeaderContent?: boolean;
  /** Whether to show the mobile footer content */
  showMobileFooterContent?: boolean;
}
export declare const SimpleTopNav: React.FC<SimpleTopNavProps>;
