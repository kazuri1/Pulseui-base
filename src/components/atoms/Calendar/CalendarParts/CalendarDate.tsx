import React from "react";
import styles from "./CalendarDate.module.scss";
import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../../utils/sxUtils";
import {
  mergeSxWithStyles,
  combineClassNames,
} from "../../../../utils/sxUtils";

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

export const CalendarDate: React.FC<CalendarDateProps> = ({
  date,
  variant = "default",
  state = "default",
  size = "md",
  active = "off",
  indicator = false,
  disabled = false,
  onClick,
  id,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  // Check if the date is Saturday (6) or Sunday (0)
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  const dateClasses = combineClassNames(
    styles.calendarDate,
    styles[`variant-${variant}`],
    styles[`state-${state}`],
    styles[`size-${size}`],
    styles[`active-${active}`],
    isWeekend && styles.weekend,
    disabled && styles.stateDisabled,
    sxClassName
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(date);
    }
  };

  const dayNumber = date.getDate();

  return (
    <button
      className={dateClasses}
      style={sxStyle}
      id={id}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      <span className={styles.dayNumber}>{dayNumber}</span>
      {indicator && <span className={styles.indicator} />}
    </button>
  );
};

CalendarDate.displayName = "CalendarDate";
