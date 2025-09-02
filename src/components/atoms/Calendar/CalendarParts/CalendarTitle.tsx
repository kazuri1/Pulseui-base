import React from "react";
import styles from "./CalendarTitle.module.scss";
// import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../../utils/sxUtils";
import {
  mergeSxWithStyles,
  combineClassNames,
} from "../../../../utils/sxUtils";

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

export const CalendarTitle: React.FC<CalendarTitleProps> = ({
  children,
  type = "titles",
  state = "default",
  size = "md",
  disabled = false,
  onClick,
  onChange,
  editable = false,
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

  const titleClasses = combineClassNames(
    styles.calendarTitle,
    styles[`type-${type}`],
    styles[`state-${state}`],
    styles[`size-${size}`],
    disabled && styles.stateDisabled,
    editable && styles.editable,
    sxClassName
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onChange) {
      event.currentTarget.blur();
    }
  };

  // If editable and type is day, render as input
  if (editable && type === "day") {
    return (
      <input
        className={titleClasses}
        style={sxStyle}
        id={id}
        value={children as string}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        type="text"
        maxLength={2}
        size={1}
      />
    );
  }

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={titleClasses}
      style={sxStyle}
      id={id}
      onClick={onClick ? handleClick : undefined}
      disabled={disabled}
      type={onClick ? "button" : undefined}
    >
      {children}
    </Component>
  );
};

CalendarTitle.displayName = "CalendarTitle";
