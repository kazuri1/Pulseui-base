import React from "react";
import { Close } from "../Icon/IconSet";
import { Icon } from "../Icon/index";
import styles from "./Pill.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface PillProps extends WithSxProps {
  /** Content to display inside the pill */
  children: React.ReactNode;
  /** Pill variant style */
  variant?:
    | "default"
    | "filled"
    | "light"
    | "outline"
    | "white"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "disabled"
    | "muted";
  /** Pill size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether the pill has a close button (enabled by default) */
  closable?: boolean;
  /** Close button click handler */
  onClose?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Accessibility label for the pill */
  ariaLabel?: string;
  /** Whether the pill is selected */
  ariaSelected?: boolean;
  /** Whether the pill is pressed/active */
  ariaPressed?: boolean;
  /** Describes the pill's purpose */
  ariaDescribedBy?: string;
  /** Tab index for keyboard navigation */
  tabIndex?: number;
}

export const Pill: React.FC<PillProps> = ({
  children,
  variant = "default",
  size = "md",
  closable = true,
  onClose = () => {},
  className = "",
  disabled = false,
  ariaLabel,
  ariaPressed,
  ariaDescribedBy,
  sx,
  style,
}) => {
  const handleClose = () => {
    if (!disabled && onClose) {
      onClose();
    }
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (closable && !disabled) {
        handleClose();
      }
    }
  };

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const pillClasses = combineClassNames(
    styles.pill,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    closable && styles.closable,
    disabled && styles.disabled,
    sxClassName
  );

  return (
    <div
      className={pillClasses}
      style={sxStyle}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
    >
      <span className={styles.content}>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          disabled={disabled}
          aria-label={ariaLabel ? `${ariaLabel} - Remove` : "Remove pill"}
          aria-describedby={ariaDescribedBy}
        >
          <Icon icon={Close} size={getIconSize(size)} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

// Helper function to map pill size to icon size
const getIconSize = (pillSize: string) => {
  switch (pillSize) {
    case "xs":
      return "xs";
    case "sm":
      return "sm";
    case "md":
      return "sm";
    case "lg":
      return "md";
    case "xl":
      return "lg";
    default:
      return "sm";
  }
};

Pill.displayName = "Pill";
