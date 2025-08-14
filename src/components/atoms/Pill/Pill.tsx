import React from "react";
import { Close } from "../Icon/IconSet";
import { Icon } from "../Icon/index";
import styles from "./Pill.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

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
}

export const Pill: React.FC<PillProps> = ({
  children,
  variant = "default",
  size = "md",
  closable = true,
  onClose = () => {},
  className = "",
  disabled = false,
  sx,
  style,
}) => {
  const { isDark } = useTheme();
  const handleClose = () => {
    if (!disabled && onClose) {
      onClose();
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
    <div className={pillClasses} style={sxStyle}>
      <span className={styles.content}>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          disabled={disabled}
          aria-label="Remove pill"
        >
          <Icon icon={Close} size={getIconSize(size)} />
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
