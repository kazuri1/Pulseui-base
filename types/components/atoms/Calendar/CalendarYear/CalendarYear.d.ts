import React from "react";
import type { WithSxProps } from "../../../../utils/sxUtils";
export interface CalendarYearProps extends WithSxProps {
    /** The date to display (defaults to current date) */
    date?: Date;
    /** Callback when a year is selected */
    onYearSelect?: (year: number) => void;
    /** Callback when decade changes */
    onDecadeChange?: (year: number) => void;
    /** Selected year */
    selectedYear?: number;
    /** Size of the calendar */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show navigation arrows */
    showNavigation?: boolean;
    /** Whether the calendar is disabled */
    disabled?: boolean;
    /** Unique identifier */
    id?: string;
}
export declare const CalendarYear: React.FC<CalendarYearProps>;
export default CalendarYear;
