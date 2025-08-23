import * as React from "react";
import type { KeyboardEvent } from "react";
import { Input } from "../Input/Input";
import { Pill } from "../Pill/Pill";
import styles from "./PillInput.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface PillInputProps extends WithSxProps {
  /** Array of pills/tags */
  pills?: string[];
  /** Placeholder text for the input */
  placeholder?: string;
  /** Input variant style */
  variant?: "default" | "filled" | "unstyled";
  /** Input size */
  size?: "sm" | "md" | "lg" | "xl";
  /** Pill size */
  pillSize?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Input state */
  state?: "enabled" | "focus" | "typing" | "filled" | "disabled" | "error";
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Required field */
  required?: boolean;
  /** Maximum number of pills allowed */
  maxPills?: number;
  /** Callback when pills change */
  onPillsChange?: (pills: string[]) => void;
  /** Callback when a pill is removed */
  onPillRemove?: (pill: string, index: number) => void;
  /** Callback when a pill is added */
  onPillAdd?: (pill: string) => void;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Label for the input */
  label?: string;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Helper text below the input */
  helperText?: string;
  /** Error message */
  error?: string;
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
}

export const PillInput = React.forwardRef<HTMLInputElement, PillInputProps>(
  (
    {
      pills = [],
      placeholder = "0",
      variant = "default",
      size = "md",
      pillSize = "sm",
      state = "enabled",
      disabled = false,
      readonly = false,
      required = false,
      maxPills,
      onPillsChange,
      onPillRemove,
      onPillAdd,
      className = "",
      name,
      id,
      label,
      showLabel = true,
      helperText,
      error,
      ariaLabel,
      ariaDescribedBy,
      ariaControls,
      ariaHasPopup,
      ariaExpanded,
      ariaPressed,
      tabIndex,
      sx,
      style,
    },
    ref
  ) => {
    const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
      sx,
      style,
      className
    );

    const [inputValue, setInputValue] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);

    // Generate unique IDs for accessibility
    const inputId = id || React.useId();
    const helperTextId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const pillsContainerId = `${inputId}-pills`;
    const describedBy = [ariaDescribedBy, helperTextId, errorId]
      .filter(Boolean)
      .join(" ");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        addPill();
      } else if (
        e.key === "Backspace" &&
        inputValue === "" &&
        pills.length > 0
      ) {
        e.preventDefault();
        removeLastPill();
      }
    };

    const addPill = () => {
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !pills.includes(trimmedValue)) {
        if (maxPills && pills.length >= maxPills) {
          return;
        }

        const newPills = [...pills, trimmedValue];
        onPillsChange?.(newPills);
        onPillAdd?.(trimmedValue);
        setInputValue("");
      }
    };

    const removePill = (index: number) => {
      const pillToRemove = pills[index];
      const newPills = pills.filter((_, i) => i !== index);
      onPillsChange?.(newPills);
      onPillRemove?.(pillToRemove, index);
    };

    const removeLastPill = () => {
      if (pills.length > 0) {
        removePill(pills.length - 1);
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      // Add pill on blur if there's input value
      if (inputValue.trim()) {
        addPill();
      }
    };

    const actualState = disabled ? "disabled" : isFocused ? "focus" : state;

    const inputContainerClasses = [
      styles.inputContainer,
      styles[`size-${size}`],
      styles[`state-${actualState}`],
      {
        [styles.disabled]: disabled,
      },
    ].filter(Boolean);

    const pillInputClasses = combineClassNames(styles.pillInput, sxClassName);

    // Generate pill removal instructions for screen readers
    const pillInstructions =
      pills.length > 0
        ? `, ${pills.length} pill${
            pills.length === 1 ? "" : "s"
          } added. Use backspace to remove the last pill, or click the close button on individual pills.`
        : "";

    return (
      <div className={pillInputClasses} style={sxStyle}>
        {/* Label */}
        {showLabel && label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          className={inputContainerClasses.join(" ")}
          role="group"
          aria-labelledby={label ? `${inputId}-label` : undefined}
          aria-describedby={describedBy || undefined}
        >
          {pills.length > 0 && (
            <div
              className={styles.pillsContainer}
              id={pillsContainerId}
              role="list"
              aria-label={`Added pills: ${pills.join(", ")}`}
            >
              {pills.map((pill, index) => (
                <div key={`${pill}-${index}`} role="listitem">
                  <Pill
                    size={pillSize}
                    closable
                    onClose={() => removePill(index)}
                    disabled={disabled}
                    className={styles.pill}
                    ariaLabel={`Remove pill: ${pill}`}
                  >
                    {pill}
                  </Pill>
                </div>
              ))}
            </div>
          )}
          <div className={styles.inputWrapper}>
            <input
              ref={ref}
              type="text"
              value={inputValue}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readonly}
              required={required}
              name={name}
              id={inputId}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={styles.input}
              aria-label={
                ariaLabel || `${label || "Pill input"}${pillInstructions}`
              }
              aria-describedby={describedBy || undefined}
              aria-controls={ariaControls}
              aria-haspopup={ariaHasPopup}
              aria-expanded={ariaExpanded}
              aria-pressed={ariaPressed}
              aria-invalid={!!error}
              aria-required={required}
              aria-multiline="false"
              tabIndex={tabIndex}
            />
          </div>
        </div>

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

        {/* Screen reader instructions */}
        <div className="sr-only" aria-live="polite">
          {pills.length > 0
            ? `${pills.length} pill${
                pills.length === 1 ? "" : "s"
              } added. Press Enter or comma to add more, backspace to remove the last pill.`
            : "Type to add pills. Press Enter or comma to add a pill."}
        </div>
      </div>
    );
  }
);

PillInput.displayName = "PillInput";
