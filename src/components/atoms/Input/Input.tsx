import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { Info, KeyboardArrowDown } from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";

export interface InputProps {
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Input variant style */
  variant?: "default" | "filled" | "unstyled";
  /** Input state */
  state?: "enabled" | "focus" | "typing" | "filled" | "disabled";
  /** Error state */
  error?: boolean;
  /** Show info icon */
  showInfoIcon?: boolean;
  /** Show dropdown arrow */
  showDropdownArrow?: boolean;
  /** Custom info icon component */
  infoIconComponent?: SvgIconComponent;
  /** Custom dropdown arrow component */
  dropdownArrowComponent?: SvgIconComponent;
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  /** Input size */
  size?: "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Required field */
  required?: boolean;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Focus handler */
  onFocus?: () => void;
  /** Blur handler */
  onBlur?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = "Placeholder",
  value = "",
  variant = "default",
  state = "enabled",
  error = false,
  showInfoIcon = true,
  showDropdownArrow = true,
  infoIconComponent,
  dropdownArrowComponent,
  type = "text",
  size = "md",
  disabled = false,
  readonly = false,
  required = false,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = "",
}) => {
  const inputClasses = classNames(
    styles.input,
    styles[`variant-${variant}`],
    styles[`state-${state}`],
    styles[`size-${size}`],
    {
      [styles.error]: error,
      [styles.disabled]: disabled || state === "disabled",
    },
    className
  );

  // Use custom icons if provided, otherwise use defaults
  const InfoIcon = infoIconComponent || Info;
  const DropdownArrow = dropdownArrowComponent || KeyboardArrowDown;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={inputClasses}
        disabled={disabled || state === "disabled"}
        readOnly={readonly}
        required={required}
        name={name}
        id={id}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className={styles.icons}>
        {showInfoIcon && <InfoIcon className={styles.infoIcon} />}
        {showDropdownArrow && (
          <DropdownArrow className={styles.dropdownArrow} />
        )}
      </div>
    </div>
  );
};
