import React from "react";
import styles from "./ProgressBar.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { Text } from "../Text";

export interface ProgressBarProps extends WithSxProps {
  /** Progress value (0-100) */
  value: number;
  /** Size of the progress bar */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Color variant */
  variant?: "primary" | "success" | "warning" | "error" | "info";
  /** Whether to show percentage label */
  showLabel?: boolean;
  /** Custom label text (overrides percentage) */
  label?: string;
  /** Whether the progress bar is striped */
  striped?: boolean;
  /** Whether the stripes are animated */
  animated?: boolean;
  /** Radius of the progress bar */
  radius?: "none" | "sm" | "md" | "lg" | "full";
  /** Whether the progress bar is disabled */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = "md",
  variant = "primary",
  showLabel = false,
  label,
  striped = false,
  animated = false,
  radius = "md",
  disabled = false,
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

  // Ensure value is between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));

  const progressBarClasses = combineClassNames(
    styles.progressBar,
    styles[`size-${size}`],
    styles[`radius-${radius}`],
    disabled && styles.disabled,
    sxClassName
  );

  const progressFillClasses = combineClassNames(
    styles.progressFill,
    styles[`variant-${variant}`],
    striped && styles.striped,
    animated && striped && styles.animated
  );

  const displayLabel =
    label || (showLabel ? `${Math.round(clampedValue)}%` : "");

  return (
    <div className={progressBarClasses} style={sxStyle} id={id}>
      <div className={styles.progressTrack}>
        <div
          className={progressFillClasses}
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={displayLabel}
        />
      </div>
      {displayLabel && (
        <Text
          variant="sm"
          className={styles.progressLabel}
          color={disabled ? "disabled" : "primary"}
        >
          {displayLabel}
        </Text>
      )}
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";
