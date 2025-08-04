import React from "react";
import type { WithSxProps } from "../../../../utils/sxUtils";
export interface CalendarDecadeProps extends WithSxProps {
    /** The date to display (defaults to current date) */
    date?: Date;
    /** Callback when a decade is selected */
    onDecadeSelect?: (decadeStart: number, decadeEnd: number) => void;
    /** Callback when century changes */
    onCenturyChange?: (year: number) => void;
    /** Selected decade start year */
    selectedDecadeStart?: number;
    /** Size of the calendar */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show navigation arrows */
    showNavigation?: boolean;
    /** Whether the calendar is disabled */
    disabled?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const CalendarDecade: React.FC<CalendarDecadeProps>;
export default CalendarDecade;
