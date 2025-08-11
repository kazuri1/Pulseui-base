import React from "react";
export interface ComponentBoxProps {
    /** The component to display in the center */
    children: React.ReactNode;
    /** The title to display below the component */
    title: string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show a border around the component area */
    showBorder?: boolean;
    /** Background color variant for the component area */
    variant?: "default" | "surface" | "secondary";
    /** Size of the component box */
    size?: "sm" | "md" | "lg" | "xl";
}
export declare const ComponentBox: React.FC<ComponentBoxProps>;
