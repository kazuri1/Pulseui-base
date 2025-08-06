import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TabsListProps extends WithSxProps {
    /** Tabs.Tab components */
    children: React.ReactNode;
    /** Determines whether tabs should take all available space */
    grow?: boolean;
    /** Tabs alignment */
    justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    /** Custom class name */
    className?: string;
    /** Custom styles */
    sx?: SxProps;
    /** Inline styles */
    style?: React.CSSProperties;
}
export declare const TabsList: React.FC<TabsListProps>;
