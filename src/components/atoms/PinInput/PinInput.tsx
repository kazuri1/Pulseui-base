import React, { useState, useRef, useEffect } from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
import styles from "./PinInput.module.scss";
import { useTheme } from "../../../contexts/ThemeContext";

export interface PinInputProps extends WithSxProps {
  /** Input label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Caption text below the input */
  caption?: string;
  /** Error message to display */
  error?: string;
  /** Input value */
  value?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Callback fired when input value changes */
  onChange?: (value: string) => void;
  /** Callback fired when input is focused */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Number of PIN digits (default: 4) */
  length?: number;
  /** Whether to mask the PIN input (default: true) */
  mask?: boolean;
  /** Input size */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether the input is readonly */
  readonly?: boolean;
}

export const PinInput: React.FC<PinInputProps> = ({
  label,
  required = false,
  caption,
  error,
  value = "",
  disabled = false,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = "",
  length = 4,
  mask = true,
  size = "md",
  readonly = false,
  sx,
  style,
}) => {
  const { isDark } = useTheme();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleInputChange = (index: number, inputValue: string) => {
    // Only allow single digit
    const digit = inputValue.replace(/\D/g, "").slice(0, 1);

    if (digit) {
      // Update the value
      const newValue = value.split("");
      newValue[index] = digit;
      const result = newValue.join("");

      if (onChange) {
        onChange(result);
      }

      // Move to next input if available
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !value[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (
    index: number,
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setFocusedIndex(index);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (
    index: number,
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setFocusedIndex(-1);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text").replace(/\D/g, "");
    const limitedData = pastedData.slice(0, length);

    if (onChange) {
      onChange(limitedData);
    }

    // Focus the next empty input or the last input
    const nextIndex = Math.min(limitedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const getDisplayValue = (index: number) => {
    const char = value[index] || "";
    return mask && char ? "•" : char;
  };

  return (
    <div className={`${styles.pinInput} ${className}`} style={style}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputContainer}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={getDisplayValue(index)}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onFocus={(e) => handleFocus(index, e)}
            onBlur={(e) => handleBlur(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            name={name ? `${name}-${index}` : undefined}
            id={id ? `${id}-${index}` : undefined}
            className={`${styles.digitInput} ${styles[size]} ${
              focusedIndex === index ? styles.focused : ""
            } ${error ? styles.error : ""}`}
            autoComplete="one-time-code"
            data-theme={isDark ? "dark" : "light"}
          />
        ))}
      </div>

      {(caption || error) && (
        <div className={styles.footer}>
          {caption && !error && (
            <span className={styles.caption}>{caption}</span>
          )}
          {error && (
            <div className={styles.errorMessage}>
              <span>{error}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

PinInput.displayName = "PinInput";
