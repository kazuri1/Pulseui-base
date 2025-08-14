import React, { useState, useMemo } from "react";
import styles from "./Calendar.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { CalendarDate, type CalendarDateProps } from "./CalendarParts";
import { CalendarTitle } from "./CalendarParts";
import { useTheme } from "../../../contexts/ThemeContext";

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

export const Calendar: React.FC<CalendarProps> = ({
  date = new Date(),
  view = "month",
  onDateSelect,
  onYearSelect,
  onDecadeSelect,
  onMonthChange,
  onDecadeChange,
  onCenturyChange,
  onViewChange,
  selectedDate,
  selectedYear,
  selectedDecadeStart,
  rangeStart,
  rangeEnd,
  size = "md",
  showNavigation = true,
  showDayLabels = true,
  disabled = false,
  dayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  showOutsideDates = true,
  connected = false,
  showIndicators = true,
  getDateIndicator = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  },
  id,
  className = "",
  sx,
  style,
}) => {
  const { isDark } = useTheme();
  const [currentDate, setCurrentDate] = useState(date);
  const [currentYear, setCurrentYear] = useState(date.getFullYear());

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const calendarClasses = combineClassNames(
    styles.calendar,
    styles[`size-${size}`],
    disabled && styles.disabled,
    sxClassName
  );

  // Calculate calendar data for month view
  const calendarData = useMemo(() => {
    if (view !== "month") return [];

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Start of the calendar (including previous month's dates)
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const dates: Array<{
      date: Date;
      isCurrentMonth: boolean;
      isToday: boolean;
      isSelected: boolean;
      isRangeStart: boolean;
      isRangeEnd: boolean;
      isInRange: boolean;
    }> = [];

    const today = new Date();
    const selectedDates = Array.isArray(selectedDate)
      ? selectedDate
      : selectedDate
      ? [selectedDate]
      : [];

    // Generate 42 dates (6 weeks * 7 days)
    for (let i = 0; i < 42; i++) {
      const dateToAdd = new Date(startDate);
      dateToAdd.setDate(startDate.getDate() + i);

      const isCurrentMonth = dateToAdd.getMonth() === month;
      const isToday = dateToAdd.toDateString() === today.toDateString();
      const isSelected = selectedDates.some(
        (selected) => selected.toDateString() === dateToAdd.toDateString()
      );

      const isRangeStart = !!(
        rangeStart && dateToAdd.toDateString() === rangeStart.toDateString()
      );
      const isRangeEnd = !!(
        rangeEnd && dateToAdd.toDateString() === rangeEnd.toDateString()
      );
      const isInRange = !!(
        rangeStart &&
        rangeEnd &&
        dateToAdd >= rangeStart &&
        dateToAdd <= rangeEnd
      );

      dates.push({
        date: dateToAdd,
        isCurrentMonth,
        isToday,
        isSelected,
        isRangeStart,
        isRangeEnd,
        isInRange,
      });
    }

    return dates;
  }, [currentDate, selectedDate, rangeStart, rangeEnd, view]);

  // Calculate month data for year view
  const monthData = useMemo(() => {
    if (view !== "year") return [];

    const months: Array<{
      month: number;
      monthName: string;
      isCurrentMonth: boolean;
      isSelected: boolean;
    }> = [];

    const today = new Date();
    const currentYearValue = today.getFullYear();
    const currentMonthValue = today.getMonth();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Generate 12 months
    for (let i = 0; i < 12; i++) {
      const month = i;
      const monthName = monthNames[i];
      const isCurrentMonth =
        currentYearValue === currentYear && month === currentMonthValue;
      const isSelected = false; // You can add month selection logic here if needed

      months.push({
        month,
        monthName,
        isCurrentMonth,
        isSelected,
      });
    }

    return months;
  }, [currentYear, view]);

  // Calculate year data for decade view
  const decadeData = useMemo(() => {
    if (view !== "decade") return [];

    const decadeStart = Math.floor(currentYear / 10) * 10;
    const years: Array<{
      year: number;
      isCurrentYear: boolean;
      isSelected: boolean;
    }> = [];

    const today = new Date();
    const currentYearValue = today.getFullYear();

    // Generate 10 years for the decade (2020-2029)
    for (let i = 0; i < 10; i++) {
      const year = decadeStart + i;
      const isCurrentYear = year === currentYearValue;
      const isSelected = false; // You can add year selection logic here if needed

      years.push({
        year,
        isCurrentYear,
        isSelected,
      });
    }

    return years;
  }, [currentYear, view]);

  // Month view handlers
  const handleDateClick = (clickedDate: Date) => {
    if (disabled) return;

    if (onDateSelect) {
      onDateSelect(clickedDate);
    }
  };

  const handlePreviousMonth = () => {
    if (disabled) return;

    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  };

  const handleNextMonth = () => {
    if (disabled) return;

    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  };

  // Enhanced year click handler for better connected navigation
  const handleYearClick = (year: number) => {
    if (disabled) return;

    if (connected && onViewChange) {
      // Switch to month view for the selected year
      const newDate = new Date(year, 0, 1);
      setCurrentDate(newDate);
      setCurrentYear(year);
      onViewChange("month");
    }

    if (onYearSelect) {
      onYearSelect(year);
    }
  };

  // Enhanced month click handler for better connected navigation
  const handleMonthClick = (month: number) => {
    if (disabled) return;

    if (connected && onViewChange) {
      // Switch to month view for the selected month
      const newDate = new Date(currentYear, month, 1);
      setCurrentDate(newDate);
      onViewChange("month");
    }

    if (onMonthChange) {
      const newDate = new Date(currentYear, month, 1);
      onMonthChange(newDate);
    }
  };

  const handlePreviousYear = () => {
    if (disabled) return;
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    if (disabled) return;
    setCurrentYear(currentYear + 1);
  };

  const handlePreviousDecade = () => {
    if (disabled) return;

    const newYear = currentYear - 10;
    setCurrentYear(newYear);

    if (onDecadeChange) {
      onDecadeChange(newYear);
    }
  };

  const handleNextDecade = () => {
    if (disabled) return;

    const newYear = currentYear + 10;
    setCurrentYear(newYear);

    if (onDecadeChange) {
      onDecadeChange(newYear);
    }
  };

  // Enhanced decade view handler for better connected navigation
  const handleYearInDecadeClick = (year: number) => {
    if (disabled) return;

    if (connected && onViewChange) {
      // Switch to year view for the selected year
      setCurrentYear(year);
      onViewChange("year");
    }

    if (onYearSelect) {
      onYearSelect(year);
    }
  };

  const handlePreviousCentury = () => {
    if (disabled) return;

    const newYear = currentYear - 100;
    setCurrentYear(newYear);

    if (onCenturyChange) {
      onCenturyChange(newYear);
    }
  };

  const handleNextCentury = () => {
    if (disabled) return;

    const newYear = currentYear + 100;
    setCurrentYear(newYear);

    if (onCenturyChange) {
      onCenturyChange(newYear);
    }
  };

  // Format functions
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const formatDecadeRange = (year: number) => {
    const decadeStart = Math.floor(year / 10) * 10;
    const decadeEnd = decadeStart + 9;
    return `${decadeStart}-${decadeEnd}`;
  };

  const formatCenturyRange = (year: number) => {
    const centuryStart = Math.floor(year / 100) * 100;
    const centuryEnd = centuryStart + 99;
    return `${centuryStart}-${centuryEnd}`;
  };

  // Navigation handlers based on view
  const handlePrevious = () => {
    if (view === "month") {
      handlePreviousMonth();
    } else if (view === "year") {
      handlePreviousYear();
    } else if (view === "decade") {
      handlePreviousCentury();
    }
  };

  const handleNext = () => {
    if (view === "month") {
      handleNextMonth();
    } else if (view === "year") {
      handleNextYear();
    } else if (view === "decade") {
      handleNextCentury();
    }
  };

  // Get header title based on view
  const getHeaderTitle = () => {
    if (view === "month") {
      return formatMonthYear(currentDate);
    } else if (view === "year") {
      return currentYear.toString();
    } else if (view === "decade") {
      const decadeStart = Math.floor(currentYear / 10) * 10;
      const decadeEnd = decadeStart + 9;
      return `${decadeStart}-${decadeEnd}`;
    }
    return "";
  };

  // Handle header click for connected navigation
  const handleHeaderClick = () => {
    if (!connected || disabled || !onViewChange) return;

    if (view === "month") {
      // Switch to year view
      setCurrentYear(currentDate.getFullYear());
      onViewChange("year");
    } else if (view === "year") {
      // Switch to decade view
      onViewChange("decade");
    } else if (view === "decade") {
      // Switch back to month view for the current year
      const newDate = new Date(currentYear, 0, 1);
      setCurrentDate(newDate);
      onViewChange("month");
    }
  };

  // Get navigation aria labels based on view
  const getPreviousAriaLabel = () => {
    if (view === "month") return "Previous month";
    if (view === "year") return "Previous year";
    if (view === "decade") return "Previous decade";
    return "Previous";
  };

  const getNextAriaLabel = () => {
    if (view === "month") return "Next month";
    if (view === "year") return "Next year";
    if (view === "decade") return "Next decade";
    return "Next";
  };

  // Get date variant and active state for month view
  const getDateVariant = (
    dateData: (typeof calendarData)[0]
  ): CalendarDateProps["variant"] => {
    if (!dateData.isCurrentMonth) return "disabled";
    if (dateData.isToday) return "holiday";
    return "default";
  };

  const getDateActive = (
    dateData: (typeof calendarData)[0]
  ): CalendarDateProps["active"] => {
    if (dateData.isSelected) return "selected";
    if (dateData.isRangeStart) return "initial";
    if (dateData.isRangeEnd) return "end";
    if (dateData.isInRange) return "passive";
    return "off";
  };

  return (
    <div className={calendarClasses} style={sxStyle} id={id} data-theme={isDark ? "dark" : "light"}>
      {/* Header */}
      <div className={styles.header}>
        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handlePrevious}
            disabled={disabled}
            aria-label={getPreviousAriaLabel()}
          >
            ‹
          </button>
        )}

        <CalendarTitle
          type="titles"
          size={size}
          onClick={connected ? handleHeaderClick : undefined}
          style={connected ? { cursor: "pointer" } : undefined}
        >
          {getHeaderTitle()}
        </CalendarTitle>

        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handleNext}
            disabled={disabled}
            aria-label={getNextAriaLabel()}
          >
            ›
          </button>
        )}
      </div>

      {/* Month View */}
      {view === "month" && (
        <>
          {/* Day Labels */}
          {showDayLabels && (
            <div className={styles.dayLabels}>
              {dayLabels.map((label, index) => (
                <CalendarTitle key={index} type="day" size={size}>
                  {label}
                </CalendarTitle>
              ))}
            </div>
          )}

          {/* Calendar Grid */}
          <div className={styles.grid}>
            {calendarData.map((dateData, index) => (
              <CalendarDate
                key={index}
                date={dateData.date}
                variant={getDateVariant(dateData)}
                active={getDateActive(dateData)}
                size={size}
                disabled={disabled || !dateData.isCurrentMonth}
                onClick={handleDateClick}
                indicator={showIndicators && getDateIndicator(dateData.date)}
              />
            ))}
          </div>
        </>
      )}

      {/* Year View */}
      {view === "year" && (
        <div className={styles.yearGrid}>
          {monthData.map((monthData, index) => (
            <CalendarTitle
              key={index}
              type="day"
              size={size}
              onClick={() => handleMonthClick(monthData.month)}
              disabled={disabled}
            >
              {monthData.monthName}
            </CalendarTitle>
          ))}
        </div>
      )}

      {/* Decade View */}
      {view === "decade" && (
        <div className={styles.decadeGrid}>
          {decadeData.map((yearData, index) => (
            <CalendarTitle
              key={index}
              type="day"
              size={size}
              onClick={() => handleYearInDecadeClick(yearData.year)}
              disabled={disabled}
            >
              {yearData.year}
            </CalendarTitle>
          ))}
          {/* Add empty cells for the last 2 positions to complete 4x3 grid */}
          {Array.from({ length: 2 }, (_, index) => (
            <div key={`empty-${index}`} className={styles.emptyCell} />
          ))}
        </div>
      )}
    </div>
  );
};

Calendar.displayName = "Calendar";

export default Calendar;
