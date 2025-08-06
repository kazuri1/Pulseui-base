import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TabsPanelProps extends WithSxProps {
    /** Panel content */
    children: React.ReactNode;
    /** Value of associated control */
    value: string;
    /** If set, the content is kept mounted, even if keepMounted is set false in the parent Tabs component */
    keepMounted?: boolean;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    sx?: SxProps;
    /** Inline styles */
    style?: React.CSSProperties;
}
export declare const TabsPanel: React.FC<TabsPanelProps>;
