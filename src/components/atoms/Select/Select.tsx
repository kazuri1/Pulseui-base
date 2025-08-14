import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Icon } from "../Icon";
import { ExpandMore, ExpandLess } from "../Icon/IconSet";
import styles from "./Select.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends WithSxProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      id,
      name,
      value,
      defaultValue,
      options,
      placeholder = "Select an option",
      disabled = false,
      required = false,
      error,
      size = "md",
      label,
      onChange,
      onFocus,
      onBlur,
      className = "",
      sx,
      style,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
      sx,
      style,
      className
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const selectedOption = options.find(
      (option) => option.value === currentValue
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      if (isOpen && options.length > 0) {
        setFocusedIndex(0);
      }
    }, [isOpen, options.length]);

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        if (!isOpen) {
          buttonRef.current?.focus();
        }
      }
    };

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;

      const newValue = option.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(false);
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          if (isOpen && focusedIndex >= 0 && focusedIndex < options.length) {
            handleSelect(options[focusedIndex]);
          } else {
            handleToggle();
          }
          break;
        case "Escape":
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex((prev) =>
              prev < options.length - 1 ? prev + 1 : 0
            );
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex((prev) =>
              prev > 0 ? prev - 1 : options.length - 1
            );
          }
          break;
      }
    };

    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${selectId}-error` : undefined;

    const containerClasses = combineClassNames(
      styles.selectContainer,
      sxClassName
    );

    return (
      <div className={containerClasses} style={sxStyle}>
        {label && (
          <label
            htmlFor={selectId}
            className={`
              ${styles.label}
              ${styles[`size-${size}`]}
              ${disabled ? styles.disabled : ""}
            `}
          >
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.selectWrapper} ref={dropdownRef}>
          <button
            ref={buttonRef}
            id={selectId}
            name={name}
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-describedby={errorId}
            aria-invalid={!!error}
            disabled={disabled}
            className={`
              ${styles.selectButton}
              ${styles[`size-${size}`]}
              ${isOpen ? styles.open : ""}
              ${error ? styles.error : ""}
              ${disabled ? styles.disabled : ""}
            `}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <span className={styles.selectValue}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <Icon
              icon={isOpen ? ExpandLess : ExpandMore}
              size={size === "sm" ? "xs" : size === "lg" ? "sm" : "sm"}
              color="inherit"
              className={styles.selectIcon}
            />
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              <ul
                className={styles.optionsList}
                role="listbox"
                aria-label={label || "Options"}
              >
                {options.map((option, index) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={option.value === currentValue}
                    className={`
                      ${styles.option}
                      ${styles[`size-${size}`]}
                      ${option.value === currentValue ? styles.selected : ""}
                      ${option.disabled ? styles.disabled : ""}
                      ${index === focusedIndex ? styles.focused : ""}
                    `}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {error && (
          <div
            id={errorId}
            className={`
              ${styles.errorMessage}
              ${styles[`size-${size}`]}
            `}
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
