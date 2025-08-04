import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface AlertProps extends WithSxProps {
    /** The content to display in the alert */
    children: React.ReactNode;
    /** The title of the alert */
    title?: string;
    /** Visual variant of the alert */
    variant?: "info" | "success" | "warning" | "error";
    /** Style variant of the alert */
    styleVariant?: "default" | "filled" | "light" | "outline" | "transparent" | "white";
    /** Size of the alert */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show the close button */
    closeable?: boolean;
    /** Whether the alert is visible */
    visible?: boolean;
    /** Callback when the close button is clicked */
    onClose?: () => void;
    /** Whether the alert is disabled */
    disabled?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
