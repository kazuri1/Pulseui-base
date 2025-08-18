import React from "react";
import styles from "./Radio.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";


export interface RadioProps extends WithSxProps {
  /** Radio button label text */
  label?: string;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Radio button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Position of the label relative to the radio button */
  labelPosition?: "right" | "left";
  /** Radio button variant style */
  variant?: "default" | "filled" | "outline" | "light";
  /** Radio button state */
  state?: "default" | "disabled" | "error";
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Whether the radio button has an error state */
  error?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Unique identifier for the radio button */
  id?: string;
  /** Name attribute for radio group */
  name?: string;
  /** Value attribute for the radio button */
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  showLabel = true,
  size = "md",
  checked = false,
  labelPosition = "right",
  variant = "default",
  state,
  disabled = false,
  error = false,
  onChange,
  id,
  name,
  value,
  className = "",
  sx,
  style,
}) => {
  
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  // Determine state based on boolean props if state is not explicitly set
  const finalState =
    state || (disabled ? "disabled" : error ? "error" : "default");

  const radioClasses = combineClassNames(
    styles.radio,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`state-${finalState}`],
    labelPosition === "left" && styles.labelLeft,
    sxClassName
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (finalState === "disabled") return;
    onChange?.(event.target.checked);
  };

  const isDisabled = finalState === "disabled";

  return (
    <label className={radioClasses} style={sxStyle}>
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
        id={id}
        name={name}
        value={value}
        className={styles.input}
        
      />
      <span className={styles.radioButton}>
        <span className={styles.radioDot} />
      </span>
      {showLabel && label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Radio.displayName = "Radio";
