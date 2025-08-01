import React from "react";
import styles from "./Textarea.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface TextareaProps extends WithSxProps {
  /** Textarea label */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Textarea placeholder text */
  placeholder?: string;
  /** Caption text below the textarea */
  caption?: string;
  /** Textarea value */
  value?: string;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Textarea name attribute */
  name?: string;
  /** Textarea id attribute */
  id?: string;
  /** Number of rows to display */
  rows?: number;
  /** Whether textarea can be resized */
  resizable?: boolean;
  /** Callback fired when textarea value changes */
  onChange?: (value: string) => void;
  /** Callback fired when textarea is focused */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback fired when textarea loses focus */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  required = false,
  placeholder,
  caption,
  value,
  disabled = false,
  name,
  id,
  rows = 4,
  resizable = true,
  onChange,
  onFocus,
  onBlur,
  className = "",
  sx,
  style,
}) => {
  const textareaId =
    id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
  };

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const textareaClasses = combineClassNames(
    styles.textarea,
    !resizable && styles.noResize,
    disabled && styles.disabled,
    sxClassName
  );

  const containerClasses = combineClassNames(
    styles.root,
    disabled && styles.disabled,
    sxClassName
  );

  return (
    <div className={containerClasses} style={sxStyle}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={textareaClasses}
      />

      {caption && (
        <div className={styles.footer}>
          <span className={styles.caption}>{caption}</span>
        </div>
      )}
    </div>
  );
};
