import React, { forwardRef } from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import { Icon } from "../Icon/index";
import {
  Search,
  Info,
  FilterList,
  Person,
  Settings,
  ArrowDropDown,
  Email,
  LocationOn,
  Home,
  Visibility,
  VisibilityOff,
} from "../Icon/IconSet";
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
  state?: "enabled" | "focus" | "typing" | "filled" | "disabled" | "error";

  /** Left icon */
  leftIcon?: SvgIconComponent | string;
  /** Right icon */
  rightIcon?: SvgIconComponent | string;
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Required field */
  required?: boolean;
  /** Show password toggle for password type */
  showPasswordToggle?: boolean;
  /** Password visibility state */
  passwordVisible?: boolean;
  /** Password visibility change handler */
  onPasswordVisibilityChange?: (visible: boolean) => void;

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

      leftIcon,
      rightIcon,
      type = "text",
      disabled = false,
      readonly = false,
      required = false,
      showPasswordToggle = false,
      passwordVisible = false,
      onPasswordVisibilityChange,

      className = "",
      name,
      id,
    },
    ref
  ) => {
    // Determine the actual state based on props
    const actualState = disabled ? "disabled" : state;

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

    // Map string values to icon components
    const getLeftIcon = () => {
      if (typeof leftIcon === "string") {
        if (leftIcon === "none") {
          return null;
        }
        const iconMap: Record<string, SvgIconComponent> = {
          search: Search,
          info: Info,
          filter: FilterList,
          person: Person,
          settings: Settings,
        };
        return iconMap[leftIcon] || null;
      }
      return leftIcon;
    };

    const getRightIcon = () => {
      if (typeof rightIcon === "string") {
        if (rightIcon === "none") {
          return null;
        }
        const iconMap: Record<string, SvgIconComponent> = {
          dropdown: ArrowDropDown,
          email: Email,
          location: LocationOn,
          home: Home,
          settings: Settings,
        };
        return iconMap[rightIcon] || null;
      }
      return rightIcon;
    };

    const leftIconComponent = getLeftIcon();
    const rightIconComponent = getRightIcon();

    // Handle password visibility toggle
    const handlePasswordToggle = () => {
      if (onPasswordVisibilityChange) {
        onPasswordVisibilityChange(!passwordVisible);
      }
    };

    // Determine if we should show password toggle
    const shouldShowPasswordToggle = type === "password" && showPasswordToggle;
    const effectiveType = type === "password" && passwordVisible ? "text" : type;

    // Build CSS classes
    const inputClasses = [
      styles.input,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`state-${actualState}`],
      {
        [styles.disabled]: disabled,
        [styles.readonly]: readonly,
        [styles["has-left-icon"]]: !!leftIconComponent,
        [styles["has-right-icon"]]: !!rightIconComponent || shouldShowPasswordToggle,
      },
      className,
    ].filter(Boolean);

    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          type={effectiveType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          name={name}
          id={id}
          className={inputClasses.join(" ")}
        />

        {/* Left Icon */}
        {leftIconComponent && (
          <div className={styles.leftIcon}>
            <Icon icon={leftIconComponent} size={iconSize} color="muted" />
          </div>
        )}

        {/* Right Icon */}
        {rightIconComponent && (
          <div className={styles.rightIcon}>
            <Icon icon={rightIconComponent} size={iconSize} color="muted" />
          </div>
        )}

        {/* Password Toggle Icon */}
        {shouldShowPasswordToggle && (
          <div className={styles.rightIcon}>
            <button
              type="button"
              onClick={handlePasswordToggle}
              className={styles.passwordToggle}
              disabled={disabled}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              <Icon 
                icon={passwordVisible ? VisibilityOff : Visibility} 
                size={iconSize} 
                color="muted" 
              />
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
