import React, { useState, useMemo } from "react";
import styles from "./CalendarDecade.module.scss";
// import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../../utils/sxUtils";
import {
  mergeSxWithStyles,
  combineClassNames,
} from "../../../../utils/sxUtils";
import { CalendarTitle } from "../CalendarParts/CalendarTitle";

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

export const CalendarDecade: React.FC<CalendarDecadeProps> = ({
  date = new Date(),
  onDecadeSelect,
  onCenturyChange,
  selectedDecadeStart,
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
    styles.calendarDecade,
    styles[`size-${size}`],
    disabled && styles.disabled,
    sxClassName
  );

  // Calculate century data
  const centuryData = useMemo(() => {
    const centuryStart = Math.floor(currentYear / 100) * 100;
    const decades: Array<{
      decadeStart: number;
      decadeEnd: number;
      isCurrentDecade: boolean;
      isSelected: boolean;
    }> = [];

    const today = new Date();
    const currentYearValue = today.getFullYear();
    const currentDecadeStart = Math.floor(currentYearValue / 10) * 10;

    // Generate 12 decades (3 rows * 4 columns)
    for (let i = 0; i < 12; i++) {
      const decadeStart = centuryStart + i * 10;
      const decadeEnd = decadeStart + 9;
      const isCurrentDecade = decadeStart === currentDecadeStart;
      const isSelected = selectedDecadeStart === decadeStart;

      decades.push({
        decadeStart,
        decadeEnd,
        isCurrentDecade,
        isSelected,
      });
    }

    return decades;
  }, [currentYear, selectedDecadeStart]);

  const handleDecadeClick = (decadeStart: number, decadeEnd: number) => {
    if (disabled) return;

    if (onDecadeSelect) {
      onDecadeSelect(decadeStart, decadeEnd);
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

  const formatCenturyRange = (year: number) => {
    const centuryStart = Math.floor(year / 100) * 100;
    const centuryEnd = centuryStart + 99;
    return `${centuryStart}-${centuryEnd}`;
  };

  

  

  return (
    <div className={calendarClasses} style={sxStyle} id={id}>
      {/* Header */}
      <div className={styles.header}>
        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handlePreviousCentury}
            disabled={disabled}
            aria-label="Previous century"
          >
            ‹
          </button>
        )}

        <CalendarTitle type="titles" size={size}>
          {formatCenturyRange(currentYear)}
        </CalendarTitle>

        {showNavigation && (
          <button
            className={styles.navButton}
            onClick={handleNextCentury}
            disabled={disabled}
            aria-label="Next century"
          >
            ›
          </button>
        )}
      </div>

      {/* Decade Grid */}
      <div className={styles.grid}>
        {centuryData.map((decadeData, index) => (
          <CalendarTitle
            key={index}
            type="day"
            size={size}
            onClick={() =>
              handleDecadeClick(decadeData.decadeStart, decadeData.decadeEnd)
            }
            disabled={disabled}
          >
            {decadeData.decadeStart}-{decadeData.decadeEnd}
          </CalendarTitle>
        ))}
      </div>
    </div>
  );
};

CalendarDecade.displayName = "CalendarDecade";

export default CalendarDecade;
