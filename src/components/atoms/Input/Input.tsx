import * as React from "react";
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
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface InputProps extends WithSxProps {
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
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
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

  /** Callback fired when input value changes */
  onChange?: (value: string) => void;
  /** Callback fired when input is focused */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      passwordVisible: externalPasswordVisible,
      onPasswordVisibilityChange,

      onChange,
      onFocus,
      onBlur,

      className = "",
      name,
      id,
      sx,
      style,
    },
    ref
  ) => {
    // Internal state for password visibility
    const [internalPasswordVisible, setInternalPasswordVisible] =
      React.useState(false);

    // Use external state if provided, otherwise use internal state
    const passwordVisible =
      onPasswordVisibilityChange !== undefined
        ? externalPasswordVisible ?? false
        : internalPasswordVisible;
    // Determine the actual state based on props
    const actualState = disabled ? "disabled" : state;

    const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
      sx,
      style,
      className
    );

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
        // External controlled mode
        onPasswordVisibilityChange(!passwordVisible);
      } else {
        // Internal controlled mode
        setInternalPasswordVisible(!passwordVisible);
      }
    };

    // Determine if we should show password toggle
    const shouldShowPasswordToggle =
      type === "password" && showPasswordToggle !== false;
    const effectiveType =
      type === "password" && passwordVisible ? "text" : type;

    // Build CSS classes
    const inputClasses = combineClassNames(
      styles.input,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`state-${actualState}`],
      disabled && styles.disabled,
      readonly && styles.readonly,
      !!leftIconComponent && styles["has-left-icon"],
      (!!rightIconComponent || shouldShowPasswordToggle) &&
        styles["has-right-icon"],
      sxClassName
    );

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
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClasses}
          style={sxStyle}
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
