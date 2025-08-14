import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./DatePicker.module.scss";
import type { DatePickerProps } from "./types";
import { Calendar } from "../Calendar/Calendar";
import { Input } from "../Input/Input";
import { combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

export const DatePicker: React.FC<DatePickerProps> = ({
  label = "Date picker",
  required = false,
  placeholder = "Pick a date",
  value: controlledValue,
  defaultValue = null,
  minDate,
  maxDate,
  disabled = false,
  open: controlledOpen,
  highlightWeekends = true,
  dateFormat = "MM/dd/yyyy",
  showOnFocus = true,
  closeOnSelect = true,
  showToday = true,
  className = "",
  name,
  error = false,
  errorMessage,
  onChange,
  onOpenChange,
  onInputChange,
}) => {
  const { isDark } = useTheme();
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue);
  const [internalOpen, setInternalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue;
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  // Format date for display
  const formatDate = useCallback((date: Date | null): string => {
    if (!date) return "";

    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }, []);

  // Parse date from input
  const parseDate = useCallback((value: string): Date | null => {
    if (!value) return null;

    const parts = value.split("/");
    if (parts.length !== 3) return null;

    const month = parseInt(parts[0]) - 1;
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
      return null; // Invalid date
    }

    const date = new Date(year, month, day);
    if (
      date.getMonth() !== month ||
      date.getDate() !== day ||
      date.getFullYear() !== year
    ) {
      return null; // Invalid date
    }

    return date;
  }, []);

  // Update internal value
  const updateValue = useCallback(
    (newValue: Date | null) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }

      setInputValue(formatDate(newValue));
      onChange?.(newValue);
    },
    [controlledValue, formatDate, onChange]
  );

  // Handle input change
  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      onInputChange?.(value);

      const parsedDate = parseDate(value);
      if (parsedDate) {
        updateValue(parsedDate);
      }
    },
    [parseDate, updateValue, onInputChange]
  );

  // Handle input focus and click to open calendar
  const handleInputFocus = useCallback(() => {
    if (!disabled) {
      if (controlledOpen === undefined) {
        setInternalOpen(true);
      }
      onOpenChange?.(true);
    }
  }, [disabled, controlledOpen, onOpenChange]);

  // Handle date selection
  const handleDateSelect = useCallback(
    (date: Date) => {
      console.log("Date selected:", date);
      console.log("Current isOpen state:", isOpen);

      updateValue(date);

      // Always close calendar when date is selected
      console.log("Closing calendar...");
      if (controlledOpen === undefined) {
        setInternalOpen(false);
        console.log("Set internalOpen to false");
      }
      onOpenChange?.(false);
      console.log("Called onOpenChange(false)");

      inputRef.current?.focus();
    },
    [updateValue, controlledOpen, onOpenChange, isOpen]
  );

  // Handle month change
  const handleMonthChange = useCallback((date: Date) => {
    // This will be handled by the Calendar component
  }, []);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, controlledOpen, onOpenChange]);

  // Initialize input value
  useEffect(() => {
    setInputValue(formatDate(currentValue));
  }, [currentValue, formatDate]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, controlledOpen, onOpenChange]);

  const containerClasses = combineClassNames(
    styles.datePicker,
    error && styles.error,
    disabled && styles.disabled,
    className
  );

  // Determine input state based on props
  const getInputState = () => {
    if (disabled) return "disabled";
    if (error) return "error";
    return "enabled";
  };

  return (
    <div ref={containerRef} className={containerClasses}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputContainer}>
        <Input
          ref={inputRef}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          disabled={disabled}
          name={name}
          readonly={false}
          required={required}
          state={getInputState()}
          size="md"
          variant="default"
          rightIcon="none"
          className={styles.dateInput}
          data-theme={isDark ? "dark" : "light"}
        />
      </div>

      {error && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}

      {isOpen && (
        <div className={styles.calendarWrapper}>
          <Calendar
            date={currentValue || new Date()}
            selectedDate={currentValue || undefined}
            onDateSelect={(date) => {
              console.log("Calendar onDateSelect called with:", date);
              handleDateSelect(date);
            }}
            onMonthChange={handleMonthChange}
            showNavigation={true}
            showDayLabels={true}
            showOutsideDates={true}
            size="md"
            className={styles.calendar}
          />
        </div>
      )}
    </div>
  );
};
