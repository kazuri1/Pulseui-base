import React, { forwardRef } from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import { Icon } from "../Icon/index";
import styles from "./Input.module.scss";

export interface InputProps {
  /** Input value */
  value?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input variant style */
  variant?: "default" | "filled" | "unstyled";
  /** Input size */
  size?: "sm" | "md" | "lg" | "xl";
  /** Input state */
  state?: "enabled" | "focus" | "typing" | "filled" | "disabled";
  /** Error state */
  error?: boolean;
  /** Show info icon */
  showInfoIcon?: boolean;
  /** Show dropdown arrow */
  showDropdownArrow?: boolean;
  /** Info icon component */
  infoIconComponent?: SvgIconComponent;
  /** Dropdown arrow component */
  dropdownArrowComponent?: SvgIconComponent;
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Required field */
  required?: boolean;

  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value = "",
      placeholder = "",
      variant = "default",
      size = "md",
      state = "enabled",
      error = false,
      showInfoIcon = false,
      showDropdownArrow = false,
      infoIconComponent: InfoIcon,
      dropdownArrowComponent: DropdownIcon,
      type = "text",
      disabled = false,
      readonly = false,
      required = false,

      className = "",
      name,
      id,
    },
    ref
  ) => {
    // Determine the actual state based on props
    const actualState = disabled ? "disabled" : state;

    // Build CSS classes
    const inputClasses = [
      styles.input,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`state-${actualState}`],
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.readonly]: readonly,
      },
      className,
    ].filter(Boolean);

    // Map input size to icon size
    const getIconSize = (inputSize: string) => {
      switch (inputSize) {
        case "sm":
          return "sm";
        case "md":
          return "md";
        case "lg":
          return "lg";
        case "xl":
          return "xl";
        default:
          return "md";
      }
    };

    const iconSize = getIconSize(size);

    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          name={name}
          id={id}
          className={inputClasses.join(" ")}
        />

        {/* Info Icon */}
        {showInfoIcon && InfoIcon && (
          <div className={styles.infoIcon}>
            <Icon icon={InfoIcon} size={iconSize} color="muted" />
          </div>
        )}

        {/* Dropdown Arrow */}
        {showDropdownArrow && DropdownIcon && (
          <div className={styles.dropdownIcon}>
            <Icon icon={DropdownIcon} size={iconSize} color="muted" />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
