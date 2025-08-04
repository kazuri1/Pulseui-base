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
  /** Radio button state */
  state?: "default" | "disabled" | "error";
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
  state = "default",
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

  const radioClasses = combineClassNames(
    styles.radio,
    styles[`size-${size}`],
    styles[`state-${state}`],
    labelPosition === "left" && styles.labelLeft,
    sxClassName
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (state === "disabled") return;
    onChange?.(event.target.checked);
  };

  const isDisabled = state === "disabled";

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
