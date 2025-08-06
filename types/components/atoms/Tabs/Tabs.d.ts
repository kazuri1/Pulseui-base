import React from "react";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TabsContextValue {
    value: string | null;
    onChange: (value: string | null) => void;
    orientation: "horizontal" | "vertical";
    placement: "left" | "right";
    borderPosition: "top" | "bottom";
    activateTabWithKeyboard: boolean;
    allowTabDeactivation: boolean;
    loop: boolean;
    keepMounted: boolean;
    id: string;
}
export declare const useTabs: () => TabsContextValue;
export interface TabsProps extends WithSxProps {
    /** Tabs content */
    children: React.ReactNode;
    /** Controlled component value */
    value?: string | null;
    /** Uncontrolled component default value */
    defaultValue?: string | null;
    /** Called when value changes */
    onChange?: (value: string | null) => void;
    /** Tabs orientation */
    orientation?: "horizontal" | "vertical";
    /** TabsList placement relative to TabsPanel, applicable only when orientation="vertical" */
    placement?: "left" | "right";
    /** Border position for horizontal tabs */
    borderPosition?: "top" | "bottom";
    /** If set, tab is activated with arrow key press */
    activateTabWithKeyboard?: boolean;
    /** If set, tab can be deactivated */
    allowTabDeactivation?: boolean;
    /** If set, arrow key presses loop though items (first to last and last to first) */
    loop?: boolean;
    /** If set to false, TabsPanel content will be unmounted when the associated tab is not active */
    keepMounted?: boolean;
    /** Base id, used to generate ids to connect labels with controls */
    id?: string;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    sx?: SxProps;
    /** Inline styles */
    style?: React.CSSProperties;
}
export declare const Tabs: React.FC<TabsProps>;
