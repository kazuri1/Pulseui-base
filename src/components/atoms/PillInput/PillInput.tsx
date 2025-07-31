import React, { forwardRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Input } from "../Input/Input";
import { Pill } from "../Pill/Pill";
import styles from "./PillInput.module.scss";

export interface PillInputProps {
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
  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const PillInput = forwardRef<HTMLInputElement, PillInputProps>(
  (
    {
      pills = [],
      placeholder = "Add tags...",
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
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

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

    return (
      <div className={`${styles.pillInput} ${className}`}>
        <div className={inputContainerClasses.join(" ")}>
          {pills.length > 0 && (
            <div className={styles.pillsContainer}>
              {pills.map((pill, index) => (
                <Pill
                  key={`${pill}-${index}`}
                  size={pillSize}
                  closable
                  onClose={() => removePill(index)}
                  disabled={disabled}
                  className={styles.pill}
                >
                  {pill}
                </Pill>
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
              id={id}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={styles.input}
            />
          </div>
        </div>
      </div>
    );
  }
);

PillInput.displayName = "PillInput";
