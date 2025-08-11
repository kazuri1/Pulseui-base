import React from "react";
export interface KbdProps {
    /** The keyboard key text to display */
    children: React.ReactNode;
    /** Size variant of the keyboard key */
    size?: "sm" | "md" | "lg" | "xl";
    /** Additional CSS classes */
    className?: string;
}
export declare const Kbd: React.FC<KbdProps>;
