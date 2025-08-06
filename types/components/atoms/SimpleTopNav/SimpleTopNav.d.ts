import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
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
}
export declare const SimpleTopNav: React.FC<SimpleTopNavProps>;
