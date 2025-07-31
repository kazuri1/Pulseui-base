import React from "react";
import { Close } from "../Icon/IconSet";
import { Icon } from "../Icon/index";
import styles from "./Pill.module.scss";

export interface PillProps {
  /** Content to display inside the pill */
  children: React.ReactNode;
  /** Pill size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether the pill has a close button */
  closable?: boolean;
  /** Close button click handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

export const Pill: React.FC<PillProps> = ({
  children,
  size = "md",
  closable = false,
  onClose,
  className = "",
  disabled = false,
}) => {
  const handleClose = () => {
    if (!disabled && onClose) {
      onClose();
    }
  };

  const pillClasses = [
    styles.pill,
    styles[`size-${size}`],
    {
      [styles.closable]: closable,
      [styles.disabled]: disabled,
    },
    className,
  ].filter(Boolean);

  return (
    <div className={pillClasses.join(" ")}>
      <span className={styles.content}>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          disabled={disabled}
          aria-label="Remove pill"
        >
          <Icon icon={Close} size={getIconSize(size)} color="muted" />
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
      return "md";
    case "lg":
      return "md";
    case "xl":
      return "lg";
    default:
      return "md";
  }
};

Pill.displayName = "Pill";
