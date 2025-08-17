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
    /** Brand name to display */
    brandName?: string;
    /** Brand title/role to display */
    brandTitle?: string;
    /** Brand logo/icon (optional) */
    brandLogo?: React.ReactNode;
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
    /** Whether to show the theme switcher */
    showThemeSwitcher?: boolean;
}
export declare const SimpleTopNav: React.FC<SimpleTopNavProps>;
