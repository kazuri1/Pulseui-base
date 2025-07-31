import React, { forwardRef, useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { Input } from "../Input/Input";
import { Icon } from "../Icon/Icon";
import { ArrowDropDown } from "../Icon/IconSet";
import styles from "./Autocomplete.module.scss";

export interface AutocompleteOption {
  value: string;
  label: string;
  icon?: string;
}

export interface AutocompleteProps {
  /** Array of options to display */
  options: AutocompleteOption[];
  /** Current value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input variant style */
  variant?: "default" | "filled" | "unstyled";
  /** Input size */
  size?: "sm" | "md" | "lg" | "xl";
  /** Input state */
  state?: "enabled" | "focus" | "typing" | "filled" | "disabled" | "error";
  /** Disabled state */
  disabled?: boolean;
  /** Readonly state */
  readonly?: boolean;
  /** Required field */
  required?: boolean;
  /** Whether to show the dropdown arrow */
  showArrow?: boolean;
  /** Maximum number of suggestions to show */
  maxSuggestions?: number;
  /** Whether to filter options based on input */
  filterOptions?: boolean;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when an option is selected */
  onSelect?: (option: AutocompleteOption) => void;
  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options = [],
      value = "",
      placeholder = "Select an option...",
      variant = "default",
      size = "md",
      state = "enabled",
      disabled = false,
      readonly = false,
      required = false,
      showArrow = true,
      maxSuggestions = 10,
      filterOptions = true,
      onChange,
      onSelect,
      className = "",
      name,
      id,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter options based on input value
    const filteredOptions = filterOptions
      ? options.filter(
          (option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.value.toLowerCase().includes(inputValue.toLowerCase())
        )
      : options;

    const visibleOptions = filteredOptions.slice(0, maxSuggestions);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setIsOpen(true);
      setHighlightedIndex(-1);
      onChange?.(newValue);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "Enter") {
          e.preventDefault();
          setIsOpen(true);
          setHighlightedIndex(0);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < visibleOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : visibleOptions.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && visibleOptions[highlightedIndex]) {
            selectOption(visibleOptions[highlightedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    // Select an option
    const selectOption = (option: AutocompleteOption) => {
      setInputValue(option.label);
      setIsOpen(false);
      setHighlightedIndex(-1);
      onChange?.(option.value);
      onSelect?.(option);
    };

    // Handle focus
    const handleFocus = () => {
      setIsFocused(true);
      if (!disabled && !readonly) {
        setIsOpen(true);
      }
    };

    // Handle blur
    const handleBlur = () => {
      setIsFocused(false);
      // Delay closing to allow for option selection
      setTimeout(() => {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }, 150);
    };

    // Handle option click
    const handleOptionClick = (option: AutocompleteOption) => {
      selectOption(option);
    };

    // Handle dropdown arrow click
    const handleArrowClick = () => {
      if (!disabled && !readonly) {
        setIsOpen(!isOpen);
        if (!isOpen) {
          setHighlightedIndex(0);
        }
      }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Update input value when prop changes
    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const actualState = disabled ? "disabled" : isFocused ? "focus" : state;

    return (
      <div className={`${styles.autocomplete} ${className}`}>
        <div className={styles.inputContainer}>
          <Input
            ref={ref}
            value={inputValue}
            placeholder={placeholder}
            variant={variant}
            size={size}
            state={actualState}
            disabled={disabled}
            readonly={readonly}
            required={required}
            name={name}
            id={id}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={styles.input}
          />
          {showArrow && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={handleArrowClick}
              disabled={disabled}
              aria-label="Toggle dropdown"
            >
              <Icon
                icon={ArrowDropDown}
                size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
                className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}
              />
            </button>
          )}
        </div>

        {isOpen && visibleOptions.length > 0 && (
          <div ref={dropdownRef} className={styles.dropdown}>
            <div className={styles.optionsList}>
              {visibleOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={`${styles.option} ${
                    index === highlightedIndex ? styles.highlighted : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.icon && (
                    <span className={styles.optionIcon}>{option.icon}</span>
                  )}
                  <span className={styles.optionLabel}>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {isOpen && visibleOptions.length === 0 && (
          <div ref={dropdownRef} className={styles.dropdown}>
            <div className={styles.noOptions}>
              <span>No options found</span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = "Autocomplete";
