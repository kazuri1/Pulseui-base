import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface KbdProps extends WithSxProps {
    /** The keyboard key text to display */
    children: React.ReactNode;
    /** Size variant of the keyboard key */
    size?: "sm" | "md" | "lg" | "xl";
}
export declare const Kbd: React.FC<KbdProps>;
