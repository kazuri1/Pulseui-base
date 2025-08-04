import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface CalendarProps extends WithSxProps {
    /** The date to display (defaults to current date) */
    date?: Date;
    /** Calendar view type */
    view?: "month" | "year" | "decade";
    /** Callback when a date is selected */
    onDateSelect?: (date: Date) => void;
    /** Callback when a year is selected */
    onYearSelect?: (year: number) => void;
    /** Callback when a decade is selected */
    onDecadeSelect?: (decadeStart: number, decadeEnd: number) => void;
    /** Callback when month/year changes */
    onMonthChange?: (date: Date) => void;
    /** Callback when decade changes */
    onDecadeChange?: (year: number) => void;
    /** Callback when century changes */
    onCenturyChange?: (year: number) => void;
    /** Callback when view changes */
    onViewChange?: (view: "month" | "year" | "decade") => void;
    /** Selected date(s) */
    selectedDate?: Date | Date[];
    /** Selected year */
    selectedYear?: number;
    /** Selected decade start year */
    selectedDecadeStart?: number;
    /** Range selection start date */
    rangeStart?: Date;
    /** Range selection end date */
    rangeEnd?: Date;
    /** Size of the calendar */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Whether to show navigation arrows */
    showNavigation?: boolean;
    /** Whether to show day labels */
    showDayLabels?: boolean;
    /** Whether the calendar is disabled */
    disabled?: boolean;
    /** Custom day labels (defaults to Su, Mo, Tu, We, Th, Fr, Sa) */
    dayLabels?: string[];
    /** Whether to show dates from previous/next months */
    showOutsideDates?: boolean;
    /** Whether to enable connected navigation between views */
    connected?: boolean;
    /** Whether to show indicators on dates */
    showIndicators?: boolean;
    /** Function to determine if a date should show an indicator */
    getDateIndicator?: (date: Date) => boolean;
    /** Unique identifier */
    id?: string;
}
export declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
