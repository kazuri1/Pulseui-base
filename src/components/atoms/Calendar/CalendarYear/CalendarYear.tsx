import React, { useState, useMemo } from "react";
import styles from "./CalendarYear.module.scss";
import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../../utils/sxUtils";
import {
  mergeSxWithStyles,
  combineClassNames,
} from "../../../../utils/sxUtils";
import { CalendarTitle } from "../CalendarParts/CalendarTitle";

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

export const CalendarYear: React.FC<CalendarYearProps> = ({
  date = new Date(),
  onYearSelect,
  onDecadeChange,
  selectedYear,
  size = "md",
  showNavigation = true,
  disabled = false,
  id,
  className = "",
  sx,
  style,
}) => {
  const [currentYear, setCurrentYear] = useState(date.getFullYear());

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const calendarClasses = combineClassNames(
    styles.calendarYear,
    styles[`size-${size}`],
    disabled && styles.disabled,
    sxClassName
  );

  // Calculate decade data
  const decadeData = useMemo(() => {
    const decadeStart = Math.floor(currentYear / 10) * 10;
    const years: Array<{
      year: number;
      isCurrentYear: boolean;
      isSelected: boolean;
    }> = [];

    const today = new Date();
    const currentYearValue = today.getFullYear();

    // Generate 12 years (3 rows * 4 columns)
    for (let i = 0; i < 12; i++) {
      const year = decadeStart + i;
      const isCurrentYear = year === currentYearValue;
      const isSelected = selectedYear === year;

      years.push({
        year,
        isCurrentYear,
        isSelected,
      });
    }

    return years;
  }, [currentYear, selectedYear]);

  const handleYearClick = (year: number) => {
    if (disabled) return;

    if (onYearSelect) {
      onYearSelect(year);
    }
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

  const formatDecadeRange = (year: number) => {
    const decadeStart = Math.floor(year / 10) * 10;
    const decadeEnd = decadeStart + 9;
    return `${decadeStart}-${decadeEnd}`;
  };

  const getYearVariant = (yearData: (typeof decadeData)[0]) => {
    if (yearData.isCurrentYear) return "holiday";
    if (yearData.isSelected) return "default";
    return "default";
  };

  const getYearActive = (yearData: (typeof decadeData)[0]) => {
    if (yearData.isSelected) return "selected";
    if (yearData.isCurrentYear) return "initial";
    return "off";
  };

  return (
    <div className={calendarClasses} style={sxStyle} id={id}>
      {/* Header */}
      <div className={styles.header}>
        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handlePreviousDecade}
            disabled={disabled}
            aria-label="Previous decade"
          >
            ‹
          </button>
        )}

        <CalendarTitle type="titles" size={size}>
          {formatDecadeRange(currentYear)}
        </CalendarTitle>

        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handleNextDecade}
            disabled={disabled}
            aria-label="Next decade"
          >
            ›
          </button>
        )}
      </div>

      {/* Year Grid */}
      <div className={styles.grid}>
        {decadeData.map((yearData, index) => (
          <CalendarTitle
            key={index}
            type="day"
            size={size}
            onClick={() => handleYearClick(yearData.year)}
            disabled={disabled}
          >
            {yearData.year}
          </CalendarTitle>
        ))}
      </div>
    </div>
  );
};

CalendarYear.displayName = "CalendarYear";

export default CalendarYear;
