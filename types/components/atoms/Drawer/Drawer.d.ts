import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface DrawerProps extends WithSxProps {
    /** Drawer content */
    children?: React.ReactNode;
    /** Drawer title */
    title?: string;
    /** Whether to show the title */
    showTitle?: boolean;
    /** Whether to show the drawer */
    show?: boolean;
    /** Drawer direction */
    direction?: "right" | "left" | "bottom" | "top";
    /** Whether to show scroll */
    showScroll?: boolean;
    /** Whether to show the close button */
    showClose?: boolean;
    /** Close handler */
    onClose?: () => void;
    /** Whether the drawer is disabled */
    disabled?: boolean;
    /** Whether to close on backdrop click */
    closeOnBackdropClick?: boolean;
    /** Whether to close on escape key */
    closeOnEscape?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const Drawer: React.FC<DrawerProps>;
