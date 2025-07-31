import React from "react";
import { Icon } from "../Icon";
import { InfoOutlined } from "../Icon/IconSet";
import styles from "./Switch.module.scss";

export interface SwitchProps {
  /** Switch label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Caption text below the switch */
  caption?: string;
  /** Error message to display */
  error?: string;
  /** Switch checked state */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Switch size */
  size?: "sm" | "md" | "lg";
  /** Switch name attribute */
  name?: string;
  /** Switch id attribute */
  id?: string;
  /** Callback fired when switch state changes */
  onChange?: (checked: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  required = false,
  caption,
  error,
  checked = false,
  disabled = false,
  size = "md",
  name,
  id,
  onChange,
  className = "",
}) => {
  const switchId =
    id || name || `switch-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  const containerClasses = [
    styles.root,
    styles[`size-${size}`],
    error && styles.error,
    disabled && styles.disabled,
    !caption && !error && styles.centerLabel,
    className,
  ].filter(Boolean);

  return (
    <div className={containerClasses.join(" ")}>
      <div className={styles.switchContainer}>
        <label htmlFor={switchId} className={styles.switchLabel}>
          <input
            id={switchId}
            name={name}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            className={styles.switchInput}
          />
          <span className={styles.switchTrack}>
            <span className={styles.switchThumb} />
          </span>
        </label>
      </div>

      <div className={styles.content}>
        {label && (
          <label htmlFor={switchId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        {(caption || error) && (
          <div className={styles.footer}>
            {caption && !error && (
              <span className={styles.caption}>{caption}</span>
            )}
            {error && (
              <div className={styles.errorMessage}>
                <Icon
                  icon={InfoOutlined}
                  size="sm"
                  color="error"
                  className={styles.errorIcon}
                />
                <span>{error}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
