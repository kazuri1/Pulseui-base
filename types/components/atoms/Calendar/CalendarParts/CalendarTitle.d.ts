import React from "react";
import type { WithSxProps } from "../../../../utils/sxUtils";
export interface CalendarTitleProps extends WithSxProps {
    /** The text content to display */
    children: React.ReactNode;
    /** Type of title - Titles for month/year, Day for day labels */
    type?: "titles" | "day";
    /** Interactive state */
    state?: "default" | "hover";
    /** Size of the title component */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether the title is disabled */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Change handler for editable content */
    onChange?: (value: string) => void;
    /** Whether the title is editable */
    editable?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const CalendarTitle: React.FC<CalendarTitleProps>;
