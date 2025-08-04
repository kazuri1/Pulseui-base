import React from "react";
import type { WithSxProps } from "../../../../utils/sxUtils";
export interface CalendarDateProps extends WithSxProps {
    /** The date to display */
    date: Date;
    /** Visual variant of the date */
    variant?: "default" | "holiday" | "disabled" | "text";
    /** Interactive state */
    state?: "default" | "hover";
    /** Size of the date component */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Active state of the date */
    active?: "off" | "initial" | "end" | "passive" | "selected";
    /** Whether to show the indicator dot */
    indicator?: boolean;
    /** Whether the date is disabled */
    disabled?: boolean;
    /** Click handler */
    onClick?: (date: Date) => void;
    /** Unique identifier */
    id?: string;
}
export declare const CalendarDate: React.FC<CalendarDateProps>;
