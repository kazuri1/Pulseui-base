import React, { forwardRef } from "react";
import { Icon } from "../Icon";
import { Check } from "../Icon/IconSet";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
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
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked || false
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

    const checkboxId =
      id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${checkboxId}-error` : undefined;

    return (
      <div className={`${styles.checkboxContainer} ${className}`}>
        <div className={styles.checkboxWrapper}>
          <input
            ref={ref}
            id={checkboxId}
            name={name}
            type="checkbox"
            checked={currentChecked}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={styles.checkboxInput}
            aria-describedby={errorId}
            aria-invalid={!!error}
          />

          <div
            className={`
              ${styles.checkbox}
              ${styles[`size-${size}`]}
              ${currentChecked ? styles.checked : ""}
              ${disabled ? styles.disabled : ""}
              ${error ? styles.error : ""}
            `}
            aria-hidden="true"
            onClick={() => {
              if (!disabled) {
                const input = document.getElementById(
                  checkboxId
                ) as HTMLInputElement;
                if (input) {
                  input.click();
                }
              }
            }}
          >
            {currentChecked && (
              <Icon
                icon={Check}
                size={size === "sm" ? "xs" : size === "lg" ? "sm" : "sm"}
                color="inherit"
              />
            )}
          </div>

          {label && (
            <label
              htmlFor={checkboxId}
              className={`
                ${styles.label}
                ${styles[`size-${size}`]}
                ${disabled ? styles.disabled : ""}
              `}
              onClick={() => {
                if (!disabled) {
                  const input = document.getElementById(
                    checkboxId
                  ) as HTMLInputElement;
                  if (input) {
                    input.click();
                  }
                }
              }}
            >
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
        </div>

        {error && (
          <div
            id={errorId}
            className={`${styles.errorMessage} ${styles[`size-${size}`]}`}
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
