import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
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
    /** Error message to display */
    error?: string;
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
export declare const Textarea: React.FC<TextareaProps>;
