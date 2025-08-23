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
  /** Callback fired when key is pressed */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Label for the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Accessibility label (overrides label for screen readers) */
  ariaLabel?: string;
  /** Describes the input's purpose */
  ariaDescribedBy?: string;
  /** Controls the ID of the element this input controls */
  ariaControls?: string;
  /** Whether the input has a popup */
  ariaHasPopup?: boolean;
  /** Whether the input is expanded/collapsed */
  ariaExpanded?: boolean;
  /** Whether the input is pressed/active */
  ariaPressed?: boolean;
  /** Tab index for keyboard navigation */
  tabIndex?: number;
  /** Auto-complete attribute */
  autoComplete?: string;
  /** Auto-focus attribute */
  autoFocus?: boolean;
  /** Input mode for mobile keyboards */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  /** Pattern for validation */
  pattern?: string;
  /** Minimum length */
  minLength?: number;
  /** Maximum length */
  maxLength?: number;
  /** Step value for number inputs */
  step?: number;
  /** Minimum value for number inputs */
  min?: number;
  /** Maximum value for number inputs */
  max?: number;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
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
      showPasswordToggle = true,
      passwordVisible: externalPasswordVisible,
      onPasswordVisibilityChange,

      onChange,
      onFocus,
      onBlur,
      onKeyDown,

      className = "",
      name,
      id,
      label,
      helperText,
      error,
      showLabel = true,
      ariaLabel,
      ariaDescribedBy,
      ariaControls,
      ariaHasPopup,
      ariaExpanded,
      ariaPressed,
      tabIndex,
      autoComplete,
      autoFocus,
      inputMode,
      pattern,
      minLength,
      maxLength,
      step,
      min,
      max,
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
      externalPasswordVisible !== undefined
        ? externalPasswordVisible
        : internalPasswordVisible;

    // Determine the actual state based on props
    const actualState = disabled ? "disabled" : state;

    // Generate unique IDs for accessibility
    const inputId = id || React.useId();
    const helperTextId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [ariaDescribedBy, helperTextId, errorId]
      .filter(Boolean)
      .join(" ");

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
        {/* Label */}
        {showLabel && label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <input
          ref={ref}
          type={effectiveType}
          {...(value !== undefined ? { value } : {})}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          name={name}
          id={inputId}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={inputClasses}
          style={sxStyle}
          aria-label={ariaLabel}
          aria-describedby={describedBy || undefined}
          aria-controls={ariaControls}
          aria-haspopup={ariaHasPopup}
          aria-expanded={ariaExpanded}
          aria-pressed={ariaPressed}
          aria-invalid={!!error}
          aria-required={required}
          tabIndex={tabIndex}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          inputMode={inputMode}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          step={step}
          min={min}
          max={max}
        />

        {/* Left Icon */}
        {leftIconComponent && (
          <div className={styles.leftIcon} aria-hidden="true">
            <Icon icon={leftIconComponent} size={iconSize} color="muted" />
          </div>
        )}

        {/* Right Icon */}
        {rightIconComponent && (
          <div className={styles.rightIcon} aria-hidden="true">
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
              aria-pressed={passwordVisible}
            >
              <Icon
                icon={passwordVisible ? VisibilityOff : Visibility}
                size={iconSize}
                color="muted"
              />
            </button>
          </div>
        )}

        {/* Helper Text */}
        {helperText && (
          <div id={helperTextId} className={styles.helperText}>
            {helperText}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            id={errorId}
            className={styles.errorText}
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
