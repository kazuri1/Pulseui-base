import type { ReactNode } from "react";
export interface DatePickerProps {
    /** Label for the date picker */
    label?: ReactNode;
    /** Whether the field is required */
    required?: boolean;
    /** Placeholder text for the input */
    placeholder?: string;
    /** Current selected date */
    value?: Date | null;
    /** Default selected date */
    defaultValue?: Date | null;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Whether the date picker is disabled */
    disabled?: boolean;
    /** Whether the calendar is open */
    open?: boolean;
    /** Whether to show weekends in a different color */
    highlightWeekends?: boolean;
    /** Custom format for displaying the date */
    dateFormat?: string;
    /** Whether to show the calendar on input focus */
    showOnFocus?: boolean;
    /** Whether to close calendar when date is selected */
    closeOnSelect?: boolean;
    /** Whether to show today's date highlighted */
    showToday?: boolean;
    /** Custom CSS class name */
    className?: string;
    /** Input field name */
    name?: string;
    /** Error state */
    error?: boolean;
    /** Error message */
    errorMessage?: string;
    /** Change handler */
    onChange?: (date: Date | null) => void;
    /** Calendar open/close handler */
    onOpenChange?: (open: boolean) => void;
    /** Input change handler */
    onInputChange?: (value: string) => void;
}
