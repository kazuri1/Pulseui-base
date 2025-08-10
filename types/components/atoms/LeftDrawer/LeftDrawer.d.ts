import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
export interface LeftDrawerItem {
    id: string;
    label: string;
    icon?: SvgIconComponent;
    href?: string;
    onClick?: () => void;
    children?: LeftDrawerItem[];
}
export interface LeftDrawerSection {
    id: string;
    title: string;
    icon?: SvgIconComponent;
    items: LeftDrawerItem[];
}
export interface LeftDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    sections: LeftDrawerSection[];
    brandName?: string;
    brandLogo?: React.ReactNode;
    showOverlay?: boolean;
    width?: string;
    className?: string;
}
export declare const LeftDrawer: React.FC<LeftDrawerProps>;
