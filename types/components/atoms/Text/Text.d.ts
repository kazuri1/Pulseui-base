import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface TextProps extends WithSxProps {
    /** Text content */
    children: React.ReactNode;
    /** Text variant/size */
    variant?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /** Text color variant */
    color?: "primary" | "secondary" | "muted" | "success" | "warning" | "error";
    /** Text weight */
    weight?: "normal" | "medium" | "semibold" | "bold";
    /** Whether text should be truncated */
    truncate?: boolean;
    /** Number of lines to show before truncating */
    lines?: number;
    /** HTML element to render */
    as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const Text: React.FC<TextProps>;
