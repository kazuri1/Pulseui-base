import React, { forwardRef } from "react";
import styles from "./Switch.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

export interface SwitchProps extends WithSxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  onChange?: (checked: boolean) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      id,
      name,
      checked,
      defaultChecked,
      disabled = false,
      required = false,
      label,
      error,
      size = "md",
      onChange,
      onFocus,
      onBlur,
      className = "",
      sx,
      style,
    },
    ref
  ) => {
    const { isDark } = useTheme();
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked || false
    );
    const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
      sx,
      style,
      className
    );

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${switchId}-error` : undefined;

    const containerClasses = combineClassNames(
      styles.switchContainer,
      sxClassName
    );

    return (
      <div className={containerClasses} style={sxStyle}>
        <div className={styles.switchLabelGroup}>
          <input
            ref={ref}
            id={switchId}
            name={name}
            type="checkbox"
            role="switch"
            checked={currentChecked}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={styles.switchInput}
            aria-describedby={errorId}
            aria-invalid={!!error}
            data-theme={isDark ? "dark" : "light"}
          />

          <div
            className={`
              ${styles.switch}
              ${styles[`size-${size}`]}
              ${currentChecked ? styles.checked : ""}
              ${disabled ? styles.disabled : ""}
              ${error ? styles.error : ""}
            `}
            aria-hidden="true"
            onClick={() => {
              if (!disabled) {
                const input = document.getElementById(
                  switchId
                ) as HTMLInputElement;
                if (input) {
                  input.click();
                }
              }
            }}
          >
            <div className={styles.switchTrack}>
              <div className={styles.switchThumb} />
            </div>
          </div>

          {label && (
            <label
              htmlFor={switchId}
              className={`
                ${styles.label}
                ${styles[`size-${size}`]}
                ${disabled ? styles.disabled : ""}
              `}
            >
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
        </div>

        {error && (
          <div
            id={errorId}
            className={`
              ${styles.errorMessage}
              ${styles[`size-${size}`]}
            `}
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
