import * as React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface AutocompleteOption {
    value: string;
    label: string;
    icon?: string;
}
export interface AutocompleteProps extends WithSxProps {
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
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
}
export declare const Autocomplete: React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLInputElement>>;
