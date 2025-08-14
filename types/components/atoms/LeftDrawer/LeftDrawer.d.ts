import React from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import type { WithSxProps } from "../../../utils/sxUtils";
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
export interface LeftDrawerProps extends WithSxProps {
    isOpen: boolean;
    onClose: () => void;
    sections: LeftDrawerSection[];
    brandName?: string;
    brandLogo?: React.ReactNode;
    showOverlay?: boolean;
    width?: string;
}
export declare const LeftDrawer: React.FC<LeftDrawerProps>;
