import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TableOfContentsItem {
    /** Unique identifier for the item */
    id: string;
    /** Display text for the item */
    label: string;
    /** Whether this item is currently active */
    active?: boolean;
    /** Optional icon for the item */
    icon?: React.ReactNode;
}
export interface TableOfContentsProps extends WithSxProps {
    /** Array of table of contents items */
    items: TableOfContentsItem[];
    /** Variant style */
    variant?: "filled" | "light" | "subtle";
    /** Size of the component */
    size?: "sm" | "md" | "lg";
    /** Whether to show item numbers */
    showNumbers?: boolean;
    /** Maximum number of items to display (default: 6) */
    maxItems?: number;
    /** Whether to use compact spacing between items */
    compact?: boolean;
    /** Active item ID */
    activeId?: string;
    /** Callback when an item is clicked */
    onItemClick?: (item: TableOfContentsItem) => void;
    /** Whether to enable scroll spy functionality */
    enableScrollSpy?: boolean;
    /** Offset for scroll spy (in pixels) */
    scrollOffset?: number;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    sx?: SxProps;
    /** Inline styles */
    style?: React.CSSProperties;
}
export declare const TableOfContents: React.FC<TableOfContentsProps>;
